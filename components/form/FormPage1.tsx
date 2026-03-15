import { FormData } from '@/types/form';
import FieldWrapper from './FieldWrapper';
import RadioGroup from './RadioGroup';

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

const teamSizes = ['Solo yo', '2-5 personas', '6-20 personas', '21-50 personas', 'Más de 50'];
const businessStages = ['Arrancando (menos de 1 año)', 'Creciendo (1-3 años)', 'Consolidando (3-7 años)', 'Expandiendo (más de 7 años)'];
const sectors = ['Servicios profesionales', 'Tecnología / SaaS', 'Retail / Comercio', 'Salud / Bienestar', 'Educación / Formación', 'Construcción / Inmobiliaria', 'Hostelería / Restauración', 'Industria / Manufactura', 'Otro'];

export default function FormPage1({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

      <FieldWrapper label="Nombre de la empresa">
        <input
          style={inputStyle}
          placeholder="Ej. Empresa S.A."
          value={data.companyName}
          onChange={(e) => onChange('companyName', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="Nombre y cargo de quien completa este diagnóstico">
        <input
          style={inputStyle}
          placeholder="Ej. María García, Directora General"
          value={data.contactName}
          onChange={(e) => onChange('contactName', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="Sector o industria en la que opera">
        <RadioGroup options={sectors} value={data.sector ?? ''} onChange={(v) => onChange('sector', v)} columns={2} />
      </FieldWrapper>

      <FieldWrapper label="¿En qué etapa se encuentra su empresa?">
        <RadioGroup options={businessStages} value={data.businessStage ?? ''} onChange={(v) => onChange('businessStage', v)} />
      </FieldWrapper>

      <FieldWrapper label="¿Cuántas personas forman parte del equipo?">
        <RadioGroup options={teamSizes} value={data.teamSize} onChange={(v) => onChange('teamSize', v)} columns={2} />
      </FieldWrapper>

      <FieldWrapper label="Facturación anual aproximada" hint="Orientativo - ayuda a dimensionar el diagnóstico">
        <input
          style={inputStyle}
          placeholder="Ej. 250.000 €"
          value={data.revenueRange ?? ''}
          onChange={(e) => onChange('revenueRange', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="¿Ya tienen procesos automatizados?" hint="Describa brevemente cuáles">
        <textarea
          style={{ ...inputStyle, minHeight: 80 }}
          placeholder="Ej. Sí, usamos una herramienta para guardar datos automáticos y otra para hacer imágenes"
          rows={3}
          value={data.automatedProcesses}
          onChange={(e) => onChange('automatedProcesses', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="¿A qué se dedica su empresa?" hint="Describa su modelo de negocio y a quién ayuda">
        <textarea
          style={{ ...inputStyle, minHeight: 80 }}
          placeholder="Ej. Ofrecemos servicios de consultoría a pymes del sector retail..."
          rows={3}
          value={data.businessDescription}
          onChange={(e) => onChange('businessDescription', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="¿Qué parte del negocio depende directamente de usted?" hint="Piense en qué pasaría si no estuviera disponible 2 semanas">
        <textarea
          style={{ ...inputStyle, minHeight: 64 }}
          placeholder="Ej. Las ventas y la relación con clientes clave dependen de mí. Si no estoy, nadie cierra ni gestiona incidencias..."
          rows={2}
          value={data.founderDependency ?? ''}
          onChange={(e) => onChange('founderDependency', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="¿Cuál es el principal problema que frena el crecimiento hoy?" hint="Sea directo - no hay respuesta incorrecta">
        <textarea
          style={{ ...inputStyle, minHeight: 64 }}
          placeholder="Ej. No tenemos procesos claros y todo depende de las mismas personas..."
          rows={2}
          value={data.mainChallenge}
          onChange={(e) => onChange('mainChallenge', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="¿Qué debería estar funcionando mejor en 6 meses?">
        <textarea
          style={{ ...inputStyle, minHeight: 64 }}
          placeholder="Ej. Ventas no debería depender de mí para cerrar..."
          rows={2}
          value={data.priorityImprovement}
          onChange={(e) => onChange('priorityImprovement', e.target.value)}
        />
      </FieldWrapper>

    </div>
  );
}
