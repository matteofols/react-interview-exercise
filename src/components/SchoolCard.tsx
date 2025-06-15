import React, {useState} from "react";
import {Card, Text, Title, Divider, Button, Drawer, Stack} from "@mantine/core"
import { NCESSchoolFeatureAttributes } from "@utils/nces";

/**
 * @component SchoolCard
 * @description Displays basic information about a school and allows users to view more details in a side drawer.
 * - Shows school name, address, and a "More Info" button.
 * - When the button is clicked, a drawer opens from the left displaying additional school metadata such as locale, county, and coordinates.
 * - Utilizes Mantine's Card, Drawer, and Stack components for layout and styling.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} A card component summarizing a single school
 */

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
                position="right"
                size="md"
                closeButtonProps={{color:'red'}}
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

            <Card withBorder radius="xl" shadow="md" p="md" style={{width:"100%"}}>
                <Title order={5}>{school.NAME}</Title>
                <Text>{school.STREET}</Text>
                <Text>{school.CITY}, {school.STATE} {school.ZIP}</Text>
                <Divider my="sm" />
                <Button mt="md" onClick={() => setOpened(true)}
                    styles={{
                        root: {
                        backgroundColor: "#1E7B75",
                        "&:hover": {
                            backgroundColor: "#18685F", // a darker variant for hover
                        },
                        },
                    }}>More Info</Button>
            </Card>
        </>
        
    )
}

export default SchoolCard;




