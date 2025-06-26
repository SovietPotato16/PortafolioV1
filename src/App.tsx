import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  Globe, 
  Shield, 
  Cpu, 
  Menu, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Calendar,
  User,
  Briefcase,
  BookOpen,
  ChevronRight,
  Languages,
  Star,
  Terminal,
  Zap,
  Target,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  Sun,
  Moon,
  Server,
  Code,
  Layers,
  Network,
  Lock,
  Smartphone,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

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
      laboratory: 'Laboratorio',
      blog: 'Blog',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Saúl Hinojosa',
      title: 'Ingeniero de Software',
      subtitle: 'Especializado en Data Science, Python, LLMs y desarrollo web. Transformando datos en soluciones inteligentes.',
      manifesto: 'Mi Manifiesto',
      laboratory: 'Ver Laboratorio'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Ingeniero apasionado por la tecnología y la innovación',
      description: 'Soy un desarrollador full-stack especializado en ciencia de datos e inteligencia artificial. Mi pasión radica en crear soluciones tecnológicas que resuelvan problemas reales y generen impacto positivo.',
      highlights: [
        'Más de 5 años de experiencia en desarrollo',
        'Especialista en Python y JavaScript',
        'Experto en modelos de Machine Learning',
        'Líder de equipos técnicos'
      ]
    },
    journey: {
      title: 'Mi Trayectoria',
      subtitle: 'El camino que me ha llevado hasta aquí',
      experiences: [
        {
          type: 'work',
          year: '2023 - Presente',
          title: 'Senior Data Scientist',
          company: 'TechCorp Solutions',
          location: 'Ciudad de México, MX',
          description: 'Lidero el desarrollo de modelos de ML para optimización de procesos empresariales.',
          achievements: [
            'Implementé modelos que mejoraron la eficiencia en 40%',
            'Lideré un equipo de 5 científicos de datos',
            'Desarrollé pipelines de ML en producción'
          ],
          tech: ['Python', 'TensorFlow', 'AWS', 'Docker']
        },
        {
          type: 'work',
          year: '2021 - 2023',
          title: 'Full Stack Developer',
          company: 'InnovateLab',
          location: 'Guadalajara, MX',
          description: 'Desarrollé aplicaciones web completas usando tecnologías modernas.',
          achievements: [
            'Creé 15+ aplicaciones web de alto rendimiento',
            'Reduje el tiempo de carga en 60%',
            'Implementé arquitecturas escalables'
          ],
          tech: ['React', 'Node.js', 'PostgreSQL', 'MongoDB']
        },
        {
          type: 'education',
          year: '2019 - 2021',
          title: 'Maestría en Ciencias de la Computación',
          company: 'Universidad Tecnológica',
          location: 'Ciudad de México, MX',
          description: 'Especialización en Inteligencia Artificial y Machine Learning.',
          achievements: [
            'Tesis sobre redes neuronales profundas',
            'Promedio de 9.5/10',
            'Publicación en conferencia internacional'
          ],
          tech: ['Python', 'PyTorch', 'Research', 'Statistics']
        },
        {
          type: 'work',
          year: '2018 - 2021',
          title: 'Junior Developer',
          company: 'StartupTech',
          location: 'Monterrey, MX',
          description: 'Primeros pasos en el desarrollo profesional de software.',
          achievements: [
            'Desarrollé mi primera aplicación en producción',
            'Aprendí metodologías ágiles',
            'Contribuí a proyectos open source'
          ],
          tech: ['JavaScript', 'HTML/CSS', 'Git', 'Linux']
        }
      ]
    },
    manifesto: {
      title: 'El Arte del Código',
      philosophy: 'Filosofía',
      philosophyText: 'Creo que cada línea de código es un verso, cada algoritmo una sinfonía, y cada proyecto una obra maestra esperando ser creada. La programación es mi forma de crear y resolver problemas complejos.',
      vision: 'Visión',
      visionText: 'En la intersección entre la tecnología y la creatividad humana, construyo puentes hacia el futuro. Cada proyecto es una exploración de lo posible, una pregunta formulada al universo digital.',
      mission: 'Misión',
      missionText: 'Transformar la complejidad en claridad, el caos en patrones, y las ideas en realidad. Mi código no solo resuelve problemas, sino que revela nuevas posibilidades en el mundo digital.',
      domains: 'Dominios de Expertise',
      domainsList: [
        'Desarrollo Full-Stack',
        'Ciencia de Datos & Analytics',
        'Inteligencia Artificial & ML', 
        'Modelos de Lenguaje (LLMs)',
        'Automatización de Procesos',
        'Ciberseguridad & Hacking Ético',
        'Arquitectura de Software',
        'DevOps & Cloud Computing'
      ]
    },
    craft: {
      title: 'Herramientas & Tecnologías',
      subtitle: 'Stack tecnológico forjado en la experiencia'
    },
    laboratory: {
      title: 'Laboratorio de Experimentos',
      subtitle: 'Donde las ideas toman forma digital',
      viewExperiment: 'Explorar',
      categories: {
        all: 'Todo',
        datascience: 'Data Science',
        web: 'Web',
        ai: 'IA',
        security: 'Seguridad'
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
      laboratory: 'Laboratory', 
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Saúl Hinojosa',
      title: 'Software Engineer',
      subtitle: 'Specialized in Data Science, Python, LLMs and web development. Transforming data into intelligent solutions.',
      manifesto: 'My Manifesto',
      laboratory: 'View Laboratory'
    },
    about: {
      title: 'About Me',
      subtitle: 'Engineer passionate about technology and innovation',
      description: 'I\'m a full-stack developer specialized in data science and artificial intelligence. My passion lies in creating technological solutions that solve real problems and generate positive impact.',
      highlights: [
        'Over 5 years of development experience',
        'Python and JavaScript specialist',
        'Machine Learning models expert',
        'Technical team leader'
      ]
    },
    journey: {
      title: 'My Journey',
      subtitle: 'The path that has brought me here',
      experiences: [
        {
          type: 'work',
          year: '2023 - Present',
          title: 'Senior Data Scientist',
          company: 'TechCorp Solutions',
          location: 'Mexico City, MX',
          description: 'Leading ML model development for business process optimization.',
          achievements: [
            'Implemented models that improved efficiency by 40%',
            'Led a team of 5 data scientists',
            'Developed production ML pipelines'
          ],
          tech: ['Python', 'TensorFlow', 'AWS', 'Docker']
        },
        {
          type: 'work',
          year: '2021 - 2023',
          title: 'Full Stack Developer',
          company: 'InnovateLab',
          location: 'Guadalajara, MX',
          description: 'Developed complete web applications using modern technologies.',
          achievements: [
            'Created 15+ high-performance web applications',
            'Reduced loading time by 60%',
            'Implemented scalable architectures'
          ],
          tech: ['React', 'Node.js', 'PostgreSQL', 'MongoDB']
        },
        {
          type: 'education',
          year: '2019 - 2021',
          title: 'Master in Computer Science',
          company: 'Technological University',
          location: 'Mexico City, MX',
          description: 'Specialization in Artificial Intelligence and Machine Learning.',
          achievements: [
            'Thesis on deep neural networks',
            'GPA of 9.5/10',
            'Publication in international conference'
          ],
          tech: ['Python', 'PyTorch', 'Research', 'Statistics']
        },
        {
          type: 'work',
          year: '2018 - 2021',
          title: 'Junior Developer',
          company: 'StartupTech',
          location: 'Monterrey, MX',
          description: 'First steps in professional software development.',
          achievements: [
            'Developed my first production application',
            'Learned agile methodologies',
            'Contributed to open source projects'
          ],
          tech: ['JavaScript', 'HTML/CSS', 'Git', 'Linux']
        }
      ]
    },
    manifesto: {
      title: 'The Art of Code',
      philosophy: 'Philosophy',
      philosophyText: 'I believe every line of code is a verse, every algorithm a symphony, and every project a masterpiece waiting to be created. Programming is my way of creating and solving complex problems.',
      vision: 'Vision',
      visionText: 'At the intersection of technology and human creativity, I build bridges to the future. Each project is an exploration of the possible, a question posed to the digital universe.',
      mission: 'Mission',
      missionText: 'Transform complexity into clarity, chaos into patterns, and ideas into reality. My code doesn\'t just solve problems—it reveals new possibilities in the digital world.',
      domains: 'Domains of Expertise',
      domainsList: [
        'Full-Stack Development',
        'Data Science & Analytics',
        'Artificial Intelligence & ML',
        'Language Models (LLMs)',
        'Process Automation',
        'Cybersecurity & Ethical Hacking',
        'Software Architecture',
        'DevOps & Cloud Computing'
      ]
    },
    craft: {
      title: 'Tools & Technologies',
      subtitle: 'Tech stack forged through experience'
    },
    laboratory: {
      title: 'Experiment Laboratory',
      subtitle: 'Where ideas take digital form',
      viewExperiment: 'Explore',
      categories: {
        all: 'All',
        datascience: 'Data Science',
        web: 'Web',
        ai: 'AI',
        security: 'Security'
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
  const [activeSection, setActiveSection] = useState('hero');
  const [labFilter, setLabFilter] = useState('all');
  const [blogFilter, setBlogFilter] = useState('all');
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang];

  // Timeline animation
  useEffect(() => {
    if (!timelineRef.current || !progressLineRef.current) return;

    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;
    const timelineItems = timeline.querySelectorAll('.timeline-item');

    // Set initial state
    gsap.set(progressLine, { scaleY: 0, transformOrigin: 'top' });
    gsap.set(timelineItems, { opacity: 0, x: (i) => i % 2 === 0 ? -100 : 100 });

    // Create timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timeline,
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
      }
    });

    // Animate timeline items
    timelineItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        end: 'bottom 85%',
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
            opacity: 0.3,
            duration: 0.3
          });
        },
        onEnterBack: () => {
          gsap.to(item, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'craft', 'journey', 'manifesto', 'laboratory', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      
      // Cerrar el menú móvil primero
      setIsMenuOpen(false);
      
      // Intentar usar GSAP primero
      try {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: elementPosition, autoKill: false },
          ease: 'power2.inOut'
        });
      } catch (error) {
        // Fallback a scroll nativo si GSAP falla
        console.log('GSAP scroll failed, using native scroll');
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Cerrar menú incluso si no se encuentra el elemento
      setIsMenuOpen(false);
    }
  };

  const techStack = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'language' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'language' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'devops' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', category: 'cloud' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'os' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'backend' }
  ];

  const experiments = [
    {
      id: 1,
      title: 'Sistema de Análisis de Sentimientos',
      description: 'Modelo de NLP para análisis de sentimientos en tiempo real usando transformers y FastAPI',
      category: 'ai',
      status: 'Activo',
      tech: ['Python', 'Transformers', 'FastAPI', 'React'],
      visual: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Dashboard de Visualización de Datos',
      description: 'Plataforma interactiva para visualización de datasets complejos con Streamlit y Plotly',
      category: 'datascience',
      status: 'Completado',
      tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
      visual: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Automatización de Procesos con LLMs',
      description: 'Sistema de automatización que utiliza modelos de lenguaje para procesar documentos',
      category: 'ai',
      status: 'En desarrollo',
      tech: ['Python', 'OpenAI API', 'LangChain', 'PostgreSQL'],
      visual: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Herramienta de Pentesting Web',
      description: 'Suite de herramientas para auditorías de seguridad web con interfaz moderna',
      category: 'security',
      status: 'Prototipo',
      tech: ['Python', 'Flask', 'SQLite', 'JavaScript'],
      visual: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
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
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl border-b ${isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'} z-40 transition-colors duration-500`}>
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
                { id: 'laboratory', label: t.nav.laboratory },
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

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Sidebar */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] z-50 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-xl border-l ${isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'}`}>
          <div className="flex flex-col h-full">
            {/* Header del menú lateral */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800/30">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">SH</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Navegación */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-8 space-y-6">
                {[
                  { id: 'about', label: t.nav.about, icon: User },
                  { id: 'craft', label: t.nav.craft, icon: Code2 },
                  { id: 'journey', label: t.nav.journey, icon: Briefcase },
                  { id: 'manifesto', label: t.nav.manifesto, icon: BookOpen },
                  { id: 'laboratory', label: t.nav.laboratory, icon: Terminal },
                  { id: 'blog', label: t.nav.blog, icon: BookOpen },
                  { id: 'contact', label: t.nav.contact, icon: Mail }
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group w-full flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                        : isDarkMode 
                          ? 'hover:bg-gray-800/50 border border-transparent' 
                          : 'hover:bg-gray-100/50 border border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon 
                      size={20} 
                      className={`transition-colors duration-300 ${
                        activeSection === item.id
                          ? 'text-cyan-400'
                          : isDarkMode ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'
                      }`}
                    />
                    <span className={`font-light text-lg uppercase tracking-wider transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400'
                        : isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <ChevronRight 
                        size={16} 
                        className="text-cyan-400 ml-auto animate-pulse" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer del menú lateral */}
            <div className={`p-6 border-t ${isDarkMode ? 'border-gray-800/30' : 'border-gray-200/30'}`}>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/saulhinojosa" 
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100/50'
                  }`}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/saulhinojosa" 
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100/50'
                  }`}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:saulhinojosamaldonado@gmail.com" 
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100/50'
                  }`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay del menú móvil */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500"
            onClick={() => setIsMenuOpen(false)}
          />
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
                onClick={() => scrollToSection('laboratory')}
                className={`group relative px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-light transition-all duration-500 overflow-hidden ${isDarkMode ? 'text-cyan-400 hover:text-black' : 'text-cyan-600 hover:text-white'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
                <span className="relative flex items-center space-x-2">
                  <span>{t.hero.laboratory}</span>
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

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Descripción y highlights */}
            <div className="lg:col-span-2 space-y-8">
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

              {/* Estadísticas */}
              <div className="relative mt-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-light text-cyan-400 mb-2">5+</div>
                      <div className={`text-sm font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Años de Experiencia</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-purple-400 mb-2">50+</div>
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

            {/* Placeholder de imagen profesional */}
            <div className="relative lg:sticky lg:top-24">
              <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl aspect-[4/5] transition-all duration-500 hover:border-cyan-400/30">
                {/* Placeholder de imagen */}
                <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50' : 'bg-gradient-to-br from-gray-100/50 via-gray-50/30 to-gray-100/50'}`}>
                  <div className="text-center space-y-4">
                    {/* Icono de usuario */}
                    <div className={`w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      isDarkMode ? 'border-gray-600 text-gray-400 group-hover:border-cyan-400 group-hover:text-cyan-400' : 'border-gray-400 text-gray-600 group-hover:border-cyan-600 group-hover:text-cyan-600'
                    }`}>
                      <User size={32} />
                    </div>
                    {/* Texto del placeholder */}
                    <div className="space-y-2">
                      <p className={`text-sm font-light uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        Foto Profesional
                      </p>
                      <p className={`text-xs font-light ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
                        Saúl Hinojosa
                      </p>
                    </div>
                  </div>
                </div>

                {/* Efectos decorativos */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Líneas decorativas */}
                <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Badge flotante */}
              <div className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-xs font-light border backdrop-blur-xl ${
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

          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-full">
              <div 
                ref={progressLineRef}
                className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                style={{ height: '100%' }}
              ></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {t.journey.experiences.map((experience, index) => (
                <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
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
                          <div key={achIndex} className={`flex items-start space-x-3 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
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

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-6 h-6 rounded-full border-4 ${
                      experience.type === 'work' 
                        ? 'bg-cyan-400 border-cyan-400/30' 
                        : 'bg-purple-400 border-purple-400/30'
                    } shadow-lg`}></div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              ))}
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

          <div className="grid lg:grid-cols-2 gap-20 items-start">
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

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className={`text-2xl font-light mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.manifesto.domains}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.manifesto.domainsList.map((domain, index) => (
                    <div key={index} className={`group flex items-center space-x-4 p-4 hover:${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100/30'} transition-colors duration-300 rounded-2xl`}>
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className={`font-light group-hover:${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-30 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section id="laboratory" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.laboratory.title}
              </span>
            </h2>
            <p className={`text-xl font-light mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.laboratory.subtitle}</p>

            {/* Experiment Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {Object.entries(t.laboratory.categories).map(([key, label]) => (
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
              <div key={experiment.id} className="group relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-400/30">
                  <div className="relative overflow-hidden h-64">
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
                  </div>
                  
                  <div className="p-8">
                    <h3 className={`text-xl font-light mb-4 group-hover:text-cyan-400 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {experiment.title}
                    </h3>
                    <p className={`mb-6 leading-relaxed font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {experiment.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {experiment.tech.map((tech, index) => (
                        <span key={index} className={`px-4 py-2 text-sm font-light border rounded-full ${isDarkMode ? 'bg-gray-800/50 text-gray-300 border-gray-700' : 'bg-gray-100/50 text-gray-700 border-gray-300'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-6">
                      <a 
                        href={experiment.github}
                        className={`flex items-center space-x-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}
                      >
                        <Github size={16} />
                        <span className="text-sm font-light">Código</span>
                      </a>
                      <a 
                        href={experiment.demo}
                        className={`flex items-center space-x-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-light">{t.laboratory.viewExperiment}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
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