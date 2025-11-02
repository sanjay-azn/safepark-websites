'use client';

import { Shield, Umbrella, Zap, CheckCircle2, Star, Phone, MessageCircle, Award, Clock, Sparkles, Lightbulb, Flame, Droplets, Bolt, Wind, Wrench, Zap as Speed } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FeaturesPage() {
  const [isVisible, setIsVisible] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.id = el.id || `element-${Math.random()}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth bg-black min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium animate-fade-in-down" style={{ animationDelay: '0s' }}>
            <Lightbulb className="w-4 h-4" />
            Advanced Features
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Four Layers of
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Premium Defense</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-2 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Military-grade engineering meets real-world protection.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Every feature tested by thousands of satisfied customers.</p>
        </div>
      </section>

      {/* 2x2 GRID FEATURES */}
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
            ].map((feature, idx) => (
              <div 
                key={idx}
                id={`feature-${idx}`}
                data-animate
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-xl p-6 transition-all duration-500 h-full flex flex-col group-hover:border-emerald-500/30 group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.05] group-hover:-translate-y-1"
                style={{
                  opacity: isVisible[`feature-${idx}`] ? 1 : 0,
                  transform: isVisible[`feature-${idx}`] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
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
            ))}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-black via-slate-950/50 to-slate-950"></div>

      {/* WHY SAFEPARK BEATS - PROFESSIONAL TABLE */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900/20 to-black relative overflow-hidden">
        
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div 
            id="comparison-header"
            data-animate
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
            ].map((item, idx) => (
              <div 
                key={idx}
                id={`comparison-${idx}`}
                data-animate
                className="grid grid-cols-3 gap-4 p-5 rounded-lg bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all hover:from-white/[0.08] hover:to-white/[0.04] group/row"
                style={{
                  opacity: isVisible[`comparison-${idx}`] ? 1 : 0,
                  transform: isVisible[`comparison-${idx}`] ? 'translateX(0)' : 'translateX(-30px)',
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
            ))}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-slate-950 via-black/50 to-black"></div>

      {/* WHY CAR OWNERS CHOOSE - PROFESSIONAL ICONS */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden">
        
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/3 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div 
            id="benefits-header"
            data-animate
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
                icon: "☀️",
                color: "from-yellow-500/20"
              },
              { 
                title: "Impact Resistant", 
                desc: "Everyday hits won't harm your car. Tested for durability.",
                icon: "⚡",
                color: "from-blue-500/20"
              },
              { 
                title: "Water & Dust Proof", 
                desc: "No more scratches, no more daily cleaning needed.",
                icon: "💧",
                color: "from-cyan-500/20"
              },
              { 
                title: "Wind Stability", 
                desc: "Engineered to withstand rough weather conditions.",
                icon: "💨",
                color: "from-emerald-500/20"
              },
              { 
                title: "Rust-Free Frame", 
                desc: "Premium, durable, and stylish galvanized frame.",
                icon: "🔧",
                color: "from-orange-500/20"
              },
              { 
                title: "Retractable in 2-5 Seconds", 
                desc: "Park, pull, and protect instantly. No complexity.",
                icon: "⚙️",
                color: "from-purple-500/20"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                id={`benefit-${idx}`}
                data-animate
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 transition-all h-full hover:from-white/[0.12] hover:to-white/[0.04] cursor-pointer overflow-hidden"
                style={{
                  opacity: isVisible[`benefit-${idx}`] ? 1 : 0,
                  transform: isVisible[`benefit-${idx}`] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                  transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.12}s`
                }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                </div>

                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 origin-center inline-block">
                  {benefit.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{benefit.title}</h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{benefit.desc}</p>

                {/* Animated line on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREATHING SPACE */}
      <div className="h-20 bg-gradient-to-b from-black to-black"></div>

      {/* TRUST */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '⭐', value: '4.9/5', label: 'Reviews' },
              { icon: '🚗', value: '2000+', label: 'Cars Protected' },
              { icon: '🇮🇳', value: 'India', label: 'Made Locally' },
              { icon: '📞', value: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                id={`stat-${idx}`}
                data-animate
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 transition-all hover:from-white/[0.12] hover:to-white/[0.04] group"
                style={{
                  opacity: isVisible[`stat-${idx}`] ? 1 : 0,
                  transform: isVisible[`stat-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s`
                }}
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <div className="text-white font-bold text-xl group-hover:text-emerald-400 transition-colors">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-3xl mx-auto">
          <div id="cta-section" data-animate className="relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 rounded-2xl border border-white/15 p-8 md:p-10 text-center overflow-hidden group"
            style={{
              opacity: isVisible['cta-section'] ? 1 : 0,
              transform: isVisible['cta-section'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-cyan-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Experience SafePark Today</h2>
              <p className="text-lg text-gray-300 mb-8">Get professional consultation. Free. No pressure.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/40 inline-flex items-center justify-center gap-2 text-sm md:text-base duration-300">
                  <Phone className="w-5 h-5" /> Get Free Consultation
                </a>
                <a href="https://wa.me/919600840058" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/60 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-sm md:text-base duration-300">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.2; }
        }

        .animate-float-1 { animation: float-1 12s infinite ease-in-out; }
        .animate-float-2 { animation: float-2 14s infinite ease-in-out; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }

        @media (max-width: 640px) {
          .text-5xl { @apply text-3xl; }
          .text-4xl { @apply text-2xl; }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
