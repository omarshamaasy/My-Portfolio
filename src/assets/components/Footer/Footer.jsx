import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">© 2025. All Rights Reserved</p>

      <p className="credit">Development by Omar</p>

      <div className="social-icons">
        <a href="https://github.com/omarshamaasy">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/mohamed.omar.alshamaa/">
          <FaFacebook />
        </a>
        <a href="https://x.com/">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/omar.sh_18/">
          <FaSquareInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
