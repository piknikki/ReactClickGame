import React from "react";
import "./style.css";

const Title = props => (
    <div className="row">
        <div className="col-sm-6">
            <img id="title-image" src={process.env.PUBLIC_URL + '/images/camplogo2.png'} alt="camp logo" />
        </div>
        <div className="col-sm-5">
            <p>Directions: Click on any image. After you click, the images will shuffle. Don't click on anything more than once.
            </p>
        </div>
    </div>
)
export default Title;
