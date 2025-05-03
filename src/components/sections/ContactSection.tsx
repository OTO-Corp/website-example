import { ContactUsCard } from "../cards/ContactUsCard";

export const ContactSection = () => {
    return (
        <section className="bg-primary">
            <div className="h-dvh flex flex-col items-center justify-center bg-primary container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between flex-1 w-full md:px-8 px-5 py-4 gap-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4844554713386!2d2.6483345!3d50.4507028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3cfd6efc240d%3A0xcb1563072f3c48e9!2sL%20Atelier!5e0!3m2!1sfr!2sfr!4v1746307728158!5m2!1sfr!2sfr"
                        allowFullScreen
                        className="w-full md:w-1/2 h-full rounded-lg shadow-xl/20"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <ContactUsCard />
                </div>
            </div>
        </section>
    );
};
