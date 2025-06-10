
import React, { useState } from "react";
import {
  Container,
  Title,
  Loader,
  Stack,
  Card,
  Text,
  Divider,
} from "@mantine/core";
import SearchBar from "@components/SearchBar";
import {
  searchSchoolDistricts,
  searchSchools,
  NCESDistrictFeatureAttributes,
  NCESSchoolFeatureAttributes,
} from "@utils/nces";

const Home = () => {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("school");
  const [districtSearch, setDistrictSearch] = useState<NCESDistrictFeatureAttributes[]>([]);
  const [schoolSearch, setSchoolSearch] = useState<NCESSchoolFeatureAttributes[]>([]);

  const handleSearch = async () => {
    setSearching(true);

    try {
      if (searchType === "district") {
        const results = await searchSchoolDistricts(query);
        setDistrictSearch(results);
        setSchoolSearch([]);
      } else {
        const results = await searchSchools(query);
        setSchoolSearch(results);
        setDistrictSearch([]);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }

    setSearching(false);
  };

  return (
    <Container size="md" pt={60}>
      <Stack spacing="xl">
        <Title align="center">School Finder</Title>

        <SearchBar
          query={query}
          setQuery={setQuery}
          searchType={searchType}
          setSearchType={setSearchType}
          onSearch={handleSearch}
        />

        {searching && <Loader size="sm" />}

        {districtSearch.map((district, index) => (
          <Card key={index} shadow="sm" withBorder>
            <Title order={4}>{district.NAME}</Title>
            <Text>{district.LCITY}, {district.LSTATE} {district.LZIP}</Text>
            <Divider my="sm" />
            <Text size="sm">LEAID: {district.LEAID}</Text>
          </Card>
        ))}

        {schoolSearch.map((school, index) => (
          <Card key={index} shadow="sm" withBorder>
            <Title order={4}>{school.NAME}</Title>
            <Text>{school.CITY}, {school.STATE} {school.ZIP}</Text>
            <Divider my="sm" />
            <Text size="sm">LEAID: {school.LEAID}</Text>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
