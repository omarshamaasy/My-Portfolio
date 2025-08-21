import { useState, useEffect } from "react";
import "./Navbar.css";
import { IoMoon } from "react-icons/io5";
import { PiSunLight } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top - height / 2) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const navLinks = [
  { id: 1, label: "Home", href: "#hero" },
  { id: 2, label: "About me", href: "#about" },
  { id: 3, label: "Education", href: "#education" },
  { id: 4, label: "Project", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" onClick={() => setMenuOpen(false)}>Omar</Link></div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes color ={darkMode ? "#FFFFFF" : "black"} /> : <FaBars color={darkMode ? "#FFFFFF" : "black"}/>}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <li className="mobile-logo">
            <Link to="/" onClick={() => setMenuOpen(false)} color="inherit">Omar</Link>
          </li>
      )}

  {navLinks.map((link) => (
    <li key={link.id}>
      <a
        href={link.href}
        className={activeSection === link.href.substring(1) ? "active" : ""}
        onClick={handleLinkClick}
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>

      <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <PiSunLight color="white" /> : <IoMoon />}
      </button>
    </nav>
  );
}

export default Navbar;
