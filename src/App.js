import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  const error = error => {
    console.log(error);
  }

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log('Lougout');
  }

  return (
    <div className="App">
      {(user.email != "") ?
        (
          console.log('chato langas')
        )
        :
        (
          <Form Login={Login} error={error} />
        )
      }
    </div>
  )
}

export default App;
