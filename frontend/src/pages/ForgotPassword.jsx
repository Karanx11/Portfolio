import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosConfig";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/forgot-password", { email });
      alert("OTP sent 📩");
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/reset-password", {
        email,
        otp,
        newPassword,
      });

      alert("Password updated ✅");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
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

            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#FF7722] text-black"}`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending OTP..." : "Send OTP"}
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

            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#FF7722] text-black"}`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
