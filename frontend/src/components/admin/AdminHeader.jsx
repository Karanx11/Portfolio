import { useNavigate } from "react-router-dom";

export default function AdminHeader({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-10 py-4">

        <h1
          className="text-2xl font-bold text-[#FF7722] cursor-pointer text-center md:text-left"
          onClick={() => navigate("/")}
        >
          Admin Dashboard
        </h1>

        <div className="flex gap-3 justify-center md:justify-end">
          <button
            onClick={() => navigate("/")}
            className="bg-[#FF7722] px-4 py-2 rounded-lg text-black font-semibold"
          >
            Go to Homepage
          </button>

          <button
            onClick={onLogout}
            className="bg-red-500 px-4 py-2 rounded-lg text-white"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
