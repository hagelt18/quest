import React, { useState } from 'react';
import './AnswerField.css';
// const chestGif = require('../assets/images/chest3d.gif');

export default ({ length, onChange }) => {

    const [fullText, setFullText] = useState('                                 ');
    const inputs = [];
    const refs = [];



    const inputValueChanged = (i, value) => {
        let newText = fullText || '';
        if (!newText.length < length) {
            newText = newText.padEnd(length - 1);
        }
        const chars = [...newText];
        chars[i] = value;
        newText = chars.join('');
        setFullText(newText)
        onChange(newText);

        if (value) {
            var nextControl = refs[i + 1];
            if (nextControl) {
                nextControl.focus();
            }
        }
        else {
            // if ((i - 1) >= 0) {
            //     var previousControl = refs[i - 1];
            //     if (previousControl) {
            //         previousControl.focus();
            //     }
            // }
        }

    }

    for (var i = 0; i < length; i++) {
        const onChangeHandler = ix => e => {
            inputValueChanged(ix, e.target.value)
        };
        const onInputKeyDown = ix => e => {
            if (e.keyCode === 8) {
                if (!refs[ix].value && (ix - 1) >= 0) {
                    var previousInput = refs[ix - 1];
                    previousInput.focus();
                    previousInput.value = '';
                    inputValueChanged(ix - 1, '');
                }
            }
        }
        const refSetter = (ref) => {
            refs.push(ref);
        }

        inputs.push((
            <span className="CharacterInputWrapper">
                <input className="CharacterInput"
                    key={i}
                    type="text"
                    maxLength={1}
                    onChange={onChangeHandler(i)}
                    onKeyUp={onInputKeyDown(i)}
                    ref={refSetter}
                />
            </span>

        ));
    }
    return (
        <div>
            {inputs}
        </div>
    )
}