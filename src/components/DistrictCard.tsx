import React from 'react';
import {Card, Title, Text, Button, Divider} from "@mantine/core"
import { NCESDistrictFeatureAttributes } from '@utils/nces';

interface DistrictCardProps {
  district: NCESDistrictFeatureAttributes;
  onViewSchools: (LEAID: string) => void;
}

const DistrictCard = ({ district, onViewSchools }: DistrictCardProps) => {
  return (
    <Card withBorder radius="md" shadow="sm">
      <Title order={4}>{district.NAME}</Title>
      <Text>{district.LSTREE}</Text>
      <Text>{district.LCITY}, {district.LSTATE} {district.LZIP}</Text>
      <Divider my="sm" />
      <Text size="sm" color="dimmed">LEAID: {district.LEAID}</Text>
      <Button mt="md" onClick={() => onViewSchools(district.LEAID)}>
        View Schools in District
      </Button>
    </Card>
  );
};

export default DistrictCard;
