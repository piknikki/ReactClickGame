import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">  < img id="title-image" src="/public/images/camplogo.png" alt="camp logo" /> {"  "}{props.children}</h1>;

export default Title;
