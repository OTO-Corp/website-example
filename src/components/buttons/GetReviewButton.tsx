import { ratingLink } from "@/datas/consts";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    className?: string;
};

export const GetReviewButton = ({ className }: Props) => {
    const onClick = () => {
        window.open(ratingLink, "_blank");
    };

    return (
        <Button variant={"default"} className={cn("rounded-md font-bold group", className)} onClick={onClick}>
            Voir tous les avis
            <ArrowRight className="size-6 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
    );
};
