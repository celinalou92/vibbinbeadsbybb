import { Stack, Typography } from '@mui/material';
import PricingTable from '../PricingTable';
import { pricing } from '@/app/data';

const Pricing = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack>
                <Typography variant="h4">Pricing</Typography>
                <Typography variant="body1">
                    All bracelets are custom made to order!
                    Pricing varies by bracelet size and bead type. 
                    </Typography>
                    <Typography>
                        Email us directly or DM us on instagram to start your order! 
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