import { RatingSection } from "./RatingSection";

export const AboutSection = () => {
    return (
        <div id="about" className="h-dvh flex flex-col items-center justify-center bg-background">
            <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-2xl font-bold">À propos</h1>
            </div>
            <RatingSection className="mb-2" />
        </div>
    );
};
