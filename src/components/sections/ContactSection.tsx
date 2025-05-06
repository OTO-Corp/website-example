import { ContactUsCard } from "../cards/ContactUsCard";

export const ContactSection = () => {
    return (
        <section id="contact" className="bg-primary min-h-dvh py-8 flex items-center">
            <div className="container mx-auto h-full flex items-center justify-center">
                <div className="flex flex-col md:flex-row w-full gap-8 md:h-[80vh]">
                    <div className="flex-1 h-[50vh] md:h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4844554713386!2d2.6483345!3d50.4507028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3cfd6efc240d%3A0xcb1563072f3c48e9!2sL%20Atelier!5e0!3m2!1sfr!2sfr!4v1746307728158!5m2!1sfr!2sfr"
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow-xl/20"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="flex-1 h-[calc(100vh-50vh-4rem)] md:h-full">
                        <ContactUsCard />
                    </div>
                </div>
            </div>
        </section>
    );
};
