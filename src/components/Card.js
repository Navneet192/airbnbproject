import React from "react"
import '../styles/styling/Card.css';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" alt={props.title} />
            <div className="card--info">
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" alt="rating" />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--description">{props.description}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}