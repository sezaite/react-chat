import React from 'react'

function useValidPassword(input) {
    const passRgx = new RegExp('^(?=.*[0-9])(?=.{8,})');
    return passRgx.test(input);
}

export default useValidPassword
