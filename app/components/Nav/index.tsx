import { Container, AppBar, Toolbar, Typography, Link, Stack } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

const Nav = () => {
    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ marginY: "20px" }}>
            <Container>
                <Toolbar>
                    <Typography variant="h1" color="primary" sx={{ flexGrow: 1 }}>
                        <Link href="https://www.instagram.com/vibinbeadsbybb/" 
                        color="primary" underline="none" target="_blank" rel="noreferrer">
                        <InstagramIcon fontSize="large"/>
                        </Link>
                    </Typography>
                    <Stack direction={"row"} columnGap={2}>
                        <Link href="#pricing" color="primary" underline="none" sx={{ mx: 1 }}>
                            <Typography variant="h6">
                                Pricing
                            </Typography>
                        </Link>
                        <Link href="#find-us" color="primary" underline="none" sx={{ mx: 1 }}>
                            <Typography variant="h6">
                                Find Us
                            </Typography>
                        </Link>
                        <Link href="#contact" color="primary" underline="none" sx={{ mx: 1 }}>
                            <Typography variant="h6">
                                Contact
                            </Typography>
                        </Link>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;