import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function AddProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    demoLink: "",
    featured: false,
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProject({
      ...project,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", project.title);
    formData.append("description", project.description);

    formData.append(
      "technologies",
      JSON.stringify(
        project.technologies
          .split(",")
          .map((tech) => tech.trim())
      )
    );

    formData.append("githubLink", project.githubLink);
    formData.append("demoLink", project.demoLink);
    formData.append("featured", project.featured);

    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      await api.post("/projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Project Added Successfully");

      navigate("/admin/dashboard");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error adding project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Add <span className="text-pink-600">Project</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="font-semibold">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="font-semibold">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={project.description}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="font-semibold">
              Technologies
            </label>

            <input
              type="text"
              name="technologies"
              value={project.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, Express, MongoDB"
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">
              GitHub Link
            </label>

            <input
              type="url"
              name="githubLink"
              value={project.githubLink}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">
              Live Demo Link
            </label>

            <input
              type="url"
              name="demoLink"
              value={project.demoLink}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">
              Project Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full mt-2"
            />
          </div>

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              checked={project.featured}
              onChange={handleChange}
            />

            <label className="font-semibold">
              Featured Project
            </label>

          </div>

          <button
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>

        </form>

      </div>

    </section>
  );
}