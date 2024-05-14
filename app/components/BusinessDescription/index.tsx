import StyledCard from "../StyledCard";

export default function OwnerDescription() {
    const cardContent = {
        contentHeader: "Stay Thriving",
        contentText: "Welcome to Vibin Beads by BB! I'm Brittney and I am the one who makes your bracelets with ALL my love. I make each bracelet from hand, from high quality materials sourced from other small businesses!",
        cardMedia: "images/owner-image.jpeg"
    }
    return (
        <StyledCard 
        contentHeader={cardContent.contentHeader} 
        contentText={cardContent.contentText}
        cardMedia={cardContent.cardMedia} />
    );
};