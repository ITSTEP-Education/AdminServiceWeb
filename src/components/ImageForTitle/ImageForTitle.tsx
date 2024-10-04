import React from "react";
import './ImageForTitle.css';
import imageForTitleOne from '../../img/imageForTitleOne.png';
import imageForTitleTwo from '../../img/imageForTitleTwo.png';
const ImageForTitle = () => {
    return (
        <div className="ImageForTitle">
            <div className="imageForTitleOne">
                <img src={imageForTitleOne} alt="imageForTitleOne" /></div>
            <div className="imageForTitleTwo"><img src={imageForTitleTwo} alt="imageForTitleTwo" /></div>
        </div>
    )
}

export default ImageForTitle