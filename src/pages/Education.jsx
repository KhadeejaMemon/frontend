import React from "react";
import { TypeAnimation } from "react-type-animation";

function Education() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900">
            My <span className="text-pink-600">Education</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Academic Journey",
              2000,
              "Lifelong Learner",
              2000,
              "Computer Science Student",
              2000,
              "Future Software Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block mt-5 text-2xl font-semibold text-pink-600"
          />

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
            My educational journey has shaped my knowledge, problem-solving
            abilities, and passion for technology. From primary school to my
            current Bachelor's degree, every stage has helped me build the
            skills and confidence needed to pursue a career in software
            development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Primary */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-l-4 border-pink-600">
            <h2 className="text-2xl font-bold text-pink-600">
              🏫 Primary Education
            </h2>

            <p className="mt-2 text-lg font-semibold text-gray-800">
              Siddique Mair School, Shikarpur
            </p>

            <p className="mt-1 text-gray-500">
              Class I – V
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              This was the beginning of my academic journey, where I developed
              fundamental reading, writing, communication, and learning skills.
              These years built the foundation for my future education.
            </p>
          </div>

          {/* Secondary */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-l-4 border-pink-600">
            <h2 className="text-2xl font-bold text-pink-600">
              🏫 Secondary Education
            </h2>

            <p className="mt-2 text-lg font-semibold text-gray-800">
              Government Girls High School, Shikarpur
            </p>

            <p className="mt-1 text-gray-500">
              Class VI – X
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              During secondary school, I strengthened my academic foundation,
              improved my analytical thinking, and developed teamwork,
              communication, and problem-solving skills.
            </p>
          </div>

          {/* Higher Secondary */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-l-4 border-pink-600">
            <h2 className="text-2xl font-bold text-pink-600">
              📚 Higher Secondary Education
            </h2>

            <p className="mt-2 text-lg font-semibold text-gray-800">
              Government Girls Degree College, Shikarpur
            </p>

            <p className="mt-1 text-gray-500">
              Class XI – XII
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Completed Higher Secondary Education with a strong focus on
              Computer Science and Mathematics, which prepared me for advanced
              studies in Computer Science at the university level.
            </p>
          </div>

          {/* University */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-l-4 border-pink-600">
            <h2 className="text-2xl font-bold text-pink-600">
              🎓 Bachelor of Science in Computer Science
            </h2>

            <p className="mt-2 text-lg font-semibold text-gray-800">
              Shaikh Ayaz University, Shikarpur
            </p>

            <p className="mt-1 text-gray-500">
              2023 – Present (3rd Year)
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Currently pursuing my BSCS degree with a focus on Software
              Engineering, Web Development, Database Systems, Networking,
              Artificial Intelligence, and Machine Learning. Alongside my
              coursework, I actively build practical projects to strengthen my
              technical skills and prepare for a professional career as a
              Full-Stack Developer.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;