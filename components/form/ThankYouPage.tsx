'use client';

import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ty-root {
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

        .ty-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 30% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 70% 70%, rgba(99, 102, 241, 0.12) 0%, transparent 55%);
          pointer-events: none;
        }

        .ty-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .ty-card {
          position: relative;
          z-index: 10;
          max-width: 480px;
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(16, 185, 129, 0.15),
            0 40px 80px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          text-align: center;
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .ty-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.8), rgba(99, 102, 241, 0.6), transparent);
          border-radius: 100%;
        }

        .ty-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1.75rem;
        }

        .ty-icon-container {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 1px rgba(16, 185, 129, 0.2),
            0 8px 32px rgba(16, 185, 129, 0.25),
            0 0 60px rgba(16, 185, 129, 0.1);
          animation: check-pulse 2.5s ease-in-out infinite;
        }

        @keyframes check-pulse {
          0%, 100% { box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.2), 0 8px 32px rgba(16, 185, 129, 0.25), 0 0 60px rgba(16, 185, 129, 0.1); }
          50% { box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.4), 0 8px 32px rgba(16, 185, 129, 0.4), 0 0 80px rgba(16, 185, 129, 0.2); }
        }

        .ty-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 2.1rem);
          font-weight: 800;
          color: #f8fafc;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .ty-description {
          font-size: 0.925rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .ty-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          border-radius: 12px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.6);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .ty-button:hover {
          border-color: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.05);
        }

        .ty-note {
          margin-top: 1.25rem;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.2);
          letter-spacing: 0.03em;
        }
      `}</style>

      <div className="ty-root">
        <div className="ty-card">
          <div className="ty-icon-wrapper">
            <div className="ty-icon-container">
              <CheckCircle style={{ width: 40, height: 40, color: '#10b981' }} />
            </div>
          </div>

          <h1 className="ty-title">¡Diagnóstico enviado!</h1>

          <p className="ty-description">
            Nuestro equipo analizará tus respuestas y se pondrá en contacto contigo pronto.
          </p>

          <button className="ty-button" onClick={() => window.location.reload()}>
            Volver al inicio
          </button>

          <p className="ty-note">Sus datos están protegidos y son confidenciales</p>
        </div>
      </div>
    </>
  );
}
