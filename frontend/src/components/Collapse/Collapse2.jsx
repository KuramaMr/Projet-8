import React, { useState } from "react";
import chevronUp from "../../assets/images/ChevronUp.png";
import chevronDown from "../../assets/images/ChevronDown.png";

const ToggleVisibility =({title, content}) => {
    const [show, setShow] = useState(true)

    return(

        <React.Fragment>
            {show && title && content}
            <div onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
                {show ? chevronUp : chevronDown}
                <div className="title">
                    <span>{title}</span>
                </div>   
            </div>
        </React.Fragment>
        
    )
}

export default ToggleVisibility