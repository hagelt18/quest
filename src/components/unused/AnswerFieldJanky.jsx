import React from 'react';
import './AnswerField.css';
// const chestGif = require('../assets/images/chest3d.gif');

export default ({ length, onChange }) => {

    var inputValueChanged = (e) => {
        onChange(e.target.value);
    }
    var inputWidth = length * (22);
    return (
        <div className="CharacterInputWrapper">
            <input className="CharacterInput"
                type="text"
                maxLength={length}
                style={{ width: `${inputWidth}px` }}
                onChange={inputValueChanged}
            />
        </div>
    )
}