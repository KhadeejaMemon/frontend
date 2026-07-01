

import React, { useEffect, useState } from "react";


function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-pink-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
         <img src="/Images/logo.png"   className="h-16 w-16 rounded-full object-cover"/>
          
         

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              KM
            </h1>

            <p className="text-sm text-gray-500">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 font-medium">

          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`transition duration-300 pb-2
                  ${
                    active === item.id
                      ? "text-pink-600"
                      : "text-gray-700 hover:text-pink-600"
                  }
                `}
              >
                {item.label}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-pink-600 rounded-full transition-all duration-300
                  ${
                    active === item.id
                      ? "w-full"
                      : "w-0"
                  }
                `}
              ></span>

            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;