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

const block = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1.2rem',
  padding: '1.25rem',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 14,
};

const blockTag = (label: string, color = '#f59e0b') => (
  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color, fontFamily: "'DM Sans', sans-serif", marginBottom: '-0.25rem' }}>
    {label}
  </div>
);

const responseTime = ['Menos de 1 hora', '1-4 horas', '4-24 horas', 'Mas de 24 horas', 'Sin tiempo definido'];
const proposalTime = ['Menos de 2 horas', '2-8 horas', '1-3 dias', 'Mas de 3 dias'];
const pipelineHealth = ['Actualizado y fiable', 'Parcialmente actualizado', 'Desactualizado', 'No existe o no se usa'];
const closeRate = ['Menos del 10%', '10-25%', '25-50%', 'Mas del 50%', 'No lo medimos'];

export default function FormPage3({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={block}>
        {blockTag('Estructura comercial real')}

        <FieldWrapper label="Quien es responsable final de ventas y cuantas personas venden en el equipo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El fundador lleva todas las ventas apoyado por un comercial junior que prospecta..." rows={2} value={data.salesOwnerDesc ?? ''} onChange={(e) => onChange('salesOwnerDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que roles comerciales existen? Quien genera leads, quien cierra, quien hace seguimiento?" hint="Describa la division real, no la ideal">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay roles definidos, el fundador hace todo. A veces marketing pasa leads pero sin proceso claro..." rows={2} value={data.salesRolesDesc ?? ''} onChange={(e) => onChange('salesRolesDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tan dependiente de una persona es el proceso de ventas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. todo depende de la persona que este en ese momento y su forma de tratar a las personas, no atendemos fuera de horario" rows={2} value={data.salesFounderDep ?? ''} onChange={(e) => onChange('salesFounderDep', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Si el responsable de ventas desapareciera 30 dias, que pasaria?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las ventas se detendrian completamente porque todo el conocimiento y las relaciones estan en una sola persona..." rows={2} value={data.absenceImpact30 ?? ''} onChange={(e) => onChange('absenceImpact30', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Flujo real de ventas')}

        <FieldWrapper label="Por que canales llegan los leads y donde se centralizan?" hint="Describa el recorrido real desde que alguien muestra interes">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Llegan por Instagram y referidos, algunos entran al email general, otros directamente al WhatsApp del fundador y se pierden..." rows={3} value={data.leadFlowDesc ?? ''} onChange={(e) => onChange('leadFlowDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Tiempo de respuesta a un lead nuevo">
          <RadioGroup options={responseTime} value={data.responseTime ?? ''} onChange={(v) => onChange('responseTime', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="Como se asignan los leads al equipo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay asignacion formal, el que ve el mensaje lo atiende. A veces dos personas contactan al mismo lead..." rows={2} value={data.leadAssignment ?? ''} onChange={(e) => onChange('leadAssignment', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como es el primer contacto con un prospecto? Existe algun guion o proceso?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada vendedor improvisa, no hay guion. El fundador tiene su propio estilo que funciona pero no esta documentado..." rows={2} value={data.scriptExists ?? ''} onChange={(e) => onChange('scriptExists', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como califican si un prospecto es viable? Que criterios usan y quien decide si pasa a siguiente etapa?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No tenemos criterios formales, el vendedor decide por intuicion. A veces calificamos por presupuesto disponible..." rows={2} value={data.qualificationDesc ?? ''} onChange={(e) => onChange('qualificationDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se genera una propuesta? Hay plantilla, cuanto tarda y quien la aprueba internamente?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Cada vendedor la hace desde cero en PowerPoint, tarda 2-3 dias, no hay aprobacion interna formal..." rows={3} value={data.proposalDesc ?? ''} onChange={(e) => onChange('proposalDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cuanto tiempo tarda en generarse una propuesta desde que se decide enviarla?">
          <RadioGroup options={proposalTime} value={data.proposalTime ?? ''} onChange={(v) => onChange('proposalTime', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="Saben si el cliente abrio la propuesta? Como hacen seguimiento tras enviarla?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No sabemos si la abren. Hacemos seguimiento llamando a los 3-5 dias pero sin sistema estructurado..." rows={2} value={data.proposalTracking ?? ''} onChange={(e) => onChange('proposalTracking', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Para otorgarle informacion al cliente nuevo, pero no saben la respuesta, donde la buscan?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Le preguntamos al jefe o buscamos en conversaciones anteriores..." rows={2} value={data.discountAuth ?? ''} onChange={(e) => onChange('discountAuth', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que ocurre exactamente cuando se cierra una venta? Como queda registrado y como se activa la entrega?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El comercial avisa por WhatsApp al equipo de delivery, se genera factura al dia siguiente, pero a veces se pierde informacion en el traspaso..." rows={3} value={data.closingHandoffDesc ?? ''} onChange={(e) => onChange('closingHandoffDesc', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Cuellos de botella')}

        <FieldWrapper label="Donde se enfrían o pierden los leads habitualmente? En que momento del proceso ocurre mas?" hint="Sea especifico sobre el punto exacto donde se cae la oportunidad">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Despues de enviar la propuesta no hacemos seguimiento estructurado y el prospecto desaparece..." rows={3} value={data.leadCoolDesc ?? ''} onChange={(e) => onChange('leadCoolDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tareas comerciales consumen tiempo sin generar valor real?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Generar propuestas desde cero cada vez, actualizar el CRM manualmente, buscar historial de conversaciones en WhatsApp..." rows={2} value={data.salesTimeWaste ?? ''} onChange={(e) => onChange('salesTimeWaste', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte del proceso comercial depende demasiado de una sola persona y no esta documentada?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo el fundador sabe como negociar con clientes grandes, ese conocimiento no esta en ningun sitio..." rows={2} value={data.salesKnowledgeRisk ?? ''} onChange={(e) => onChange('salesKnowledgeRisk', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Pipeline y control')}

        <FieldWrapper label="Como es el pipeline de ventas? Cuantas etapas tiene y se respetan?" hint="Describa como funciona realmente en el dia a dia">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos 5 etapas en HubSpot pero nadie las actualiza. Los deals se quedan parados en 'propuesta enviada' durante meses sin limpieza..." rows={3} value={data.pipelineDesc ?? ''} onChange={(e) => onChange('pipelineDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Estado real del pipeline hoy">
          <RadioGroup options={pipelineHealth} value={data.pipelineHealth ?? ''} onChange={(v) => onChange('pipelineHealth', v)} />
        </FieldWrapper>

        <FieldWrapper label="Como se gestiona el seguimiento a prospectos?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada vendedor lleva su propio seguimiento en notas o en la cabeza. No hay sistema centralizado ni recordatorios automaticos..." rows={2} value={data.followUpSystem ?? ''} onChange={(e) => onChange('followUpSystem', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Estimacion de tasa de cierre actual">
          <RadioGroup options={closeRate} value={data.closeRate ?? ''} onChange={(v) => onChange('closeRate', v)} columns={2} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Stack tecnologico comercial')}

        <FieldWrapper label="Que herramientas comerciales usan? CRM, agenda, firma, comunicacion..." hint="Liste todas y describa si estan integradas o funcionan en silos">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Usamos HubSpot pero solo el fundador lo actualiza, Calendly para reuniones, WhatsApp para todo lo demas. No estan conectados entre si..." rows={3} value={data.salesToolsDesc ?? ''} onChange={(e) => onChange('salesToolsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Nivel de adopcion del CRM en el equipo">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo el fundador lo usa con regularidad. El resto del equipo lo ignora porque no ven el valor o les parece complicado..." rows={2} value={data.crmAdoption ?? ''} onChange={(e) => onChange('crmAdoption', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como fluye la informacion de un lead desde que entra hasta que se cierra? Se duplica en varios sistemas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El lead llega por Instagram, alguien lo apunta en Excel, luego se pasa a HubSpot a mano si se convierte en oportunidad..." rows={2} value={data.salesDataFlowDesc ?? ''} onChange={(e) => onChange('salesDataFlowDesc', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Metricas y control de ventas')}

        <FieldWrapper label="Que metricas comerciales miden actualmente? Con que frecuencia y quien las revisa?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo miramos facturacion mensual. No medimos tasa de cierre ni ciclo de venta. El CEO revisa los numeros a fin de mes..." rows={3} value={data.salesMetricsDesc ?? ''} onChange={(e) => onChange('salesMetricsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Visibilidad sobre ingresos futuros">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No tenemos visibilidad real. A fin de mes miramos lo que se ha cerrado pero no sabemos que va a entrar el mes siguiente..." rows={2} value={data.revenueVisibility ?? ''} onChange={(e) => onChange('revenueVisibility', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Riesgo comercial')}

        <FieldWrapper label="Se puede auditar o reconstruir el historial completo de cada deal?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Parcialmente. Si esta en el CRM si, pero muchas conversaciones ocurren por WhatsApp o email y no quedan registradas..." rows={2} value={data.dealAuditability ?? ''} onChange={(e) => onChange('dealAuditability', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Se comparten credenciales del CRM o herramientas comerciales?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Si, el equipo comparte una cuenta de HubSpot porque no queremos pagar mas licencias. No sabemos quien hace que..." rows={2} value={data.crmCredentials ?? ''} onChange={(e) => onChange('crmCredentials', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Hay riesgo de que alguien se vaya con la base de datos de clientes o prospectos?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Si, cualquiera puede exportar el CRM completo. No hay controles de acceso ni registro de exportaciones..." rows={2} value={data.crmDataRisk ?? ''} onChange={(e) => onChange('crmDataRisk', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Escalabilidad comercial')}

        <FieldWrapper label="Si duplicaran el volumen de leads manana, que parte del proceso de ventas colapsaria primero y por que?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El fundador no podria atender a todos, no hay proceso para que otro vendedor cierre con la misma calidad..." rows={3} value={data.salesScaleDesc ?? ''} onChange={(e) => onChange('salesScaleDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="El sistema de ventas actual soportaria ese crecimiento sin contratar mas personas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, somos muy pocos y todo depende de las mismas personas." rows={2} value={data.salesScaleHiring ?? ''} onChange={(e) => onChange('salesScaleHiring', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Expectativas estrategicas')}

        <FieldWrapper label="Cual es el mayor dolor en ventas hoy?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No sabemos cuanto vamos a facturar el mes que viene, dependemos completamente del fundador para cerrar..." rows={2} value={data.salesPainDesc ?? ''} onChange={(e) => onChange('salesPainDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que error en ventas seria grave para la empresa?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Perder un cliente grande por falta de seguimiento, que un vendedor se vaya con toda la cartera de clientes..." rows={2} value={data.salesCatastrophicRisk ?? ''} onChange={(e) => onChange('salesCatastrophicRisk', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que meta comercial quieren alcanzar en los proximos 12 meses?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Duplicar MRR, reducir ciclo de venta a 2 semanas, tener un equipo que venda sin depender de mi..." rows={2} value={data.salesGoal12m ?? ''} onChange={(e) => onChange('salesGoal12m', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como definiran el exito de esta auditoria de ventas? Que tendria que ser diferente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tener un proceso claro que cualquier vendedor pueda seguir, pipeline actualizado y ventas predecibles sin mi..." rows={2} value={data.salesSuccessDesc ?? ''} onChange={(e) => onChange('salesSuccessDesc', e.target.value)} />
        </FieldWrapper>
      </div>
    </div>
  );
}
