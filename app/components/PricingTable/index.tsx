'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Accordion, AccordionDetails, AccordionSummary, Stack } from '@mui/material';
import { pricing } from '@/app/data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const { goldFilled, sterlingSilver, customBracelet } = pricing;

interface AccordionProps {
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    expanded: string | false;
}

const PricingTable = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Stack>
            <CustomAccordion
                handleChange={handleChange}
                expanded={expanded} />
            <GoldAccordion
                handleChange={handleChange}
                expanded={expanded} />
            <SilverAccordion
                handleChange={handleChange}
                expanded={expanded} />
        </Stack>
    );
};



const CustomAccordion = ({ handleChange, expanded }: AccordionProps) => {
    return (
        <Accordion expanded={expanded === 'custom'} onChange={handleChange('custom')}>
            <AccordionSummary
                aria-controls="custom-content"
                id="custom-header"
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Custom Bracelet</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {customBracelet.stackPricing.map((stack, index) => (
                    <div key={index}>
                        <Typography>
                            {stack}
                        </Typography>
                    </div>
                ))}
                <Typography>
                    {customBracelet.addOnPricingText}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

const GoldAccordion = ({ expanded, handleChange }: AccordionProps) => {
    return (
        <Accordion expanded={expanded === 'gold-filled'} onChange={handleChange('gold-filled')}>
            <AccordionSummary
                aria-controls="gold-filled-content"
                id="gold-filled-header"
                expandIcon={<ExpandMoreIcon />}>
                <Typography>Gold Filled</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bead Size</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {goldFilled.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.beadSize}</TableCell>
                                <TableCell>{item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </AccordionDetails>
        </Accordion>
    )
}

const SilverAccordion = ({ expanded, handleChange }: AccordionProps) => {
    return (
        <Accordion expanded={expanded === 'sterling-silver'} onChange={handleChange('sterling-silver')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="sterling-silver-content"
                id="sterling-silver-header"
            >
                <Typography>Sterling Silver</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bead Size</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sterlingSilver.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.beadSize}</TableCell>
                                <TableCell>{item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </AccordionDetails>
        </Accordion>
    )
}
export default PricingTable;