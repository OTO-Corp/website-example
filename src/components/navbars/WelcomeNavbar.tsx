import { FacebookButton } from "../buttons/FacebookButton";
import { HamburgerMenuButton } from "../buttons/HamburgerMenuButton";
import { InstagramButton } from "../buttons/InstagramButton";
import { LanguageSwitcher } from "../buttons/LanguageSwitcher";
import { Button } from "../ui/button";

type Props = {
    scrolled: boolean;
};

export const WelcomeNavbar = ({ scrolled }: Props) => (
    <nav className="w-full z-30 transition-all absolute top-0 left-0">
        <div
            className={`container mx-auto flex items-center justify-between px-8 py-4 ${
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            } transition-all duration-300`}>
            <span className="text-2xl font-bold text-white cursor-pointer">
                <a href="#welcome" className="transition-colors hover:text-white/80">
                    MonSite
                </a>
            </span>
            <div className="items-center gap-4 hidden md:flex">
                <a href="#about">
                    <Button variant="link" className="text-background">
                        A propos
                    </Button>
                </a>
                <a href="#gallery">
                    <Button variant="link" className="text-background">
                        Galerie
                    </Button>
                </a>
                <a href="#services">
                    <Button variant="link" className="text-background">
                        Services
                    </Button>
                </a>
                <a href="#contact">
                    <Button variant="link" className="text-background">
                        Contact
                    </Button>
                </a>
            </div>
            <div className="flex items-center gap-1">
                <FacebookButton className="text-background md:block hidden" />
                <InstagramButton className="text-background md:block hidden" />
                <LanguageSwitcher />
                <HamburgerMenuButton className="md:hidden text-background" />
            </div>
        </div>
    </nav>
);
