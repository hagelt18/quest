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
        setFullText(newText.trim())
        onChange(newText.trim());

        if (value) {
            var nextControl = refs[i + 1];
            if (nextControl) {
                nextControl.focus();
                nextControl.select();
            }
        }
    }

    for (var i = 0; i < length; i++) {
        const onChangeHandler = ix => e => {
            inputValueChanged(ix, e.target.value)
        };

        let backspacePressed = false;
        const onInputKeyDown = ix => e => {
            if (e.keyCode === 8) {
                // Only run this code once while the backspace key is down
                if (!backspacePressed) {
                    backspacePressed = true;
                    // If this input has no value, delete the value of the input before it.
                    if (!refs[ix].value && (ix - 1) >= 0) {
                        var previousInput = refs[ix - 1];
                        previousInput.focus();
                        previousInput.value = '';
                        inputValueChanged(ix - 1, '');
                    }
                }
            }
        }
        const onInputKeyUp = e => {
            if (e.keyCode === 8) {
                backspacePressed = false;
            }
        }
        const refSetter = (ref) => {
            refs.push(ref);
        }

        inputs.push((
            <span key={i} className="CharacterInputWrapper">
                <input className="CharacterInput"
                    type="text"
                    maxLength={1}
                    onChange={onChangeHandler(i)}
                    onKeyDown={onInputKeyDown(i)}
                    onKeyUp={onInputKeyUp}
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