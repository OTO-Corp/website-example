import { ratings } from "@/datas/ratings";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { GetReviewButton } from "../buttons/GetReviewButton";
import { RatingCard } from "../cards/RatingCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

export const RatingSection = ({ className }: Props) => {
    const autoplay = useRef(AutoScroll({ stopOnInteraction: false, startDelay: 0, speed: 1 }));

    return (
        <div className={cn("flex flex-col gap-1 text-primary w-full mx-auto justify-center items-center", className)}>
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[autoplay.current]}
                className="w-full">
                <CarouselContent>
                    {ratings.map((rating) => (
                        <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 py-2" key={rating.username}>
                            <RatingCard rating={rating} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <GetReviewButton />
        </div>
    );
};
