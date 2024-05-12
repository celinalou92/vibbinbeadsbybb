import { Stack, Typography } from "@mui/material";
import BasicMasonry from "../BasicMasonary";

const itemData = [
    {
        image: '/images/Vibbin_Beads.png',
        text: 'Creative Babe Market',
        buttonText: 'Read More',
        date: 'December 12, 2023'
    },
    {
        image: '/images/Vibbin_Beads.png',
        text: 'Creative Babe Market',
        buttonText: 'Read More',
        date: 'December 12, 2023'
    },
]

const FindUs = () => {
    return (
        <Stack>
            <Typography 
            variant="h1" 
            color="text.secondary"
            >
                Find Us
            </Typography>
            <BasicMasonry 
            itemData={itemData}
            />
        </Stack>
    );
};

export default FindUs;