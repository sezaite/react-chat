import logo from './logo.svg';
import './App.css';

function App() {
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
  );
}

export default App;
