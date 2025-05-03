import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./buttons/LanguageSwitcher";

export default function Navbar() {
    return (
        <nav className="bg-transparent text-primary p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Mon App
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-300">
                        Accueil
                    </Link>
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
}
