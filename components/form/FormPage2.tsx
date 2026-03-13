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

const adminHours = ['Menos de 5h/semana', '5-15h/semana', '15-30h/semana', 'Mas de 30h/semana'];
const inspectionReadiness = ['En 24 horas', 'En 1 semana', 'En varias semanas', 'Seria un caos'];

export default function FormPage2({ data, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* DOCUMENTACION */}
      <div style={block}>
        {blockTag('Mapa de informacion')}

        <FieldWrapper label="Como se almacenan los documentos oficiales de la empresa?" hint="Describa el estado real, no como deberia ser">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos carpetas en Drive pero cada departamento las organiza diferente..." rows={3} value={data.docStorageDesc ?? ''} onChange={(e) => onChange('docStorageDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que porcentaje de la documentacion esta digitalizada? Que sigue en papel?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Diria que un 70% esta digitalizado, los contratos firmados siguen en papel..." rows={2} value={data.digitalizationDesc ?? ''} onChange={(e) => onChange('digitalizationDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se nombran los documentos? Si necesita encontrar un registro, como lo buscarian?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No hay convencion de nombres, cada uno lo llama como quiere..." rows={2} value={data.docNamingDesc ?? ''} onChange={(e) => onChange('docNamingDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Quien se encarga de esa area?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Juana revisa y registra cada documento..." rows={2} value={data.docPermissions ?? ''} onChange={(e) => onChange('docPermissions', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* FLUJOS */}
      <div style={block}>
        {blockTag('Flujos administrativos reales')}

        <FieldWrapper label="Como funciona hoy su proceso de facturacion?" hint="Describa paso a paso que ocurre desde que nace la factura hasta que queda cobrada y registrada">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. La factura llega al email general, alguien la reenvía a contabilidad, contabilidad la imprime, el CEO la firma y se paga manualmente..." rows={3} value={data.billingFlow ?? ''} onChange={(e) => onChange('billingFlow', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Sus facturas son digitales, fisicas o usan ambos formatos?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Se guarda digital, aunque algunos contratos o comprobantes siguen en papel." rows={2} value={data.invoiceApproval ?? ''} onChange={(e) => onChange('invoiceApproval', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Quien lo maneja, con que herramienta, como se envia y quien hace seguimiento de cobro">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. El comercial avisa a admin cuando cierra, admin genera la factura en Holded y la envia por email..." rows={3} value={data.clientBillingDesc ?? ''} onChange={(e) => onChange('clientBillingDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se gestionan los impagos de clientes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Enviamos un recordatorio manual cuando vemos que ya lleva mas de 30 dias sin pagar. No hay proceso automatico..." rows={2} value={data.unpaidHandling ?? ''} onChange={(e) => onChange('unpaidHandling', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se firma documentalmente con clientes y proveedores?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Usamos DocuSign para contratos grandes, pero con proveedores pequenos a veces es solo un email de confirmacion..." rows={2} value={data.contractSigning ?? ''} onChange={(e) => onChange('contractSigning', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="El cobro se realiza antes, durante o despues del servicio?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Cobramos un 50% al inicio y el resto al finalizar el proyecto. Con clientes recurrentes facturamos el dia 1 de cada mes..." rows={2} value={data.approvalMethod ?? ''} onChange={(e) => onChange('approvalMethod', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* CARGA */}
      <div style={block}>
        {blockTag('Carga operativa y friccion')}

        <FieldWrapper label="Cuantas horas semanales se dedican a tareas administrativas manuales en total?">
          <RadioGroup options={adminHours} value={data.adminHours ?? ''} onChange={(v) => onChange('adminHours', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="Que tareas administrativas se repiten todos los dias o todas las semanas? Cuales consumen mas tiempo sin aportar valor real?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Todos los lunes pasamos datos de Holded a Excel para el informe del CEO, tarda 2 horas y podria ser automatico..." rows={3} value={data.repetitiveTasks ?? ''} onChange={(e) => onChange('repetitiveTasks', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Donde se acumulan mas documentos sin procesar o donde hay mas retrasos frecuentes?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Las facturas de proveedor se acumulan en el email sin procesar, a veces hay 3 semanas de retraso..." rows={2} value={data.accumulationPoints ?? ''} onChange={(e) => onChange('accumulationPoints', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que tarea administrativa eliminaria si pudiera? Por que sigue existiendo?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. El informe mensual manual que tarda medio dia. Sigue existiendo porque nunca hemos tenido tiempo de automatizarlo..." rows={2} value={data.adminFriction ?? ''} onChange={(e) => onChange('adminFriction', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* STACK */}
      <div style={block}>
        {blockTag('Stack tecnologico administrativo')}

        <FieldWrapper label="Que herramientas usan para gestionar la administracion? ERP, facturacion, documentos, firma, reportes..." hint="Liste todas y describa si estan integradas o funcionan por separado">
          <textarea style={{ ...inputStyle, minHeight: 80 }} placeholder="Ej. Usamos Holded para facturacion, Excel para seguimiento de pagos, Drive para documentos y WhatsApp para aprobaciones..." rows={3} value={data.adminToolsDesc ?? ''} onChange={(e) => onChange('adminToolsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como fluye la informacion entre herramientas? Hay personas que actuan de puente manual entre sistemas?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. La admin copia datos de Holded a Excel cada semana para generar el informe del CEO. Nadie mas sabe hacerlo..." rows={3} value={data.dataGlueDesc ?? ''} onChange={(e) => onChange('dataGlueDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Cuantas herramientas se solapan o duplican informacion? Donde se introduce el mismo dato mas de una vez?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los datos de clientes estan en el CRM, en Holded y en una hoja de Excel. Hay que actualizar los tres por separado..." rows={2} value={data.toolOverlapDesc ?? ''} onChange={(e) => onChange('toolOverlapDesc', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* METRICAS */}
      <div style={block}>
        {blockTag('Metricas y control')}

        <FieldWrapper label="Que KPIs o metricas administrativas miden actualmente? Con que frecuencia y quien los revisa?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Solo miramos la facturacion mensual. No medimos tiempo de procesamiento de facturas ni dias de cobro..." rows={3} value={data.adminMetricsDesc ?? ''} onChange={(e) => onChange('adminMetricsDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Existe algun dashboard o panel de control financiero?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No tenemos dashboard. Cuando el CEO quiere datos, alguien los recopila manualmente de cada plataforma..." rows={2} value={data.dashboardStatus ?? ''} onChange={(e) => onChange('dashboardStatus', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como se reportan los resultados financieros a direccion?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Reportes mensuales de forma manual, viendo los registros y reuniendonos con direccion." rows={3} value={data.reportingMethod ?? ''} onChange={(e) => onChange('reportingMethod', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* RIESGO */}
      <div style={block}>
        {blockTag('Control interno y riesgo')}

        <FieldWrapper label="Que datos sensibles maneja la empresa y donde se almacenan? Quien puede exportarlos?" hint="Datos bancarios, nominas, contratos, datos de clientes...">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. Tenemos datos bancarios de clientes en una hoja de Excel compartida, nominas en el email del CEO y contratos en Drive accesible para todo el equipo..." rows={3} value={data.sensitiveDataDesc ?? ''} onChange={(e) => onChange('sensitiveDataDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Se puede auditar o reconstruir cada operacion realizada? Queda registro de quien hizo que y cuando?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Parcialmente. En Holded queda registro de facturas pero las aprobaciones por WhatsApp no dejan rastro formal..." rows={2} value={data.auditTrail ?? ''} onChange={(e) => onChange('auditTrail', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Si recibieran una inspeccion fiscal hoy, en cuanto tiempo tendrian lista toda la documentacion?">
          <RadioGroup options={inspectionReadiness} value={data.inspectionReadiness ?? ''} onChange={(v) => onChange('inspectionReadiness', v)} columns={2} />
        </FieldWrapper>

        <FieldWrapper label="Que pasaria si fallara su herramienta principal de gestion o si el contador externo no respondiera durante una semana?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Nos quedariamos bloqueados, no sabemos donde esta todo ni como acceder sin esa persona. No tenemos plan B documentado..." rows={2} value={data.contingencyPlanDesc ?? ''} onChange={(e) => onChange('contingencyPlanDesc', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* ESCALABILIDAD */}
      <div style={block}>
        {blockTag('Escalabilidad')}

        <FieldWrapper label="Si duplicaran el numero de clientes manana, que parte de la administracion colapsaria primero y por que?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. La facturacion colapsa porque es manual, no podriamos gestionar el doble de facturas con el mismo equipo..." rows={3} value={data.adminScaleDesc ?? ''} onChange={(e) => onChange('adminScaleDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="El sistema administrativo actual podria soportar ese crecimiento sin contratar mas personas?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. No, necesitariamos al menos una persona mas para gestionar el volumen administrativo..." rows={2} value={data.adminScaleHiring ?? ''} onChange={(e) => onChange('adminScaleHiring', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que parte del proceso administrativo no esta documentada y dependeria de que una persona especifica lo recuerde?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Solo la admin sabe como hacer la conciliacion bancaria mensual, si se fuera no sabriamos reproducirlo..." rows={2} value={data.adminKnowledgeRisk ?? ''} onChange={(e) => onChange('adminKnowledgeRisk', e.target.value)} />
        </FieldWrapper>
      </div>

      {/* EXPECTATIVAS */}
      <div style={block}>
        {blockTag('Expectativas estrategicas')}

        <FieldWrapper label="Que problemas administrativos les quita tiempo actualmente? Que parte sienten que esta fuera de control?">
          <textarea style={{ ...inputStyle, minHeight: 72 }} placeholder="Ej. No sabemos exactamente cuanto debemos a proveedores en tiempo real, dependemos de una sola persona para casi todo..." rows={3} value={data.adminPainDesc ?? ''} onChange={(e) => onChange('adminPainDesc', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que error administrativo seria catastrofico para la empresa?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Un pago duplicado importante, perder datos de clientes, no tener documentacion ante una inspeccion fiscal..." rows={2} value={data.adminCatastrophicRisk ?? ''} onChange={(e) => onChange('adminCatastrophicRisk', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Que les gustaria eliminar o automatizar este ano si pudieran?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Los informes manuales de fin de mes, el proceso de aprobacion de facturas por WhatsApp, la conciliacion bancaria manual..." rows={2} value={data.adminAutomationWish ?? ''} onChange={(e) => onChange('adminAutomationWish', e.target.value)} />
        </FieldWrapper>

        <FieldWrapper label="Como definiran el exito de esta auditoria administrativa? Que tendria que ser diferente?">
          <textarea style={{ ...inputStyle, minHeight: 60 }} placeholder="Ej. Tener visibilidad financiera en tiempo real, procesos documentados que cualquiera pueda seguir..." rows={2} value={data.adminSuccessDesc ?? ''} onChange={(e) => onChange('adminSuccessDesc', e.target.value)} />
        </FieldWrapper>
      </div>
    </div>
  );
}
