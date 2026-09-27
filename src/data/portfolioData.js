/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION — SURAJ PAWAR
 * ====================================================================
 * Synchronized with official LinkedIn Profile & Credentials:
 * Software Engineer | Java | JDBC | Hibernate | Spring | Spring Boot |
 * JavaScript | React.JS | HTML5 | CSS | MySQL
 */

export const personalData = {
  name: "Suraj Pawar",
  greeting: "Hello, I am",
  tagline: "Software Engineer | Java • Spring Boot • Microservices • React.js",
  roles: [
    "Software Engineer",
    "Java & Spring Boot Specialist",
    "Microservices & Kafka Architect",
    "Full-Stack React.js Developer"
  ],
  badge: "Available for Software Engineering Roles & Opportunities",
  location: "Pune District, Maharashtra, India",
  timezone: "IST (UTC+05:30)",
  email: "surajbalupawar1@gmail.com",
  phone: "+91 8010613284",
  phoneRaw: "8010613284",
  avatar: "/avatar.jpg?v=3",
  yearsExperience: "1+ Years",
  projectsCompleted: "15+",
  satisfiedClients: "100%",
  usersImpacted: "50k+",
  codeCommits: "1,200+",

  bio: "Software Engineer at Nebula Technology, engineering scalable microservices with Core Java, Spring Boot, Apache Kafka, Redis, and modern responsive web applications with React.js.",
  
  about: {
    heading: "Software Engineer at Nebula Technology, delivering robust Java backends, Kafka pipelines, and dynamic React.js frontends.",
    paragraphs: [
      "I am a Software Engineer at Nebula Technology in Pune, Maharashtra. I completed my Bachelor of Science in Entire Computer Science (B.Sc ECS) from Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur in March 2025.",
      "Following my degree, I completed an intensive 6-month Full Stack Developer Internship at Nebula Technology from May 2025 to November 2025, after which I transitioned into my current role as a full-time Software Engineer starting in December 2025.",
      "Currently, I am architecting and developing a large-scale Learning Management System (LMS) using Spring Boot microservices, Apache Kafka for event-driven streaming, Redis for distributed caching, and Docker for containerized deployment, paired with a modern React.js client interface."
    ],
    highlights: [
      { label: "Current Role", desc: "Software Engineer at Nebula Technology, Pune" },
      { label: "Active Project", desc: "Enterprise Learning Management System (LMS)" },
      { label: "Core Stack", desc: "Java, Spring Boot, Microservices, Kafka, Redis, Docker" },
      { label: "Frontend & DB", desc: "React.js, Modern CSS, MySQL Relational Database" }
    ]
  },

  socials: {
    github: "https://github.com/surajbalupawar1-hash",
    linkedin: "https://www.linkedin.com/in/suraj-pawar-2a258633b/",
    whatsapp: "https://wa.me/918010613284?text=Hi%20Suraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    phone: "tel:+918010613284",
    email: "mailto:surajbalupawar1@gmail.com",
    twitter: "https://x.com",
    telegram: "https://t.me",
    discord: "https://discord.com"
  },

  resume: {
    downloadUrl: "/Suraj_Pawar_Resume.pdf",
    skillsSummary: "Core Java, Spring Boot, Microservices Architecture, Apache Kafka, Redis, Docker, Hibernate, JDBC, MySQL, React.js, JavaScript, REST APIs, Git",
    education: "B.Sc (Entire Computer Science) — Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur, Dist-Solapur (June 2022 — March 2025)",
    certifications: [
      {
        id: "commbank-se",
        title: "Introduction to Software Engineering Job Simulation",
        issuer: "Commonwealth Bank",
        platform: "Forage",
        issueDate: "February 21st, 2026",
        description: "Completed practical tasks in building a website, implementing financial cybersecurity standards, styling web applications, and authoring web hosting proposals.",
        tasks: ["Create a Website", "Financial Cybersecurity", "Stylize your Website", "Write a Web Hosting Proposal"],
        enrolmentCode: "2pocDJSGsi3xehgSS",
        userCode: "6998b0cf74e91d57f08b373c",
        pdfUrl: "/certificates/commonwealth-bank-software-engineering.pdf"
      },
      {
        id: "datacom-sd",
        title: "Software Development Job Simulation",
        issuer: "DATACOM",
        platform: "Forage",
        issueDate: "February 21st, 2026",
        description: "Completed practical software development tasks specializing in software review, identifying root causes, and implementing verified bug fixes.",
        tasks: ["Software Review", "Identifying Root Causes & Bug Fixing"],
        enrolmentCode: "CZE5fu5qwysJ8SYED",
        userCode: "6998b0cf74e91d57f08b373c",
        pdfUrl: "/certificates/datacom-software-development.pdf"
      }
    ]
  }
};

export const skillsCategories = [
  {
    id: "backend",
    title: "Java & Microservices Architecture",
    description: "Architecting high-throughput distributed backends, event streams, and enterprise APIs.",
    skills: [
      { name: "Core Java (OOP, Collections, Streams)", level: 95, icon: "Cpu", tag: "Expert" },
      { name: "Spring Boot & Microservices", level: 92, icon: "Server", tag: "Expert" },
      { name: "Apache Kafka (Event-Driven Streaming)", level: 88, icon: "Network", tag: "Advanced" },
      { name: "Hibernate ORM & JPA", level: 88, icon: "Layers", tag: "Advanced" },
      { name: "JDBC (Database Connectivity)", level: 92, icon: "Database", tag: "Expert" },
      { name: "RESTful Web Services & APIs", level: 94, icon: "Network", tag: "Expert" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & Web UI",
    description: "Crafting reactive, beautiful, and fluid client-side web interfaces.",
    skills: [
      { name: "React.js & Hooks", level: 92, icon: "Code2", tag: "Expert" },
      { name: "JavaScript (ES6+, Async/Await)", level: 90, icon: "FileCode", tag: "Expert" },
      { name: "HTML5 Semantic Markup", level: 96, icon: "Layout", tag: "Expert" },
      { name: "CSS3 & Modern Layouts (Flex/Grid)", level: 94, icon: "Palette", tag: "Expert" },
      { name: "Responsive & Mobile-First Design", level: 93, icon: "Sparkles", tag: "Expert" },
      { name: "UI Micro-Animations & State", level: 86, icon: "Zap", tag: "Advanced" }
    ]
  },
  {
    id: "tools",
    title: "Databases, Caching & DevOps",
    description: "In-memory caching, containerization, database modeling, and version control.",
    skills: [
      { name: "Redis (In-Memory Caching & Session Store)", level: 90, icon: "Zap", tag: "Advanced" },
      { name: "Docker (Containerization & Compose)", level: 88, icon: "Box", tag: "Advanced" },
      { name: "MySQL Database & Schema Design", level: 92, icon: "Database", tag: "Expert" },
      { name: "Git & GitHub Version Control", level: 90, icon: "GitBranch", tag: "Advanced" },
      { name: "Postman API Testing", level: 92, icon: "Terminal", tag: "Expert" },
      { name: "Maven Build Tooling", level: 86, icon: "Boxes", tag: "Advanced" }
    ]
  }
];

export const projectsData = [
  {
    id: "enterprise-lms",
    title: "NexLearn — Microservices Learning Management System (LMS)",
    tagline: "High-Throughput Distributed Educational Platform with Spring Boot, Kafka, Redis & React",
    category: "Microservices & Full-Stack",
    featured: true,
    image: "/project1.jpg",
    stats: "Sub-5ms Redis Cache • Real-Time Kafka Streaming",
    client: "Nebula Technology / Enterprise EdTech",
    year: "2025 — 2026 (Active)",
    description: "Enterprise Learning Management System engineered with microservices architecture, featuring Apache Kafka for event-driven asynchronous processing, Redis for distributed caching, and Docker for containerized deployment.",
    longDescription: "Architected with independent Spring Boot microservices handling Course Management, Student Enrollments, Video Progress Tracking, and Notification Services. Employs Apache Kafka for high-throughput asynchronous messaging between services, Redis for distributed session caching and rate-limiting, Docker containers for consistent deployment, and a responsive React.js frontend interface.",
    technologies: ["Core Java", "Spring Boot", "Microservices", "Apache Kafka", "Redis", "Docker", "MySQL", "React.js", "REST APIs", "Hibernate"],
    metrics: [
      { label: "Event Pipeline", value: "Apache Kafka" },
      { label: "Cache Response", value: "< 5ms (Redis)" },
      { label: "Architecture", value: "Dockerized Microservices" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "spring-banking",
    title: "NovaBank — Enterprise Banking & Wallet System",
    tagline: "Secure Full-Stack Banking Suite with Spring Boot, Hibernate & React",
    category: "Java & Full-Stack",
    featured: true,
    image: "/project2.jpg",
    stats: "Sub-50ms Response • ACID Transactions",
    client: "Enterprise FinTech Project",
    year: "2024",
    description: "Full-stack banking and transaction portal featuring secure user authentication, fund transfers, account balance tracking, and real-time transaction ledgers.",
    longDescription: "Engineered with Spring Boot REST microservices and Hibernate ORM connecting to a MySQL database with strict transaction isolation (ACID). The frontend is a reactive React.js single-page application with responsive financial widgets.",
    technologies: ["Core Java", "Spring Boot", "Hibernate", "MySQL", "React.js", "REST APIs", "CSS3"],
    metrics: [
      { label: "Security", value: "JWT Auth" },
      { label: "Transaction Speed", value: "< 45ms" },
      { label: "Data Integrity", value: "100% ACID" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "omni-commerce",
    title: "OmniCart — E-Commerce & Inventory Management",
    tagline: "Scalable Online Retail Platform with Spring Boot Backend & React UI",
    category: "Full-Stack Web",
    featured: true,
    image: "/project3.jpg",
    stats: "5,000+ SKU Catalog • Instant Search",
    client: "Retail Systems",
    year: "2024",
    description: "Production-grade e-commerce application supporting product catalog browsing, cart operations, order placement, and merchant inventory control.",
    longDescription: "Developed using Spring Boot, Spring Data JPA, and MySQL on the backend, communicating through clean RESTful APIs with an interactive React frontend equipped with instant filtering and responsive cart modals.",
    technologies: ["React.js", "Java", "Spring Boot", "Hibernate", "JDBC", "MySQL", "HTML5/CSS3"],
    metrics: [
      { label: "Product Queries", value: "< 30ms" },
      { label: "Cart Latency", value: "Real-time" },
      { label: "Database", value: "MySQL 8.0" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "mediconnect-portal",
    title: "MediCare — Clinic & Doctor Appointment Hub",
    tagline: "Patient Management & Schedule Automation Platform",
    category: "Java & Full-Stack",
    featured: false,
    image: "/project1.jpg",
    stats: "Automated Booking • Role-Based Access",
    client: "Healthcare Solutions",
    year: "2023",
    description: "Streamlined medical booking portal connecting patients with specialized physicians, complete with doctor schedule management and medical history records.",
    longDescription: "Employs Core Java, JDBC, and Spring Boot to handle relational entity mappings, appointment slot validations, and administrative reporting with a clean, patient-centric React.js interface.",
    technologies: ["Core Java", "Spring MVC", "JDBC", "MySQL", "React.js", "CSS3", "Postman"],
    metrics: [
      { label: "Booking Speed", value: "Instant" },
      { label: "Uptime", value: "99.9%" },
      { label: "Architecture", value: "RESTful MVC" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "task-nexus",
    title: "TaskNexus — Collaborative Project Management",
    tagline: "Kanban Board & Team Sprint Tracking Application",
    category: "Full-Stack Web",
    featured: false,
    image: "/project2.jpg",
    stats: "Real-time Task Drag & Drop",
    client: "Agile Development Teams",
    year: "2024",
    description: "Agile sprint management workspace with interactive Kanban boards, task assignment, priority tagging, and sprint burndown tracking.",
    longDescription: "Built with a Spring Boot REST API layer and MySQL persistence, featuring a sleek React frontend with smooth interactive drag-and-drop mechanics and optimistic UI updates.",
    technologies: ["React.js", "JavaScript (ES6+)", "Spring Boot", "Hibernate", "MySQL", "CSS3"],
    metrics: [
      { label: "State Updates", value: "Sub-16ms" },
      { label: "Test Coverage", value: "JUnit & Postman" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "aura-dining",
    title: "BistroAura — Restaurant Reservation & Menu System",
    tagline: "Interactive Table Booking & Digital Dining Experience",
    category: "Full-Stack Web",
    featured: false,
    image: "/project3.jpg",
    stats: "Interactive Seating Plan",
    client: "Hospitality Industry",
    year: "2023",
    description: "Digital restaurant management platform allowing guests to view visual table layouts, reserve dining times, and browse dynamic digital menus.",
    longDescription: "Powered by Java, JDBC database connectivity, and Spring MVC services paired with a responsive modern React interface styled with glassmorphic cards and smooth transitions.",
    technologies: ["Core Java", "JDBC", "MySQL", "React.js", "HTML5", "CSS3"],
    metrics: [
      { label: "Mobile Score", value: "99/100" },
      { label: "Booking Flow", value: "3 Steps" }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  }
];

export const experienceData = [
  {
    role: "Software Engineer",
    company: "Nebula Technology",
    location: "Pune, Maharashtra, India",
    period: "Dec 2025 — Present",
    type: "Full-Time",
    description: "Designing, engineering, and maintaining scalable enterprise software solutions. Currently architecting an enterprise Learning Management System (LMS) utilizing Spring Boot microservices, Apache Kafka for event-driven asynchronous messaging, Redis for distributed caching, and Docker for containerized deployment.",
    achievements: [
      "Promoted to full-time Software Engineer following exceptional performance during 6-month full-stack development internship.",
      "Lead backend microservices architecture for the flagship Learning Management System (LMS), decoupling course delivery, enrollment workflows, and notification services.",
      "Engineered Apache Kafka event streams to handle high-throughput asynchronous student enrollment processing and event notifications.",
      "Implemented Redis in-memory caching for frequently accessed course catalogs and session tokens, reducing database latency by over 60%.",
      "Containerized microservices with Docker and Docker Compose for consistent local development and production deployments.",
      "Collaborate across cross-functional engineering teams using Git, code reviews, and Agile sprint workflows."
    ],
    technologies: ["Core Java", "Spring Boot", "Microservices", "Apache Kafka", "Redis", "Docker", "Hibernate", "JDBC", "React.js", "JavaScript", "MySQL", "REST APIs", "Git"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Nebula Technology",
    location: "Pune, Maharashtra, India",
    period: "May 2025 — Nov 2025",
    type: "Internship (6 Months)",
    description: "Completed an intensive 6-month full-stack development internship, engineering interactive client-facing modules and scalable backend API integrations.",
    achievements: [
      "Developed responsive frontend features and dashboards using React.js, modern CSS layouts, and REST API consumption.",
      "Assisted in backend REST API design, endpoint testing via Postman, and MySQL relational database queries.",
      "Diagnosed and resolved system bugs, improved user interface responsiveness, and implemented clean code patterns."
    ],
    technologies: ["React.js", "Core Java", "Spring MVC", "JavaScript", "MySQL", "HTML5", "CSS3", "Postman", "Git"]
  },
  {
    role: "B.Sc (ECS) Computer Science Graduate",
    company: "Karmaveer Bhaurao Patil Mahavidyalaya",
    location: "Pandharpur, Dist-Solapur, Maharashtra",
    period: "June 2022 — March 2025",
    type: "B.Sc in Entire Computer Science",
    description: "Completed rigorous 3-year degree curriculum specializing in Entire Computer Science, covering core programming paradigms, algorithms, databases, and software design.",
    achievements: [
      "Completed comprehensive academic and practical coursework in Core Java, Object-Oriented Programming, and Data Structures.",
      "Mastered Relational Database Management Systems (RDBMS) with MySQL, SQL schema design, and normalization.",
      "Developed academic capstone software projects showcasing end-to-end full-stack principles and software engineering best practices."
    ],
    technologies: ["Core Java", "C++", "Data Structures & Algorithms", "DBMS / SQL", "Web Development", "Operating Systems"]
  }
];

export const servicesData = [
  {
    icon: "Layout",
    title: "Full-Stack Java & React Development",
    description: "Designing end-to-end web applications combining robust Spring Boot backends with reactive, responsive React.js client interfaces.",
    deliverables: ["Modern React.js SPAs", "Spring Boot Backend Services", "Hibernate ORM Integration", "Responsive Mobile-First UI"]
  },
  {
    icon: "Server",
    title: "RESTful API Engineering",
    description: "Building scalable, well-documented, and secure RESTful web services with comprehensive validation and error handling.",
    deliverables: ["Spring MVC REST Endpoints", "JSON Payload Serialization", "Postman API Documentation", "Role-Based Authentication"]
  },
  {
    icon: "Database",
    title: "Database Modeling & JDBC Integration",
    description: "Structuring relational databases in MySQL, optimizing SQL queries, and implementing efficient data access layers.",
    deliverables: ["MySQL Schema Architecture", "JDBC Connectivity", "Hibernate Entity Mappings", "Data Integrity & ACID Support"]
  },
  {
    icon: "Sparkles",
    title: "Modern Frontend & UI Craftsmanship",
    description: "Creating silky-smooth, interactive user interfaces with HTML5, CSS3, modern JavaScript, and component-driven architecture.",
    deliverables: ["Pixel-Perfect Styling", "Subtle Micro-Animations", "Cross-Browser Compatibility", "Performance & Fast Load Times"]
  }
];
