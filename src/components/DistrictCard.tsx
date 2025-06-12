import React, {useState} from 'react';
import {Card, Title, Text, Button, Divider, Drawer, Stack} from "@mantine/core"
import { NCESDistrictFeatureAttributes , NCESSchoolFeatureAttributes, searchSchools} from '@utils/nces';
import SchoolCard from './SchoolCard';

interface DistrictCardProps {
  district: NCESDistrictFeatureAttributes;
}

const DistrictCard = ({ district}: DistrictCardProps) => {
  
    const [opened, setOpened] = useState(false);
    const [schools, setSchools] = useState<NCESSchoolFeatureAttributes[]>([]);
    const [loading, setLoading] = useState(false);

    const handleViewSchools = async () => {
    setOpened(true);
    setLoading(true);
    try {
      const result = await searchSchools("", district.LEAID);
      setSchools(result);
    } catch (err) {
      console.error("Failed to load schools:", err);
    }
    setLoading(false);
  };
  return (
    <>
        <Drawer 
            opened={opened}
            onClose={() => setOpened(false)}
            title={`Schools in ${district.NAME}`}
            padding="md"
            position="right"
            size="md"
            closeButtonProps={{color:'red'}}
            zIndex={1000}
            >
                {loading ? (
                    <Text>Loading...</Text>
                    ) : (
                    <Stack spacing="sm">
                        {schools.map((school, idx) => (
                        <SchoolCard key={idx} school={school} />
                        ))}
                        {schools.length === 0 && <Text>No schools found for this district.</Text>}
                    </Stack>
                    )}

        </Drawer>
        <Card withBorder radius="sm" shadow="xs" p="md" style={{width:"100%"}}>
            <Title order={4}>{district.NAME}</Title>
            <Text>{district.LSTREE}</Text>
            <Text>{district.LCITY}, {district.LSTATE} {district.LZIP}</Text>
            <Divider my="sm" />
            <Text size="sm" color="dimmed">LEAID: {district.LEAID}</Text>
            <Button mt="md" onClick={handleViewSchools}>
                View Schools in District
            </Button>
        </Card>
        </>
  );
};

export default DistrictCard;
