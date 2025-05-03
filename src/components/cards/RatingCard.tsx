import { RenderStars } from "@/components/infos/RenderStars";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ratingLink } from "@/datas/consts";
import { cn } from "@/lib/utils";
import { Rating } from "@/types/ratings";

type Props = {
    rating: Rating;
};

export const RatingCard = ({ rating }: Props) => {
    const onClick = () => {
        window.open(ratingLink, "_blank");
    };

    return (
        <figure
            onClick={onClick}
            className={cn(
                "relative h-[140px] bg-background w-full cursor-pointer overflow-hidden rounded-xl border py-4 px-3 flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-2 z-10 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            )}>
            <div className="flex flex-row items-center gap-2">
                {/* Avatar avec initiales */}
                <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-secondary to-primary text-white text-md font-bold">
                        {rating.initials}
                    </AvatarFallback>
                </Avatar>
                {/* Nom d'utilisateur */}
                <div>
                    <figcaption className="text-base font-semibold dark:text-white leading-none">
                        {rating.username}
                    </figcaption>
                </div>
            </div>
            {/* Commentaire */}
            <div className="text-xs text-gray-800 dark:text-gray-200 line-clamp-3 text-ellipsis leading-none w-full h-full">
                {rating.comment}
            </div>
            {/* Note en étoiles */}
            <div className="flex items-center gap-2">
                {RenderStars(rating.rating)}
                <span className="text-xs text-muted-foreground">({rating.rating}/5)</span>
            </div>
        </figure>
    );
};
