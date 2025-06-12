import React from "react";
import { Box, TextInput, Select, Button, Group, Stack} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
    const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box maw={500} mx="auto">
        {isMobile ? (
        // Stacked layout on mobile
        <Stack spacing="sm">
          <TextInput
            placeholder="Enter school or district"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter") onSearch();
            }}
            w="100%"
          />

          <Select
            value={searchType}
            onChange={(val) => val && setSearchType(val)}
            data={[
              { value: "school", label: "School" },
              { value: "district", label: "District" },
            ]}
            w="100%"
          />

          <Group grow>
            <Button onClick={onSearch}>Search</Button>
            <Button variant="outline" onClick={onClear}>Clear</Button>
          </Group>
        </Stack>
      ) : (
        <Box >
            <Group grow align="flex-end" noWrap spacing="sm" >
                <TextInput
                label="Search"
                placeholder="Enter school or district name"
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                w={260}
                style={{flexShrink: 0}}
                radius="xl"
                maw="15rem"
                />

                <Select
                label="Category"
                value={searchType}
                onChange={(val) => val && setSearchType(val)}
                data={[
                    { value: "school", label: "School" },
                    { value: "district", label: "District" },
                ]}
                w={160}
                style={{flexShrink: 0}}
                radius="xl"
                />

                
                <Button onClick={onSearch} radius="xl">Search</Button>
                <Button onClick={onClear} variant="outline" color="gray" radius="xl">
                    Clear
                </Button>
                </Group>
            </Box>
        )}
    </Box>
  );
};

export default SearchBar;
