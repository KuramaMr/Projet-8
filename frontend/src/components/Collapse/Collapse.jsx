import React, {useState} from "react";

function Collapse({title, content}) {

    const [contentVisible, setContentVisible] = useState(false)

    
    // à chaque clic sur le collapse, inverse la valeur pour le ouvert/fermé
    const affContent = () => {
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }

    const collapseContent = (contentVisible ? "visible" : "hidden") + "collapse"
}   const collapseChevron = (contentVisible ? chevronUp : chevronDown)