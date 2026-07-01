import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills"
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProject from "./pages/AddProject";
import ManageProject from "./pages/ManageProject";
import AddSkill from "./pages/AddSkill";
import ManageSkill from "./pages/ManageSkill";
import Messages from "./pages/Messages";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

  <Route path="/education" element={<Education />} />
         <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects />} />
 <Route path="/certificates" element={<Certificates />} />

        <Route path="/contact" element={<Contact />} />

 <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

               <Route path="/admin/login" element={<Login />} />
<Route
  path="/admin/add-project"
  element={
    <ProtectedRoute>
      <AddProject />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/messages"
  element={
    <ProtectedRoute>
      <Messages />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/manage-skill"
  element={
    <ProtectedRoute>
      <ManageSkill />
    </ProtectedRoute>
  }
/>


<Route
  path="/admin/add-skill"
  element={
    <ProtectedRoute>
      <AddSkill />
    </ProtectedRoute>
  }
/>




<Route
  path="/admin/manage-project"
  element={
    <ProtectedRoute>
      <ManageProject />
    </ProtectedRoute>
  }
/>
             <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>

    
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;