import React from 'react'

function isValidPassword(input) {
    const passRgx = new RegExp("^(?=.*[0-9])(?=.{8,})");
    return passRgx.test(input);
}

export default isValidPassword
