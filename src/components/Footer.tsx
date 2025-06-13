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

/**
 * @component Footer
 * @description Renders the main site footer modeled after the CharacterStrong website. It includes organization contact info, 
 *              curriculum tiers (Tier 1, 2, and 3), support resources, and navigation links. It is fully responsive and includes
 *              hover effects and a styled "Contact Us" button.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The structured and responsive site footer
 */

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

              <Anchor href="https://help-center.characterstrong.com/help-center" color="black" className="footer-link">Help-Center</Anchor>
              <Anchor href="https://characterstrong.com/privacy-policy/" color="black" className="footer-link">Privacy Policy</Anchor>
              <Anchor href="https://www.characterstrong.com/careers" color="black" className="footer-link">Careers</Anchor>

              <Button
                variant="outline"
                color="red"
                radius="xl"
                size="md"
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
              <Anchor href="https://characterstrong.com/purposefull-people/" color="black" className="footer-link">Elementary</Anchor>
              <Anchor href="https://characterstrong.com/middle-school-curriculum/" color="black" className="footer-link">Middle School</Anchor>
              <Anchor href="https://characterstrong.com/high-school-curriculum/" color="black" className="footer-link">High School</Anchor>
              <Anchor href="https://characterstrong.com/curriculum-readiness-training/" color="black" className="footer-link">Curriculum Readiness Training</Anchor>
              <Anchor href="https://characterstrong.com/brain-and-behavior-training/" color="black" className="footer-link">Brain and Behavior Training</Anchor>
              <Anchor href="https://characterstrong.com/on-demand-professional-development/" color="black" className="footer-link">On Demand PD</Anchor>
            </Stack>
          </Grid.Col>

          {/* Tier 2 */}
          <Grid.Col span={6} md={2}>
            <Stack spacing={6}>
              <Text fw={700}>Tier 2</Text>
              <Anchor href="https://characterstrong.com/tier2/elementary/" color="black" className="footer-link">Elementary</Anchor>
              <Anchor href="https://characterstrong.com/tier2/middle-school/" color="black" className="footer-link">Middle School</Anchor>
              <Anchor href="https://characterstrong.com/tier2/high-school/" color="black" className="footer-link">High School</Anchor>
              <Anchor href="https://characterstrong.com/tier-2-certification" color="black" className="footer-link">Tier 2 Certification</Anchor>
              <Anchor href="https://characterstrong.com/tier-2-training/" color="black" className="footer-link">Tier 2 Training</Anchor>
            </Stack>
          </Grid.Col>

          {/* Tier 3 */}
          <Grid.Col span={6} md={2}>
            <Stack spacing={6}>
              <Text fw={700}>Tier 3</Text>
              <Anchor href="https://characterstrong.com/tier3/elementary/" color="black" className="footer-link">Elementary</Anchor>
              <Anchor href="https://characterstrong.com/tier3/middle-school/" color="black" className="footer-link">Middle School</Anchor>
              <Anchor href="https://characterstrong.com/tier3/high-school/" color="black" className="footer-link">High School</Anchor>
              <Anchor href="https://characterstrong.com/tier3certification/" color="black" className="footer-link">Tier 3 Certification</Anchor>
              <Anchor href="https://characterstrong.com/tier-3-training/" color="black" className="footer-link">Tier 3 Training</Anchor>
            </Stack>
          </Grid.Col>

          {/* Supports */}
          <Grid.Col span={6} md={3}>
            <Stack spacing={6}>
              <Text fw={700}>Supports</Text>
              <Anchor href="https://characterstrong.com/nationalconference/" color="black" className="footer-link">The National Conference</Anchor>
              <Anchor href="https://characterstrong.com/regional-training/" color="black" className="footer-link">Regional Training</Anchor>
              <Anchor href="https://characterstrong.com/mtss-certification/" color="black" className="footer-link">MTSS Certification</Anchor>
              <Anchor href="https://characterstrong.com/mtss-implementation-packages/" color="black" className="footer-link">MTSS Implementation Packages</Anchor>
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

