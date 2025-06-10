import React from "react";
import { Box, TextInput, Select, Button, Stack, Group } from "@mantine/core";

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
  searchType: string;
  setSearchType: (val: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchBar = ({
  query,
  setQuery,
  searchType,
  setSearchType,
  onSearch,
  onClear,
}: SearchBarProps) => {
  return (
    <Box maw={500} mx="auto">
      <Stack spacing="sm">
        <TextInput
          label="Search"
          placeholder="Enter school or district name"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          radius="md"
        />

        <Select
          label="Search Type"
          value={searchType}
          onChange={(val) => val && setSearchType(val)}
          data={[
            { value: "school", label: "School" },
            { value: "district", label: "District" },
          ]}
          radius="md"
        />

        <Group grow>
          <Button onClick={onSearch} radius="xl">
            Search
          </Button>
          <Button onClick={onClear} variant="outline" color="gray" radius="xl">
            Clear
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SearchBar;
