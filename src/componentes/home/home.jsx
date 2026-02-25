import React from 'react';
import './home.css';
import { FaGithub, FaLinkedin, FaFileDownload, FaJava, FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiFirebase, SiSupabase, SiMysql, SiTypescript } from 'react-icons/si';

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home">
        <div className="text-content">
          <h1>Olá, eu sou João Victor</h1>
          <p className="description"> Desenvolvedor e analista de dados  buscando a melhoria contínua em soluções tecnológicas.</p>
        </div>

        <div className="foto">
          <img src="/perfil.jpg" alt="Foto de Perfil" />
        </div>
      </div>
       <div className="icones">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/joao-victor-oliveira-8b9b1a1b5/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="/caminho-do-seu-curriculo.pdf" target="_blank" rel="noopener noreferrer" title="Baixar Currículo">
          <FaFileDownload />
        </a>
      </div>
<div className="liguagem">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-carousel">
          <div className="skills-track">
            <div className="skill-icon"><FaJava /><span>Java</span></div>
            <div className="skill-icon"><FaPython /><span>Python</span></div>
            <div className="skill-icon"><FaJs /><span>JavaScript</span></div>
            <div className="skill-icon"><FaReact /><span>React</span></div>
            <div className="skill-icon"><SiFirebase /><span>Firebase</span></div>
            <div className="skill-icon"><SiSupabase /><span>Supabase</span></div>
            <div className="skill-icon"><SiMysql /><span>MySQL</span></div>
            <div className="skill-icon"><FaHtml5 /><span>HTML</span></div>
            <div className="skill-icon"><FaCss3Alt /><span>CSS</span></div>
            <div className="skill-icon"><SiTypescript /><span>TypeScript</span></div>
            {/* Duplicando para animação contínua */}
            <div className="skill-icon"><FaJava /><span>Java</span></div>
            <div className="skill-icon"><FaPython /><span>Python</span></div>
            <div className="skill-icon"><FaJs /><span>JavaScript</span></div>
            <div className="skill-icon"><FaReact /><span>React</span></div>
            <div className="skill-icon"><SiFirebase /><span>Firebase</span></div>
            <div className="skill-icon"><SiSupabase /><span>Supabase</span></div>
            <div className="skill-icon"><SiMysql /><span>MySQL</span></div>
            <div className="skill-icon"><FaHtml5 /><span>HTML</span></div>
            <div className="skill-icon"><FaCss3Alt /><span>CSS</span></div>
            <div className="skill-icon"><SiTypescript /><span>TypeScript</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
