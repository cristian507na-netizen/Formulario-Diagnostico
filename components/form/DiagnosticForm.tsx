'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { FormData, initialFormData } from '@/types/form';
import { transformFormData } from '@/lib/fieldLabels';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';
import FormPage5 from './FormPage5';
import FormPage6 from './FormPage6';
import ThankYouPage from './ThankYouPage';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL ?? '';
const STORAGE_KEY = 'diagnostic_form_data';
const STORAGE_PAGE_KEY = 'diagnostic_form_page';

const PAGE_TITLES = [
  { num: 1, title: 'Información general', color: '#6366f1' },
  { num: 2, title: 'Administración', color: '#10b981' },
  { num: 3, title: 'Ventas', color: '#f59e0b' },
  { num: 4, title: 'Marketing', color: '#818cf8' },
  { num: 5, title: 'Operaciones', color: '#34d399' },
  { num: 6, title: 'Visión estratégica', color: '#c084fc' },
];

export default function DiagnosticForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Cargar datos guardados al montar
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) setFormData(JSON.parse(savedData));

      const savedPage = localStorage.getItem(STORAGE_PAGE_KEY);
      if (savedPage) setCurrentPage(Number(savedPage));
    } catch {
      // si localStorage falla (ej. modo privado sin permisos), continúa normalmente
    }
  }, []);

  const handleChange = (key: keyof FormData, value: any) => {
    setFormData((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleNext = async () => {
    if (currentPage < 6) {
      const next = currentPage + 1;
      setCurrentPage(next);
      try { localStorage.setItem(STORAGE_PAGE_KEY, String(next)); } catch {}
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLoading(true);
      try {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(transformFormData(formData)),
        });
        if (!response.ok) throw new Error('Webhook error');
        // Limpiar persistencia solo tras envío exitoso
        try {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(STORAGE_PAGE_KEY);
        } catch {}
        setSubmitted(true);
      } catch (err) {
        toast.error('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      const prev = currentPage - 1;
      setCurrentPage(prev);
      try { localStorage.setItem(STORAGE_PAGE_KEY, String(prev)); } catch {}
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (submitted) return <ThankYouPage />;

  const pageInfo = PAGE_TITLES[currentPage - 1];
  const progress = (currentPage / 6) * 100;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .form-root {
          min-height: 100vh;
          background: #0a0e1a;
          font-family: 'DM Sans', sans-serif;
          padding: 1.5rem 1rem 4rem;
          position: relative;
        }

        .form-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 10% 10%, rgba(99,102,241,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 90%, rgba(16,185,129,0.08) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }

        .form-inner {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }

        .form-header {
          margin-bottom: 1.5rem;
        }

        .form-progress-track {
          height: 3px;
          background: rgba(255,255,255,0.08);
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 1.25rem;
        }

        .form-progress-fill {
          height: 100%;
          border-radius: 100px;
          background: linear-gradient(90deg, #6366f1, #10b981);
          transition: width 0.4s ease;
        }

        .form-nav-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .form-page-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          border: 1px solid;
        }

        .form-page-counter {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
        }

        .form-page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 800;
          color: #f8fafc;
          line-height: 1.2;
          margin-bottom: 0.25rem;
        }

        .form-page-subtitle {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          font-weight: 300;
        }

        .form-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 1.75rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          margin-bottom: 1.5rem;
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .btn-back {
          padding: 0 1.25rem;
          height: 48px;
          border-radius: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-back:hover {
          border-color: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.8);
        }

        .btn-next {
          flex: 1;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          border: none;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 6px 20px rgba(99,102,241,0.3);
          position: relative;
          overflow: hidden;
        }

        .btn-next:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(99,102,241,0.45);
        }

        .btn-next:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-next:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-submit {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 6px 20px rgba(16,185,129,0.3);
        }

        .btn-submit:hover:not(:disabled) {
          box-shadow: 0 10px 28px rgba(16,185,129,0.45);
        }

        input, textarea {
          box-sizing: border-box;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }

        input:focus, textarea:focus {
          border-color: rgba(99,102,241,0.4) !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.08);
        }
      `}</style>

      <div className="form-root">
        <div className="form-inner">
          <div className="form-header">
            <div className="form-progress-track">
              <div className="form-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="form-nav-info">
              <div
                className="form-page-badge"
                style={{
                  color: pageInfo.color,
                  borderColor: `${pageInfo.color}40`,
                  background: `${pageInfo.color}15`,
                }}
              >
                {pageInfo.title}
              </div>
              <span className="form-page-counter">
                {currentPage} / 6
              </span>
            </div>

            <h2 className="form-page-title">
              {currentPage === 1 && 'Cuéntenos sobre su empresa'}
              {currentPage === 2 && 'Administración y finanzas'}
              {currentPage === 3 && 'Proceso comercial y ventas'}
              {currentPage === 4 && 'Marketing y captación'}
              {currentPage === 5 && 'Operaciones y entrega'}
              {currentPage === 6 && 'Visión y cierre estratégico'}
            </h2>
            <p className="form-page-subtitle">
              Responda con la mayor precisión posible — no hay respuestas incorrectas
            </p>
          </div>

          <div className="form-card">
            {currentPage === 1 && <FormPage1 data={formData} onChange={handleChange} />}
            {currentPage === 2 && <FormPage2 data={formData} onChange={handleChange} />}
            {currentPage === 3 && <FormPage3 data={formData} onChange={handleChange} />}
            {currentPage === 4 && <FormPage4 data={formData} onChange={handleChange} />}
            {currentPage === 5 && <FormPage5 data={formData} onChange={handleChange} />}
            {currentPage === 6 && <FormPage6 data={formData} onChange={handleChange} />}
          </div>

          <div className="form-actions">
            {currentPage > 1 && (
              <button className="btn-back" onClick={handleBack}>
                ← Anterior
              </button>
            )}
            <button
              className={`btn-next ${currentPage === 6 ? 'btn-submit' : ''}`}
              onClick={handleNext}
              disabled={loading}
            >
              {loading
                ? 'Enviando...'
                : currentPage === 6
                ? 'Enviar diagnóstico'
                : 'Siguiente →'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
