import React from "react";
import NavBar from "../components/Navbar/NavBar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Collapse from "../components/Collapse/Collapse.jsx";
import Marge from "../components/Marge/Marge.jsx"
import "../styles/About.css"

function About() {
        const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div className="about-content">
            <Marge>
            <NavBar />
            <div className="banner">
                <img className="imgBanner" src={require("../assets/images/Montagne.png")} alt=""/>
            </div>
            <div className="about">
                <div className="collapse-container"><Collapse title="Fiabilité" content={fiabilite} /></div>
                <div className="collapse-container"><Collapse title="Respect" content={respect} /></div>
                <div className="collapse-container"><Collapse title="Service" content={service} /></div>
                <div className="collapse-container"><Collapse title="Sécurité" content={securite} /></div>
            </div>
            </Marge>
            <Footer />
        </div>
    )
}

export default About