import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div>
      <img src={user.image} alt={user.username} />
      <span>Welcome, {user.username}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
