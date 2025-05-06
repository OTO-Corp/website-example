import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    className?: string;
    buttonClassName?: string;
};

export const InstagramButton = ({ className, buttonClassName }: Props) => {
    const handleClick = () => {
        window.open("https://www.instagram.com/l_atelier_hersin/", "_blank");
    };
    return (
        <Button variant="ghost" size="icon" onClick={handleClick} className={buttonClassName}>
            <Instagram className={cn("text-background !w-6 !h-6", className)} />
        </Button>
    );
};
