import Image from "next/image";
import { images } from "@/_data";
import { Box, Button, Stack, Typography } from "@mui/material";
import theme from "@/theme";

export default function LinkTree() {
  return (
    <Stack textAlign="center" justifyContent={"center"} alignItems={"center"} gap={2}>
      <Typography fontSize="2rem" align="center" variant="subtitle1" >
        Welcome!
      </Typography>
      <Image
        style={{ 
          objectFit: "cover", borderRadius: "180px",
         filter: "drop-shadow(0 4px 4px rgba(0,0,0, .25))"}}
        height={120}
        width={120}
        src={`${images.owner.headshot.src}`}
        alt={`${images.owner.headshot.title}`}
      />

      <Typography>
        An orange county based, woman owned and community conscious small
        business!
      </Typography>
      <Typography color="primary">
        DM us on Instagram to start your order!
      </Typography>
      <Button fullWidth>Instagram</Button>
      <Button fullWidth>Bracelets & Pricing</Button>
      <Button fullWidth>This Name Market</Button>
      <Button fullWidth>Size Guide</Button>
    </Stack>
  );
}
