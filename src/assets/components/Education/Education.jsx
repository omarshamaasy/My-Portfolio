import "./Education.css";

function Education() {
  const education = [
    {
      title: "Damascus University",
      description:"Studying Computer & Automation Engineering (CAE) 2022-now",
    },
    {
      title: "Frontend Developer",
      description: "Study At Vica 10/2024-6/2025",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, bibendum sodales.",
    },
    {
      title: "Experience Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, bibendum sodales.",
    },
  ];

  return (
    <section className="education-section" id="education">
      <p className="education-subtitle">Education and Experience</p>
      <h2 className="education-title">Education & Experience</h2>

      <div className="education-columns">
        <div className="education-column">
          {education.map((item, idx) => (
            <div className="education-item" key={idx}>
              <div className="education-icon" />
              <div className="education-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="education-column">
          {experience.map((item, idx) => (
            <div className="education-item" key={idx}>
              <div className="education-icon" />
              <div className="education-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
