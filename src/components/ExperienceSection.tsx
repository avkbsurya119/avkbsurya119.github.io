import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, Award, Heart } from 'lucide-react';

const experiences = [
  {
    title: 'Hospitality Manager',
    organization: 'Anokha 2024',
    period: '2024',
    icon: Users,
    description: 'Led guest handling and event logistics for Amrita\'s flagship techno-cultural festival.',
    skills: ['Event Coordination', 'Guest Relations', 'Team Leadership', 'Logistics Management'],
  },
  {
    title: 'NSS Volunteer',
    organization: 'National Service Scheme',
    period: '2024 - 2025',
    icon: Heart,
    description: 'Active participation in Swachh Hi Seva, Marathon 2024, and Rural Camps.',
    skills: ['Community Service', 'Team Collaboration', 'Social Responsibility'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Leadership & <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond code — demonstrating ownership, communication, and reliability
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="skill-card flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{exp.title}</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                    {exp.organization}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
