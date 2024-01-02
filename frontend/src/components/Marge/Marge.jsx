import React from 'react';
import "../Marge/Marge.css";

function Marge({children}) {
    return(
        <div className='marge'>{children}</div>
    )
}

export default Marge