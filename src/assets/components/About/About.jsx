import SkillBar from "../Skillbar/Skillbar";
import "./About.css";

function About() {
  const skills = [
    { skill: "HTML5", percentage: 90 },
    { skill: "CSS3", percentage: 85 },
    { skill: "JavaScript", percentage: 95 },
    { skill: "React", percentage: 88 },
  ];

  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src="/Aboute.svg" alt="About" />
      </div>

      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title ">About Me</h2>
          <p className="about-description">
            I'm a frontend developer with a passion for building beautiful and functional web interfaces using HTML, CSS, JavaScript and React.
          </p>

          <div className="about-skills">
            {skills.map((item, index) => (
              <SkillBar
                key={index}
                skill={item.skill}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;