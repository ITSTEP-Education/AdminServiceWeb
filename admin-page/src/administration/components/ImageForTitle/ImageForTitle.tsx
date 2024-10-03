import React from "react";
import './ImageForTitle.css';
import imageForTitleOne from '../../assets/images/imageForTitleOne.png';
import imageForTitleTwo from '../../assets/images/imageForTitleTwo.png';
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