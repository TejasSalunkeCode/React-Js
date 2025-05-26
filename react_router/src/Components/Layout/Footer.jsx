// import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Content 1 without logo */}
        <div className="content_1">
          <p>
            Your company or site description goes here. Briefly describe what you do.
          </p>
        </div>

        {/* Content 2 */}
        <div className="content_2">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Content 3 */}
        <div className="content_3">
          <h4>Support</h4>
          <a href="/faq">FAQ</a>
          <a href="/help">Help Center</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* Content 4 */}
        <div className="content_4">
          <h4>Subscribe</h4>
          <p>Get the latest news and updates right in your inbox.</p>
          <form>
            <div className="f-mail">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="bx">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Design Bottom */}
      <div className="f-design">
        <p className="f-design-txt">© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
