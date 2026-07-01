import { useEffect, useState } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";


function Skills(){
     const [skills, setSkills] = useState([]);
    
  useEffect(() => {
  axios
    .get("https://backend-mu-nine-96.vercel.app/api/skills")
    .then((res) => {
      setSkills(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});
return(
    <>
     {/* Skills */}
      <div   className="bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Skills & Technologies
          </h2>

         <TypeAnimation
  sequence={[
    "Frontend Development",
    2000,
    "Backend Development",
    2000,
    "Programming Languages",
    2000,
    "Database Management",
    2000,
    "Tools & Technologies",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
  className="block text-center text-2xl font-semibold text-pink-600 mb-10"
/>
         
        <div className="space-y-10">
  {Object.entries(groupedSkills).map(([category, categorySkills]) => (
    <div
      key={category}
      className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6"
    >
      <h3 className="text-2xl font-bold text-pink-600 mb-6 border-b border-pink-200 pb-2">
        {category}
      </h3>

      <div className="flex flex-wrap gap-4">
        {categorySkills.map((skill) => (
          <div
            key={skill._id}
            className="bg-pink-50 border border-pink-200 rounded-full px-5 py-2 hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            <span className="font-medium">{skill.name}</span>

            <span className="ml-2 text-xs opacity-75">
              ({skill.level})
            </span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

        </div>

      </div>
    </>
)
}
export default Skills;