import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookButton } from "../buttons/FacebookButton";
import { InstagramButton } from "../buttons/InstagramButton";

export const FooterSection = () => {
    return (
        <footer className="bg-primary text-white py-12 relative">
            <div className="absolute inset-0 bg-black/60" />
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Colonne 1 - Informations de contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
                        <div className="flex gap-4 mb-6">
                            <FacebookButton buttonClassName="hover:scale-110 transition-transform duration-300 bg-white/30 p-5 rounded-full" />
                            <InstagramButton buttonClassName="hover:scale-110 transition-transform duration-300 bg-white/30 p-5 rounded-full" />
                        </div>
                        <div className="space-y-4">
                            <a
                                href="https://www.google.com/maps/place/27+Place+de+la+Liberté,+62530+Hersin-Coupigny/@50.4507028,2.6483345,17z/data=!3m1!4b1!4m5!3m4!1s0x47dd3cfd6efc240d:0xcb1563072f3c48e9!8m2!3d50.4507028!4d2.6505232"
                                className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <MapPin className="h-5 w-5" />
                                <div>
                                    <p>27 Place de la Liberté</p>
                                    <p>62530 Hersin-Coupigny</p>
                                </div>
                            </a>
                            <a
                                href="tel:0321521350"
                                className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                                <Phone className="h-5 w-5" />
                                <span>03 21 52 13 50</span>
                            </a>
                            <a
                                href="mailto:contact@l-atelier.fr"
                                className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                                <Mail className="h-5 w-5" />
                                <span>contact@l-atelier.fr</span>
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 - Horaires d'ouverture */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
                        <div className="space-y-2">
                            <p>Mardi - Vendredi : 9h - 12h et 14h - 19h</p>
                            <p>Samedi : 9h - 12h et 14h - 19h30</p>
                            <p>Dimanche : 9h30 - 12h30</p>
                        </div>
                    </div>

                    {/* Colonne 3 - Liens rapides */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#welcome" className="hover:text-gray-300 transition-colors">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-gray-300 transition-colors">
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-gray-300 transition-colors">
                                    Galerie
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-gray-300 transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/mentions-legales" className="hover:text-gray-300 transition-colors">
                                    Mentions légales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
                    <p>© 2025 L'atelier - Tous droits réservés</p>
                </div>
            </div>
        </footer>
    );
};
