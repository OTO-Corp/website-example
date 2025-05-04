import { RESPONSIVE_NAVBAR_MODAL } from "@/providers/ModalProvider";
import { setModal } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

export const HamburgerMenuButton = ({ className }: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setModal(RESPONSIVE_NAVBAR_MODAL));
    };

    return (
        <Button variant="ghost" size="icon" onClick={handleClick}>
            <Menu className={cn("text-background !w-6 !h-6", className)} />
        </Button>
    );
};
