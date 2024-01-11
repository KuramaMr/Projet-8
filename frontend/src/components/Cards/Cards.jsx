import './Cards.css';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card



function Cards() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then(response => response.json())
        .then(data => {
            setDatas(data);
        })
    })

    return (
        <div className="logements">

            {/* liste la base de données */}
            {datas.map((Data) => {
                const { id, cover, title } = Data;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/LogementFiche", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards