import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/profile/Account';
import Edit from './components/edit/Edit';
import LogForm from './components/login/LogForm';
import './App.scss';
import isValidPassword from './components/helpers/isValidPassword';
import isValidEmail from './components/helpers/isValidEmail';

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || { name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [msgList, setMsgList] = useState(null);
  const dataURL = "https://api.jsonbin.io/b/609e4af91ad3151d4b2f8aed";
  const userKey = "$2b$10$VYt99Wh61wdDtH0nYhkIMeFQsiSCDYfcwQinNCj9cHUvLfLeZcp0.";

  useEffect(() => {
    getData().then(data => {
      setMsgList(data.messages);
      // document.querySelector('ul.messages').scrollIntoView(false);
    }).catch(err => {
      console.log(err);
    });

  }, []);

  const addMessage = message => {
    const newMessage = { "id": msgList.length + 1, "user": user.name, "text": message };
    setMsgList([...msgList, newMessage]);
    updateData().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  const updateData = async () => {
    const response = await fetch(dataURL, {
      method: "PUT",
      headers: {
        "X-Master-Key": userKey,
        "Content-Type": "application/json",
        // "X-Bin-Versioning": false
      },
      body: JSON.stringify({ 'messages': msgList })
    });
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // + "/latest"

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
    if (!isValidEmail(details.email)) {
      console.log('emailas neteisingas')
      setEmailError(true);
    }
    if (!isValidPassword(details.password)) {
      setPassError(true);
    }
    if (!emailError && !passError) {
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
    sessionStorage.clear();
  }

  if (msgList === null) {
    return (
      <h1 className="loader">Loading...</h1>
    )
  }

  else if (user.name === "" || user.email === "" || user.password === "" || emailError || passError) {
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
            <Dashboard Logout={Logout} user={user} messages={msgList} addMessage={addMessage} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/account">
            <Account Logout={Logout} user={user} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/edit">
            <Edit Logout={Logout} user={user} setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;
