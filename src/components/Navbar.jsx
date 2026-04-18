import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  // 🌙 Dark mode with persistence
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleCartClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold text-gray-800 dark:text-white"
      >
        🛍️ MyStore
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        
        {/* Cart */}
        <button
          onClick={handleCartClick}
          className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          🛒 Cart
        </button>

        {/* Auth */}
        {user ? (
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-3 py-1 rounded bg-black text-white hover:opacity-80 transition"
          >
            Login
          </Link>
        )}

        {/* Dark toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;