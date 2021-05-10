import React, { useState } from 'react';
import Form from './components/Form';
import { validEmail, validPassword } from './components/Regex.js';

function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const Login = details => {
    setEmailError(false);
    setPassError(false);
    if (!validEmail.test(details.email)) {
      setEmailError(true);
    }
    if (!validPassword.test(details.password)) {
      setPassError(true);
    }
    setUser({
      name: details.name,
      email: details.email,
      password: details.password

    });
  }

  const Logout = () => {

    setUser({
      name: "",
      email: "",
      password: ""
    });
    setEmailError(false);
    setPassError(false);

  }

  // user.name !== "" && user.email !== "" && user.password !== "" &&

  return (
    <div className="App">
      {(!setEmailError && !setPassError) ?
        (<>
          <h3>Logged as <span>{user.name}</span></h3>
          <button onClick={Logout}>Exit</button>
        </>
        )
        :
        (

          <>
            {/* {emailError && <p>Your email is invalid</p>}
            {passError && <p>Your password must contain 8 characters and at least one numeric value</p>} */}
            <Form Login={Login} emailError={emailError} passError={passError} />
          </>
        )
      }
    </div>
  )
}

export default App;
