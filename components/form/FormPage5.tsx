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

const onboardingStatus = ['Si, documentado y estandarizado', 'Si, pero informal y variable', 'Parcial, algunos pasos documentados', 'No existe onboarding formal'];
const clientReviewRounds = ['1 ronda', '2 rondas', '3 rondas o mas', 'Sin limite definido', 'Depende del cliente'];
const satisfactionMeasure = ['NPS formal y periodico', 'Encuestas esporadicas', 'Feedback informal', 'No medimos satisfaccion'];

export default function FormPage5({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* BLOQUE 1 */}
      <div style={block}>
        {blockTag('Entrega del Servicio')}

        <FieldWrapper label="Que recibe exactamente el cliente cuando compra? Describalo en detalle:">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Reciben un informe de auditoria en PDF, 3 reuniones de seguimiento y acceso a un dashboard en Notion con el roadmap. El plazo es 4 semanas desde el kickoff..." rows={3} value={(data as any).deliverableDesc ?? ''} onChange={(e) => onChange('deliverableDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cual es el protocolo de la entrega del servicio? Desde que llega un cliente nuevo hasta que lo recibe">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El cliente llega, lo atendemos, decide que quiere, se registra, le damos su factura, se inicia el servicio y luego se entrega..." rows={2} value={(data as any).serviceType ?? ''} onChange={(e) => onChange('serviceType' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cuantos clientes activos tienen ahora mismo y cuantas personas del equipo participan en la entrega?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tenemos 12 clientes activos. En cada proyecto participan 3 personas: un project manager, un tecnico y el CEO para la entrega final..." rows={2} value={(data as any).activeClientsDesc ?? ''} onChange={(e) => onChange('activeClientsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="El cliente siempre recibe lo mismo o el servicio varia segun el caso?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El alcance varia bastante. No tenemos una definicion estandar del servicio. Cada proyecto es diferente y el scope se define caso a caso..." rows={2} value={(data as any).scopeConsistencyDesc ?? ''} onChange={(e) => onChange('scopeConsistencyDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte del servicio genera mas complejidad, mas tiempo o mas friccion interna?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. La fase de revision con el cliente es la mas complicada, puede alargarse semanas. Tambien la coordinacion entre departamentos cuando hay dependencias..." rows={2} value={(data as any).serviceComplexityDesc ?? ''} onChange={(e) => onChange('serviceComplexityDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 2 */}
      <div style={block}>
        {blockTag('Proceso de onboarding')}

        <FieldWrapper label="Tienen un proceso de onboarding definido para nuevos clientes?">
          <RadioGroup options={onboardingStatus} value={(data as any).onboardingStatus ?? ''} onChange={(v) => onChange('onboardingStatus' as any, v)} />
        </FieldWrapper>

        <FieldWrapper label="Describa paso a paso como se maneja un cliente nuevo">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. El CEO envia un email de bienvenida, luego coordinamos una reunion de kickoff, el cliente nos manda accesos y materiales por email..." rows={3} value={(data as any).onboardingFlowDesc ?? ''} onChange={(e) => onChange('onboardingFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que informacion necesitan del cliente para empezar? Que ocurre si el cliente no responde o tarda en mandarla?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Necesitamos accesos, documentacion y una reunion inicial. Si el cliente no responde el proyecto queda bloqueado sin que nadie haga seguimiento activo..." rows={2} value={(data as any).onboardingBlockerDesc ?? ''} onChange={(e) => onChange('onboardingBlockerDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 3 */}
      <div style={block}>
        {blockTag('Flujo completo de entrega')}

        <FieldWrapper label="Que activa el inicio del trabajo? Como se registra, quien lo recibe y como se asigna internamente?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Cuando llega la firma del contrato el CEO avisa al equipo por WhatsApp. No hay sistema formal de asignacion..." rows={3} value={(data as any).projectStartDesc ?? ''} onChange={(e) => onChange('projectStartDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Describa las tareas principales de produccion en orden. Quien hace cada una y donde se producen mas retrasos o dependencias entre personas?">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. Primero el tecnico hace el analisis (2-3 dias), luego el PM revisa (1 dia), luego el CEO valida antes de mandar al cliente (a veces tarda 4-5 dias)..." rows={3} value={(data as any).productionFlowDesc ?? ''} onChange={(e) => onChange('productionFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte del trabajo depende de conocimiento no documentado que esta solo en la cabeza de alguien?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El tecnico senior es el unico que sabe hacer la parte de configuracion avanzada. Si no esta disponible ese paso se bloquea completamente..." rows={2} value={(data as any).tacitKnowledgeDesc ?? ''} onChange={(e) => onChange('tacitKnowledgeDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se entrega el trabajo al cliente? Donde se guarda y como se comunica la entrega?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Enviamos un email con un link a Drive. A veces hay archivos en email, otros en Drive y otros en Notion. No hay una ubicacion estandar..." rows={2} value={(data as any).deliveryProcessDesc ?? ''} onChange={(e) => onChange('deliveryProcessDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cuantas rondas de revision del cliente hay en promedio?">
          <RadioGroup options={clientReviewRounds} value={(data as any).clientReviewRounds ?? ''} onChange={(v) => onChange('clientReviewRounds' as any, v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="Como se gestionan los cambios o solicitudes fuera del alcance original?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los absorbemos internamente sin cobrar porque no queremos conflictos con el cliente. No tenemos proceso formal de gestion de cambios..." rows={2} value={(data as any).scopeChangeHandling ?? ''} onChange={(e) => onChange('scopeChangeHandling' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 4 */}
      <div style={block}>
        {blockTag('Control de calidad')}

        <FieldWrapper label="Existe un proceso formal de revision de calidad antes de entregar al cliente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay proceso formal. Cada persona revisa lo suyo antes de entregar pero no hay criterios definidos ni checklist que se siga siempre..." rows={2} value={data.qualityControl} onChange={(e) => onChange('qualityControl', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que errores o problemas se detectan con mas frecuencia despues de la entrega? Cuanto tiempo se pierde corrigiendolos?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Los errores mas frecuentes son datos incorrectos que el cliente detecta y errores de formato. Cada correccion nos cuesta entre 2 y 4 horas..." rows={3} value={(data as any).qualityErrorsDesc ?? ''} onChange={(e) => onChange('qualityErrorsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte del trabajo genera mas retrabajo interno? Por que se produce ese retrabajo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. La fase de maquetacion final genera mas retrabajo porque el cliente pide cambios que no estaban en el brief inicial..." rows={2} value={(data as any).reworkCausesDesc ?? ''} onChange={(e) => onChange('reworkCausesDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 5 */}
      <div style={block}>
        {blockTag('Friccion y cuellos de botella')}

        <FieldWrapper label="Donde se producen los mayores retrasos en la entrega? Cuales son las causas mas frecuentes?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El mayor retraso es la validacion del CEO antes de cada entrega. El segundo es esperar respuesta del cliente..." rows={3} value={data.bottlenecksDesc} onChange={(e) => onChange('bottlenecksDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tareas se repiten manualmente en cada proyecto y podrian hacerse de otra forma?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada vez configuramos manualmente la carpeta de Drive del cliente, mandamos los mismos emails de bienvenida escritos desde cero..." rows={2} value={(data as any).repetitiveOpsDesc ?? ''} onChange={(e) => onChange('repetitiveOpsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte de la operacion genera mas estres al equipo? Por que?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las semanas de entrega con varios proyectos a la vez generan mucho estres porque no tenemos visibilidad de carga real..." rows={2} value={(data as any).opsStressDesc ?? ''} onChange={(e) => onChange('opsStressDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 6 */}
      <div style={block}>
        {blockTag('Stack tecnologico de operaciones')}

        <FieldWrapper label="Que herramientas usan para gestionar proyectos, archivos, comunicacion interna y comunicacion con clientes? Estan integradas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Usamos Notion para documentacion, Trello para tareas, Drive para archivos, Slack internamente y email con clientes. Nada esta integrado..." rows={3} value={data.opsToolsDesc} onChange={(e) => onChange('opsToolsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como fluye la informacion del cliente a traves de las herramientas? Hay personas que hacen de puente manual entre sistemas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El PM recibe el brief por email, lo copia a Notion, crea las tareas en Trello a mano y sube los archivos a Drive. Todo es manual..." rows={3} value={(data as any).opsDataFlowDesc ?? ''} onChange={(e) => onChange('opsDataFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Hay herramientas duplicadas o datos que se introducen en mas de un sistema por separado?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El estado de cada proyecto esta en Trello, en el Excel del CEO y en las actualizaciones de Slack. Hay tres versiones diferentes y a veces estan desincronizadas..." rows={2} value={(data as any).toolOverlapOpsDesc ?? ''} onChange={(e) => onChange('toolOverlapOpsDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 7 */}
      <div style={block}>
        {blockTag('Experiencia del cliente')}

        <FieldWrapper label="Miden la satisfaccion del cliente de forma estructurada?">
          <RadioGroup options={satisfactionMeasure} value={data.satisfactionMeasure} onChange={(v) => onChange('satisfactionMeasure', v)} />
        </FieldWrapper>

        <FieldWrapper label="Con que frecuencia contactan proactivamente al cliente? Hay protocolo de comunicacion?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay protocolo definido. Contactamos cuando hay algo que entregar o cuando el cliente pregunta. No tenemos actualizaciones periodicas programadas..." rows={2} value={(data as any).clientCommsProactiveDesc ?? ''} onChange={(e) => onChange('clientCommsProactiveDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como gestionan las quejas o problemas? Existe un protocolo formal?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay protocolo. Si un cliente se queja lo gestiona quien recibe el mensaje. No hay registro de incidencias..." rows={2} value={(data as any).complaintHandlingDesc ?? ''} onChange={(e) => onChange('complaintHandlingDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que comentarios o quejas se repiten con mas frecuencia? Que genera mas insatisfaccion en los clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los clientes se quejan principalmente de falta de comunicacion durante el proceso, de plazos que se alargan sin aviso previo..." rows={2} value={(data as any).repeatedComplaintsDesc ?? ''} onChange={(e) => onChange('repeatedComplaintsDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 8 */}
      <div style={block}>
        {blockTag('Escalabilidad')}

        <FieldWrapper label="Si duplicaran el numero de clientes manana, que parte de la operacion colapsaria primero y por que?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Lo primero que colapsaria es la coordinacion del PM que ya esta al limite. Lo segundo es el cuello de botella del CEO en las validaciones..." rows={3} value={data.serviceDelivery} onChange={(e) => onChange('serviceDelivery', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="La operacion actual podria soportar ese crecimiento sin contratar mas personas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, necesitariamos al menos 2 personas mas para gestionar el volumen. El sistema actual no escala sin contratar..." rows={2} value={(data as any).opsScaleHiring ?? ''} onChange={(e) => onChange('opsScaleHiring' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Hay documentacion suficiente para que alguien nuevo pueda ejecutar el trabajo sin depender de alguien que lo explique?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No. Si contrataramos a alguien nuevo tardaria meses en aprender porque nada esta documentado. Todo el conocimiento esta en las personas del equipo actual..." rows={2} value={(data as any).delegationReadinessDesc ?? ''} onChange={(e) => onChange('delegationReadinessDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte de la operacion genera mas retrabajo y que les impide escalar?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El mayor retrabajo viene de briefings mal recogidos al inicio. Lo que mas nos impide escalar es la dependencia del CEO en las validaciones..." rows={2} value={(data as any).opsScaleBlockerDesc ?? ''} onChange={(e) => onChange('opsScaleBlockerDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que resultado justificaria esta auditoria de operaciones? Como definiran el exito?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Exito seria poder incorporar 5 clientes nuevos al mes sin caos, tener procesos documentados que cualquiera pueda seguir..." rows={2} value={(data as any).opsSuccessDesc ?? ''} onChange={(e) => onChange('opsSuccessDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

    </div>
  );
}
