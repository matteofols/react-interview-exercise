import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Loader,
  Stack,
  Text,
  Grid,
  Col,
  Box,
} from "@mantine/core";
import SearchBar from "@components/SearchBar";
import SchoolCard from "@components/SchoolCard";
import DistrictCard from "@components/DistrictCard";
import MapView from "@components/MapView";
import { useDebouncedValue } from "@mantine/hooks";
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

  const [debouncedQuery] = useDebouncedValue(query, 300);

  const clearSearch = () => {
    setQuery("");
    setSearchType("school");
    setSchoolSearch([]);
    setDistrictSearch([]);
  };

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

  useEffect(() => {
    if (debouncedQuery.length >= 4) {
      handleSearch();
    }
  }, [debouncedQuery, searchType]);


  return (
    <Container size="xl" pt={60}>
      <Stack spacing="xl">
        <Title align="center" mt={60}>
          School Finder
        </Title>

        <SearchBar
          query={query}
          setQuery={setQuery}
          searchType={searchType}
          setSearchType={setSearchType}
          onSearch={handleSearch}
          onClear={clearSearch}
        />

        {searching && <Loader size="sm" />}

        {schoolSearch.length > 0 || districtSearch.length > 0 ? (
          <Grid gutter="xl" align="start">
            {/* Left: Results */}
            <Col span={12} md={6}>
              <Box
                style={{
                  maxHeight: "70vh",
                  overflowY: "auto",
                  paddingRight: "0.5rem",
                }}
              >
                <Stack spacing="md">
                  {(schoolSearch.length > 0 || districtSearch.length > 0) && (
                    <Box
                        style={{
                            position: "sticky",
                            top: 0,
                            backgroundColor: "white",
                            zIndex: 1,
                            paddingBottom: "0.5rem",
                        }}
                        >
                        <Text size="sm" color="dimmed">
                            {schoolSearch.length > 0
                            ? `Now showing ${schoolSearch.length} school${schoolSearch.length !== 1 ? "s" : ""}`
                            : `Now showing ${districtSearch.length} district${districtSearch.length !== 1 ? "s" : ""}`}
                        </Text>
                        </Box>
                  )}

                  {districtSearch.map((district, index) => (
                    <DistrictCard
                      key={index}
                      district={district}
                    />
                  ))}
                  {schoolSearch.map((school, index) => (
                    <SchoolCard key={index} school={school} />
                  ))}
                  {!searching &&
                    districtSearch.length === 0 &&
                    schoolSearch.length === 0 &&
                    query !== "" && (
                      <Box>
                        <Text align="center" color="dimmed">
                          No results found.
                        </Text>
                      </Box>
                    )}
                </Stack>
              </Box>
            </Col>

            {/* Right: Map */}
            <Col span={12} md={6}>
              <MapView schools={schoolSearch} districts={districtSearch} />
            </Col>
          </Grid>
        ) : (
          // Full-width map before search
          <Box>
            <MapView schools={[]} districts={[]} />
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default Home;
