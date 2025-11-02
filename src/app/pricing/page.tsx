'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Phone, MessageCircle, Shield, Umbrella, Crown, Star, Users, Award, Clock, Zap, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 'essential',
      name: "Essential",
      subtitle: "Perfect for compact cars",
      price: 14800,
      originalPrice: 20000,
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      popular: false,
      features: [
        "5.5m × 2.5m × 2.3m coverage",
        "Premium galvanized steel frame", 
        "Oxford 600D waterproof fabric",
        "Professional installation (2 hours)",
        "Perfect for Swift, i20, City",
        "2-year comprehensive warranty"
      ]
    },
    {
      id: 'professional',
      name: "Professional",
      subtitle: "Most popular choice",
      price: 17600,
      originalPrice: 25000,
      icon: <Umbrella className="w-8 h-8 text-emerald-400" />,
      popular: true,
      features: [
        "6.0m × 2.6m × 2.5m coverage",
        "Heavy-duty galvanized frame",
        "Premium Oxford fabric with UV coating",
        "Expert installation with site prep",
        "Ideal for Camry, Creta, XUV500",
        "3-year warranty + VIP support"
      ]
    },
    {
      id: 'premium',
      name: "Premium",
      subtitle: "For luxury vehicles",
      price: 20000,
      originalPrice: 28000,
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      popular: false,
      features: [
        "6.5m × 2.8m × 2.5m coverage",
        "Ultra-strong galvanized frame",
        "Military-grade fabric protection",
        "White-glove installation",
        "Designed for Fortuner, X5, Range Rover",
        "Lifetime structural warranty"
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.pricing-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getSavings = (plan: any) => plan.originalPrice - plan.price;

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
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
            <Zap className="w-4 h-4" />
            Trusted by 2,000+ car owners across India
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Simple, Transparent
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Pricing You'll Love</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-3xl mx-auto">
            Professional installation, premium warranty, and world-class support included in every plan.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">No hidden fees. No surprises. Just premium car protection.</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, idx) => (
              <div
                key={plan.id}
                className={`pricing-card group relative rounded-2xl border transition-all duration-500 transform opacity-0 translate-y-8 ${
                  plan.popular 
                    ? "lg:scale-105 lg:-translate-y-6" 
                    : ""
                }`}
                style={{
                  animationDelay: `${idx * 150}ms`,
                }}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Border Glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl" 
                    : "bg-gradient-to-r from-white/10 to-white/5 blur-xl"
                }`}></div>

                <div className={`absolute inset-0 rounded-2xl border transition-colors duration-500 ${
                  plan.popular 
                    ? "border-emerald-400/40 group-hover:border-emerald-400/80" 
                    : "border-white/15 group-hover:border-white/30"
                }`}></div>
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="relative p-8 md:p-10">
                  
                  {/* Plan Header */}
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                      plan.popular 
                        ? "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" 
                        : "bg-white/10"
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm md:text-base text-gray-400">{plan.subtitle}</p>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-gray-500 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                        <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold">
                          Save ₹{getSavings(plan).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-emerald-400 font-bold">₹</span>
                        <span className={`text-4xl md:text-5xl font-black ${
                          plan.popular ? 'text-emerald-400' : 'text-white'
                        }`}>
                          {plan.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">One-time payment • Free professional installation</p>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <a
                      href="tel:+919600840058"
                      className={`w-full py-3.5 px-6 rounded-xl text-base font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 mb-3 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02]"
                          : "bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:scale-[1.02]"
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      Get Started
                    </a>
                    <a
                      href="https://wa.me/919600840058"
                      className={`w-full py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>

                  {/* Features */}
                  <div className="pt-8 border-t border-white/10">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Everything Included:</h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group/feature">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:bg-emerald-500/30 transition-colors">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              All plans include: Professional installation • Free delivery • 24/7 customer support • Premium warranty
            </p>
          </div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white font-bold text-xl md:text-2xl mb-1">4.9/5</div>
              <div className="text-gray-400 text-xs md:text-sm">2,000+ Reviews</div>
            </div>
            
            <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-emerald-400 font-bold text-xl md:text-2xl mb-1">2,000+</div>
              <div className="text-gray-400 text-xs md:text-sm">Cars Protected</div>
            </div>
            
            <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-white font-bold text-xl md:text-2xl mb-1">Made in India</div>
              <div className="text-gray-400 text-xs md:text-sm">Premium Quality</div>
            </div>
            
            <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-white font-bold text-xl md:text-2xl mb-1">24/7 Support</div>
              <div className="text-gray-400 text-xs md:text-sm">Customer Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-emerald-500/10 rounded-2xl border border-white/15 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                Ready to Protect Your Vehicle?
              </h2>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers. Free consultation, zero pressure.
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

        .pricing-card.in-view {
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
