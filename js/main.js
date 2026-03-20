/**
 * DICCIONARIO DE TRADUCCIONES
 * Optimizando terminología técnica para perfiles de Ingeniería Civil en Computación
 */
const T = {
    es: {
        // Hero & Nav
        subtitle: 'Ingeniero Civil en Computación',
        heroDesc: 'Ingeniero Civil en Computación con Minor en Ciencia de Datos. Especializado en desarrollo Full Stack y entrenamiento de modelos de IA.',
        cvEs: 'Descargar CV (ES)',
        cvEn: 'Descargar CV (EN)',
        nav_exp: 'Experiencia',
        nav_proj: 'Proyectos',
        nav_skills: 'Habilidades',
        nav_edu: 'Educación',

        // Educación
        eduTitle: 'Educación <span>Académica</span>',
        eduSub: 'Formación en ingeniería y especializaciones en ciencia de datos.',
        edu1_title: 'Ingeniería Civil en Computación',
        edu_university: 'Universidad de Talca · Chile',
        edu1_desc: 'Enfoque en ingeniería de software, arquitectura de sistemas y gestión de proyectos tecnológicos.',
        edu1_project: '<strong>Proyecto de Título:</strong> Explicabilidad para Series de Tiempo en Clasificación: Visualización Web y Modelos ARIMA, LSTM, GRU y Autoencoders para Datos de Electrocardiogramas.',
        edu2_title: 'Minor en Ciencia de Datos',
        edu2_desc: 'Especialización técnica avanzada en Machine Learning, Big Data y Modelamiento Estadístico.',

        // Experiencia Profesional (Cronológica)
        expTitle: 'Experiencia <span>Profesional</span>',
        expSub: 'Trayectoria laboral y de consultoría técnica.',
        pf_title: 'Ingeniero de Software (Práctica Profesional)',
        pf_date: 'Ene 2026 – Feb 2026',
        pf1: 'Digitalicé procesos críticos de mantenimiento, optimizando el seguimiento y la toma de decisiones basada en datos.',
        pf2: 'Implementé modelos estadísticos en Python para la proyección de fallas y tiempo planificado de activos.',
        pf3: 'Diseñé y desarrollé el Sistema de Planificación de Mantenimiento (SPM) para control de KPIs y presupuestos.',
        pf4: 'Arquitectura Full Stack: React + Express + TypeScript sobre base de datos Oracle EAM.',

        iansa2_title: 'Ingeniero de Software (Freelance)',
        iansa2_date: 'Ago 2025',
        iansa2_1: 'Diseñé módulos adicionales para el Gestor de Activos, optimizando la trazabilidad de recursos críticos.',
        iansa2_2: 'Implementé auditorías técnicas bajo el modelo de seguridad CIA (Confidencialidad, Integridad, Disponibilidad).',
        iansa2_3: 'Gestión de despliegue en servidores Linux para asegurar la continuidad operativa.',

        iansa1_title: 'Ingeniero de Software (Práctica Profesional)',
        iansa1_date: 'Ene 2025 – Feb 2025',
        iansa1_1: 'Diseño y desarrollo integral del Sistema Gestor de Activos Tecnológicos con Laravel y MySQL.',
        iansa1_3: 'Configuración de entorno de producción en servidores Linux con Nginx.',

        outlier_title: 'Contratista Independiente — Especialista en IA',
        outlier_company: 'Outlier · EE.UU. (Remoto)',
        outlier_date: 'Dic 2024 – Mar 2025',
        outlier1: 'Optimización de LLMs mediante entrenamiento RLHF y auditoría de código complejo.',
        outlier2: 'Diseño de desafíos técnicos avanzados (Chivas ST) para evaluar razonamiento algorítmico en IA.',
        outlier3: 'Evaluación de capacidades de Function Calling e integración con APIs globales.',

        ta_title: 'Ayudante de Cátedra',
        ta_date: 'Mar 2023 – Dic 2025',
        ta1: 'Instrucción técnica en Algoritmos, Estructuras de Datos, Redes y Programación Avanzada.',
        ta2: 'Liderazgo académico y evaluación de proyectos de software complejos.',

        // Proyectos
        projTitle: 'Proyectos <span>Destacados</span>',
        projSub: 'Sistemas desarrollados en contextos industriales, de investigación e independientes.',
        spm_title: 'Sistema de Planificación de Mantenimiento',
        svecg_title: 'Sistema de Visualización y Análisis de ECG',
        sgat_title: 'Gestor de Activos Tecnológicos',
        outlier_proj_title: 'Optimización de Modelos de IA (LLMs)',
        autoencoder_title: 'Autoencoder GRU para ECG',
        anomalias_title: 'Detección de Anomalías Cardíacas',
        tareas_title: 'Sistema de Gestión de Tareas (Full Stack)',
        mercadito_title: 'E-commerce (Arquitectura de Microservicios)',
        gps_title: 'Seguimiento de Activos mediante QR',
        gps_role: 'Arquitecto Backend & Datos',
        monopolio_title: 'Motor de Juego Concurrente en Tiempo Real',
        monopolio_role: 'Desarrollador Backend',
        horarios_title: 'Gestión de Horarios Académicos (Dockerizado)',
        horarios_role: 'Líder Técnico & Full Stack',
        tablero_title: 'Control IoT de Matriz LED (Web)',
        tablero_role: 'Desarrollador Frontend & IoT',
        // --- TRADUCCIONES DE PROYECTOS ---
        spm_desc: 'Diseñé y desarrollé una plataforma web integrada con Oracle EAM para automatizar la planificación de mantenimiento y optimizar la asignación de recursos.',
        spm_f1: 'Dashboard para seguimiento de órdenes de trabajo y estado operacional.',
        spm_f2: 'Planificación automática con interfaz tipo Gantt.',
        spm_f3: 'Indicadores de confiabilidad operacional (MTTR y frecuencia de fallas).',
        spm_f4: 'Seguridad OWASP (Helmet.js, JWT) y exportación nativa a Excel.',
        svecg_desc: 'Desarrollé una plataforma de visualización ECG con detección automática de anomalías mediante Deep Learning e interoperabilidad clínica basada en HL7 FHIR.',
        svecg_f1: 'Detección de anomalías mediante modelo Autoencoder GRU pre-entrenado.',
        svecg_f2: 'Explicabilidad de predicciones clínicas mediante algoritmos SHAP.',
        svecg_f3: 'Implementación de interoperabilidad mediante recursos HL7 FHIR usando HAPI FHIR.',
        svecg_f4: 'Arquitectura distribuida en microservicios independientes y API Gateway, desplegada en Google Cloud.',
        sgat_desc: 'Diseñé y desarrollé un sistema corporativo para gestión y trazabilidad de activos tecnológicos, fortaleciendo control interno y auditoría técnica.',
        sgat_f1: 'Clasificación de activos empresariales por Confidencialidad, Integridad y Disponibilidad.',
        sgat_f2: 'Panel de control reactivo con Livewire sin recargas de página.',
        sgat_f3: 'Gestión de roles, permisos y exportación estructurada de información.',
        sgat_f4: 'Despliegue configurado en servidores Linux corporativos con Nginx.',
        outlier_proj_desc: 'Participé en evaluación técnica de modelos de lenguaje mediante RLHF, auditoría de código y validación de capacidades de razonamiento en escenarios reales.',
        outlier_proj_f1: 'Auditoría de código complejo para optimización de razonamiento lógico.',
        outlier_proj_f2: 'Diseño de desafíos técnicos para evaluación de modelos.',
        outlier_proj_f3: 'Evaluación experta de integración de herramientas externas y APIs.',
        ae_desc: 'Entrené un modelo Autoencoder GRU sobre PTB-XL para detección de patrones anómalos en señales ECG (F1-score: 0.926).',
        ae_f1: 'Arquitectura Autoencoder basada en capas GRU recurrentes.',
        ae_f2: 'Algoritmo de clasificación con umbral automático de Otsu (F1-score: 0.926).',
        ae_f3: 'Doble filtrado de pureza de datos mediante Correlación de Pearson e Isolation Forest.',
        ae_f4: 'Pipeline científico documentado desde filtrado pasa-banda hasta el modelo pre-entrenado.',
        anom_desc: 'Algoritmo predictivo basado en Dynamic Time Warping para detectar riesgos cardíacos en deportistas de alto rendimiento mediante señales ECG.',
        anom_f1: 'Alta sensibilidad en detección experimental de patrones atípicos sobre señales ECG de deportistas.',
        anom_f2: 'Implementación de KNN con DTW para comparación de señales de longitud variable.',
        anom_f3: 'Pre-procesamiento avanzado: normalización inter-base y re-muestreo a 500 Hz.',
        anom_f4: 'Extracción de características estadísticas y reducción de dimensionalidad con PCA.',
        tareas_desc: 'Sistema full stack con arquitectura modular y autenticación JWT.',
        tareas_f1: 'Flujo completo de CRUD con validaciones de esquema TypeORM.',
        tareas_f2: 'Autenticación segura de usuarios mediante JWT y protección de rutas.',
        tareas_f3: 'Interfaz de usuario reactiva con filtros dinámicos por estado de tarea.',
        tareas_f4: 'Infraestructura contenerizada para despliegue rápido y consistente.',
        gps_desc: 'Sistema de geolocalización pasiva mediante códigos QR dinámicos que permite el reporte y seguimiento geográfico de mascotas extraviadas.',
        gps_f1: 'Generación de identificadores QR únicos vinculados a perfiles de mascotas.',
        gps_f2: 'Captura de geolocalización automática al escanear el QR y notificación al dueño.',
        gps_f3: 'Visualización en mapa interactivo con historial de reportes.',
        gps_f4: 'Backend relacional con Prisma ORM y PostgreSQL.',
        mercad_desc: 'E-commerce escalable con servicios independientes distribuidos, soportando clientes en web y aplicaciones nativas Android simultáneamente.',
        mercad_f1: 'Arquitectura de microservicios con catálogo, pedidos e identidad desacoplados.',
        mercad_f2: 'Soporte multiplataforma: Cliente Web (Angular) y Android Nativo (Java).',
        mercad_f3: 'Persistencia relacional y comunicación mediante APIs REST.',
        mercad_f4: 'Gestión de estados complejos en carrito de compras y órdenes de pedido.',
        monop_desc: 'Aplicación multijugador en tiempo real con sincronización mediante sockets.',
        monop_f1: 'Manejo de concurrencia mediante eventos asíncronos y sockets en tiempo real.',
        monop_f2: 'Motor de reglas completo y enrutamiento bidireccional de acciones.',
        monop_f3: 'Persistencia de estado distribuida con base de datos NoSQL.',
        monop_f4: 'Sincronización de clientes interactivos en una Single Page Application.',
        horarios_desc: 'Solución integral para la reserva y gestión automatizada de horarios académicos basada en contenedores.',
        horarios_f1: 'Despliegue Multi-contenedor con Docker Compose y redes aisladas.',
        horarios_f2: 'Gestión jerárquica de perfiles y agenda de atenciones personalizadas.',
        horarios_f3: 'Automatización de scripts (entrypoint) para migraciones limpias y seeders.',
        horarios_f4: 'Backend MVC y manejo transaccional de estados de reservas.',
        tabl_desc: 'Plataforma IoT para telemetría y control remoto de hardware, encolando y renderizando mensajes customizados en matriz LED conectada.',
        tabl_f1: 'Sistema de colas asíncronas para visualización de caracteres en el hardware físico.',
        tabl_f2: 'Integración Serial Port para sincronización en tiempo real CPU-Microcontrolador.',
        tabl_f3: 'Editor web de componentes con persistencia en Prisma ORM.',
        tabl_f4: 'Validación estricta de payloads para prevenir desbordes de memoria en Arduino.',


        // Habilidades
        skillsTitle: 'Habilidades <span>Técnicas</span>',
        skillsSub: 'Tecnologías aplicadas en producción y proyectos de investigación.',
        langTitle: 'Idiomas',
        lang_es: 'Español (Nativo)',
        lang_en: 'Inglés (B2)',

        // Etiquetas (Badges)
        badge_industrial: 'Producción Industrial',
        badge_research: 'IA & Investigación',
        badge_academic: 'Formación Técnica',
        badge_global: 'Consultoría Global',

        // UI Común
        tech_details: 'Stack Completo',
        hide_details: 'Ocultar Detalles',
        btn_demo: 'Demo',
        btn_arch: 'Arquitectura',
        load_more: 'Ver Más Proyectos',
        hide_projects: 'Ver Menos Proyectos'
    },
    en: {
        // Hero & Nav
        subtitle: 'Computer Science Engineer',
        heroDesc: 'Software Engineer with a Minor in Data Science. Specialized in Full Stack development and AI model training.',
        cvEs: 'Download CV (ES)',
        cvEn: 'Download CV (EN)',
        nav_exp: 'Experience',
        nav_proj: 'Projects',
        nav_skills: 'Skills',
        nav_edu: 'Education',

        // Education
        eduTitle: 'Academic <span>Education</span>',
        eduSub: 'Engineering degree and specializations in data science.',
        edu1_title: 'B.S. in Computer Science & Engineering',
        edu_university: 'Universidad de Talca · Chile',
        edu1_desc: 'Focused on software engineering, systems architecture, and technology project management.',
        edu1_project: '<strong>Thesis:</strong> Clinical Interoperability (HL7 FHIR) and cardiac anomaly detection using IA.',
        edu2_title: 'Minor in Data Science',
        edu2_desc: 'Advanced technical specialization in Machine Learning, Big Data, and Statistical Modeling.',

        // Professional Experience
        expTitle: 'Professional <span>Experience</span>',
        expSub: 'Work history and technical consulting.',
        pf_title: 'Software Engineer (Professional Internship)',
        pf_date: 'Jan 2026 – Feb 2026',
        pf1: 'Digitalized critical maintenance processes, optimizing data-driven decision-making and tracking.',
        pf2: 'Implemented statistical models in Python for failure forecasting and asset planning.',
        pf3: 'Designed and developed the Maintenance Planning System (SPM) to monitor KPIs and budgets.',
        pf4: 'Full Stack Architecture: React + Express + TypeScript on Oracle EAM database.',

        iansa2_title: 'Software Engineer (Freelance)',
        iansa2_date: 'Aug 2025',
        iansa2_1: 'Designed additional modules for the Asset Manager, improving traceability of critical resources.',
        iansa2_2: 'Implemented technical audits under the CIA security model.',
        iansa2_3: 'Managed deployment on Linux servers to ensure operational continuity.',

        iansa1_title: 'Software Engineer (Professional Internship)',
        iansa1_date: 'Jan 2025 – Feb 2025',
        iansa1_1: 'End-to-end development of the Technological Asset Management System with Laravel & MySQL.',
        iansa1_3: 'Configuration of production environments on Linux servers with Nginx.',

        outlier_title: 'Independent Contractor — AI Specialist',
        outlier_company: 'Outlier · USA (Remote)',
        outlier_date: 'Dec 2024 – Mar 2025',
        outlier1: 'LLM optimization through RLHF training and complex code auditing.',
        outlier2: 'Designed advanced coding challenges (Chivas ST) to benchmark AI algorithmic reasoning.',
        outlier3: 'Evaluated Function Calling capabilities and logical integration with global APIs.',

        ta_title: 'Teaching Assistant',
        ta_date: 'Mar 2023 – Dec 2025',
        ta1: 'Technical instruction in Algorithms, Data Structures, Networks, and Advanced Programming.',
        ta2: 'Academic leadership and evaluation of complex software projects.',

        // Projects
        projTitle: 'Featured <span>Projects</span>',
        projSub: 'Systems built in industrial, research, and independent contexts.',
        spm_title: 'Maintenance Planning System',
        svecg_title: 'ECG Visualization & Analysis System',
        sgat_title: 'Technological Asset Manager',
        outlier_proj_title: 'AI Model Optimization (LLMs)',
        autoencoder_title: 'GRU Autoencoder for ECG',
        anomalias_title: 'Cardiac Anomaly Detection',
        tareas_title: 'Full Stack Task Management System',
        mercadito_title: 'E-commerce Platform (Microservices)',
        gps_title: 'QR-based Asset Tracking System',
        gps_role: 'Backend & Data Architect',
        monopolio_title: 'Real-Time Concurrent Game Engine',
        monopolio_role: 'Backend Developer',
        horarios_title: 'Academic Scheduling System (Docker)',
        horarios_role: 'Tech Lead & Full Stack Developer',
        tablero_title: 'IoT LED Matrix Control (Web)',
        tablero_role: 'Frontend & IoT Developer',
        // --- TRADUCCIONES DE PROYECTOS ---
        spm_desc: 'Designed and developed a web platform integrated with Oracle EAM to automate maintenance planning and optimize resource allocation.',
        spm_f1: 'Dashboard for tracking work orders and operational status.',
        spm_f2: 'Automatic scheduling with Gantt-chart interface.',
        spm_f3: 'Operational reliability KPIs (MTTR and failure frequency).',
        spm_f4: 'OWASP security (Helmet.js, JWT) and native Excel export.',
        svecg_desc: 'Developed an ECG visualization platform with automatic anomaly detection using Deep Learning and clinical interoperability based on HL7 FHIR.',
        svecg_f1: 'Anomaly detection using a pre-trained GRU Autoencoder model.',
        svecg_f2: 'Clinical prediction explainability using SHAP algorithms.',
        svecg_f3: 'Implementation of interoperability via HL7 FHIR resources using HAPI FHIR.',
        svecg_f4: 'Distributed architecture on independent microservices and an API Gateway, deployed in Google Cloud.',
        sgat_desc: 'Designed and developed a corporate system for technology asset management and traceability, strengthening internal control and technical auditing.',
        sgat_f1: 'Classification of business assets by Confidentiality, Integrity, and Availability (CIA triad).',
        sgat_f2: 'Reactive dashboard using Livewire without full page reloads.',
        sgat_f3: 'Role and permission management along with structured data exporting.',
        sgat_f4: 'Deployment configured on corporate Linux servers using Nginx.',
        outlier_proj_desc: 'Participated in technical evaluation of LLMs through RLHF, code auditing, and validation of reasoning capabilities in real-world scenarios.',
        outlier_proj_f1: 'Complex code auditing to optimize logical reasoning.',
        outlier_proj_f2: 'Design of technical coding challenges for model evaluation.',
        outlier_proj_f3: 'Expert evaluation of external tool integrations and APIs (Function Calling).',
        ae_desc: 'Trained a GRU Autoencoder model on the PTB-XL dataset for anomalous pattern detection in ECG signals (F1-score: 0.926).',
        ae_f1: 'Autoencoder architecture based on recurrent GRU layers.',
        ae_f2: 'Classification algorithm using automatic Otsu thresholding (F1-score: 0.926).',
        ae_f3: 'Dual data-purity filtering via Pearson Correlation and Isolation Forest.',
        ae_f4: 'Scientifically documented pipeline from bandpass filtering to the pre-trained model.',
        anom_desc: 'Predictive algorithm based on Dynamic Time Warping to detect cardiac risks in high-performance athletes via ECG signals.',
        anom_f1: 'High sensitivity in the experimental detection of atypical patterns in athletes\' ECG signals.',
        anom_f2: 'Implementation of KNN equipped with DTW for comparing variable-length signals.',
        anom_f3: 'Advanced pre-processing: inter-dataset normalization and re-sampling at 500 Hz.',
        anom_f4: 'Statistical feature extraction and dimensionality reduction using PCA.',
        tareas_desc: 'Full-stack system using a modular architecture and JWT authentication.',
        tareas_f1: 'Complete CRUD workflow with strict TypeORM schema validations.',
        tareas_f2: 'Secure user authentication using JWT and routing protection.',
        tareas_f3: 'Reactive user interface with dynamic filters based on task statuses.',
        tareas_f4: 'Containerized infrastructure for fast and consistent deployments.',
        gps_desc: 'Passive geolocation system through dynamic QR codes that enables reporting and geographical tracking of lost pets.',
        gps_f1: 'Generation of unique QR identifiers linked to pet profiles.',
        gps_f2: 'Automatic geolocation capture when scanning the QR, instantly notifying the owner.',
        gps_f3: 'Interactive map dashboard displaying the lost pet reporting history.',
        gps_f4: 'Relational backend built on Prisma ORM and PostgreSQL.',
        mercad_desc: 'Scalable E-commerce utilizing distributed independent services, supporting both web clients and native Android apps simultaneously.',
        mercad_f1: 'Microservices architecture with decoupled catalog, ordering, and identity modules.',
        mercad_f2: 'Cross-platform support: Web Client (Angular) and Native Android Client (Java).',
        mercad_f3: 'Relational persistence and internal communication using REST APIs.',
        mercad_f4: 'Complex state management for shopping carts and order queues.',
        monop_desc: 'Real-time multiplayer gaming application with socket-based synchronization.',
        monop_f1: 'Concurrency handling using asynchronous events and real-time WebSockets.',
        monop_f2: 'Complete rule engine evaluating bi-directional routing of player actions.',
        monop_f3: 'Distributed state persistence relying on a NoSQL database.',
        monop_f4: 'Synchronization of interactive clients over a Single Page Application (SPA).',
        horarios_desc: 'Integral solution for the automated reservation and management of academic schedules based on Docker containers.',
        horarios_f1: 'Multi-container deployment using Docker Compose and isolated networking protocols.',
        horarios_f2: 'Hierarchical profile management and customized appointment scheduling system.',
        horarios_f3: 'Automation of entrypoint scripts for clean migrations and data seeding.',
        horarios_f4: 'Classic MVC backend handling strict transactional reservation states.',
        tabl_desc: 'IoT platform for hardware telemetry and remote control, queueing and rendering customized messages on a connected LED matrix.',
        tabl_f1: 'Asynchronous queuing system for rendering characters on physical hardware.',
        tabl_f2: 'Serial Port integration for real-time CPU-Microcontroller synchronization.',
        tabl_f3: 'Web-based component editor with data persistence via Prisma ORM.',
        tabl_f4: 'Strict payload validation to prevent critical memory overflows on the Arduino.',


        // Badges
        badge_industrial: 'Industrial Production',
        badge_research: 'AI & Research',
        badge_academic: 'Technical Training',
        badge_global: 'Global Consulting',

        // UI Common
        tech_details: 'Full Stack Details',
        hide_details: 'Hide Details',
        btn_code: 'Code',
        btn_demo: 'Live Demo',
        btn_arch: 'Architecture',
        load_more: 'Show More Projects',
        hide_projects: 'Show Less Projects',
        langTitle: 'Languages',
        lang_es: 'Spanish (Native)',
        lang_en: 'English (B2)'
    }
};

let lang = 'es';

/**
 * APLICAR IDIOMA
 */
function applyLanguage() {
    document.getElementById('langBtn').innerHTML = lang === 'es'
        ? '<img src="https://flagcdn.com/w40/es.png" alt="" aria-hidden="true" width="20" height="15"> ES'
        : '<img src="https://flagcdn.com/w40/gb.png" alt="" aria-hidden="true" width="20" height="15"> EN';
    document.documentElement.lang = lang;

    const cvEsBtn = document.getElementById('cv-es-btn');
    const cvEnBtn = document.getElementById('cv-en-btn');
    if (cvEsBtn && cvEnBtn) {
        cvEsBtn.style.display = lang === 'es' ? 'inline-flex' : 'none';
        cvEnBtn.style.display = lang === 'en' ? 'inline-flex' : 'none';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });
}

function toggleLang() {
    lang = lang === 'es' ? 'en' : 'es';
    applyLanguage();
}

/**
 * CARGA DE COMPONENTES EXTERNOS
 */
async function loadComponents() {
    const components = ['educacion', 'experiencia', 'proyectos', 'habilidades', 'globo'];
    for (const comp of components) {
        try {
            const res = await fetch(`components/${comp}.html`);
            if (res.ok) {
                const text = await res.text();
                const placeholder = document.getElementById(`${comp}-placeholder`);
                if (placeholder) {
                    placeholder.outerHTML = text;
                }
            }
        } catch (e) {
            console.error("Error loading component:", comp, e);
        }
    }
    applyLanguage();

    // Iniciar carga en demanda (lazy) del Globo 3D al hacer scroll
    const globeSection = document.getElementById('globe-section');
    if (globeSection) {
        const globeObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                globeObserver.disconnect();
                const s1 = document.createElement('script');
                s1.src = 'js/globe.gl.min.js';
                s1.onload = () => {
                    const s2 = document.createElement('script');
                    s2.src = 'js/globe.js';
                    s2.onload = () => { if (typeof globalThis.initGlobe === 'function') globalThis.initGlobe(); };
                    document.body.appendChild(s2);
                };
                document.body.appendChild(s1);
            }
        }, { rootMargin: '400px' });
        globeObserver.observe(globeSection);
    }

    // Activar ScrollSpy después de cargar componentes
    setTimeout(setupScrollSpy, 500);

    // Bypass de Cloudflare para Ofuscación de Email (evita descarga de email-decode.min.js)
    const fMail = document.getElementById('footer-mail');
    if (fMail) fMail.href = 'mailto:contacto' + '@' + 'yankoacuna.cl';
}

document.addEventListener('DOMContentLoaded', loadComponents);

/**
 * SCROLL SPY (Iluminar Nav según sección)
 */
function setupScrollSpy() {
    const sections = document.querySelectorAll('section, div[id$="-placeholder"]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                let id = section.getAttribute('id');
                if (id && id.includes('-placeholder')) id = id.replace('-placeholder', '');
                current = id || section.querySelector('section')?.getAttribute('id') || current;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * LÓGICA DE PROYECTOS (Filtros, Detalles y Ver más)
 */
function toggleTechDetails(btn) {
    const section = btn.previousElementSibling;
    const isHidden = section.style.display === 'none';
    section.style.display = isHidden ? 'block' : 'none';

    const span = btn.querySelector('span');
    if (isHidden) {
        span.innerText = T[lang].hide_details;
        btn.classList.add('active');
    } else {
        span.innerText = T[lang].tech_details;
        btn.classList.remove('active');
    }
}

function toggleProjects() {
    const hidden = document.querySelector('.hidden-projects');
    const btn = document.querySelector('.btn-load-more');
    if (!hidden || !btn) return;

    const isShowing = hidden.classList.toggle('show');

    if (isShowing) {
        btn.innerHTML = `${T[lang].hide_projects} ▴`;
    } else {
        btn.innerHTML = `${T[lang].load_more} ▾`;
    }

    setTimeout(setupScrollSpy, 300);
}

function filterProjects(filter, btn) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    const hiddenWrapper = document.querySelector('.hidden-projects');
    const loadMoreContainer = document.querySelector('.load-more-container');

    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Si se aplica un filtro específico, mostramos todo y ocultamos el botón de "Ver más"
    if (filter !== 'all') {
        if (hiddenWrapper) hiddenWrapper.classList.add('show');
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
    } else {
        if (hiddenWrapper) hiddenWrapper.classList.remove('show');
        if (loadMoreContainer) loadMoreContainer.style.display = 'block';
    }

    cards.forEach(card => {
        const categories = card.dataset.category || '';
        if (filter === 'all' || categories.split(' ').includes(filter)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * NAVEGACIÓN INTELIGENTE (Salto Experiencia -> Proyecto)
 */
function scrollToProject(id) {
    const project = document.getElementById(id);
    if (!project) return;

    // Si el proyecto está en la sección oculta, la abrimos
    const hiddenWrapper = document.querySelector('.hidden-projects');
    if (hiddenWrapper && hiddenWrapper.contains(project) && !hiddenWrapper.classList.contains('show')) {
        toggleProjects();
    }

    // Si el proyecto estaba oculto por filtros, reseteamos a "Todos"
    if (project.style.display === 'none') {
        const btnAll = document.querySelector('.filter-btn');
        filterProjects('all', btnAll);
    }

    setTimeout(() => {
        const yOffset = -100;
        const y = project.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Efecto visual de resaltado (Highlight)
        project.style.transition = 'all 0.4s';
        project.style.transform = 'scale(1.03)';
        project.style.boxShadow = '0 0 30px var(--accent-glow)';
        project.style.borderColor = 'var(--accent)';

        setTimeout(() => {
            project.style.transform = '';
            project.style.boxShadow = '';
            project.style.borderColor = '';
        }, 2000);
    }, 200);
}

// Función para copiar email al portapapeles
function copyEmail(element) {
    event.preventDefault();
    navigator.clipboard.writeText('contacto@yankoacuna.cl').then(() => {
        const originalBg = element.style.background;
        element.style.background = 'var(--green)';
        setTimeout(() => { element.style.background = originalBg; }, 1500);
    });
}