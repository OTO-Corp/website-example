import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { Images } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";

export const GallerySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const galleryImages = [
        "/images/gallery/fleur1.webp",
        "/images/gallery/fleur2.webp",
        "/images/gallery/fleur3.webp",
        "/images/gallery/fleur4.webp",
    ];

    return (
        <section
            id="gallery"
            className="relative flex flex-col items-center justify-center bg-primary py-12 min-h-dvh overflow-x-clip">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between relative">
                {/* Version Mobile/Tablette */}
                <div className="lg:hidden w-full max-w-md mx-auto">
                    {/* Carousel */}
                    <div className="px-4">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {galleryImages.map((img, i) => (
                                    <CarouselItem key={img}>
                                        <img
                                            src={img}
                                            alt={`Fleur ${i + 1}`}
                                            className="aspect-square w-full object-cover shadow-lg rounded-t-xl"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
                        </Carousel>
                    </div>

                    {/* Carte texte */}
                    <div className="relative z-20 bg-white/90 rounded-b-xl p-6 sm:p-8 shadow-lg mx-4 flex flex-col items-center text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                            <Images className="!w-8 !h-8" />
                            Galerie
                        </h2>
                        <p className="text-gray-700 mb-6 text-base sm:text-lg">
                            Plongez dans notre univers floral et découvrez des compositions uniques, élégantes et
                            inspirantes. Laissez-vous séduire par la créativité de nos bouquets !
                        </p>
                        <Button
                            variant="outline"
                            className="text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                            EN VOIR PLUS
                        </Button>
                    </div>
                </div>

                {/* Version Desktop : Images superposées façon collage */}
                <div className="hidden lg:block relative w-2/3 min-h-[600px]">
                    <motion.img
                        src={galleryImages[0]}
                        alt="Fleur 1"
                        initial={{ opacity: 0, x: -60, y: 0 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="absolute top-0 left-0 w-2/5 h-2/5 object-cover rounded-xl shadow-lg z-10 hover:scale-105 transition-transform duration-300"
                    />
                    <motion.img
                        src={galleryImages[1]}
                        alt="Fleur 2"
                        initial={{ opacity: 0, x: 60, y: 0 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="absolute top-0 right-0 w-1/2 h-2/5 object-cover rounded-xl shadow-md z-20 hover:scale-105 transition-transform duration-300"
                    />
                    <motion.img
                        src={galleryImages[2]}
                        alt="Fleur 3"
                        initial={{ opacity: 0, x: -40, y: 60 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="absolute bottom-0 left-10 w-1/2 h-2/5 object-cover rounded-xl shadow-md z-30 hover:scale-105 transition-transform duration-300"
                    />
                    <motion.img
                        src={galleryImages[3]}
                        alt="Fleur 4"
                        initial={{ opacity: 0, x: 40, y: 60 }}
                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="absolute bottom-0 right-0 w-1/3 h-1/3 object-cover rounded-xl shadow-lg z-40 hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Version Desktop : Carte texte */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="hidden lg:flex relative z-20 bg-white/90 rounded-xl p-6 sm:p-8 shadow-lg lg:mt-0 lg:ml-12 flex-col items-start text-left max-w-md">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                        <Images className="!w-8 !h-8" />
                        Galerie
                    </h2>
                    <p className="text-gray-700 mb-6 text-base sm:text-lg">
                        Plongez dans notre univers floral et découvrez des compositions uniques, élégantes et
                        inspirantes. Laissez-vous séduire par la créativité de nos bouquets !
                    </p>
                    <Button
                        variant="outline"
                        className="text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                        EN VOIR PLUS
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
