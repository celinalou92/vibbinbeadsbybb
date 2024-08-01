'use client'
import { Typography, useMediaQuery, useTheme } from "@mui/material";

const DotDecorator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));


    const dotsCount = isMobile ? 10 : isTablet ? 15 : 20;
    return (
        <Typography component="div" 
        variant={isMobile ? "h6" : "h4"} 
        sx={{display:"flex", color:theme.palette.primary.main}}>
            {Array.from({ length: dotsCount }, (_, i) => (
                <li key={i}><ul></ul></li>
            ))}
        </Typography>
    );
}

export default DotDecorator;