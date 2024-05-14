import { Box, Stack, Typography } from '@mui/material';
import PricingTable from '../PricingTable';
import { pricing } from '@/app/data';
import DotDecorator from '../DotDecorator';

const Pricing = () => {
    return (
        <Stack direction="column" spacing={2}  id="pricing">
            <br/>
            <br/>
            <br/>
            <Stack spacing={1} textAlign={"center"}>
                <Typography variant="h1">Pricing</Typography>
                <Typography>
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