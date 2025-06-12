import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Anchor,
  Button,
  Image,
  Group,
} from "@mantine/core";

const Footer = () => {
  return (
    <Box bg="gray.1" py="xl" mt="xl" style={{ borderTop: "1px solid #e6e6e6" }}>
      <Container size="xl">
        <Grid gutter="xl">
          {/* Column 1 - Logo + Contact */}
          <Grid.Col span={12} md={3}>
            <Stack spacing="xs">
              <Image src="src/header_logo.png" alt="CharacterStrong Logo" w={160} />

              <Text fw={700}>Headquarters</Text>
              <Text size="sm">
                1402 Lake Tapps PKWY SE<br />
                Ste F104 #128<br />
                Auburn, WA 98092<br />
                (253) 234-7043
              </Text>

              <Anchor href="#">Help-Center</Anchor>
              <Anchor href="#">Privacy Policy</Anchor>
              <Anchor href="#">Careers</Anchor>

              <Button
                variant="outline"
                color="red"
                radius="xl"
                size="sm"
                mt="md"
                style={{ width: "fit-content" }}
              >
                Contact Us
              </Button>
            </Stack>
          </Grid.Col>

          {/* Tier 1 */}
          <Grid.Col span={6} md={2}>
            <Stack spacing={6}>
              <Text fw={700}>Tier 1</Text>
              <Anchor href="#">Elementary</Anchor>
              <Anchor href="#">Middle School</Anchor>
              <Anchor href="#">High School</Anchor>
              <Anchor href="#">Curriculum Readiness Training</Anchor>
              <Anchor href="#">Brain and Behavior Training</Anchor>
              <Anchor href="#">On Demand PD</Anchor>
            </Stack>
          </Grid.Col>

          {/* Tier 2 */}
          <Grid.Col span={6} md={2}>
            <Stack spacing={6}>
              <Text fw={700}>Tier 2</Text>
              <Anchor href="#">Elementary</Anchor>
              <Anchor href="#">Middle School</Anchor>
              <Anchor href="#">High School</Anchor>
              <Anchor href="#">Tier 2 Certification</Anchor>
              <Anchor href="#">Tier 2 Training</Anchor>
            </Stack>
          </Grid.Col>

          {/* Tier 3 */}
          <Grid.Col span={6} md={2}>
            <Stack spacing={6}>
              <Text fw={700}>Tier 3</Text>
              <Anchor href="#">Elementary</Anchor>
              <Anchor href="#">Middle School</Anchor>
              <Anchor href="#">High School</Anchor>
              <Anchor href="#">Tier 3 Certification</Anchor>
              <Anchor href="#">Tier 3 Training</Anchor>
            </Stack>
          </Grid.Col>

          {/* Supports */}
          <Grid.Col span={6} md={3}>
            <Stack spacing={6}>
              <Text fw={700}>Supports</Text>
              <Anchor href="#">The National Conference</Anchor>
              <Anchor href="#">Regional Training</Anchor>
              <Anchor href="#">MTSS Certification</Anchor>
              <Anchor href="#">MTSS Implementation Packages</Anchor>
            </Stack>
          </Grid.Col>
        </Grid>

        <Group position="apart" mt="xl">
          <Text size="xs" color="dimmed">
            © {new Date().getFullYear()} CharacterStrong Replica. All rights reserved.
          </Text>
           <Text size="sm" color="dimmed">
            Made with ❤️ by Matthew Folefac
          </Text>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;

