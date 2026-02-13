import api from "../../utils/axiosConfig";

export default function MessagesSection({ messages, setMessages }) {
  const handleDelete = async (id) => {
    await api.delete(`/contact/message/${id}`);
    setMessages(messages.filter((m) => m._id !== id));
  };

  return (
    <section className="bg-[#111111] p-6 rounded-lg">
      <h2 className="text-xl mb-4 text-[#FF7722]">
        Contact Messages
      </h2>

      {messages.map((msg) => (
        <div key={msg._id} className="bg-black p-4 mb-3 rounded">
          <div className="flex justify-between">
            <strong>{msg.name}</strong>
            <button
              onClick={() => handleDelete(msg._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
          <p className="text-gray-400">{msg.email}</p>
          <p>{msg.message}</p>
        </div>
      ))}
    </section>
  );
}
