import React from 'react';
import './caption-image.css';

export default ({ image, caption, altText, onClick }) => {
    return (
        <div className="caption-img">
            <img className="caption-img"
                src={image}
                alt={altText}
                style={{ width: '48px', height: '48px' }}
                onClick={onClick}
            />
            <span className="caption-img">{caption}</span>
        </div>
    );
}