import React from "react";
import "./Banner.css"

function Banner() {
    return(
        <div className="banner">
            <img src={require("../../assets/images/Falaise.png")} alt="Falaise" className="imgBanner"></img>
            <div className="texte">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner