import BB_logo_horizontal from "@/public/images/BB_logo_horizontal.png";
import Vibbin_Beads from "@/public/images/Vibbin_Beads.png";
import GoldSpecialty from "@/public/images/gold_speciality.jpeg"
import GoldBeadSize from "@/public/images/gold_bead_sizes.jpeg"
import PurpleSpecialty from "@/public/images/purple_speciality.jpeg"
import SportsTheme from "@/public/images/sports_1.jpeg"

export const images = {
    brand: {
        logoH: BB_logo_horizontal,
        logoV: Vibbin_Beads,
        fav: ""
    },
    products: {
        singleBracelets: [
            {
                img: GoldSpecialty,
                alt: ""
            }
        ],
        braceletSets: [
            {
                img: GoldBeadSize,
                alt: ""
            }
        ],
        featuredBracelets: [
            {
                img: SportsTheme,
                alt: ""
            }
        ]
    }
}