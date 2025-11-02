'use client';

import { Shield, Umbrella, Zap, UserCheck, Phone, MessageCircle, MapPin, Star, Award, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Scroll animations
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-observe').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen overflow-x-hidden">
      
      {/* FIXED PREMIUM NAVIGATION */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-emerald-500/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <span className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">SafePark</span>
          </div>
          
          <a 
            href="tel:+919600840058"
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 rounded-full blur-3xl animate-blob" style={{ animation: 'blob 7s infinite' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animation: 'blob 7s infinite 2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-8 animate-fade-down">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium text-sm hover:bg-emerald-500/20 transition-all duration-300 w-fit">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Made in India • Premium Quality
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                  Everyday Risks.
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                  Lasting Protection.
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl font-light">
                Your car faces <span className="text-white font-semibold">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">2,000+ Protected Cars</span>
                </div>
                <div className="h-6 w-px bg-gray-600 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 text-sm">2-Year Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="tel:+919600840058"
                  className="group px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Protect My Car Now
                </a>
                
                <a 
                  href="#gallery"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-500/50 text-emerald-400 font-bold text-base hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  View Gallery
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-xs text-gray-400">
                {['Free Installation', '2-4 Hour Setup', 'No Hidden Costs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last animate-fade-up">
              <div className="relative w-full max-w-[550px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50"></div>
                
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium car protected by SafePark"
                  className="relative w-full h-[380px] md:h-[450px] object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/20 transition-all duration-500"
                />
                
                <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500/90 to-cyan-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  Premium Protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">Complete Protection</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Four layers of engineered defense for every risk
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-12 h-12 text-red-400" />, title: "Fire Protection", desc: "Heat & flame resistant", gradient: "from-red-500/15 to-orange-500/5" },
              { icon: <Umbrella className="w-12 h-12 text-blue-400" />, title: "Rain Protection", desc: "100% waterproof coating", gradient: "from-blue-500/15 to-cyan-500/5" },
              { icon: <Zap className="w-12 h-12 text-yellow-400" />, title: "Scratch-Proof", desc: "Military-grade fabric", gradient: "from-yellow-500/15 to-amber-500/5" },
              { icon: <UserCheck className="w-12 h-12 text-green-400" />, title: "Safe for Kids", desc: "Family-friendly design", gradient: "from-green-500/15 to-emerald-500/5" }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="scroll-observe group relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-28 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">Why Choose SafePark?</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Premium protection engineered for modern vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "Weather Protection", desc: "Advanced weather-resistant fabric with 100% UV protection", badge: "100% Waterproof" },
              { icon: <Zap className="w-10 h-10" />, title: "Scratch & Damage Cover", desc: "Revolutionary retractable design prevents all surface damage", badge: "Military Grade" },
              { icon: <Award className="w-10 h-10" />, title: "Peace of Mind Warranty", desc: "2-year comprehensive warranty with premium support", badge: "2-Year Coverage" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="scroll-observe group relative p-8 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  {item.badge}
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6 md:px-12 lg:px-20 bg-white/[0.02] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">See SafePark in Action</h2>
            <p className="text-lg text-gray-400 font-light">Real installations, real results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/gallery/gallery1.jpg", caption: "Luxury Car Protection", tag: "Premium" },
              { src: "/gallery/gallery2.jpg", caption: "All-Weather Installation", tag: "Weatherproof" },
              { src: "/gallery/gallery3.jpg", caption: "Quick Setup Demo", tag: "Fast Setup" },
              { src: "/gallery/gallery4.jpg", caption: "Urban Protection", tag: "City Ready" },
              { src: "/gallery/gallery5.jpg", caption: "Family Vehicle Care", tag: "Family Safe" },
              { src: "/gallery/gallery-video.mp4", caption: "Installation Process", tag: "Professional", type: "video" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="scroll-observe group relative rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {item.type === "video" ? (
                    <video src={item.src} controls className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" poster="/gallery/gallery1.jpg" preload="metadata" />
                  ) : (
                    <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-500/80 text-white text-xs font-bold rounded-lg">{item.tag}</div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">{item.caption}</h3>
                  <p className="text-emerald-400/70 text-xs mt-1">Professional Installation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">Trusted by Thousands</h2>
            <p className="text-lg text-gray-400 font-light">Real satisfaction from real customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", role: "BMW Owner", location: "Coimbatore", text: "SafePark completely transformed how I protect my BMW. Exceptional quality." },
              { name: "Priya Sharma", role: "Entrepreneur", location: "Tamil Nadu", text: "The retractable design is genius. No more weather worries. Highly recommended." },
              { name: "Arjun Patel", role: "Business Owner", location: "Gujarat", text: "Professional installation and premium materials. SafePark exceeds expectations." }
            ].map((review, idx) => (
              <div 
                key={idx}
                className="scroll-observe group p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role} • {review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative scroll-observe">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl opacity-60"></div>
            
            <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl p-12 border border-white/10 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Protect Your Vehicle?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
                Join thousands who chose SafePark. Get started in minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-white/10">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+91 9600840058", href: "tel:+919600840058" },
                  { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", content: "Message Us", href: "https://wa.me/919600840058" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Location", content: "Coimbatore, Tamil Nadu", href: null }
                ].map((contact, i) => (
                  <div key={i} className="group/contact">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3 text-emerald-400 group-hover/contact:bg-emerald-500/20 transition-colors">
                      {contact.icon}
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{contact.title}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-emerald-300 font-semibold">{contact.content}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="tel:+919600840058"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500"
                >
                  Call for Free Quote
                </a>
                <a 
                  href="https://wa.me/919600840058"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-500/50 text-emerald-400 font-bold hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black/20 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                <span className="text-2xl font-bold text-white">SafePark</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                Premium car protection engineered for the modern world. Trusted by thousands across India.
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-400">2,000+ Happy Customers</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 text-lg">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+919600840058" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 font-light">
            <p>© 2025 SafePark. Engineered excellence from Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -50px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(50px, 50px); }
        }

        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob { animation: blob 7s infinite ease-in-out; }
        .animate-fade-down { animation: fade-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .scroll-observe { opacity: 0; animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .fade-in { opacity: 1 !important; }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }

        a:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }
      `}</style>
    </div>
  );
}
