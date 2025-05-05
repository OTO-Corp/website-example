import { AppNavbar } from "@/components/navbars/AppNavbar";
import { WelcomeNavbar } from "@/components/navbars/WelcomeNavbar";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEffect, useRef, useState } from "react";

const slides = [
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
];

export const WelcomeSection = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const lastScrollY = useRef(0);

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
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="welcome" className="relative min-h-dvh overflow-hidden">
            {/* Navbar transparente en haut */}
            <WelcomeNavbar scrolled={scrolled} />

            {/* Navbar opaque qui apparait au scroll */}
            <AppNavbar scrolled={showNavbar} />

            {/* Carrousel */}
            <div className="relative w-full h-dvh">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}>
                        {/* Image de fond */}
                        <div className="absolute inset-0">
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Contenu */}
                        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                            <div className="space-y-8 max-w-2xl">
                                <div className="space-y-6">
                                    <TextAnimate
                                        key={`title-${currentSlide}`}
                                        as="h1"
                                        className="text-4xl md:text-5xl font-bold text-white"
                                        animation="blurInUp"
                                        duration={0.5}
                                        by="word">
                                        {slide.title}
                                    </TextAnimate>
                                    <TextAnimate
                                        key={`description-${currentSlide}`}
                                        as="p"
                                        className="text-xl md:text-2xl text-white/90"
                                        animation="fadeInUp"
                                        duration={0.5}
                                        delay={0.3}>
                                        {slide.description}
                                    </TextAnimate>
                                </div>
                                <div className="flex justify-center">
                                    <Button
                                        size="lg"
                                        variant="default"
                                        className="text-lg px-8 py-6"
                                        onClick={() => {
                                            const element = document.querySelector(slide.buttonLink);
                                            element?.scrollIntoView({ behavior: "smooth" });
                                        }}>
                                        {slide.buttonText}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Indicateurs de slide */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
