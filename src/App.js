import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

function App() {
  const [name, setName] = useState("");
  const [err, setErr] = useState(2);
  async function onSubmit(e) {
    e.preventDefault();
    console.log(name);
    let response = await axios.get(`http://localhost:5000/auth/signin?id=${name}`);
    setErr(response.data ? 0 : 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Hello</Button>

        {
          err === 0 ? (<p>hello admin</p>) : (err === 1 ? (<p>login failed</p>) :
            (
              <form onSubmit={onSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            ))
        }
      </header>
    </div>
  );
}

export default App;
