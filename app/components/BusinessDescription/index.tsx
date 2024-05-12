import StyledCard from "../StyledCard";

export default function OwnerDescription() {
    const cardContent = {
        contentHeader: "Stay Thriving",
        contentText: "Lizards are a widespread group of squamate reptiles, ranging across all continents except Antarctica",
        cardMedia: "images/Vibbin_Beads.png"
    }
    return (
        <StyledCard 
        contentHeader={cardContent.contentHeader} 
        contentText={cardContent.contentText}
        cardMedia={cardContent.cardMedia} />
    );
};