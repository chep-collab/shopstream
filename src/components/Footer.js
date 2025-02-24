import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Fashion Store</h3>
          <p>Your go-to place for trendy women's fashion. Quality products with affordable prices.</p>
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: <a href="mailto:support@fashionstore.com">support@fashionstore.com</a></li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Fashion St, New York, NY</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fashion Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
