import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Smartphone, Terminal, Monitor, Shield, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'completed' | 'wip';
  tags: string[];
  problem: string;
  solution: string;
  techStack: string[];
  decisions: string[];
  interviewValue: string;
}

const projects: Project[] = [
  {
    id: 'canteen',
    title: 'Canteen Management App',
    subtitle: 'Flutter + Firebase',
    icon: Smartphone,
    status: 'completed',
    tags: ['Flutter', 'Firebase', 'Cross-Platform'],
    problem: 'Campus canteens lack efficient ordering systems, causing long queues and order confusion.',
    solution: 'Built a complete ordering system with separate student and admin interfaces, featuring live order tracking, token workflow, and stock management.',
    techStack: ['Flutter', 'Firebase Realtime DB', 'Firebase Auth', 'Cloud Functions'],
    decisions: [
      'Chose Firebase for real-time sync enabling live order status updates',
      'Implemented role-based access for student vs admin workflows',
      'Designed modular, scalable architecture for easy feature additions',
    ],
    interviewValue: 'Demonstrates full-stack mobile development, real-time systems, and user-centric design thinking.',
  },
  {
    id: 'learning-platform',
    title: 'Adaptive Learning Platform',
    subtitle: 'DSA-Driven CLI System',
    icon: Terminal,
    status: 'completed',
    tags: ['Python', 'Trie', 'Graph', 'Heap'],
    problem: 'Students struggle to find optimal learning paths for interconnected topics with prerequisites.',
    solution: 'Developed an academic learning engine using classical DSAs: Trie for fast search, Graph for prerequisite modeling, Min-Heap for learning sequence scheduling.',
    techStack: ['Python', 'Trie', 'Graph', 'Min-Heap', 'Arrays', 'pytest'],
    decisions: [
      'Trie chosen for O(m) topic search where m is query length',
      'Graph structure naturally models prerequisite relationships',
      'Min-Heap ensures optimal scheduling based on priority scores',
    ],
    interviewValue: 'Showcases deep understanding of classical DSA applications in real systems — key interview differentiator.',
  },
  {
    id: 'ticket-venuma',
    title: 'Ticket Venuma',
    subtitle: 'Electron Movie Booking App',
    icon: Monitor,
    status: 'completed',
    tags: ['Electron', 'HTML/CSS/JS', 'Desktop'],
    problem: 'Need for a reliable offline-first desktop application for movie ticket booking in areas with unstable internet.',
    solution: 'Desktop movie-ticket application with catalog browsing, theater selection, seat booking, and mock payment flow.',
    techStack: ['Electron', 'HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    decisions: [
      'Electron chosen for cross-platform desktop compatibility',
      'Offline-first architecture with local data caching',
      'Modular component design for maintainability',
    ],
    interviewValue: 'Demonstrates desktop application development skills and offline-first architecture thinking.',
  },
  {
    id: 'nids',
    title: 'Network Intrusion Detection',
    subtitle: 'ML Security System',
    icon: Shield,
    status: 'wip',
    tags: ['ML', 'Random Forest', 'XGBoost', 'Autoencoder'],
    problem: 'Traditional signature-based intrusion detection fails against novel attack patterns.',
    solution: 'Developing ML-based intrusion detection using ensemble methods and autoencoders for anomaly detection, with SHAP-based explainability.',
    techStack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'CICIDS Dataset'],
    decisions: [
      'Ensemble of Random Forest + XGBoost for robust classification',
      'Autoencoder for unsupervised anomaly detection',
      'SHAP integration for model interpretability — crucial for security applications',
    ],
    interviewValue: 'Shows applied ML in cybersecurity, model interpretability awareness, and handling imbalanced datasets.',
  },
  {
    id: 'drone-detection',
    title: 'Drone Object Detection',
    subtitle: 'YOLOv11 Real-Time System',
    icon: Camera,
    status: 'completed',
    tags: ['YOLOv11', 'Computer Vision', 'Real-Time'],
    problem: 'Real-time object detection for drone applications across multiple input sources.',
    solution: 'Implemented YOLOv11 detection supporting video files, images, USB cameras, and Raspberry Pi cameras with FPS tracking and recording.',
    techStack: ['Python', 'YOLOv11', 'OpenCV', 'Raspberry Pi'],
    decisions: [
      'YOLOv11 for optimal speed/accuracy tradeoff in real-time',
      'Multi-source input abstraction for deployment flexibility',
      'Confidence filtering and FPS optimization for smooth UX',
    ],
    interviewValue: 'Demonstrates computer vision expertise, real-time systems optimization, and edge deployment experience.',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'completed' ? 'status-completed' : 'status-wip'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>

        {/* Problem & Solution Preview */}
        <div className="space-y-3">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Problem</span>
            <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
          <div>
            <span className="text-xs font-medium text-secondary uppercase tracking-wider">Solution</span>
            <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
          </div>

          <div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Tech Stack</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs rounded bg-accent/10 text-accent border border-accent/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Engineering Decisions</span>
            <ul className="mt-2 space-y-1.5">
              {project.decisions.map((decision, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  {decision}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Interview Value</span>
            <p className="text-sm text-foreground mt-1">{project.interviewValue}</p>
          </div>
        </div>
      </motion.div>

      {/* Expand Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-t border-border"
      >
        {isExpanded ? (
          <>
            <span>Show Less</span>
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>View Technical Details</span>
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real systems built with engineering rigor — each demonstrating problem-solving and technical depth
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="cyber-outline" size="lg" asChild>
            <a href="https://github.com/avkbsurya119" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
