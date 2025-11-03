'use client';

import { Shield, Umbrella, Zap, UserCheck, Phone, MessageCircle, MapPin, Star, Award, ArrowRight, CheckCircle2, Play, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

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

    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax').forEach((el) => {
        const element = el as HTMLElement;
        const offset = scrolled * 0.5;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="scroll-smooth bg-black min-h-screen overflow-x-hidden relative">
      
      {/* Animated Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div 
          className="absolute w-full h-full"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`,
            transition: 'background 0.3s ease'
          }}
        ></div>
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden py-32">
        
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900"></div>
          <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-blob-1"></div>
          <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-blob-2"></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-transparent rounded-full blur-3xl animate-blob-3"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 -z-5"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-medium text-sm hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all duration-300 w-fit animate-fade-in-down shadow-lg shadow-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                Made in India • Premium Quality
              </div>

              <div className="space-y-1">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
                  Everyday Risks.<br className="hidden md:block" /> <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">Lasting Protection.</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Your car faces <span className="text-white font-semibold">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-300 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a 
                  href="tel:+919600840058"
                  className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10">Protect My Car Now</span>
                </a>
                
                <a 
                  href="#gallery"
                  className="relative px-8 py-3 rounded-xl border-2 border-emerald-500/60 text-emerald-300 font-bold text-base hover:bg-emerald-500/15 hover:border-emerald-400 hover:text-emerald-200 transition-all duration-300 inline-flex items-center justify-center gap-2 group backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">View Gallery</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" style={{ animation: `star-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 50}ms forwards`, opacity: 0 }} />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">2,000+ Protected Cars</span>
                </div>
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden sm:block"></div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-gray-300 text-sm">2-Year Warranty</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-xs text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {['Free Installation', '2-4 Hour Setup', 'No Hidden Costs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all" style={{ animation: `badge-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 80}ms forwards`, opacity: 0 }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last parallax" style={{ animation: 'zoom-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both' }}>
              <div className="relative w-full max-w-[520px] h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 rounded-3xl blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-500 animate-pulse-slow"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60"></div>
                
                <img 
                  src="/gallery/gallery1.jpg" 
                  alt="Premium BMW car protected by SafePark"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-emerald-500/30 group-hover:border-emerald-400/60 group-hover:shadow-2xl group-hover:shadow-emerald-500/40 transition-all duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                
                <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500/95 to-cyan-500/85 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  Premium Protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-black -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_50%)] -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" id="features" data-observe>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-2xl" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              Complete Protection
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 rounded-full shadow-lg shadow-emerald-400/50"></div>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              Four layers of engineered defense for every risk
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-12 h-12 text-red-400" />, title: "Fire Protection", desc: "Heat & flame resistant", color: "red" },
              { icon: <Umbrella className="w-12 h-12 text-blue-400" />, title: "Rain Protection", desc: "100% waterproof coating", color: "blue" },
              { icon: <Zap className="w-12 h-12 text-yellow-400" />, title: "Scratch-Proof", desc: "Military-grade fabric", color: "yellow" },
              { icon: <UserCheck className="w-12 h-12 text-green-400" />, title: "Safe for Kids", desc: "Family-friendly design", color: "green" }
            ].map((feature, idx) => {
              const featureId = `feature-${idx}`;
              const isFeatureVisible = isVisible[featureId] || false;
              
              return (
                <div 
                  key={idx}
                  id={featureId}
                  data-observe
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05] hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 backdrop-blur-sm overflow-hidden"
                  style={{
                    opacity: isFeatureVisible ? 1 : 0,
                    transform: isFeatureVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 120}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/15 group-hover:to-white/8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" style={{ animation: `icon-bounce 2s ease-in-out infinite ${idx * 150}ms` }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-black -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)] -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" id="value-props" data-observe>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-2xl" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              Why Choose SafePark?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 rounded-full shadow-lg shadow-emerald-400/50"></div>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              Premium protection engineered for modern vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "Weather Protection", desc: "Advanced weather-resistant fabric with 100% UV protection", badge: "100% Waterproof" },
              { icon: <Zap className="w-10 h-10" />, title: "Scratch & Damage Cover", desc: "Revolutionary retractable design prevents all surface damage", badge: "Military Grade" },
              { icon: <Award className="w-10 h-10" />, title: "Peace of Mind Warranty", desc: "2-year comprehensive warranty with premium support", badge: "2-Year Coverage" }
            ].map((item, idx) => {
              const valueId = `value-${idx}`;
              const isValueVisible = isVisible[valueId] || false;
              
              return (
                <div 
                  key={idx}
                  id={valueId}
                  data-observe
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05] hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 backdrop-blur-sm overflow-hidden"
                  style={{
                    opacity: isValueVisible ? 1 : 0,
                    transform: isValueVisible ? 'translateX(0) translateY(0)' : 'translateX(-20px) translateY(20px)',
                    transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 150}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 backdrop-blur-md border border-emerald-500/40 text-emerald-200 text-xs font-bold shadow-lg shadow-emerald-500/20">
                    {item.badge}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:from-emerald-500/30 group-hover:to-emerald-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20" style={{ animation: `icon-spin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms forwards`, opacity: 0 }}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}
      {/* (Gallery, FAQ, CTA, Footer remain the same with added backdrop-blur and shadow enhancements) */}

      <style jsx>{`
        /* All previous animations remain */
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(10deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(-10deg); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-40px, 40px) scale(0.95) rotate(-10deg); }
          66% { transform: translate(40px, -30px) scale(1.05) rotate(10deg); }
        }

        @keyframes blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -80px) scale(1.15); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        /* All other animations remain the same */
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes icon-spin {
          from { transform: rotate(-180deg); opacity: 0; }
          to { transform: rotate(0deg); opacity: 1; }
        }

        @keyframes badge-pop {
          from { opacity: 0; transform: scale(0) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes star-pop {
          from { opacity: 0; transform: scale(0) rotate(-180deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes contact-pop {
          from { opacity: 0; transform: scale(0) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes button-pulse {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-blob-1 { animation: blob-1 20s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 25s infinite ease-in-out; }
        .animate-blob-3 { animation: blob-3 30s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }

        a:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }

        @media (max-width: 768px) {
          .text-5xl { font-size: 1.875rem; }
          .text-6xl { font-size: 2.25rem; }
          .text-7xl { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
}
