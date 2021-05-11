import React, { useState } from 'react';
import Form from './components/Form';
import { validEmail, validPassword } from './components/Regex.js';


function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const Login = details => {
    if (!validEmail.test(details.email)) {
      setEmailError(true);
      console.log('wrong email');
    }
    if (!validPassword.test(details.password)) {
      setPassError(true);
      console.log('wrong pass');
    }
    if (!passError && !emailError) {
      console.log('details correct');
      setUser({
        name: details.name,
        email: details.email,
        password: details.password

      });
    }
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

  return (
    <div className="App">
      {(user.name !== "" && user.email !== "" && user.password !== "" && !emailError && !passError) ?
        (<>
          <h3>Logged as <span>{user.name}</span></h3>
          <button onClick={Logout}>Exit</button>
        </>
        )
        :
        (

          <>
            <Form Login={Login} emailError={emailError} passError={passError} passErrorChanger={setEmailError} emailErrorChanger={setPassError} />
          </>
        )
      }
    </div>
  )
}

export default App;
