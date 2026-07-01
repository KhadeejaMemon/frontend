import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ManageProject() {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    demoLink: "",
    featured: false,
  });

  const [image, setImage] = useState(null);

  // Load Projects
  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete Project
  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await api.delete(`/projects/${id}`);
      alert("Project Deleted");
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  // Edit Button
  const handleEdit = (project) => {
    setEditingId(project._id);

    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
      githubLink: project.githubLink,
      demoLink: project.demoLink,
      featured: project.featured,
    });
  };

  // Update Project
  const updateProject = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("technologies", formData.technologies);
    data.append("githubLink", formData.githubLink);
    data.append("demoLink", formData.demoLink);
    data.append("featured", formData.featured);

    if (image) {
      data.append("image", image);
    }

    try {
      await api.put(`/projects/${editingId}`, data);

      alert("Project Updated");

      setEditingId(null);
      setImage(null);

      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Edit / Delete
          <span className="text-pink-600"> Projects</span>
        </h1>

        {/* Edit Form */}
        {editingId && (
          <form
            onSubmit={updateProject}
            className="bg-white shadow-xl rounded-2xl p-8 mb-10 space-y-4"
          >
            <input
              type="text"
              placeholder="Project Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border rounded-xl p-3"
            />

            <textarea
              placeholder="Description"
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="React, Node, MongoDB"
              value={formData.technologies}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  technologies: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Github Link"
              value={formData.githubLink}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  githubLink: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Demo Link"
              value={formData.demoLink}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  demoLink: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full"
            />

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    featured: e.target.checked,
                  })
                }
              />

              Featured Project
            </label>

            <div className="flex gap-4">

              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700"
              >
                Update Project
              </button>

              <button
                type="button"
                onClick={() => setEditingId(null)}
                className="bg-gray-400 text-white px-6 py-3 rounded-xl"
              >
                Cancel
              </button>

            </div>

          </form>
        )}

        {/* Projects List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={`https://backend-mu-nine-96.vercel.app${project.image}`}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(project._id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}