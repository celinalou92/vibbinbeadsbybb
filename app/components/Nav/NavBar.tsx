import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ marginY: "20px" }}
    >
      <Container>
        <Toolbar>
          <Typography variant="h1" color="primary" sx={{ flexGrow: 1 }}>
            <Link
              href="https://www.instagram.com/vibinbeadsbybb/"
              color="primary"
              underline="none"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </Typography>
          <Stack direction={"row"} columnGap={2}>
            <Link href="#hero" color="primary" underline="none" sx={{ mx: 1 }}>
              <Typography variant="h6">Vibin Beads By BB</Typography>
            </Link>
            <Link
              href="#pricing"
              color="primary"
              underline="none"
              sx={{ mx: 1 }}
            >
              <Typography variant="h6">Pricing</Typography>
            </Link>
            <Link
              href="#find-us"
              color="primary"
              underline="none"
              sx={{ mx: 1 }}
            >
              <Typography variant="h6">Find Us</Typography>
            </Link>
            <Link
              href="mailto:cwebservices@gmail.com"
              color="text"
              underline="none"
              sx={{ mx: 1 }}
            >
              <Typography variant="h6">Email Us</Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
