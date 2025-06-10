import React, {useState} from "react";
import {Card, Text, Title, Divider, Button, Drawer, Stack} from "@mantine/core"
import { NCESSchoolFeatureAttributes } from "@utils/nces";


interface SchoolCardProps {
    school: NCESSchoolFeatureAttributes;
}

const SchoolCard = ({school}: SchoolCardProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Drawer 
                opened={opened}
                onClose={() => setOpened(false)}
                title={school.NAME}
                padding="md"
                position="left"
                size="md">
                    <Stack spacing="xs">
                        <Text><strong>LEAID:</strong> {school.LEAID}</Text>
                        <Text><strong>Locale:</strong> {school.LOCALE}</Text>
                        <Text><strong>County:</strong> {school.NMCNTY}</Text>
                        <Text><strong>Address:</strong> {school.STREET}, {school.CITY}, {school.STATE} {school.ZIP}</Text>
                        <Text><strong>Latitude:</strong> {school.LAT}</Text>
                        <Text><strong>Longitude:</strong> {school.LON}</Text>
                    </Stack>
            </Drawer>

            <Card withBorder radius="md" shadow="sm">
                <Title order={4}>{school.NAME}</Title>
                <Text>{school.STREET}</Text>
                <Text>{school.CITY}, {school.STATE} {school.ZIP}</Text>
                <Divider my="sm" />
                <Button mt="md" onClick={() => setOpened(true)}>More Info</Button>
            </Card>
        </>
        
    )
}

export default SchoolCard;




