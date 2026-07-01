import React from "react";
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
  <section
  className="relative min-h-screen bg-cover bg-center flex items-center"
  style={{ backgroundImage: "url('/Images/About.jfif')" }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          About Me
        </h1>

        {/* Animated Text (FIXED) */}
        <TypeAnimation
          sequence={[
            "Computer Science Student", 2000,
            "Tech Enthusiast", 2000,
            "Full Stack Developer", 2000,
            "Problem Solver", 2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-pink-400 text-xl md:text-2xl font-semibold mb-10 block text-center"
        />

        {/* LONG ABOUT */}
        <div className="space-y-5 text-gray-200 text-base md:text-lg leading-relaxed mb-12">

          <p>
            I am a passionate and dedicated third-year Computer Science student
            with a strong interest in modern software development and emerging technologies.
          </p>

          <p>
            My journey in programming started with curiosity and has now turned into a deep passion
            for building real-world applications using modern technologies.
          </p>

          <p>
            I specialize in React, Node.js, Express.js, and MongoDB. I enjoy building full-stack
            applications that solve real problems and improve user experience.
          </p>

          <p>
            I have also explored machine learning, algorithms, and system design,
            which helped me improve my logical thinking and problem-solving skills.
          </p>

          <p>
            I am continuously learning new technologies and aiming to become a professional
            full-stack developer in the software industry.
          </p>

          <p>
            I am currently looking for internship opportunities where I can grow,
            learn industry practices, and contribute to real projects.
          </p>

        </div>

        {/* Interests + Hobbies */}
        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              Interests
            </h2>
            <p className="text-gray-300 space-y-2">
              • Web Development <br />
              • Machine Learning <br />
              • Software Engineering <br />
              • Artificial Intelligence <br />
              • Problem Solving
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              Hobbies
            </h2>
            <p className="text-gray-300 space-y-2">
              • Reading <br />
              • Coding <br />
              • Cooking <br />
              • Learning New Technologies <br />
              • Exploring Tech Projects
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;