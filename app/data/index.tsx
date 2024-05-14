const bbLogoHorizontal = "/images/BB_logo_horizontal.png";
const vibbinBeads = "/images/Vibbin_Beads.png";
const goldSpecialty = "/images/gold_speciality.jpg"
const goldBeadSize = "/images/gold_bead_sizes.jpg"
const purpleSpecialty = "/images/purple_speciality.jpg"
const sportsTheme = "/images/sports_x.jpg"
const generationRings = "/images/generation_ring.jpg"
const sportsTheme2 = "/images/sports_theme_2.jpg"
const miniMama = "/images/mini_mama.jpg"

export const images = {
    brand: {
        logoH: bbLogoHorizontal,
        logoV: vibbinBeads,
        fav: ""
    },
    products: [
        {
            product: "Single Bracelets",
            image: goldBeadSize,
            alt: "Single Bracelets",
            link: ""
        },
        {
            product: "Bracelet Sets",
            image: purpleSpecialty,
            alt: "Bracelet Sets",
            link: ""
        },
        {
            product: "Theme Bracelets",
            image: sportsTheme,
            alt: "Featured Bracelets",
            link: ""
        },
        {
            product: "Custom Creations",
            image: generationRings,
            alt: "Generation Rings",
            link: ""
        },
        {
            product: "Gold Specialty",
            image: goldSpecialty,
            alt: "Gold Specialty",
            link: ""
        },
        {
            product: "Sports Theme 2",
            image: miniMama,
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