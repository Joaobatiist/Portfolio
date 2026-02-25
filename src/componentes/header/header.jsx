import { useState, useEffect } from 'react';
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isTop, setIsTop] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      
      if (homeSection) {
        const homeSectionTop = homeSection.offsetTop;
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Se estiver na seção home (com alguma tolerância)
        if (scrollPosition <= homeSectionBottom - windowHeight / 3) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamar uma vez no início
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector('.footer');
    
    if (!footer) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );
    
    observer.observe(footer);
    
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header-container ${isTop ? 'header-top' : 'header-bottom'} ${isFooterVisible ? 'header-hidden' : ''}`}>
      <div className="logo">JV</div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>Sobre</a>
        <a href="#experiencia" onClick={handleLinkClick}>Experiência</a>
        <a href="#formacao" onClick={handleLinkClick}>Formação</a>
        <a href="#services" onClick={handleLinkClick}>Projetos</a>
        <a href="#contact" onClick={handleLinkClick}>Contatos</a>
      </nav>
      <div className="logo-foto">
        <img src="/programdor.jpg" alt="Foto de Perfil" />
      </div>
    </header> 
  );
};

export default Header;