import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");

  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username && password) login(username, password);
    setUsername(username);
    setPassword(password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/homepage", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
