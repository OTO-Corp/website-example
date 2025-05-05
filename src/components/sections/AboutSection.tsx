import { RatingSection } from "./RatingSection";
import { useTranslation } from "react-i18next";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { TextAnimate } from "../magicui/text-animate";
import Autoplay from "embla-carousel-autoplay";

export const AboutSection = () => {
    const { t } = useTranslation();

    const images = [
        "/boutique.png",
        "/mur.png",
    ];

    return (
        <div id="about" className="min-h-dvh flex flex-col items-center justify-center bg-background py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    {/* Carousel à gauche */}
                    <div className="w-full md:w-1/2">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                                direction: "rtl",
                            }}
                            plugins={[Autoplay({delay: 2000})]}
                            className="w-full"
                        >
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <img 
                                            src={image} 
                                            alt="Boutique" 
                                            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    
                    {/* Contenu à droite */}
                    <div className="w-full md:w-1/2">
                        <TextAnimate className="text-3xl font-bold mb-4 text-primary" animation="slideUp" by="word" delay={0.5}>
                            {t("about.title")}
                        </TextAnimate>
                        <p className="text-lg text-gray-600">
                            {t("about.paragraph1")}
                            <br /><br />
                            {t("about.paragraph2")}
                            <br /><br />
                            {t("about.paragraph3")}
                        </p>
                    </div>
                </div>
                
                {/* Section des ratings en dessous */}
                <RatingSection className="w-full" />
            </div>
        </div>
    );
};
