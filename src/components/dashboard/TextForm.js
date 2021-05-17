import React, { useState } from 'react';

function TextForm({ addMessage }) {
    const [message, setMessage] = useState("");

    const handleMessageSubmission = (e) => {
        e.preventDefault();
        // e.target.value = "";
        document.querySelector(".message-input textarea").value = "";
        addMessage(message);
        console.log(e);
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
        <form className="message-input">
            <textarea name="message-area" id="message-area" placeholder="Say something!" onChange={e => setMessage(e.target.value)} onInput={e => autoGrow(e.target)} onKeyPress={e => handleKeyPress(e)} value={message}></textarea>
            <input type="submit" value="Send" onClick={e => handleMessageSubmission(e)} />

        </form>
    )
}

export default TextForm
