import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

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
      className="bg-[#111111] p-8 rounded-xl border border-gray-800 w-80 space-y-5"
    >
      <h2 className="text-2xl text-[#FF7722] font-bold text-center">
        Admin Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full p-3 bg-black border border-gray-700 rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        className="w-full p-3 bg-black border border-gray-700 rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full py-3 bg-[#FF7722] text-black font-semibold rounded-lg hover:scale-105 transition">
        Login
      </button>

      {/* Signup Link */}
      <p className="text-sm text-gray-400 text-center mt-4">
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
