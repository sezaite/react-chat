import React, { useState } from 'react';

function TextForm({ addMessage }) {
    const [message, setMessage] = useState("");

    const handleMessageSubmission = (e) => {
        e.preventDefault();
        addMessage(message);
    }

    function autoGrow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    return (
        <form className="message-input">
            <textarea name="message-area" id="message-area" placeholder="Say something!" onChange={e => setMessage(e.target.value)} value={message} onInput={e => autoGrow(e.target)}></textarea>
            <input type="submit" value="Send" onClick={handleMessageSubmission} />

        </form>
    )
}

export default TextForm
