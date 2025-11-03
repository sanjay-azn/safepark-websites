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

        {/* VALUE PROPS */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-black -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)] -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" id="value-props" data-observe>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6 shadow-lg" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)', transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <Award className="w-4 h-4" />
              Why Choose SafePark
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              Why Choose SafePark?
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto" style={{ opacity: isVisible['value-props'] ? 1 : 0, transform: isVisible['value-props'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s' }}>
              Premium protection engineered for modern vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "Weather Protection", desc: "Advanced weather-resistant fabric with 100% UV protection", badge: "100% Waterproof", gradient: "from-blue-500/20 to-cyan-500/10", iconBg: "from-blue-500/20 to-cyan-500/15", iconColor: "text-blue-400" },
              { icon: <Zap className="w-10 h-10" />, title: "Scratch & Damage Cover", desc: "Revolutionary retractable design prevents all surface damage", badge: "Military Grade", gradient: "from-yellow-500/20 to-orange-500/10", iconBg: "from-yellow-500/20 to-orange-500/15", iconColor: "text-yellow-400" },
              { icon: <Award className="w-10 h-10" />, title: "Peace of Mind Warranty", desc: "2-year comprehensive warranty with premium support", badge: "2-Year Coverage", gradient: "from-purple-500/20 to-pink-500/10", iconBg: "from-purple-500/20 to-pink-500/15", iconColor: "text-purple-400" }
            ].map((item, idx) => {
              const valueId = `value-${idx}`;
              const isValueVisible = isVisible[valueId] || false;
              
              return (
                <div 
                  key={idx}
                  id={valueId}
                  data-observe
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/15 hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden`}
                  style={{
                    opacity: isValueVisible ? 1 : 0,
                    transform: isValueVisible ? 'translateX(0) translateY(0)' : 'translateX(-20px) translateY(20px)',
                    transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 150}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/30 via-cyan-500/25 to-emerald-500/30 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-xs font-bold shadow-lg shadow-emerald-500/20">
                    {item.badge}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.iconBg} backdrop-blur-md flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/10`} style={{ animation: `icon-spin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms forwards`, opacity: 0 }}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-black via-slate-950/30 to-slate-950"></div>
      
      {/* GALLERY CAROUSEL */}
      <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-black -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.08),transparent_50%)] -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20" id="gallery-header" data-observe>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6 shadow-lg" style={{ opacity: isVisible['gallery-header'] ? 1 : 0, transform: isVisible['gallery-header'] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)', transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <Play className="w-4 h-4" />
              Installation Gallery
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ opacity: isVisible['gallery-header'] ? 1 : 0, transform: isVisible['gallery-header'] ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
              SafePark Installation
            </h2>
            <p className="text-lg text-gray-400 font-light" style={{ opacity: isVisible['gallery-header'] ? 1 : 0, transform: isVisible['gallery-header'] ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s' }}>
              Real installations, real results
            </p>
          </div>
          
          <div id="carousel" data-observe className="relative" style={{ opacity: isVisible['carousel'] ? 1 : 0, transform: isVisible['carousel'] ? 'scale(1)' : 'scale(0.95)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <div className="relative rounded-2xl overflow-hidden border border-emerald-400/30 bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-emerald-500/10 backdrop-blur-sm">
              <div className="relative w-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center overflow-hidden" style={{ height: '500px' }}>
                <img 
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md text-white hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-400/30 transition-all z-10 hover:scale-110 duration-300 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md text-white hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-400/30 transition-all z-10 hover:scale-110 duration-300 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 backdrop-blur-md text-emerald-200 text-sm font-bold border border-emerald-400/30 z-10 shadow-lg">
                {currentSlide + 1} / {galleryImages.length}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-2xl">{galleryImages[currentSlide].title}</h3>
              </div>
            </div>

            <div className="flex gap-4 mt-8 overflow-x-auto pb-2 scroll-smooth">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-110 shadow-lg shadow-emerald-500/30' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  {currentSlide === idx && (
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-slate-950 via-black/50 to-black"></div>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.06),transparent_60%)] -z-10"></div>
        
        {/* Animated background orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div 
            id="faq-header" 
            data-observe
            className="text-center mb-16"
            style={{
              opacity: isVisible['faq-header'] ? 1 : 0,
              transform: isVisible['faq-header'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6 shadow-lg">
              <MessageCircle className="w-4 h-4" />
              FAQ
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-400">Everything you need to know</p>
          </div>

          <div id="faq-list" data-observe className="space-y-4">
            {faqItems.map((item, idx) => {
              const faqId = `faq-${idx}`;
              const isFaqVisible = isVisible[faqId] || false;
              
              return (
                <div
                  key={idx}
                  id={faqId}
                  data-observe
                  className="border border-white/15 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.05] hover:border-emerald-400/40 backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-lg"
                  style={{
                    opacity: isFaqVisible ? 1 : 0,
                    transform: isFaqVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms`
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-emerald-500/5 hover:to-transparent transition-all"
                  >
                    <h3 className="text-base md:text-lg font-bold text-white flex-1 pr-4">{item.question}</h3>
                    <div className={`ml-4 flex-shrink-0 p-1.5 rounded-lg ${expandedFaq === idx ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-gray-400'} transition-all duration-300`} style={{ transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      {expandedFaq === idx ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {expandedFaq === idx && (
                    <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-white/10 bg-gradient-to-r from-emerald-500/5 to-transparent" style={{ animation: 'fade-in-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-black to-black"></div>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/30 to-black -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)] -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <div id="cta" data-observe className="relative" style={{ opacity: isVisible['cta'] ? 1 : 0, transform: isVisible['cta'] ? 'scale(1)' : 'scale(0.95)', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 via-cyan-600/10 to-emerald-600/15 rounded-3xl blur-3xl opacity-60 animate-pulse-slow"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-emerald-400/30 text-center space-y-6 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">Ready to Protect Your Vehicle?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
                Join thousands who chose SafePark. Get started in minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-white/15">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+91 9600840058", href: "tel:+919600840058", gradient: "from-blue-500/20 to-cyan-500/15" },
                  { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", content: "Message Us", href: "https://wa.me/919600840058", gradient: "from-green-500/20 to-emerald-500/15" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Location", content: "Coimbatore, TN", href: null, gradient: "from-purple-500/20 to-pink-500/15" }
                ].map((contact, i) => (
                  <div key={i} className="group/contact" style={{ animation: `contact-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 100}ms forwards`, opacity: 0 }}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.gradient} backdrop-blur-md flex items-center justify-center mx-auto mb-3 text-emerald-300 group-hover/contact:scale-110 transition-all border border-white/10 shadow-lg`}>
                      {contact.icon}
                    </div>
                    <p className="text-sm text-gray-400 mb-2 font-medium">{contact.title}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors text-sm md:text-base">
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-emerald-300 font-semibold text-sm md:text-base">{contact.content}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="tel:+919600840058"
                  className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500 text-sm md:text-base overflow-hidden group"
                  style={{ animation: 'button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards', opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Call for Free Quote</span>
                </a>
                <a 
                  href="https://wa.me/919600840058"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-400/60 bg-emerald-500/10 text-emerald-200 font-bold hover:bg-emerald-500/20 hover:border-emerald-300 hover:text-emerald-100 backdrop-blur-sm transition-all duration-300 text-sm md:text-base"
                  style={{ animation: 'button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards', opacity: 0 }}
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-black to-slate-950 py-16 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.05),transparent_60%)] -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">S</div>
                <span className="text-2xl font-bold text-white">SafePark</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 font-light text-sm md:text-base">
                Premium car protection engineered for the modern world. Trusted by thousands across India.
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                ))}
              </div>
              <p className="text-sm text-gray-400">2,000+ Happy Customers</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 text-lg">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+919600840058" className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors text-sm md:text-base group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/15 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                  </div>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors text-sm md:text-base group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/15 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  </div>
                  WhatsApp
                </a>
                <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/15 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                  </div>
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 font-light text-sm">
            <p>© 2025 SafePark. Engineered excellence from Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>

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

    {/* Add remaining animations for FAQ and CTA */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(0.98); }
          66% { transform: translate(40px, -30px) scale(1.05); }
        }

        @keyframes contact-pop {
          from { opacity: 0; transform: scale(0) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes button-pulse {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-float-1 { animation: float-1 12s infinite ease-in-out; }
        .animate-float-2 { animation: float-2 14s infinite ease-in-out; }
      `}</style>
    </div>
  );
}

