import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Slide } from "@/types/slides";

interface SlideContentProps {
    slide: Slide;
    currentSlide: number;
    onButtonClick: (link: string) => void;
}

export const SlideContent = ({ slide, currentSlide, onButtonClick }: SlideContentProps) => {
    return (
        <div className="absolute inset-0">
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
                            className="text-lg px-8 py-6 font-bold bg-background hover:bg-background text-foreground hover:scale-105 transition-all duration-300"
                            onClick={() => onButtonClick(slide.buttonLink)}
                            key={`button-${currentSlide}`}>
                            {slide.buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
