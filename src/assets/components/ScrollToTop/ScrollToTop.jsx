import { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa6";

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const educationSection = document.getElementById("education");
        const offsetTop = educationSection?.offsetTop || 0;
        setShowButton(window.scrollY >= offsetTop - 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };

    return (
    showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
        </button>
    )
  );
}

export default ScrollToTop;
