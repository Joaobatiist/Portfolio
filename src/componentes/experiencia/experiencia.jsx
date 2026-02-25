import React, { useEffect, useRef } from 'react';
import './experiencia.css';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const Experiencia = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px'
      }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const experiencias = [
    {
      cargo: "Desenvolvedor Fullstack",
      empresa: "SP - Remoto",
      periodo: "Out 2025 - Atualmente",
      descricao: "Desenvolvimento e melhoria de plataforma de RPG, com foco em arquitetura escalável e experiência do usuário.",
      realizacoes: [
        "Melhorei a arquitetura do código da plataforma, trazendo mais agilidade na entrega de novas versões",
        "Liderei o desenvolvimento de features customizadas, transformando necessidades específicas de clientes em funcionalidades escaláveis",
        "Atuei na correção de débitos técnicos, garantindo um sistema robusto e preparado para escalabilidade"
      ]
    },
    {
      cargo: "Estagiário de Engenharia de Software",
      empresa: "Portugal - Remoto",
      periodo: "Set 2025 - Nov 2025",
      descricao: "Desenvolvimento de API RESTful com arquitetura MVC e trabalho colaborativo em metodologias ágeis.",
      realizacoes: [
        "Desenvolvimento de API RESTful com arquitetura MVC para facilitar manutenções futuras",
        "Modelagem de dados, criação de tabelas e configurações de RLS no Supabase",
        "Colaboração em metodologias ágeis com reuniões semanais, propondo ideias e melhorias do sistema"
      ]
    },
    {
      cargo: "Freelancer - Desenvolvimento de Software",
      empresa: "Python - MidiaClip",
      periodo: "Dez 2024 - Atualmente",
      descricao: "Desenvolvimento de aplicação desktop em Python para automação de download e segmentação de vídeos.",
      realizacoes: [
        "Desenvolvi aplicação desktop que automatizou o download e segmentação de vídeos de plataformas de streaming",
        "Implementei download acelerado usando múltiplos fragmentos",
        "Aumentei a eficiência do fluxo de trabalho, resultando em economia significativa de tempo"
      ]
    },
    {
      cargo: "Estagiário de TI",
      empresa: "Midiaclip - Salvador, BA",
      periodo: "Fev 2024 - Mai 2024",
      descricao: "Suporte técnico, manutenção de sistemas e contribuição para desenvolvimento de IA.",
      realizacoes: [
        "Otimizei a segurança e integridade de dados através de backups físicos e manutenção preventiva",
        "Contribuí para melhoria de sistema de IA alimentando a ferramenta com tags HTML para monitoramento de mídias",
        "Aprimorei a eficiência operacional prestando suporte técnico e solucionando problemas"
      ]
    }
  ];

  return (
    <section id="experiencia" className="experiencia-container">
      <h2>Experiência Profissional</h2>
      <div className="timeline" ref={timelineRef}>
        {experiencias.map((exp, index) => (
          <div 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
            key={index}
          >
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.cargo}</h3>
                <span className="periodo">
                  <FaCalendar /> {exp.periodo}
                </span>
              </div>
              <h4>{exp.empresa}</h4>
              <p className="descricao">{exp.descricao}</p>
              <ul className="realizacoes">
                {exp.realizacoes.map((realizacao, idx) => (
                  <li key={idx}>{realizacao}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
