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
          className="relative z-10 max-w-6xl w-full glass-card p-8 md:p-12 rounded-2xl text-center border-white/20"
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

      {/* Visual CTA Section with Illustration */}
      <section className="relative overflow-hidden bg-[#e6eff6] pt-24 pb-0 flex flex-col items-center justify-between min-h-[600px] md:min-h-[750px] border-b border-gray-100">
        {/* Background Landscape Illustration */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/aura-footer-bg.png" 
            alt="Garden Landscape" 
            className="w-full h-full object-cover object-bottom"
          />
          {/* Subtle soft sky blue/lavender gradient top overlay to blend the text nicely */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6eff6]/80 via-transparent to-transparent"></div>
        </div>

        {/* CTA Text */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#2c3e50] tracking-tight">
            For every dream celebration.
          </h2>
          <p className="text-gray-600 md:text-md mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions or just want to see how Aura can help? Reach out anytime, we'll guide you every step of the way.
          </p>
          <Link 
            to="/signup" 
            className="inline-flex items-center space-x-2 bg-white text-gray-900 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-md hover:shadow-lg text-sm border border-gray-200/50"
          >
            <span>Match with an expert</span>
            <ArrowRight size={16} className="text-gray-900" />
          </Link>
        </div>

        {/* Massive Bold Aura Text */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none mt-20 z-10">
          <h1 className="text-center font-display text-[14rem] sm:text-[18rem] md:text-[25rem] lg:text-[28rem] font-black text-white leading-none tracking-tighter uppercase opacity-95">
            aura
          </h1>
        </div>
      </section>

      {/* Clean Modern Footer */}
      <footer className="bg-white pt-20 pb-8 px-8 md:px-16 border-t border-gray-100 text-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold text-gray-900 tracking-tight">aura</span>
            </div>
            <p className="text-sm text-gray-400 font-medium max-w-xs">
              For every beautiful milestone. Beautiful blueprints, dynamic guest orchestrations, and secure curator matching.
            </p>
            <div>
              <Link 
                to="/signup" 
                className="inline-flex bg-gray-900 text-white font-bold px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all text-xs shadow-md"
              >
                Get started today
              </Link>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Follow us</p>
              <div className="flex items-center space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all">
                  <span className="font-bold text-xs">in</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all">
                  <span className="font-bold text-xs">ig</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all">
                  <span className="font-bold text-xs">fb</span>
                </a>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Our focus areas</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Weddings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Galas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Birthday Bashes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Anniversary Soirees</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Charity Events</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Styled Shoots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Dinners</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Toolkit</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Guest Orchestrator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Budget Layouts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Timeline Curation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Specification Editor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Concierge Support</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">About</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Join our team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
          <div>
            <span>Aura, 2026</span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-6 text-[10px] text-gray-300 leading-relaxed font-medium">
          Aura is a private software company not affiliated with nor endorsed by any government agency. Aura does not charge clients for any official forms, however, we charge fees for the use of Aura care, software, and dynamic event layout orchestration tools.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
