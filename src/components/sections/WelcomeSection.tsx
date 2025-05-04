import { AppNavbar } from "@/components/navbars/AppNavbar";
import { WelcomeNavbar } from "@/components/navbars/WelcomeNavbar";
import { useEffect, useRef, useState } from "react";
import ExpandableCardDemo from "../expandable-card-demo-standard";

export const WelcomeSection = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 40);

            if (currentScrollY < 40) {
                setShowNavbar(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Scroll vers le haut
                setShowNavbar(true);
            } else {
                // Scroll vers le bas
                setShowNavbar(false);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="welcome" className="relative min-h-screen bg-primary">
            {/* Navbar transparente en haut */}
            <WelcomeNavbar scrolled={scrolled} />

            {/* Navbar opaque qui apparait au scroll */}
            <AppNavbar scrolled={showNavbar} />

            {/* Contenu de la section */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                <ExpandableCardDemo />
            </div>
        </section>
    );
};
