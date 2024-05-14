import { Stack, Typography } from "@mui/material";
import BasicMasonry from "../BasicMasonary";

const itemData = [
    {
        image: '/images/love-works.jpeg',
        text: 'Love Works',
        buttonText: 'Read More',
        date: 'Febuary 10, 2024',
        time: '8am - 11:30am',
        location: 'Work Training Studio',
    },
    {
        image: '/images/creative-b.jpeg',
        text: 'Creative Babe Market',
        buttonText: 'Read More',
        date: 'December 2, 2023',
        time: '11am - 3pm',
        location: 'Coffee Dose Laguna Hills',
    },
    {
        image: '/images/714-market.jpeg',
        text: '714 Market',
        buttonText: 'Read More',
        date: 'November 25, 2023',
        time: '10am - 3pm',
        location: 'Work Training Studio',
    },
]

const FindUs = () => {
    return (
        <Stack marginY={4} justifyContent={"center"} alignItems={"center"}>
            <Typography 
            variant="h1" 
            >
                Find Us!
            </Typography>
            <Typography 
            variant="h2" 
            color="text.secondary"
            >
                Pop Ups
            </Typography>
            <br/>
            <BasicMasonry 
            itemData={itemData}
            />
        </Stack>
    );
};

export default FindUs;