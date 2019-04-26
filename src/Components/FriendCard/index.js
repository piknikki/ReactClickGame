import React from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img
                    alt={props.name}
                    src={props.image}
                />
            </div>
            <span className="remove" onClick={() => props.handleSelect(props.id)}>x</span>
        </div>

    );
}

export default FriendCard;