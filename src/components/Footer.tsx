import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name & Role */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-gradient mb-1">
              AVKBS
            </h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer | Applied AI/ML | System Builder
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/avkbsurya119', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/avkbsurya', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:avkbsurya@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border bg-card/50 hover:border-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Built with <Heart className="w-3 h-3 text-primary" /> © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
