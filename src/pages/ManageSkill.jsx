import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ManageSkill() {
  const [skills, setSkills] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    level: "",
  });

  // Load Skills
  const fetchSkills = async () => {
    try {
      const res = await api.get("/skills");
      setSkills(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Delete Skill
  const deleteSkill = async (id) => {
    if (!window.confirm("Delete this skill?")) return;

    try {
      await api.delete(`/skills/${id}`);

      alert("Skill Deleted");

      fetchSkills();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  // Edit Button
  const handleEdit = (skill) => {
    setEditingId(skill._id);

    setFormData({
      name: skill.name,
      category: skill.category,
      level: skill.level,
    });
  };

  // Update Skill
  const updateSkill = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/skills/${editingId}`, formData);

      alert("Skill Updated");

      setEditingId(null);

      setFormData({
        name: "",
        category: "",
        level: "",
      });

      fetchSkills();
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Edit / Delete
          <span className="text-pink-600"> Skills</span>
        </h1>

        {/* Edit Form */}
        {editingId && (
          <form
            onSubmit={updateSkill}
            className="bg-white shadow-xl rounded-2xl p-8 mb-10 space-y-5"
          >

            <input
              type="text"
              placeholder="Skill Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            />

            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Programming Language">
                Programming Language
              </option>
              <option value="Database">Database</option>
              <option value="Tools">Tools</option>
              <option value="AI / ML">AI / ML</option>
              <option value="Networking">Networking</option>
              <option value="Other">Other</option>
            </select>

            <select
              value={formData.level}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  level: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>

            <div className="flex gap-4">

              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700"
              >
                Update Skill
              </button>

              <button
                type="button"
                onClick={() => setEditingId(null)}
                className="bg-gray-500 text-white px-6 py-3 rounded-xl"
              >
                Cancel
              </button>

            </div>

          </form>
        )}

        {/* Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill._id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h2 className="text-xl font-bold">
                {skill.name}
              </h2>

              <p className="text-pink-600 mt-2">
                {skill.category}
              </p>

              <p className="text-gray-500 mt-1">
                {skill.level}
              </p>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => handleEdit(skill)}
                  className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteSkill(skill._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}