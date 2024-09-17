// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, subject, email, message } = req.body;

        // Configuration Nodemailer avec IONOS
        const transporter = nodemailer.createTransport({
            host: "smtp.ionos.fr", // Serveur SMTP IONOS
            port: 465, // Port sécurisé
            secure: true, // Utilisation du SSL
            auth: {
                user: process.env.EMAIL_USER, // Utilise la variable d'environnement pour l'email
                pass: process.env.EMAIL_PASS, // Utilise la variable d'environnement pour le mot de passe
            },
        });

        try {
            // Contenu de l'email
            await transporter.sendMail({
                from: `"${firstName} ${lastName}" <${email}>`, // L'adresse email de l'expéditeur (l'utilisateur)
                to: "Contact@synergieInnovation.fr", // L'adresse email de réception
                subject: `Nouvelle demande de contact : ${subject}`, // Sujet de l'email
                text: `
                    Nom: ${firstName} ${lastName}
                    Sujet: ${subject}
                    Email: ${email}
                    Message: ${message}
                `,
            });

            // Réponse succès
            return res.status(200).json({ message: "Email envoyé avec succès" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
        }
    } else {
        // Méthode HTTP non autorisée
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ message: `Méthode ${req.method} non autorisée` });
    }
}
