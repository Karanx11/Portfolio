import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosConfig";

function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔒 Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/admin");
  }, [navigate]);

  // 🚀 Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/send-otp", { email });
      alert("OTP sent to your email 📩");
      setStep(2);
    } catch (error) {
      alert(error.response?.data?.message || "Error sending OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🚀 Verify OTP & Create Admin
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/verify-otp", {
        email,
        otp,
        password,
      });

      alert("Signup successful 🎉 Please login");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "OTP verification failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-[#111111] p-8 rounded-xl border border-gray-800 w-80 space-y-6 shadow-xl">
        <h2 className="text-2xl text-[#FF7722] font-bold text-center">
          Admin Signup
        </h2>

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#FF7722] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#FF7722] text-black hover:scale-105"}`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#FF7722] outline-none"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Set Password"
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

            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#FF7722] text-black hover:scale-105"}`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Verifying..." : "Verify & Create Admin"}
            </button>
          </form>
        )}

        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#FF7722] cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
