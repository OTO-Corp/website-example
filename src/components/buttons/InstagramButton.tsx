import { Instagram } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

export const InstagramButton = ({ className }: Props) => {
    const handleClick = () => {
        window.open("https://www.instagram.com/l_atelier_hersin/", "_blank");
    };
    return (
        <Button variant="ghost" size="icon" onClick={handleClick}>
            <Instagram className={cn("text-background !w-6 !h-6", className)} />
        </Button>
    );
};
