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
      empresa: " Tree - SP - Remoto",
      periodo: "Out 2025 - Atualmente",
      descricao: "",
      realizacoes: [
        "Desenvolvi sistemas de automação para integração contínua de dados governamentais, eliminando processos manuais e centralizando informações estratégicas.",
        "Reduzi drasticamente o volume de bugs e débitos técnicos, aprimorando a robustez geral do sistema e preparando o ecossistema para escala.",
        "Otimizei o pipeline de desenvolvimento estabelecendo padrões rigorosos de entrega para o time de QA, acelerando o ciclo de produção."
      ]
    },
    {
      cargo: "Estagiário de Engenharia de Software",
      empresa: "Aciole - Portugal - Remoto",
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
        "Desenvolvi uma solução desktop customizada para automação do fluxo de trabalho de monitoramento e arquivamento de transmissões de TV e streaming",
        "Eliminei gargalos operacionais ao substituir um processo manual de corte e download por uma interface automatizada, reduzindo o tempo de entrega de 2h para 5 minutos por mídia.",
        "Aumentei a produtividade da equipe técnica e otimizei a alocação de recursos humanos, gerando impacto direto na capacidade de entrega e na receita operacional do setor."
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
