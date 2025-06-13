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

/**
 * @component Home
 * @description The main landing page for the School Finder app. It includes:
 * - A title and search bar (with debounce),
 * - Search logic for either schools or districts using NCES/ArcGIS APIs,
 * - Display of search results (SchoolCard or DistrictCard),
 * - A responsive layout that shows a list on the left and a dynamic Google Map on the right,
 * - A fallback full-width map when no search has been performed.
 *
 * Uses Mantine UI components and hooks for layout and styling.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The complete Home page UI
 */

const Home = () => {
  // Tracks whether a search request is currently in progress to show a loading spinner
  const [searching, setSearching] = useState(false);

  // Stores the user's input from the search bar
  const [query, setQuery] = useState("");

  // Stores whether the user is searching for "school" or "district"
  const [searchType, setSearchType] = useState("school");

  // Holds the array of district search results (from the NCES API)
  const [districtSearch, setDistrictSearch] = useState<
    NCESDistrictFeatureAttributes[]
  >([]);

  // Holds the array of school search results (from the NCES API)
  const [schoolSearch, setSchoolSearch] = useState<
    NCESSchoolFeatureAttributes[]
  >([]);

  // Debounced value of the search query to reduce API calls while typing
  const [debouncedQuery] = useDebouncedValue(query, 300);

  const clearSearch = () => {
    setQuery("");
    setSearchType("school");
    setSchoolSearch([]);
    setDistrictSearch([]);
  };

  // Executes the appropriate search API call based on searchType
  const handleSearch = async () => {
    setSearching(true);

    try {
      if (searchType === "district") {
        const results = await searchSchoolDistricts(query);
        setDistrictSearch(results);
        setSchoolSearch([]);
      } else {
        // For schools, if selected
        const results = await searchSchools(query);
        setSchoolSearch(results);
        setDistrictSearch([]);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }

    setSearching(false);
  };

  // Triggers the search function after a short delay (debounce) if input is long enough
  useEffect(() => {
    if (debouncedQuery.length >= 4) {
      handleSearch();
    }
  }, [debouncedQuery, searchType]);

  return (
    <Container size="xl" pt={60}>
      <Stack spacing="xl">
        <Title align="center" mt={60} style={{ zIndex: 1 }}>
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
          <Grid gutter="xl" align="start" style={{zIndex: 1}}>
            {/* Left: Results */}
            <Col span={12} md={6}>
              {(schoolSearch.length > 0 || districtSearch.length > 0) && (
                <Text size="sm" color="black" mb="md" 
                style={{ 
                  zIndex: 2000,
                  fontWeight: 700
                 }}>
                  {/* Conditional logic for displaying district or schools */}
                  {schoolSearch.length > 0
                    ? `Now showing ${schoolSearch.length} school${
                        schoolSearch.length !== 1 ? "s" : ""
                      }`
                    : `Now showing ${districtSearch.length} district${
                        districtSearch.length !== 1 ? "s" : ""
                      }`}
                </Text>
              )}
              <Box
                style={{
                  maxHeight: "70vh",
                  overflowY: "auto",
                  paddingRight: "0.5rem",
                }}
              >
                <Stack spacing="md">
                  {/* Sticky banner showing count of current results */}
                  {/* Render either district cards or school cards */}
                  {districtSearch.map((district, index) => (
                    <DistrictCard key={index} district={district} />
                  ))}
                  {schoolSearch.map((school, index) => (
                    <SchoolCard key={index} school={school} />
                  ))}
                  {/* Fallback message for no results found */}
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
