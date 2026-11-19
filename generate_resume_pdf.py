import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    ListFlowable,
    ListItem
)
from reportlab.pdfgen import canvas

def build_pdf(filename="public/Suraj_Pawar_Resume.pdf"):
    # Target 1 page: letter size is 612 x 792 pt
    # Top/Bottom margins: 32 pt, Left/Right: 36 pt
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Base text styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=1,  # Center
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=3
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1,  # Center
        textColor=colors.HexColor('#334155'),
        spaceAfter=10
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=7,
        spaceAfter=2,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=3
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=3,
        spaceAfter=2
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=2
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>SURAJ BALU PAWAR</b>", title_style))
    contact_text = (
        '+91-8010613284 &nbsp;|&nbsp; '
        '<a href="mailto:surajbalupawar1@gmail.com" color="#2563eb"><u>surajbalupawar1@gmail.com</u></a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/suraj-pawar-2a258633b/" color="#2563eb"><u>LinkedIn</u></a> &nbsp;|&nbsp; '
        '<a href="https://suraj-pawar.vercel.app" color="#2563eb"><u>Portfolio</u></a>'
    )
    story.append(Paragraph(contact_text, contact_style))

    # Divider macro
    def add_divider():
        return HRFlowable(
            width="100%",
            thickness=0.8,
            color=colors.HexColor('#334155'),
            spaceBefore=1,
            spaceAfter=4
        )

    # 2. Professional Summary
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", section_heading))
    story.append(add_divider())
    summary_text = (
        "Backend-focused Software Engineer with 1 year of hands-on experience developing and scaling "
        "microservices using Java 17, Spring Boot 3, and PostgreSQL. Proficient in event-driven messaging with "
        "Apache Kafka, distributed Redis caching, and automated media processing with FFmpeg. Demonstrated "
        "success optimizing high-traffic RESTful APIs, securing distributed endpoints, and engineering bulk data "
        "ingestion pipelines."
    )
    story.append(Paragraph(summary_text, body_style))

    # 3. Technical Skills
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_heading))
    story.append(add_divider())
    skills = [
        "<b>• Languages &amp; Backend:</b> Java 17, Core Java, OOPs, Collections, Spring Boot 3, Spring Cloud (Gateway, Eureka), Spring Data JPA, Hibernate, RESTful APIs",
        "<b>• Databases &amp; Caching:</b> PostgreSQL 17, Redis",
        "<b>• Messaging &amp; Media:</b> Apache Kafka, WebSockets, FFmpeg (HLS Video Slicing &amp; Transcoding)",
        "<b>• Frontend &amp; UI:</b> React.js, JavaScript, HTML5, CSS3",
        "<b>• Developer Tools:</b> Git/Github, Postman, Swagger / OpenAPI 3.0"
    ]
    for sk in skills:
        story.append(Paragraph(sk, bullet_style))

    # 4. Work Experience
    story.append(Paragraph("<b>WORK EXPERIENCE</b>", section_heading))
    story.append(add_divider())

    # Role 1
    story.append(Paragraph("<b>Software Engineer</b> | Nebula Technology, Pune | Dec 2025 – Present", job_title_style))
    exp1_bullets = [
        "• Engineered and maintained 15+ RESTful microservices for an Enterprise E-Learning Platform utilizing Java 17, Spring Boot 3, and PostgreSQL, supporting 1,000+ active users.",
        "• Implemented asynchronous event pipelines using Apache Kafka and Redis, processing 5,000+ daily notification events with sub-50ms latency while decoupling core services.",
        "• Integrated FFmpeg background video transcoding pipelines, scaling file uploads up to 10 GB and generating HLS (.m3u8 and .ts) streams with &lt;1s playback start.",
        "• Enforced JWT-based Role-Based Access Control (RBAC) and eliminated critical IDOR vulnerabilities across 100% of student cart and payment endpoints.",
        "• Documented REST APIs using Swagger and OpenAPI 3.0."
    ]
    for b in exp1_bullets:
        story.append(Paragraph(b, bullet_style))

    # Role 2
    story.append(Paragraph("<b>Software Engineer Intern</b> | Nebula Technology, Pune | May 2025 – Nov 2025", job_title_style))
    exp2_bullets = [
        "• Received hands-on training in the company's development stack, tools and coding practices.",
        "• Worked on CRUD operations for an import export project using Java and Spring Boot.",
        "• Worked on frontend pages using HTML, CSS and React."
    ]
    for b in exp2_bullets:
        story.append(Paragraph(b, bullet_style))

    # 5. Projects
    story.append(Paragraph("<b>PROJECTS</b>", section_heading))
    story.append(add_divider())

    story.append(Paragraph("<b>Enterprise Learning Management System (LMS)</b> | Java 17, Spring Boot 3, Kafka, Redis, PostgreSQL, FFmpeg", job_title_style))
    proj_bullets = [
        "• <b>Core API Engineering:</b> Designed RESTful endpoints across distributed Spring Boot services, optimizing PostgreSQL schema queries to achieve sub-10ms response times.",
        "• <b>Event-Driven Abandoned Cart Recovery:</b> Built an automated 24-hour cart recovery pipeline using Spring Scheduled cron jobs, Apache Kafka, and STOMP WebSockets, recovering an estimated 15%–20% of abandoned cart revenue.",
        "• <b>Video Transcoding &amp; HLS Streaming:</b> Built an asynchronous video processing engine with FFmpeg that slices lecture videos into 2-second .ts segments with master playlists, enabling adaptive bitrate streaming and anti-piracy protection.",
        "• <b>High-Volume Bulk Data Ingestion:</b> Engineered a high-throughput CSV/Excel student onboarding engine with parallel BCrypt password hashing across CPU cores, accelerating batch onboarding by 3x.",
        "• <b>Online Examination Service:</b> Developed an assessment module featuring dynamic passing percentages, automated score evaluation, and a 3-hour attempt cooldown rule for test integrity.",
        "• <b>Centralized API Gateway Hub:</b> Brought the OpenAPI documentation of 18 microservices together in one place on the Gateway, using custom routing filters."
    ]
    for b in proj_bullets:
        story.append(Paragraph(b, bullet_style))

    # 6. Education
    story.append(Paragraph("<b>EDUCATION</b>", section_heading))
    story.append(add_divider())
    edu_lines = [
        "<b>Master of Science (M.Sc.) in Computer Science</b> | KBP College, Pandharpur | Pursuing",
        "<b>Bachelor of Computer Science (B.C.S.)</b> | KBP College, Pandharpur | 68% | Graduated 2025"
    ]
    for edu in edu_lines:
        story.append(Paragraph(edu, bullet_style))

    doc.build(story)
    print("PDF generation complete:", filename)

if __name__ == "__main__":
    build_pdf()
