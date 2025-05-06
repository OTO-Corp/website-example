export const GallerySection = () => {
    const galleryImages = [
        "/images/gallery/fleur1.webp",
        "/images/gallery/fleur2.webp",
        "/images/gallery/fleur3.webp",
        "/images/gallery/fleur4.webp",
        "/images/gallery/fleur5.webp",
        "/images/gallery/fleur6.webp",
        "/images/gallery/fleur7.webp",
    ];

    return (
        <div id="gallery" className="min-h-dvh flex flex-col items-center justify-center bg-primary py-16">
            <h1 className="text-4xl font-bold mb-12 text-white">Galerie</h1>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
                {/* Grande carte en haut à gauche */}
                <div className="col-span-2 row-span-2 aspect-square">
                    <img
                        src={galleryImages[0]}
                        alt="Fleur 1"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Deux petites cartes en haut à droite */}
                <div className="aspect-square">
                    <img
                        src={galleryImages[1]}
                        alt="Fleur 2"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="aspect-square">
                    <img
                        src={galleryImages[2]}
                        alt="Fleur 3"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Carte moyenne en bas à gauche */}
                <div className="col-span-2 aspect-square">
                    <img
                        src={galleryImages[3]}
                        alt="Fleur 4"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Petite carte en bas au milieu */}
                <div className="aspect-square">
                    <img
                        src={galleryImages[4]}
                        alt="Fleur 5"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Petite carte en bas à droite */}
                <div className="aspect-square">
                    <img
                        src={galleryImages[5]}
                        alt="Fleur 6"
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Carte "Voir plus" en bas à droite */}
                <a
                    href="/gallery"
                    className="col-span-2 aspect-square bg-white/10 rounded-lg flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                    <span className="text-white text-xl font-medium mb-2">Voir plus de photos</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};
