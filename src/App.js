import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [formdata, setformdata] = useState({
    username: "",
    password: "",
    grant_type: "password"
  })

  function formSubmit(){
    console.log(formdata);
    axios.post(
      // "https://esme6u7phh.execute-api.us-east-1.amazonaws.com/dev/token",
      "http://localhost:8000/signin",
    formdata,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'Basic cm9raW4tY2xpZW50OnNlY3JldA==',
      // 'Access-Control-Allow-Origin': '*'
    }).then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    })
    // axios.get(
    //   // "https://esme6u7phh.execute-api.us-east-1.amazonaws.com/",
    //   "http://localhost:8000/signin").then((resp) => {
    //   console.log(resp);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Username:</p>
        <input value={formdata["username"]} onChange={e => setformdata({...formdata, username:e.target.value})} type="email"></input>
        <p>Password:</p>
        <input value={formdata["password"]} onChange={e => setformdata({...formdata, password:e.target.value})} type="password"></input>
        <button type="submit" onClick={formSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
