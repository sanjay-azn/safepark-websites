'use client';

import { Shield, Umbrella, Zap, CheckCircle2, Star, Phone, MessageCircle, Award, Clock, Sparkles, Lightbulb } from 'lucide-react';
import { useEffect } from 'react';

export default function FeaturesPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .benefit-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth bg-black min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            Advanced Features
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Four Layers of
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Premium Defense</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-2 max-w-3xl mx-auto">
            Military-grade engineering meets real-world protection.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">Every feature tested by thousands of satisfied customers.</p>
        </div>
      </section>

      {/* 2x2 GRID FEATURES */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-10 h-10 text-red-400" />,
                title: "Thermal Protection",
                subtitle: "Heat & flame resistant",
                desc: "Advanced thermal resistance up to 2000°F with flame-retardant coating.",
                features: ["Heat resistant to 2000°F", "Flame retardant", "Structural integrity"]
              },
              {
                icon: <Umbrella className="w-10 h-10 text-blue-400" />,
                title: "Weather Shield",
                subtitle: "IPX7 waterproof",
                desc: "Military-grade waterproof coating with advanced drainage system.",
                features: ["100% waterproof", "Advanced drainage", "UV resistance"]
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-400" />,
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
                className="feature-card group relative opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-xl p-6 group-hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.05]">
                  
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{feature.subtitle}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-grow">{feature.desc}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SAFEPARK BEATS TRADITIONAL - DARKER BACKGROUND */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Why SafePark Beats Traditional Car Sheds</h2>
            <p className="text-lg text-gray-400">See how we compare to conventional solutions</p>
          </div>

          <div className="space-y-2">
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
                className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-white/[0.04] border border-white/10 hover:border-emerald-500/20 transition-all text-sm md:text-base"
              >
                <div className="font-semibold text-white">{item.feature}</div>
                <div className="text-gray-400 flex items-center gap-2 justify-center">
                  <span className="text-red-400 font-bold">✕</span> {item.traditional}
                </div>
                <div className="text-emerald-300 font-semibold flex items-center gap-2 justify-end">
                  <span className="text-emerald-400 font-bold">✓</span> {item.safepark}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CAR OWNERS CHOOSE - LIGHTER BACKGROUND */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-slate-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Why Car Owners Choose SafePark</h2>
            <p className="text-lg text-gray-400">Real benefits from premium protection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: ">90% Heat & UV Block", 
                desc: "Protects paint, dashboard, and interiors from sun damage.",
                icon: "🌞"
              },
              { 
                title: "Impact Resistant", 
                desc: "Everyday hits won't harm your car. Tested for durability.",
                icon: "⚡"
              },
              { 
                title: "Water & Dust Proof", 
                desc: "No more scratches, no more daily cleaning needed.",
                icon: "💧"
              },
              { 
                title: "Wind Stability", 
                desc: "Engineered to withstand rough weather conditions.",
                icon: "💨"
              },
              { 
                title: "Rust-Free Frame", 
                desc: "Premium, durable, and stylish galvanized frame.",
                icon: "🔧"
              },
              { 
                title: "Retractable in 2-5 Seconds", 
                desc: "Park, pull, and protect instantly. No complexity.",
                icon: "⚙️"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="benefit-card group relative opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-emerald-500/20 transition-all h-full">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex justify-center mb-2 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white font-bold text-lg">4.9/5</div>
              <div className="text-gray-400 text-xs">Reviews</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-emerald-400 text-2xl font-bold">2000+</div>
              <div className="text-gray-400 text-xs">Cars Protected</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-white font-bold">🇮🇳 India</div>
              <div className="text-gray-400 text-xs">Made Locally</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-cyan-400 font-bold">24/7</div>
              <div className="text-gray-400 text-xs">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 rounded-2xl border border-white/15 p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Experience SafePark Today</h2>
            <p className="text-lg text-gray-300 mb-8">Get professional consultation. Free. No pressure.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-sm md:text-base">
                <Phone className="w-5 h-5" /> Get Free Consultation
              </a>
              <a href="https://wa.me/919600840058" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-sm md:text-base">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .feature-card.in-view,
        .benefit-card.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
