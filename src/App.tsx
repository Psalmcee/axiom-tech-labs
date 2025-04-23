import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Quote,
} from "lucide-react";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import logo from "/src/images/axiom-tech-labs-logo.png";
import { motion } from "motion/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [displayText, setDisplayText] = useState("");
  const fullText = "> Hello Axiom_";

  useEffect(() => {
    let i = 0;
    const typingSpeed = 150; // milliseconds

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      text: "Axiom Tech Labs delivered exceptional results. Their attention to detail and innovative solutions exceeded our expectations.",
      company: "TechCorp Inc.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      text: "Working with Axiom has transformed our development process. Their team's expertise and dedication are unmatched.",
      company: "InnovateSoft",
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      text: "The best decision we made was partnering with Axiom. They've consistently delivered high-quality solutions on time.",
      company: "Digital Dynamics",
    },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header/Navigation */}
        <nav className="fixed w-full bg-black shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/">
                  <img src={logo} alt="Axiom Tech Labs" className="h-16" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/company"
                  className="text-gray-300 hover:text-blue-600 transition-colors"
                >
                  Company
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
                  <Link
                    to="/company"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:text-blue-600 hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Company
                  </Link>
                  <Link
                    to="/services"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:text-blue-600 hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:text-blue-600 hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <header
                  className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), 
                    url('https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop')`,
                  }}
                >
                  <div className="max-w-4xl mx-auto text-center">
                    {/* add motion effect to Hero title */}
                    <style>{`
        .typewriter-text {
          display: inline-block;
        }
        
        .typewriter-wrapper {
          overflow: hidden;
          border-right: 0.15em solid #b7feae;
          white-space: nowrap;
          margin: 0;
          letter-spacing: 0.05em;
          display: inline-block;
          animation: blink-caret 0.75s step-end infinite;
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #b7feae }
        }
      `}</style>
                    <h1
                      className="text-5xl md:text-6xl font-bold mb-6"
                      style={{ color: "#b7feae", fontFamily: "monospace" }}
                    >
                      <span className="typewriter-wrapper">{displayText}</span>
                    </h1>
                    <p
                      className="text-xl md:text-2xl mb-8"
                      style={{
                        background: "linear-gradient(45deg, #b7feae, #7fffd4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Software, Services and Solutions for a Connected World.
                    </p>
                    <div className="flex gap-4 justify-center mb-12">
                      <a
                        href="https://github.com/Psalmcee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/samuel-obidi-221628233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-blue-600 hover:bg-gray-200 transition-colors"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href="mailto:samuelobidi8@gmail.com"
                        className="p-2 rounded-full bg-white text-red-500 hover:bg-gray-200 transition-colors"
                      >
                        <Mail size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-10 animate-bounce">
                    <ChevronDown size={32} className="text-white" />
                  </div>
                </header>

                {/* Projects Section */}
                <section
                  className="py-20 px-4"
                  id="projects"
                  style={{ backgroundColor: "#b7feae" }}
                >
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2">
                      <Code2 className="text-blue-600" />
                      Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {[1, 2, 3, 4].map((project) => (
                        <div
                          key={project}
                          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <img
                            src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60`}
                            alt="Project Preview"
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                              Project {project}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              A modern web application built with React,
                              TypeScript, and Tailwind CSS.
                            </p>
                            <div className="flex gap-2">
                              <a
                                href="#"
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500"
                              >
                                <Github size={18} />
                                Code
                              </a>
                              <a
                                href="#"
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500 ml-4"
                              >
                                <ExternalLink size={18} />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Skills Section */}
                <section className="py-20 px-4 bg-gray-900 text-white">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                      <Briefcase className="text-blue-400" />
                      Skills & Technologies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {[
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Next.js",
                        "TailwindCSS",
                        "PostgreSQL",
                        "Mongo DB",
                        "Docker",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
                        >
                          <p className="font-medium">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section
                  className="py-20 px-4 relative overflow-hidden"
                  style={{ backgroundColor: "#7fffd4" }}
                >
                  <div className="bubble bubble-1"></div>
                  <div className="bubble bubble-2"></div>
                  <div className="bubble bubble-3"></div>
                  <div className="bubble bubble-4"></div>
                  <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                      <User className="text-blue-600" />
                      About Us
                    </h2>
                    <div className="prose prose-lg bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                      <p className="text-gray-600">
                        Axiom tech labs is a software development and consulting
                        company. We produce and market software products,
                        develop and host web-sites, and provide a wide range of
                        consulting services to software development firms,
                        corporate developers, other consultants, and clients
                        ranging from the Fortune 100 to individuals. <br />{" "}
                        <br />
                        We firmly believe that Customer Satisfaction is the
                        number one standard to which we all must be held. That
                        belief is behind everything we do, from product
                        development to customer support to our wide range of
                        services.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section
                  className="py-20 px-4 relative overflow-hidden"
                  style={{ backgroundColor: "#98F5E1" }}
                >
                  <div className="bubble bubble-1"></div>
                  <div className="bubble bubble-2"></div>
                  <div className="bubble bubble-3"></div>
                  <div className="bubble bubble-4"></div>
                  <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center gap-2 justify-center">
                      <Quote className="text-blue-600" />
                      What Our Clients Say
                    </h2>
                    <div className="flex flex-wrap gap-8 justify-center">
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 flex flex-col max-w-md transform hover:scale-105 transition-transform duration-300"
                          style={{
                            borderTop: "4px solid #b7feae",
                            minWidth: "320px",
                            flex: "1 1 300px",
                          }}
                        >
                          <Quote className="text-blue-600 mb-4 h-8 w-8" />
                          <p className="text-gray-600 mb-6 italic">
                            "{testimonial.text}"
                          </p>
                          <div className="mt-auto">
                            <p className="font-semibold text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                            <p className="text-sm text-blue-600">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            }
          />
        </Routes>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo Section */}
              <div className="md:col-span-1">
                <div className="bg-gray-900 rounded-lg p-6">
                  <img src={logo} alt="Axiom Tech Labs" className="h-16 mb-4" />
                  <p className="text-sm text-gray-400">
                    Innovating the future through technology and creative
                    solutions.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-white font-semibold mb-4">
                        About Us
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/company"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Our Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/company"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/company"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Careers
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-4">FAQ</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/company"
                            className="hover:text-blue-400 transition-colors"
                          >
                            General
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-4">
                        Contact Us
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/contact"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Get in Touch
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="hover:text-blue-400 transition-colors"
                          >
                            Sales
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="md:col-span-1">
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/Psalmcee"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p>
                © {new Date().getFullYear()} Axiom Tech Labs. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
