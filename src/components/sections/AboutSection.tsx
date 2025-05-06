import { RatingSection } from "./RatingSection";
import { useTranslation } from "react-i18next";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { TextAnimate } from "../magicui/text-animate";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AboutSection = () => {
    const { t } = useTranslation();
    const plugin = useRef(Autoplay({ delay: 2000 }));

    const images = [
        "/images/about-fleur1.png",
        "/images/about-boutique.png",
        "/images/about-fleur2.png",
        "/images/about-fleur3.png",
        "/images/about-fleur4.png",
    ];

    return (
        <div id="about" className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12"
                >
                    {/* Carousel à gauche */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                                direction: "ltr",
                            }}
                            plugins={[plugin.current]}
                            className="w-full relative"
                        >
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index} className="pl-4 basis-full">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img 
                                                src={image} 
                                                alt="Boutique" 
                                                className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl"
                                            />
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    
                    {/* Contenu à droite */}
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col items-center gap-1 mb-4 sm:mb-6">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-primary" />
                                <p className="text-3xl sm:text-4xl font-bold text-primary font-serif italic tracking-wider">L'Atelier</p>
                            </div>
                            <TextAnimate 
                                className="text-3xl sm:text-4xl font-bold text-primary font-serif italic text-center md:text-left" 
                                animation="slideUp" 
                                by="word" 
                                delay={0.5}
                            >
                                {t("about.title")}
                            </TextAnimate>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 sm:space-y-6"
                        >
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                {t("about.paragraph1")}
                            </p>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                {t("about.paragraph2")}
                            </p>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                {t("about.paragraph3")}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
                
                {/* Section des ratings en dessous */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <RatingSection className="w-full" />
                </motion.div>
            </div>
        </div>
    );
};
