import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Rating } from "@/types/ratings";

// Fonction utilitaire pour générer les étoiles (pleines, demi, vides)
const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            // étoile pleine
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#facc15" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
            );
        } else if (i < rating) {
            // demi-étoile
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5">
                    <defs>
                        <linearGradient id={`half-gradient-${i}`}>
                            <stop offset="50%" stopColor="#facc15" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                    </defs>
                    <path
                        fill={`url(#half-gradient-${i})`}
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
                    />
                </svg>
            );
        } else {
            // étoile pâle
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e5e7eb" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
            );
        }
    }
    return <div className="flex items-center gap-0.5 mt-2">{stars}</div>;
};

type Props = {
    rating: Rating;
};

export const RatingCard = ({ rating }: Props) => {
    const onClick = () => {
        // Redirect to the rating page
        window.open(
            `https://www.google.com/search?sa=X&sca_esv=032488618a09524f&tbm=lcl&q=L+Atelier+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDEzNjY3NDQxMTM3tDCzNDUzNd_AyPiKkc9HwbEkNScztUjBsSyzeBErmgAAeorLED0AAAA&rldimm=14633711446718695657&hl=fr-FR&ved=2ahUKEwiBlsSw1oWNAxUuKvsDHYHnE5EQ9fQKegQIPRAF&biw=1470&bih=798&dpr=2#lkt=LocalPoiReviews`,
            "_blank"
        );
    };

    return (
        <figure
            onClick={onClick}
            className={cn(
                "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5 flex flex-col gap-3",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}>
            <div className="flex flex-row items-center gap-4">
                {/* Avatar avec initiales */}
                <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-lime-300 to-amber-300 text-white text-xl font-bold">
                        {rating.initials}
                    </AvatarFallback>
                </Avatar>
                {/* Nom d'utilisateur */}
                <div>
                    <figcaption className="text-base font-semibold dark:text-white">{rating.username}</figcaption>
                </div>
            </div>
            {/* Commentaire */}
            <blockquote className="text-sm text-gray-800 dark:text-gray-200 mt-2">{rating.comment}</blockquote>
            {/* Note en étoiles */}
            <div>{renderStars(rating.rating)}</div>
        </figure>
    );
};
