import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import About from "../pages/About";
import Education from "../pages/Education";
import Skills from "../pages/Skills"
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
function Home() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    
    <>
    
<section id="home" className="bg-gradient-to-r from-pink-50 via-white to-pink-100">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-pink-50 via-white to-pink-100 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <p className="text-pink-600 font-semibold text-lg">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3">
                Khadeeja <span className="text-pink-600">Memon</span>
              </h1>

              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="block text-2xl md:text-3xl text-pink-600 font-semibold mt-5"
              />

              <p className="mt-6 text-gray-600 leading-8 text-lg max-w-xl">
                Passionate about Full Stack Development, Machine Learning,
                Networking and Software Engineering. I enjoy building modern,
                user-friendly applications and solving real-world problems
                through technology.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition duration-300"
                >
                  Contact Me
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
                >
                  Download Resume
                </a>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
             
                <img src="/Images/Home.jfif" className="w-full max-w-lg rounded-3xl shadow-2xl"/>
                
             
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS SECTION ================= */}

      <section className="bg-gradient-to-r from-pink-50 via-white to-pink-100 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Projects */}
            <Link to="/projects">
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">

                <h2 className="text-5xl font-bold text-pink-600">
                  11+
                </h2>

                <h3 className="text-2xl font-semibold mt-3">
                  Projects
                </h3>

                <p className="text-gray-500 mt-3">
                  Academic & Personal Projects
                </p>

              </div>
            </Link>

            {/* Skills */}
            <Link to="/skills">
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">

                <h2 className="text-5xl font-bold text-pink-600">
                  20+
                </h2>

                <h3 className="text-2xl font-semibold mt-3">
                  Skills
                </h3>

                <p className="text-gray-500 mt-3">
                  Frontend • Backend • Programming
                </p>

              </div>
            </Link>

            {/* Certifications */}
            <Link to="/certificates">
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">

                <h2 className="text-5xl font-bold text-pink-600">
                  6+
                </h2>

                <h3 className="text-2xl font-semibold mt-3">
                  Certifications
                </h3>

                <p className="text-gray-500 mt-3">
                  Google & Professional Courses
                </p>

              </div>
            </Link>

          </div>

        </div>

      </section>

</section>



<section id="about">
  <About />
</section>

<section id="education">
  <Education />
</section>

<section id="skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="certificates">
  <Certificates />
</section>

<section id="contact">
  <Contact />
</section>


<Footer />
    
    </>
  );
}

export default Home;


