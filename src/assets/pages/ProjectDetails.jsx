import Footer from '../components/Footer/Footer';
import PDetails from '../components/PDetails/PDetails';
import ProjectDebottom from '../components/ProjectDebottom/ProjectDebottom';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Navbar from '../components/Navbar/Navbar';

const ProjectDetails = () => {
  const allProjects = [
    {
      id: 1,
      title: "EduPress",
      image: "/EduPress.jpg",
      date: "8-12-2024",
      description: "An educational web platform built using modern front-end technologies.",
      languages: "HTML, CSS",
      framework: "none",
      libraries: "none",
      repo: "https://github.com/omarshamaasy/EduPress.git",
      demo: "https://omarshamaasy.github.io/EduPress/index.html"
    },
    {
      id: 2,
      title: "Mini Shop",
      image: "/MiniShop.jpg",
      date: "15-02-2025",
      description: "Online Shoe sales website.",
      languages: "HTML, CSS, JS",
      framework: "none",
      libraries: "none",
      repo: "https://github.com/omarshamaasy/mini-shop/tree/master",
      demo: "https://omarshamaasy.github.io/mini-shop/"
    },
    {
      id: 3,
      title: "Blogs",
      image: "/Blogs.png",
      date: "20-06-2024",
      description: "A simple blog website built with React ",
      languages: "HTML, CSS ,Js ,JSX",
      framework: "None",
      libraries: "React",
      repo: "https://github.com/omarshamaasy/Blogs",
      demo: "https://omarshamaasy.github.io/Blogs"
    },
    {
      id: 4,
      title: "K2skiing",
      image: "/K2skiing.png",
      date: "25-10-2024",
      description: "A website about snow trips built with HTML , CSS",
      languages: "HTML, CSS",
      framework: "none",
      libraries: "none",
      repo: "https://github.com/omarshamaasy/K2skiing",
      demo: "https://omarshamaasy.github.io/K2skiing/"
    },
  ];

  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

  return (
    <>
      <Navbar />
      <PDetails project={selectedProject} />
      <ScrollToTop/>
      <ProjectDebottom projects={allProjects} onSelect={setSelectedProject} visibleCount={3} />
      <Footer />
    </>
  );
};

export default ProjectDetails;
