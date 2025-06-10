
import React, { useState } from "react";
import {
  Container,
  Title,
  Loader,
  Stack,
  Card,
  Text,
  Divider,
  Box
} from "@mantine/core";
import SearchBar from "@components/SearchBar";
import SchoolCard from "@components/SchoolCard";
import DistrictCard from "@components/DistrictCard";
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

  const clearSearch = () => {
        setQuery("");
        setSearchType("school");
        setSchoolSearch([]);
        setDistrictSearch([]);
        };

    const handleViewSchools = async (districtLEAID: string) => {
        setSearching(true);
        try {
            const results = await searchSchools("", districtLEAID);
            setSchoolSearch(results);
            setDistrictSearch([]);
        } catch (err) {
            console.error("Failed to find schools:", err);
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
          onClear={clearSearch}
        />

        {searching && <Loader size="sm" />}

        {districtSearch.map((district, index) => (
            <DistrictCard
                key={index}
                district={district}
                onViewSchools={handleViewSchools}
            />
        ))}

        {schoolSearch.map((school, index) => (
          <SchoolCard key={index} school={school} />
        ))}

        {!searching && districtSearch.length === 0 && schoolSearch.length === 0 && query !== "" && (
          <Box>
            <Text align="center" color="dimmed">
              No results found.
            </Text>
          </Box>
        )}

      </Stack>
    </Container>
  );
};

export default Home;
