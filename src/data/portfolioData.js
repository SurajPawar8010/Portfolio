/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION — SURAJ BALU PAWAR
 * ====================================================================
 * Synchronized with Official Resume:
 * Backend-focused Software Engineer | Java 17 | Spring Boot 3 | PostgreSQL 17 |
 * Apache Kafka | Redis | FFmpeg (HLS) | Spring Cloud | WebSockets | React.js
 */

export const personalData = {
  name: "Suraj Balu Pawar",
  displayName: "Suraj Pawar",
  greeting: "Hello, I am",
  tagline: "Backend-Focused Software Engineer | Java 17 • Spring Boot 3 • Kafka • PostgreSQL",
  roles: [
    "Backend Software Engineer",
    "Java 17 & Spring Boot 3 Specialist",
    "Event-Driven Microservices (Kafka & Redis)",
    "Automated Media & HLS Streaming (FFmpeg)",
    "Full-Stack Web Developer (React.js)"
  ],
  badge: "Available for Software Engineering Roles & Opportunities",
  location: "Pune, Maharashtra, India",
  timezone: "IST (UTC+05:30)",
  email: "surajbalupawar1@gmail.com",
  phone: "+91-8010613284",
  phoneRaw: "8010613284",
  avatar: "/avatar.jpg?v=3",
  yearsExperience: "1 Year",
  projectsCompleted: "15+",
  satisfiedClients: "100%",
  usersImpacted: "1,000+",
  codeCommits: "1,200+",

  bio: "Backend-focused Software Engineer with 1 year of hands-on experience developing and scaling microservices using Java 17, Spring Boot 3, and PostgreSQL. Proficient in event-driven messaging with Apache Kafka, distributed Redis caching, and automated media processing with FFmpeg. Demonstrated success optimizing high-traffic RESTful APIs, securing distributed endpoints, and engineering bulk data ingestion pipelines.",
  
  about: {
    heading: "Backend-focused Software Engineer at Nebula Technology, scaling 15+ microservices with Java 17, Spring Boot 3, PostgreSQL, Apache Kafka, and FFmpeg.",
    paragraphs: [
      "I am a Backend-focused Software Engineer with 1 year of hands-on experience developing and scaling distributed microservices using Java 17, Spring Boot 3, and PostgreSQL 17 at Nebula Technology in Pune, Maharashtra.",
      "At Nebula Technology, I engineered and maintained 15+ RESTful microservices for an Enterprise E-Learning Platform supporting 1,000+ active users. My responsibilities span asynchronous event pipelines using Apache Kafka and Redis (5,000+ daily events with sub-50ms latency), background video transcoding with FFmpeg scaling uploads to 10 GB with <1s HLS playback, and enforcing JWT-based Role-Based Access Control (RBAC) to eliminate critical IDOR vulnerabilities across 100% of student cart and payment endpoints.",
      "Academically, I hold a Bachelor of Computer Science (B.C.S.) with 68% (Graduated 2025) and am currently pursuing my Master of Science (M.Sc.) in Computer Science from Karmaveer Bhaurao Patil (KBP) College, Pandharpur."
    ],
    highlights: [
      { label: "Current Role", desc: "Software Engineer at Nebula Technology, Pune" },
      { label: "Flagship Platform", desc: "Enterprise Learning Management System (LMS) — 15+ Microservices" },
      { label: "Core Stack", desc: "Java 17, Spring Boot 3, Spring Cloud, PostgreSQL 17, Redis" },
      { label: "Events & Media", desc: "Apache Kafka, WebSockets, FFmpeg (HLS Video Slicing)" }
    ]
  },

  socials: {
    github: "https://github.com/SurajPawar8010",
    linkedin: "https://www.linkedin.com/in/suraj-pawar-2a258633b/",
    portfolio: "https://suraj-pawar.vercel.app",
    whatsapp: "https://wa.me/918010613284?text=Hi%20Suraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    phone: "tel:+918010613284",
    email: "mailto:surajbalupawar1@gmail.com",
    twitter: "https://x.com",
    telegram: "https://t.me",
    discord: "https://discord.com"
  },

  resume: {
    downloadUrl: "/Suraj_Pawar_Resume.pdf",
    summary: "Backend-focused Software Engineer with 1 year of hands-on experience developing and scaling microservices using Java 17, Spring Boot 3, and PostgreSQL. Proficient in event-driven messaging with Apache Kafka, distributed Redis caching, and automated media processing with FFmpeg. Demonstrated success optimizing high-traffic RESTful APIs, securing distributed endpoints, and engineering bulk data ingestion pipelines.",
    skillsSummary: "Java 17, Core Java, Spring Boot 3, Spring Cloud (Gateway, Eureka), PostgreSQL 17, Redis, Apache Kafka, WebSockets, FFmpeg (HLS Slicing), React.js, Docker, Swagger / OpenAPI 3.0",
    education: "Master of Science (M.Sc.) & Bachelor of Computer Science (B.C.S.) — KBP College, Pandharpur",
    educationList: [
      {
        degree: "Master of Science (M.Sc.) in Computer Science",
        institution: "KBP College, Pandharpur",
        status: "Pursuing",
        period: "2025 — Present",
        description: "Advanced study in distributed systems architecture, advanced database design, and software engineering methodologies."
      },
      {
        degree: "Bachelor of Computer Science (B.C.S.)",
        institution: "KBP College, Pandharpur",
        status: "Graduated 2025",
        score: "68%",
        period: "June 2022 — May 2025",
        description: "Rigorous computer science curriculum emphasizing Object-Oriented Programming with Java, Relational Databases, Data Structures & Algorithms, and Web Technologies."
      }
    ],
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
    title: "Languages & Backend",
    description: "Core Java, distributed Spring Boot microservices, ORM mapping, and enterprise RESTful web services.",
    skills: [
      { name: "Java 17 & Core Java (OOPs, Collections, Streams)", level: 96, icon: "Cpu", tag: "Expert" },
      { name: "Spring Boot 3 & Microservices Architecture", level: 94, icon: "Server", tag: "Expert" },
      { name: "Spring Cloud (Gateway, Eureka)", level: 90, icon: "Cloud", tag: "Advanced" },
      { name: "Spring Data JPA & Hibernate ORM", level: 92, icon: "Layers", tag: "Expert" },
      { name: "RESTful APIs & Microservices Integration", level: 95, icon: "Network", tag: "Expert" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Caching",
    description: "Production relational schema tuning, high-performance querying, and distributed in-memory caching.",
    skills: [
      { name: "PostgreSQL 17 Database Architecture", level: 94, icon: "Database", tag: "Expert" },
      { name: "Redis Distributed In-Memory Caching", level: 92, icon: "Zap", tag: "Expert" },
      { name: "SQL Query Optimization & Indexing", level: 92, icon: "Database", tag: "Expert" },
      { name: "Database Schema Normalization & ACID", level: 90, icon: "Layers", tag: "Advanced" }
    ]
  },
  {
    id: "messaging",
    title: "Messaging & Media Pipelines",
    description: "Asynchronous event queues, real-time WebSockets, and automated FFmpeg video streaming engines.",
    skills: [
      { name: "Apache Kafka (Event-Driven Messaging & Topics)", level: 92, icon: "Radio", tag: "Expert" },
      { name: "STOMP WebSockets (Real-Time Communication)", level: 90, icon: "Zap", tag: "Advanced" },
      { name: "FFmpeg (HLS Video Slicing & Transcoding)", level: 93, icon: "Sparkles", tag: "Expert" },
      { name: "HLS Adaptive Streaming (.m3u8 and .ts)", level: 92, icon: "Layers", tag: "Expert" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    description: "Building responsive, modern client-side user interfaces with React.js and CSS layouts.",
    skills: [
      { name: "React.js & Modern Component Architecture", level: 90, icon: "Code2", tag: "Advanced" },
      { name: "JavaScript (ES6+, Async/Await)", level: 90, icon: "FileCode", tag: "Advanced" },
      { name: "HTML5 Semantic Markup", level: 95, icon: "Layout", tag: "Expert" },
      { name: "CSS3 (Flexbox, CSS Grid, Responsive Design)", level: 94, icon: "Palette", tag: "Expert" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Security",
    description: "API testing, documentation, version control, and enterprise endpoint security.",
    skills: [
      { name: "Git & GitHub Version Control", level: 92, icon: "GitBranch", tag: "Expert" },
      { name: "Postman API Testing & Automation", level: 94, icon: "Terminal", tag: "Expert" },
      { name: "Swagger / OpenAPI 3.0 Documentation", level: 92, icon: "Boxes", tag: "Expert" },
      { name: "JWT Role-Based Access Control (RBAC)", level: 92, icon: "ShieldCheck", tag: "Expert" },
      { name: "IDOR Vulnerability Elimination", level: 90, icon: "ShieldCheck", tag: "Advanced" }
    ]
  }
];

export const projectsData = [
  {
    id: "enterprise-lms",
    title: "Enterprise Learning Management System (LMS)",
    tagline: "Scalable 15+ Microservices Platform with Java 17, Spring Boot 3, Kafka, Redis, PostgreSQL 17 & FFmpeg",
    category: "Microservices & Cloud",
    featured: true,
    image: "/project1.jpg",
    stats: "Sub-10ms DB • 1,000+ Users • 5,000+ Daily Events",
    client: "Nebula Technology / Enterprise EdTech",
    year: "2025 — Present",
    description: "Flagship Enterprise E-Learning Platform engineered with 15+ RESTful microservices, event-driven Kafka messaging, Redis caching, and automated FFmpeg video transcoding.",
    longDescription: "Engineered and maintained an enterprise-scale distributed e-learning platform supporting 1,000+ active users. Incorporates Spring Cloud Gateway and Eureka for service discovery, Apache Kafka event pipelines for asynchronous event processing, Redis for distributed caching, PostgreSQL 17 for high-speed relational storage, and background FFmpeg media transcoding for adaptive bitrate HLS streaming.",
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "PostgreSQL 17",
      "Apache Kafka",
      "Redis",
      "FFmpeg (HLS)",
      "Spring Cloud Gateway",
      "WebSockets",
      "JWT RBAC",
      "React.js",
      "Swagger/OpenAPI 3.0"
    ],
    metrics: [
      { label: "Active Microservices", value: "15+ Services" },
      { label: "Query Response", value: "< 10ms (PostgreSQL)" },
      { label: "Daily Event Stream", value: "5,000+ Kafka Events" },
      { label: "Video Upload Limit", value: "Up to 10 GB" },
      { label: "HLS Playback Start", value: "< 1s Latency" },
      { label: "Cart Revenue Recovered", value: "15% – 20%" }
    ],
    features: [
      {
        title: "Core API Engineering",
        desc: "Designed RESTful endpoints across distributed Spring Boot services, optimizing PostgreSQL schema queries to achieve sub-10ms response times."
      },
      {
        title: "Event-Driven Abandoned Cart Recovery",
        desc: "Built an automated 24-hour cart recovery pipeline using Spring Scheduled cron jobs, Apache Kafka, and STOMP WebSockets, recovering an estimated 15%–20% of abandoned cart revenue."
      },
      {
        title: "Video Transcoding & HLS Streaming",
        desc: "Built an asynchronous video processing engine with FFmpeg that slices lecture videos up to 10 GB into 2-second .ts segments with master playlists (.m3u8), enabling adaptive bitrate streaming and anti-piracy protection with <1s playback start."
      },
      {
        title: "High-Volume Bulk Data Ingestion",
        desc: "Engineered a high-throughput CSV/Excel student onboarding engine with parallel BCrypt password hashing across CPU cores, accelerating batch onboarding by 3x."
      },
      {
        title: "Online Examination Service",
        desc: "Developed an assessment module featuring dynamic passing percentages, automated score evaluation, and a 3-hour attempt cooldown rule for test integrity."
      },
      {
        title: "Centralized API Gateway Hub",
        desc: "Brought the OpenAPI documentation of 18 microservices together in one place on the Spring Cloud Gateway, using custom routing filters."
      }
    ],
    liveUrl: "https://suraj-pawar.vercel.app",
    githubUrl: "https://github.com/SurajPawar8010"
  },
  {
    id: "ffmpeg-hls-streaming",
    title: "Asynchronous FFmpeg Video Transcoding Engine",
    tagline: "Background Video Slicing & HLS (.m3u8/.ts) Pipeline with Adaptive Bitrate Streaming",
    category: "Media & Streaming",
    featured: true,
    image: "/project2.jpg",
    stats: "Up to 10 GB Uploads • <1s Playback Start",
    client: "E-Learning Media Infrastructure",
    year: "2025",
    description: "Automated media processing pipeline that ingests raw lecture videos, performs background FFmpeg transcoding, and generates anti-piracy HLS segment streams.",
    longDescription: "Eliminated client playback buffering by asynchronously slicing raw educational videos into 2-second .ts segments with master index playlists (.m3u8). Implements non-blocking background queue workers, adaptive bitrate delivery, and secure signed media endpoints that prevent direct video downloading or unauthorized piracy.",
    technologies: ["FFmpeg", "Java 17", "Spring Boot 3", "HLS Streaming", "PostgreSQL 17", "Redis", "REST APIs"],
    metrics: [
      { label: "File Upload Capacity", value: "Up to 10 GB" },
      { label: "Playback Startup", value: "< 1s" },
      { label: "Segment Duration", value: "2s .ts Slices" }
    ],
    liveUrl: "https://suraj-pawar.vercel.app",
    githubUrl: "https://github.com/SurajPawar8010"
  },
  {
    id: "kafka-cart-recovery",
    title: "Event-Driven Cart Recovery & Notification Pipeline",
    tagline: "Asynchronous Pipeline with Apache Kafka, Redis, Scheduled Cron & WebSockets",
    category: "Kafka & Events",
    featured: true,
    image: "/project3.jpg",
    stats: "15%–20% Revenue Recovered • 5k+ Daily Events",
    client: "E-Commerce & Course Enrollment",
    year: "2025",
    description: "Automated event pipeline monitoring checkout drop-offs and triggering scheduled multi-channel re-engagement alerts via Kafka and WebSockets.",
    longDescription: "Orchestrated with Spring Scheduled cron jobs and Apache Kafka event topics to detect uncompleted checkouts after 24 hours. Pushes real-time alerts through STOMP WebSockets and background dispatchers, successfully reclaiming 15%–20% of abandoned cart revenue while decoupling customer-facing checkout services from notification workers.",
    technologies: ["Apache Kafka", "Redis", "Spring Boot 3", "STOMP WebSockets", "PostgreSQL 17", "Spring Scheduling"],
    metrics: [
      { label: "Revenue Recovery", value: "15% – 20%" },
      { label: "Daily Events", value: "5,000+ Events" },
      { label: "Event Latency", value: "< 50ms" }
    ],
    liveUrl: "https://suraj-pawar.vercel.app",
    githubUrl: "https://github.com/SurajPawar8010"
  },
  {
    id: "bulk-data-ingestion",
    title: "High-Volume Student Onboarding Engine",
    tagline: "Multi-Core Parallel CSV/Excel Parser with Multithreaded BCrypt Password Hashing",
    category: "Microservices & Cloud",
    featured: false,
    image: "/project1.jpg",
    stats: "3x Faster Onboarding • Parallel CPU Cores",
    client: "Enterprise Batch Ingestion",
    year: "2025",
    description: "High-throughput batch onboarding engine processing institutional student registries with parallel BCrypt hashing and batch database insertions.",
    longDescription: "Engineered to eliminate bottleneck delays during institution-wide student enrollments. Utilizes Java Streams and ForkJoinPool parallel threads to distribute CPU-intensive BCrypt password hashing across multiple CPU cores, accelerating batch onboarding speeds by 3x with atomic PostgreSQL transactions.",
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL 17", "BCrypt", "ForkJoinPool", "Apache POI"],
    metrics: [
      { label: "Throughput Boost", value: "3x Speedup" },
      { label: "Hashing Strategy", value: "Parallel BCrypt" },
      { label: "Data Integrity", value: "100% ACID" }
    ],
    liveUrl: "https://suraj-pawar.vercel.app",
    githubUrl: "https://github.com/SurajPawar8010"
  },
  {
    id: "gateway-openapi-hub",
    title: "Centralized Microservices API Gateway Hub",
    tagline: "Unified Swagger / OpenAPI 3.0 Documentation & Routing with Spring Cloud Gateway",
    category: "Microservices & Cloud",
    featured: false,
    image: "/project2.jpg",
    stats: "18 Services Unified • Custom Route Filters",
    client: "Enterprise Infrastructure",
    year: "2025",
    description: "Single-entry reverse proxy and API Gateway aggregating documentation, authentication checks, and route filtering across 18 microservices.",
    longDescription: "Configured custom Spring Cloud Gateway routing filters that dynamically discover service instances via Eureka and aggregate interactive OpenAPI 3.0 / Swagger specifications into a consolidated developer dashboard. Centralizes JWT verification and rate limiting at the perimeter.",
    technologies: ["Spring Cloud Gateway", "Eureka", "Swagger / OpenAPI 3.0", "JWT RBAC", "Java 17", "Spring Boot 3"],
    metrics: [
      { label: "Unified Endpoints", value: "18 Microservices" },
      { label: "Route Filter", value: "Zero Downtime" },
      { label: "Security", value: "Perimeter JWT" }
    ],
    liveUrl: "https://suraj-pawar.vercel.app",
    githubUrl: "https://github.com/SurajPawar8010"
  },
  {
    id: "import-export-portal",
    title: "Enterprise Import-Export Operations System",
    tagline: "CRUD Management & Shipment Tracking Platform with Spring Boot & React",
    category: "Full-Stack",
    featured: false,
    image: "/project3.jpg",
    stats: "End-to-End CRUD • Real-Time Tracking",
    client: "Logistics Project (Nebula Technology)",
    year: "2025",
    description: "Enterprise operations portal managing logistics manifests, customs clearances, shipment statuses, and relational documentation.",
    longDescription: "Built during internship tenure at Nebula Technology, delivering complete backend CRUD operations in Java and Spring Boot connected to PostgreSQL, alongside interactive client dashboard pages engineered with React.js, HTML5, and responsive CSS.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React.js", "JavaScript", "HTML5", "CSS3", "Git"],
    metrics: [
      { label: "Operations", value: "Full CRUD" },
      { label: "Response", value: "< 25ms" },
      { label: "Interface", value: "Responsive React" }
    ],
    liveUrl: "https://suraj-pawar.vercel.app",
    githubUrl: "https://github.com/SurajPawar8010"
  }
];

export const experienceData = [
  {
    role: "Software Engineer",
    company: "Nebula Technology",
    location: "Pune, Maharashtra, India",
    period: "Dec 2025 – Present",
    type: "Full-Time",
    description: "Engineered and maintained 15+ RESTful microservices for an Enterprise E-Learning Platform utilizing Java 17, Spring Boot 3, and PostgreSQL, supporting 1,000+ active users.",
    achievements: [
      "Engineered and maintained 15+ RESTful microservices for an Enterprise E-Learning Platform utilizing Java 17, Spring Boot 3, and PostgreSQL, supporting 1,000+ active users.",
      "Implemented asynchronous event pipelines using Apache Kafka and Redis, processing 5,000+ daily notification events with sub-50ms latency while decoupling core services.",
      "Integrated FFmpeg background video transcoding pipelines, scaling file uploads up to 10 GB and generating HLS (.m3u8 and .ts) streams with <1s playback start.",
      "Enforced JWT-based Role-Based Access Control (RBAC) and eliminated critical IDOR vulnerabilities across 100% of student cart and payment endpoints.",
      "Documented REST APIs using Swagger and OpenAPI 3.0."
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "PostgreSQL 17",
      "Apache Kafka",
      "Redis",
      "FFmpeg (HLS)",
      "Spring Cloud (Gateway, Eureka)",
      "WebSockets",
      "JWT RBAC",
      "Swagger / OpenAPI 3.0",
      "Git"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Nebula Technology",
    location: "Pune, Maharashtra, India",
    period: "May 2025 – Nov 2025",
    type: "Internship",
    description: "Received hands-on training in the company's development stack, tools, and coding practices, developing both backend service logic and responsive frontend pages.",
    achievements: [
      "Received hands-on training in the company's development stack, tools and coding practices.",
      "Worked on CRUD operations for an import export project using Java and Spring Boot.",
      "Worked on frontend pages using HTML, CSS and React."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "Postman",
      "Git"
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Science (M.Sc.) in Computer Science",
    institution: "KBP College, Pandharpur",
    status: "Pursuing",
    period: "2025 — Present",
    score: "Enrolled",
    description: "Postgraduate studies specializing in advanced computer science, distributed cloud computing, algorithmic scalability, and modern software architectures."
  },
  {
    degree: "Bachelor of Computer Science (B.C.S.)",
    institution: "KBP College, Pandharpur",
    status: "Graduated 2025",
    period: "June 2022 — May 2025",
    score: "68%",
    description: "Undergraduate curriculum covering Core Java, Object-Oriented Programming (OOPs), Relational Database Management Systems, Data Structures, Web Development, and Software Engineering."
  }
];

export const servicesData = [
  {
    icon: "Server",
    title: "Microservices & Distributed Systems",
    description: "Architecting decoupled, highly scalable RESTful microservices with Java 17, Spring Boot 3, and Spring Cloud Gateway.",
    deliverables: ["15+ Production Microservices", "Spring Cloud Service Discovery", "JWT Role-Based Access Control", "Swagger / OpenAPI 3.0 Specs"]
  },
  {
    icon: "Zap",
    title: "Event-Driven Pipelines & Caching",
    description: "Engineering asynchronous event queues with Apache Kafka and distributed Redis in-memory caching to achieve ultra-low latency.",
    deliverables: ["Kafka Event Topics & Streams", "5,000+ Daily Event Ingestion", "Sub-50ms Pipeline Latency", "Distributed Redis Session Caching"]
  },
  {
    icon: "Sparkles",
    title: "Media Processing & HLS Video Streaming",
    description: "Integrating background FFmpeg transcoding pipelines to convert raw video uploads into secure, adaptive bitrate HLS (.m3u8/.ts) streams.",
    deliverables: ["Up to 10 GB Video Ingestion", "2-Second .ts Slice Transcoding", "< 1s Instant Playback Startup", "Anti-Piracy Video Protection"]
  },
  {
    icon: "Layout",
    title: "Database Optimization & Full-Stack UI",
    description: "Structuring high-performance PostgreSQL 17 relational schemas with sub-10ms queries, paired with reactive React.js client interfaces.",
    deliverables: ["Sub-10ms PostgreSQL Queries", "Bulk CSV/Excel Data Ingestion", "Parallel BCrypt CPU Hashing", "Responsive React.js Client UIs"]
  }
];
