import { FaArrowRightLong } from "react-icons/fa6";
import "./GoToContent.css";

function GoToContent() {
  return (
    <section className="GoToContent" id="GoToContent">
        

        <div className="cta-wrapper">
  <div className="gtc-background"></div> {/* ✅ الإطار الأزرق */}
  
  <div className="gtc">
            <div className="gtc-content">
        <h1>Try me out, risk free!</h1>
        <p>If you're not happy with the design after the first draft, I'll refund your deposit, <span>no questions asked</span></p>
        </div>
                <button className="gtc-btn"><a href="#contact" >Contact <FaArrowRightLong /></a></button>
        </div>
</div>
    </section>
  );
}

export default GoToContent;
