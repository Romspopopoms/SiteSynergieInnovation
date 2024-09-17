import React, { useState } from "react";
import BG from "../assets/Bglandinghome.webp"; // Vérifiez le chemin de l'image avec require
import { FaChevronDown } from "react-icons/fa"; // Importer l'icône

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
    });

    const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
    const [selectedSubject, setSelectedSubject] = useState("Sélectionnez"); // État pour gérer le sujet sélectionné

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
                alert("Votre message a été envoyé avec succès !");
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

    // Gestion de l'ouverture/fermeture du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Gérer la sélection dans le menu
    const handleSelect = (value) => {
        setSelectedSubject(value);
        setFormData((prevState) => ({
            ...prevState,
            subject: value, // Mettre à jour le sujet dans le formulaire
        }));
        setMenuOpen(false); // Fermer le menu après sélection
    };

    return (
        <div 
            className="w-full min-h-screen bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }} // Vérifiez si l'ajout de `.default` résout le problème
        >
            <div className="min-h-screen flex items-center justify-center py-12">
                <form 
                    onSubmit={handleSubmit} 
                    className="p-8 w-full max-w-xl space-y-8"
                >
                    <div className="flex flex-col justify-center items-center">
                    <h1 className="text-7xl font-bold font-afacad text-center text-white w-full">Contactez-nous !</h1>
                    <p className="text-center text-white font-afacad text-3xl">Et obtenez votre devis</p>
                    </div>
                    <div className="flex space-x-4 justify-center items-center">
                        <div className="flex flex-col w-full">
                            <h2 className="text-white font-afacad mb-1 font-medium text-xl">Nom</h2>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Nom"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-black border-white font-afacad"
                        />
                        </div>
                        <div className="flex flex-col w-full">
                            <h2 className="text-white font-afacad mb-1 font-medium text-xl">Prénom</h2>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Prénom"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-black border-white font-afacad"
                        />
                    </div>
                    </div>

                    <div className="relative w-full">
                        {/* Icône à droite qui tourne en fonction de l'état */}
                        <FaChevronDown 
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} 
                        />

                        {/* Affichage de l'option sélectionnée */}
                        <div 
                            className="w-full px-4 py-2 border rounded-md bg-white text-black cursor-pointer relative flex justify-between items-center"
                            onClick={toggleMenu} // Ouvre ou ferme le menu
                        >
                            {selectedSubject}
                        </div>

                        {/* Liste déroulante */}
                        {menuOpen && (
                            <div className="absolute w-full mt-2 bg-transparent shadow-md rounded-lg backdrop-blur-[160px] ">
                                <ul className="space-y-2">
                                    {["Site web", "Logo", "Charte graphique", "Communication", "Photo", "Autre"].map((item, index) => (
                                        <li 
                                            key={index} 
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-white text-center font-afacad text-xl"
                                            onClick={() => handleSelect(item)} // Sélectionne l'élément
                                        >
                                            {item}
                                        <hr className="border-b h-px bg-gradient-to-r from-transparent via-white to-transparent mt-2" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-black border-white font-afacad"
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md h-32 bg-white text-black placeholder-black border-white font-afacad"
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
        </div>
    );
};

export default Contact;
