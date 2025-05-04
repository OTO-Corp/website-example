import { Button } from "@/components/ui/button";
import { FacebookButton } from "../buttons/FacebookButton";
import { HamburgerMenuButton } from "../buttons/HamburgerMenuButton";
import { InstagramButton } from "../buttons/InstagramButton";
import { LanguageSwitcher } from "../buttons/LanguageSwitcher";

type Props = {
    scrolled: boolean;
};

export const AppNavbar = ({ scrolled }: Props) => (
    <nav
        className={`fixed top-0 left-0 w-full z-40 bg-background/90 shadow transition-all duration-300 ${
            scrolled ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } backdrop-blur`}>
        <div className="container mx-auto flex items-center justify-between px-8 py-4">
            <span className="text-2xl font-bold text-primary cursor-pointer">
                <a href="#welcome" className="transition-colors hover:text-primary/80">
                    MonSite
                </a>
            </span>
            <div className="items-center gap-4 hidden md:flex">
                <a href="#about" className="transition-colors hover:text-primary/80">
                    <Button variant="link">A propos</Button>
                </a>
                <a href="#gallery" className="transition-colors hover:text-primary/80">
                    <Button variant="link">Galerie</Button>
                </a>
                <a href="#services" className="transition-colors hover:text-primary/80">
                    <Button variant="link">Services</Button>
                </a>
                <a href="#contact" className="transition-colors hover:text-primary/80">
                    <Button variant="link">Contact</Button>
                </a>
            </div>

            <div className="flex items-center gap-1">
                <FacebookButton className="text-primary/80 md:block hidden" />
                <InstagramButton className="text-primary/80 md:block hidden" />
                <LanguageSwitcher />
                <HamburgerMenuButton className="md:hidden text-primary/80" />
            </div>
        </div>
    </nav>
);
