import React from 'react';
import './sobre.css';
import { FaGraduationCap, FaBriefcase, FaCode, FaLightbulb } from 'react-icons/fa';

const Sobre = () => {
  return (
    <section id="about" className="sobre-container">
      <h2>Sobre Mim</h2>
      <div className="sobre-content">
        <div className="sobre-intro">
          <div className="floating-icons">
            <FaCode className="floating-icon icon-1" />
            <FaBriefcase className="floating-icon icon-2" />
            <FaGraduationCap className="floating-icon icon-3" />
            <FaLightbulb className="floating-icon icon-4" />
          </div>
          
          <p className="sobre-text">
            Sou <strong>Desenvolvedor de Software</strong> com experiência em desenvolvimento de aplicações web e aplicações desktop. 
            Atualmente graduando em <strong>Ciência da Computação</strong>, participei de projetos de pesquisa voltados ao desenvolvimento de soluções tecnológicas para o setor acadêmico e participação
            em projetos reais com clientes, onde pude aplicar meus conhecimentos em desenvolvimento de software, análise de dados e automação.
          </p>
          <p className="sobre-text">
            Com domínio em <strong>Java, Python, JavaScript e TypeScript</strong>, trabalho tanto no front-end com <strong>React</strong> quanto no back-end com <strong>Spring Boot</strong>, 
            sempre focado em entregar código limpo, manutenível e que faça a diferença para o usuário final.
          </p>
          <p className="sobre-text">
            Possuo  base em análise de dados com Power BI, além de conhecimento em bancos de dados <strong>SQL</strong> e <strong>NOSQL</strong>. 
            Tenho experiência em otimização de sistemas, automação de processos e melhoria de fluxos operacionais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
