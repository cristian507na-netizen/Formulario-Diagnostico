import { FormData } from '@/types/form';
import FieldWrapper from './FieldWrapper';
import RadioGroup from './RadioGroup';
import ScaleInput from './ScaleInput';

interface Props {
  data: FormData;
  onChange: (key: keyof FormData, value: any) => void;
}

const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  color: '#f1f5f9',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.875rem',
  padding: '0.65rem 0.9rem',
  width: '100%',
  outline: 'none',
  resize: 'vertical' as const,
};

const block = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1.4rem',
  padding: '1.5rem',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 14,
};

const questionNumber = (n: string, color = '#a78bfa') => (
  <div style={{
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color,
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: '-0.5rem',
  }}>
    {n}
  </div>
);

const leastControlOptions = [
  'Marketing',
  'Ventas',
  'Operaciones',
  'Administración',
  'No estoy seguro',
];

const changeReadinessOptions = [
  'Sí, estoy listo',
  'Depende del impacto',
  'Preferiría cambios pequeños',
  'No estoy seguro',
];

const stagnationFeelingOptions = [
  'Me daría tranquilidad',
  'Me preocuparía bastante',
  'Dependería del área',
  'Honestamente no lo sé',
];

export default function FormPage6({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Intro */}
      <div style={{
        padding: '1.25rem 1.5rem',
        background: 'rgba(167,139,250,0.06)',
        border: '1px solid rgba(167,139,250,0.15)',
        borderRadius: 14,
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem',
          lineHeight: 1.65,
          margin: 0,
        }}>
          Esta última sección no tiene respuestas correctas. Solo queremos entender cómo ves tu negocio desde adentro, sin filtros. Cuanto más honesto seas, más útil será el diagnóstico.
        </p>
      </div>

      {/* Q1 */}
      <div style={block}>
        {questionNumber('01')}
        <FieldWrapper label="Si pudieras simplificar algo de tu negocio mañana mismo, ¿qué sería?" hint="Lo primero que venga a la mente, sin filtrar">
          <textarea
            style={{ ...inputStyle, minHeight: 80 }}
            placeholder="Ej. Eliminaría las reuniones de seguimiento que no sirven para nada y el proceso de aprobación de facturas que pasa por tres personas antes de pagarse..."
            rows={3}
            value={(data as any).simplifyTomorrow ?? ''}
            onChange={(e) => onChange('simplifyTomorrow' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Q2 */}
      <div style={block}>
        {questionNumber('02')}
        <FieldWrapper label="¿Qué parte del negocio hoy te genera más cansancio o frustración?" hint="No hace falta que sea algo grande. A veces lo más pequeño es lo que más desgasta">
          <textarea
            style={{ ...inputStyle, minHeight: 80 }}
            placeholder="Ej. Me cansa tener que estar en todo para que las cosas salgan bien. Si no lo superviso yo personalmente, algo siempre falla. Llevo años intentando delegar y no lo consigo..."
            rows={3}
            value={(data as any).biggestFrustration ?? ''}
            onChange={(e) => onChange('biggestFrustration' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Q3 */}
      <div style={block}>
        {questionNumber('03')}
        <FieldWrapper label="¿Hay algo que sientes que funciona, pero sabes que no está bien del todo?" hint="Esas cosas que aguantan... hasta que dejan de aguantar">
          <textarea
            style={{ ...inputStyle, minHeight: 80 }}
            placeholder="Ej. Las ventas funcionan porque yo las llevo personalmente, pero si me enfermo una semana se para todo. O los clientes están contentos pero el margen real no lo conocemos bien..."
            rows={3}
            value={(data as any).worksButFragile ?? ''}
            onChange={(e) => onChange('worksButFragile' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Q4 */}
      <div style={block}>
        {questionNumber('04')}
        <FieldWrapper label="Si todo siguiera exactamente igual durante los próximos 12 meses... ¿eso te daría tranquilidad o te preocuparía?">
          <RadioGroup
            options={stagnationFeelingOptions}
            value={(data as any).stagnationFeeling ?? ''}
            onChange={(v) => onChange('stagnationFeeling' as any, v)}
          />
        </FieldWrapper>
        <FieldWrapper label="¿Por qué? ¿Qué hay detrás de esa respuesta?" hint="Opcional pero muy útil">
          <textarea
            style={{ ...inputStyle, minHeight: 72 }}
            placeholder="Ej. Me preocuparía porque la competencia se está moviendo rápido y si no hacemos nada en 12 meses perdemos posición. O me daría tranquilidad porque ahora mismo lo prioritario es estabilizar..."
            rows={3}
            value={(data as any).stagnationContext ?? ''}
            onChange={(e) => onChange('stagnationContext' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Q5 */}
      <div style={block}>
        {questionNumber('05')}
        <FieldWrapper label="¿En qué área sientes que tienes menos control hoy?">
          <RadioGroup
            options={leastControlOptions}
            value={(data as any).leastControl ?? ''}
            onChange={(v) => onChange('leastControl' as any, v)}
            columns={2}
          />
        </FieldWrapper>
        <FieldWrapper label="¿Qué ocurre exactamente en esa área que te genera esa sensación de falta de control?">
          <textarea
            style={{ ...inputStyle, minHeight: 72 }}
            placeholder="Ej. En administración no sé cuánto dinero tenemos realmente disponible hasta que el contable nos manda el informe mensual. Tomamos decisiones de inversión sin saber el estado real de la caja..."
            rows={3}
            value={(data as any).leastControlContext ?? ''}
            onChange={(e) => onChange('leastControlContext' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Q6 */}
      <div style={block}>
        {questionNumber('06')}
        <FieldWrapper label="¿Qué tendría que pasar para que digas: esta auditoría realmente valió la pena?" hint="Sé concreto. ¿Qué resultado, qué cambio, qué claridad?">
          <textarea
            style={{ ...inputStyle, minHeight: 80 }}
            placeholder="Ej. Que salga con un mapa claro de dónde estamos perdiendo dinero y tiempo, y con un orden de prioridades que pueda empezar a ejecutar la semana siguiente sin necesitar una consultora que me explique cada paso..."
            rows={3}
            value={(data as any).auditSuccessDef ?? ''}
            onChange={(e) => onChange('auditSuccessDef' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Q7 */}
      <div style={block}>
        {questionNumber('07')}
        <FieldWrapper label="Y siendo totalmente honesto... ¿estás listo para hacer cambios si vemos que son necesarios?">
          <RadioGroup
            options={changeReadinessOptions}
            value={(data as any).changeReadiness ?? ''}
            onChange={(v) => onChange('changeReadiness' as any, v)}
          />
        </FieldWrapper>
        <FieldWrapper label="¿Qué condición o contexto influye en esa respuesta?" hint="Opcional">
          <textarea
            style={{ ...inputStyle, minHeight: 60 }}
            placeholder="Ej. Estoy listo si los cambios no requieren parar la operación. O depende del coste, porque ahora mismo el presupuesto es limitado. O prefiero cambios graduales porque el equipo ya está saturado..."
            rows={2}
            value={(data as any).changeReadinessContext ?? ''}
            onChange={(e) => onChange('changeReadinessContext' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

      {/* Closing info */}
      <div style={{
        padding: '1.25rem 1.5rem',
        background: 'rgba(167,139,250,0.04)',
        border: '1px solid rgba(167,139,250,0.12)',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem',
          margin: 0,
          letterSpacing: '0.04em',
          textTransform: 'uppercase' as const,
        }}>
          Para enviarte el diagnóstico
        </p>

        <FieldWrapper label="Correo electrónico">
          <input
            type="email"
            style={{ ...inputStyle, resize: undefined }}
            placeholder="tu@empresa.com"
            value={(data as any).contactEmail ?? ''}
            onChange={(e) => onChange('contactEmail' as any, e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper label="Nombre completo">
          <input
            type="text"
            style={{ ...inputStyle, resize: undefined }}
            placeholder="Cómo prefieres que te llamemos"
            value={(data as any).contactName ?? ''}
            onChange={(e) => onChange('contactName' as any, e.target.value)}
          />
        </FieldWrapper>
      </div>

    </div>
  );
}
