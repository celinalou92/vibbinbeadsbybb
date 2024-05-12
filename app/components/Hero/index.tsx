"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));


    const DotDecorator = () => {
        const dotsCount = isMobile ? 10 : isTablet ? 15 : 20;
        return (
            <Typography component="div" 
            variant={isMobile ? "body1" : "h5"} 
            sx={{display:"flex"}}>
                {Array.from({ length: dotsCount }, (_, i) => (
                    <li key={i}><ul></ul></li>
                ))}
            </Typography>
        );
    }

    return (
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
            <Box width={{ xs: '100%', sm: '60%' }} height={{ sm: '100%' }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={isMobile ? "/images/Vibbin_Beads.png" : "/images/BB_logo_horizontal.png"}
                    alt="Beads By BB"
                />
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }} 
            sx={{overflow:"hidden"}}>
                <Typography variant="h1">
                    Welcome!
                </Typography>
                <Typography variant="body1">
                    I’m Brittney and I am the one who makes your bracelets with ALL my love
                </Typography>
                <DotDecorator />
            </Box>
        </Box>
    )
};

export default Hero;