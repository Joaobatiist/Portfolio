import React from 'react';
import './formacao.css';
import { FaGraduationCap, FaCertificate, FaAward, FaGlobe } from 'react-icons/fa';

const Formacao = () => {
  const formacoes = [
    {
      tipo: "graduacao",
      titulo: "Bacharelado em Ciência da Computação",
      instituicao: "Centro Universitário Jorge Amado",
      periodo: "2022 - 2026",
      descricao: "Formação completa em Ciência da Computação, com ênfase em desenvolvimento de software, estrutura de dados, algoritmos, arquitetura de sistemas e analise de dados."
    }
  ];

  const certificacoes = [
    {
      titulo: "Bradesco - Java Cloud Native",
      instituicao: "DIO (Digital Innovation One)",
      ano: "2024"
    },
    {
      titulo: "JavaScript Moderno - Do Básico ao Avançado",
      instituicao: "DIO (Digital Innovation One)",
      ano: "2024"
    },
    {
      titulo: "Iniciação Científica - Desenvolvimento de Soluções Tecnológicas para o Setor Acadêmico",
      instituicao: "Centro universitário Jorge Amado",
      ano: "2025"
    }
  ];

 

  return (
    <section id="formacao" className="formacao-container">
      <h2>Formação & Certificações</h2>
      
      <div className="formacao-content">
        <div className="formacao-top-section">
          <div className="educacao-section">
            <h3 className="section-title">
              <FaGraduationCap /> Educação
            </h3>
            <div className="educacao-grid">
              {formacoes.map((formacao, index) => (
                <div className="formacao-card" key={index}>
                  <div className="formacao-header">
                    <h4>{formacao.titulo}</h4>
                    <span className="periodo">{formacao.periodo}</span>
                  </div>
                  <h5>{formacao.instituicao}</h5>
                  <p>{formacao.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="certificacoes-section">
            <h3 className="section-title">
              <FaCertificate /> Certificações
            </h3>
            <div className="certificacoes-grid">
              {certificacoes.map((cert, index) => (
                <div className="certificacao-card" key={index}>
                  <FaAward className="cert-icon" />
                  <div className="cert-info">
                    <h4>{cert.titulo}</h4>
                    <p>{cert.instituicao}</p>
                    <span className="ano">{cert.ano}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
