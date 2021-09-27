import React from 'react';
import './EmojiTray.css';
import EmojiItem from './EmojiItem';

function EmojiTray({emojiData, setEmoji}) {
    let emojiItems = [];

    for(let i=0; i<5; i++) {
        emojiItems.push(emojiData[i]);
    }
    return (
        <div className="emojiTray">
            <h4>You can also choose from emoji's below:- </h4>
            <div className="emojiTray__emojis">
                {emojiItems.map(emoji => <EmojiItem key={emoji.id} emoji={emoji.emoji} setEmoji={setEmoji}/>)}
            </div>
        </div>
    )
}

export default EmojiTray
