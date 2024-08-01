import {Card,CardMedia,CardContent,Typography} from "@mui/material";


interface StyledCardProps {
    contentHeader?: string;
    contentText?: string;
    cardMedia?: string;
}

export default function StyledCard({contentHeader, contentText, cardMedia}: StyledCardProps) {
    return (
        <Card sx={{ maxWidth: 345 }} elevation={0}>
            <CardMedia
                component="img"
                height="50%"
                image={cardMedia}
                alt="TODO"
            />
            <CardContent>
                <Typography gutterBottom component="div" align="center">
                   {contentHeader}
                </Typography>
                <Typography variant="body2" align="center">
                    {contentText}
                </Typography>
            </CardContent>
        </Card>
    );
};