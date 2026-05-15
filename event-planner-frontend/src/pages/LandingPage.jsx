import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Wallet, 
  Truck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-section-image.jpg" 
            alt="Wedding Luxury" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/2"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl w-full glass-card p-8 md:p-12 rounded-[3rem] text-center border-white/20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4 text-gray-900"
          >
            Plan Every Moment <span className="text-primary italic">Beautifully.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-md md:text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Experience the prestige of luxury event planning with our beautifully designed concierge dashboard. Orchestrate every detail with cinematic grace and absolute precision.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/signup" className="elegant-button-primary flex items-center group text-md px-8 py-3">
              Start Planning
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/login" className="elegant-button-secondary text-md px-8 py-3 bg-white/50 backdrop-blur-md">
              View Demo
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Precision Meets Elegance</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A curated suite of tools designed to remove the stress from luxury event curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Guest Management',
                desc: 'Effortlessly organize sophisticated guest lists, dietary requirements, and digital RSVPs in one cohesive space.',
                icon: Users,
                color: 'bg-purple-50 text-purple-600'
              },
              {
                title: 'Budget Tracking',
                desc: 'Maintain absolute financial clarity with elegant visualizations of your investments and upcoming payments.',
                icon: Wallet,
                color: 'bg-gold/10 text-gold'
              },
              {
                title: 'Vendor Coordination',
                desc: 'Curate your dream team. Store contracts, communications, and styling briefs securely in a centralized hub.',
                icon: Truck,
                color: 'bg-blue-50 text-blue-600'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-3xl"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8 md:px-16 bg-primary relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Start Planning Your <br /> Perfect Event Today.
          </h2>
          <p className="text-primary-container text-xl mb-12">
            Join exclusive planners and discerning couples who trust our platform to bring their most ambitious visions to life with effortless grace.
          </p>
          <Link to="/signup" className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors">
            Begin Your Journey
          </Link>
        </div>
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      </section>
    </div>
  );
};

export default LandingPage;
