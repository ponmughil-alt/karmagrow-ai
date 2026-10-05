// Realistic Government & Statistical System Mock Data for KarmaGrow AI

export const MOCK_USER = {
  name: "Ponmughil R",
  id: "STAT-2026-1042",
  email: "employee@karmagrow.demo",
  department: "Statistical Operations",
  designation: "Senior Statistical Analyst",
  ministry: "Ministry of Statistics & Programme Implementation (MoSPI)",
  experienceYears: 4,
  profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  overallCompetency: 72,
  completedCoursesCount: 8,
  quizAverageScore: 84,
  learningStreakDays: 12,
  role: "Employee"
};

export const MOCK_COMPETENCIES = [
  {
    id: "comp-1",
    name: "Sampling Techniques",
    category: "Survey Methodology",
    currentLevel: 58,
    requiredLevel: 90,
    gap: 32,
    priority: "HIGH",
    trend: "+2% this month",
    lastAssessed: "2026-09-28",
    description: "Ability to design probability sampling methods, calculate sampling errors, and apply stratified cluster sampling for national household surveys.",
    recommendedAction: "Complete 'Fundamentals of Survey Sampling' on iGOT and take adaptive AI assessment.",
  },
  {
    id: "comp-2",
    name: "Data Visualization",
    category: "Data Analysis",
    currentLevel: 72,
    requiredLevel: 85,
    gap: 13,
    priority: "MEDIUM",
    trend: "+5% this month",
    lastAssessed: "2026-09-15",
    description: "Creating insightful statistical dashboards, geospatial distribution maps, and executive charts for economic releases.",
    recommendedAction: "Review MoSPI visual standards module and practice with sample datasets.",
  },
  {
    id: "comp-3",
    name: "Statistical Analysis",
    category: "Core Analytics",
    currentLevel: 81,
    requiredLevel: 90,
    gap: 9,
    priority: "LOW",
    trend: "+3% this month",
    lastAssessed: "2026-09-10",
    description: "Hypothesis testing, regression modeling, time-series seasonal adjustment for Consumer Price Index (CPI) and Index of Industrial Production (IIP).",
    recommendedAction: "Advanced time series forecasting seminar on iGOT.",
  },
  {
    id: "comp-4",
    name: "Data Quality & Governance",
    category: "Quality Control",
    currentLevel: 88,
    requiredLevel: 90,
    gap: 2,
    priority: "LOW",
    trend: "+1% this month",
    lastAssessed: "2026-08-30",
    description: "National Quality Assurance Framework (NQAF) compliance, data validation pipelines, outlier detection, and confidentiality protocols.",
    recommendedAction: "Maintain annual certification.",
  },
  {
    id: "comp-5",
    name: "Survey Design & Questionnaire",
    category: "Survey Methodology",
    currentLevel: 70,
    requiredLevel: 85,
    gap: 15,
    priority: "MEDIUM",
    trend: "+4% this month",
    lastAssessed: "2026-09-02",
    description: "Constructing unbiased survey questions, pre-testing schedules, computer-assisted personal interviewing (CAPI) protocol design.",
    recommendedAction: "Complete Module 3: Field Interviewing Schedules.",
  },
  {
    id: "comp-6",
    name: "Economic Indicators Interpretation",
    category: "Domain Expertise",
    currentLevel: 79,
    requiredLevel: 85,
    gap: 6,
    priority: "LOW",
    trend: "+0% this month",
    lastAssessed: "2026-08-25",
    description: "Understanding GDP quarterly estimation methodology, input-output tables, and national account aggregation.",
    recommendedAction: "Read updated 2026 SNA guidelines handbook.",
  }
];

export const MOCK_LEARNING_PATH = [
  {
    phase: 1,
    title: "Phase 1: Foundation",
    topic: "Sampling Fundamentals & Basic Probability",
    duration: "25 min",
    status: "Completed",
    difficulty: "Beginner",
    description: "Understand probability distribution, population parameters, sample statistics, and basic random sampling concepts.",
    actionLabel: "Review Module"
  },
  {
    phase: 2,
    title: "Phase 2: Core Concepts",
    topic: "Probability & Stratified Sampling Methods",
    duration: "45 min",
    status: "In Progress",
    difficulty: "Intermediate",
    description: "Deep dive into stratified random sampling, cluster sampling, design effects, and optimal allocation across sample frames.",
    actionLabel: "Continue Learning"
  },
  {
    phase: 3,
    title: "Phase 3: Application",
    topic: "Sampling in Official National Surveys (NSSO / MoSPI)",
    duration: "60 min",
    status: "Locked",
    difficulty: "Advanced",
    description: "Case study analysis of Periodic Labour Force Survey (PLFS) & Household Consumption Expenditure Survey (HCES) sampling designs.",
    actionLabel: "Start Learning"
  },
  {
    phase: 4,
    title: "Phase 4: Assessment",
    topic: "AI Adaptive Skill Assessment",
    duration: "15 min",
    status: "Locked",
    difficulty: "Adaptive",
    description: "10-question AI generated evaluation to test practical application of sampling techniques in field survey scenarios.",
    actionLabel: "Take Assessment"
  },
  {
    phase: 5,
    title: "Phase 5: Validation",
    topic: "Competency Reassessment & Badge Award",
    duration: "10 min",
    status: "Locked",
    difficulty: "Verification",
    description: "Verification of competency level upgrade from 58% to 67%+ and integration with official iGOT Karmayogi transcript.",
    actionLabel: "Unlock Badge"
  }
];

export const MOCK_IGOT_COURSES = [
  {
    id: "igot-101",
    title: "Fundamentals of Survey Sampling in Official Statistics",
    provider: "iGOT Karmayogi / National Statistical Systems Training Academy (NSSTA)",
    level: "Intermediate",
    duration: "3h 20m",
    matchScore: 96,
    priority: "HIGH",
    category: "Survey Methodology",
    rating: 4.8,
    enrolledCount: 1420,
    whyRecommended: "Directly targets your top competency gap (Sampling Techniques - 32% gap). Covers multi-stage stratified sampling used in NSS surveys.",
    modules: ["Introduction to Sample Frames", "Stratification & Cluster Allocation", "Estimating Variance & Standard Error", "Case Study: PLFS Survey Design"]
  },
  {
    id: "igot-102",
    title: "Data Quality Management & NQAF Compliance",
    provider: "iGOT Karmayogi / Central Statistics Office",
    level: "Beginner",
    duration: "2h 45m",
    matchScore: 91,
    priority: "HIGH",
    category: "Quality Control",
    rating: 4.7,
    enrolledCount: 980,
    whyRecommended: "Essential for maintaining data reliability standards across national field survey operations.",
    modules: ["NQAF Principles", "Data Cleaning Techniques", "Handling Non-Sampling Errors"]
  },
  {
    id: "igot-103",
    title: "Official Statistics & Data Governance in Digital India",
    provider: "iGOT Karmayogi / NITI Aayog & MoSPI",
    level: "Intermediate",
    duration: "4h 10m",
    matchScore: 88,
    priority: "MEDIUM",
    category: "Governance",
    rating: 4.9,
    enrolledCount: 2310,
    whyRecommended: "Covers open data policy, metadata standards, and data security guidelines for public statistical portals.",
    modules: ["National Data Sharing Policy", "Metadata Standards", "API Integrations for Data Dissemination"]
  },
  {
    id: "igot-104",
    title: "Advanced Statistical Analysis with R & Python",
    provider: "iGOT Karmayogi / Statistical Institute",
    level: "Advanced",
    duration: "5h 30m",
    matchScore: 84,
    priority: "MEDIUM",
    category: "Core Analytics",
    rating: 4.6,
    enrolledCount: 1750,
    whyRecommended: "Reinforces statistical modeling techniques and automated reporting pipelines.",
    modules: ["Exploratory Data Analysis", "Regression & Time Series", "Automating Reports with R Markdown"]
  }
];

export const MOCK_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which sampling method divides the population into non-overlapping subgroups (strata) and then selects a random sample from each subgroup?",
    options: [
      "A. Cluster Sampling",
      "B. Stratified Random Sampling",
      "C. Systematic Sampling",
      "D. Convenience Sampling"
    ],
    correctAnswer: 1, // B
    explanation: "Stratified Random Sampling divides the heterogeneous population into homogeneous subgroups (strata) and draws independent simple random samples from each stratum to reduce variance."
  },
  {
    id: 2,
    question: "In national household surveys like PLFS, why is Stratified Multi-Stage Sampling commonly preferred over Simple Random Sampling?",
    options: [
      "A. It requires zero administrative planning",
      "B. It significantly reduces field enumeration travel cost while maintaining statistical precision",
      "C. It eliminates sampling errors completely",
      "D. It replaces primary sampling units with census data"
    ],
    correctAnswer: 1, // B
    explanation: "Multi-stage cluster/stratified sampling clusters sample villages/blocks to minimize enumerator travel costs while ensuring proportional representation across states."
  },
  {
    id: 3,
    question: "What parameter measures the loss of precision when using multi-stage cluster sampling instead of simple random sampling of the same size?",
    options: [
      "A. Standard Deviation",
      "B. Design Effect (Deff)",
      "C. Correlation Coefficient",
      "D. p-value"
    ],
    correctAnswer: 1, // B
    explanation: "Design Effect (Deff) is the ratio of the variance of an estimate under a complex sample design to the variance under simple random sampling of identical sample size."
  },
  {
    id: 4,
    question: "In systematic sampling, if a sample of size n = 50 is needed from a population N = 1000, what is the sampling interval k?",
    options: [
      "A. k = 10",
      "B. k = 20",
      "C. k = 50",
      "D. k = 100"
    ],
    correctAnswer: 1, // B
    explanation: "Sampling interval k = N / n = 1000 / 50 = 20. Every 20th unit is selected after a random starting point between 1 and 20."
  },
  {
    id: 5,
    question: "Which of the following is considered a Non-Sampling Error in statistical survey operations?",
    options: [
      "A. Fluctuations due to random chance in sample selection",
      "B. Non-response bias due to missing household respondents",
      "C. Standard error of sample mean",
      "D. Variance estimator inaccuracy"
    ],
    correctAnswer: 1, // B
    explanation: "Non-sampling errors arise from data collection flaws such as respondent non-response, measurement errors, and questionnaire design flaws."
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "High-Priority Competency Gap Detected",
    message: "Karma AI identified a 32% gap in Sampling Techniques based on your recent activity.",
    timestamp: "10 mins ago",
    type: "warning",
    read: false
  },
  {
    id: "notif-2",
    title: "New iGOT Course Recommended",
    message: "'Fundamentals of Survey Sampling' has been added to your personalized learning path with a 96% match score.",
    timestamp: "2 hours ago",
    type: "info",
    read: false
  },
  {
    id: "notif-3",
    title: "Assessment Performance Updated",
    message: "Your score in Survey Design quiz was recorded at 84%. Competency score increased by +9%.",
    timestamp: "Yesterday",
    type: "success",
    read: true
  },
  {
    id: "notif-4",
    title: "Personalized Learning Path Updated",
    message: "Phase 2 materials unlocked. You are 60% through your weekly learning target.",
    timestamp: "2 days ago",
    type: "system",
    read: true
  }
];

export const MOCK_ADMIN_STATS = {
  totalEmployees: 4280,
  activeLearners: 3612,
  averageCompetency: 76,
  highPriorityGaps: 384,
  departmentBreakdown: [
    { name: "Survey Operations", employees: 1450, avgScore: 71, topGap: "Sampling Techniques" },
    { name: "Economic Statistics", employees: 1120, avgScore: 79, topGap: "Data Visualization" },
    { name: "Social Statistics", employees: 890, avgScore: 78, topGap: "Survey Design" },
    { name: "Data Processing", employees: 820, avgScore: 82, topGap: "Data Governance" }
  ],
  gapDistribution: [
    { name: "Data Visualization", gapPercentage: 42, affectedCount: 1797 },
    { name: "Statistical Analysis", gapPercentage: 37, affectedCount: 1583 },
    { name: "Sampling Techniques", gapPercentage: 31, affectedCount: 1326 },
    { name: "Data Quality & NQAF", gapPercentage: 24, affectedCount: 1027 }
  ]
};

export const MOCK_ADMIN_EMPLOYEES = [
  { id: "STAT-2026-1042", name: "Ponmughil R", department: "Statistical Operations", role: "Statistical Analyst", competencyScore: 72, topGap: "Sampling Techniques", learningStatus: "In Progress", lastActive: "10 mins ago" },
  { id: "STAT-2026-1011", name: "Rajesh Kumar Sharma", department: "Survey Operations", role: "Senior Survey Officer", competencyScore: 68, topGap: "Sampling Techniques", learningStatus: "Assigned", lastActive: "1 hour ago" },
  { id: "STAT-2026-1088", name: "Ananya Deshmukh", department: "Economic Statistics", role: "Economic Investigator", competencyScore: 84, topGap: "Data Visualization", learningStatus: "Completed Phase 2", lastActive: "3 hours ago" },
  { id: "STAT-2026-1095", name: "Venkatesh Iyer", department: "Data Processing", role: "Data Processing Officer", competencyScore: 79, topGap: "Data Quality", learningStatus: "In Progress", lastActive: "Yesterday" },
  { id: "STAT-2026-1102", name: "Priya Nair", department: "Social Statistics", role: "Statistical Officer", competencyScore: 75, topGap: "Survey Design", learningStatus: "Pending Assessment", lastActive: "2 days ago" }
];
