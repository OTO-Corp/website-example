import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const ContactUsCard = () => {
    const { t } = useTranslation();

    return (
        <Card className="w-full max-w-lg mx-auto my-12 shadow-xl/20">
            <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-center text-primary tracking-tight">
                    {t("Contactez-nous")}
                </CardTitle>
            </CardHeader>
            <form>
                <CardContent className="flex flex-col gap-5 mb-4">
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
                        <Textarea className="resize-none" id="commentaire" name="commentaire" rows={3} required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button type="submit" className="w-2/3 flex gap-2 items-center">
                        <Mail className="w-4 h-4" />
                        {t("Send")}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};
