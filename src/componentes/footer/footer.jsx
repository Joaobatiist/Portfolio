import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>João Victor Passos Batista de Oliveira</h3>
          <p>Desenvolvedor</p>
          <p>Salvador, BA</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-contact-item">
            <a href="https://github.com/Joaobatiist" target="_blank" rel="noopener noreferrer">
              <FaGithub className="contact-icon" />
              <span>github.com/Joaobatiist</span>
            </a>
          </div>
          <div className="footer-contact-item">
            <a href="https://www.linkedin.com/in/joão-victor-batista-oliveira/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="contact-icon" />
              <span>linkedin.com/in/joão-victor-batista-oliveira</span>
            </a>
          </div>
          <div className="footer-contact-item">
            <a href="mailto:joaovpbo@outlook.com">
              <FaEnvelope className="contact-icon" />
              <span>joaovpbo@outlook.com</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} João Victor. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
