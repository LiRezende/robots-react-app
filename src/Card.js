import React from "react";
import "./index.css";

const Card = ({ id, name, email }) => {
    return (
        <div className="card_container">
            <div>
                <img alt="Photo" src={`https://robohash.org/${id}?200px`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>            
        </div>
    );
}
export default Card;