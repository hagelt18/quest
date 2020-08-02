import React, { useState } from 'react';
import './AnswerField.css';
import { useEffect } from 'react';
// const chestGif = require('../assets/images/chest3d.gif');

export default ({ clueId, answer, onChange }) => {

    const [chars, setChars] = useState([...answer].map(a => ''));
    const refs = [...answer].map(a => React.createRef());//[];

    useEffect(() => {
        setChars([...answer].map(a => ''));
    }, [clueId])

    const inputValueChanged = (i, e, value) => {
        const newChars = [...chars];
        newChars[i] = value;
        setChars(newChars);
        onChange(newChars.join('').trim());

        if (value) {
            var nextControl = refs[i + 1];
            if (nextControl && nextControl.current) {
                nextControl.current.focus();
                nextControl.current.select();
            }
        }
    }
    const onChangeHandler = ix => e => {
        inputValueChanged(ix, e, e.target.value)
    };

    let backspacePressed = false;
    const onInputKeyDown = ix => e => {
        if (e.keyCode === 8) {
            // Only run this code once while the backspace key is down
            if (!backspacePressed) {
                backspacePressed = true;
                // If this input has no value, delete the value of the input before it.
                if (!refs[ix].current.value && (ix - 1) >= 0) {
                    // var previousInput = e.current.previousElementSibling;
                    var previousInput = refs[ix - 1].current;
                    previousInput.focus();

                    // previousInput.value = '';

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

    return (
        <div>
            {[...answer].map((a, i) => {
                return (
                    <span key={i} className="CharacterInputWrapper">
                        <input className="CharacterInput"
                            type="text"
                            maxLength={1}
                            onChange={onChangeHandler(i)}
                            onKeyDown={onInputKeyDown(i)}
                            onKeyUp={onInputKeyUp}
                            ref={refs[i]}
                            value={chars[i]}
                        />
                    </span>

                )
            })}
        </div>
    )
}