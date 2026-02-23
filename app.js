const JOBS = [
  {
    id: "JOB-001",
    title: "SDE Intern",
    company: "Amazon India",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Data Structures", "Algorithms"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://www.amazon.jobs/en/jobs/intern-sde-001",
    description:
      "Work with experienced engineers on highly scalable services.\nContribute to code reviews, testing, and documentation.\nIdeal for students in their final year of a CS-related degree.\nStrong fundamentals in object-oriented programming are expected.",
  },
  {
    id: "JOB-002",
    title: "Graduate Engineer Trainee",
    company: "Infosys",
    location: "Mysuru",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "SQL", "Spring"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.infosys.com/jobs/GET-2026-002",
    description:
      "Join the global delivery team as a Graduate Engineer Trainee.\nYou will be trained on enterprise technologies and delivery standards.\nRotational assignments across application development and support.\nGood communication skills and willingness to learn are essential.",
  },
  {
    id: "JOB-003",
    title: "Frontend Intern",
    company: "Flipkart",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 0,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.flipkart.com/intern-frontend-003",
    description:
      "Assist in building user-facing features for high-traffic pages.\nPair with senior engineers to understand performance and accessibility.\nSuitable for final-year students or recent graduates.\nA strong portfolio or GitHub profile will be an advantage.",
  },
  {
    id: "JOB-004",
    title: "Junior Backend Developer",
    company: "Swiggy",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Node.js", "Express", "PostgreSQL"],
    source: "Naukri",
    postedDaysAgo: 2,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.swiggy.com/jobs/backend-junior-004",
    description:
      "Work on microservices that power food delivery and logistics.\nParticipate in design discussions and code reviews.\nExposure to monitoring, alerting, and incident handling.\nComfortable with writing clean, testable code in Node.js.",
  },
  {
    id: "JOB-005",
    title: "Data Analyst Intern",
    company: "Razorpay",
    location: "Bengaluru",
    mode: "Remote",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Python", "Tableau"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://razorpay.com/careers/intern-data-005",
    description:
      "Support the analytics team with dashboards and reports.\nClean and analyze transaction-level data for business stakeholders.\nWork closely with product managers to track key metrics.\nComfort with numbers and attention to detail is important.",
  },
  {
    id: "JOB-006",
    title: "Python Developer (Fresher)",
    company: "TCS",
    location: "Hyderabad",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Python", "Django", "REST APIs"],
    source: "Naukri",
    postedDaysAgo: 5,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.tcs.com/jobs/python-fresher-006",
    description:
      "Develop and maintain internal web applications using Python.\nWork with senior developers to implement API endpoints.\nParticipate in code reviews and internal technical sessions.\nBasic understanding of databases and web frameworks is expected.",
  },
  {
    id: "JOB-007",
    title: "React Developer (1-3 Years)",
    company: "Freshworks",
    location: "Chennai",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.freshworks.com/jobs/react-frontend-007",
    description:
      "Own features for customer-facing SaaS applications.\nWork with designers to translate Figma specs into production code.\nTake responsibility for UI performance and accessibility.\nExperience with modern React patterns is preferred.",
  },
  {
    id: "JOB-008",
    title: "Java Developer (0-1 Years)",
    company: "Wipro",
    location: "Pune",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Spring Boot", "SQL"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.wipro.com/jobs/java-001-008",
    description:
      "Join a delivery team working on enterprise applications.\nImplement and maintain RESTful services as part of a larger platform.\nWork within structured SDLC and documentation standards.\nTraining support will be provided in the initial months.",
  },
  {
    id: "JOB-009",
    title: "QA Intern",
    company: "Zoho",
    location: "Chennai",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Manual Testing", "Test Cases", "Bug Reporting"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.zoho.com/intern-qa-009",
    description:
      "Work with product teams to test new releases.\nPrepare and execute test cases for web applications.\nLog defects with clear reproduction steps and evidence.\nKeen observation and structured thinking are important for this role.",
  },
  {
    id: "JOB-010",
    title: "SDE Intern",
    company: "CRED",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Go", "Microservices", "Kubernetes"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.cred.club/intern-sde-010",
    description:
      "Contribute to high-scale backend services in a fast-paced team.\nCollaborate with mentors on design and implementation details.\nExposure to production systems and observability tools.\nCandidates should be curious and comfortable reading existing code.",
  },
  {
    id: "JOB-011",
    title: "Junior Backend Developer",
    company: "PhonePe",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Spring Boot", "Kafka"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "10–18 LPA",
    applyUrl: "https://careers.phonepe.com/jobs/backend-junior-011",
    description:
      "Help design and build services for payments and settlements.\nContribute to scalable APIs consumed by multiple internal clients.\nWork with senior engineers on performance optimization.\nPrior experience in any JVM language will be considered.",
  },
  {
    id: "JOB-012",
    title: "Data Analyst Intern",
    company: "Paytm",
    location: "Noida",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Power BI", "Excel"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.paytm.com/intern-data-012",
    description:
      "Assist business teams with daily and weekly dashboards.\nPrepare structured reports from large transaction datasets.\nSupport ad-hoc analysis to answer product and marketing questions.\nComfort with spreadsheet tools and basic querying is required.",
  },
  {
    id: "JOB-013",
    title: "Graduate Engineer Trainee",
    company: "Capgemini",
    location: "Mumbai",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Testing", "Basics of Cloud"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.capgemini.com/jobs/get-013",
    description:
      "Join a structured graduate program with technical and soft skills training.\nWork on client projects across development, testing, or support.\nRotational assignments may be offered across business units.\nOpen to graduates from CS, IT, and related streams.",
  },
  {
    id: "JOB-014",
    title: "Java Developer (0-1 Years)",
    company: "Cognizant",
    location: "Kolkata",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Spring", "REST"],
    source: "LinkedIn",
    postedDaysAgo: 6,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.cognizant.com/jobs/java-junior-014",
    description:
      "Work on backend modules for enterprise clients.\nParticipate in requirement discussions and effort estimations.\nFollow coding guidelines and documentation standards.\nBasic understanding of APIs and relational databases is required.",
  },
  {
    id: "JOB-015",
    title: "SDE Intern",
    company: "Juspay",
    location: "Bengaluru",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Functional Programming", "Haskell", "Scala"],
    source: "LinkedIn",
    postedDaysAgo: 0,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://juspay.in/careers/intern-sde-015",
    description:
      "Explore functional programming in high-scale payments systems.\nWork closely with mentors on production code and experiments.\nStrong interest in mathematics or functional languages is valued.\nSelf-driven learners will thrive in this environment.",
  },
  {
    id: "JOB-016",
    title: "Frontend Intern",
    company: "FreshCart Labs",
    location: "Hyderabad",
    mode: "Remote",
    experience: "Fresher",
    skills: ["React", "Tailwind CSS", "REST APIs"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://freshcartlabs.com/careers/frontend-intern-016",
    description:
      "Contribute to a grocery delivery web dashboard.\nImplement UI components based on existing design tokens.\nPair with backend engineers to integrate APIs.\nExposure to startup-style product discussions and quick iterations.",
  },
  {
    id: "JOB-017",
    title: "Junior Backend Developer",
    company: "NeoPay",
    location: "Pune",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Node.js", "MongoDB", "Redis"],
    source: "Naukri",
    postedDaysAgo: 4,
    salaryRange: "6–10 LPA",
    applyUrl: "https://neopay.in/careers/backend-junior-017",
    description:
      "Work on APIs powering a consumer payments app.\nTake ownership of smaller services under senior guidance.\nHelp improve logging, monitoring, and error handling.\nTeam values clean, readable, and maintainable code.",
  },
  {
    id: "JOB-018",
    title: "Data Analyst Intern",
    company: "UrbanDash",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Python", "Pandas"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://urbandash.io/jobs/data-intern-018",
    description:
      "Analyze operations data for last-mile logistics.\nWork on simple models and descriptive analytics.\nCreate clean visualizations for internal stakeholders.\nComfortable working with imperfect, real-world datasets.",
  },
  {
    id: "JOB-019",
    title: "React Developer (1-3 Years)",
    company: "Zoho",
    location: "Chennai",
    mode: "Onsite",
    experience: "1-3",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    source: "Naukri",
    postedDaysAgo: 2,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.zoho.com/jobs/frontend-react-019",
    description:
      "Implement front-end modules for SaaS products.\nCollaborate with designers and backend engineers.\nOptimize pages for performance and reliability.\nFamiliarity with browser debugging tools is expected.",
  },
  {
    id: "JOB-020",
    title: "Python Developer (Fresher)",
    company: "SigmaByte Analytics",
    location: "Gurugram",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Python", "Flask", "MySQL"],
    source: "Indeed",
    postedDaysAgo: 7,
    salaryRange: "3–5 LPA",
    applyUrl: "https://sigmabyte.in/careers/python-fresher-020",
    description:
      "Help maintain internal analytics dashboards.\nDevelop small features under mentorship and guidance.\nWrite simple scripts for data processing when required.\nCandidates should be comfortable reading and understanding existing code.",
  },
  {
    id: "JOB-021",
    title: "SDE Intern",
    company: "Infosys",
    location: "Pune",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Java", "Spring", "Git"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.infosys.com/intern-sde-021",
    description:
      "Shadow experienced engineers on client delivery projects.\nContribute to internal tools and accelerators.\nGain exposure to enterprise-grade quality practices.\nGood problem-solving skills and curiosity are key attributes.",
  },
  {
    id: "JOB-022",
    title: "Graduate Engineer Trainee",
    company: "Wipro",
    location: "Hyderabad",
    mode: "Onsite",
    experience: "0-1",
    skills: ["C#", ".NET", "SQL"],
    source: "Naukri",
    postedDaysAgo: 8,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.wipro.com/jobs/get-dotnet-022",
    description:
      "Start your career as a Graduate Engineer in the .NET stack.\nParticipate in structured classroom and on-the-job training.\nContribute to internal and client projects across domains.\nGood analytical and communication skills are important.",
  },
  {
    id: "JOB-023",
    title: "Frontend Intern",
    company: "Capgemini",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Angular", "TypeScript", "HTML", "CSS"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.capgemini.com/intern-frontend-023",
    description:
      "Assist teams in building and maintaining Angular-based frontends.\nFollow design system guidelines while implementing features.\nPair with senior developers for code reviews and feedback.\nEagerness to learn enterprise frontend patterns is valued.",
  },
  {
    id: "JOB-024",
    title: "Junior Backend Developer",
    company: "Oracle India",
    location: "Bengaluru",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "SQL", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.oracle.com/jobs/backend-junior-024",
    description:
      "Contribute to backend services used by enterprise customers.\nWork on enhancement requests and minor features.\nFollow secure coding and performance best practices.\nExposure to cloud platforms will be an added advantage.",
  },
  {
    id: "JOB-025",
    title: "Data Analyst Intern",
    company: "SAP Labs India",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Power BI"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.sap.com/intern-data-025",
    description:
      "Support internal teams with reliable reporting and dashboards.\nCollaborate with senior analysts on data preparation.\nWork with business stakeholders to refine metric definitions.\nAttention to data quality and documentation is expected.",
  },
  {
    id: "JOB-026",
    title: "React Developer (1-3 Years)",
    company: "Dell Technologies",
    location: "Hyderabad",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "Redux", "TypeScript"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "10–18 LPA",
    applyUrl: "https://jobs.dell.com/react-dev-026",
    description:
      "Develop internal tools and portals for operations teams.\nCollaborate with designers and backend services teams.\nFocus on maintainable, testable React components.\nExperience with any state management library is a plus.",
  },
  {
    id: "JOB-027",
    title: "Python Developer (Fresher)",
    company: "Cognizant",
    location: "Pune",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Python", "Django", "REST"],
    source: "LinkedIn",
    postedDaysAgo: 9,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.cognizant.com/jobs/python-fresher-027",
    description:
      "Join a cross-functional team delivering web applications.\nSupport senior developers with feature implementation and testing.\nParticipate in documentation and deployment activities.\nUnderstanding of HTTP and REST principles is helpful.",
  },
  {
    id: "JOB-028",
    title: "SDE Intern",
    company: "UrbanCart",
    location: "Delhi NCR",
    mode: "Remote",
    experience: "Fresher",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://urbancart.in/careers/sde-intern-028",
    description:
      "Help build backend features for an e-commerce platform.\nWork closely with mentors on feature delivery and testing.\nGain exposure to basic DevOps workflows.\nIdeal for students comfortable with JavaScript-based stacks.",
  },
  {
    id: "JOB-029",
    title: "Graduate Engineer Trainee",
    company: "IBM India",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Java", "Cloud Basics", "Git"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.ibm.com/jobs/get-029",
    description:
      "Join IBM's early professional program.\nWork on cloud and application modernization projects.\nLearn from experienced consultants and engineers.\nStrong fundamentals and willingness to learn are critical.",
  },
  {
    id: "JOB-030",
    title: "Frontend Intern",
    company: "PaySense Labs",
    location: "Mumbai",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["React", "CSS", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://paysense.in/careers/frontend-intern-030",
    description:
      "Help build borrower-facing web journeys.\nImplement UI screens from wireframes with attention to detail.\nWork with backend engineers to integrate APIs.\nCuriosity about lending and fintech will be useful.",
  },
  {
    id: "JOB-031",
    title: "Junior Backend Developer",
    company: "Razorpay",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Go", "PostgreSQL", "Microservices"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "10–18 LPA",
    applyUrl: "https://razorpay.com/careers/backend-junior-031",
    description:
      "Implement and maintain services for payment flows.\nCollaborate with product and design teams on new features.\nParticipate in on-call rotations with senior support.\nComfort with debugging production issues is expected over time.",
  },
  {
    id: "JOB-032",
    title: "Data Analyst Intern",
    company: "Flipkart",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Python"],
    source: "Naukri",
    postedDaysAgo: 4,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://flipkartcareers.com/data-intern-032",
    description:
      "Work with the analytics team to monitor category performance.\nBuild simple dashboards and data extracts for business teams.\nAssist with ad-hoc analysis during key sales events.\nAttention to deadlines and clear communication are key.",
  },
  {
    id: "JOB-033",
    title: "React Developer (1-3 Years)",
    company: "Freshworks",
    location: "Chennai",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.freshworks.com/jobs/react-frontend-033",
    description:
      "Deliver user-facing modules for customer success tools.\nWork in cross-functional squads with designers and PMs.\nFocus on reliability and predictable behavior over cleverness.\nExperience with design systems will be helpful.",
  },
  {
    id: "JOB-034",
    title: "Python Developer (Fresher)",
    company: "AnalyticsHub",
    location: "Hyderabad",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Python", "Pandas", "APIs"],
    source: "Indeed",
    postedDaysAgo: 8,
    salaryRange: "3–5 LPA",
    applyUrl: "https://analyticshub.in/careers/python-fresher-034",
    description:
      "Build small services around analytics workflows.\nWrite scripts for data import, cleaning, and export.\nCollaborate with analysts and data engineers.\nComfortable working with documentation and examples is enough to start.",
  },
  {
    id: "JOB-035",
    title: "SDE Intern",
    company: "Swiggy",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Microservices", "Kafka"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.swiggy.com/intern-sde-035",
    description:
      "Collaborate with seasoned engineers on logistics services.\nPick up tasks on real features with production impact.\nGain exposure to monitoring and reliability practices.\nStrong fundamentals and a steady pace of learning are important.",
  },
  {
    id: "JOB-036",
    title: "Graduate Engineer Trainee",
    company: "TCS",
    location: "Chennai",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Testing", "Agile Basics"],
    source: "Naukri",
    postedDaysAgo: 9,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.tcs.com/jobs/get-036",
    description:
      "Start your career with structured training and mentoring.\nParticipate in development and support activities for clients.\nFollow standard processes and documentation practices.\nOpen to graduates from multiple engineering disciplines.",
  },
  {
    id: "JOB-037",
    title: "Frontend Intern",
    company: "CRED",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["React", "Next.js", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.cred.club/intern-frontend-037",
    description:
      "Help craft clean user interfaces for consumer experiences.\nWork closely with designers on implementation details.\nLearn how performance and stability are measured in production.\nSelf-directed learners with a good eye for detail will fit well.",
  },
  {
    id: "JOB-038",
    title: "Junior Backend Developer",
    company: "PhonePe",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Spring Boot", "MySQL"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "10–18 LPA",
    applyUrl: "https://careers.phonepe.com/jobs/backend-junior-038",
    description:
      "Implement and maintain services for merchant workflows.\nReview and improve code with guidance from senior engineers.\nParticipate in design discussions for smaller modules.\nCandidates should be comfortable working with logs and metrics.",
  },
  {
    id: "JOB-039",
    title: "Data Analyst Intern",
    company: "Zoho",
    location: "Chennai",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["SQL", "Spreadsheet", "Reporting"],
    source: "Indeed",
    postedDaysAgo: 4,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.zoho.com/intern-data-039",
    description:
      "Work with product teams to analyze feature usage.\nPrepare regular reports for internal review meetings.\nHelp maintain consistent metric definitions.\nDetail-oriented candidates with patience for data work will do well.",
  },
  {
    id: "JOB-040",
    title: "React Developer (1-3 Years)",
    company: "UrbanDash",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 6,
    salaryRange: "6–10 LPA",
    applyUrl: "https://urbandash.io/jobs/react-dev-040",
    description:
      "Build dashboards for operations and support teams.\nCollaborate with backend engineers on data contracts.\nKeep interfaces simple and reliable for daily use.\nFamiliarity with design tokens and component libraries is helpful.",
  },
  {
    id: "JOB-041",
    title: "Python Developer (Fresher)",
    company: "NeoPay",
    location: "Pune",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Python", "FastAPI", "SQLAlchemy"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "3–5 LPA",
    applyUrl: "https://neopay.in/careers/python-fresher-041",
    description:
      "Support development of internal tools and microservices.\nImplement smaller endpoints under mentorship.\nHelp with unit tests and simple automation scripts.\nComfort with reading documentation and trying examples is enough.",
  },
  {
    id: "JOB-042",
    title: "SDE Intern",
    company: "Flipkart",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Kotlin", "Spring"],
    source: "LinkedIn",
    postedDaysAgo: 0,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://flipkartcareers.com/sde-intern-042",
    description:
      "Assist teams in building backend services for e-commerce.\nContribute to code, tests, and documentation.\nUnderstand how high-traffic systems are monitored.\nStrong fundamentals and willingness to learn are expected.",
  },
  {
    id: "JOB-043",
    title: "Graduate Engineer Trainee",
    company: "Accenture",
    location: "Hyderabad",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Java", "Testing", "Basic SQL"],
    source: "Indeed",
    postedDaysAgo: 5,
    salaryRange: "3–5 LPA",
    applyUrl: "https://accenture.com/careers/get-043",
    description:
      "Be part of multi-location project teams.\nContribute to development, testing, or support workstreams.\nFollow established delivery processes and quality gates.\nOpen to engineering graduates from multiple disciplines.",
  },
  {
    id: "JOB-044",
    title: "Frontend Intern",
    company: "Paytm",
    location: "Noida",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["React", "JavaScript", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.paytm.com/frontend-intern-044",
    description:
      "Support teams building merchant and consumer frontends.\nTranslate designs into clean and maintainable code.\nWork closely with backend teams for integration.\nComfortable reading and reusing existing components is important.",
  },
  {
    id: "JOB-045",
    title: "Junior Backend Developer",
    company: "Freshworks",
    location: "Chennai",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "Spring Boot", "MySQL"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.freshworks.com/jobs/backend-junior-045",
    description:
      "Enhance and maintain backend modules for SaaS products.\nCollaborate with frontend, QA, and product teams.\nParticipate in code reviews and design discussions.\nComfort with debugging issues across environments is needed.",
  },
  {
    id: "JOB-046",
    title: "Data Analyst Intern",
    company: "PhonePe",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Visualization"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.phonepe.com/intern-data-046",
    description:
      "Work with analytics teams to track key product metrics.\nPrepare periodic reports for leadership reviews.\nAssist in exploratory analysis for new features.\nAttention to detail and clarity in communication are essential.",
  },
  {
    id: "JOB-047",
    title: "React Developer (1-3 Years)",
    company: "Razorpay",
    location: "Bengaluru",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "Design Systems"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "10–18 LPA",
    applyUrl: "https://razorpay.com/careers/react-dev-047",
    description:
      "Build and maintain internal admin and merchant dashboards.\nFocus on predictable, accessible interfaces.\nCollaborate with design and backend teams closely.\nExperience with any component library is useful.",
  },
  {
    id: "JOB-048",
    title: "Python Developer (Fresher)",
    company: "PaySense Labs",
    location: "Mumbai",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Python", "Django", "APIs"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "3–5 LPA",
    applyUrl: "https://paysense.in/careers/python-fresher-048",
    description:
      "Develop and maintain backend services for lending workflows.\nAssist senior developers in implementing new features.\nHelp with writing tests and maintaining documentation.\nGood understanding of basic web concepts is enough to start.",
  },
  {
    id: "JOB-049",
    title: "SDE Intern",
    company: "UrbanDash",
    location: "Bengaluru",
    mode: "Remote",
    experience: "Fresher",
    skills: ["JavaScript", "Node.js", "PostgreSQL"],
    source: "Indeed",
    postedDaysAgo: 5,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://urbandash.io/jobs/sde-intern-049",
    description:
      "Work on internal tools supporting operations teams.\nImplement smaller features with clear guidance.\nGet exposure to full-stack workflows across the product.\nIdeal for candidates curious about logistics technology.",
  },
  {
    id: "JOB-050",
    title: "Graduate Engineer Trainee",
    company: "Infosys",
    location: "Chandigarh",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Python", "SQL"],
    source: "LinkedIn",
    postedDaysAgo: 8,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.infosys.com/jobs/get-050",
    description:
      "Join Infosys as a Graduate Engineer across multiple technologies.\nParticipate in structured training and certifications.\nContribute to development, testing, or support engagements.\nOpen to flexible deployment locations based on business needs.",
  },
  {
    id: "JOB-051",
    title: "Frontend Intern",
    company: "NeoPay",
    location: "Pune",
    mode: "Remote",
    experience: "Fresher",
    skills: ["React", "CSS", "REST APIs"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://neopay.in/careers/frontend-intern-051",
    description:
      "Support web frontend for a consumer payments app.\nImplement smaller UI components under supervision.\nLearn how design tokens and themes are applied.\nCandidates should be comfortable reading and understanding React code.",
  },
  {
    id: "JOB-052",
    title: "Junior Backend Developer",
    company: "SigmaByte Analytics",
    location: "Gurugram",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Python", "Flask", "PostgreSQL"],
    source: "Indeed",
    postedDaysAgo: 7,
    salaryRange: "6–10 LPA",
    applyUrl: "https://sigmabyte.in/careers/backend-junior-052",
    description:
      "Help build APIs for analytics and reporting platforms.\nWork with data engineers to integrate data sources.\nFollow clean code and documentation practices.\nComfortable with basic Linux and command-line workflows.",
  },
  {
    id: "JOB-053",
    title: "Data Analyst Intern",
    company: "UrbanCart",
    location: "Delhi NCR",
    mode: "Remote",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Visualization"],
    source: "LinkedIn",
    postedDaysAgo: 9,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://urbancart.in/careers/data-intern-053",
    description:
      "Support category and operations teams with data-backed insights.\nCreate and maintain simple dashboards for leadership.\nWork with imperfect data and document assumptions clearly.\nCuriosity about retail and e-commerce is appreciated.",
  },
  {
    id: "JOB-054",
    title: "React Developer (1-3 Years)",
    company: "PaySense Labs",
    location: "Mumbai",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "6–10 LPA",
    applyUrl: "https://paysense.in/careers/react-dev-054",
    description:
      "Build and maintain borrower and partner portals.\nWork in close partnership with product and design.\nFocus on stability and clarity over visual complexity.\nPrevious experience in any financial product is a bonus.",
  },
  {
    id: "JOB-055",
    title: "Python Developer (Fresher)",
    company: "FreshCart Labs",
    location: "Hyderabad",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Python", "Django", "REST APIs"],
    source: "Indeed",
    postedDaysAgo: 10,
    salaryRange: "3–5 LPA",
    applyUrl: "https://freshcartlabs.com/careers/python-fresher-055",
    description:
      "Implement smaller features for internal tools and APIs.\nCollaborate with frontend and operations teams.\nWrite simple tests and maintain basic documentation.\nComfortable asking questions and iterating on feedback.",
  },
  {
    id: "JOB-056",
    title: "SDE Intern",
    company: "SigmaByte Analytics",
    location: "Gurugram",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Python", "SQL", "APIs"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://sigmabyte.in/careers/sde-intern-056",
    description:
      "Build and maintain small utilities around analytics workflows.\nWork closely with data engineers and analysts.\nGain exposure to cloud and containerized environments.\nCandidates should enjoy working with both code and data.",
  },
  {
    id: "JOB-057",
    title: "Graduate Engineer Trainee",
    company: "Wipro",
    location: "Kolkata",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "SQL", "Testing"],
    source: "Indeed",
    postedDaysAgo: 9,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.wipro.com/jobs/get-057",
    description:
      "Start your career with structured training and mentoring.\nContribute to delivery projects across domains.\nBe part of agile teams with clear responsibilities.\nStrong basics and willingness to relocate are important.",
  },
  {
    id: "JOB-058",
    title: "Frontend Intern",
    company: "AnalyticsHub",
    location: "Hyderabad",
    mode: "Remote",
    experience: "Fresher",
    skills: ["React", "JavaScript", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 6,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://analyticshub.in/careers/frontend-intern-058",
    description:
      "Help build dashboards used by analytics clients.\nCollaborate with designers and backend engineers.\nKeep interfaces focused on clarity and readability.\nKeen interest in data products is an advantage.",
  },
  {
    id: "JOB-059",
    title: "Junior Backend Developer",
    company: "UrbanCart",
    location: "Delhi NCR",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Node.js", "PostgreSQL", "Redis"],
    source: "Naukri",
    postedDaysAgo: 5,
    salaryRange: "6–10 LPA",
    applyUrl: "https://urbancart.in/careers/backend-junior-059",
    description:
      "Work on APIs for catalog and order management.\nHelp improve reliability and observability of services.\nParticipate in planning and estimation discussions.\nComfortable working in a small, focused engineering team.",
  },
  {
    id: "JOB-060",
    title: "Data Analyst Intern",
    company: "NeoPay",
    location: "Pune",
    mode: "Remote",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Dashboards"],
    source: "Indeed",
    postedDaysAgo: 8,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://neopay.in/careers/data-intern-060",
    description:
      "Support product and risk teams with analytical inputs.\nPrepare recurring reports on transaction trends.\nAssist in building and maintaining simple dashboards.\nComfort with numbers and structured thinking is required.",
  },
];

const JOBS_BY_ID = new Map(JOBS.map((job) => [job.id, job]));
const STORAGE_KEY_SAVED = "jobNotificationTracker.savedJobIds";
const STORAGE_KEY_PREFS = "jobTrackerPreferences";

const UNIQUE_LOCATIONS = Array.from(new Set(JOBS.map((j) => j.location))).sort();
const UNIQUE_MODES = Array.from(new Set(JOBS.map((j) => j.mode)));
const UNIQUE_EXPERIENCE = ["Fresher", "0-1", "1-3", "3-5"];
const UNIQUE_SOURCES = Array.from(new Set(JOBS.map((j) => j.source)));

let currentFilters = {
  keyword: "",
  location: "",
  mode: "",
  experience: "",
  source: "",
  sort: "latest",
  onlyMatches: false,
};

let currentPreferences = null;

const routes = {
  "/": {
    title: "Find Your Next Tech Role",
    subtitle: "A curated list of realistic Indian tech job opportunities.",
    kind: "landing",
  },
  "/dashboard": {
    title: "Job Board",
    subtitle: "Explore 60+ curated roles from top Indian tech companies.",
    kind: "dashboard",
  },
  "/saved": {
    title: "Saved Opportunities",
    subtitle: "Roles you've marked for follow-up.",
    kind: "saved",
  },
  "/digest": {
    title: "Daily Digest",
    subtitle: "Your personalized 9AM summary of top-matched roles.",
    kind: "digest",
  },
  "/settings": {
    title: "Your Preferences",
    subtitle: "Define your criteria for intelligent match scoring.",
    kind: "settings",
  },
};

function getRoute(pathname) {
  return routes[pathname] || routes["/"];
}

function renderRoute(pathname) {
  currentPreferences = loadPreferences();
  const route = getRoute(pathname);
  const outlet = document.getElementById("route-outlet");
  const ctxTitle = document.getElementById("context-title");
  const ctxSubtitle = document.getElementById("context-subtitle");

  if (!outlet || !ctxTitle || !ctxSubtitle) return;

  ctxTitle.textContent = route.title;
  ctxSubtitle.textContent = route.subtitle;
  outlet.innerHTML = "";

  if (route.kind === "landing") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Welcome to Job Notification Tracker</h2>
        </header>
        <div class="card__body stack stack--24">
          <p class="body-md text-max-width">
            Browse high-quality job listings from TCS, Amazon, Swiggy, and many more. 
            No junk, no scams—just realistic opportunities for Indian tech talent.
          </p>
          <div>
            <button class="btn btn--primary" type="button" onclick="handleNavigation('/dashboard')">
              Explore Dashboard
            </button>
          </div>
        </div>
      </article>
    `;
  } else if (route.kind === "settings") {
    const prefs = currentPreferences || { minMatchScore: 40 };
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Job Preferences</h2>
          <p class="body-sm">We use these to calculate match scores for every role.</p>
        </header>
        <div class="card__body stack stack--24">
          <div class="field">
            <label class="field__label">Target Roles (comma-separated)</label>
            <input type="text" id="pref-role-keywords" class="field__input" placeholder="e.g. SDE, Frontend, Intern" value="${prefs.roleKeywords || ''}">
          </div>
          
          <div class="field">
            <label class="field__label">Preferred Locations</label>
            <select id="pref-locations" class="field__input" multiple style="height: auto; min-height: 100px; padding: 10px;">
              ${UNIQUE_LOCATIONS.map(l => `<option value="${l}" ${prefs.preferredLocations?.includes(l) ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>

          <div class="field">
            <label class="field__label">Work Mode</label>
            <div class="stack stack--8">
              ${UNIQUE_MODES.map(m => `
                <label class="check-item">
                  <input type="checkbox" name="pref-mode" value="${m}" ${prefs.preferredMode?.includes(m) ? 'checked' : ''}>
                  <span>${m}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="field">
            <label class="field__label">Experience Level</label>
            <select id="pref-experience" class="field__input">
              <option value="">Select Level</option>
              ${UNIQUE_EXPERIENCE.map(e => `<option value="${e}" ${prefs.experienceLevel === e ? 'selected' : ''}>${e}</option>`).join('')}
            </select>
          </div>

          <div class="field">
            <label class="field__label">Key Skills (comma-separated)</label>
            <input type="text" id="pref-skills" class="field__input" placeholder="e.g. React, Java, SQL" value="${prefs.skills || ''}">
          </div>

          <div class="field">
            <label class="field__label">Minimum Match Threshold (%)</label>
            <div class="slider-row">
              <input type="range" id="pref-min-score" class="field__range" min="0" max="100" value="${prefs.minMatchScore}">
              <span id="pref-min-score-val" class="slider-row__value">${prefs.minMatchScore}%</span>
            </div>
          </div>

          <div style="margin-top: 24px;">
            <button class="btn btn--primary" id="save-prefs">Save Preferences</button>
          </div>
        </div>
      </article>
    `;
    setupPreferencesInteractions();
  } else if (route.kind === "dashboard") {
    const scoredJobs = computeScoresForJobs(JOBS, currentPreferences);
    const filteredJobs = applyFilters(scoredJobs, currentFilters, currentPreferences);
    const savedIds = new Set(getSavedJobIds());

    outlet.innerHTML = `
      ${!currentPreferences ? '<div class="jobs-banner body-md">Set your <a href="/settings" onclick="event.preventDefault(); handleNavigation(\'/settings\')">preferences</a> to activate intelligent matching.</div>' : ''}
      
      <section class="filter-bar">
        <div class="filter-bar__group">
          <label class="filter-bar__label">Search</label>
          <input id="filter-keyword" class="filter-bar__control" type="text" placeholder="Title or company..." value="${currentFilters.keyword}">
        </div>
        <div class="filter-bar__group" style="min-width: 140px;">
          <label class="filter-bar__label">Location</label>
          <select id="filter-location" class="filter-bar__control">
            <option value="">All Regions</option>
            ${UNIQUE_LOCATIONS.map(l => `<option value="${l}" ${currentFilters.location === l ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
        <div class="filter-bar__group" style="min-width: 140px;">
          <label class="filter-bar__label">Mode</label>
          <select id="filter-mode" class="filter-bar__control">
            <option value="">All Modes</option>
            ${UNIQUE_MODES.map(m => `<option value="${m}" ${currentFilters.mode === m ? 'selected' : ''}>${m}</option>`).join('')}
          </select>
        </div>
        <div class="filter-bar__group" style="min-width: 140px;">
          <label class="filter-bar__label">Experience</label>
          <select id="filter-experience" class="filter-bar__control">
            <option value="">All Levels</option>
            ${UNIQUE_EXPERIENCE.map(e => `<option value="${e}" ${currentFilters.experience === e ? 'selected' : ''}>${e}</option>`).join('')}
          </select>
        </div>
        <div class="filter-bar__group" style="min-width: 140px;">
          <label class="filter-bar__label">Sort</label>
          <select id="filter-sort" class="filter-bar__control">
            <option value="latest" ${currentFilters.sort === 'latest' ? 'selected' : ''}>Latest First</option>
            <option value="score" ${currentFilters.sort === 'score' ? 'selected' : ''}>Match Score</option>
            <option value="salary" ${currentFilters.sort === 'salary' ? 'selected' : ''}>Salary</option>
          </select>
        </div>
        <div class="filter-bar__group" style="justify-content: flex-end; padding-bottom: 8px;">
          <label class="filter-bar__toggle-label">
            <input type="checkbox" id="filter-only-matches" class="filter-bar__toggle-input" ${currentFilters.onlyMatches ? 'checked' : ''}>
            <span>Show only matches</span>
          </label>
        </div>
      </section>
      <section class="jobs-list" id="jobs-list">
        ${renderJobsList(filteredJobs, savedIds)}
      </section>
    `;
    setupFilterEvents();
    attachJobEvents(document.getElementById("jobs-list"));
  } else if (route.kind === "saved") {
    const savedIds = getSavedJobIds();
    const savedJobs = JOBS.filter(j => savedIds.includes(j.id));
    const scoredSaved = computeScoresForJobs(savedJobs, currentPreferences);

    if (scoredSaved.length === 0) {
      outlet.innerHTML = `
        <div class="jobs-list__empty">
          <div class="empty-state__icon">🔖</div>
          <h2 class="heading-lg">No saved jobs yet</h2>
          <p class="body-md text-max-width">
            When you find a role you like, click "Save" to keep track of it here.
          </p>
          <button class="btn btn--secondary" onclick="handleNavigation('/dashboard')">Browse Jobs</button>
        </div>
      `;
    } else {
      outlet.innerHTML = `
        <section class="jobs-list" id="saved-jobs-list">
          ${renderJobsList(scoredSaved, new Set(savedIds))}
        </section>
      `;
      attachJobEvents(document.getElementById("saved-jobs-list"));
    }
  } else if (route.kind === "digest") {
    renderDigestPage(outlet);
  }

  updateActiveNav(pathname);
}

function renderDigestPage(outlet) {
  if (!currentPreferences) {
    outlet.innerHTML = `
      <div class="jobs-list__empty">
        <div class="empty-state__icon">🔒</div>
        <h2 class="heading-lg">Preferences Required</h2>
        <p class="body-md text-max-width">Set preferences to generate a personalized digest.</p>
        <button class="btn btn--secondary" onclick="handleNavigation('/settings')">Open Preferences</button>
      </div>
    `;
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const storedDigest = loadDigest(today);

  if (!storedDigest) {
    outlet.innerHTML = `
      <div class="jobs-list__empty">
        <div class="empty-state__icon">📧</div>
        <h2 class="heading-lg">Your Morning Summary</h2>
        <p class="body-md">Discover the top 10 roles curated specifically for you today.</p>
        <div class="stack stack--16" style="align-items: center;">
           <button class="btn btn--primary" onclick="generateAndRenderDigest()">Generate Today's 9AM Digest (Simulated)</button>
           <p class="simulation-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
        </div>
      </div>
    `;
  } else {
    renderDigestContent(outlet, storedDigest);
  }
}

function generateAndRenderDigest() {
  const today = new Date().toISOString().split('T')[0];
  const scored = computeScoresForJobs(JOBS, currentPreferences);

  // Sort by score desc, then recency asc
  const sorted = scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.job.postedDaysAgo - b.job.postedDaysAgo;
  });

  const top10 = sorted.slice(0, 10);

  if (top10.length === 0 || top10[0].score === 0) {
    const outlet = document.getElementById("route-outlet");
    outlet.innerHTML = `
      <div class="jobs-list__empty">
        <div class="empty-state__icon">🌙</div>
        <h2 class="heading-lg">No matching roles today</h2>
        <p class="body-md">Check again tomorrow or broaden your preferences.</p>
        <button class="btn btn--secondary" onclick="handleNavigation('/settings')">Adjust Preferences</button>
      </div>
    `;
    return;
  }

  const digest = {
    date: today,
    jobs: top10
  };

  saveDigest(today, digest);
  renderRoute('/digest');
}

function renderDigestContent(outlet, digest) {
  const dateStr = new Date(digest.date).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const itemsHtml = digest.jobs.map(({ job, score }) => `
    <div class="digest-item">
      <div class="digest-item__header">
         <h3 class="heading-md" style="margin:0">${job.title}</h3>
         <span class="badge ${getScoreBadgeClass(score)}">${score}% match</span>
      </div>
      <div class="digest-item__meta">
        ${job.company} • ${job.location} • ${job.experience}
      </div>
      <button class="btn btn--secondary btn--sm" onclick="window.open('${job.applyUrl}', '_blank')">Apply Now</button>
    </div>
  `).join('');

  outlet.innerHTML = `
    <article class="digest-email">
      <header class="digest-email__header">
        <h2 class="heading-lg" style="margin-bottom: 4px;">Top 10 Jobs For You — 9AM Digest</h2>
        <p class="body-sm">${dateStr}</p>
      </header>
      <div class="digest-email__body">
        ${itemsHtml}
      </div>
      <footer class="digest-email__footer">
        <p>This digest was generated based on your preferences.</p>
        <p class="simulation-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
      </footer>
    </article>

    <div class="digest-actions">
       <button class="btn btn--secondary" onclick="copyDigestToClipboard()">Copy Digest to Clipboard</button>
       <button class="btn btn--primary" onclick="createEmailDraft()">Create Email Draft</button>
    </div>
  `;
}

function copyDigestToClipboard() {
  const today = new Date().toISOString().split('T')[0];
  const digest = loadDigest(today);
  if (!digest) return;

  const text = digest.jobs.map(({ job, score }, i) => {
    return `${i + 1}. ${job.title} at ${job.company}\n   Score: ${score}% | ${job.location} | Exp: ${job.experience}\n   Apply: ${job.applyUrl}\n`;
  }).join('\n');

  const header = `My 9AM Job Digest - ${today}\n\n`;
  const footer = `\nGenerated via Job Notification Tracker.`;

  navigator.clipboard.writeText(header + text + footer).then(() => {
    alert('Digest copied to clipboard!');
  });
}

function createEmailDraft() {
  const today = new Date().toISOString().split('T')[0];
  const digest = loadDigest(today);
  if (!digest) return;

  const subject = encodeURIComponent("My 9AM Job Digest");
  const body = encodeURIComponent(
    digest.jobs.map(({ job, score }, i) => {
      return `${i + 1}. ${job.title} at ${job.company} (${score}% match)\n   Apply: ${job.applyUrl}`;
    }).join('\n\n')
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function saveDigest(date, digest) {
  localStorage.setItem(`jobTrackerDigest_${date}`, JSON.stringify(digest));
}

function loadDigest(date) {
  const raw = localStorage.getItem(`jobTrackerDigest_${date}`);
  return raw ? JSON.parse(raw) : null;
}

function setupPreferencesInteractions() {
  const slider = document.getElementById('pref-min-score');
  const val = document.getElementById('pref-min-score-val');
  if (slider && val) {
    slider.oninput = () => val.textContent = `${slider.value}%`;
  }

  const saveBtn = document.getElementById('save-prefs');
  if (saveBtn) {
    saveBtn.onclick = () => {
      const prefs = {
        roleKeywords: document.getElementById('pref-role-keywords').value,
        preferredLocations: Array.from(document.getElementById('pref-locations').selectedOptions).map(o => o.value),
        preferredMode: Array.from(document.querySelectorAll('input[name="pref-mode"]:checked')).map(el => el.value),
        experienceLevel: document.getElementById('pref-experience').value,
        skills: document.getElementById('pref-skills').value,
        minMatchScore: parseInt(slider.value)
      };
      savePreferences(prefs);
      alert('Preferences saved successfully!');
      handleNavigation('/dashboard');
    };
  }
}

function computeMatchScore(job, prefs) {
  if (!prefs) return 0;
  let score = 0;

  // Rule 1: Role Keywords
  const keywords = prefs.roleKeywords.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  if (keywords.length) {
    if (keywords.some(kw => job.title.toLowerCase().includes(kw))) score += 25;
    if (keywords.some(kw => job.description.toLowerCase().includes(kw))) score += 15;
  }

  // Rule 2: Locations
  if (prefs.preferredLocations?.includes(job.location)) score += 15;

  // Rule 3: Mode
  if (prefs.preferredMode?.includes(job.mode)) score += 10;

  // Rule 4: Experience
  if (prefs.experienceLevel === job.experience) score += 10;

  // Rule 5: Skills overlap
  const userSkills = prefs.skills.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  const jobSkills = job.skills.map(s => s.toLowerCase());
  if (userSkills.some(s => jobSkills.includes(s))) score += 15;

  // Rule 6: Recency
  if (job.postedDaysAgo <= 2) score += 5;

  // Rule 7: Source
  if (job.source.toLowerCase() === 'linkedin') score += 5;

  return Math.min(score, 100);
}

function computeScoresForJobs(jobs, prefs) {
  return jobs.map(job => ({
    job,
    score: computeMatchScore(job, prefs)
  }));
}

function getScoreBadgeClass(score) {
  if (score >= 80) return 'badge--score-strong';
  if (score >= 60) return 'badge--score-medium';
  if (score >= 40) return 'badge--score-light';
  return 'badge--score-muted';
}

function renderJobsList(scoredJobs, savedIdsSet) {
  if (scoredJobs.length === 0) {
    return `
      <div class="jobs-list__empty">
        <div class="empty-state__icon">🔍</div>
        <h2 class="heading-lg">No roles match your criteria</h2>
        <p class="body-md">Adjust filters or lower your threshold to see more opportunities.</p>
      </div>
    `;
  }

  return scoredJobs.map(({ job, score }) => {
    const isSaved = savedIdsSet.has(job.id);
    const postedLabel = job.postedDaysAgo === 0 ? "Today" : `${job.postedDaysAgo}d ago`;

    return `
      <article class="card job-card" data-job-id="${job.id}">
        <header class="job-card__header">
          <div>
            <h3 class="heading-md job-card__title">${job.title}</h3>
            <p class="job-card__company">${job.company} • ${job.location} • ${job.mode}</p>
          </div>
          <div class="job-card__badge-stack">
            <div style="display: flex; gap: 8px;">
               <span class="badge ${getScoreBadgeClass(score)}">${score}% match</span>
               <span class="badge badge--source">${job.source}</span>
            </div>
            <span class="badge badge--days">${postedLabel}</span>
          </div>
        </header>
        <div class="job-card__meta">
          <div class="job-card__meta-item">
             <span>Experience: <strong>${job.experience}</strong></span>
          </div>
          <div class="job-card__meta-item">
             <span>Salary: <strong>${job.salaryRange}</strong></span>
          </div>
        </div>
        <div class="job-card__actions">
          <button class="btn btn--secondary" data-action="view" data-id="${job.id}">View Details</button>
          <button class="btn btn--secondary" data-action="save" data-id="${job.id}" ${isSaved ? 'disabled' : ''}>
            ${isSaved ? "Saved" : "Save Role"}
          </button>
          <button class="btn btn--primary" data-action="apply" data-id="${job.id}">Apply Now</button>
        </div>
      </article>
    `;
  }).join('');
}

function setupFilterEvents() {
  const ids = ['keyword', 'location', 'mode', 'experience', 'sort', 'only-matches'];
  ids.forEach(id => {
    const el = document.getElementById(`filter-${id}`);
    if (el) {
      const event = (id === 'keyword') ? 'input' : 'change';
      el.addEventListener(event, () => {
        if (id === 'only-matches') {
          currentFilters.onlyMatches = el.checked;
        } else {
          currentFilters[id.replace('filter-', '')] = el.value.trim();
        }
        refreshJobs();
      });
    }
  });
}

function refreshJobs() {
  const list = document.getElementById("jobs-list");
  if (!list) return;
  const scored = computeScoresForJobs(JOBS, currentPreferences);
  const filtered = applyFilters(scored, currentFilters, currentPreferences);
  const savedIds = new Set(getSavedJobIds());
  list.innerHTML = renderJobsList(filtered, savedIds);
}

function parseSalary(salaryStr) {
  const matches = salaryStr.match(/(\d+)/g);
  if (!matches) return 0;
  // If it's a range like 10-18, take midpoint. If internship like 15k, take 15.
  if (matches.length >= 2) return (parseInt(matches[0]) + parseInt(matches[1])) / 2;
  return parseInt(matches[0]);
}

function applyFilters(scoredJobs, filters, prefs) {
  let result = scoredJobs.filter(({ job, score }) => {
    const matchesKeyword = !filters.keyword ||
      job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.keyword.toLowerCase());
    const matchesLoc = !filters.location || job.location === filters.location;
    const matchesMode = !filters.mode || job.mode === filters.mode;
    const matchesExp = !filters.experience || job.experience === filters.experience;
    const matchesSource = !filters.source || job.source === filters.source;

    let matchesThreshold = true;
    if (filters.onlyMatches && prefs) {
      matchesThreshold = score >= (prefs.minMatchScore || 0);
    }

    return matchesKeyword && matchesLoc && matchesMode && matchesExp && matchesSource && matchesThreshold;
  });

  if (filters.sort === "latest") {
    result.sort((a, b) => a.job.postedDaysAgo - b.job.postedDaysAgo);
  } else if (filters.sort === "oldest") {
    result.sort((a, b) => b.job.postedDaysAgo - a.job.postedDaysAgo);
  } else if (filters.sort === "score") {
    result.sort((a, b) => b.score - a.score);
  } else if (filters.sort === "salary") {
    result.sort((a, b) => parseSalary(b.job.salaryRange) - parseSalary(a.job.salaryRange));
  }

  return result;
}

function attachJobEvents(container) {
  if (!container) return;
  container.addEventListener("click", (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const jobId = btn.dataset.id;
    const job = JOBS_BY_ID.get(jobId);

    if (action === "view") openJobModal(job);
    if (action === "save") {
      saveJob(jobId);
      btn.textContent = "Saved";
      btn.disabled = true;
    }
    if (action === "apply") window.open(job.applyUrl, "_blank", "noopener");
  });
}

function openJobModal(job) {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `
    <div class="modal">
      <header class="modal__header">
        <div>
          <h2 class="heading-lg modal__title">${job.title}</h2>
          <p class="body-sm">${job.company} • ${job.location} • ${job.mode}</p>
        </div>
        <span class="badge badge--source">${job.source}</span>
      </header>
      <div class="modal__body">
        ${job.description.split('\n').map(p => `<p>${p}</p>`).join('')}
        <div class="chip-list">
          ${job.skills.map(s => `<span class="chip">${s}</span>`).join('')}
        </div>
      </div>
      <div class="modal__footer">
        <button class="btn btn--secondary" onclick="this.closest('.modal-backdrop').remove()">Close</button>
        <button class="btn btn--primary" onclick="window.open('${job.applyUrl}', '_blank'); this.closest('.modal-backdrop').remove()">Apply Now</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
}

function getSavedJobIds() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_SAVED) || "[]");
}

function saveJob(id) {
  const ids = getSavedJobIds();
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(ids));
  }
}

function loadPreferences() {
  const raw = localStorage.getItem(STORAGE_KEY_PREFS);
  return raw ? JSON.parse(raw) : null;
}

function savePreferences(prefs) {
  localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(prefs));
}

function handleNavigation(pathname) {
  window.history.pushState({}, "", pathname);
  renderRoute(pathname);
}

function updateActiveNav(pathname) {
  document.querySelectorAll(".main-nav__link").forEach(link => {
    link.classList.toggle("main-nav__link--active", link.dataset.route === pathname);
  });
}

function setupNav() {
  document.querySelectorAll(".main-nav__link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      handleNavigation(link.dataset.route);
    });
  });
  window.onpopstate = () => renderRoute(window.location.pathname);
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  renderRoute(window.location.pathname || "/");
});
