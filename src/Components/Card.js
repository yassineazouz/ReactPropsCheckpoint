import React, { useState } from "react";
import './Card.css'


function card() {

    const [name, setName] = useState('Yassine Azzouz');
    const [job, setJob] = useState('Yassine Azzouz');
    const [about, setAbout] = useState('Yassine Azzouz');



    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="" alt="" height='100px' width='100px' />
                </div>
            </div>
            <div className="lower-container">
                <h3> {name} </h3>
                <h3> {job} </h3>
                <p>  about me  </p>

            </div>


        </div>
    )

}