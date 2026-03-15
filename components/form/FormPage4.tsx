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

const dataCompliance = ['Sí, cumplimos RGPD y tenemos política clara', 'Parcialmente, hay cosas pendientes', 'No, no hemos trabajado esto'];

export default function FormPage4({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* BLOQUE 1 */}
      <div style={block}>
        {blockTag('Contexto y posicionamiento')}

        <FieldWrapper label="¿Cuál es su propuesta de valor real? ¿Qué problema concreto resuelven y cómo lo describirían en una frase?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Ayudamos a pymes de retail a reducir devoluciones un 40% automatizando el proceso de atención postventa..." rows={3} value={(data as any).valuePropositionDesc ?? ''} onChange={(e) => onChange('valuePropositionDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué los diferencia realmente de la competencia? ¿Es un posicionamiento claro o es genérico?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Honestamente nuestro posicionamiento es genérico, decimos lo mismo que todos. No tenemos un diferencial claro comunicado..." rows={2} value={(data as any).differentiationDesc ?? ''} onChange={(e) => onChange('differentiationDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Marketing y ventas están alineados en quién es el cliente ideal? ¿O cada área tiene una visión diferente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Marketing atrae pymes pequeñas pero ventas quiere empresas medianas. Hay tensión porque los leads no encajan..." rows={2} value={(data as any).mktSalesAlignmentDesc ?? ''} onChange={(e) => onChange('mktSalesAlignmentDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuál es el ticket promedio de venta y el ciclo típico desde que alguien descubre la marca hasta que compra?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Ticket promedio 35$. Desde que nos descubren hasta que compran pasan entre 2 y 6 semanas dependiendo del canal..." rows={2} value={(data as any).ticketCycleDesc ?? ''} onChange={(e) => onChange('ticketCycleDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 2 */}
      <div style={block}>
        {blockTag('Mapa de canales y presencia')}

        <FieldWrapper label="¿En qué canales tienen presencia activa hoy? ¿Cuál genera más leads y cuál genera más ventas reales?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Estamos en Instagram, LinkedIn y hacemos Google Ads. Instagram genera más seguidores pero casi ninguna venta. LinkedIn nos trae menos leads pero cierran mejor..." rows={3} value={(data as any).channelMapDesc ?? ''} onChange={(e) => onChange('channelMapDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Publican con frecuencia definida? ¿Hay calendario editorial o se publica cuando hay tiempo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay calendario, publicamos cuando el fundador tiene tiempo o cuando hay algo urgente que comunicar..." rows={2} value={(data as any).editorialCalendarDesc ?? ''} onChange={(e) => onChange('editorialCalendarDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Quién es responsable de cada canal? ¿Hay algún canal que depende completamente del fundador?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El fundador lleva LinkedIn personalmente y nadie más puede publicar ahí. El resto lo lleva una persona de marketing..." rows={2} value={(data as any).channelOwnershipDesc ?? ''} onChange={(e) => onChange('channelOwnershipDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué canal tiene mejor ROI según su percepción? ¿Y cuál sigue activo aunque no se justifique?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Creemos que los referidos tienen el mejor ROI pero nunca lo hemos medido formalmente. Seguimos pagando Facebook Ads aunque casi no convierte..." rows={2} value={(data as any).channelRoiDesc ?? ''} onChange={(e) => onChange('channelRoiDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 3 */}
      <div style={block}>
        {blockTag('Embudo completo')}

        <FieldWrapper label="¿Cómo descubre alguien su marca por primera vez? Describa el recorrido más común desde el primer contacto hasta que se convierte en lead">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. La mayoría llega por referidos o por Instagram. Ven un post, visitan el perfil, a veces hacen clic en el link de bio..." rows={3} value={data.leadToSalesProcess} onChange={(e) => onChange('leadToSalesProcess', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Dónde dejan sus datos los prospectos? ¿Cuántos pasos hay hasta convertirse en lead? ¿Hay algún incentivo o lead magnet?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo tenemos un formulario de contacto en la web. No hay lead magnet ni incentivo. Son 4 campos..." rows={3} value={(data as any).leadCaptureDesc ?? ''} onChange={(e) => onChange('leadCaptureDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Se califica el lead antes de pasarlo a ventas? ¿Cómo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay calificación formal. Cualquier lead que entra se pasa directamente a ventas sin filtro previo..." rows={2} value={(data as any).leadScoring ?? ''} onChange={(e) => onChange('leadScoring' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Existe nurturing automatizado para leads que no están listos para comprar?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No existe nurturing. Si el lead no compra en el primer contacto lo perdemos. No tenemos secuencias de email ni seguimiento automático..." rows={2} value={(data as any).nurtingStatus ?? ''} onChange={(e) => onChange('nurtingStatus' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se transfiere el lead a ventas? ¿Hay fricción o pérdida de información en ese traspaso?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Marketing manda un email a ventas con los datos del lead. A veces se pierde en la bandeja. No hay traspaso formal ni registro en el CRM automáticamente..." rows={2} value={(data as any).mktToSalesHandoffDesc ?? ''} onChange={(e) => onChange('mktToSalesHandoffDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Ventas considera que los leads de marketing son de calidad? ¿Marketing recibe feedback de ventas sobre lo que cierra?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Ventas se queja de que los leads son malos pero marketing no recibe datos sobre cuáles cierran. No hay comunicación sistemática..." rows={2} value={(data as any).mktSalesFeedbackDesc ?? ''} onChange={(e) => onChange('mktSalesFeedbackDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 4 */}
      <div style={block}>
        {blockTag('Contenido y mensaje')}

        <FieldWrapper label="¿Tienen estrategia de contenido definida? ¿Quién decide los temas, con qué objetivo y alineado con qué parte del embudo?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. No hay estrategia formal. Publicamos lo que parece interesante o lo que pide el fundador. No pensamos en si el contenido atrae, convierte o retiene..." rows={3} value={(data as any).contentStrategyDesc ?? ''} onChange={(e) => onChange('contentStrategyDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tipo de contenido producen y cuál convierte mejor según su experiencia? ¿Miden qué piezas generan ventas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Producimos posts en Instagram y algún artículo de blog. Creemos que los casos de éxito funcionan bien pero no lo medimos formalmente..." rows={2} value={(data as any).contentPerformanceDesc ?? ''} onChange={(e) => onChange('contentPerformanceDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Se reutiliza el contenido en diferentes formatos y canales? ¿O se produce una vez y se olvida?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Producimos cada pieza desde cero para cada canal. No tenemos sistema de reutilización..." rows={2} value={(data as any).contentRepurposeDesc ?? ''} onChange={(e) => onChange('contentRepurposeDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿La producción de contenido depende de una sola persona? ¿Qué pasaría si esa persona no estuviera?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Todo el contenido lo hace una persona. Si se va o enferma la producción se detiene completamente..." rows={2} value={(data as any).contentDependencyDesc ?? ''} onChange={(e) => onChange('contentDependencyDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tipo de contenido manejan?">
          <RadioGroup options={['Orgánico', 'Ads de pago', 'Ambos']} value={(data as any).contentType ?? ''} onChange={(v) => onChange('contentType' as any, v)} columns={3} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuánto presupuesto mensual invierten en publicidad?">
          <input style={{ ...inputStyle, resize: undefined }} placeholder="Ej. 500 €/mes, o 'no invertimos en publicidad'" value={(data as any).adsMonthlyBudget ?? ''} onChange={(e) => onChange('adsMonthlyBudget' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Con qué frecuencia suben contenido?">
          <RadioGroup options={['Diario', 'Varias veces por semana', 'Semanal', 'Ocasionalmente']} value={(data as any).contentFrequency ?? ''} onChange={(v) => onChange('contentFrequency' as any, v)} columns={2} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 5 */}
      <div style={block}>
        {blockTag('Stack tecnológico de marketing')}

        <FieldWrapper label="¿Qué herramientas usan en marketing? Email, automatización, ads, analytics, CRM... ¿Están integradas entre sí?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Usamos Mailchimp para email, Meta Ads para publicidad, Google Analytics para web y un Excel para seguimiento de leads. Nada está conectado..." rows={3} value={(data as any).mktToolsDesc ?? ''} onChange={(e) => onChange('mktToolsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo fluye la información de un lead desde que entra hasta que llega al CRM? ¿Se pierde información entre plataformas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. El lead rellena el formulario de Typeform, alguien lo copia manualmente al Excel de leads, y si avanza alguien lo pasa a HubSpot a mano..." rows={3} value={(data as any).mktDataFlowDesc ?? ''} onChange={(e) => onChange('mktDataFlowDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Dónde se almacena la base de datos de leads y contactos? ¿Quién tiene acceso y quién puede exportarla?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Está distribuida entre Mailchimp, el CRM y un Excel que lleva marketing. Solo dos personas tienen acceso completo..." rows={2} value={(data as any).mktDatabaseDesc ?? ''} onChange={(e) => onChange('mktDatabaseDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 6 */}
      <div style={block}>
        {blockTag('Métricas y control')}

        <FieldWrapper label="¿Qué métricas de marketing miden actualmente? ¿Con qué frecuencia y quién las revisa?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo miramos seguidores en Instagram y clics en los anuncios. No medimos coste por lead, tasa de conversión ni ROI por canal..." rows={3} value={(data as any).mktMetricsDesc ?? ''} onChange={(e) => onChange('mktMetricsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Saben cuántos leads generan al mes, cuánto cuesta cada lead y cuántos se convierten en clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Sabemos cuántos leads entran al mes aproximadamente pero no el coste por lead ni la tasa de conversión..." rows={2} value={(data as any).mktFunnelMetricsDesc ?? ''} onChange={(e) => onChange('mktFunnelMetricsDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Tienen dashboard de marketing en tiempo real o trabajan con reportes manuales?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay dashboard. Cuando el CEO quiere datos, alguien los recopila manualmente de cada plataforma. Tarda medio día y los datos tienen 2 semanas de retraso..." rows={2} value={(data as any).mktDashboardDesc ?? ''} onChange={(e) => onChange('mktDashboardDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Nivel de control y visibilidad sobre el rendimiento real de marketing">
          <ScaleInput value={data.prospectFollowUp} onChange={(v) => onChange('prospectFollowUp', v)} minLabel="Sin visibilidad" maxLabel="Control total" color="#ec4899" />
        </FieldWrapper>
      </div>

      {/* BLOQUE 7 */}
      <div style={block}>
        {blockTag('Fricción y cuellos de botella')}

        <FieldWrapper label="¿Dónde se pierden más leads en el embudo? ¿En qué punto exacto cae más la conversión?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos tráfico en la web pero muy pocos rellenan el formulario. De los que lo rellenan, la mitad no contestan cuando les llamamos..." rows={3} value={data.lostOpportunities} onChange={(e) => onChange('lostOpportunities', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tareas de marketing son manuales y repetitivas? ¿Dónde se va más tiempo sin generar valor real?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cada semana alguien descarga leads de cada plataforma y los consolida en Excel manualmente..." rows={2} value={(data as any).mktTimeWasteDesc ?? ''} onChange={(e) => onChange('mktTimeWasteDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte del embudo o proceso de marketing no está documentada y dependería de que alguien lo recuerde?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo el fundador sabe configurar las campañas de ads. La estrategia de contenido existe solo en la cabeza de la persona de marketing..." rows={2} value={(data as any).mktKnowledgeRiskDesc ?? ''} onChange={(e) => onChange('mktKnowledgeRiskDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 8 */}
      <div style={block}>
        {blockTag('Riesgo y control')}

        <FieldWrapper label="¿Dependen de un solo canal para generar la mayoría de leads? ¿Qué pasaría si ese canal dejara de funcionar mañana?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El 80% de nuestros leads vienen de Instagram Ads. Si nos bloquean la cuenta o sube el CPL, nos quedamos sin leads inmediatamente..." rows={2} value={(data as any).channelDependencyRiskDesc ?? ''} onChange={(e) => onChange('channelDependencyRiskDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Tienen base de datos propia de contactos o dependen completamente de plataformas externas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tenemos una lista de email con 800 contactos propia pero la mayoría de nuestra audiencia está en Instagram..." rows={2} value={(data as any).ownedAudienceDesc ?? ''} onChange={(e) => onChange('ownedAudienceDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cumplen con la normativa de protección de datos? ¿Hay política de privacidad, consentimiento y gestión de bajas?">
          <RadioGroup options={dataCompliance} value={(data as any).dataCompliance ?? ''} onChange={(v) => onChange('dataCompliance' as any, v)} />
        </FieldWrapper>

        <FieldWrapper label="¿Se puede auditar el rendimiento por campaña y comparar periodos? ¿Se registran los cambios realizados en campañas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Podemos ver datos en Meta Ads pero nadie documenta los cambios que se hacen. Si algo deja de funcionar no sabemos qué cambio lo causó..." rows={2} value={(data as any).mktAuditabilityDesc ?? ''} onChange={(e) => onChange('mktAuditabilityDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

      {/* BLOQUE 9 */}
      <div style={block}>
        {blockTag('Escalabilidad')}

        <FieldWrapper label="Si duplicaran el presupuesto de marketing mañana, ¿tienen sistema para absorber el doble de leads sin perderlos?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Honestamente no. Si duplicamos leads el equipo de ventas no daría abasto y perderíamos muchos por falta de respuesta rápida..." rows={3} value={(data as any).mktScaleDesc ?? ''} onChange={(e) => onChange('mktScaleDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿El contenido y el nurturing escalan con el crecimiento o dependen de tiempo humano que no se puede multiplicar?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Todo depende de personas. Si queremos publicar el doble necesitamos el doble de tiempo. No tenemos sistemas automatizados que escalen solos..." rows={2} value={(data as any).mktContentScaleDesc ?? ''} onChange={(e) => onChange('mktContentScaleDesc' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Tienen estructura real para crecer en los próximos meses o necesitaría una transformación importante?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Necesitaríamos una transformación importante. El sistema actual no está preparado para escalar sin contratar más personas..." rows={2} value={(data as any).mktScaleHiring ?? ''} onChange={(e) => onChange('mktScaleHiring' as any, e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué canal o acción de marketing sienten que no está funcionando pero siguen haciendo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Seguimos pagando influencers porque siempre lo hemos hecho aunque no vemos retorno claro. También el blog que nadie lee pero que mantenemos por SEO..." rows={2} value={(data as any).mktNotWorkingDesc ?? ''} onChange={(e) => onChange('mktNotWorkingDesc' as any, e.target.value)} />
        </FieldWrapper>
      </div>

    </div>
  );
}
