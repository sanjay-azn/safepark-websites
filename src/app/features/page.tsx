'use client';

import { Shield, Umbrella, Zap, UserCheck, CheckCircle2, Star, ArrowRight, Phone, MessageCircle, Award, Clock, MapPin, Sparkles } from 'lucide-react';
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

    document.querySelectorAll('.feature-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth bg-black min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl animate-blob-1"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl animate-blob-2"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Advanced Protection Technology
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Protection Features
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Built for Real World</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-3xl mx-auto">
            SafePark combines military-grade materials with innovative engineering to protect your vehicle from every threat.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">Every feature is tested and proven by thousands of satisfied customers.</p>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
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

      {/* FEATURES GRID */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Protection</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">Four layers of engineered defense for every risk</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-10 h-10 text-red-400" />,
                title: "Fire Protection",
                subtitle: "Heat & flame resistant",
                desc: "Advanced coating technology protects against extreme heat and flames. Maintains structural integrity even in harsh conditions.",
                features: ["Heat resistant to 2000°F", "Flame retardant fabric", "Emergency protection"],
                color: "from-red-500/10 to-orange-500/10"
              },
              {
                icon: <Umbrella className="w-10 h-10 text-blue-400" />,
                title: "Rain Protection",
                subtitle: "100% waterproof coverage",
                desc: "IPX7 waterproof rating with advanced drainage system. Complete protection in all weather conditions.",
                features: ["100% waterproof coating", "Quick water drainage", "UV resistant fabric"],
                color: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-400" />,
                title: "Scratch Protection",
                subtitle: "Military-grade material",
                desc: "Oxford 600D fabric prevents scratches, dents, and impact damage from daily hazards and accidents.",
                features: ["Scratch resistant", "Impact protected", "Tear-proof design"],
                color: "from-yellow-500/10 to-amber-500/10"
              },
              {
                icon: <UserCheck className="w-10 h-10 text-emerald-400" />,
                title: "Family Safe",
                subtitle: "Child-friendly design",
                desc: "Engineered with safety first. Rounded corners, stable structure, and non-toxic materials for peace of mind.",
                features: ["Rounded edges", "Stable frame", "Non-toxic materials"],
                color: "from-emerald-500/10 to-green-500/10"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="feature-card group relative opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-2xl p-8 group-hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col">
                  
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{feature.subtitle}</p>
                  
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">{feature.desc}</p>
                  
                  <div className="space-y-3">
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

      {/* COMPARISON SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why SafePark Wins</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">See how we compare to traditional solutions</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white font-bold">Feature</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">Traditional Shed</th>
                  <th className="text-center py-4 px-4 text-emerald-400 font-semibold">SafePark</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Portability", traditional: "❌ Fixed", safepark: "✓ Retractable" },
                  { feature: "Aesthetics", traditional: "❌ Basic", safepark: "✓ Premium Design" },
                  { feature: "Installation", traditional: "❌ Complex", safepark: "✓ Quick & Easy" },
                  { feature: "Material Quality", traditional: "❌ Low-grade", safepark: "✓ Military Grade" },
                  { feature: "Weather Protection", traditional: "❌ Limited", safepark: "✓ Complete Coverage" },
                  { feature: "Space Usage", traditional: "❌ Permanent", safepark: "✓ Collapsible" }
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 text-white font-medium">{item.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{item.traditional}</td>
                    <td className="py-4 px-4 text-center text-emerald-300 font-semibold">{item.safepark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-black via-black to-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Benefits</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">What customers love about SafePark</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Peace of Mind",
                desc: "No more worrying about weather, scratches, or unexpected damage. Your car is always protected.",
                icon: "🛡️"
              },
              {
                title: "Save Money",
                desc: "Reduce maintenance costs. No more frequent washing, waxing, or paint repairs.",
                icon: "💰"
              },
              {
                title: "Premium Look",
                desc: "Enhance your home's appeal with professional protection that looks stylish and modern.",
                icon: "✨"
              },
              {
                title: "Instant Access",
                desc: "Deploy in seconds. Need your car? Pull it out instantly without complex setup.",
                icon: "⚡"
              },
              {
                title: "Space Efficient",
                desc: "Collapse it away when not needed. Reclaim your parking space for other uses.",
                icon: "📦"
              },
              {
                title: "Family Safe",
                desc: "Engineered with safety. Kids can play nearby without any risks or hazards.",
                icon: "👨‍👩‍👧‍👦"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white font-bold text-xl mb-1">4.9/5</div>
              <div className="text-gray-400 text-xs">2,000+ Reviews</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-400 text-2xl font-bold mb-2">2,000+</div>
              <div className="text-gray-400 text-xs">Cars Protected</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all">
              <div className="text-white text-2xl font-bold mb-2">🇮🇳 India</div>
              <div className="text-gray-400 text-xs">Made Locally</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all">
              <div className="text-cyan-400 text-2xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-xs">Support Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 rounded-2xl border border-white/15 p-8 md:p-12 backdrop-blur-xl shadow-2xl text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience SafePark Today
            </h2>
            
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of car owners who chose premium protection. Get your free consultation now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919600840058"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </a>
              <a 
                href="https://wa.me/919600840058"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(50px, 50px) scale(1.02); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(0.98); }
          66% { transform: translate(40px, -30px) scale(1.05); }
        }

        .animate-blob-1 { animation: blob-1 8s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 7s infinite ease-in-out; }

        .feature-card.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
