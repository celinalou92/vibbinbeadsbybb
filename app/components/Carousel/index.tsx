import React, { useState } from 'react';
import { makeStyles } from '@mui/material';
import { Button, Card, CardActionArea, CardMedia } from '@mui/material';

const useStyles = makeStyles({
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
});

interface CarouselProps {
    slides: { image: string; link: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className={classes.carousel}>
            <Card className={classes.card}>
                <CardActionArea component="a" href={slides[currentSlide].link} target="_blank">
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={slides[currentSlide].image}
                        alt={`Slide ${currentSlide + 1}`}
                    />
                </CardActionArea>
            </Card>
            <div className={classes.navigation}>
                <Button variant="contained" color="primary" onClick={handlePrevSlide}>
                    Previous
                </Button>
                <Button variant="contained" color="primary" onClick={handleNextSlide}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Carousel;