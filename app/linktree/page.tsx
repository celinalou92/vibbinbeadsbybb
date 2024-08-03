import Image from "next/image";
import { images } from "@/_data";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function LinkTree() {
  return (
      <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography align="center" variant="subtitle1">Welcome!</Typography>
        <Image
          style={{ objectFit: "cover", borderRadius: "180px" }}
          height={200}
          width={200}
          src={`${images.owner.headshot.src}`}
          alt={`${images.owner.headshot.title}`}
        />
        <Button fullWidth>Instagram</Button>
        <Button fullWidth>Bracelets & Pricing</Button>
        <Button fullWidth>This Name Market</Button>
        <Button fullWidth>Size Guide</Button>
      </Stack>
  );
}
