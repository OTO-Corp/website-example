import { RatingSection } from "@/components/sections/RatingSection";
import { Button } from "@/components/ui/button";
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
        <div className="flex flex-col items-center justify-center min-h-svh w-full">
            <div className="text-2xl mb-4">Value: {value}</div>
            <Button onClick={handleClick}>Click me</Button>
            <RatingSection />
        </div>
    );
}
