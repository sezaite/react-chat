import React from 'react'

function useValidEmail(input) {
    const emailRgx = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    return emailRgx.test(input);
}

export default useValidEmail
