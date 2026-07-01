import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/contacts");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await api.delete(`/contacts/${id}`);

      alert("Message Deleted");

      fetchMessages();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Contact <span className="text-pink-600">Messages</span>
        </h1>

        {messages.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-gray-500 text-lg">
              No messages found.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-white rounded-2xl shadow-lg p-6"
              >

                <div className="flex justify-between items-center mb-4">

                  <div>
                    <h2 className="text-2xl font-bold">
                      {msg.name}
                    </h2>

                    <p className="text-pink-600">
                      {msg.email}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>

                </div>

                <p className="font-semibold text-gray-800 mb-3">
                  Subject: {msg.subject}
                </p>

                <div className="bg-gray-50 border rounded-xl p-4">
                  {msg.message}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}