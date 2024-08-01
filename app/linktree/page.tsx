import Image from "next/image";
import { images } from "@/_data";
import { Button, Typography } from "@mui/material";

export default function LinkTree() {

  return (
    <>
      <Typography variant="subtitle1">Welcome!</Typography>
      <Image style={{objectFit: "cover", borderRadius:"180px"}} height={200} width={200} src={`${images.owner.headshot.src}`} alt={`${images.owner.headshot.title}`}/>
      <Button>Instagram</Button>
      <Button>Bracelets & Pricing</Button>
      <Button>This Name Market</Button>
      <Button>Size Guide</Button>
    </>
  );
}
