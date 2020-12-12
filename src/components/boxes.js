import React from 'react';
import a from '../assets/a.svg'


const Boxes = (props) => {
    const {
        name,
        image,
        rating,
        summary
    } = props.info;

    return (
            <div className= "serie_box" >
                <div className = "cover_box">
                    <img className = "cover" src = {image.original} alt = "serie"></img>
                </div>
                <div className = "desc_rat">
                    <h1>{name}</h1>
                    <p>{summary}</p>
                    <div className = "rating">
                        <p className = "p_rating">{rating.average}</p>
                        <div className = "star_icon_box">
                            <img className = "star_icon" src = {a} alt = "star"/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Boxes;