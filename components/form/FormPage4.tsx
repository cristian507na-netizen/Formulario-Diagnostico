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
  gap: '1.2rem',
  padding: '1.25rem',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 14,
};

const blockTag = (label: string, color = '#ec4899') => (
  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color, fontFamily: "'DM Sans', sans-serif", marginBottom: '-0.25rem' }}>
    {label}
  </div>
);

const dataCompliance = ['Si, cumplimos RGPD y tenemos politica clara', 'Parcialmente, hay cosas pendientes', 'No, no hemos trabajado esto'];

export default function FormPage4({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* BLOQUE 1 */}
      <div style={block}>
        {blockTag('Contexto y posicionamiento')}

        <FieldWrapper label="Cual es su propuesta de valor real? Que problema concreto resuelven y como lo describirian en una frase?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Ayudamos a pymes de retail a reducir devoluciones un 40% automatizando el proceso de atencion postventa..." rows={3} value={(data as any).valuePropositionDesc ?? ''} onChange={(e) => onChange('valuePropositionDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que los diferencia realmente de la competencia? Es un posicionamiento claro o es generico?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Honestamente nuestro posicionamiento es generico, decimos lo mismo que todos. No tenemos un diferencial claro comunicado..." rows={2} value={(data as any).differentiationDesc ?? ''} onChange={(e) => onChange('differentiationDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Marketing y ventas estan alineados en quien es el cliente ideal? O cada area tiene una vision diferente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Marketing atrae pymes pequenas pero ventas quiere empresas medianas. Hay tension porque los leads no encajan..." rows={2} value={(data as any).mktSalesAlignmentDesc ?? ''} onChange={(e) => onChange('mktSalesAlignmentDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cual es el ticket promedio de venta y el ciclo tipico desde que alguien descubre la marca hasta que compra?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Ticket promedio 35$. Desde que nos descubren hasta que compran pasan entre 2 y 6 semanas dependiendo del canal..." rows={2} value={(data as any).ticketCycleDesc ?? ''} onChange={(e) => onChange('ticketCycleDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 2 */}
      <div style={block}>
        {blockTag('Mapa de canales y presencia')}

        <FieldWrapper label="En que canales tienen presencia activa hoy? Cual genera mas leads y cual genera mas ventas reales?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Estamos en Instagram, LinkedIn y hacemos Google Ads. Instagram genera mas seguidores pero casi ninguna venta. LinkedIn nos trae menos leads pero cierran mejor..." rows={3} value={(data as any).channelMapDesc ?? ''} onChange={(e) => onChange('channelMapDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Publican con frecuencia definida? Hay calendario editorial o se publica cuando hay tiempo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay calendario, publicamos cuando el fundador tiene tiempo o cuando hay algo urgente que comunicar..." rows={2} value={(data as any).editorialCalendarDesc ?? ''} onChange={(e) => onChange('editorialCalendarDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Quien es responsable de cada canal? Hay algun canal que depende completamente del fundador?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El fundador lleva LinkedIn personalmente y nadie mas puede publicar ahi. El resto lo lleva una persona de marketing..." rows={2} value={(data as any).channelOwnershipDesc ?? ''} onChange={(e) => onChange('channelOwnershipDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que canal tiene mejor ROI segun su percepcion? Y cual sigue activo aunque no se justifique?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Creemos que los referidos tienen el mejor ROI pero nunca lo hemos medido formalmente. Seguimos pagando Facebook Ads aunque casi no convierte..." rows={2} value={(data as any).channelRoiDesc ?? ''} onChange={(e) => onChange('channelRoiDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 3 */}
      <div style={block}>
        {blockTag('Embudo completo')}

        <FieldWrapper label="Como descubre alguien su marca por primera vez? Describa el recorrido mas comun desde el primer contacto hasta que se convierte en lead">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. La mayoria llega por referidos o por Instagram. Ven un post, visitan el perfil, a veces hacen clic en el link de bio..." rows={3} value={data.leadToSalesProcess} onChange={(e) => onChange('leadToSalesProcess', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Donde dejan sus datos los prospectos? Cuantos pasos hay hasta convertirse en lead? Hay algun incentivo o lead magnet?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo tenemos un formulario de contacto en la web. No hay lead magnet ni incentivo. Son 4 campos..." rows={3} value={(data as any).leadCaptureDesc ?? ''} onChange={(e) => onChange('leadCaptureDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Describa que ocurre exactamente con un lead desde que entra hasta que llega a ventas">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Llega al email general, alguien lo reenvía al comercial, el comercial lo llama cuando puede. A veces pasan 2 dias..." rows={3} value={(data as any).leadHandlingDesc ?? ''} onChange={(e) => onChange('leadHandlingDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Se califica el lead antes de pasarlo a ventas? Como?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay calificacion formal. Cualquier lead que entra se pasa directamente a ventas sin filtro previo..." rows={2} value={(data as any).leadScoring ?? ''} onChange={(e) => onChange('leadScoring' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Existe nurturing automatizado para leads que no estan listos para comprar?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No existe nurturing. Si el lead no compra en el primer contacto lo perdemos. No tenemos secuencias de email ni seguimiento automatico..." rows={2} value={(data as any).nurtingStatus ?? ''} onChange={(e) => onChange('nurtingStatus' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se transfiere el lead a ventas? Hay friccion o perdida de informacion en ese traspaso?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Marketing manda un email a ventas con los datos del lead. A veces se pierde en la bandeja. No hay traspaso formal ni registro en el CRM automaticamente..." rows={2} value={(data as any).mktToSalesHandoffDesc ?? ''} onChange={(e) => onChange('mktToSalesHandoffDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Ventas considera que los leads de marketing son de calidad? Marketing recibe feedback de ventas sobre lo que cierra?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Ventas se queja de que los leads son malos pero marketing no recibe datos sobre cuales cierran. No hay comunicacion sistematica..." rows={2} value={(data as any).mktSalesFeedbackDesc ?? ''} onChange={(e) => onChange('mktSalesFeedbackDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 4 */}
      <div style={block}>
        {blockTag('Contenido y mensaje')}

        <FieldWrapper label="Tienen estrategia de contenido definida? Quien decide los temas, con que objetivo y alineado con que parte del embudo?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. No hay estrategia formal. Publicamos lo que parece interesante o lo que pide el fundador. No pensamos en si el contenido atrae, convierte o retiene..." rows={3} value={(data as any).contentStrategyDesc ?? ''} onChange={(e) => onChange('contentStrategyDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tipo de contenido producen y cual convierte mejor segun su experiencia? Miden que piezas generan ventas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Producimos posts en Instagram y algun articulo de blog. Creemos que los casos de exito funcionan bien pero no lo medimos formalmente..." rows={2} value={(data as any).contentPerformanceDesc ?? ''} onChange={(e) => onChange('contentPerformanceDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Se reutiliza el contenido en diferentes formatos y canales? O se produce una vez y se olvida?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Producimos cada pieza desde cero para cada canal. No tenemos sistema de reutilizacion..." rows={2} value={(data as any).contentRepurposeDesc ?? ''} onChange={(e) => onChange('contentRepurposeDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="La produccion de contenido depende de una sola persona? Que pasaria si esa persona no estuviera?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Todo el contenido lo hace una persona. Si se va o enferma la produccion se detiene completamente..." rows={2} value={(data as any).contentDependencyDesc ?? ''} onChange={(e) => onChange('contentDependencyDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tipo de contenido manejan?">
          <RadioGroup options={['Organico', 'Ads de pago', 'Ambos']} value={(data as any).contentType ?? ''} onChange={(v) => onChange('contentType' as any, v)} columns={3} />
        </FieldWrapper>

        <FieldWrapper label="Cuanto presupuesto mensual invierten en publicidad?">
          <input style={{ ...inputStyle, resize: undefined }} placeholder="Ej. 500 €/mes, o 'no invertimos en publicidad'" value={(data as any).adsMonthlyBudget ?? ''} onChange={(e) => onChange('adsMonthlyBudget' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Con que frecuencia suben contenido?">
          <RadioGroup options={['Diario', 'Varias veces por semana', 'Semanal', 'Ocasionalmente']} value={(data as any).contentFrequency ?? ''} onChange={(v) => onChange('contentFrequency' as any, v)} columns={2} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 5 */}
      <div style={block}>
        {blockTag('Stack tecnologico de marketing')}

        <FieldWrapper label="Que herramientas usan en marketing? Email, automatizacion, ads, analytics, CRM... Estan integradas entre si?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Usamos Mailchimp para email, Meta Ads para publicidad, Google Analytics para web y un Excel para seguimiento de leads. Nada esta conectado..." rows={3} value={(data as any).mktToolsDesc ?? ''} onChange={(e) => onChange('mktToolsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como fluye la informacion de un lead desde que entra hasta que llega al CRM? Se pierde informacion entre plataformas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El lead rellena el formulario de Typeform, alguien lo copia manualmente al Excel de leads, y si avanza alguien lo pasa a HubSpot a mano..." rows={3} value={(data as any).mktDataFlowDesc ?? ''} onChange={(e) => onChange('mktDataFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Donde se almacena la base de datos de leads y contactos? Quien tiene acceso y quien puede exportarla?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Esta distribuida entre Mailchimp, el CRM y un Excel que lleva marketing. Solo dos personas tienen acceso completo..." rows={2} value={(data as any).mktDatabaseDesc ?? ''} onChange={(e) => onChange('mktDatabaseDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 6 */}
      <div style={block}>
        {blockTag('Metricas y control')}

        <FieldWrapper label="Que metricas de marketing miden actualmente? Con que frecuencia y quien las revisa?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo miramos seguidores en Instagram y clics en los anuncios. No medimos coste por lead, tasa de conversion ni ROI por canal..." rows={3} value={(data as any).mktMetricsDesc ?? ''} onChange={(e) => onChange('mktMetricsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Saben cuantos leads generan al mes, cuanto cuesta cada lead y cuantos se convierten en clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Sabemos cuantos leads entran al mes aproximadamente pero no el coste por lead ni la tasa de conversion..." rows={2} value={(data as any).mktFunnelMetricsDesc ?? ''} onChange={(e) => onChange('mktFunnelMetricsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Tienen dashboard de marketing en tiempo real o trabajan con reportes manuales?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay dashboard. Cuando el CEO quiere datos, alguien los recopila manualmente de cada plataforma. Tarda medio dia y los datos tienen 2 semanas de retraso..." rows={2} value={(data as any).mktDashboardDesc ?? ''} onChange={(e) => onChange('mktDashboardDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Nivel de control y visibilidad sobre el rendimiento real de marketing">
          <ScaleInput value={data.prospectFollowUp} onChange={(v) => onChange('prospectFollowUp', v)} minLabel="Sin visibilidad" maxLabel="Control total" color="#ec4899" />
        </FieldWrapper>
      </div>

      {/* BLOQUE 7 */}
      <div style={block}>
        {blockTag('Friccion y cuellos de botella')}

        <FieldWrapper label="Donde se pierden mas leads en el embudo? En que punto exacto cae mas la conversion?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos trafico en la web pero muy pocos rellenan el formulario. De los que lo rellenan, la mitad no contestan cuando les llamamos..." rows={3} value={data.lostOpportunities} onChange={(e) => onChange('lostOpportunities', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tareas de marketing son manuales y repetitivas? Donde se va mas tiempo sin generar valor real?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada semana alguien descarga leads de cada plataforma y los consolida en Excel manualmente..." rows={2} value={(data as any).mktTimeWasteDesc ?? ''} onChange={(e) => onChange('mktTimeWasteDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte del embudo o proceso de marketing no esta documentada y dependeria de que alguien lo recuerde?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo el fundador sabe configurar las campanas de ads. La estrategia de contenido existe solo en la cabeza de la persona de marketing..." rows={2} value={(data as any).mktKnowledgeRiskDesc ?? ''} onChange={(e) => onChange('mktKnowledgeRiskDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 8 */}
      <div style={block}>
        {blockTag('Riesgo y control')}

        <FieldWrapper label="Dependen de un solo canal para generar la mayoria de leads? Que pasaria si ese canal dejara de funcionar manana?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El 80% de nuestros leads vienen de Instagram Ads. Si nos bloquean la cuenta o sube el CPL, nos quedamos sin leads inmediatamente..." rows={2} value={(data as any).channelDependencyRiskDesc ?? ''} onChange={(e) => onChange('channelDependencyRiskDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Tienen base de datos propia de contactos o dependen completamente de plataformas externas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tenemos una lista de email con 800 contactos propia pero la mayoria de nuestra audiencia esta en Instagram..." rows={2} value={(data as any).ownedAudienceDesc ?? ''} onChange={(e) => onChange('ownedAudienceDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cumplen con la normativa de proteccion de datos? Hay politica de privacidad, consentimiento y gestion de bajas?">
          <RadioGroup options={dataCompliance} value={(data as any).dataCompliance ?? ''} onChange={(v) => onChange('dataCompliance' as any, v)} />
        </FieldWrapper>

        <FieldWrapper label="Se puede auditar el rendimiento por campana y comparar periodos? Se registran los cambios realizados en campanas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Podemos ver datos en Meta Ads pero nadie documenta los cambios que se hacen. Si algo deja de funcionar no sabemos que cambio lo causo..." rows={2} value={(data as any).mktAuditabilityDesc ?? ''} onChange={(e) => onChange('mktAuditabilityDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 9 */}
      <div style={block}>
        {blockTag('Escalabilidad')}

        <FieldWrapper label="Si duplicaran el presupuesto de marketing manana, tienen sistema para absorber el doble de leads sin perderlos?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Honestamente no. Si duplicamos leads el equipo de ventas no daria abasto y perderiamos muchos por falta de respuesta rapida..." rows={3} value={(data as any).mktScaleDesc ?? ''} onChange={(e) => onChange('mktScaleDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="El contenido y el nurturing escalan con el crecimiento o dependen de tiempo humano que no se puede multiplicar?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Todo depende de personas. Si queremos publicar el doble necesitamos el doble de tiempo. No tenemos sistemas automatizados que escalen solos..." rows={2} value={(data as any).mktContentScaleDesc ?? ''} onChange={(e) => onChange('mktContentScaleDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Tienen estructura real para crecer en los proximos meses o necesitaria una transformacion importante?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Necesitariamos una transformacion importante. El sistema actual no esta preparado para escalar sin contratar mas personas..." rows={2} value={(data as any).mktScaleHiring ?? ''} onChange={(e) => onChange('mktScaleHiring' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que canal o accion de marketing sienten que no esta funcionando pero siguen haciendo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Seguimos pagando influencers porque siempre lo hemos hecho aunque no vemos retorno claro. Tambien el blog que nadie lee pero que mantenemos por SEO..." rows={2} value={(data as any).mktNotWorkingDesc ?? ''} onChange={(e) => onChange('mktNotWorkingDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

    </div>
  );
}
