import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/auth/forgot-password",
      { email }
    );

    alert("OTP sent 📩");
    setStep(2);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/auth/reset-password",
      { email, otp, newPassword }
    );

    alert("Password updated ✅");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-[#111111] p-8 rounded-xl w-80 space-y-6">

        <h2 className="text-2xl text-[#FF7722] font-bold text-center">
          Reset Password
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
            <button className="w-full py-3 bg-[#FF7722] text-black rounded-lg">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
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
              placeholder="New Password"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className="w-full py-3 bg-[#FF7722] text-black rounded-lg">
              Reset Password
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default ForgotPassword;
