import React, { useState, useEffect } from "react";

function Datas() {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/properties"
            .then (response => response.json())
            .then(properties => {
                setDatas(properties[0].datas);
                console.log(properties);
            })
            .catch((error) => console.log(error))
        )
    })
}