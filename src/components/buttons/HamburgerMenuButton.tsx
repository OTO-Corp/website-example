import { cn } from "@/lib/utils";
import { RESPONSIVE_NAVBAR_MODAL } from "@/providers/ModalProvider";
import { setModal } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    className?: string;
    buttonClassName?: string;
};

export const HamburgerMenuButton = ({ className, buttonClassName }: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setModal(RESPONSIVE_NAVBAR_MODAL));
    };

    return (
        <Button variant="ghost" size="icon" onClick={handleClick} className={buttonClassName}>
            <Menu className={cn("text-background !w-6 !h-6", className)} />
        </Button>
    );
};
