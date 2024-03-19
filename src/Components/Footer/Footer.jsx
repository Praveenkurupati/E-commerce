import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Company small description */}
      <p className="footer__description">
        Discover the latest electronics and gadgets at our e-commerce store. We
        offer a wide range of products at competitive prices.
      </p>

      {/* Useful links */}
      <div className="footer__section">
        <h4 className="footer__heading">Useful Links</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/terms" className="footer__link">
              Terms & Conditions
            </a>
          </li>
          <li className="footer__item">
            <a href="/privacy" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__item">
            <a href="/disclaimer" className="footer__link">
              Disclaimer
            </a>
          </li>
          <li className="footer__item">
            <a href="/refund" className="footer__link">
              Refund Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Subscribe to newsletter */}
      <div className="footer__section">
        <h4 className="footer__heading">Subscribe to Newsletter</h4>
        <form className="footer__form">
          <input
            type="email"
            className="footer__input"
            placeholder="Enter your email"
          />
          <button type="submit" className="footer__button">
            Subscribe
          </button>
        </form>
      </div>

      {/* Social media links */}
      <div className="footer__section">
        <h4 className="footer__heading">Follow Us</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/facebook" className="footer__link">
              Facebook
            </a>
          </li>
          <li className="footer__item">
            <a href="/twitter" className="footer__link">
              Twitter
            </a>
          </li>
          <li className="footer__item">
            <a href="/instagram" className="footer__link">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Company Email & Phone Number */}
      <div className="footer__section">
        <p className="footer__info">Email: info@example.com</p>
        <p className="footer__info">Phone: +1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;
