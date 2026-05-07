export const personalInfo = {
  name: "Sanket Kothiya",
  title: "Data Analyst",
  subtitle: "Insight Engineer · Data Storyteller",
  location: "Windsor, ON",
  phone: "+1 (226) 975-7452",
  email: "sanketkothiya1309@gmail.com",
  linkedin: "https://linkedin.com/in/sanketkothiya",
  github: "https://github.com/sanketkothiya",
  typingPhrases: [
    "SQL & Python Expert",
    "Power BI Developer",
    "Tableau Specialist",
    "Data Pipeline Architect",
    "Machine Learning Enthusiast",
  ],
};

export const summary =
  "Data Analyst with 4+ years of experience analyzing and interpreting complex datasets to drive business insights and decision-making. Skilled in SQL, Python, and data visualization tools such as Power BI and Tableau. Strong expertise in data cleaning, transformation, and building dashboards to improve reporting efficiency. Proven ability to optimize data processes, identify trends, and deliver actionable insights.";

export const education = [
  {
    school: "University of Windsor",
    degree: "Master of Science, Applied Computing",
    location: "Windsor, Canada",
    period: "May 2024 - Aug 2025",
  },
  {
    school: "A. D. Patel Institute of Technology",
    degree: "Bachelor of Technology, Computer Engineering",
    location: "Anand, India",
    period: "May 2018 - May 2022",
  },
];

export const skills = {
  "Programming Languages": {
    color: "#7b2ff7",
    items: ["Python", "R", "SQL", "JavaScript"],
  },
  "Python Libraries": {
    color: "#2d7ff9",
    items: [
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
    ],
  },
  "Database Management": {
    color: "#00d4ff",
    items: ["MS SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
  },
  "Data Visualization": {
    color: "#ff2d95",
    items: [
      "Excel (VBA, Macros)",
      "Tableau",
      "Power BI",
      "Google Analytics",
    ],
  },
  "Agile & DevOps": {
    color: "#f59e0b",
    items: ["GitHub", "Git", "GitLab", "JIRA"],
  },
  "Cloud Platforms": {
    color: "#10b981",
    items: ["AWS", "Microsoft Azure", "GCP", "Firebase"],
  },
};

export const experience = [
  {
    company: "Rogers Communications",
    role: "Data Analyst",
    period: "May 2025 - Present",
    location: "Canada",
    bullets: [
      "Analyzed large datasets using SQL and Python to generate actionable insights, improving data-driven decision-making across business units while identifying trends, anomalies, and opportunities for business growth and operational efficiency.",
      "Built interactive dashboards and reports using Power BI, enhancing visibility into key business metrics and improving stakeholder reporting with clear and visually compelling data presentations.",
      "Designed and implemented data pipelines for ETL processes, ensuring data accuracy and consistency while handling large volumes of structured and unstructured data from multiple sources.",
      "Optimized database queries and data models, reducing processing time and improving data retrieval performance while ensuring scalability for high-volume workloads.",
      "Collaborated with cross-functional teams to gather requirements, validate data, and ensure accurate reporting aligned with business goals.",
    ],
  },
  {
    company: "Cognizant",
    role: "Data Analyst",
    period: "Jan 2021 - Mar 2024",
    location: "India",
    bullets: [
      "Analyzed structured and unstructured data using SQL and Python, delivering insights to improve operational efficiency and business performance.",
      "Developed dashboards and visual reports to track KPIs and trends, enabling stakeholders to make informed decisions with intuitive visualizations.",
      "Improved data processing efficiency by optimizing queries, cleaning datasets, and enhancing data transformation workflows for reliable analytics.",
      "Implemented data validation and quality checks to ensure reliability and consistency, reducing errors across multiple reporting processes.",
      "Built reusable data models and reporting templates, increasing efficiency and reducing redundancy in analysis tasks.",
    ],
  },
];

export const projects = [
  {
    title: "AI Benchmarking System with Predictive Analytics",
    organization: "Jaguar Land Rover",
    description:
      "Developed and led an analytics reporting system to evaluate AI model performance using Streamlit and Python visualization dashboards, enabling clear KPI tracking for stakeholders.",
    highlights: [
      "Advanced data analysis using Pandas, Matplotlib, and Seaborn for performance trends",
      "Cross-functional collaboration to translate technical outputs into actionable insights",
      "Data quality monitoring and validation processes for reporting accuracy",
    ],
    metrics: [
      { label: "Efficiency Gain", value: "15%" },
      { label: "Model Accuracy", value: "92.5%" },
      { label: "GPUs Analyzed", value: "2,108" },
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    icon: "🤖",
    image: "/images/jlr-dashboard.png",
    liveUrl: "https://jlr-ai-benchmark-prediction-dashboard.onrender.com/",
  },
  {
    title: "Superstore Sales Analytics Dashboard",
    organization: "Personal Project",
    description:
      "Designed and built a production-grade Excel analytics workbook on the Global Superstore dataset (9,994 orders, 2014–2017) covering sales, profit, customer, and regional performance.",
    highlights: [
      "KPI Dashboard — 8 dynamic metric cards tracking Revenue ($2.3M), Profit Margin (12.5%), Orders & Customers",
      "Pivot Analysis — 4 cross-tabulations: Year×Category, Region×Segment, Sub-Category Scorecard, Discount Impact",
      "6 embedded visualizations: clustered bar, pie, line trend, and horizontal bar charts",
      "Formula Engine — SUMIFS, AVERAGEIF, COUNTIF, nested IF, RANK, LARGE, and % of Total",
      "Top & Bottom Analysis — Top 10 customers/states, loss-making sub-categories",
    ],
    metrics: [
      { label: "Revenue Tracked", value: "$2.3M" },
      { label: "Profit Margin", value: "12.5%" },
      { label: "Orders Analyzed", value: "9,994" },
      { label: "Customers", value: "793" },
    ],
    techStack: ["Excel", "VBA", "Python", "Pandas", "Data Visualization"],
    icon: "📊",
    images: ["/images/superstore-kpi.png", "/images/superstore-charts.png"],
  },
  {
    title: "Healthcare Analytics Dashboard",
    organization: "Personal Project",
    description:
      "Designed and developed a 5-page interactive Power BI dashboard using a real-world healthcare dataset of 10,000+ patient records to answer executive, clinical, and financial questions.",
    highlights: [
      "Data Preparation & Modeling — Cleaned data in Power Query, built a proper Date Table, and designed a clean star schema",
      "DAX Measures — Wrote 13 explicit measures from scratch organized into display folders for Key KPIs, Admissions, Clinical, Time Intelligence, and Financial",
      "Report Design — Built 5 pages (Executive Summary, Demographics, Admissions, Financial, Clinical Outcomes) with 14 cross-filtering slicers",
      "Business Insights — Discovered high Avg Length of Stay (15.5 days), volume-driven billing (~$25K avg), and a 33.6% abnormal test rate",
    ],
    metrics: [
      { label: "Patient Records", value: "10K+" },
      { label: "DAX Measures", value: "13" },
      { label: "Dashboard Pages", value: "5" },
    ],
    techStack: ["Power BI", "Power Query (M)", "DAX", "Data Modeling", "Healthcare Analytics"],
    icon: "🏥",
    images: ["/images/pbi-1.png", "/images/pbi-2.png"],
  },
  {
    title: "Automated Credit Approval System (CrediWise)",
    organization: "University of Windsor / TD Bank",
    description:
      "Performed end-to-end business analysis for credit decisioning workflows by gathering stakeholder requirements and defining measurable KPIs for model development.",
    highlights: [
      "Analyzed financial datasets using Python, SQL, and advanced Excel techniques",
      "Identified approval trends and risk factors for credit decisioning",
      "Conducted A/B testing in Agile (Scrum) environment",
      "Implemented data validation and root cause analysis processes",
    ],
    metrics: [
      { label: "Form Completion", value: "+28%" },
    ],
    techStack: ["Python", "SQL", "Excel", "A/B Testing", "Agile/Scrum"],
    icon: "💳",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
