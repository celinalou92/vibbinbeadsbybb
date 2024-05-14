'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardMedia, Slide, CardContent, IconButton, MobileStepper, CardHeader, Typography } from '@mui/material';
import { images } from '@/app/data/index';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const caroselStyles = {
    card: {
        height: '100%',
        width: '100%',
    },
    cardMedia: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        height: '90%',
        width: '90%',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

const Carousel = () => {
    const containerRef = React.useRef<HTMLElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const products = images.products;

    //@ts-ignore
    const getSlidesFromProducts = (products: Product[]): Slide[] => {
        return products.map((product) => {
            return {
                image: product.image,
                name: product.product,
                link: product.link
            };
        });
    };

    const slides = getSlidesFromProducts(products);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
            }, 3000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isHovered]);

    return (
        <Card component="div" elevation={0} sx={{
            ...caroselStyles.card,
        }}
            ref={containerRef as React.RefObject<HTMLDivElement>}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Slide container={containerRef.current} direction="right" in={true} mountOnEnter unmountOnExit>
                <div>
                    <Typography variant="h5" textAlign={"center"}>
                        {slides[currentSlide].name}
                    </Typography>
                    <CardMedia
                        sx={{
                            ...caroselStyles.cardMedia,
                        }}
                        component="img"
                        image={slides[currentSlide].image}
                        alt={`Slide ${currentSlide + 1}`}
                    />
                </div>
            </Slide>
            <CardContent>
                <MobileStepper
                    variant="dots"
                    steps={6}
                    position="static"
                    activeStep={currentSlide}
                    sx={{ flexGrow: 1 }}
                    nextButton={
                        <IconButton
                            sx={{
                                ...caroselStyles.navigation
                            }}
                            color="secondary"
                            onClick={handleNextSlide}
                        >
                            <ArrowForwardIosIcon fontSize="medium" />
                        </IconButton>
                    }
                    backButton={
                        <IconButton
                            sx={{
                                ...caroselStyles.navigation,
                            }}
                            color="secondary"
                            onClick={handlePrevSlide}
                        >
                            <ArrowBackIosIcon fontSize="medium" />
                        </IconButton>
                    }
                />
            </CardContent>
        </Card>
    );
};

export default Carousel;
