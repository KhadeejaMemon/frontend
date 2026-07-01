import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900">
          Admin <span className="text-pink-600">Dashboard</span>
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your portfolio content (Projects, Skills, Messages)
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* PROJECTS */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500">
            <h2 className="text-xl font-bold mb-4">📁 Projects</h2>

            <Link to="/admin/add-project" className="block text-pink-600 hover:underline mb-2">
              ➕ Add Project
            </Link>

            <Link to="/admin/manage-project" className="block text-pink-600 hover:underline mb-2">
              ✏️ Edit Project +    🗑 Delete Project
            </Link>

          
          </div>

          {/* SKILLS */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500">
            <h2 className="text-xl font-bold mb-4">🧠 Skills</h2>

            <Link to="/admin/add-skill" className="block text-pink-600 hover:underline mb-2">
              ➕ Add Skill
            </Link>

            <Link to="/admin/manage-skill" className="block text-pink-600 hover:underline mb-2">
              ✏️ Edit Skill  +  🗑 Delete Skill
            </Link>

          
          </div>

          {/* MESSAGES */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500">
            <h2 className="text-xl font-bold mb-4">💬 Messages</h2>

           <Link
  to="/admin/messages"
  className="block text-pink-600 hover:underline"
>
  💬 View Messages
</Link>
          </div>

        </div>

      </div>
    </div>
  );
}