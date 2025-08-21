import "./SkillBar.css";

function SkillBar({ skill, percentage }) {
  return (
    <div className="skill-wrapper">
      <div className="skill-title">{skill}</div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          <div className="tooltip">{percentage}%</div>
          <div className="circle"></div>
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;