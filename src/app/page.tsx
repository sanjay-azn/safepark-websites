'use client';

import { Shield, ArrowRight, CheckCircle, Play, Phone, MessageCircle, MapPin, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    // Smooth scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));

    // Mouse tracking for subtle effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 border-b border-gray-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">SafePark</span>
          </div>
          
          <a 
            href="tel:+919600840058"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION - PREMIUM MINIMALIST */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 -z-10">
            <div 
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-cyan-50 rounded-full blur-3xl opacity-60 animate-blob"
              style={{
                animation: 'blob 8s infinite ease-in-out'
              }}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-emerald-50 rounded-full blur-3xl opacity-60 animate-blob"
              style={{
                animation: 'blob 8s infinite ease-in-out 2s'
              }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Premium heading */}
            <div className="text-center space-y-8 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium text-sm hover:border-emerald-300 hover:bg-emerald-100 transition-all duration-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                Trusted by 2,000+ car owners
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
                Premium Protection
                <br />
                <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                  That Works
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                Your car deserves more than luck. SafePark delivers weatherproof, scratch-proof protection that blends seamlessly into your lifestyle.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a 
                  href="tel:+919600840058"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#features"
                  className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-900 font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  See It In Action
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Free Installation</span>
                </div>
                <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Premium Materials</span>
                </div>
              </div>
            </div>

            {/* Hero Image with glassmorphism */}
            <div className="relative mt-20 lg:mt-32 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/gallery/hero-car.jpeg" 
                alt="Premium SafePark protection system"
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl border border-white/80 backdrop-blur-sm hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-500"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* FEATURES SECTION - GRID LAYOUT */}
        <section id="features" className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 observe">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Why Choose SafePark?</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                Four layers of engineered protection designed for real cars, real weather, real protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Weather Proof",
                  desc: "100% waterproof & UV protected",
                  icon: "🌧️",
                  features: ["Rain resistant", "UV blocking", "Temperature stable"]
                },
                {
                  title: "Scratch Proof",
                  desc: "Military-grade fabric protection",
                  icon: "🛡️",
                  features: ["No dents", "No scratches", "No damage"]
                },
                {
                  title: "Fire Safe",
                  desc: "Advanced flame resistant tech",
                  icon: "🔥",
                  features: ["Heat resistant", "Flame proof", "Safety certified"]
                },
                {
                  title: "Kid Safe",
                  desc: "Family-friendly design",
                  icon: "👨‍👩‍👧‍👦",
                  features: ["Rounded edges", "Stable base", "Tested safe"]
                }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="group observe relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-cyan-50/0 group-hover:from-emerald-50 group-hover:to-cyan-50 rounded-2xl transition-all duration-500 -z-10"></div>
                  
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 font-light">{feature.desc}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION SECTION */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            {[
              {
                title: "Installation",
                desc: "Professional setup in just 2-4 hours with zero downtime",
                benefits: ["Free installation", "Expert team", "Full support"]
              },
              {
                title: "Warranty",
                desc: "Comprehensive 2-year coverage with extended protection",
                benefits: ["2-year guarantee", "Parts included", "Priority support"]
              },
              {
                title: "Support",
                desc: "24/7 customer care team ready to help anytime",
                benefits: ["Live support", "Quick response", "Expert guidance"]
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="grid md:grid-cols-2 gap-16 items-center mb-24 last:mb-0 observe"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <div className="h-96 bg-gradient-to-br from-emerald-100 to-cyan-50 rounded-2xl"></div>
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{item.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed font-light">{item.desc}</p>
                      <ul className="space-y-3">
                        {item.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{item.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed font-light">{item.desc}</p>
                      <ul className="space-y-3">
                        {item.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="h-96 bg-gradient-to-br from-cyan-100 to-emerald-50 rounded-2xl"></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS - MINIMAL ELEGANT */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 observe">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Trusted by Thousands</h2>
              <p className="text-xl text-gray-600 font-light">Real protection. Real satisfaction.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rajesh Kumar", role: "BMW Owner", text: "SafePark completely transformed my car protection strategy. The quality and service are exceptional.", location: "Coimbatore" },
                { name: "Priya Sharma", role: "Entrepreneur", text: "The retractable design is genius. No more weather worries. Highly recommended for serious car enthusiasts.", location: "Tamil Nadu" },
                { name: "Arjun Patel", role: "Business Owner", text: "Professional installation, premium materials, perfect execution. SafePark exceeds every expectation.", location: "Gujarat" }
              ].map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="observe group p-8 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 font-light italic">"{testimonial.text}"</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL - PREMIUM GLASS */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl group-hover:from-emerald-500/20 group-hover:via-cyan-500/20 group-hover:to-emerald-500/20 transition-all duration-500"></div>
              
              {/* Glass card */}
              <div className="relative backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-12 lg:p-16 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ready for Premium Protection?</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                  Join thousands who chose SafePark. Get a free consultation from our experts today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <a 
                    href="tel:+919600840058"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/919600840058"
                    className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-900 font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER - MINIMAL PROFESSIONAL */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-3 gap-16 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <span className="text-lg font-bold text-gray-900">SafePark</span>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Premium car protection engineered for the modern world. Trusted by thousands across India.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Contact</h4>
                <div className="space-y-4">
                  <a href="tel:+919600840058" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 9600840058
                  </a>
                  <a href="https://wa.me/919600840058" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    Coimbatore, Tamil Nadu
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Why SafePark?</h4>
                <ul className="space-y-3 text-gray-600 font-light text-sm">
                  <li>✓ 2-Year Warranty</li>
                  <li>✓ Professional Installation</li>
                  <li>✓ Premium Quality</li>
                  <li>✓ 24/7 Support</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-center text-gray-600 font-light">
              <p>© 2025 SafePark. Engineered excellence from Coimbatore.</p>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(50px, 50px) scale(1.02); }
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

        .animate-fade-in-down {
          animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .observe {
          opacity: 0;
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fade-in-up {
          opacity: 1 !important;
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        a:focus-visible {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
