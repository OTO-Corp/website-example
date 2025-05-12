import { AppNavbar } from "@/components/navbars/AppNavbar";
import { WelcomeNavbar } from "@/components/navbars/WelcomeNavbar";
import { Button } from "@/components/ui/button";
import { Slide } from "@/types/slides";
import { useEffect, useMemo, useRef, useState } from "react";
import { SlideContent } from "./welcome/SlideContent";

export const WelcomeSection = () => {
    const slides = useMemo<Slide[]>(
        () => [
            {
                image: "/images/illu3.webp",
                title: "Célébrez le plus beau jour de votre vie",
                description: "Avec nos fleurs de mariage !",
                buttonText: "Contactez-nous",
                buttonLink: "#contact",
            },
            {
                image: "/images/illu1.webp",
                title: "Des bouquets de fleurs originaux",
                description: "Pour fleurir tous vos évènements privés et professionnels !",
                buttonText: "En savoir plus",
                buttonLink: "#about",
            },
            {
                image: "/images/illu2.webp",
                title: "Des compositions florales spéciales",
                description: "Pour exprimer vos sentiments les plus affectueux !",
                buttonText: "Voir nos réalisations",
                buttonLink: "#gallery",
            },
        ],
        []
    );

    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const handleClick = (link: string) => {
        console.log(link);
        const element = document.querySelector(link);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const startSlideTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const handleSlideClick = (index: number) => {
        setCurrentSlide(index);
        startSlideTimer();
    };

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 40);

            if (currentScrollY < 40) {
                setShowNavbar(false);
            } else if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        startSlideTimer();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [slides, startSlideTimer]);

    return (
        <section id="welcome" className="relative min-h-dvh overflow-hidden">
            {/* Navbar transparente en haut */}
            <WelcomeNavbar scrolled={scrolled} />

            {/* Navbar opaque qui apparait au scroll */}
            <AppNavbar scrolled={showNavbar} />

            {/* Carrousel */}
            <div className="relative w-full h-dvh">
                {/* Dégradé vers le bas */}
                <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-primary to-transparent z-10" />

                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}>
                        <SlideContent slide={slide} currentSlide={currentSlide} onButtonClick={handleClick} />
                    </div>
                ))}

                {/* Indicateurs de slide */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <Button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer hover:bg-white/75 ${
                                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                            }`}
                            onClick={() => handleSlideClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
