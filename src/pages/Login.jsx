import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", username);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Login</h1>

      <input
        type="text"
        placeholder="Enter username"
        className="border p-2 mr-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  );
}

export default Login;