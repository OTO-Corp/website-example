export const FooterSection = () => {
    return (
        <footer className="bg-primary text-white py-12 relative">
            <div className="absolute inset-0 bg-black/60" />
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Colonne 1 - Informations de contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
                        <div className="space-y-2">
                            <p>27 Place de la Liberté</p>
                            <p>62530 Hersin-Coupigny</p>
                            <p className="mt-4">Téléphone : 03 21 52 13 50</p>
                            <p>Email : contact@l-atelier.fr</p>
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
