import React, { useState } from 'react';

function TextForm({ addMessage }) {
    const [message, setMessage] = useState("");

    const handleMessageSubmission = (e) => {
        e.preventDefault();
        addMessage(message);
    }

    return (
        <form>
            <textarea name="message-area" id="message-area" cols="50" rows="8" placeholder="Say something!" onChange={e => setMessage(e.target.value)} value={message}></textarea>
            <input type="submit" value="Send" onClick={handleMessageSubmission} />
        </form>
    )
}

export default TextForm
