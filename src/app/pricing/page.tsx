'use client';

import { Shield, Umbrella, Zap, UserCheck, CheckCircle2, Star, Phone, MessageCircle, Award, Clock, Lightbulb, TrendingUp, Heart, Box, Users } from 'lucide-react';
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
      
      {/* HERO */}
      <section className="relative pt-48 pb-40 px-6 md:px-16 lg:px-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            Smart Protection Engineering
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-8xl font-black text-white leading-tight mb-8">
            Professional Car
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Protection System</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6 max-w-5xl mx-auto font-light">
            Military-grade engineering meets premium design. Every feature is built for real-world conditions—weather, impact, UV damage. Trusted by 2,000+ owners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>2-Year Warranty</span>
            </div>
            <div className="h-4 w-px bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-32 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">Four Layers of Defense</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Each component engineered for durability and real-world protection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-red-400" />,
                title: "Thermal Protection",
                subtitle: "Heat & flame resistant",
                desc: "Advanced thermal resistance up to 2000°F. Flame-retardant coating for extreme conditions.",
                features: ["Heat resistant to 2000°F", "Flame retardant", "Structural integrity"]
              },
              {
                icon: <Umbrella className="w-12 h-12 text-blue-400" />,
                title: "Weather Shield",
                subtitle: "IPX7 waterproof",
                desc: "Military-grade waterproof coating with advanced drainage. Complete monsoon protection.",
                features: ["100% waterproof", "Advanced drainage", "UV resistance"]
              },
              {
                icon: <Zap className="w-12 h-12 text-yellow-400" />,
                title: "Impact Guard",
                subtitle: "Military-grade fabric",
                desc: "Oxford 600D fabric prevents scratches, dents, and damage from daily hazards.",
                features: ["Scratch resistant", "Impact protected", "Tear-proof"]
              },
              {
                icon: <Heart className="w-12 h-12 text-emerald-400" />,
                title: "Safety First",
                subtitle: "Family approved",
                desc: "Rounded edges and non-toxic materials. Engineered for complete peace of mind.",
                features: ["Child safe design", "Stable frame", "Non-toxic"]
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="feature-card group relative opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-2xl p-10 group-hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.05] group-hover:-translate-y-2">
                  
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{feature.subtitle}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-8 flex-grow">{feature.desc}</p>
                  
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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

      {/* COMPARISON */}
      <section className="pb-32 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">Why SafePark Leads</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Industry comparison—see the difference premium engineering makes</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-gradient-to-r from-white/5 to-transparent border-b border-white/10">
              <div className="text-lg font-bold text-white">Feature</div>
              <div className="text-lg font-bold text-gray-400">Traditional Shed</div>
              <div className="text-lg font-bold text-emerald-400">SafePark</div>
            </div>

            {[
              { feature: "Portability", traditional: "Fixed installation", safepark: "Deploy instantly" },
              { feature: "Design", traditional: "Basic look", safepark: "Premium aesthetic" },
              { feature: "Installation", traditional: "Days or weeks", safepark: "2-4 hours pro" },
              { feature: "Material", traditional: "Standard fabric", safepark: "Military Oxford 600D" },
              { feature: "Protection", traditional: "Partial coverage", safepark: "100% all-weather" },
              { feature: "Space", traditional: "Permanent fixture", safepark: "Collapsible" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-semibold text-white">{item.feature}</div>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="text-red-400 font-bold">✕</span> {item.traditional}
                </div>
                <div className="text-emerald-300 font-semibold flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> {item.safepark}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pb-32 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">What You Get</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Real benefits from premium protection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Peace of Mind", desc: "No more weather worry. Scratches, damage, rain—complete protection always.", icon: <Shield className="w-10 h-10 text-emerald-400" /> },
              { title: "Savings", desc: "Stop frequent washing, waxing, paint repairs. Keep pristine with zero effort.", icon: <TrendingUp className="w-10 h-10 text-cyan-400" /> },
              { title: "Premium Look", desc: "Modern sleek design enhances home appeal. Professional protection that impresses.", icon: <Award className="w-10 h-10 text-yellow-400" /> },
              { title: "Instant Access", desc: "Deploy in seconds. No setup complexity—just pull and drive.", icon: <Zap className="w-10 h-10 text-red-400" /> },
              { title: "Space Smart", desc: "Collapse when not needed. Perfect for Indian homes—maximize parking space.", icon: <Box className="w-10 h-10 text-blue-400" /> },
              { title: "Family Safe", desc: "Kids can play nearby safely. Rounded edges, stable frame—engineering first.", icon: <Users className="w-10 h-10 text-green-400" /> }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="benefit-card group opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 h-full hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05] group-hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 rounded-2xl border border-white/15 p-12 md:p-16 backdrop-blur-xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready for Premium Protection?</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">Get professional consultation. Free. No pressure. Just answers.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Get Free Consultation
              </a>
              <a href="https://wa.me/919600840058" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
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
