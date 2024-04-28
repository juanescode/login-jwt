import { useState } from "react";
import "./styles.css";
import Home from '../Home/Home'

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginSuccessful,setloginSuccessful] = useState(false);

  const handdleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.token);

        if (result.token) {
          localStorage.setItem("token", result.token);
          setloginSuccessful(true);
        } else {
          setloginSuccessful(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>{loginSuccessful ? <Home /> : <div className="form-container">
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div className="button-container">
        <button type="submit" onClick={handdleLogin}>
          Login
        </button>
      </div>
    </form>
  </div>}</>
  );
}

export default Login;
