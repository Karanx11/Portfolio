import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // 🔒 Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Prevent login again if already logged in
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      navigate("/admin");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/admin");

    } catch (error) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleLogin}
        className="bg-[#111111] p-8 rounded-xl border border-gray-800 w-80 space-y-5 shadow-xl"
      >
        <h2 className="text-2xl text-[#FF7722] font-bold text-center">
          Admin Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#FF7722] outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password with toggle */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-lg pr-12 focus:border-[#FF7722] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 cursor-pointer text-gray-400 hover:text-[#FF7722]"
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        {/* Login Button */}
        <button className="w-full py-3 bg-[#FF7722] text-black font-semibold rounded-lg hover:scale-105 transition duration-200">
          Login
        </button>

        {/* Forgot Password */}
        <p
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-gray-400 cursor-pointer hover:text-[#FF7722] text-center"
        >
          Forgot Password?
        </p>

        {/* Signup Link */}
        <p className="text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#FF7722] cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
