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

const teamSizes = ['Solo yo', '2-5 personas', '6-20 personas', '21-50 personas', 'Mas de 50'];
const businessStages = ['Arrancando (menos de 1 año)', 'Creciendo (1-3 años)', 'Consolidando (3-7 años)', 'Expandiendo (mas de 7 años)'];
const sectors = ['Servicios profesionales', 'Tecnologia / SaaS', 'Retail / Comercio', 'Salud / Bienestar', 'Educacion / Formacion', 'Construccion / Inmobiliaria', 'Hosteleria / Restauracion', 'Industria / Manufactura', 'Otro'];
const founderDependency = ['Todo depende de mi', 'La mayoria pasa por mi', 'Tengo equipo que gestiona areas', 'Tengo direccion delegada'];

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

      <FieldWrapper label="Nombre y cargo de quien completa este diagnostico">
        <input
          style={inputStyle}
          placeholder="Ej. Maria Garcia, Directora General"
          value={data.contactName}
          onChange={(e) => onChange('contactName', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="Sector o industria en la que opera">
        <RadioGroup options={sectors} value={data.sector ?? ''} onChange={(v) => onChange('sector', v)} columns={2} />
      </FieldWrapper>

      <FieldWrapper label="En que etapa se encuentra su empresa?">
        <RadioGroup options={businessStages} value={data.businessStage ?? ''} onChange={(v) => onChange('businessStage', v)} />
      </FieldWrapper>

      <FieldWrapper label="Cuantas personas forman parte del equipo?">
        <RadioGroup options={teamSizes} value={data.teamSize} onChange={(v) => onChange('teamSize', v)} columns={2} />
      </FieldWrapper>

      <FieldWrapper label="Facturacion anual aproximada" hint="Orientativo - ayuda a dimensionar el diagnostico">
        <input
          style={inputStyle}
          placeholder="Ej. 250.000 €"
          value={data.revenueRange ?? ''}
          onChange={(e) => onChange('revenueRange', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="Ya tienen procesos automatizados?" hint="Describa brevemente cuales">
        <textarea
          style={{ ...inputStyle, minHeight: 80 }}
          placeholder="Ej. Si usamos una herramienta para guardar datos automaticos y otra para hacer imagenes"
          rows={3}
          value={data.automatedProcesses}
          onChange={(e) => onChange('automatedProcesses', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="A que se dedica su empresa?" hint="Describa su modelo de negocio y a quien ayuda">
        <textarea
          style={{ ...inputStyle, minHeight: 80 }}
          placeholder="Ej. Ofrecemos servicios de consultoria a pymes del sector retail..."
          rows={3}
          value={data.businessDescription}
          onChange={(e) => onChange('businessDescription', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="Que parte del negocio depende directamente de usted?" hint="Piense en que pasaria si no estuviera disponible 2 semanas">
        <RadioGroup options={founderDependency} value={data.founderDependency ?? ''} onChange={(v) => onChange('founderDependency', v)} />
      </FieldWrapper>

      <FieldWrapper label="Cual es el principal problema que frena el crecimiento hoy?" hint="Sea directo - no hay respuesta incorrecta">
        <textarea
          style={{ ...inputStyle, minHeight: 64 }}
          placeholder="Ej. No tenemos procesos claros y todo depende de las mismas personas..."
          rows={2}
          value={data.mainChallenge}
          onChange={(e) => onChange('mainChallenge', e.target.value)}
        />
      </FieldWrapper>

      <FieldWrapper label="Que deberia estar funcionando mejor en 6 meses?">
        <textarea
          style={{ ...inputStyle, minHeight: 64 }}
          placeholder="Ej. Ventas no deberia depender de mi para cerrar..."
          rows={2}
          value={data.priorityImprovement}
          onChange={(e) => onChange('priorityImprovement', e.target.value)}
        />
      </FieldWrapper>

    </div>
  );
}
