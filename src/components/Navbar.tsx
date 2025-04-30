import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Mon App
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-300">
                        Accueil
                    </Link>
                    <Link to="/about" className="hover:text-gray-300">
                        À propos
                    </Link>
                </div>
            </div>
        </nav>
    );
}
