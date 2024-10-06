import React, { useState } from "react";
import BG from "../assets/Bglandinghome.webp";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Helmet } from "react-helmet-async";
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
    });

    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture du modal

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Ouvre le modal après soumission réussie
                setModalOpen(true);
                // Réinitialiser les champs du formulaire
                setFormData({
                    firstName: "",
                    lastName: "",
                    subject: "",
                    email: "",
                    message: "",
                });
            } else {
                alert("Une erreur est survenue lors de l'envoi du message.");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de l'envoi du message.");
        }
    };

    const handleSelect = (value) => {
        setSelectedSubject(value);
        setFormData((prevState) => ({
            ...prevState,
            subject: value,
        }));
        setMenuOpen(false);
    };

    return (
        <div
            className="w-full min-h-screen bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Navbar />
            
            {/* SEO and Schema */}
            <Helmet>
                <title>Contact - Synergie Innovation</title>
                <meta name="description" content="Contactez Synergie Innovation pour discuter de vos projets de création de site web, design, branding, et plus encore. Obtenez un devis sur mesure." />
                <meta name="keywords" content="contact, devis site web, création de site, design, branding, Synergie Innovation" />
                <link rel="canonical" href="https://synergieinnovation.fr/contact" />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "ContactPage",
                      "name": "Contact Synergie Innovation",
                      "description": "Page de contact pour obtenir un devis ou discuter d'un projet avec Synergie Innovation.",
                      "url": "https://synergieinnovation.fr/contact"
                    }
                    `}
                </script>
            </Helmet>

            {/* Main Contact Form */}
            <div className="min-h-screen flex items-center justify-center md:py-24 py-12">
                <form onSubmit={handleSubmit} className="p-8 w-full max-w-xl space-y-8">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="md:text-7xl text-3xl font-bold font-afacad text-center text-white w-full mt-6 md:mt-0">
                            Contactez-nous !
                        </h1>
                        <p className="text-center text-white font-afacad text-3xl">Et obtenez votre devis</p>
                    </div>

                    <div className="flex space-x-4 justify-center items-center">
                        <div className="flex flex-col w-full">
                            <h2 className="text-white font-afacad mb-1 font-medium text-xl">Nom</h2>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Doe"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-400 border-white font-afacad"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <h3 className="text-white font-afacad mb-1 font-medium text-xl">Prénom</h3>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="John"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-400 border-white font-afacad"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <h4 className="text-white font-afacad mb-1 font-medium text-xl">Votre demande concerne :</h4>
                        <div className="relative w-full">
                            <FaChevronDown
                                className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#264A6E] transition-transform duration-300 ${
                                    menuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <div
                                className={`w-full px-4 py-2 border rounded-md cursor-pointer flex justify-between items-center 
                                ${selectedSubject === "" ? "text-gray-400" : "text-black"} bg-white`}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {selectedSubject === "" ? "Sélectionnez" : selectedSubject}
                            </div>

                            {menuOpen && (
                                <div className="absolute w-full mt-2 bg-transparent shadow-md rounded-lg backdrop-blur-[160px] py-4">
                                    <ul className="space-y-2">
                                        {["Site web", "Logo", "Charte graphique", "Communication", "Photo"].map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-1 cursor-pointer hover:bg-gray-200 text-white text-center font-afacad text-xl "
                                                    onClick={() => handleSelect(item)}
                                                >
                                                    {item}
                                                    <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent my-0 mt-4" />
                                                    
                                                </li>
                                            )
                                        )}
                                        <h5 className="px-4 cursor-pointer hover:bg-gray-200 text-white text-center font-afacad text-xl">Autres</h5>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <h5 className="text-white font-afacad mb-1 font-medium text-xl">Mail</h5>
                        <input
                            type="email"
                            name="email"
                            placeholder="JohnDoe@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-400 border-white font-afacad"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <h6 className="text-white font-afacad mb-1 font-medium text-xl">Votre message</h6>
                        <textarea
                            name="message"
                            placeholder="Bonjour, nous souhaitons créer un site vitrine 5 pages sur mesure, pour notre entreprise, pouvons-nous avoir davantage d'informations sur vos pratiques?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md h-32 bg-white text-black placeholder-gray-400 border-white font-afacad"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white rounded-xl hover:bg-gray-700 border-white border font-afacad"
                    >
                        Envoyer
                    </button>
                </form>
            </div>

            {/* Modal de confirmation */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-200 rounded-lg p-8 shadow-xl backdrop-blur-[160px]">
                        <h2 className="text-3xl font-bold font-afacad text-center text-[#071726]">Merci ! Votre message a bien été envoyé !</h2>
                        <p className="text-xl font-afacad text-center text-[#071726]">Nous reviendrons vers vous dans les plus brefs délais.</p>
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-6 py-2 bg-transparent border-2 border-[#071726] text-[#071726] font-afacad text-xl rounded-lg hover:bg-[#071726] hover:text-white hover:border-white"
                            >
                                C'est dans la boîte !
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <Footer />
        </div>
    );
};

export default Contact;
