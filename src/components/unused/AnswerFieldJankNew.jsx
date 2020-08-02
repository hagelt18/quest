import React, { useState } from 'react';
import './AnswerField.css';
import { useEffect } from 'react';
// const chestGif = require('../assets/images/chest3d.gif');

export default ({ clueId, answer, onChange }) => {

    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        setTextValue('');
    }, [clueId])

    function stopCarret(e) {
        if (e.target.value.length > 3) {
            setCaretPosition(e.target, 3);
        }
    }

    function setCaretPosition(elem, caretPos) {
        if (elem != null) {
            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', caretPos);
                range.select();
            }
            else {
                if (elem.selectionStart) {
                    elem.focus();
                    elem.setSelectionRange(caretPos, caretPos);
                }
                else
                    elem.focus();
            }
        }
    }

    const onValueChange = (e) => {
        setTextValue(e.target.value);
        onChange(e.target.value)
    };

    return (
        <div id="divOuter">
            <div id="divInner">
                <input
                    id="partitioned" type="text" maxlength={answer.length}
                    value={textValue}
                    onChange={onValueChange}
                    onKeyDown={stopCarret} onKeyUp={stopCarret} />
            </div>
        </div>
    )
}