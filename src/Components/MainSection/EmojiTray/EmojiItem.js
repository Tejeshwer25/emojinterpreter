import React from 'react'

function EmojiItem(props) {
    return (
        <div className="emojiItem" onClick={(e) => {props.setEmoji(props.emoji)}}>
            {props.emoji}
        </div>
    )
}

export default EmojiItem
