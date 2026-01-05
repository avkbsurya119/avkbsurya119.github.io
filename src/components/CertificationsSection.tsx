import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Building } from 'lucide-react';

const certifications = [
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'Tata (via Forage)',
    year: '2025',
    type: 'Job Simulation',
    description: 'Completed AI-powered data analytics tasks including EDA, risk assessment, and no-code predictive modeling. Designed AI-driven collections strategy with ethical AI considerations.',
    highlights: [
      'Exploratory Data Analysis (EDA)',
      'Risk Indicator Assessment',
      'No-code Predictive Modeling',
      'Ethical AI Compliance',
    ],
  },
  {
    title: 'Certificate of Appreciation',
    issuer: 'NSS - Swachh Hi Seva',
    year: '2024',
    type: 'Volunteering',
    description: 'Recognition for active contribution to the national cleanliness campaign.',
    highlights: ['Community Service', 'Environmental Awareness'],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Credentials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="skill-card group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                    <span className="text-primary">•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-4">
                {cert.type}
              </span>

              <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2">
                {cert.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
