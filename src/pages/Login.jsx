import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return;
    localStorage.setItem("user", username);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 dark:bg-gray-900 p-6">
      
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        <div className="hidden md:flex flex-col items-center justify-center bg-yellow-200 dark:bg-gray-700 p-8">
          
          <img
            src="https://illustrations.popsy.co/gray/web-shopping.svg"
            alt="login"
            className="w-72 mb-6"
          />

          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Welcome to MyStore
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">
            Your place to shop smart & easy
          </p>
        </div>

        <div className="p-8 flex flex-col justify-center">
          
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Login
          </h1>

          <label className="text-sm text-gray-500 mb-1">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Demo login (no backend)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;