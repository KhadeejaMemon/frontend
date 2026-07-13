import React from "react";
import { TypeAnimation } from "react-type-animation";



function Certificates() {
 const certificates = [
  {
  title: "AI Internship Completion Certificate",
  provider: "Decode Labs",
  type: "Certificate",
  year: "2026",
  image: "/Images/Certificates/DecodeLabs.GIF",
  description:
    "Successfully completed an AI Internship focused on AI Chatbot, AI Recommendation System, and AI Data Classification using Python and Artificial Intelligence concepts.",
  link: "https://www.decodelabs.tech/certificate?email=memon12787%40gmail.com&studentId=AI061347",
},

{
  title: "Python Programming Internship Completion Certificate",
  provider: "CodeAlpha",
  type: "Certificate",
  year: "2026",
  image: "/Images/Certificates/CodeAlpha.GIF",
  description:
    "Successfully completed a Python Programming Internship by developing a Hangman Game, Basic Chatbot, and Stock Portfolio Tracker using Python.",
  link: "https://www.codealpha.tech/#/verification?id=CA%2FDF1%2F101218",
},
  {
    title: "Basics of Agents & Environments in AI",
    provider: "UniAthena",
    type: "Certificate",
    year: "2026",
    image: "/Images/Certificates/AIagents.GIF",
    description:
      "Learned the fundamentals of Artificial Intelligence, intelligent agents, environments, search strategies, and problem-solving techniques.",
    link: "https://docs.uniathena.com/prod/course/certificate/895_1780741057_certificate.jpg",
  },
  {
    title: "Basics of Python",
    provider: "UniAthena",
    type: "Certificate",
    year: "2026",
    image: "/Images/Certificates/python.GIF",
    description:
      "Built a strong foundation in Python programming, covering variables, loops, functions, object-oriented programming, and problem-solving.",
    link: "https://docs.uniathena.com/prod/course/certificate/323_1780670905_certificate.jpg",
  },
  {
    title: "Community Member Badge",
    provider: "Kaggle",
    type: "Badge",
    year: "2026",
    image: "/Images/Certificates/KaggleCommunityMember.png",
    description:
      "Awarded for actively participating in the Kaggle community and engaging with datasets, notebooks, and learning resources.",
    link: "https://www.kaggle.com/certification/badges/kmemon29/101",
  },
  {
    title: "Python Coder Badge",
    provider: "Kaggle",
    type: "Badge",
    year: "2026",
    image: "/Images/Certificates/PythonCoder.png",
    description:
      "Earned by successfully completing Python learning activities and demonstrating practical coding skills on Kaggle.",
    link: "https://www.kaggle.com/certification/badges/kmemon29/30",
  },
  {
    title: "Google UX Design",
    provider: "Coursera",
    type: "Certificate",
    year: "2025",
    image: "/Images/Certificates/ux.GIF",
    description:
      "Completed Google's UX Design program covering user research, wireframing, prototyping, usability testing, and design thinking.",
    link: "https://coursera.org/share/a3a73d0c98bb9e46599978a0f47ed899",
  },
  {
    title: "Google UX Design Badge",
    provider: "Coursera",
    type: "Badge",
    year: "2025",
    image: "/Images/Certificates/uxbadge.png",
    description:
      "Recognition badge earned after successfully completing the Google UX Design learning pathway.",
    link: "",
  },
  {
    title: "Google Prompting Essentials",
    provider: "Coursera",
    type: "Certificate",
    year: "2025",
    image: "/Images/Certificates/googleprompting.GIF",
    description:
      "Learned prompt engineering techniques to effectively use Generative AI tools for productivity, creativity, and problem-solving.",
    link: "https://coursera.org/share/94ce14129ba6cace4b7ebf3bb352d04b",
  },
  {
    title: "Google Prompting Essentials Badge",
    provider: "Coursera",
    type: "Badge",
    year: "2025",
    image: "/Images/Certificates/promptingbadge.png",
    description:
      "Awarded for successfully completing the Google Prompting Essentials course and demonstrating prompt engineering skills.",
    link: "",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    provider: "Coursera",
    type: "Certificate",
    year: "2025",
    image: "/Images/Certificates/cyber.GIF",
    description:
      "Developed foundational knowledge of cybersecurity, network security, risk management, security operations, and threat detection.",
    link: "https://coursera.org/share/480a654e1caceba25a96ba4eac8a4054",
  },
];

  return (
  <section

  className="bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900">
            My <span className="text-pink-600">Certificates</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Continuous Learner",
              2000,
              "Google Certified Learner",
              2000,
              "Coursera Learner",
              2000,
              "Kaggle Community Member",
              2000,
              "Technology Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block mt-5 text-2xl font-semibold text-pink-600"
          />

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
            I believe in continuous learning and regularly complete
            professional courses, certifications, and badges to strengthen my
            knowledge in software development, artificial intelligence,
            cybersecurity, programming, UI/UX, and modern technologies.
          </p>

        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                                {/* Type + Year */}
                <div className="flex justify-between items-center mb-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      certificate.type === "Badge"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {certificate.type}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {certificate.year}
                  </span>

                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  {certificate.title}
                </h2>

                {/* Provider */}
                <p className="mt-3 text-pink-600 font-semibold">
                  {certificate.provider}
                </p>

               <p className="mt-4 text-gray-600 leading-relaxed text-sm">
  {certificate.description}
</p>

                {/* Button */}
                {certificate.link && (
  <a
    href={certificate.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 w-full bg-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
  >
    View Credential
  </a>
)}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;