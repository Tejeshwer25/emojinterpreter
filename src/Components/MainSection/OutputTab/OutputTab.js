import React from 'react';
import './OutputTab.css';

function OutputTab({emoji, emojiData}) {
    let message = <p>Enter an emoji above or choose from below, and the meaning will be displayed here... <br/ ><br /> **If emoji exists in our data😁</p>;

    for(let i=0; i<emojiData.length; i++) {
        if(emojiData[i].emoji === emoji) {
            message = <p>{emojiData[i].meaning}</p>;
            console.log(emoji.length);
        }
    }

    console.log(message);

    return (
        <div className="outputTab">
            {message}
        </div>
    )
}

export default OutputTab;