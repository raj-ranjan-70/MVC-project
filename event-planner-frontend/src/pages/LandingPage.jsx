import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Wallet, 
  Truck, 
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

const LandingPage = () => {
  const testimonials = [
    {
      quote: "Aura transformed our wedding into a cinematic masterpiece. The curator matching was seamless and secure.",
      author: "Eleanor & Sterling",
      role: "Brides & Planners",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
      rating: 5,
      date: "October 2025"
    },
    {
      quote: "The budget layout system gave us absolute clarity. We were able to manage high-end caterers without a single worry.",
      author: "Maximilian K.",
      role: "Corporate Lead, Horizon",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
      rating: 5,
      date: "December 2025"
    },
    {
      quote: "Absolute perfection. The dynamic timeline orchestration helped our team coordinate guest lists effortlessly.",
      author: "Charlotte & Arthur",
      role: "Exclusive Wedding",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60",
      rating: 5,
      date: "January 2026"
    },
    {
      quote: "Using Aura felt like having a personal luxury concierge. The chat notifications and workflow keep everyone aligned.",
      author: "Sienna & James",
      role: "Anniversary Soiree",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      rating: 5,
      date: "March 2026"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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

      {/* Testimonials Section - Our wall of 💜 */}
      <section className="py-24 px-8 md:px-16 bg-[#faf9fb]/60 relative overflow-hidden border-t border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-[#b388ff] uppercase tracking-widest bg-[#b388ff]/10 px-4 py-1.5 rounded-full">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4">
                Our wall of 💜
              </h2>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-[#b388ff] hover:text-[#b388ff] transition-all shadow-sm hover:shadow"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-[#b388ff] hover:text-[#b388ff] transition-all shadow-sm hover:shadow"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div 
            className="overflow-hidden relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              animate={{ x: `-${currentIndex * (isMobile ? 100 : 50)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex w-full"
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <div className="glass-card p-8 md:p-10 rounded-3xl h-[340px] flex flex-col justify-between border border-gray-100/50 shadow-sm hover:shadow-md transition-all bg-white relative overflow-hidden group">
                    {/* Soft background glow on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#b388ff]/5 rounded-full filter blur-2xl group-hover:bg-[#b388ff]/10 transition-all duration-500 -mr-16 -mt-16"></div>
                    
                    {/* Stars */}
                    <div className="flex items-center space-x-1 text-purple-600">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="text-[#b388ff]" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-600 text-sm md:text-md italic leading-relaxed relative z-10 flex-grow mt-6">
                      "{t.quote}"
                    </p>

                    {/* Author Profile */}
                    <div className="flex items-center space-x-4 border-t border-gray-100/80 pt-6 mt-6">
                      <img 
                        src={t.avatar} 
                        alt={t.author} 
                        className="w-12 h-12 rounded-full object-cover border border-[#b388ff]/20 shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                        <p className="text-xs text-gray-400 font-medium">{t.role} • <span className="text-[#b388ff] font-semibold">{t.date}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
