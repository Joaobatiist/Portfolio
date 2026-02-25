import React from 'react';
import './servicos.css';
import { FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiSupabase, SiMysql, SiSpringboot } from 'react-icons/si';

const Servicos = () => {
  const projetos = [
    {
      titulo: "Cipoense ",
      descricao: "Saas de uma escola de futbol para gerenciamento de alunos e funcionarios. Além de ser um app de gestão tem como Funcionalidade a ajuda de IA para aprimorar melhorias de treinos  de acordo com metricas estipuladas em campo para melhorar tanto o time e alunos.",
      tecnologias: [<SiReact key="react" />, <FaJava key="java" />,<SiSpringboot key="spring" />,  <SiMysql key="mysql" />],
      github: "https://github.com/Joaobatiist/Cipoense",
      demo: "https://adcipeonse.cloud/"
    },
    {
      titulo: "E-commerce",
      descricao: "E-commerce para um loja de produtos de limpeza para vendas online, com painel administrativo para gerenciamento de produtos, pedidos e funcionarios.",
      tecnologias: [<SiReact key="react" />, <SiJavascript key="js" />, <SiSupabase key="supabase" />],
      github: "https://github.com/Joaobatiist/Loja",
      demo: "https://limpatech.vercel.app/"
    },
    {
      titulo: "Automação de Download de Vídeos",
      descricao: "Aplicação desktop em Python para automação de download e segmentação de vídeos com suporte a múltiplos fragmentos para maior velocidade",
      tecnologias: [<SiPython key="python" />],
      github: "https://github.com/Joaobatiist/AutoClip",
    },
  ];

  return (
    <section id="services" className="servicos-container">
      <h2>Projetos</h2>
      <p className="projetos-subtitle">Alguns dos projetos que desenvolvi</p>
      <div className="servicos-grid">
        {projetos.map((projeto, index) => (
          <div className="servico-card" key={index}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="tecnologias">
              {projeto.tecnologias.map((TechIcon, idx) => (
                <span key={idx} className="tech-icon">{TechIcon}</span>
              ))}
            </div>
            <div className="projeto-links">
              <a href={projeto.github} target="_blank" rel="noopener noreferrer" title="Ver no GitHub">
                <FaGithub /> Código
              </a>
              {projeto.demo && (
              <a href={projeto.demo} target="_blank" rel="noopener noreferrer" title="Ver Demo">
                <FaExternalLinkAlt /> Demo
              </a>
            )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="ver-mais-container">
        <a 
          href="https://github.com/Joaobatiist?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ver-mais-btn"
        >
          <FaGithub /> Ver Mais Projetos no GitHub
        </a>
      </div>
    </section>
  );
};

export default Servicos;
