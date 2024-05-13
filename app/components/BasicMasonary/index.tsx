'use client'
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import StyledCard from '../StyledCard';

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
            <Masonry columns={2}>
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
