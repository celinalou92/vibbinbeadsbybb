import {
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
  ListItemText,
  Box,
  Menu,
  MenuItem,
  Link,
  Stack,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display:"flex", alignItems:"flex-end", justifyContent: "space-between" }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        aria-label="menu"
        edge="start"
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Link
        href="https://www.instagram.com/vibinbeadsbybb/"
        color="primary"
        underline="none"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon fontSize="large" />
      </Link>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
      >
        <Stack direction={"column"} rowGap={1}>
          <Link href="#hero" color="primary" underline="none" sx={{ mx: 1 }}>
            <Typography>Vibin Beads By BB</Typography>
          </Link>
          <Link href="#pricing" color="primary" underline="none" sx={{ mx: 1 }}>
            <Typography>Pricing</Typography>
          </Link>
          <Link href="#find-us" color="primary" underline="none" sx={{ mx: 1 }}>
            <Typography>Find Us</Typography>
          </Link>
          <Link
            href="mailto:cwebservices@gmail.com"
            color="text"
            underline="none"
            sx={{ mx: 1 }}
          >
            <Typography>Email Us</Typography>
          </Link>
        </Stack>
      </Menu>
    </Box>
  );
};
export default MobileNav;
