import React from "react";
import { Box, TextInput, Select, Button, Stack } from "@mantine/core";

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
  searchType: string;
  setSearchType: (val: string) => void;
  onSearch: () => void;
}

const SearchBar = ({
  query,
  setQuery,
  searchType,
  setSearchType,
  onSearch,
}: SearchBarProps) => {
  return (
    <Box maw={400} mx="auto">
      <Stack spacing="sm">
        <TextInput
          label="Search"
          placeholder="Enter school or district name"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />

        <Select
          label="Search Type"
          value={searchType}
          onChange={(val) => val && setSearchType(val)}
          data={[
            { value: "school", label: "School" },
            { value: "district", label: "District" },
          ]}
        />

        <Button onClick={onSearch} fullWidth>
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
