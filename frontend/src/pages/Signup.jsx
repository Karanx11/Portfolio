import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/send-otp",
        { email }
      );

      alert("OTP sent to your email 📩");
      setStep(2);

    } catch (error) {
      alert(error.response?.data?.message || "Error sending OTP");
    }
  };

  // Verify OTP & Create Admin
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { email, otp, password }
      );

      alert("Signup successful 🎉 Please login");
      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-[#111111] p-8 rounded-xl border border-gray-800 w-80 space-y-6">

        <h2 className="text-2xl text-[#FF7722] font-bold text-center">
          Admin Signup
        </h2>

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="w-full py-3 bg-[#FF7722] text-black font-semibold rounded-lg">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <input
              type="password"
              placeholder="Set Password"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full py-3 bg-[#FF7722] text-black font-semibold rounded-lg">
              Verify & Create Admin
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default Signup;
