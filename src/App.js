import React, { useState, useEffect } from 'react';
import { validEmail, validPassword } from './components/Regex.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/profile/Account';
import LogForm from './components/login/LogForm';
import './App.scss';

function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [msgList, setMsgList] = useState(null);
  const dataURL = "https://api.jsonbin.io/b/609e4af91ad3151d4b2f8aed";
  const userKey = "$2b$10$VYt99Wh61wdDtH0nYhkIMeFQsiSCDYfcwQinNCj9cHUvLfLeZcp0.";

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
    getData().then(data => {
      setMsgList(data.messages);
      // console.log(msgList);
    }).catch(err => {
      console.log(err);
    });

  }, []);


  const getData = async () => {
    const response = await fetch(dataURL + "/latest", {
      method: "GET",
      headers: {
        "X-Master-Key": userKey,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  }

  // let req = new XMLHttpRequest();

  // req.onreadystatechange = () => {
  //   if (req.readyState == XMLHttpRequest.DONE) {
  //     console.log(req.responseText);
  //   }
  // };

  // req.open("PUT", dataURL, true);
  // req.setRequestHeader("Content-Type", "application/json");
  // req.setRequestHeader("X-Master-Key", userKey);
  // req.send(JSON.stringify(newMessage));




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
            <Dashboard Logout={Logout} user={user} messages={msgList} addMessage={addMessage} />
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
