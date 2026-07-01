import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Khadeeja Memon
            </h2>

            <p className="leading-7">
              Computer Science student passionate about Full Stack
              Development, React, Node.js, Machine Learning, and
              building modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>

            <div className="flex flex-col space-y-2">

              <Link to="/" className="hover:text-pink-500">
                Home
              </Link>

              <Link to="/about" className="hover:text-pink-500">
                About
              </Link>

              <Link to="/projects" className="hover:text-pink-500">
                Projects
              </Link>

              <Link to="/skills" className="hover:text-pink-500">
                Skills
              </Link>

              <Link to="/education" className="hover:text-pink-500">
                Education
              </Link>

              <Link to="/certificates" className="hover:text-pink-500">
                Certificates
              </Link>

              <Link to="/contact" className="hover:text-pink-500">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-xl font-semibold text-white mb-4">
              Connect
            </h2>

            <div className="space-y-3">

              <a
                href="mailto:khadeejamemon444@gmail.com"
                className="flex items-center gap-3 hover:text-pink-500"
              >
                <FaEnvelope />
                khadeejamemon444@gmail.com
              </a>

              <a
                href="https://github.com/KhadeejaMemon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-500"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/khadeeja-memon-cs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-500"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © {new Date().getFullYear()} Khadeeja Memon. All Rights Reserved.
          </p>

          {/* Admin Login */}
          <Link
            to="/admin/login"
            className="text-sm text-gray-400 hover:text-pink-500 mt-3 md:mt-0"
          >
            Admin Login
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;