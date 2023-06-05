import React from "react";
import star from "../assets/star.png"

export default function Cards(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="im" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}