'use client'
import React, { useState } from 'react';
import { Stack, makeStyles } from '@mui/material';
import { Button, Card, CardMedia } from '@mui/material';
import StyledCard from '../StyledCard';

const caroselStyles = {
    carousel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '600px',
        margin: '0 auto',
    },
    card: {
        height: '100%',
        width: '100%',
    },
    cardMedia: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
    },
};

interface CarouselProps {
    slides: { image: string; link: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
    const cardContent = {
        contentHeader: "Stay Thriving",
        contentText: "Lizards are a widespread group of squamate reptiles, ranging across all continents except Antarctica",
        cardMedia: "images/Vibbin_Beads.png"
    }

    return (
        <Stack>
            <StyledCard 
            contentHeader={cardContent.contentHeader} 
            contentText={cardContent.contentText} cardMedia={cardContent.cardMedia}
            />

            <Card sx={{...caroselStyles.card}}>
                {/* <CardActionArea component="a" href={slides[currentSlide].link} target="_blank"> */}
                    <CardMedia
                        sx={{...caroselStyles.cardMedia}}
                        component="img"
                        // image={slides[currentSlide].image}
                        // alt={`Slide ${currentSlide + 1}`}
                    />
                {/* </CardActionArea> */}
            </Card>
            <Stack sx={{...caroselStyles.navigation}}>
                <Button variant="contained" color="secondary" onClick={handlePrevSlide}>
                    Previous
                </Button>
                <Button variant="contained" color="secondary" onClick={handleNextSlide}>
                    Next
                </Button>
            </Stack>
        </Stack>
    );
};

export default Carousel;