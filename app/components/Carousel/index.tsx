'use client'
import React, { useState } from 'react';
import { CardActionArea, Stack, Button, Card, CardMedia, Slide, CardContent } from '@mui/material';

const caroselStyles = {
    carousel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        maxWidth: '600px',
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

const slides = [
    {
        image: "images/Vibbin_Beads.png",
        link: ""
    },
    {
        image: "images/Vibbin_Beads.png",
        link: ""
    },
    {
        image: "images/Vibbin_Beads.png",
        link: ""
    },
]

const Carousel = () => {
    const containerRef = React.useRef<HTMLElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        console.log(slides[currentSlide].image)
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        console.log(slides[currentSlide].image)
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <Card component="div" sx={{
            ...caroselStyles.card
        }}
            ref={containerRef as React.RefObject<HTMLDivElement>}
        >
            <Slide container={containerRef.current} direction="right" in={true} mountOnEnter unmountOnExit>
                {/* <CardActionArea
                        component="a"
                        href={slides[currentSlide].link}
                        target="_blank"> */}
                <CardMedia
                    height={200}
                    sx={{ ...caroselStyles.cardMedia }}
                    component="img"
                    image={slides[currentSlide].image}
                    alt={`Slide ${currentSlide + 1}`}
                />
                {/* </CardActionArea> */}
            </Slide>
            <CardContent>
                <Button variant="contained" color="secondary" onClick={handlePrevSlide}>
                    Previous
                </Button>
                <Button variant="contained" color="secondary" onClick={handleNextSlide}>
                    Next
                </Button>
            </CardContent>
        </Card>
    );
};

export default Carousel;