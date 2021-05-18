import React, { useState } from 'react';

function TextForm({ addMessage }) {
    const [message, setMessage] = useState("");
    const [value, setValue] = useState(message || "");

    const handleMessageSubmission = (e) => {
        e.preventDefault();
        setMessage(value);
        addMessage(value);
        setValue("");
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleMessageSubmission(e);
        }
    }

    const autoGrow = element => {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    return (
        <form className="message-input" onSubmit={e => handleMessageSubmission(e)}>
            <textarea name="message-area" id="message-area" placeholder="Say something!" onChange={e => setValue(e.target.value)} onInput={e => autoGrow(e.target)} onKeyPress={e => handleKeyPress(e)} value={value}></textarea>
            <input type="submit" value="Send" />

        </form>
    )
}

export default TextForm
