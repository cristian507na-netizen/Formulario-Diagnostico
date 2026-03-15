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

const responseTime = ['Menos de 1 hora', '1-4 horas', '4-24 horas', 'Más de 24 horas', 'Sin tiempo definido'];
const proposalTime = ['Menos de 2 horas', '2-8 horas', '1-3 días', 'Más de 3 días'];
const pipelineHealth = ['Actualizado y fiable', 'Parcialmente actualizado', 'Desactualizado', 'No existe o no se usa'];
const closeRate = ['Menos del 10%', '10-25%', '25-50%', 'Más del 50%', 'No lo medimos'];

export default function FormPage3({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={block}>
        {blockTag('Estructura comercial real')}

        <FieldWrapper label="¿Quién es responsable final de ventas y cuántas personas venden en el equipo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El fundador lleva todas las ventas apoyado por un comercial junior que prospecta..." rows={2} value={data.salesOwnerDesc ?? ''} onChange={(e) => onChange('salesOwnerDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué roles comerciales existen? ¿Quién genera leads, quién cierra, quién hace seguimiento?" hint="Describa la división real, no la ideal">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay roles definidos, el fundador hace todo. A veces marketing pasa leads pero sin proceso claro..." rows={2} value={data.salesRolesDesc ?? ''} onChange={(e) => onChange('salesRolesDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tan dependiente de una persona es el proceso de ventas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Todo depende de la persona que esté en ese momento y su forma de tratar a las personas, no atendemos fuera de horario" rows={2} value={data.salesFounderDep ?? ''} onChange={(e) => onChange('salesFounderDep', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Si el responsable de ventas desapareciera 30 días, ¿qué pasaría?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las ventas se detendrían completamente porque todo el conocimiento y las relaciones están en una sola persona..." rows={2} value={data.absenceImpact30 ?? ''} onChange={(e) => onChange('absenceImpact30', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Flujo comercial')}

        <FieldWrapper label="Describa paso a paso qué ocurre desde que entra un lead hasta que se convierte en cliente" hint="Describa el recorrido real desde que alguien muestra interés">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. El lead llega por Instagram, alguien del equipo responde por DM, lo pasa a WhatsApp, se agenda una llamada, se envía cotización y si acepta se firma contrato por email..." rows={3} value={data.leadFlowStepByStep ?? ''} onChange={(e) => onChange('leadFlowStepByStep' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Por qué canales llegan los leads y dónde se centralizan?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Llegan por Instagram y referidos, algunos entran al email general, otros directamente al WhatsApp del fundador y se pierden..." rows={2} value={data.leadFlowDesc ?? ''} onChange={(e) => onChange('leadFlowDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Tiempo de respuesta a un lead nuevo">
          <RadioGroup options={responseTime} value={data.responseTime ?? ''} onChange={(v) => onChange('responseTime', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se asignan los leads y quién gestiona el primer contacto?" hint="Describa si hay un responsable definido o depende de quién esté disponible">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay asignación formal, el que ve el mensaje lo atiende. A veces dos personas contactan al mismo lead sin saberlo..." rows={2} value={data.leadAssignment ?? ''} onChange={(e) => onChange('leadAssignment', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Existe algún guión o proceso para el primer contacto? ¿Dónde queda registrado ese contacto?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada vendedor improvisa, no hay guión. El primer contacto queda en el chat de Instagram o WhatsApp de quien lo atendió, no en un sistema compartido..." rows={2} value={data.scriptExists ?? ''} onChange={(e) => onChange('scriptExists', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo evalúan a un cliente potencial? ¿Qué criterios usan para decidir si vale la pena seguir?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No tenemos criterios formales, el vendedor decide por intuición. A veces filtramos por presupuesto disponible o tamaño de empresa..." rows={2} value={data.qualificationDesc ?? ''} onChange={(e) => onChange('qualificationDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se genera una cotización? ¿Hay plantilla, cuánto tarda y quién la aprueba internamente?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Cada vendedor la hace desde cero en Excel, tarda 2-3 días, no hay aprobación interna formal..." rows={3} value={data.proposalDesc ?? ''} onChange={(e) => onChange('proposalDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuánto tiempo tarda en generarse una cotización desde que se decide enviarla?">
          <RadioGroup options={proposalTime} value={data.proposalTime ?? ''} onChange={(v) => onChange('proposalTime', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="¿Saben si el cliente vio la cotización? ¿Cómo hacen seguimiento si no responde?" hint="Describa el proceso real de seguimiento post-cotización">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No sabemos si la abren. Si no responden en 3-5 días llamamos, pero no hay un sistema estructurado y muchos leads quedan olvidados..." rows={2} value={data.proposalTracking ?? ''} onChange={(e) => onChange('proposalTracking', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿En qué momento se considera que una venta está cerrada y cómo queda registrada?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cuando el cliente confirma por WhatsApp. El comercial actualiza HubSpot y avisa al equipo de operaciones, aunque a veces se pierde información en el traspaso..." rows={2} value={data.saleClosedCriteriaDesc ?? ''} onChange={(e) => onChange('saleClosedCriteriaDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Pueden medir actualmente cuántos leads entran y cuántos terminan convirtiéndose en clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No lo medimos con exactitud. Sabemos cuánto facturamos pero no cuántos leads perdemos ni en qué etapa del proceso..." rows={2} value={data.leadConversionTracking ?? ''} onChange={(e) => onChange('leadConversionTracking' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Cuellos de botella')}

        <FieldWrapper label="¿Dónde se enfrían o pierden los leads habitualmente? ¿En qué momento del proceso ocurre más?" hint="Sea específico sobre el punto exacto donde se cae la oportunidad">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Después de enviar la propuesta no hacemos seguimiento estructurado y el prospecto desaparece..." rows={3} value={data.leadCoolDesc ?? ''} onChange={(e) => onChange('leadCoolDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tareas comerciales consumen tiempo sin generar valor real?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Generar propuestas desde cero cada vez, actualizar el CRM manualmente, buscar historial de conversaciones en WhatsApp..." rows={2} value={data.salesTimeWaste ?? ''} onChange={(e) => onChange('salesTimeWaste', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte del proceso comercial depende demasiado de una sola persona y no está documentada?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo el fundador sabe cómo negociar con clientes grandes, ese conocimiento no está en ningún sitio..." rows={2} value={data.salesKnowledgeRisk ?? ''} onChange={(e) => onChange('salesKnowledgeRisk', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Pipeline y control')}

        <FieldWrapper label="¿Cómo es el pipeline de ventas? ¿Cuántas etapas tiene y se respetan?" hint="Describa cómo funciona realmente en el día a día">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos 5 etapas en HubSpot pero nadie las actualiza. Los deals se quedan parados en 'propuesta enviada' durante meses sin limpieza..." rows={3} value={data.pipelineDesc ?? ''} onChange={(e) => onChange('pipelineDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Estado real del pipeline hoy">
          <RadioGroup options={pipelineHealth} value={data.pipelineHealth ?? ''} onChange={(v) => onChange('pipelineHealth', v)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se gestiona el seguimiento a prospectos?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada vendedor lleva su propio seguimiento en notas o en la cabeza. No hay sistema centralizado ni recordatorios automáticos..." rows={2} value={data.followUpSystem ?? ''} onChange={(e) => onChange('followUpSystem', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Estimación de tasa de cierre actual">
          <RadioGroup options={closeRate} value={data.closeRate ?? ''} onChange={(v) => onChange('closeRate', v)} columns={2} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Stack tecnológico comercial')}

        <FieldWrapper label="¿Qué herramientas utilizan para gestionar el proceso comercial?" hint="CRM, agenda, WhatsApp, email, firma de contratos, gestión de propuestas, etc.">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Usamos HubSpot para el CRM, Calendly para agendar reuniones, WhatsApp para comunicación diaria y DocuSign para firmar contratos. No están conectados entre sí..." rows={3} value={data.salesToolsDesc ?? ''} onChange={(e) => onChange('salesToolsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Estas herramientas están integradas entre sí o funcionan de forma independiente?" hint="Explique cómo se conecta la información entre ellas">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Funcionan de forma independiente. Cuando cerramos una venta en HubSpot, tenemos que actualizar manualmente el Excel de facturación y avisar al equipo por WhatsApp..." rows={2} value={data.toolsIntegrationDesc ?? ''} onChange={(e) => onChange('toolsIntegrationDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Dónde se registra la información de los leads o clientes potenciales?" hint="Indique si existe un sistema central o si la información está repartida en varias herramientas">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay un sistema central. Algunos leads están en HubSpot, otros en un Excel compartido y muchos solo en el WhatsApp o email de quien los atendió..." rows={2} value={data.leadRegistrationDesc ?? ''} onChange={(e) => onChange('leadRegistrationDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Métricas y control de ventas')}

        <FieldWrapper label="¿Qué métricas comerciales miden actualmente? ¿Con qué frecuencia y quién las revisa?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo miramos facturación mensual. No medimos tasa de cierre ni ciclo de venta. El CEO revisa los números a fin de mes..." rows={3} value={data.salesMetricsDesc ?? ''} onChange={(e) => onChange('salesMetricsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Visibilidad sobre ingresos futuros">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No tenemos visibilidad real. A fin de mes miramos lo que se ha cerrado pero no sabemos qué va a entrar el mes siguiente..." rows={2} value={data.revenueVisibility ?? ''} onChange={(e) => onChange('revenueVisibility', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Riesgo comercial')}

        <FieldWrapper label="¿Es posible ver el historial completo de una oportunidad o cliente?" hint="Por ejemplo: cuándo llegó el lead, quién habló con él, qué propuesta se envió y en qué estado está la venta">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Parcialmente. Si todo está en HubSpot sí, pero muchas conversaciones ocurren por WhatsApp y no quedan registradas en ningún sistema..." rows={3} value={data.dealHistoryDesc ?? ''} onChange={(e) => onChange('dealHistoryDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Dónde quedan registradas las conversaciones con los clientes?" hint="CRM, WhatsApp, email, llamadas, notas internas, etc.">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las conversaciones quedan repartidas: reuniones en el email, seguimientos en WhatsApp y solo las notas más importantes en HubSpot..." rows={2} value={data.conversationsRegistrationDesc ?? ''} onChange={(e) => onChange('conversationsRegistrationDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Toda la información del cliente está en un mismo sistema o está repartida en varias herramientas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Está repartida. El contrato en Google Drive, la facturación en Excel, las conversaciones en WhatsApp y los datos básicos en HubSpot..." rows={2} value={data.dataIntegrationDesc ?? ''} onChange={(e) => onChange('dataIntegrationDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Si alguien del equipo deja la empresa, sería fácil continuar las conversaciones con sus clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, sería muy difícil. Toda la relación con el cliente está en su móvil personal y su cabeza. No hay registros accesibles para el resto del equipo..." rows={2} value={data.teamTransitionDesc ?? ''} onChange={(e) => onChange('teamTransitionDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Quién tiene acceso a la base de datos de clientes y leads dentro del equipo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Todos tienen acceso al CRM sin restricciones. Cualquiera puede ver, editar o exportar la base de datos completa sin que quede registro..." rows={2} value={data.dataAccessDesc ?? ''} onChange={(e) => onChange('dataAccessDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Escalabilidad comercial')}

        <FieldWrapper label="Si duplicaran el volumen de leads mañana, ¿qué parte del proceso de ventas colapsaría primero y por qué?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El fundador no podría atender a todos, no hay proceso para que otro vendedor cierre con la misma calidad..." rows={3} value={data.salesScaleDesc ?? ''} onChange={(e) => onChange('salesScaleDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿El sistema de ventas actual soportaría ese crecimiento sin contratar más personas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, somos muy pocos y todo depende de las mismas personas." rows={2} value={data.salesScaleHiring ?? ''} onChange={(e) => onChange('salesScaleHiring', e.target.value)} />
        </FieldWrapper>
      </div>

      <div style={block}>
        {blockTag('Expectativas estratégicas')}

        <FieldWrapper label="¿Cuál es el mayor dolor en ventas hoy?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No sabemos cuánto vamos a facturar el mes que viene, dependemos completamente del fundador para cerrar..." rows={2} value={data.salesPainDesc ?? ''} onChange={(e) => onChange('salesPainDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué error en ventas sería grave para la empresa?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Perder un cliente grande por falta de seguimiento, que un vendedor se vaya con toda la cartera de clientes..." rows={2} value={data.salesCatastrophicRisk ?? ''} onChange={(e) => onChange('salesCatastrophicRisk', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué meta comercial quieren alcanzar en los próximos 12 meses?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Duplicar MRR, reducir ciclo de venta a 2 semanas, tener un equipo que venda sin depender de mí..." rows={2} value={data.salesGoal12m ?? ''} onChange={(e) => onChange('salesGoal12m', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo definirán el éxito de esta auditoría de ventas? ¿Qué tendría que ser diferente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tener un proceso claro que cualquier vendedor pueda seguir, pipeline actualizado y ventas predecibles sin mí..." rows={2} value={data.salesSuccessDesc ?? ''} onChange={(e) => onChange('salesSuccessDesc', e.target.value)} />
        </FieldWrapper>
      </div>
    </div>
  );
}
