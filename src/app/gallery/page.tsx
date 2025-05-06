export default function GalleryPage() {
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
        <main className="min-h-screen bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-white text-center">Galerie Complète</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                            <img
                                src={image}
                                alt={`Fleur ${index + 1}`}
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
