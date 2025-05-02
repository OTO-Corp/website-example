import { ratings } from "@/datas/ratings";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { RatingCard } from "../cards/RatingCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
export const RatingSection = () => {
    const autoplay = useRef(AutoScroll({ stopOnInteraction: false, startDelay: 0 }));

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            plugins={[autoplay.current]}
            className="w-full max-w-sm">
            <CarouselContent>
                {ratings.map((rating) => (
                    <CarouselItem key={rating.username}>
                        <div className="p-1">
                            <RatingCard rating={rating} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
