import React from 'react';
import './InputContainer.css';

function InputContainer({setEmoji}) {
    return (
        <div className="inputContainer">
            <h4>Enter your favourite emoji: (Hint: If on windows use <code>windows + .</code> key) </h4><br />
            <input type="text" placeholder="Enter the emoji.." onChange={(e) => {setEmoji(e.target.value)}}/>
        </div>
    )
}

export default InputContainer;