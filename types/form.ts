export interface FormData {
  // Página 1
  companyName: string;
  contactName: string;
  sector: string;
  businessStage: string;
  teamSize: string;
  revenueRange: string;
  businessDescription: string;
  automatedProcesses: string;
  founderDependency: string;
  mainChallenge: string;
  priorityImprovement: string;

  // Página 2 - Administración
  docStorageDesc: string;
  digitalizationDesc: string;
  docNamingDesc: string;
  docPermissions: string;
  billingFlow: string;
  invoiceApproval: string;
  clientBillingDesc: string;
  unpaidHandling: string;
  contractSigning: string;
  approvalMethod: string;
  adminHours: string;
  repetitiveTasks: string;
  accumulationPoints: string;
  adminFriction: string;
  adminToolsDesc: string;
  dataGlueDesc: string;
  toolOverlapDesc: string;
  adminMetricsDesc: string;
  dashboardStatus: string;
  reportingMethod: string;
  sensitiveDataDesc: string;
  auditTrail: string;
  inspectionReadiness: string;
  contingencyPlanDesc: string;
  adminScaleDesc: string;
  adminScaleHiring: string;
  adminKnowledgeRisk: string;
  adminPainDesc: string;
  adminCatastrophicRisk: string;
  adminAutomationWish: string;
  adminSuccessDesc: string;

  // Página 3 - Ventas
  salesOwnerDesc: string;
  salesRolesDesc: string;
  salesFounderDep: string;
  absenceImpact30: string;
  leadFlowDesc: string;
  responseTime: string;
  leadAssignment: string;
  scriptExists: string;
  qualificationDesc: string;
  proposalDesc: string;
  proposalTime: string;
  proposalTracking: string;
  discountAuth: string;
  closingHandoffDesc: string;
  leadCoolDesc: string;
  salesTimeWaste: string;
  salesKnowledgeRisk: string;
  pipelineDesc: string;
  pipelineHealth: string;
  followUpSystem: string;
  closeRate: string;
  salesToolsDesc: string;
  crmAdoption: string;
  salesDataFlowDesc: string;
  salesMetricsDesc: string;
  revenueVisibility: string;
  dealAuditability: string;
  crmCredentials: string;
  crmDataRisk: string;
  salesScaleDesc: string;
  salesScaleHiring: string;
  salesPainDesc: string;
  salesCatastrophicRisk: string;
  salesGoal12m: string;
  salesSuccessDesc: string;

  // Página 4 - Marketing
  valuePropositionDesc: string;
  differentiationDesc: string;
  mktSalesAlignmentDesc: string;
  ticketCycleDesc: string;
  channelMapDesc: string;
  editorialCalendarDesc: string;
  channelOwnershipDesc: string;
  channelRoiDesc: string;
  leadToSalesProcess: string;
  leadCaptureDesc: string;
  leadHandlingDesc: string;
  leadScoring: string;
  nurtingStatus: string;
  mktToSalesHandoffDesc: string;
  mktSalesFeedbackDesc: string;
  contentStrategyDesc: string;
  contentPerformanceDesc: string;
  contentRepurposeDesc: string;
  contentDependencyDesc: string;
  contentType: string;
  adsMonthlyBudget: string;
  contentFrequency: string;
  mktToolsDesc: string;
  mktDataFlowDesc: string;
  mktDatabaseDesc: string;
  mktMetricsDesc: string;
  mktFunnelMetricsDesc: string;
  mktDashboardDesc: string;
  prospectFollowUp: number;
  lostOpportunities: string;
  mktTimeWasteDesc: string;
  mktKnowledgeRiskDesc: string;
  channelDependencyRiskDesc: string;
  ownedAudienceDesc: string;
  dataCompliance: string;
  mktAuditabilityDesc: string;
  mktScaleDesc: string;
  mktContentScaleDesc: string;
  mktScaleHiring: string;
  mktNotWorkingDesc: string;

  // Página 5 - Operaciones
  deliverableDesc: string;
  serviceType: string;
  activeClientsDesc: string;
  scopeConsistencyDesc: string;
  serviceComplexityDesc: string;
  onboardingStatus: string;
  onboardingFlowDesc: string;
  onboardingBlockerDesc: string;
  projectStartDesc: string;
  productionFlowDesc: string;
  tacitKnowledgeDesc: string;
  deliveryProcessDesc: string;
  clientReviewRounds: string;
  scopeChangeHandling: string;
  qualityControl: string;
  qualityErrorsDesc: string;
  reworkCausesDesc: string;
  bottlenecksDesc: string;
  repetitiveOpsDesc: string;
  opsStressDesc: string;
  opsToolsDesc: string;
  opsDataFlowDesc: string;
  toolOverlapOpsDesc: string;
  satisfactionMeasure: string;
  clientCommsProactiveDesc: string;
  complaintHandlingDesc: string;
  repeatedComplaintsDesc: string;
  serviceDelivery: string;
  opsScaleHiring: string;
  delegationReadinessDesc: string;
  opsScaleBlockerDesc: string;
  opsSuccessDesc: string;

  // Página 6 - Visión estratégica
  simplifyTomorrow: string;
  biggestFrustration: string;
  worksButFragile: string;
  stagnationFeeling: string;
  stagnationContext: string;
  leastControl: string;
  leastControlContext: string;
  auditSuccessDef: string;
  changeReadiness: string;
  changeReadinessContext: string;
  contactEmail: string;
  preferredCallTime: string;
}

export const initialFormData: FormData = Object.fromEntries(
  [
    'companyName','contactName','sector','businessStage','teamSize','revenueRange',
    'businessDescription','automatedProcesses','founderDependency','mainChallenge','priorityImprovement',
    'docStorageDesc','digitalizationDesc','docNamingDesc','docPermissions','billingFlow',
    'invoiceApproval','clientBillingDesc','unpaidHandling','contractSigning','approvalMethod',
    'adminHours','repetitiveTasks','accumulationPoints','adminFriction','adminToolsDesc',
    'dataGlueDesc','toolOverlapDesc','adminMetricsDesc','dashboardStatus','reportingMethod',
    'sensitiveDataDesc','auditTrail','inspectionReadiness','contingencyPlanDesc','adminScaleDesc',
    'adminScaleHiring','adminKnowledgeRisk','adminPainDesc','adminCatastrophicRisk',
    'adminAutomationWish','adminSuccessDesc','salesOwnerDesc','salesRolesDesc','salesFounderDep',
    'absenceImpact30','leadFlowDesc','responseTime','leadAssignment','scriptExists',
    'qualificationDesc','proposalDesc','proposalTime','proposalTracking','discountAuth',
    'closingHandoffDesc','leadCoolDesc','salesTimeWaste','salesKnowledgeRisk','pipelineDesc',
    'pipelineHealth','followUpSystem','closeRate','salesToolsDesc','crmAdoption',
    'salesDataFlowDesc','salesMetricsDesc','revenueVisibility','dealAuditability','crmCredentials',
    'crmDataRisk','salesScaleDesc','salesScaleHiring','salesPainDesc','salesCatastrophicRisk',
    'salesGoal12m','salesSuccessDesc','valuePropositionDesc','differentiationDesc',
    'mktSalesAlignmentDesc','ticketCycleDesc','channelMapDesc','editorialCalendarDesc',
    'channelOwnershipDesc','channelRoiDesc','leadToSalesProcess','leadCaptureDesc',
    'leadHandlingDesc','leadScoring','nurtingStatus','mktToSalesHandoffDesc','mktSalesFeedbackDesc',
    'contentStrategyDesc','contentPerformanceDesc','contentRepurposeDesc','contentDependencyDesc',
    'contentType','adsMonthlyBudget','contentFrequency',
    'mktToolsDesc','mktDataFlowDesc','mktDatabaseDesc','mktMetricsDesc','mktFunnelMetricsDesc',
    'mktDashboardDesc','lostOpportunities','mktTimeWasteDesc','mktKnowledgeRiskDesc',
    'channelDependencyRiskDesc','ownedAudienceDesc','dataCompliance','mktAuditabilityDesc',
    'mktScaleDesc','mktContentScaleDesc','mktScaleHiring','mktNotWorkingDesc','deliverableDesc',
    'serviceType','activeClientsDesc','scopeConsistencyDesc','serviceComplexityDesc',
    'onboardingStatus','onboardingFlowDesc','onboardingBlockerDesc','projectStartDesc',
    'productionFlowDesc','tacitKnowledgeDesc','deliveryProcessDesc','clientReviewRounds',
    'scopeChangeHandling','qualityControl','qualityErrorsDesc','reworkCausesDesc','bottlenecksDesc',
    'repetitiveOpsDesc','opsStressDesc','opsToolsDesc','opsDataFlowDesc','toolOverlapOpsDesc',
    'satisfactionMeasure','clientCommsProactiveDesc','complaintHandlingDesc','repeatedComplaintsDesc',
    'serviceDelivery','opsScaleHiring','delegationReadinessDesc','opsScaleBlockerDesc','opsSuccessDesc',
    'simplifyTomorrow','biggestFrustration','worksButFragile','stagnationFeeling','stagnationContext',
    'leastControl','leastControlContext','auditSuccessDef','changeReadiness','changeReadinessContext',
    'contactEmail','preferredCallTime',
  ].map((k) => [k, ''])
) as unknown as FormData;

// prospectFollowUp es number, lo inicializamos aparte
(initialFormData as any).prospectFollowUp = 0;
