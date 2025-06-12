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
                size="md"
                zIndex={1000}>
                    <Stack spacing="xs">
                        <Text><strong>Locale:</strong> {school.LOCALE}</Text>
                        <Text><strong>County:</strong> {school.NMCNTY}</Text>
                        <Text><strong>Address:</strong> {school.STREET}, {school.CITY}, {school.STATE} {school.ZIP}</Text>
                        <Text><strong>LEAID:</strong> {school.LEAID}</Text>
                        <Text><strong>Latitude:</strong> {school.LAT}</Text>
                        <Text><strong>Longitude:</strong> {school.LON}</Text>
                    </Stack>
            </Drawer>

            <Card withBorder radius="sm" shadow="xs" p="md" style={{width:"100%"}}>
                <Title order={5}>{school.NAME}</Title>
                <Text>{school.STREET}</Text>
                <Text>{school.CITY}, {school.STATE} {school.ZIP}</Text>
                <Divider my="sm" />
                <Button mt="md" onClick={() => setOpened(true)}>More Info</Button>
            </Card>
        </>
        
    )
}

export default SchoolCard;




