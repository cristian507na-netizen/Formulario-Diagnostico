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

const blockTag = (label: string, color = '#38bdf8') => (
  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color, fontFamily: "'DM Sans', sans-serif", marginBottom: '-0.25rem' }}>
    {label}
  </div>
);

const onboardingStatus = ['Sí, documentado y estandarizado', 'Sí, pero informal y variable', 'Parcial, algunos pasos documentados', 'No existe onboarding formal'];
const clientReviewRounds = ['1 ronda', '2 rondas', '3 rondas o más', 'Sin límite definido', 'Depende del cliente'];
const satisfactionMeasure = ['NPS formal y periódico', 'Encuestas esporádicas', 'Feedback informal', 'No medimos satisfacción'];

export default function FormPage5({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* BLOQUE 1 */}
      <div style={block}>
        {blockTag('Entrega del Servicio')}

        <FieldWrapper label="¿Qué recibe exactamente el cliente cuando compra? Descríbalo en detalle:">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Reciben un informe de auditoría en PDF, 3 reuniones de seguimiento y acceso a un dashboard en Notion con el roadmap. El plazo es 4 semanas desde el kickoff..." rows={3} value={(data as any).deliverableDesc ?? ''} onChange={(e) => onChange('deliverableDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuál es el protocolo de la entrega del servicio? Desde que llega un cliente nuevo hasta que lo recibe">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El cliente llega, lo atendemos, decide qué quiere, se registra, le damos su factura, se inicia el servicio y luego se entrega..." rows={2} value={(data as any).serviceType ?? ''} onChange={(e) => onChange('serviceType' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuántos clientes activos tienen ahora mismo y cuántas personas del equipo participan en la entrega?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tenemos 12 clientes activos. En cada proyecto participan 3 personas: un project manager, un técnico y el CEO para la entrega final..." rows={2} value={(data as any).activeClientsDesc ?? ''} onChange={(e) => onChange('activeClientsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿El cliente siempre recibe lo mismo o el servicio varía según el caso?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El alcance varía bastante. No tenemos una definición estándar del servicio. Cada proyecto es diferente y el scope se define caso a caso..." rows={2} value={(data as any).scopeConsistencyDesc ?? ''} onChange={(e) => onChange('scopeConsistencyDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte del servicio genera más complejidad, más tiempo o más fricción interna?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. La fase de revisión con el cliente es la más complicada, puede alargarse semanas. También la coordinación entre departamentos cuando hay dependencias..." rows={2} value={(data as any).serviceComplexityDesc ?? ''} onChange={(e) => onChange('serviceComplexityDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 2 */}
      <div style={block}>
        {blockTag('Proceso de onboarding')}

        <FieldWrapper label="¿Tienen un proceso de onboarding definido para nuevos clientes?">
          <RadioGroup options={onboardingStatus} value={(data as any).onboardingStatus ?? ''} onChange={(v) => onChange('onboardingStatus' as any, v)} />
        </FieldWrapper>

        <FieldWrapper label="Describa paso a paso cómo se maneja un cliente nuevo">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. El CEO envía un email de bienvenida, luego coordinamos una reunión de kickoff, el cliente nos manda accesos y materiales por email..." rows={3} value={(data as any).onboardingFlowDesc ?? ''} onChange={(e) => onChange('onboardingFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué información necesitan del cliente para empezar? ¿Qué ocurre si el cliente no responde o tarda en mandarla?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Necesitamos accesos, documentación y una reunión inicial. Si el cliente no responde el proyecto queda bloqueado sin que nadie haga seguimiento activo..." rows={2} value={(data as any).onboardingBlockerDesc ?? ''} onChange={(e) => onChange('onboardingBlockerDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 3 */}
      <div style={block}>
        {blockTag('Flujo completo de entrega')}

        <FieldWrapper label="¿Qué activa el inicio del trabajo? ¿Cómo se registra, quién lo recibe y cómo se asigna internamente?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Cuando llega la firma del contrato el CEO avisa al equipo por WhatsApp. No hay sistema formal de asignación..." rows={3} value={(data as any).projectStartDesc ?? ''} onChange={(e) => onChange('projectStartDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Describa las tareas principales de producción en orden. ¿Quién hace cada una y dónde se producen más retrasos o dependencias entre personas?">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. Primero el técnico hace el análisis (2-3 días), luego el PM revisa (1 día), luego el CEO valida antes de mandar al cliente (a veces tarda 4-5 días)..." rows={3} value={(data as any).productionFlowDesc ?? ''} onChange={(e) => onChange('productionFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte del trabajo depende de conocimiento no documentado que está solo en la cabeza de alguien?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El técnico senior es el único que sabe hacer la parte de configuración avanzada. Si no está disponible ese paso se bloquea completamente..." rows={2} value={(data as any).tacitKnowledgeDesc ?? ''} onChange={(e) => onChange('tacitKnowledgeDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se entrega el trabajo/servicio al cliente? ¿Dónde se guarda y cómo se comunica la entrega?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Enviamos un email con un link a Drive. A veces hay archivos en email, otros en Drive y otros en Notion. No hay una ubicación estándar..." rows={2} value={(data as any).deliveryProcessDesc ?? ''} onChange={(e) => onChange('deliveryProcessDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuántas rondas de revisión del cliente hay en promedio?">
          <RadioGroup options={clientReviewRounds} value={(data as any).clientReviewRounds ?? ''} onChange={(v) => onChange('clientReviewRounds' as any, v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se gestionan los cambios o solicitudes fuera del alcance original?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los absorbemos internamente sin cobrar porque no queremos conflictos con el cliente. No tenemos proceso formal de gestión de cambios..." rows={2} value={(data as any).scopeChangeHandling ?? ''} onChange={(e) => onChange('scopeChangeHandling' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 4 */}
      <div style={block}>
        {blockTag('Control de calidad')}

        <FieldWrapper label="¿Existe un proceso formal de revisión de calidad antes de entregar al cliente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay proceso formal. Cada persona revisa lo suyo antes de entregar pero no hay criterios definidos ni checklist que se siga siempre..." rows={2} value={data.qualityControl} onChange={(e) => onChange('qualityControl', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué errores o problemas se detectan con más frecuencia después de la entrega? ¿Cuánto tiempo se pierde corrigiéndolos?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Los errores más frecuentes son datos incorrectos que el cliente detecta y errores de formato. Cada corrección nos cuesta entre 2 y 4 horas..." rows={3} value={(data as any).qualityErrorsDesc ?? ''} onChange={(e) => onChange('qualityErrorsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte del trabajo genera más retrabajo interno? ¿Por qué se produce ese retrabajo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. La fase de maquetación final genera más retrabajo porque el cliente pide cambios que no estaban en el brief inicial..." rows={2} value={(data as any).reworkCausesDesc ?? ''} onChange={(e) => onChange('reworkCausesDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 5 */}
      <div style={block}>
        {blockTag('Fricción y cuellos de botella')}

        <FieldWrapper label="¿Dónde se producen los mayores retrasos en la entrega? ¿Cuáles son las causas más frecuentes?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El mayor retraso es la validación del CEO antes de cada entrega. El segundo es esperar respuesta del cliente..." rows={3} value={data.bottlenecksDesc} onChange={(e) => onChange('bottlenecksDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tareas se repiten manualmente en cada proyecto y podrían hacerse de otra forma?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada vez configuramos manualmente la carpeta de Drive del cliente, mandamos los mismos emails de bienvenida escritos desde cero..." rows={2} value={(data as any).repetitiveOpsDesc ?? ''} onChange={(e) => onChange('repetitiveOpsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte de la operación genera más estrés al equipo? ¿Por qué?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las semanas de entrega con varios proyectos a la vez generan mucho estrés porque no tenemos visibilidad de carga real..." rows={2} value={(data as any).opsStressDesc ?? ''} onChange={(e) => onChange('opsStressDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 6 */}
      <div style={block}>
        {blockTag('Stack tecnológico de operaciones')}

        <FieldWrapper label="¿Qué herramientas usan para gestionar proyectos, archivos, comunicación interna y comunicación con clientes? ¿Están integradas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Usamos Notion para documentación, Trello para tareas, Drive para archivos, Slack internamente y email con clientes. Nada está integrado..." rows={3} value={data.opsToolsDesc} onChange={(e) => onChange('opsToolsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo fluye la información del cliente a través de las herramientas? ¿Hay personas que hacen de puente manual entre sistemas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El PM recibe el brief por email, lo copia a Notion, crea las tareas en Trello a mano y sube los archivos a Drive. Todo es manual..." rows={3} value={(data as any).opsDataFlowDesc ?? ''} onChange={(e) => onChange('opsDataFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Hay herramientas duplicadas o datos que se introducen en más de un sistema por separado?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El estado de cada proyecto está en Trello, en el Excel del CEO y en las actualizaciones de Slack. Hay tres versiones diferentes y a veces están desincronizadas..." rows={2} value={(data as any).toolOverlapOpsDesc ?? ''} onChange={(e) => onChange('toolOverlapOpsDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 7 */}
      <div style={block}>
        {blockTag('Experiencia del cliente')}

        <FieldWrapper label="¿Miden la satisfacción del cliente de forma estructurada?">
          <RadioGroup options={satisfactionMeasure} value={data.satisfactionMeasure} onChange={(v) => onChange('satisfactionMeasure', v)} />
        </FieldWrapper>

        <FieldWrapper label="¿Con qué frecuencia contactan proactivamente al cliente? ¿Hay protocolo de comunicación?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay protocolo definido. Contactamos cuando hay algo que entregar o cuando el cliente pregunta. No tenemos actualizaciones periódicas programadas..." rows={2} value={(data as any).clientCommsProactiveDesc ?? ''} onChange={(e) => onChange('clientCommsProactiveDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo gestionan las quejas o problemas? ¿Existe un protocolo formal?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay protocolo. Si un cliente se queja lo gestiona quien recibe el mensaje. No hay registro de incidencias..." rows={2} value={(data as any).complaintHandlingDesc ?? ''} onChange={(e) => onChange('complaintHandlingDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué comentarios o quejas se repiten con más frecuencia? ¿Qué genera más insatisfacción en los clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los clientes se quejan principalmente de falta de comunicación durante el proceso, de plazos que se alargan sin aviso previo..." rows={2} value={(data as any).repeatedComplaintsDesc ?? ''} onChange={(e) => onChange('repeatedComplaintsDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 8 */}
      <div style={block}>
        {blockTag('Escalabilidad')}

        <FieldWrapper label="Si duplicaran el número de clientes mañana, ¿qué parte de la operación colapsaría primero y por qué?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Lo primero que colapsaría es la coordinación del PM que ya está al límite. Lo segundo es el cuello de botella del CEO en las validaciones..." rows={3} value={data.serviceDelivery} onChange={(e) => onChange('serviceDelivery', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿La operación actual podría soportar ese crecimiento sin contratar más personas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, necesitaríamos al menos 2 personas más para gestionar el volumen. El sistema actual no escala sin contratar..." rows={2} value={(data as any).opsScaleHiring ?? ''} onChange={(e) => onChange('opsScaleHiring' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Hay documentación suficiente para que alguien nuevo pueda ejecutar el trabajo sin depender de alguien que lo explique?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No. Si contratáramos a alguien nuevo tardaría meses en aprender porque nada está documentado. Todo el conocimiento está en las personas del equipo actual..." rows={2} value={(data as any).delegationReadinessDesc ?? ''} onChange={(e) => onChange('delegationReadinessDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte de la operación genera más retrabajo y qué les impide escalar?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El mayor retrabajo viene de briefings mal recogidos al inicio. Lo que más nos impide escalar es la dependencia del CEO en las validaciones..." rows={2} value={(data as any).opsScaleBlockerDesc ?? ''} onChange={(e) => onChange('opsScaleBlockerDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué resultado justificaría esta auditoría de operaciones? ¿Cómo definirán el éxito?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Éxito sería poder incorporar 5 clientes nuevos al mes sin caos, tener procesos documentados que cualquiera pueda seguir..." rows={2} value={(data as any).opsSuccessDesc ?? ''} onChange={(e) => onChange('opsSuccessDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

    </div>
  );
}
