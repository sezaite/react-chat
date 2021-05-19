function isValidEmail(input) {
    const emailRgx = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    console.log(emailRgx.test(input));
    return emailRgx.test(input);
}

export default isValidEmail
