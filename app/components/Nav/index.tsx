import { Container, AppBar, Toolbar, Typography, Link } from "@mui/material";

const Nav = () => {
    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{marginY:"20px"}}>
            <Container>
                <Toolbar>
                    <Typography variant="h6" color="primary" component="div" sx={{ flexGrow: 1 }}>
                        BeadsByBB
                    </Typography>
                    <nav>
                        <Link href="#pricing" color="primary"  underline="none" sx={{ mx: 1 }}>
                            Pricing
                        </Link>
                        <Link href="#find-us" color="primary" underline="none" sx={{ mx: 1 }}>
                            Find Us
                        </Link>
                        <Link href="#contact" color="primary" underline="none" sx={{ mx: 1 }}>
                            Contact
                        </Link>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;