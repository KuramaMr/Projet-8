import React, {useState} from "react";
import chevronUp from "../../assets/images/ChevronUp.png";
import chevronDown from "../../assets/images/ChevronDown.png";
import "../Collapse/Collapse.css"

function Collapse({title, content}) {

    const [contentVisible, setContentVisible] = useState(true)

    
    // à chaque clic sur le collapse, inverse la valeur pour le ouvert/fermé
    const affContent = () => {
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }

    const collapseContent = (contentVisible ? "visible" : "hidden") + "collapse"
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className="collapse">

            <div className="affTitle" onClick={affContent}>
                    <div className="chevronCollapse">
                        <img src={"collapseChevron"} alt="" />
                    </div>
            </div>

            <div className="contentTitre">
                {contentVisible && title && content}
            </div>
        </div>
    )
}

export default Collapse