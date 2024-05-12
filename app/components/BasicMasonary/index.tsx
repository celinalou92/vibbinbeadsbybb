'use client'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import StyledCard from '../StyledCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface BasicMasonryProps {
    itemData: Array<{
        image: string | undefined;
        date: string | undefined;
        text: string | undefined;
        buttonText: string;
    }>;
}

export default function BasicMasonry( {itemData} : BasicMasonryProps) {
    return (
        <Box sx={{ width: 500, minHeight: 829 }}>
            <Masonry columns={3} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <StyledCard
                            cardMedia={item.image}
                            contentHeader={item.date}
                            contentText={item.text}
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
};
