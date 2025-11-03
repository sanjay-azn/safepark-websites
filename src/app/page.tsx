'use client';

import { Shield, Umbrella, Zap, UserCheck, Phone, MessageCircle, MapPin, Star, Award, ArrowRight, CheckCircle2, Play, ChevronLeft, ChevronRight, Plus, Minus, Instagram, Flame, Droplets, Bolt, Wind, Wrench, Sun, Droplet, Cloud, Cog, Gauge, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';

interface VisibilityState {
  [key: string]: boolean;
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(-1);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).id;
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-observe]').forEach((el) => {
      const element = el as HTMLElement;
      element.id = element.id || `obs-${Math.random().toString(36).substr(2, 9)}`;
      observer.observe(el);
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax').forEach((el) => {
        const element = el as HTMLElement;
        const offset = scrolled * 0.5;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const galleryImages = [
    { src: "/gallery/hero-car.jpeg", alt: "Premium SafePark Installation", title: "Professional Installation" },
    { src: "/gallery/gallery1.jpg", alt: "Luxury Car Protection", title: "Luxury Protection" },
    { src: "/gallery/gallery2.jpg", alt: "All-Weather Setup", title: "All-Weather Ready" },
    { src: "/gallery/gallery3.jpg", alt: "Quick Setup Demo", title: "Fast Setup" },
  ];

  const faqItems = [
    {
      question: "Will it fit my exact car model?",
      answer: "Yes. We size by segment and confirm model before delivery so the foldable shelter fits your car comfortably."
    },
    {
      question: "Do you install at home?",
      answer: "Delivery & on-site anchoring are available across Tamil Nadu and nearby regions. Share your pin & surface details for scheduling."
    },
    {
      question: "How does it handle wind?",
      answer: "Anchors at ground level with tie-downs for stability. In extreme weather, keep the shed closed and secured."
    },
    {
      question: "Any maintenance?",
      answer: "Occasional wipe-down. Avoid sharp edges and ensure anchors remain tight."
    }
  ];

  return (
    <div className="scroll-smooth bg-black min-h-screen overflow-x-hidden">

      {/* HERO SECTION - INTERACTIVE WITH ANIMATED BLOBS */}
      <section className="py-32 lg:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden min-h-[650px] flex items-center bg-gradient-to-br from-slate-900 via-black to-slate-950">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-black to-slate-900/30"></div>

          {/* INTERACTIVE ANIMATED BLOB - Like Spotify */}
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-emerald-500/10 rounded-full blur-3xl opacity-70 transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          ></div>

          {/* Secondary animated blob */}
          <div
            className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-50 transition-transform duration-300"
            style={{
              transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            }}
          ></div>

          {/* Animated curve shape (Spotify-style) */}
          <svg
            className="absolute right-0 top-0 w-96 h-96 opacity-40"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 200 100 Q 300 150 300 250 Q 250 350 150 350 Q 50 350 50 250 Q 50 150 150 100 Q 200 50 200 100"
              fill="url(#blobGradient)"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            {/* LEFT COLUMN - CONTENT */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/30 via-cyan-500/25 to-emerald-500/30 backdrop-blur-md border-2 border-emerald-400/60 text-emerald-200 font-medium text-sm hover:from-emerald-500/40 hover:via-cyan-500/35 hover:to-emerald-500/40 hover:border-emerald-300/80 transition-all duration-300 w-fit animate-fade-in-down shadow-lg shadow-emerald-500/40">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/80"></div>
                Premium Retractable Carport
              </div>

              {/* HEADLINE */}
              <h1 className="text-4xl md:text-5xl font-black leading-tight text-white animate-fade-in-up drop-shadow-xl" style={{ animationDelay: '0.1s' }}>
                Your Car Deserves<br className="hidden md:block" /> <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">SafePark.</span>
              </h1>
              
              {/* DESCRIPTION */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The world's smartest portable car shelter. Protects from sun, rain, dust, and damage. <span className="text-emerald-300 font-medium">Opens in just 2-5 seconds.</span>
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a href="#" className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-white font-bold text-sm md:text-base hover:shadow-xl hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2 overflow-hidden border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 font-semibold">Get Started</span>
                </a>
                
                <a href="#gallery" className="relative px-8 py-3.5 rounded-lg border-2 border-emerald-400/60 bg-transparent text-emerald-200 font-bold text-sm md:text-base hover:bg-emerald-500/15 hover:border-emerald-300 hover:text-emerald-100 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2 group backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10 font-semibold">Watch Demo</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - IMAGE */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last parallax" style={{ animation: 'zoom-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both' }}>
              <div className="relative w-full max-w-[520px] h-[450px] group">
                <img src="/gallery/gallery1.jpg" alt="SafePark retractable carport in action" className="relative w-full h-full object-cover rounded-3xl shadow-lg border-2 border-emerald-400/50 group-hover:border-emerald-300/70 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-500 group-hover:scale-[1.01]" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-12 bg-gradient-to-b from-slate-950 via-slate-950/30 to-slate-950"></div>
      

    {/* FEATURES - PREMIUM ENTERPRISE DESIGN */}
<section className="py-24 px-6 md:px-12 lg:px-20 relative bg-black overflow-hidden">
  {/* Premium background elements */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-30"></div>
  </div>

  <div className="max-w-7xl mx-auto">
    {/* Section Header - Premium */}
    <div className="text-center mb-20" id="features" data-observe>
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 backdrop-blur-xl border border-emerald-400/40 text-emerald-300 font-semibold text-xs md:text-sm tracking-wide mb-6 shadow-lg shadow-emerald-500/10">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        Advanced Protection System
      </div>
      
      <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        Complete Protection,<br className="hidden md:inline" /> <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">No Compromise</span>
      </h2>
      
      <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
        Four engineered defense layers work together to protect your vehicle from every element, every season
      </p>
    </div>

    {/* Premium Features Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Feature 1 - UV Protection */}
      <div 
        className={`group relative p-8 rounded-2xl border border-transparent bg-gradient-to-br from-slate-900/80 to-black hover:from-slate-900 hover:to-slate-950 transition-all duration-500 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden`}
        style={{ 
          opacity: isVisible['feature-1'] ? 1 : 0, 
          transform: isVisible['feature-1'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0s'
        }}
        id="feature-1"
        data-observe
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
        <div className="absolute inset-px bg-gradient-to-br from-slate-900/80 to-black rounded-2xl -z-10"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 group-hover:from-emerald-500/30 group-hover:to-cyan-500/20 transition-all duration-300 group-hover:scale-110">
              <Sun className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="text-xs font-semibold text-emerald-400/60 bg-emerald-500/10 px-3 py-1 rounded-full">Premium</div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">UV Shield</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Blocks 99.8% of harmful UV rays, protecting your car's paint and interior from fading and oxidation</p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-emerald-300/70 group-hover:text-emerald-300 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span>Industry-leading protection</span>
          </div>
        </div>
      </div>

      {/* Feature 2 - Waterproof */}
      <div 
        className={`group relative p-8 rounded-2xl border border-transparent bg-gradient-to-br from-slate-900/80 to-black hover:from-slate-900 hover:to-slate-950 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}
        style={{ 
          opacity: isVisible['feature-2'] ? 1 : 0, 
          transform: isVisible['feature-2'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s'
        }}
        id="feature-2"
        data-observe
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
        <div className="absolute inset-px bg-gradient-to-br from-slate-900/80 to-black rounded-2xl -z-10"></div>

        <div className="relative z-10 space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 group-hover:from-cyan-500/30 group-hover:to-blue-500/20 transition-all duration-300 group-hover:scale-110">
              <Droplets className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="text-xs font-semibold text-cyan-400/60 bg-cyan-500/10 px-3 py-1 rounded-full">Premium</div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Waterproof Coating</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Triple-layered hydrophobic fabric repels heavy rain, moisture, and condensation in any climate</p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-cyan-300/70 group-hover:text-cyan-300 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span>Water-resistant guarantee</span>
          </div>
        </div>
      </div>

      {/* Feature 3 - Durable Fabric */}
      <div 
        className={`group relative p-8 rounded-2xl border border-transparent bg-gradient-to-br from-slate-900/80 to-black hover:from-slate-900 hover:to-slate-950 transition-all duration-500 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden`}
        style={{ 
          opacity: isVisible['feature-3'] ? 1 : 0, 
          transform: isVisible['feature-3'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
        }}
        id="feature-3"
        data-observe
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
        <div className="absolute inset-px bg-gradient-to-br from-slate-900/80 to-black rounded-2xl -z-10"></div>

        <div className="relative z-10 space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 group-hover:from-amber-500/30 group-hover:to-orange-500/20 transition-all duration-300 group-hover:scale-110">
              <Zap className="w-7 h-7 text-amber-400" />
            </div>
            <div className="text-xs font-semibold text-amber-400/60 bg-amber-500/10 px-3 py-1 rounded-full">Military</div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Scratch-Resistant</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Military-grade polyester fabric withstands sharp objects, rough handling, and extreme weather</p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-amber-300/70 group-hover:text-amber-300 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span>10-year durability tested</span>
          </div>
        </div>
      </div>

      {/* Feature 4 - Safe Design */}
      <div 
        className={`group relative p-8 rounded-2xl border border-transparent bg-gradient-to-br from-slate-900/80 to-black hover:from-slate-900 hover:to-slate-950 transition-all duration-500 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden`}
        style={{ 
          opacity: isVisible['feature-4'] ? 1 : 0, 
          transform: isVisible['feature-4'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
        }}
        id="feature-4"
        data-observe
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
        <div className="absolute inset-px bg-gradient-to-br from-slate-900/80 to-black rounded-2xl -z-10"></div>

        <div className="relative z-10 space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 group-hover:from-emerald-500/30 group-hover:to-green-500/20 transition-all duration-300 group-hover:scale-110">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="text-xs font-semibold text-emerald-400/60 bg-emerald-500/10 px-3 py-1 rounded-full">Certified</div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Family Safe</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Non-toxic, eco-friendly materials certified for family use. Smooth edges and safety-first design</p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-emerald-300/70 group-hover:text-emerald-300 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span>Safety certified</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* 2x2 GRID FEATURES FROM FEATURES PAGE */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Flame className="w-10 h-10 text-red-400" />,
                title: "Thermal Protection",
                subtitle: "Heat & flame resistant",
                desc: "Advanced thermal resistance up to 2000°F with flame-retardant coating.",
                features: ["Heat resistant to 2000°F", "Flame retardant", "Structural integrity"]
              },
              {
                icon: <Droplets className="w-10 h-10 text-blue-400" />,
                title: "Weather Shield",
                subtitle: "IPX7 waterproof",
                desc: "Military-grade waterproof coating with advanced drainage system.",
                features: ["100% waterproof", "Advanced drainage", "UV resistance"]
              },
              {
                icon: <Bolt className="w-10 h-10 text-yellow-400" />,
                title: "Impact Guard",
                subtitle: "Military-grade fabric",
                desc: "Oxford 600D fabric prevents scratches, dents, and damage.",
                features: ["Scratch resistant", "Impact protected", "Tear-proof"]
              },
              {
                icon: <Award className="w-10 h-10 text-emerald-400" />,
                title: "Safety First",
                subtitle: "Family approved",
                desc: "Rounded edges and non-toxic materials for complete peace of mind.",
                features: ["Child safe design", "Stable frame", "Non-toxic"]
              }
            ].map((feature, idx) => {
              const featureId = `feature-2x2-${idx}`;
              const isElementVisible = isVisible[featureId] || false;
              
              return (
                <div 
                  key={idx}
                  id={featureId}
                  data-observe="true"
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-xl p-6 transition-all duration-500 h-full flex flex-col group-hover:border-emerald-500/30 group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.05] group-hover:-translate-y-1"
                  style={{
                    opacity: isElementVisible ? 1 : 0,
                    transform: isElementVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s`
                  }}
                >
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-4 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{feature.subtitle}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-grow">{feature.desc}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300 group-hover:text-gray-200 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-black via-slate-950/50 to-slate-950"></div>


      {/* WHY SAFEPARK BEATS - COMPARISON TABLE */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900/20 to-black relative overflow-hidden">
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div 
            id="comparison-header"
            data-observe="true"
            className="text-center mb-16"
            style={{
              opacity: isVisible['comparison-header'] ? 1 : 0,
              transform: isVisible['comparison-header'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Why SafePark Beats Traditional Car Sheds</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-400">Industry comparison—see the difference quality makes</p>
          </div>

          <div className="space-y-3">
            {[
              { feature: "Portability", traditional: "Fixed", safepark: "Retractable" },
              { feature: "Aesthetics", traditional: "Basic", safepark: "Stylish & Modern" },
              { feature: "Installation", traditional: "Complex", safepark: "Quick & Easy" },
              { feature: "Material Quality", traditional: "Low-grade", safepark: "Military-Grade" },
              { feature: "Weather Protection", traditional: "Limited", safepark: "Complete Coverage" },
              { feature: "Space Usage", traditional: "Permanent", safepark: "Collapsible" }
            ].map((item, idx) => {
              const comparisonId = `comparison-${idx}`;
              const isComparisonVisible = isVisible[comparisonId] || false;
              
              return (
                <div 
                  key={idx}
                  id={comparisonId}
                  data-observe="true"
                  className="grid grid-cols-3 gap-4 p-5 rounded-lg bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all hover:from-white/[0.08] hover:to-white/[0.04] group/row"
                  style={{
                    opacity: isComparisonVisible ? 1 : 0,
                    transform: isComparisonVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s`
                  }}
                >
                  <div className="font-semibold text-white text-sm md:text-base group-hover/row:text-emerald-300 transition-colors">{item.feature}</div>
                  <div className="text-gray-400 flex items-center gap-2 justify-center text-xs md:text-sm">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-400 font-bold text-xs flex-shrink-0 group-hover/row:bg-red-500/40 transition-colors">✕</span> 
                    <span className="group-hover/row:line-through transition-all">{item.traditional}</span>
                  </div>
                  <div className="text-emerald-300 font-semibold flex items-center gap-2 justify-end text-xs md:text-sm">
                    <span className="text-emerald-400 font-bold">✓</span> 
                    <span className="group-hover/row:text-emerald-200 transition-colors">{item.safepark}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
     {/* BREATHING SPACE */}
    <div className="h-20 bg-gradient-to-b from-slate-950 via-black/50 to-black"></div>


      {/* WHY CAR OWNERS CHOOSE */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/3 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div 
            id="benefits-header"
            data-observe="true"
            className="text-center mb-16"
            style={{
              opacity: isVisible['benefits-header'] ? 1 : 0,
              transform: isVisible['benefits-header'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Why Car Owners Choose SafePark</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-400">Real benefits from premium protection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: ">90% Heat & UV Block", 
                desc: "Protects paint, dashboard, and interiors from sun damage.",
                icon: <Sun className="w-8 h-8 text-yellow-400" />,
                color: "from-yellow-500/20"
              },
              { 
                title: "Impact Resistant", 
                desc: "Everyday hits won't harm your car. Tested for durability.",
                icon: <Bolt className="w-8 h-8 text-orange-400" />,
                color: "from-orange-500/20"
              },
              { 
                title: "Water & Dust Proof", 
                desc: "No more scratches, no more daily cleaning needed.",
                icon: <Droplet className="w-8 h-8 text-blue-400" />,
                color: "from-blue-500/20"
              },
              { 
                title: "Wind Stability", 
                desc: "Engineered to withstand rough weather conditions.",
                icon: <Wind className="w-8 h-8 text-cyan-400" />,
                color: "from-cyan-500/20"
              },
              { 
                title: "Rust-Free Frame", 
                desc: "Premium, durable, and stylish galvanized frame.",
                icon: <Wrench className="w-8 h-8 text-red-400" />,
                color: "from-red-500/20"
              },
              { 
                title: "Retractable in 2-5 Seconds", 
                desc: "Park, pull, and protect instantly. No complexity.",
                icon: <Cog className="w-8 h-8 text-emerald-400" />,
                color: "from-emerald-500/20"
              }
            ].map((benefit, idx) => {
              const benefitId = `benefit-${idx}`;
              const isBenefitVisible = isVisible[benefitId] || false;
              
              return (
                <div 
                  key={idx}
                  id={benefitId}
                  data-observe="true"
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 transition-all h-full hover:from-white/[0.12] hover:to-white/[0.04] cursor-pointer overflow-hidden"
                  style={{
                    opacity: isBenefitVisible ? 1 : 0,
                    transform: isBenefitVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                    transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.12}s`
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                  </div>

                  <div className="mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 origin-center inline-block">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{benefit.desc}</p>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE - AFTER WHY CHOOSE */}
      <div className="h-8 bg-gradient-to-b from-black to-black"></div>

      {/* VALUE PROPS - BADGES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)] -z-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14" id="value-props" data-observe>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-semibold mb-4 shadow-lg" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)', transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <Award className="w-3.5 h-3.5" />
              Why Choose SafePark
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              Why Choose SafePark?
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s' }}>
              Premium protection engineered for modern vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <Shield className="w-9 h-9" />, title: "Weather Protection", desc: "Advanced weather-resistant fabric with 100% UV protection", badge: "100% Waterproof", gradient: "from-blue-500/20 to-cyan-500/10", iconBg: "from-blue-500/20 to-cyan-500/15", iconColor: "text-blue-400" },
              { icon: <Zap className="w-9 h-9" />, title: "Scratch & Damage Cover", desc: "Revolutionary retractable design prevents all surface damage", badge: "Military Grade", gradient: "from-yellow-500/20 to-orange-500/10", iconBg: "from-yellow-500/20 to-orange-500/15", iconColor: "text-yellow-400" },
              { icon: <Award className="w-9 h-9" />, title: "Peace of Mind Warranty", desc: "2-year comprehensive warranty with premium support", badge: "2-Year Coverage", gradient: "from-purple-500/20 to-pink-500/10", iconBg: "from-purple-500/20 to-pink-500/15", iconColor: "text-purple-400" }
            ].map((item, idx) => {
              const valueId = `value-${idx}`;
              const isValueVisible = isVisible[valueId] || false;
              return (
                <div key={idx} id={valueId} data-observe className={`group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border-2 border-white/15 hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/30`} style={{ opacity: isValueVisible ? 1 : 0, transform: isValueVisible ? 'translateX(0) translateY(0)' : 'translateX(-20px) translateY(20px)', transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 150}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="px-4 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-500/50 text-emerald-200 text-xs font-bold whitespace-nowrap shadow-lg">
                      {item.badge}
                    </div>
                  </div>

                  <div className="space-y-3 lg:space-y-4 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconBg} backdrop-blur-md flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-all duration-300 shadow-lg border-2 border-white/20 mx-auto`} style={{ animation: `icon-spin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms forwards`, opacity: 0 }}>
                      {item.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white text-center">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm text-center">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-6 bg-gradient-to-b from-black via-slate-950/20 to-slate-950"></div>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-slate-950 via-slate-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.08),transparent_50%)] -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" id="gallery-header" data-observe>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-semibold mb-4 shadow-lg" style={{ opacity: isVisible['gallery-header'] ? 1 : 0, transform: isVisible['gallery-header'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)', transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <Play className="w-3.5 h-3.5" />
              Installation Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl" style={{ opacity: isVisible['gallery-header'] ? 1 : 0, transform: isVisible['gallery-header'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              SafePark Installation
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-light" style={{ opacity: isVisible['gallery-header'] ? 1 : 0, transform: isVisible['gallery-header'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s' }}>
              Real installations, real results
            </p>
          </div>
          <div id="carousel" data-observe className="relative" style={{ opacity: isVisible['carousel'] ? 1 : 0, transform: isVisible['carousel'] ? 'scale(1)' : 'scale(0.95)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/40 bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-emerald-500/20 backdrop-blur-sm">
              <div className="relative w-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center overflow-hidden" style={{ height: '420px' }}>
                <img src={galleryImages[currentSlide].src} alt={galleryImages[currentSlide].alt} className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 p-4" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <button onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 backdrop-blur-md text-white hover:from-emerald-500/50 hover:to-cyan-500/50 border-2 border-emerald-400/50 transition-all z-10 hover:scale-110 duration-300 shadow-lg shadow-emerald-500/40">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 backdrop-blur-md text-white hover:from-emerald-500/50 hover:to-cyan-500/50 border-2 border-emerald-400/50 transition-all z-10 hover:scale-110 duration-300 shadow-lg shadow-emerald-500/40">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 backdrop-blur-md text-emerald-200 text-xs font-bold border-2 border-emerald-400/50 z-10 shadow-lg">
                {currentSlide + 1} / {galleryImages.length}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-2xl">{galleryImages[currentSlide].title}</h3>
              </div>
            </div>
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scroll-smooth">
              {galleryImages.map((img, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentSlide === idx ? 'border-emerald-400 ring-2 ring-emerald-400/60 scale-105 shadow-lg shadow-emerald-500/40' : 'border-white/20 hover:border-white/40'}`}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  {currentSlide === idx && (<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-transparent"></div>)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-6 bg-gradient-to-b from-slate-950 via-black/50 to-black"></div>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.06),transparent_60%)] -z-10"></div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500/15 to-transparent rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-3xl animate-float-2"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div id="faq-header" data-observe className="text-center mb-14" style={{ opacity: isVisible['faq-header'] ? 1 : 0, transform: isVisible['faq-header'] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-semibold mb-4 shadow-lg">
              <MessageCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-gray-400">Everything you need to know</p>
          </div>
          <div id="faq-list" data-observe className="space-y-3">
            {faqItems.map((item, idx) => {
              const faqId = `faq-${idx}`;
              const isFaqVisible = isVisible[faqId] || false;
              return (
                <div key={idx} id={faqId} data-observe className="border-2 border-white/15 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.05] hover:border-emerald-400/40 backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-lg" style={{ opacity: isFaqVisible ? 1 : 0, transform: isFaqVisible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms` }}>
                  <button onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-emerald-500/5 hover:to-transparent transition-all">
                    <h3 className="text-sm md:text-base font-bold text-white flex-1 pr-3">{item.question}</h3>
                    <div className={`ml-3 flex-shrink-0 p-1.5 rounded-lg ${expandedFaq === idx ? 'bg-emerald-500/25 text-emerald-300' : 'bg-white/15 text-gray-400'} transition-all duration-300`} style={{ transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      {expandedFaq === idx ? (<Minus className="w-4 h-4" />) : (<Plus className="w-4 h-4" />)}
                    </div>
                  </button>
                  {expandedFaq === idx && (<div className="px-5 pb-4 pt-1 text-gray-300 leading-relaxed text-sm border-t-2 border-white/10 bg-gradient-to-r from-emerald-500/8 to-transparent" style={{ animation: 'fade-in-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}>
                    {item.answer}
                  </div>)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-5 bg-gradient-to-b from-black to-black"></div>

      {/* CTA - SLIM VERSION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-black via-slate-900/30 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)] -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <div id="cta" data-observe className="relative" style={{ opacity: isVisible['cta'] ? 1 : 0, transform: isVisible['cta'] ? 'scale(1)' : 'scale(0.95)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-cyan-600/15 to-emerald-600/20 rounded-2xl blur-3xl opacity-70 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-br from-white/[0.10] to-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border-2 border-emerald-400/40 text-center space-y-4 shadow-2xl shadow-emerald-500/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-2xl">Ready to Protect Your Vehicle?</h2>
              <p className="text-sm md:text-base text-gray-300 font-light">Join thousands who chose SafePark. Get started in minutes.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a href="https://wa.me/919600840058" className="relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/70 hover:scale-105 transition-all duration-500 text-sm overflow-hidden group border border-white/20" style={{ animation: 'button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards', opacity: 0 }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-1.5"><MessageCircle className="w-4 h-4" /> WhatsApp Now</span>
                </a>

                <a href="https://www.instagram.com/safe_park_india?igsh=MXQ5eGVuOWw1eWpzcg==" target="_blank" rel="noopener noreferrer" className="relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold hover:shadow-2xl hover:shadow-pink-500/70 hover:scale-105 transition-all duration-500 text-sm overflow-hidden group border border-white/20" style={{ animation: 'button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards', opacity: 0 }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-1.5"><Instagram className="w-4 h-4" /> Follow Us</span>
                </a>

                <a href="tel:+919600840058" className="px-6 py-2.5 rounded-lg border-2 border-emerald-400/70 bg-emerald-500/15 text-emerald-200 font-bold hover:bg-emerald-500/25 hover:border-emerald-300 hover:text-emerald-100 hover:shadow-lg hover:shadow-emerald-500/40 backdrop-blur-sm transition-all duration-300 text-sm" style={{ animation: 'button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards', opacity: 0 }}>
                  <span className="flex items-center justify-center gap-1.5"><Phone className="w-4 h-4" /> Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-white/15 bg-gradient-to-b from-black to-slate-950 py-12 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.08),transparent_60%)] -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/40">S</div>
                <span className="text-xl font-bold text-white">SafePark</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4 font-light text-xs md:text-sm">Premium car protection engineered for the modern world. Trusted by thousands across India.</p>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                ))}
              </div>
              <p className="text-xs text-gray-400">2,000+ Happy Customers</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-base">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+919600840058" className="flex items-center gap-2.5 text-gray-400 hover:text-emerald-300 transition-colors text-xs md:text-sm group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/25 to-cyan-500/20 backdrop-blur-md flex items-center justify-center border-2 border-emerald-400/40 group-hover:scale-110 transition-transform">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                  +91 9600840058
                </a>
                <a href="https://www.instagram.com/safe_park_india?igsh=MXQ5eGVuOWw1eWpzcg==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-gray-400 hover:text-pink-300 transition-colors text-xs md:text-sm group">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500/25 to-purple-500/20 backdrop-blur-md flex items-center justify-center border-2 border-pink-400/40 group-hover:scale-110 transition-transform">
                    <Instagram className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                  @safe_park_india
                </a>
                <div className="flex items-center gap-2.5 text-gray-400 text-xs md:text-sm">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/25 to-pink-500/20 backdrop-blur-md flex items-center justify-center border-2 border-purple-400/40">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-white/15 pt-6 text-center text-gray-400 font-light text-xs">
            <p>© 2025 SafePark. Engineered excellence from Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob-1 { 0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); } 33% { transform: translate(40px, -60px) scale(1.15) rotate(15deg); } 66% { transform: translate(-30px, 30px) scale(0.85) rotate(-15deg); } }
        @keyframes blob-2 { 0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); } 33% { transform: translate(-50px, 50px) scale(0.9) rotate(-12deg); } 66% { transform: translate(50px, -40px) scale(1.1) rotate(12deg); } }
        @keyframes blob-3 { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @keyframes float-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.05); } 66% { transform: translate(-20px, 20px) scale(0.95); } }
        @keyframes float-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(-40px, 40px) scale(0.98); } 66% { transform: translate(40px, -30px) scale(1.05); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoom-in { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes icon-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes icon-spin { from { transform: rotate(-180deg); opacity: 0; } to { transform: rotate(0deg); opacity: 1; } }
        @keyframes badge-pop { from { opacity: 0; transform: scale(0) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes star-pop { from { opacity: 0; transform: scale(0) rotate(-180deg); } to { opacity: 1; transform: scale(1) rotate(0deg); } }
        @keyframes button-pulse { from { opacity: 0; transform: scale(0.8) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-blob-1 { animation: blob-1 25s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 30s infinite ease-in-out; }
        .animate-blob-3 { animation: blob-3 8s infinite ease-in-out; }
        .animate-float-1 { animation: float-1 12s infinite ease-in-out; }
        .animate-float-2 { animation: float-2 14s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
        a:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }
      `}</style>
    </div>
  );
}




















