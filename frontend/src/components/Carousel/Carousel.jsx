import React, { useState } from 'react';
import ChevronLeft from '../../assets/images/ChevronLeft.png';
import ChevronRight from '../../assets/images/ChevronRight.png';
import "../Carousel/Carousel.css";



function Carousel({pictures}) {

    const [index, setIndex] = useState(0) // variable de compteur, défini au départ sur 0
    const totalPictures = pictures.length-1 // nombre max d'images

    if (index < 0) setIndex(totalPictures) // si inférieur à zéro, défini le nombre d'images max
    if (index > totalPictures) setIndex(0) // si supérieur au max d'images, alors met à zéro

    return (

        <div className='Carousel'>

            <div className='div-image'>
                <img src={pictures[index]} className='classImage' key={"car-"+index} alt={"photo "+index}/>
            </div>

            {/* si plus d'une image, alors ce code sera exécuté */}

            {totalPictures > 0 && ( 
                <div> {/* les boutons pour les chevrons droit et gauche, servent pour naviguer au sein du Carousel */}
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={ChevronLeft} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={ChevronRight} className='classChevronDroit' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}

            {totalPictures > 0 && (
                // compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}

        </div>
    )
}

export default Carousel