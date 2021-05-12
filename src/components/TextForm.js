import React from 'react'

const handleMessageSubmission = (e) => {
    e.preventDefault();

}

function TextForm() {
    return (
        <form>
            <textarea name="message-area" id="message-area" cols="50" rows="8" placeholder="Say something!"></textarea>
            <input type="submit" value="Send" onClick={handleMessageSubmission} />
        </form>
    )
}

export default TextForm
