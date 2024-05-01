import { Box, Typography } from "@mui/material";

const Hero = () => {

    return (
        <Box display="flex">
            <Box>
            {/* <Image width={600} height={600}src={`/images/BB_logo_horizontal.png`} alt={"Beads By BB"}/> */}
            </Box>
            <Box>
                <Typography variant="h1">
                    Welcome!
                </Typography>
                <Typography variant="body1">
                    I’m Brittney and I am the one who makes your bracelets with ALL my love
                </Typography>
            </Box>
        </Box>
    )
};

export default Hero;