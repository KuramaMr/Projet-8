import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import NavBar from "../components/Navbar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Error from "../pages/Error.jsx"
import Marge from "../components/Marge/Marge.jsx"
import "../styles/LogementFiche.css"

const arrayStars = [1, 2, 3, 4, 5]

function LogementFiche () {
    
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement, setIdLogement] = useState(searchParams.get('_id'));
    const [id, setId] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then(response => response.json())
        .then(data => {
            setIdLogement(idLogement);
            setId(data);
        })
    })

    // cherche l'id dans le fichier Datas.json
    const record = id.find(element => element.id === idLogement)

    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!record) return(<Error />)
 
    // récupère la liste des équipements
    const equipements = record.equipments.map((element, index) => (
        <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
    ))

    return (
        <div className='logement'>
            <Marge>
            <NavBar />

                {/* carousel d'images */}
                    <Carousel pictures={record.pictures}/>
        
                        <div className='ficheLogements'>

                            <div className='div-description'>

                                <h1>{record.title}</h1>
                                <h4>{record.location}</h4>
                                    <div className='div-tags'>

                                        { record.tags.map((element, index) => {
                                         return(<p className='tags' key={"tags-"+index}>{element}</p>)
                                        })}
                                    </div>
                            </div>
                        

                            {/* 2 - Affiche le nom du propriétaireet sa photo */}
                            <div className='bloc-stars'>
                                <div className='div-etoiles'>
                                    <p>{record.host.name}</p>
                                    <img src={record.host.picture} alt={record.title} />
                                </div>
                        
                                {/* 3 - Met et colorie les étoiles */}
                                <div className='stars'>
                                    {
                                    arrayStars.map(element => {
                                        const nbreEtoiles = parseInt(record.rating)
                                        return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                                 })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* affiche la description et les équipements */}
                        <div className='collapseLogement'>
                            <Collapse title="Description" content={record.description} />
                            <Collapse title="Équipements" content={equipements} />
                        </div>
                </Marge>
                <Footer />
        </div>
    )
}

export default LogementFiche 