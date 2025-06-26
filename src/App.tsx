import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Brain, Database, Globe,Shield, Cpu, Menu, X, ExternalLink, Github, Linkedin, Mail,Calendar,User,Briefcase,BookOpen,ChevronRight,Languages,Star,Terminal,Zap,Target,ArrowUpRight,Play,Pause,Volume2,Sun,Moon,Server,Code,Layers,Network,Lock,Smartphone,MapPin,GraduationCap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import profilePhoto from './profile-photo.jpg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Language {
  code: 'es' | 'en';
  name: string;
}

const languages: Language[] = [
  { code: 'es', name: 'ES' },
  { code: 'en', name: 'EN' }
];

const translations = {
  es: {
    nav: {
      about: 'Sobre Mí',
      craft: 'Herramientas',
      journey: 'Trayectoria', 
      manifesto: 'Manifiesto',
      projects: 'Proyectos',
      blog: 'Blog',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Saúl Hinojosa',
      title: 'Ingeniero en Software',
      subtitle: 'Especializado en Data Science, Python, AI, LLMs y desarrollo web. Transformando datos en soluciones inteligentes.',
      manifesto: 'Mi Manifiesto',
      projects: 'Ver Proyectos'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Programador apasionado por la tecnología y la innovación',
      description: 'Soy un desarrollador full-stack especializado en ciencia de datos e inteligencia artificial. Mi pasión radica en crear soluciones tecnológicas que resuelvan problemas reales y generen impacto positivo.',
      highlights: [
        'Más de 3 años de experiencia en desarrollo en entornos profesionales',
        'Especialista en Python, APIs, LLMs, Data Science y desarrollo web',
        'Pasion por tecnología y desarrollo',
        'Líder de equipos técnicos', 
        'Atento a las nuevas tecnologías y tendencias',
      ]
    },
    journey: {
      title: 'Mi Trayectoria',
      subtitle: 'El camino que me ha llevado hasta aquí',
      experiences: [
        {
          type: 'work',
          year: '2024 - Presente',
          title: 'Data Scientist Intern',
          company: 'Santander Bank Mexico',
          location: 'Ciudad de México, MX',
          description: 'Liderando iniciativas de ciencia de datos y machine learning en el sector bancario.',
          achievements: [
            'Lideré un equipo de interns en competencia interna tipo hackathon',
            'Implementé pipelines de NLP y análisis de sentimientos en datos transaccionales y redes sociales',
            'Construí modelos predictivos usando técnicas de Machine Learning',
            'Desarrollé algoritmos de web scraping para extraer opiniones de usuarios',
            'Extraje y geocodifiqué datos geográficos de sucursales a través de APIs'
          ],
          tech: ['Python', 'NLP', 'Machine Learning', 'Web Scraping', 'APIs', 'Sentiment Analysis'],
          logo: '/Santander.png'
        },
        {
          type: 'work',
          year: '2023 - 2024',
          title: 'Data Analyst',
          company: 'INE (Instituto Nacional Electoral)',
          location: 'Toluca, MX',
          description: 'Análisis de datos y automatización de procesos para el sector electoral público.',
          achievements: [
            'Diseñé e implementé sistemas organizacionales para gestión de inventarios',
            'Desarrollé aplicaciones Python para automatizar procesos administrativos y analíticos',
            'Calculé y visualicé estadísticas clave para la toma de decisiones operacionales',
            'Mejoré la eficiencia de procesos mediante automatización'
          ],
          tech: ['Python', 'SQL', 'Data Visualization', 'Process Automation', 'Analytics'],
          logo: '/Inelogo.webp'
        },
        {
          type: 'work',
          year: '2021 - 2023',
          title: 'Data Analyst (Internship)',
          company: 'DiDi',
          location: 'Ciudad de México, MX',
          description: 'Análisis de datos de movilidad y comportamiento de usuarios en plataforma de transporte.',
          achievements: [
            'Desarrollé análisis de patrones de customer journey y comportamiento de usuarios',
            'Proporcioné insights accionables para mejora de servicios',
            'Desarrollé estrategias para mejorar rendimiento de servicios de delivery y transporte',
            'Revisé y refactoricé código Python y SQL para garantizar eficiencia y calidad'
          ],
          tech: ['Python', 'SQL', 'Customer Analytics', 'Behavioral Analysis', 'Transportation Data'],
          logo: '/DiDi.png'
        },
        {
          type: 'work',
          year: '2022 - 2023',
          title: 'Voluntario del Programa de Intercambios',
          company: 'AFS (American Field Service)',
          location: 'Estado de México, MX',
          description: 'Liderazgo en programas de intercambio cultural internacional y desarrollo de iniciativas comunitarias para la integración social.',
          achievements: [
            'Lideré eventos de diseminación cultural para estudiantes de intercambio internacional',
            'Organicé y facilité simulaciones de discusión tipo ONU para desarrollo de habilidades diplomáticas',
            'Participé activamente en programas de crecimiento social y desarrollo comunitario',
            'Promovió la integración cultural y el entendimiento internacional entre comunidades',
            'Desarrollé habilidades de liderazgo y comunicación intercultural en entornos diversos'
          ],
          tech: ['Leadership', 'Cultural Exchange', 'Community Development', 'Public Speaking', 'International Relations'],
          logo: '/AFS.webp'
        },
        {
          type: 'education',
          year: '2024',
          title: 'Ingeniería en Software',
          company: 'Universidad Autónoma del Estado de México',
          location: 'Estado de México, MX',
          description: 'Formación integral en desarrollo de software e ingeniería de sistemas.',
          achievements: [
            'Graduado en Diciembre 2024',
            'Especialización en ciencia de datos y machine learning',
            'Proyectos prácticos con tecnologías modernas',
            'Enfoque en metodologías ágiles y desarrollo profesional'
          ],
          tech: ['Software Engineering', 'Data Science', 'Machine Learning', 'Agile/Scrum'],
          logo: '/Uaemex.png'
        }
      ]
    },
    manifesto: {
      title: 'El Arte del Código',
      philosophy: 'Filosofía',
      philosophyText: 'Me apasiona la computación y las infinitas posibilidades que ofrece para crear soluciones. Cada problema es una oportunidad de aprender algo nuevo, y cada línea de código me acerca más a construir herramientas que realmente impacten positivamente la vida de las personas.',
      vision: 'Visión',
      visionText: 'En la intersección entre la tecnología y la creatividad humana, construyo puentes hacia el futuro. Cada proyecto es una exploración de lo posible, una pregunta formulada al universo digital.',
      mission: 'Misión',
      missionText: 'Transformar la complejidad en claridad, el caos en patrones, y las ideas en realidad. Mi código no solo resuelve problemas, sino que revela nuevas posibilidades en el mundo digital.'
    },
    craft: {
      title: 'Herramientas & Tecnologías',
      subtitle: 'Stack tecnológico forjado en la experiencia'
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Donde las ideas toman forma digital',
      viewExperiment: 'Explorar',
      clickToVisit: 'Haz clic para visitar el proyecto',
      viewProject: 'Ver Proyecto',
      categories: {
        all: 'Todo',
        datascience: 'Data Science',
        web: 'Web',
        ai: 'IA'
      }
    },
    blog: {
      title: 'Blog',
      subtitle: 'Reflexiones sobre tecnología y desarrollo',
      readPost: 'Leer artículo',
      categories: {
        all: 'Todos',
        datascience: 'Data Science',
        web: 'Desarrollo Web',
        ai: 'Inteligencia Artificial',
        security: 'Ciberseguridad'
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Conectemos para crear algo increíble',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar',
      info: 'Información de Contacto'
    }
  },
  en: {
    nav: {
      about: 'About',
      craft: 'Tools',
      journey: 'Journey',
      manifesto: 'Manifesto',
      projects: 'Projects', 
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Saúl Hinojosa',
      title: 'Software Engineer',
      subtitle: 'Specialized in Data Science, Python, LLMs and web development. Transforming data into intelligent solutions.',
      manifesto: 'My Manifesto',
      projects: 'View Projects'
    },
    about: {
      title: 'About Me',
      subtitle: 'Engineer passionate about technology and innovation',
      description: 'I\'m a full-stack developer specialized in data science and artificial intelligence. My passion lies in creating technological solutions that solve real problems and generate positive impact.',
      highlights: [
        'Over 3 years of development experience in professional environments',
        'Specialist in Python, APIs, LLMs, Data Science and web development',
        'Passion for technology and development',
        'Technical team leader',
        'Attentive to new technologies and trends',
      ]
    },
    journey: {
      title: 'My Journey',
      subtitle: 'The path that has brought me here',
      experiences: [
        {
          type: 'work',
          year: '2024 - Present',
          title: 'Data Scientist Intern',
          company: 'Santander Bank Mexico',
          location: 'Mexico City, MX',
          description: 'Leading data science and machine learning initiatives in the banking sector.',
          achievements: [
            'Led a team of interns through an internal hackathon-like competition',
            'Implemented NLP pipelines and sentiment analysis on transactional and social media data',
            'Built predictive models using Machine Learning techniques',
            'Developed web scraping algorithms to extract and structure user opinions',
            'Extracted and geocoded branch geographic data through APIs'
          ],
          tech: ['Python', 'NLP', 'Machine Learning', 'Web Scraping', 'APIs', 'Sentiment Analysis'],
          logo: '/Santander.png'
        },
        {
          type: 'work',
          year: '2023 - 2024',
          title: 'Data Analyst',
          company: 'INE (National Electoral Institute)',
          location: 'Toluca, MX',
          description: 'Data analysis and process automation for the public electoral sector.',
          achievements: [
            'Designed and implemented organizational systems for warehouse inventory management',
            'Developed Python applications to automate administrative and analytical processes',
            'Calculated and visualized key statistics for operational decision-making',
            'Improved process efficiency through automation'
          ],
          tech: ['Python', 'SQL', 'Data Visualization', 'Process Automation', 'Analytics'],
          logo: '/Inelogo.webp'
        },
        {
          type: 'work',
          year: '2021 - 2023',
          title: 'Data Analyst (Internship)',
          company: 'DiDi',
          location: 'Mexico City, MX',
          description: 'Mobility data analysis and user behavior insights for transportation platform.',
          achievements: [
            'Developed customer journey pattern analysis and user behavior projects',
            'Provided actionable insights for service improvement',
            'Developed strategies to improve delivery and transportation service performance',
            'Reviewed and refactored Python and SQL code to ensure efficiency and quality'
          ],
          tech: ['Python', 'SQL', 'Customer Analytics', 'Behavioral Analysis', 'Transportation Data'],
          logo: '/DiDi.png'
        },
        {
          type: 'work',
          year: '2022 - 2023',
          title: 'Exchange Program Volunteer',
          company: 'AFS (American Field Service)',
          location: 'Estado de México, MX',
          description: 'Leadership in international cultural exchange programs and development of community initiatives for social integration.',
          achievements: [
            'Led cultural dissemination events for international exchange students',
            'Organized and facilitated UN-style discussion simulations for diplomatic skills development',
            'Actively participated in social growth and community development programs',
            'Promoted cultural integration and international understanding between communities',
            'Developed leadership and intercultural communication skills in diverse environments'
          ],
          tech: ['Leadership', 'Cultural Exchange', 'Community Development', 'Public Speaking', 'International Relations'],
          logo: '/AFS.webp'
        },
        {
          type: 'education',
          year: '2024',
          title: 'Software Engineering',
          company: 'Autonomous University of Mexico State',
          location: 'Estado de México, MX',
          description: 'Comprehensive training in software development and systems engineering.',
          achievements: [
            'Graduated in December 2024',
            'Specialization in data science and machine learning',
            'Practical projects with modern technologies',
            'Focus on agile methodologies and professional development'
          ],
          tech: ['Software Engineering', 'Data Science', 'Machine Learning', 'Agile/Scrum'],
          logo: '/Uaemex.png'
        }
      ]
    },
    manifesto: {
      title: 'The Art of Code',
      philosophy: 'Philosophy',
      philosophyText: 'I\'m passionate about computing and the endless possibilities it offers to create solutions. Every problem is an opportunity to learn something new, and each line of code brings me closer to building tools that truly make a positive impact on people\'s lives.',
      vision: 'Vision',
      visionText: 'At the intersection of technology and human creativity, I build bridges to the future. Each project is an exploration of the possible, a question posed to the digital universe.',
      mission: 'Mission',
      missionText: 'Transform complexity into clarity, chaos into patterns, and ideas into reality. My code doesn\'t just solve problems—it reveals new possibilities in the digital world.'
    },
    craft: {
      title: 'Tools & Technologies',
      subtitle: 'Tech stack forged through experience'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Where ideas take digital form',
      viewExperiment: 'Explore',
      clickToVisit: 'Click to visit the project',
      viewProject: 'View Project',
      categories: {
        all: 'All',
        datascience: 'Data Science',
        web: 'Web',
        ai: 'AI'
      }
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts on technology and development',
      readPost: 'Read article',
      categories: {
        all: 'All',
        datascience: 'Data Science',
        web: 'Web Development',
        ai: 'Artificial Intelligence',
        security: 'Cybersecurity'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s connect to create something amazing',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      info: 'Contact Information'
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [labFilter, setLabFilter] = useState('all');
  const [blogFilter, setBlogFilter] = useState('all');
  const timelineRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang];

  // Timeline animation
  useEffect(() => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    
    // Separate animations for mobile and desktop
    const desktopTimeline = timeline.querySelector('.desktop-timeline');
    const mobileTimeline = timeline.querySelector('.mobile-timeline');
    
    // Desktop animations
    if (desktopTimeline) {
      const progressLine = desktopTimeline.querySelector('.progress-line');
      const timelineItems = desktopTimeline.querySelectorAll('.timeline-item');

      if (progressLine && timelineItems.length > 0) {
        // Set initial state for desktop
        gsap.set(progressLine, { scaleY: 0, transformOrigin: 'top' });
        gsap.set(timelineItems, { opacity: 0, x: (i) => i % 2 === 0 ? -100 : 100 });

        // Create timeline animation for desktop
        ScrollTrigger.create({
          trigger: desktopTimeline,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          onUpdate: (self) => {
            // Animate progress line based on scroll progress
            gsap.to(progressLine, {
              scaleY: self.progress,
              duration: 0.1,
              ease: 'none'
            });
          }
        });

        // Animate timeline items for desktop
        timelineItems.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 85%',
            end: 'bottom -10%',
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out'
              });
            },
            onLeave: () => {
              gsap.to(item, {
                opacity: 0.6,
                duration: 0.5,
                ease: 'power2.out'
              });
            },
            onEnterBack: () => {
              gsap.to(item, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
              });
            }
          });
        });
      }
    }

    // Mobile animations
    if (mobileTimeline) {
      const progressLine = mobileTimeline.querySelector('.progress-line');
      const timelineItems = mobileTimeline.querySelectorAll('.timeline-item');

      if (progressLine && timelineItems.length > 0) {
        // Set initial state for mobile
        gsap.set(progressLine, { scaleY: 0, transformOrigin: 'top' });
        gsap.set(timelineItems, { opacity: 0, y: 50 }); // Mobile uses Y animation

        // Create timeline animation for mobile
        ScrollTrigger.create({
          trigger: mobileTimeline,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          onUpdate: (self) => {
            // Animate progress line based on scroll progress
            gsap.to(progressLine, {
              scaleY: self.progress,
              duration: 0.1,
              ease: 'none'
            });
          }
        });

        // Animate timeline items for mobile
        timelineItems.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            end: 'bottom -10%',
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
              });
            },
            onLeave: () => {
              gsap.to(item, {
                opacity: 0.6,
                duration: 0.4,
                ease: 'power2.out'
              });
            },
            onEnterBack: () => {
              gsap.to(item, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
              });
            }
          });
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Scroll tracking y control del menú móvil
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'craft', 'journey', 'manifesto', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 150; // Aumentamos offset para mejor detección

      // Buscar la sección actual de forma más precisa
      let currentSection = 'hero'; // Default
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionTop = offsetTop - 80; // Ajuste para la navbar
          const sectionBottom = offsetTop + offsetHeight - 80;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Cerrar menú móvil con tecla Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    // Prevenir scroll del body cuando el menú esté abierto o animándose
    if (isMenuOpen || isMenuAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Throttle del scroll para mejor rendimiento
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const throttledHandleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 50); // Throttle de 50ms
    };

    window.addEventListener('scroll', throttledHandleScroll);
    document.addEventListener('keydown', handleKeyDown);
    
    // Ejecutar una vez al cargar
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
      }, [isMenuOpen, isMenuAnimating]);

  // Función para abrir menú
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Función para cerrar menú con animación
  const closeMenu = () => {
    setIsMenuAnimating(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuAnimating(false);
    }, 300); // Duración de la animación
  };

  // Función de scroll simplificada y confiable
  const scrollToSection = (sectionId: string) => {
    // Cerrar el menú móvil con animación
    closeMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      
      // Usar scroll nativo más simple y confiable
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const techStack = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'language' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'language' },
    { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'tools' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'os' },
    { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database' },
    { name: 'Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg', category: 'tools' },
    { name: 'Machine Learning', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', category: 'ai' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' }
  ];

  const experiments = [
    {
      id: 1,
      title: 'Análisis y Mapeo Geoestadístico Bancario',
      description: 'Mapa interactivo de sucursales de los principales bancos en la Ciudad de México y análisis comparativo entre instituciones financieras',
      category: 'datascience',
      status: 'Completado',
      tech: ['Python', 'Mapping', 'Folium', 'APIs', 'Geostatistics'],
      visual: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '/CDMX-Multibanco-Map.html'
    },
    {
      id: 2,
      title: 'Análisis de Opinión y Extracción de Puntos de Dolor',
      description: 'Sistema que genera insights relevantes sobre la opinión de los usuarios respecto a sucursales y cajeros automáticos en la Ciudad de México',
      category: 'ai',
      status: 'Activo',
      tech: ['Python', 'NLP', 'Sentiment Analysis', 'Streamlit', 'Data Mining'],
      visual: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: 'https://bankdata.streamlit.app/'
    },
    {
      id: 3,
      title: 'Servicio SAAS con Inteligencia Artificial para Administración de Casos Jurídicos',
      description: 'Servicio SAAS de software administrativo para despachos jurídicos, que permite redacción y análisis de documentos legales a través de asistencia con IA',
      category: 'ai',
      status: 'Activo',
      tech: ['React', 'Node.js', 'OpenAI API', 'LegalTech', 'SAAS'],
      visual: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: 'https://www.orangepro.app'
    },
    {
      id: 4,
      title: 'Menú Digital Interactivo',
      description: 'Menú interactivo para restaurante gourmet, facilita la lectura de menús a través de filtros sencillos, mejorando la experiencia del cliente',
      category: 'web',
      status: 'Completado',
      tech: ['React', 'JavaScript', 'UI/UX', 'Restaurant Tech'],
      visual: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: 'https://elchipil.digitalorange.com.mx'
    },
    {
      id: 5,
      title: 'Servicio de Creación de Páginas Web y Herramientas Corporativas',
      description: 'Página web empresarial de servicio SAAS que ofrece servicios de desarrollo web, hosting, aplicaciones hechas a medida y soluciones corporativas',
      category: 'web',
      status: 'Activo',
      tech: ['React', 'Node.js', 'SAAS', 'Web Development', 'Hosting'],
      visual: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: 'https://digitalorange.com.mx'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'El Futuro de los LLMs en la Automatización',
      excerpt: 'Explorando cómo los modelos de lenguaje están transformando la automatización de procesos empresariales',
      category: 'ai',
      date: '2024-01-20',
      readTime: '8 min',
      visual: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Data Science en el Mundo Real',
      excerpt: 'Lecciones aprendidas implementando soluciones de ciencia de datos en producción',
      category: 'datascience',
      date: '2024-01-15',
      readTime: '12 min',
      visual: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Seguridad en Aplicaciones Web Modernas',
      excerpt: 'Mejores prácticas para proteger aplicaciones web contra vulnerabilidades comunes',
      category: 'security',
      date: '2024-01-10',
      readTime: '10 min',
      visual: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredExperiments = labFilter === 'all' 
    ? experiments 
    : experiments.filter(exp => exp.category === labFilter);

  const filteredBlogPosts = blogFilter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === blogFilter);

  const themeClasses = isDarkMode 
    ? 'bg-black text-white' 
    : 'bg-white text-gray-900';

  return (
    <div className={`${themeClasses} min-h-screen relative overflow-x-hidden transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl border-b ${isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'} z-[45] transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">SH</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {[
                { id: 'about', label: t.nav.about },
                { id: 'craft', label: t.nav.craft },
                { id: 'journey', label: t.nav.journey },
                { id: 'manifesto', label: t.nav.manifesto },
                { id: 'projects', label: t.nav.projects },
                { id: 'blog', label: t.nav.blog },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-xs xl:text-sm font-medium tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Language Toggle */}
              <div className={`flex ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-full p-1 border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`px-3 py-2 text-xs rounded-full transition-all duration-300 ${
                      currentLang === lang.code
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>

              {/* Botón del menú móvil - solo visible cuando el menú está cerrado */}
              <div className="lg:hidden">
                {!isMenuOpen && (
                  <button
                    onClick={openMenu}
                    className={`relative p-3 rounded-xl transition-all duration-300 border ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 border-gray-700/50 hover:border-cyan-400/30' 
                        : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-100/50 border-gray-300/50 hover:border-cyan-600/30'
                    }`}
                    aria-label="Abrir menú de navegación"
                  >
                    <div className="transition-transform duration-200">
                      <Menu size={24} />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay del menú móvil */}
        {(isMenuOpen || isMenuAnimating) && (
          <div 
            className={`lg:hidden fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300 ${
              isMenuAnimating ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!isMenuAnimating) {
                closeMenu();
              }
            }}
            style={{
              touchAction: 'none'
            }}
          />
        )}

        {/* Mobile Navigation - Sidebar */}
        {(isMenuOpen || isMenuAnimating) && (
          <div 
            className={`lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-[60] ${
              isDarkMode ? 'bg-black' : 'bg-white'
            } border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} shadow-2xl transform transition-all duration-300 ease-in-out ${
              isMenuAnimating ? 'translate-x-full opacity-75' : 'translate-x-0 opacity-100'
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {/* Header del menú lateral - FIJO */}
            <div className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm">SH</span>
                  </div>
                </div>
                                  <span className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Navegación
                  </span>
              </div>
              <button
                onClick={closeMenu}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                <X size={20} />
              </button>
            </div>

            {/* Navegación - SCROLLABLE */}
            <div className={`flex-1 overflow-y-auto ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="p-4 space-y-1">
                {[
                  { id: 'about', label: t.nav.about, icon: User },
                  { id: 'craft', label: t.nav.craft, icon: Code2 },
                  { id: 'journey', label: t.nav.journey, icon: Briefcase },
                  { id: 'manifesto', label: t.nav.manifesto, icon: BookOpen },
                  { id: 'projects', label: t.nav.projects, icon: Terminal },
                  { id: 'blog', label: t.nav.blog, icon: BookOpen },
                  { id: 'contact', label: t.nav.contact, icon: Mail }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                                          className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        activeSection === item.id
                          ? isDarkMode
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                          : isDarkMode 
                            ? 'text-gray-200 hover:bg-gray-800 hover:text-white' 
                            : 'text-gray-800 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                  >
                    <item.icon 
                      size={18} 
                      className="flex-shrink-0"
                    />
                    <span className="font-semibold text-sm">
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <ChevronRight 
                        size={14} 
                        className="ml-auto flex-shrink-0"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer - FIJO */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="text-center mb-3">
                <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Conecta conmigo
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/saulhinojosa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100'
                  }`}
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/saulhinojosa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100'
                  }`}
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:saulhinojosamaldonado@gmail.com" 
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100'
                  }`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900/50 to-black' : 'bg-gradient-to-br from-white via-gray-50/50 to-white'}`}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div className="relative">
              <p className={`text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-80 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {t.hero.greeting}
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin leading-none">
                <span className={`bg-gradient-to-r ${isDarkMode ? 'from-white via-cyan-100 to-purple-200' : 'from-gray-900 via-cyan-700 to-purple-700'} bg-clip-text text-transparent`}>
                  {t.hero.name.split(' ')[0]}
                </span>
                <br />
                <span className={`bg-gradient-to-r ${isDarkMode ? 'from-purple-200 via-pink-200 to-orange-200' : 'from-purple-700 via-pink-700 to-orange-700'} bg-clip-text text-transparent`}>
                  {t.hero.name.split(' ')[1]}
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <h2 className={`text-xl md:text-2xl font-light tracking-wide ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.hero.title}
              </h2>
              <p className={`text-lg max-w-3xl mx-auto leading-relaxed font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button
                onClick={() => scrollToSection('projects')}
                className={`group relative px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-light transition-all duration-500 overflow-hidden ${isDarkMode ? 'text-cyan-400 hover:text-black' : 'text-cyan-600 hover:text-white'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
                <span className="relative flex items-center space-x-2">
                  <span>{t.hero.projects}</span>
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('manifesto')}
                className={`group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-light transition-all duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:border-white/30' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900/30'}`}
              >
                <span className="flex items-center space-x-2">
                  <span>{t.hero.manifesto}</span>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-400 group-hover:bg-white' : 'bg-gray-600 group-hover:bg-gray-900'}`}></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <p className={`text-xl font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.about.subtitle}</p>
          </div>

          {/* Layout: texto e imagen lado a lado, estadísticas debajo */}
          <div className="space-y-12">
            {/* Contenido principal: descripción e imagen lado a lado */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Descripción y highlights */}
              <div className="space-y-8">
                <p className={`text-lg leading-relaxed font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.about.description}
                </p>
                
                <div className="space-y-4">
                  {t.about.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                      <span className={`font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen profesional */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-500 hover:border-cyan-400/30 w-64 lg:w-full max-w-sm">
                  {/* Contenedor de imagen profesional */}
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Saúl Hinojosa - Ingeniero de Software"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay sutil para integración con el diseño */}
                    <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-black/20 via-transparent to-transparent' : 'bg-gradient-to-t from-white/10 via-transparent to-transparent'}`}></div>
                    {/* Overlay hover para efectos interactivos */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Efectos decorativos */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Líneas decorativas */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Badge flotante */}
                  <div className={`absolute -top-2 -right-2 px-5 py-3 rounded-full text-xs font-light border backdrop-blur-xl ${
                    isDarkMode 
                      ? 'bg-black/80 border-gray-700/50 text-gray-300' 
                      : 'bg-white/80 border-gray-300/50 text-gray-700'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas debajo de todo */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-light text-cyan-400 mb-2">3+</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Años de Experiencia</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-purple-400 mb-2">20+</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Proyectos Completados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-pink-400 mb-2">15+</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tecnologías</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-orange-400 mb-2">3+</div>
                    <div className={`text-sm font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Equipos Liderados</div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-30 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="craft" className={`py-20 relative z-10 ${isDarkMode ? 'bg-gradient-to-b from-black to-gray-900/50' : 'bg-gradient-to-b from-white to-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.craft.title}
              </span>
            </h2>
            <p className={`text-xl font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.craft.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full transition-all duration-500 flex flex-col items-center space-y-4 hover:border-cyan-400/30">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className={`text-sm font-light text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{tech.name}</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.journey.title}
              </span>
            </h2>
            <p className={`text-xl font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.journey.subtitle}</p>
          </div>

          {/* Timeline layout móvil y desktop */}
          <div ref={timelineRef} className="relative">
            
            {/* Layout móvil */}
            <div className="lg:hidden mobile-timeline">
              {/* Timeline Line móvil - a la izquierda */}
              <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-gray-800 to-gray-900">
                <div 
                  className="progress-line w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"
                  style={{ height: '100%' }}
                ></div>
              </div>

              {/* Timeline Items móvil */}
              <div className="space-y-8 pl-16">
                {t.journey.experiences.map((experience, index) => (
                  <div key={index} className="timeline-item relative">
                    {/* Timeline Dot móvil */}
                    <div className="absolute -left-12 top-4">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        experience.type === 'work' 
                          ? 'bg-cyan-400 border-cyan-400' 
                          : 'bg-purple-400 border-purple-400'
                      } shadow-lg`}></div>
                    </div>

                    {/* Logo móvil - arriba de la tarjeta */}
                    {experience.logo && (
                      <div className="mb-4 flex justify-center">
                        <div className={`${isDarkMode ? 'bg-white/90' : 'bg-white'} backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 md:p-6 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center shadow-lg`}>
                          <img 
                            src={experience.logo} 
                            alt={`${experience.company} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Content móvil */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`px-3 py-1 rounded-full text-xs font-light ${
                          experience.type === 'work' 
                            ? 'bg-cyan-400/20 text-cyan-400' 
                            : 'bg-purple-400/20 text-purple-400'
                        }`}>
                          {experience.type === 'work' ? 'Trabajo' : 'Educación'}
                        </div>
                        <span className={`text-xs font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {experience.year}
                        </span>
                      </div>
                      
                      <h3 className={`text-lg font-light mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experience.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 mb-3 text-sm">
                        {experience.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                        <span className={`font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {experience.company}
                        </span>
                        <MapPin size={12} className={isDarkMode ? 'text-gray-500' : 'text-gray-600'} />
                        <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                          {experience.location}
                        </span>
                      </div>
                      
                      <p className={`mb-4 leading-relaxed font-light text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {experience.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {experience.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <Star size={12} className="text-yellow-400 mt-1 flex-shrink-0" />
                            <span className={`text-xs font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {experience.tech.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-2 py-1 text-xs font-light border rounded-full ${isDarkMode ? 'bg-gray-800/50 text-gray-300 border-gray-700' : 'bg-gray-100/50 text-gray-700 border-gray-300'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Layout desktop */}
            <div className="hidden lg:block desktop-timeline">
              {/* Timeline Line desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-full">
                <div 
                  className="progress-line w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                  style={{ height: '100%' }}
                ></div>
              </div>

              {/* Timeline Items desktop */}
              <div className="space-y-16">
                {t.journey.experiences.map((experience, index) => (
                  <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content desktop */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`px-4 py-2 rounded-full text-xs font-light ${
                            experience.type === 'work' 
                              ? 'bg-cyan-400/20 text-cyan-400' 
                              : 'bg-purple-400/20 text-purple-400'
                          }`}>
                            {experience.type === 'work' ? 'Trabajo' : 'Educación'}
                          </div>
                          <span className={`text-sm font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {experience.year}
                          </span>
                        </div>
                        
                        <h3 className={`text-xl font-light mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {experience.title}
                        </h3>
                        
                        <div className={`flex items-center space-x-2 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          {experience.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                          <span className={`font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {experience.company}
                          </span>
                          <MapPin size={14} className={isDarkMode ? 'text-gray-500' : 'text-gray-600'} />
                          <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                            {experience.location}
                          </span>
                        </div>
                        
                        <p className={`mb-6 leading-relaxed font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {experience.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          {experience.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3">
                              <Star size={14} className="text-yellow-400 mt-1 flex-shrink-0" />
                              <span className={`text-sm font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          {experience.tech.map((tech, techIndex) => (
                            <span key={techIndex} className={`px-3 py-1 text-xs font-light border rounded-full ${isDarkMode ? 'bg-gray-800/50 text-gray-300 border-gray-700' : 'bg-gray-100/50 text-gray-700 border-gray-300'}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot desktop */}
                    <div className="w-2/12 flex justify-center">
                      <div className={`w-6 h-6 rounded-full border-4 ${
                        experience.type === 'work' 
                          ? 'bg-cyan-400 border-cyan-400/30' 
                          : 'bg-purple-400 border-purple-400/30'
                      } shadow-lg`}></div>
                    </div>

                    {/* Logo desktop - lado opuesto */}
                    <div className="w-5/12 flex items-center justify-center">
                      {experience.logo && (
                        <div className={`${isDarkMode ? 'bg-white/90' : 'bg-white'} backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 xl:p-10 w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 flex items-center justify-center shadow-lg`}>
                          <img 
                            src={experience.logo} 
                            alt={`${experience.company} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.manifesto.title}
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
                  <h3 className="text-2xl font-light mb-6 text-cyan-400">{t.manifesto.philosophy}</h3>
                  <p className={`leading-relaxed font-light text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.manifesto.philosophyText}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-purple-400/50 to-transparent"></div>
                  <h3 className="text-2xl font-light mb-6 text-purple-400">{t.manifesto.vision}</h3>
                  <p className={`leading-relaxed font-light text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.manifesto.visionText}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-pink-400/50 to-transparent"></div>
                  <h3 className="text-2xl font-light mb-6 text-pink-400">{t.manifesto.mission}</h3>
                  <p className={`leading-relaxed font-light text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.manifesto.missionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.projects.title}
              </span>
            </h2>
            <p className={`text-xl font-light mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.projects.subtitle}</p>

            {/* Experiment Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {Object.entries(t.projects.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setLabFilter(key)}
                  className={`px-6 py-3 border font-light transition-all duration-300 rounded-full ${
                    labFilter === key
                      ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
                      : isDarkMode ? 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300' : 'border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {filteredExperiments.map((experiment) => (
              <div key={experiment.id} className="group relative h-full">
                <a
                  href={experiment.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer h-full"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-400/30 h-full flex flex-col">
                    <div className="relative overflow-hidden h-64 flex-shrink-0">
                      <img 
                        src={experiment.visual} 
                        alt={experiment.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-black via-transparent to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent'}`}></div>
                      <div className="absolute top-4 left-4 flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          experiment.status === 'Activo' ? 'bg-green-400' :
                          experiment.status === 'Completado' ? 'bg-blue-400' :
                          experiment.status === 'En desarrollo' ? 'bg-yellow-400' : 'bg-purple-400'
                        }`}></div>
                        <span className={`text-xs font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{experiment.status}</span>
                      </div>
                      
                      {/* Hover overlay con icono de enlace externo */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                              <div className="flex flex-col items-center space-y-2 text-white">
                        <ExternalLink size={32} className="animate-pulse" />
                        <span className="text-sm font-light">{t.projects.viewProject}</span>
                      </div>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className={`text-xl font-light mb-4 group-hover:text-cyan-400 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experiment.title}
                      </h3>
                      <p className={`mb-6 leading-relaxed font-light flex-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {experiment.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {experiment.tech.map((tech, index) => (
                          <span key={index} className={`px-4 py-2 text-sm font-light border rounded-full ${isDarkMode ? 'bg-gray-800/50 text-gray-300 border-gray-700' : 'bg-gray-100/50 text-gray-700 border-gray-300'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Indicador visual de que es clickeable */}
                      <div className={`flex items-center space-x-2 text-sm font-light mt-auto ${isDarkMode ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'} transition-colors duration-300`}>
                        <ExternalLink size={16} />
                        <span>{t.projects.clickToVisit}</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-20 relative z-10 ${isDarkMode ? 'bg-gradient-to-b from-gray-900/50 to-black' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.blog.title}
              </span>
            </h2>
            <p className={`text-xl font-light mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.blog.subtitle}</p>

            {/* Blog Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {Object.entries(t.blog.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setBlogFilter(key)}
                  className={`px-6 py-3 border font-light transition-all duration-300 rounded-full ${
                    blogFilter === key
                      ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
                      : isDarkMode ? 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300' : 'border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {filteredBlogPosts.map((post, index) => (
              <article key={post.id} className={`group grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={post.visual} 
                    alt={post.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t from-white/50 to-transparent'}`}></div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`flex items-center space-x-4 text-sm font-light ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-light group-hover:text-cyan-400 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {post.title}
                  </h3>
                  
                  <p className={`leading-relaxed font-light text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {post.excerpt}
                  </p>
                  
                  <button className={`group/btn flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full transition-colors duration-300 ${isDarkMode ? 'text-cyan-400 hover:text-white' : 'text-cyan-600 hover:text-gray-900'}`}>
                    <span className="font-light">{t.blog.readPost}</span>
                    <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900/30 to-black' : 'bg-gradient-to-br from-white via-gray-50/30 to-white'}`}></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className={`text-xl font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className={`block text-sm font-light uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      className={`w-full bg-transparent border-b py-3 placeholder-gray-500 focus:outline-none transition-colors duration-300 font-light ${
                        isDarkMode 
                          ? 'border-gray-700 text-white focus:border-cyan-400' 
                          : 'border-gray-300 text-gray-900 focus:border-cyan-600'
                      }`}
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`block text-sm font-light uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      className={`w-full bg-transparent border-b py-3 placeholder-gray-500 focus:outline-none transition-colors duration-300 font-light ${
                        isDarkMode 
                          ? 'border-gray-700 text-white focus:border-cyan-400' 
                          : 'border-gray-300 text-gray-900 focus:border-cyan-600'
                      }`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`block text-sm font-light uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={6}
                      className={`w-full bg-transparent border-b py-3 placeholder-gray-500 focus:outline-none transition-colors duration-300 font-light resize-none ${
                        isDarkMode 
                          ? 'border-gray-700 text-white focus:border-cyan-400' 
                          : 'border-gray-300 text-gray-900 focus:border-cyan-600'
                      }`}
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`group relative w-full py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-light transition-all duration-500 overflow-hidden ${
                      isDarkMode 
                        ? 'text-cyan-400 hover:text-black' 
                        : 'text-cyan-600 hover:text-white'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
                    <span className="relative flex items-center justify-center space-x-2">
                      <span>{t.contact.send}</span>
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                  </button>
                </form>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl opacity-30 rounded-3xl"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-8 text-cyan-400">
                  {t.contact.info}
                </h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:saulhinojosamaldonado@gmail.com"
                    className={`group flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-400/30`}
                  >
                    <Mail className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <div>
                      <p className={`font-light ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                      <p className={`font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>saulhinojosamaldonado@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/saulhinojosa"
                    className={`group flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-400/30`}
                  >
                    <Linkedin className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <div>
                      <p className={`font-light ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</p>
                      <p className={`font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>@saulhinojosa</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/saulhinojosa"
                    className={`group flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-400/30`}
                  >
                    <Github className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <div>
                      <p className={`font-light ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</p>
                      <p className={`font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>@saulhinojosa</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h4 className={`text-lg font-light mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Información Adicional
                  </h4>
                  <div className={`space-y-4 font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>📍 Ciudad de México, México</p>
                    <p>🕐 Zona Horaria: CDMX (UTC-6)</p>
                    <p>💫 Estado: Disponible</p>
                    <p>🔬 Enfoque Actual: Automatización de procesos usando LLMs</p>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-xl opacity-50 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 border-t relative z-10 ${isDarkMode ? 'bg-black border-gray-800/50' : 'bg-white border-gray-200/50'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-600 hover:text-cyan-400' : 'text-gray-400 hover:text-cyan-600'}`}>
                <Github size={20} />
              </a>
              <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-600 hover:text-cyan-400' : 'text-gray-400 hover:text-cyan-600'}`}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-600 hover:text-cyan-400' : 'text-gray-400 hover:text-cyan-600'}`}>
                <Mail size={20} />
              </a>
            </div>
            <p className={`font-light text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
              © 2024 Saúl Hinojosa. {currentLang === 'es' ? 'Transformando ideas en código.' : 'Transforming ideas into code.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;