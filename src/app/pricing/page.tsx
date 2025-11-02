'use client';

import { Shield, Umbrella, Zap, UserCheck, CheckCircle2, Star, ArrowRight, Phone, MessageCircle, Award, Clock, MapPin, Sparkles, Lightbulb, TrendingUp, Heart, Zap as Performance, Box, Users } from 'lucide-react';
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

    document.querySelectorAll('.feature-card, .comparison-row, .benefit-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth bg-black min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION - EXPANDED & NEW CONTENT */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl animate-blob-1"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl animate-blob-2"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            Smart Protection Technology
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
            The Smart Way to 
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Protect Your Car</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto font-light">
            SafePark delivers professional-grade protection with cutting-edge engineering. Engineered to withstand everything your car faces—weather, impact, UV damage—with precision and style.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Trusted by over 2,000 satisfied customers across India. Premium protection starts here.</p>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 text-sm text-gray-400">
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

      {/* FEATURES GRID - PROFESSIONAL */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Four Layers of Defense</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Each component engineered for maximum durability and protection in real-world conditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-red-400" />,
                title: "Thermal Protection",
                subtitle: "Heat & flame resistant",
                desc: "Advanced thermal resistance up to 2000°F with flame-retardant coating. Engineered for extreme conditions.",
                features: ["Extreme heat resistance", "Flame retardant", "Structural integrity"]
              },
              {
                icon: <Umbrella className="w-12 h-12 text-blue-400" />,
                title: "Weather Shield",
                subtitle: "IPX7 waterproof",
                desc: "Military-grade waterproof coating with advanced drainage. Complete protection in monsoon and all seasons.",
                features: ["100% waterproof", "Advanced drainage", "UV resistance"]
              },
              {
                icon: <Performance className="w-12 h-12 text-yellow-400" />,
                title: "Impact Guard",
                subtitle: "Military-grade fabric",
                desc: "Oxford 600D fabric prevents scratches, dents, and damage from daily use and accidents.",
                features: ["Scratch resistant", "Impact protected", "Tear-proof"]
              },
              {
                icon: <Heart className="w-12 h-12 text-emerald-400" />,
                title: "Safety First",
                subtitle: "Family approved",
                desc: "Child-safe design with rounded edges and non-toxic materials. Engineered for complete peace of mind.",
                features: ["Child safe", "Stable frame", "Non-toxic"]
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="feature-card group relative opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-2xl p-10 group-hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.05]">
                  
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

      {/* COMPARISON SECTION - PROFESSIONAL TABLE */}
      <section className="pb-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-black to-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Why SafePark Leads</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Industry comparison—see the difference quality makes</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 md:p-10 bg-gradient-to-r from-white/5 to-transparent border-b border-white/10">
              <div className="text-lg font-bold text-white">Feature</div>
              <div className="text-lg font-bold text-gray-400">Traditional Shed</div>
              <div className="text-lg font-bold text-emerald-400">SafePark Advantage</div>
            </div>

            {/* Table Rows */}
            {[
              { feature: "Portability", traditional: "Fixed installation", safepark: "Deploy & retract instantly" },
              { feature: "Design Quality", traditional: "Basic appearance", safepark: "Premium aesthetic" },
              { feature: "Setup Time", traditional: "Days or weeks", safepark: "2-4 hours professional" },
              { feature: "Material Grade", traditional: "Standard fabric", safepark: "Military-grade Oxford 600D" },
              { feature: "Weather Protection", traditional: "Partial coverage", safepark: "100% all-weather shield" },
              { feature: "Space Efficiency", traditional: "Permanent fixture", safepark: "Collapses for storage" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="comparison-row grid grid-cols-1 md:grid-cols-3 gap-4 p-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors opacity-0 translate-x-4"
                style={{ 
                  animation: `slideIn 0.6s ease-out forwards`,
                  animationDelay: `${idx * 75}ms`
                }}
              >
                <div className="font-semibold text-white">{item.feature}</div>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">✕</span>
                  {item.traditional}
                </div>
                <div className="text-emerald-300 font-semibold flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">✓</span>
                  {item.safepark}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - PROFESSIONAL ICONS */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">What Customers Value</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Real benefits from premium protection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Peace of Mind",
                desc: "Stop worrying about weather damage, scratches, and unexpected harm. Your car is always protected, always secure.",
                icon: <Shield className="w-10 h-10 text-emerald-400" />
              },
              {
                title: "Maintenance Savings",
                desc: "Eliminate frequent washing, waxing, and expensive paint repairs. Keep your car in pristine condition effortlessly.",
                icon: <TrendingUp className="w-10 h-10 text-cyan-400" />
              },
              {
                title: "Premium Curb Appeal",
                desc: "Modern, sleek design that enhances your home's aesthetic. Professional protection that looks stunning.",
                icon: <Sparkles className="w-10 h-10 text-yellow-400" />
              },
              {
                title: "Instant Deployment",
                desc: "Access your car in seconds. Advanced engineering means no complex setup—just deploy and go.",
                icon: <Performance className="w-10 h-10 text-red-400" />
              },
              {
                title: "Space Reclamation",
                desc: "Collapse it when not needed. Maximize your parking space for other uses, perfect for Indian homes.",
                icon: <Box className="w-10 h-10 text-blue-400" />
              },
              {
                title: "Family Safe Environment",
                desc: "Engineered with safety first. Rounded edges, stable structure—kids can play nearby without worry.",
                icon: <Users className="w-10 h-10 text-green-400" />
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="benefit-card group relative opacity-0 translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 h-full hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05] group-hover:-translate-y-2">
                  
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
                    {benefit.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white font-bold text-2xl mb-1">4.9/5</div>
              <div className="text-gray-400 text-sm">2,000+ Reviews</div>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <div className="text-emerald-400 text-3xl font-bold mb-2">2,000+</div>
              <div className="text-gray-400 text-sm">Cars Protected</div>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <div className="text-2xl font-bold mb-2">🇮🇳</div>
              <div className="text-white font-bold mb-1">Made in India</div>
              <div className="text-gray-400 text-sm">Premium Quality</div>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <div className="text-cyan-400 text-3xl font-bold mb-2">24/7</div>
              <div className="text-white font-bold mb-1">Support</div>
              <div className="text-gray-400 text-sm">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 rounded-2xl border border-white/15 p-10 md:p-16 backdrop-blur-xl shadow-2xl text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Premium Car Owners
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Experience industry-leading protection. Get your personalized consultation today—absolutely free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919600840058"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a 
                href="https://wa.me/919600840058"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-blob-1 { animation: blob-1 8s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 7s infinite ease-in-out; }

        .feature-card.in-view,
        .benefit-card.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
