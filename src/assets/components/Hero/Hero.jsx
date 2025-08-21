import "./Hero.css";

function Hero() {
    return (
        <section className="Hero" id="hero">
        <div className="Hero-content">
            <h1 className="Hero-title">HEY! <span>I'm Omar Frontend Developer</span></h1>
            <p className="Hero-description">Agency-quality Webflow websites with the personal touch of a freelancer.</p>
            <a href="/OmarCV.pdf" className="download-btn" download>Download CV</a>
        </div>
      <div className="Hero-image">
        <img src="/myphoto.jpg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
