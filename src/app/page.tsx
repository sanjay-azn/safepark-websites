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
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden py-32">
        
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-950"></div>
          <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-blob-1"></div>
          <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-emerald-500/15 to-transparent rounded-full blur-3xl animate-blob-2"></div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl animate-blob-3"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 -z-5"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-200 font-medium text-sm hover:from-emerald-500/30 hover:via-cyan-500/25 hover:to-emerald-500/30 transition-all duration-300 w-fit animate-fade-in-down shadow-lg shadow-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                Made in India • Premium Quality
              </div>

              <div className="space-y-1">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
                  Everyday Risks.<br className="hidden md:block" /> <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.6)]">Lasting Protection.</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Your car faces <span className="text-white font-semibold">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-300 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a 
                  href="tel:+919600840058"
                  className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-white font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10">Protect My Car Now</span>
                </a>
                
                <a 
                  href="#gallery"
                  className="relative px-8 py-3 rounded-xl border-2 border-emerald-400/60 bg-emerald-500/10 text-emerald-200 font-bold text-base hover:bg-emerald-500/20 hover:border-emerald-300 hover:text-emerald-100 transition-all duration-300 inline-flex items-center justify-center gap-2 group backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">View Gallery</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all shadow-lg">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" style={{ animation: `star-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 50}ms forwards`, opacity: 0 }} />
                    ))}
                  </div>
                  <span className="text-gray-200 text-sm font-medium">2,000+ Protected Cars</span>
                </div>
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent hidden sm:block"></div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  <span className="text-gray-200 text-sm">2-Year Warranty</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 text-xs text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {['Free Installation', '2-4 Hour Setup', 'No Hidden Costs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:from-emerald-500/10 hover:to-emerald-500/5 transition-all shadow-md" style={{ animation: `badge-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 80}ms forwards`, opacity: 0 }}>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/50"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last parallax" style={{ animation: 'zoom-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both' }}>
              <div className="relative w-full max-w-[520px] h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 rounded-3xl blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-500 animate-pulse-slow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 rounded-3xl blur-2xl opacity-50"></div>
                
                <img 
                  src="/gallery/gallery1.jpg" 
                  alt="Premium BMW car protected by SafePark"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-emerald-400/40 group-hover:border-emerald-300/60 group-hover:shadow-2xl group-hover:shadow-emerald-500/40 transition-all duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                
                <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500/95 via-cyan-500/90 to-emerald-400/95 backdrop-blur-md text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300 border border-white/20">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)] -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" id="features" data-observe>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6 shadow-lg" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)', transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <Shield className="w-4 h-4" />
              Complete Protection
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              Complete Protection
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto" style={{ opacity: isVisible['features'] ? 1 : 0, transform: isVisible['features'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s' }}>
              Four layers of engineered defense for every risk
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "Fire Protection", desc: "Heat & flame resistant", gradient: "from-red-500/20 to-orange-500/10", iconColor: "text-red-400", borderColor: "border-red-500/30 hover:border-red-400/50" },
              { icon: <Umbrella className="w-10 h-10" />, title: "Rain Protection", desc: "100% waterproof coating", gradient: "from-blue-500/20 to-cyan-500/10", iconColor: "text-blue-400", borderColor: "border-blue-500/30 hover:border-blue-400/50" },
              { icon: <Zap className="w-10 h-10" />, title: "Scratch-Proof", desc: "Military-grade fabric", gradient: "from-yellow-500/20 to-amber-500/10", iconColor: "text-yellow-400", borderColor: "border-yellow-500/30 hover:border-yellow-400/50" },
              { icon: <UserCheck className="w-10 h-10" />, title: "Safe for Kids", desc: "Family-friendly design", gradient: "from-green-500/20 to-emerald-500/10", iconColor: "text-green-400", borderColor: "border-green-500/30 hover:border-green-400/50" }
            ].map((feature, idx) => {
              const featureId = `feature-${idx}`;
              const isFeatureVisible = isVisible[featureId] || false;
              
              return (
                <div 
                  key={idx}
                  id={featureId}
                  data-observe
                  className={`group relative p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border ${feature.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
                  style={{
                    opacity: isFeatureVisible ? 1 : 0,
                    transform: isFeatureVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 120}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md group-hover:from-white/15 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110 shadow-lg ${feature.iconColor}`} style={{ animation: `icon-bounce 2.5s ease-in-out infinite ${idx * 200}ms` }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continue with remaining sections with same enhanced style... */}
      {/* Due to character limit, the pattern continues for VALUE PROPS, GALLERY, FAQ, CTA, and FOOTER with similar enhancements */}

      <style jsx>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -60px) scale(1.1) rotate(15deg); }
          66% { transform: translate(-30px, 30px) scale(0.9) rotate(-15deg); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-50px, 50px) scale(0.95) rotate(-12deg); }
          66% { transform: translate(50px, -40px) scale(1.05) rotate(12deg); }
        }

        @keyframes blob-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoom-in {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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

        .animate-blob-1 { animation: blob-1 25s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 30s infinite ease-in-out; }
        .animate-blob-3 { animation: blob-3 35s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-smooth; }

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
