import React, { useState } from 'react';
import './contatos.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contatos = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const mensagemWhatsApp = `*Nova mensagem do portfólio*%0A%0A*Nome:* ${formData.nome}%0A*Email:* ${formData.email}%0A*Mensagem:* ${formData.mensagem}`;
    
    // Abrir WhatsApp com a mensagem
    window.open(`https://wa.me/5571999222524?text=${mensagemWhatsApp}`, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <section id="contact" className="contatos-container">
      <h2>Informações de Contato</h2>
      <p className="contatos-subtitle">Estou sempre disponivel a novas oportunidades e projetos interessantes</p>
      
      <div className="contatos-content">
        <div className="contato-info"> 
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div className="info-text">
              <h4>Email</h4>
              <a href="mailto:joaovpbo@outlook.com">joaovpbo@outlook.com</a>
            </div>
          </div>  

          <div className="info-card">
            <FaLinkedin className="info-icon" />
            <div className="info-text">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-batista-3200b2253/" target="_blank" rel="noopener noreferrer">
                Ver Perfil
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaGithub className="info-icon" />
            <div className="info-text">
              <h4>GitHub</h4>
              <a href="https://github.com/Joaobatiist" target="_blank" rel="noopener noreferrer">
                Ver Repositórios
              </a>
            </div>
          </div>
        </div>

        <div className="contato-form">
          <h3>Envie uma Mensagem</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Escreva sua mensagem..."
              />
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
