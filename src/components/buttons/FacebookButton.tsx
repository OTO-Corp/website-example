import { cn } from "@/lib/utils";
import { Facebook } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    className?: string;
};

export const FacebookButton = ({ className }: Props) => {
    const handleClick = () => {
        window.open("https://www.facebook.com/latelier.hersin/", "_blank");
    };

    return (
        <Button variant="ghost" size="icon" onClick={handleClick}>
            <Facebook className={cn("text-background !w-6 !h-6", className)} />
        </Button>
    );
};
