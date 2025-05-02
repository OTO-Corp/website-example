import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { toast } from "sonner";
import { increment } from "../store/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Home() {
    const value = useAppSelector((state) => state.app.value);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(increment());
        toast("Valeur incrémentée !", {
            description: `La nouvelle valeur est : ${value + 1}`,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-svh">
            <div className="text-2xl mb-4">Value: {value}</div>
            <Button onClick={handleClick}>Click me</Button>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
