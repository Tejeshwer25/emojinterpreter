import React from 'react'
import EmojiTray from './EmojiTray/EmojiTray';
import InputContainer from './InputContainer/InputContainer';
import OutputTab from './OutputTab/OutputTab';
import emojiData from '../../EmojiData/emojiData';

import './MainSection.css';
import { useState } from 'react';

function MainSection() {

    let [emoji, setEmoji] = useState('');
    console.log(emoji)

    return (
        <div className="mainSection">
            <InputContainer setEmoji={setEmoji}/>

            <OutputTab emoji={emoji} emojiData={emojiData}/>

            <EmojiTray emojiData={emojiData} setEmoji={setEmoji}/>
        </div>
    )
}

export default MainSection;