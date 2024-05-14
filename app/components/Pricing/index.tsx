import { Stack, Typography, Link } from '@mui/material';
import PricingTable from '../PricingTable';
import { pricing } from '@/app/data';
import InstagramIcon from '@mui/icons-material/Instagram';

const Pricing = () => {
    return (
        <Stack direction="column" spacing={2} id="pricing">
            <br />
            <br />
            <br />
            <Typography textAlign="center" variant="h1">Pricing</Typography>
            <Stack spacing={1} textAlign={"center"}>
                <Typography>
                    All bracelets are custom made to order!
                    Pricing varies by bracelet size and bead type.
                </Typography>
                <Typography color="primary">
                    Email us directly or DM us on instagram to start your order!
                    <Link href="https://www.instagram.com/vibinbeadsbybb/"
                        color="primary"
                        underline="none"
                        target="_blank"
                        rel="noreferrer" variant="h1" sx={{ flexGrow: 1 }}>

                        <InstagramIcon fontSize="large" />
                    </Link>

                </Typography>
                <Typography>
                    {pricing.paymentTerms}
                </Typography>
            </Stack>
            <PricingTable />
        </Stack>
    );
};

export default Pricing;