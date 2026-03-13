'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, BarChart2, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CoverPageProps {
  onStart: () => void;
}

export default function CoverPage({ onStart }: CoverPageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cover-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0e1a;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 2rem 1rem;
        }

        .cover-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 20%, rgba(99, 102, 241, 0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(16, 185, 129, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(245, 158, 11, 0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .cover-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .card {
          position: relative;
          z-index: 10;
          max-width: 560px;
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(99, 102, 241, 0.15),
            0 40px 80px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8), rgba(16, 185, 129, 0.6), transparent);
          border-radius: 100%;
        }

        .icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .icon-container {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 1px rgba(99, 102, 241, 0.4),
            0 8px 32px rgba(99, 102, 241, 0.4),
            0 0 60px rgba(99, 102, 241, 0.15);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.4), 0 8px 32px rgba(99, 102, 241, 0.4), 0 0 60px rgba(99, 102, 241, 0.15); }
          50% { box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.6), 0 8px 32px rgba(99, 102, 241, 0.6), 0 0 80px rgba(99, 102, 241, 0.25); }
        }

        .eyebrow {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 0.75rem;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 800;
          color: #f8fafc;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .headline span {
          background: linear-gradient(135deg, #818cf8, #6366f1 40%, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          text-align: center;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.6;
          margin-bottom: 1.75rem;
          font-weight: 300;
        }

        .duration-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          padding: 0.4rem 1rem;
          width: fit-content;
          margin: 0 auto 1.75rem;
        }

        .description-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .description-box p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin: 0 0 1rem;
          font-weight: 300;
        }

        .pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 0.5rem 0.5rem;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .pill-1 {
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: #818cf8;
        }
        .pill-2 {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #34d399;
        }
        .pill-3 {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: #fbbf24;
        }

        .cta-button {
          width: 100%;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%);
          border: none;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
        }

        .cta-button:hover::before {
          opacity: 1;
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .footer-note {
          text-align: center;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.2);
          margin-top: 1rem;
          letter-spacing: 0.03em;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 1;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(99, 102, 241, 0.12);
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: rgba(16, 185, 129, 0.08);
          bottom: -80px;
          left: -80px;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -15px); }
          66% { transform: translate(-10px, 10px); }
        }
      `}</style>

      <div className="cover-root">
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="card">
          <div className="icon-wrapper">
            <div className="icon-container">
              <BarChart2 style={{ width: 32, height: 32, color: 'white' }} />
            </div>
          </div>

          <p className="eyebrow">Herramienta de diagnóstico empresarial</p>

          <h1 className="headline">
            Diagnóstico Estratégico de{' '}
            <span>Eficiencia y Escalabilidad</span>
          </h1>

          <p className="subtitle">
            Evaluación estructural del funcionamiento real de su empresa.
          </p>

          <div className="duration-badge">
            <Clock style={{ width: 13, height: 13 }} />
            <span>Duración estimada: 10–15 minutos</span>
          </div>

          <div className="description-box">
            <p>
              Este diagnóstico nos ayudara a identificar mejoras en sus áreas de administración,
              marketing, ventas y operaciones para escalar su negocio de forma eficiente.
            </p>
            <div className="pills">
              <div className="pill pill-1">
                <Zap style={{ width: 11, height: 11 }} />
                6 secciones
              </div>
              <div className="pill pill-2">
                <Shield style={{ width: 11, height: 11 }} />
                Confidencial
              </div>
              <div className="pill pill-3">
                <BarChart2 style={{ width: 11, height: 11 }} />
                Sin Coste
              </div>
            </div>
          </div>

          <button className="cta-button" onClick={onStart}>
            Comenzar diagnóstico
            <ChevronRight style={{ width: 18, height: 18 }} />
          </button>

          <p className="footer-note">Sin registro · Resultados inmediatos · Datos protegidos</p>
        </div>
      </div>
    </>
  );
}
