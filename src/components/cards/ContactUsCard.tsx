import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ContactUsCardProps {
    className?: string;
}

export const ContactUsCard = ({ className }: ContactUsCardProps) => {
    const { t } = useTranslation();

    return (
        <Card className={cn("w-full h-full shadow-xl/20 gap-2", className)}>
            <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-center text-primary tracking-tight">
                    {t("Contactez-nous")}
                </CardTitle>
                <div className="flex items-center gap-1 justify-center">
                    <Phone className="!w-6 !h-6 text-secondary" />
                    <span className="text-secondary font-bold">03 21 52 13 50</span>
                </div>
            </CardHeader>
            <form className="h-full flex flex-col">
                <CardContent className="flex-1 flex flex-col gap-5">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Label className="mb-2" htmlFor="nom">
                                {t("Nom")}
                            </Label>
                            <Input id="nom" name="nom" type="text" required />
                        </div>
                        <div className="flex-1">
                            <Label className="mb-2" htmlFor="prenom">
                                {t("Prénom")}
                            </Label>
                            <Input id="prenom" name="prenom" type="text" required />
                        </div>
                    </div>
                    <div>
                        <Label className="mb-2" htmlFor="email">
                            {t("Adresse email")}
                        </Label>
                        <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                        <Label className="mb-2" htmlFor="telephone">
                            {t("Numéro de téléphone")}
                        </Label>
                        <Input id="telephone" name="telephone" type="tel" required />
                    </div>
                    <div>
                        <Label className="mb-2" htmlFor="commentaire">
                            {t("Commentaire")}
                        </Label>
                        <Textarea
                            className="resize-none h-24 placeholder:text-gray-400"
                            id="commentaire"
                            name="commentaire"
                            required
                            placeholder={t("Parlez-nous de votre projet !")}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center mt-2">
                    <Button type="submit" className="w-2/3 flex gap-2 items-center">
                        <Mail className="!w-4 !h-4" />
                        {t("Send")}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};
