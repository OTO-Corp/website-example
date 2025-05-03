import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";

export default function Home() {
    return (
        <div>
            <WelcomeSection />
            <AboutSection />
            <GallerySection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
}
