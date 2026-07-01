import { useState } from "react";
import api from "../api/axios";

export default function AddSkill() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    level: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "featured"
          ? e.target.checked
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/skills", [formData]);

      alert("Skill Added Successfully");

      setFormData({
        name: "",
        category: "",
        level: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error adding skill");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Add <span className="text-pink-600">Skill</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Database">Database</option>
            <option value="Programming Language">Programming Language</option>
            <option value="Tools">Tools</option>
            <option value="AI / ML">AI / ML</option>
            <option value="Networking">Networking</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700"
          >
            Add Skill
          </button>

        </form>

      </div>
    </div>
  );
}