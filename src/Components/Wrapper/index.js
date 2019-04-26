import React from "react";
import "./style.css";

// props taken here are from FriendCard/index.js
function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;