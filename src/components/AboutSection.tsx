import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Brain, Cpu, Zap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'CGPA 8.45/10 at Amrita School of Engineering',
  },
  {
    icon: Code,
    title: 'Strong DSA Foundation',
    description: 'Algorithms, Data Structures, OOP mastery',
  },
  {
    icon: Cpu,
    title: 'Systems Knowledge',
    description: 'OS, DBMS, Computer Networks fundamentals',
  },
  {
    icon: Brain,
    title: 'AI/ML Experience',
    description: 'PyTorch, YOLO, scikit-learn implementations',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            How I Think as an <span className="text-gradient">Engineer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">final-year B.Tech CSE student</span> at 
              Amrita School of Engineering with a passion for building systems that solve real problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My engineering approach is rooted in <span className="text-primary">strong fundamentals</span> — 
              from classical data structures and algorithms to operating systems and database management. 
              This foundation enables me to architect solutions that are both efficient and scalable.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've applied these skills across diverse domains — building{' '}
              <span className="text-secondary">CLI systems</span>,{' '}
              <span className="text-accent">desktop & mobile applications</span>, and{' '}
              <span className="text-primary">AI/ML pipelines</span>. I'm not locked to any single domain; 
              I'm adaptable, curious, and execution-driven.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Actively Open to Work</span>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="skill-card group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
