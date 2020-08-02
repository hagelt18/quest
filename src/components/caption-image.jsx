import React, { useState } from 'react';
import './caption-image.css'


export default ({ image, caption, altText }) => {

    return (

        <div className="caption-img">
            <img className="caption-img"
                src={image}
                alt={altText}
                style={{ width: '48px', height: '48px' }}
            />
            <span className="caption-img">{caption}</span>
        </div>
    );
}