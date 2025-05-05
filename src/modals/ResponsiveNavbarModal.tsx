import { FacebookButton } from "@/components/buttons/FacebookButton";
import { InstagramButton } from "@/components/buttons/InstagramButton";
import { Button } from "@/components/ui/button";
import { setModal } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export const ResponsiveNavbarModal = () => {
    const dispatch = useAppDispatch();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 10); // Laisse le temps au composant de se monter avant d'animer
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            dispatch(setModal(null));
        }, 250); // Doit correspondre à la durée de la transition
    };

    return (
        <div
            className={`
                fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center
                transition-all duration-300
                ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
            `}>
            {/* Fausse navbar pour positionner la croix */}
            <div className="absolute top-0 left-0 w-full">
                <div className="lg:container mx-auto flex items-center justify-between px-8 py-4 flex-row-reverse">
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" onClick={handleClose} className="z-[100]">
                            <X className="!w-6 !h-6 text-background" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-6 mt-8">
                <a href="#about" onClick={handleClose}>
                    <Button variant="link" className="text-background text-xl">
                        A propos
                    </Button>
                </a>
                <a href="#gallery" onClick={handleClose}>
                    <Button variant="link" className="text-background text-xl">
                        Galerie
                    </Button>
                </a>
                <a href="#services" onClick={handleClose}>
                    <Button variant="link" className="text-background text-xl">
                        Services
                    </Button>
                </a>
                <a href="#contact" onClick={handleClose}>
                    <Button variant="link" className="text-background text-xl">
                        Contact
                    </Button>
                </a>
                <div className="flex items-center gap-2 mt-6">
                    <FacebookButton className="text-background" />
                    <InstagramButton className="text-background" />
                </div>
            </div>
        </div>
    );
};
