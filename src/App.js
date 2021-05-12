import React, { useState, useEffect } from 'react';
import { validEmail, validPassword } from './components/Regex.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import LogForm from './components/LogForm';

function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [msgList, setMsgList] = useState(null);
  const dataURL = 'https://api.jsonbin.io/b/609bcbbce0aabd6e191ce3a4/2';
  const userKey = "$2b$10$VYt99Wh61wdDtH0nYhkIMeFQsiSCDYfcwQinNCj9cHUvLfLeZcp0.";

  useEffect(() => {
    getData().then(data => {
      setMsgList(data);
    }).catch(err => {
      console.log(err);
    });

  }, []);


  const getData = async () => {
    const response = await fetch(dataURL, {
      method: "GET",
      headers: {
        "X-Master-Key": userKey,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  }



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
          <Route exact path="/">
            <Dashboard Logout={Logout} user={user} messages={msgList} />
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
