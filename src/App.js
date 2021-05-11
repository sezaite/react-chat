import React, { useState } from 'react';
import { validEmail, validPassword } from './components/Regex.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import LogForm from './components/LogForm';


function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const Login = details => {
    if (!validEmail.test(details.email)) {
      setEmailError(true);
    }
    if (!validPassword.test(details.password)) {
      setPassError(true);
    }
    if (!passError && !emailError) {
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

  if (user.name === "" || user.email === "" || user.password === "" || emailError || passError) {
    return (
      <>
        <LogForm Login={Login} emailError={emailError} passError={passError} passErrorChanger={setEmailError} emailErrorChanger={setPassError} />
      </>
    )
  }

  return (
    <Router>
      <div className="chat-app">
        <Switch>
          <Route path="/">
            <Dashboard Logout={Logout} user={user} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/account">
            <Account Logout={Logout} user={user} />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;
