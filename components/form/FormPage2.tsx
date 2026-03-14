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

const blockTag = (label: string, color = '#10b981') => (
  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color, fontFamily: "'DM Sans', sans-serif", marginBottom: '-0.25rem' }}>
    {label}
  </div>
);

const adminHours = ['Menos de 5h/semana', '5-15h/semana', '15-30h/semana', 'Más de 30h/semana'];
const inspectionReadiness = ['En 24 horas', 'En 1 semana', 'En varias semanas', 'Sería un caos'];

export default function FormPage2({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* DOCUMENTACION */}
      <div style={block}>
        {blockTag('Mapa de información')}

        <FieldWrapper label="¿Cómo se almacenan los documentos oficiales de la empresa?" hint="Describa el estado real, no cómo debería ser">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos carpetas en Drive pero cada departamento las organiza diferente..." rows={3} value={data.docStorageDesc ?? ''} onChange={(e) => onChange('docStorageDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué porcentaje de la documentación está digitalizada? ¿Qué sigue en papel?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Diría que un 70% está digitalizado, los contratos firmados siguen en papel..." rows={2} value={data.digitalizationDesc ?? ''} onChange={(e) => onChange('digitalizationDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se nombran los documentos? Si necesita encontrar un registro, ¿cómo lo buscarían?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay convención de nombres, cada uno lo llama como quiere..." rows={2} value={data.docNamingDesc ?? ''} onChange={(e) => onChange('docNamingDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Quién se encarga de esa área?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Juana revisa y registra cada documento..." rows={2} value={data.docPermissions ?? ''} onChange={(e) => onChange('docPermissions', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* FLUJOS */}
      <div style={block}>
        {blockTag('Flujos administrativos reales')}

        <FieldWrapper label="¿Cómo funciona hoy su proceso de facturación?" hint="Describa paso a paso qué ocurre desde que nace la factura hasta que queda cobrada y registrada">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. La factura llega al email general, alguien la reenvía a contabilidad, contabilidad la imprime, el CEO la firma y se paga manualmente..." rows={3} value={data.billingFlow ?? ''} onChange={(e) => onChange('billingFlow', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Sus facturas son digitales, físicas o usan ambos formatos?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Se guarda digital, aunque algunos contratos o comprobantes siguen en papel." rows={2} value={data.invoiceApproval ?? ''} onChange={(e) => onChange('invoiceApproval', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Quién lo maneja, con qué herramienta, cómo se envía y quién hace seguimiento de cobro?">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. El comercial avisa a admin cuando cierra, admin genera la factura en Holded y la envía por email..." rows={3} value={data.clientBillingDesc ?? ''} onChange={(e) => onChange('clientBillingDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se gestionan los impagos de clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Enviamos un recordatorio manual cuando vemos que ya lleva más de 30 días sin pagar. No hay proceso automático..." rows={2} value={data.unpaidHandling ?? ''} onChange={(e) => onChange('unpaidHandling', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se firma documentalmente con clientes y proveedores?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Usamos DocuSign para contratos grandes, pero con proveedores pequeños a veces es solo un email de confirmación..." rows={2} value={data.contractSigning ?? ''} onChange={(e) => onChange('contractSigning', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿El cobro se realiza antes, durante o después del servicio?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cobramos un 50% al inicio y el resto al finalizar el proyecto. Con clientes recurrentes facturamos el día 1 de cada mes..." rows={2} value={data.approvalMethod ?? ''} onChange={(e) => onChange('approvalMethod', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* CARGA */}
      <div style={block}>
        {blockTag('Carga operativa y fricción')}

        <FieldWrapper label="¿Cuántas horas semanales se dedican a tareas administrativas manuales en total?">
          <RadioGroup options={adminHours} value={data.adminHours ?? ''} onChange={(v) => onChange('adminHours', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tareas administrativas se repiten todos los días o todas las semanas? ¿Cuáles consumen más tiempo sin aportar valor real?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Todos los lunes pasamos datos de Holded a Excel para el informe del CEO, tarda 2 horas y podría ser automático..." rows={3} value={data.repetitiveTasks ?? ''} onChange={(e) => onChange('repetitiveTasks', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Dónde se acumulan más documentos sin procesar o dónde hay más retrasos frecuentes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las facturas de proveedor se acumulan en el email sin procesar, a veces hay 3 semanas de retraso..." rows={2} value={data.accumulationPoints ?? ''} onChange={(e) => onChange('accumulationPoints', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué tarea administrativa eliminaría si pudiera? ¿Por qué sigue existiendo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El informe mensual manual que tarda medio día. Sigue existiendo porque nunca hemos tenido tiempo de automatizarlo..." rows={2} value={data.adminFriction ?? ''} onChange={(e) => onChange('adminFriction', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* STACK */}
      <div style={block}>
        {blockTag('Stack tecnológico administrativo')}

        <FieldWrapper label="¿Qué herramientas usan para gestionar la administración? ERP, facturación, documentos, firma, reportes..." hint="Liste todas y describa si están integradas o funcionan por separado">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. Usamos Holded para facturación, Excel para seguimiento de pagos, Drive para documentos y WhatsApp para aprobaciones..." rows={3} value={data.adminToolsDesc ?? ''} onChange={(e) => onChange('adminToolsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo fluye la información entre herramientas? ¿Hay personas que actúan de puente manual entre sistemas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. La admin copia datos de Holded a Excel cada semana para generar el informe del CEO. Nadie más sabe hacerlo..." rows={3} value={data.dataGlueDesc ?? ''} onChange={(e) => onChange('dataGlueDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cuántas herramientas se solapan o duplican información? ¿Dónde se introduce el mismo dato más de una vez?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los datos de clientes están en el CRM, en Holded y en una hoja de Excel. Hay que actualizar los tres por separado..." rows={2} value={data.toolOverlapDesc ?? ''} onChange={(e) => onChange('toolOverlapDesc', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* METRICAS */}
      <div style={block}>
        {blockTag('Métricas y control')}

        <FieldWrapper label="¿Qué KPIs o métricas administrativas miden actualmente? ¿Con qué frecuencia y quién los revisa?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo miramos la facturación mensual. No medimos tiempo de procesamiento de facturas ni días de cobro..." rows={3} value={data.adminMetricsDesc ?? ''} onChange={(e) => onChange('adminMetricsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Existe algún dashboard o panel de control financiero?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No tenemos dashboard. Cuando el CEO quiere datos, alguien los recopila manualmente de cada plataforma..." rows={2} value={data.dashboardStatus ?? ''} onChange={(e) => onChange('dashboardStatus', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo se reportan los resultados financieros a dirección?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Reportes mensuales de forma manual, viendo los registros y reuniéndonos con dirección." rows={3} value={data.reportingMethod ?? ''} onChange={(e) => onChange('reportingMethod', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* RIESGO */}
      <div style={block}>
        {blockTag('Control interno y riesgo')}

        <FieldWrapper label="¿Qué datos sensibles maneja la empresa y dónde se almacenan? ¿Quién puede exportarlos?" hint="Datos bancarios, nóminas, contratos, datos de clientes...">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos datos bancarios de clientes en una hoja de Excel compartida, nóminas en el email del CEO y contratos en Drive accesible para todo el equipo..." rows={3} value={data.sensitiveDataDesc ?? ''} onChange={(e) => onChange('sensitiveDataDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Se puede auditar o reconstruir cada operación realizada? ¿Queda registro de quién hizo qué y cuándo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Parcialmente. En Holded queda registro de facturas pero las aprobaciones por WhatsApp no dejan rastro formal..." rows={2} value={data.auditTrail ?? ''} onChange={(e) => onChange('auditTrail', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Si recibieran una inspección fiscal hoy, ¿en cuánto tiempo tendrían lista toda la documentación?">
          <RadioGroup options={inspectionReadiness} value={data.inspectionReadiness ?? ''} onChange={(v) => onChange('inspectionReadiness', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué pasaría si fallara su herramienta principal de gestión o si el contador externo no respondiera durante una semana?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Nos quedaríamos bloqueados, no sabemos dónde está todo ni cómo acceder sin esa persona. No tenemos plan B documentado..." rows={2} value={data.contingencyPlanDesc ?? ''} onChange={(e) => onChange('contingencyPlanDesc', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* ESCALABILIDAD */}
      <div style={block}>
        {blockTag('Escalabilidad')}

        <FieldWrapper label="Si duplicaran el número de clientes mañana, ¿qué parte de la administración colapsaría primero y por qué?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. La facturación colapsa porque es manual, no podríamos gestionar el doble de facturas con el mismo equipo..." rows={3} value={data.adminScaleDesc ?? ''} onChange={(e) => onChange('adminScaleDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿El sistema administrativo actual podría soportar ese crecimiento sin contratar más personas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, necesitaríamos al menos una persona más para gestionar el volumen administrativo..." rows={2} value={data.adminScaleHiring ?? ''} onChange={(e) => onChange('adminScaleHiring', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué parte del proceso administrativo no está documentada y dependería de que una persona específica lo recuerde?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo la admin sabe cómo hacer la conciliación bancaria mensual, si se fuera no sabríamos reproducirlo..." rows={2} value={data.adminKnowledgeRisk ?? ''} onChange={(e) => onChange('adminKnowledgeRisk', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* EXPECTATIVAS */}
      <div style={block}>
        {blockTag('Expectativas estratégicas')}

        <FieldWrapper label="¿Qué problemas administrativos les quita tiempo actualmente? ¿Qué parte sienten que está fuera de control?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. No sabemos exactamente cuánto debemos a proveedores en tiempo real, dependemos de una sola persona para casi todo..." rows={3} value={data.adminPainDesc ?? ''} onChange={(e) => onChange('adminPainDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué error administrativo sería catastrófico para la empresa?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Un pago duplicado importante, perder datos de clientes, no tener documentación ante una inspección fiscal..." rows={2} value={data.adminCatastrophicRisk ?? ''} onChange={(e) => onChange('adminCatastrophicRisk', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Qué les gustaría eliminar o automatizar este año si pudieran?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los informes manuales de fin de mes, el proceso de aprobación de facturas por WhatsApp, la conciliación bancaria manual..." rows={2} value={data.adminAutomationWish ?? ''} onChange={(e) => onChange('adminAutomationWish', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="¿Cómo definirán el éxito de esta auditoría administrativa? ¿Qué tendría que ser diferente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tener visibilidad financiera en tiempo real, procesos documentados que cualquiera pueda seguir..." rows={2} value={data.adminSuccessDesc ?? ''} onChange={(e) => onChange('adminSuccessDesc', e.target.value)} />
        </FieldWrapper>
      </div>
    </div>
  );
}
