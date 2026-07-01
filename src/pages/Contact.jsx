import React, { useState } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(
      "https://backend-mu-nine-96.vercel.app/api/contacts",
        formData
      );

      setSuccess(res.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900">
            Contact <span className="text-pink-600">Me</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Let's Build Something Amazing Together",
              2000,
              "Feel Free To Contact Me",
              2000,
              "Open For Internship Opportunities",
              2000,
              "Let's Connect",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block mt-5 text-2xl font-semibold text-pink-600"
          />

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
            Whether you have an internship opportunity, project idea, or simply
            want to connect, I'd love to hear from you. Fill out the form below,
            and I'll get back to you as soon as possible.
          </p>

        </div>

        {/* Two Columns Start */}
        <div className="grid lg:grid-cols-2 gap-10">
                    {/* LEFT SIDE */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              I'm currently looking for internship opportunities, freelance
              projects, and collaborations. Feel free to reach out using the
              contact information below or send me a message using the form.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
                  📧
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Email
                  </h3>

                <a
  href="mailto:khadeejamemon444@gmail.com"
  className="text-pink-600 hover:underline"
>
  khadeejamemon444@gmail.com
</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
                  📱
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +92 3337265641
                  </p>
                </div>
              </div>


{/* GitHub */}
<div className="flex items-start gap-4">
  <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
    💻
  </div>

  <div>
    <h3 className="font-semibold text-gray-900">
      GitHub
    </h3>

    <a
      href="https://github.com/KhadeejaMemon"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:underline break-all"
    >
      github.com/KhadeejaMemon
    </a>
  </div>
</div>

{/* LinkedIn */}
<div className="flex items-start gap-4">
  <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
    💼
  </div>

  <div>
    <h3 className="font-semibold text-gray-900">
      LinkedIn
    </h3>

    <a
      href="https://www.linkedin.com/in/khadeeja-memon-cs/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:underline break-all"
    >
      linkedin.com/in/khadeeja-memon-cs
    </a>
  </div>
</div>
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Location
                  </h3>

                  <p className="text-gray-600">
  Karachi, Sindh, Pakistan
</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
                  💼
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Availability
                  </h3>

                  <p className="text-gray-600">
                    Open for Internships & Entry-Level Opportunities
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Message
            </h2>

            {success && (
              <div className="mb-5 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                {success}
              </div>
            )}

            {error && (
              <div className="mb-5 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  required
                />
              </div>

                            {/* Subject */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-pink-600 hover:bg-pink-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;