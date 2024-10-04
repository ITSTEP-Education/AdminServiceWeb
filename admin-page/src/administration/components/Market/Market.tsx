import React from 'react';
import './Market.css';
import GooglePlay from '../../assets/images/Google.png';
import AppStore from '../../assets/images/AppStore.png';
const Market = () => {
    return (
        <div className="market">
            <div className='Googleplay'>
                <img src={GooglePlay} alt="GooglePlay" /></div>
            <div className='Appstore'>
                <img src={AppStore} alt="AppStore" /></div>
        </div>
    )
}

export default Market