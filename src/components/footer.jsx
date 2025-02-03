import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Us</li>
      </ul>
      <p>© {new Date().getFullYear()} Visual Think. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
