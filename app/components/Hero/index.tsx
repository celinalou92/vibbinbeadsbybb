"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import {images} from '@/app/data/index';
import DotDecorator from "../DotDecorator";

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));



    return (
        <Box display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={{ xs: 'column', sm: 'row' }}>
            <Box width={{ xs: '100%', sm: '60%' }} height={{ sm: '100%' }}>
                <CardMedia
                    component="img"
                    image={isMobile ? images.brand.logoV : images.brand.logoV}
                    alt="Beads By BB"
                />
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }} 
            sx={{overflow:"hidden"}}>
                <Typography variant="subtitle1">
                    Welcome!
                </Typography>
                <Typography variant="h2">
                    I’m Brittney and I am the one who makes your bracelets with ALL my love
                </Typography>
                <DotDecorator />
            </Box>
        </Box>
    )
};

export default Hero;