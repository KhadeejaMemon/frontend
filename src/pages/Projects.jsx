import React from "react";
import { TypeAnimation } from "react-type-animation";
import {useEffect,useState} from "react";
import axios from "axios";

function Projects() {
  const [projects,setProjects]=useState([]);
  useEffect(()=>{

axios

.get("https://backend-mu-nine-96.vercel.app/api/projects")

.then((res)=>{

setProjects(res.data);

})

.catch((err)=>{

console.log(err);

});

},[]);
const featuredProjects= projects.filter(project=>project.featured);
const otherProjects= projects.filter(project=>!project.featured);
  return (
    <div
  className="bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16"
>
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          My Projects
        </h1>

        <p className="text-center text-pink-600 mb-12 text-lg">
  <TypeAnimation
    sequence={[
      "Academic Projects",
      1500,
      "Full Stack Projects",
      1500,
      "Machine Learning Projects",
      1500,
      "Networking Projects",
      1500,
      "Movie Search App",
      1500,
      "Notes API",
      1500,
      "Todo Backend API",
      1500,
      "Job Portal with Skill Matching",
      1500,
    ]}
    speed={50}
    repeat={Infinity}
  />
</p>

        {/* Featured Projects */}
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          Featured Projects
        </h2>

       
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {featuredProjects.map((project) => (
    <div
      key={project.title}
      className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition"
    >
      <img
       src={`https://backend-mu-nine-96.vercel.app/${project.image}`} 
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        <p className="text-pink-600 font-medium mb-3">
    

{project.technologies.join(", ")}

        </p>

        <p className="text-gray-600 mb-4">
          {project.description}
        </p>

        <div className="flex gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            GitHub
          </a>

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

{/* Other Projects */}
<h2 className="text-3xl font-bold text-pink-600 mb-8">
  Other Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {otherProjects.map((project) => (
    <div
      key={project.title}
      className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition"
    >
      <img
       src={`https://backend-mu-nine-96.vercel.app/${project.image}`}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        <p className="text-pink-600 font-medium mb-3">
         {project.technologies.join(", ")}
        </p>

        <p className="text-gray-600 mb-4">
          {project.description}
        </p>

        <div className="flex gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            GitHub
          </a>

          {project.demoLink&& (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

</div>
</div>
  );
}

export default Projects;