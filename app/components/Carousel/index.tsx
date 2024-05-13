'use client'
import React, { useState } from 'react';
import { Button, Card, CardMedia, Slide, CardContent, IconButton } from '@mui/material';
import { images } from '@/app/data/index';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const Carousel = () => {
    const containerRef = React.useRef<HTMLElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = images.products;

    const getSlidesFromProducts = (products: Product[]): Slide[] => {
        return products.map((product) => {
            return {
                image: product.image,
                link: product.link
            };
        });
    };

    const slides = getSlidesFromProducts(products)

    const handleNextSlide = () => {
        console.log(slides[currentSlide].image)
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        console.log(slides[currentSlide].image)
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <Card component="div" elevation={0} sx={{
            ...caroselStyles.card,
            position: "relative",
        }}
            ref={containerRef as React.RefObject<HTMLDivElement>}
        >
            <Slide container={containerRef.current} direction="right" in={true} mountOnEnter unmountOnExit>
                <CardMedia
                    sx={{
                        ...caroselStyles.cardMedia,
                    }}
                    component="img"
                    image={slides[currentSlide].image}
                    alt={`Slide ${currentSlide + 1}`}
                />
            </Slide>
            <CardContent>
                <IconButton
                    sx={{
                        ...caroselStyles.navigation,
                        position: "absolute",
                        zIndex: 1,
                        top: '50%',
                        left: '0',
                    }}
                    color="secondary"
                    onClick={handlePrevSlide}
                >
                    <ArrowBackIcon />
                </IconButton>
                <IconButton
                    sx={{
                        ...caroselStyles.navigation,
                        position: "absolute",
                        zIndex: 1,
                        top: '50%',
                        right: '0',
                    }}
                    color="secondary"
                    onClick={handleNextSlide}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default Carousel;