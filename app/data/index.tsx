const BB_logo_horizontal = "/images/BB_logo_horizontal.png";
const Vibbin_Beads = "/images/Vibbin_Beads.png";
const GoldSpecialty = "/images/gold_speciality.jpg"
const GoldBeadSize = "/images/gold_bead_sizes.jpg"
const PurpleSpecialty = "/images/purple_speciality.jpg"
const SportsTheme = "/images/sports_x.jpg"
const GenerationRings = "/images/generation_ring.jpg"
const SportsTheme2 = "/images/sports_theme_2.jpg"

export const images = {
    brand: {
        logoH: BB_logo_horizontal,
        logoV: Vibbin_Beads,
        fav: ""
    },
    products: [
        {
            product: "Single Bracelets",
            image: GoldBeadSize,
            alt: "Single Bracelets",
            link: ""
        },
        {
            product: "Bracelet Sets",
            image: PurpleSpecialty,
            alt: "Bracelet Sets",
            link: ""
        },
        {
            product: "Featured Bracelets",
            image: SportsTheme,
            alt: "Featured Bracelets",
            link: ""
        },
        {
            product: "Generation Rings",
            image: GenerationRings,
            alt: "Generation Rings",
            link: ""
        },
        {
            product: "Gold Specialty",
            image: GoldSpecialty,
            alt: "Gold Specialty",
            link: ""
        },
        {
            product: "Sports Theme 2",
            image: SportsTheme2,
            alt: "Sports Theme 2",
            link: ""
        }
    ]
}

export const pricing = {
    goldFilled: [
        {
            beadSize: "2mm",
            price: "$25 - $31"
        },
        {
            beadSize: "2.5mm",
            price: "$27 - $33"
        },
        {
            beadSize: "2.5mm",
            price: "$27 - $33",
        },
        {
            beadSize: "3mm",
            price: "$29 - $35",
        },
        {
            beadSize: "3mm",
            price: "$29 - $35",
        },
    ],
    sterlingSilver: [
        {
            beadSize: "2mm",
            price: "$22 - $28"
        },
        {
            beadSize: "3mm",
            price: "$22 - $30",
        },
        {
            beadSize: "4mm",
            price: "$34 - $40",
        },
    ],
    customBracelet: {
        stackPricing: [
            "1 for $15",
            "2 for $27",
            "3 for $37"
        ],
        stackText: "Stack pricing if for sets within the same color scheme. This includes up to 3 colors, words and numbers",
        addOnPricingText: "It will be $10 - $20 more if you choose gemstones, stearling silver or 14k gold filled beads",
    },
    paymentTerms: "We accept payments via Venmo or Zelle."
}