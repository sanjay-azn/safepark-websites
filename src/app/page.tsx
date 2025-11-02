'use client';

import { Shield, Umbrella, Zap, UserCheck, Phone, MessageCircle, MapPin, Star, Award, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePage() {
  useEffect(() => {
    // GSAP-style scroll observer with stagger effect
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-observe').forEach((el) => observer.observe(el));

    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax').forEach((el) => {
        const offset = scrolled * 0.5;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden py-16">
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 rounded-full blur-3xl animate-blob-1" style={{ animationDelay: '0s' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/5 rounded-full blur-3xl animate-blob-2" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium text-sm hover:bg-emerald-500/20 transition-all duration-300 w-fit fade-in-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Made in India • Premium Quality
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white fade-in-2">
                  Everyday Risks.
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent fade-in-3">
                  Lasting Protection.
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl font-light fade-in-4">
                Your car faces <span className="text-white font-semibold">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-5">
                <a 
                  href="tel:+919600840058"
                  className="group px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2 btn-lift"
                >
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Protect My Car Now
                </a>
                
                <a 
                  href="#gallery"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-500/50 text-emerald-400 font-bold text-base hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 inline-flex items-center justify-center gap-2 group btn-lift"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  View Gallery
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 fade-in-6">
                <div className="flex items-center gap-3 card-float">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current star-pop" style={{ animationDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">2,000+ Protected Cars</span>
                </div>
                <div className="h-6 w-px bg-gray-600 hidden sm:block"></div>
                <div className="flex items-center gap-2 card-float">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 text-sm">2-Year Warranty</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-xs text-gray-400 fade-in-7">
                {['Free Installation', '2-4 Hour Setup', 'No Hidden Costs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 badge-pop" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last parallax fade-in-image">
              <div className="relative w-full max-w-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-500 animate-glow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50"></div>
                
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium car protected by SafePark"
                  className="relative w-full h-[350px] md:h-[420px] object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/20 transition-all duration-500 img-zoom"
                />
                
                <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500/90 to-cyan-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 badge-slide">
                  Premium Protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">Complete Protection</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto text-reveal">
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
                className="scroll-observe group relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-2xl card-stagger"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300 icon-bounce" style={{ animationDelay: `${idx * 150}ms` }}>
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
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">Why Choose SafePark?</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto text-reveal">
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
                className="scroll-observe group relative p-8 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 card-slide"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold badge-scale">
                  {item.badge}
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 icon-spin">
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
      <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20 bg-white/[0.02] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">See SafePark in Action</h2>
            <p className="text-lg text-gray-400 font-light text-reveal">Real installations, real results</p>
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
                className="scroll-observe group relative rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 gallery-item"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {item.type === "video" ? (
                    <video src={item.src} controls className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" poster="/gallery/gallery1.jpg" preload="metadata" />
                  ) : (
                    <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-500/80 text-white text-xs font-bold rounded-lg tag-pop">{item.tag}</div>
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
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">Trusted by Thousands</h2>
            <p className="text-lg text-gray-400 font-light text-reveal">Real satisfaction from real customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", role: "BMW Owner", location: "Coimbatore", text: "SafePark completely transformed how I protect my BMW. Exceptional quality." },
              { name: "Priya Sharma", role: "Entrepreneur", location: "Tamil Nadu", text: "The retractable design is genius. No more weather worries. Highly recommended." },
              { name: "Arjun Patel", role: "Business Owner", location: "Gujarat", text: "Professional installation and premium materials. SafePark exceeds expectations." }
            ].map((review, idx) => (
              <div 
                key={idx}
                className="scroll-observe group p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 testimonial-flip"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex gap-1 mb-4 star-stagger">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" style={{ animationDelay: `${i * 60}ms` }} />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic text-fade">"{review.text}"</p>
                
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
      <section className="py-24 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative scroll-observe cta-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl opacity-60 animate-glow-pulse"></div>
            
            <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl p-12 border border-white/10 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white heading-reveal">Ready to Protect Your Vehicle?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light text-reveal">
                Join thousands who chose SafePark. Get started in minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-white/10">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+91 9600840058", href: "tel:+919600840058" },
                  { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", content: "Message Us", href: "https://wa.me/919600840058" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Location", content: "Coimbatore, Tamil Nadu", href: null }
                ].map((contact, i) => (
                  <div key={i} className="group/contact contact-pop" style={{ animationDelay: `${i * 100}ms` }}>
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 fade-in-buttons">
                <a 
                  href="tel:+919600840058"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500 btn-pulse"
                >
                  Call for Free Quote
                </a>
                <a 
                  href="https://wa.me/919600840058"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-500/50 text-emerald-400 font-bold hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 btn-pulse"
                  style={{ animationDelay: '100ms' }}
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

      {/* GSAP-STYLE ANIMATIONS */}
      <style jsx>{`
        /* BLOB ANIMATIONS */
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

        /* FADE IN STAGGER - Hero Section */
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-1 { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both; }
        .fade-in-2 { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }
        .fade-in-3 { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
        .fade-in-4 { animation: fade-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both; }
        .fade-in-5 { animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both; }
        .fade-in-6 { animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both; }
        .fade-in-7 { animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both; }

        /* IMAGE EFFECTS */
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .fade-in-image { animation: zoom-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both; }

        @keyframes image-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        .img-zoom { animation: image-zoom 4s ease-in-out infinite; }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        .animate-glow { animation: glow-pulse 3s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }

        /* SCROLL TRIGGERED ANIMATIONS */
        @keyframes scroll-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .scroll-observe {
          opacity: 0;
          animation: scroll-fade-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* HEADING REVEAL */
        @keyframes heading-reveal {
          from { opacity: 0; transform: translateY(-30px) scaleY(0.8); }
          to { opacity: 1; transform: translateY(0) scaleY(1); }
        }

        .heading-reveal { animation: heading-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important; }

        /* TEXT REVEAL */
        @keyframes text-reveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .text-reveal { animation: text-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards !important; }

        /* CARD STAGGER */
        @keyframes card-scale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .card-stagger { animation: card-scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* CARD SLIDE */
        @keyframes card-slide-in {
          from { opacity: 0; transform: translateX(-20px) translateY(20px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }

        .card-slide { animation: card-slide-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* ICON BOUNCE */
        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .icon-bounce { animation: icon-bounce 2s ease-in-out infinite; }

        /* ICON SPIN */
        @keyframes icon-spin {
          from { transform: rotate(-180deg); opacity: 0; }
          to { transform: rotate(0deg); opacity: 1; }
        }

        .icon-spin { animation: icon-spin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* BADGE ANIMATIONS */
        @keyframes badge-pop {
          from { opacity: 0; transform: scale(0) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .badge-pop { animation: badge-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes badge-scale {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }

        .badge-scale { animation: badge-scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes badge-slide {
          from { opacity: 0; transform: translateX(-10px) translateY(10px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }

        .badge-slide { animation: badge-slide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* GALLERY ITEM */
        @keyframes gallery-pop {
          from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .gallery-item { animation: gallery-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes tag-pop {
          from { opacity: 0; transform: scale(0) rotate(45deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .tag-pop { animation: tag-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* STAR STAGGER */
        @keyframes star-twinkle {
          from { opacity: 0; transform: scale(0) rotate(-180deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .star-pop { animation: star-twinkle 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes star-stagger {
          from { opacity: 0; transform: scale(0) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .star-stagger { animation: star-stagger 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* TESTIMONIAL FLIP */
        @keyframes testimonial-flip {
          from { opacity: 0; transform: rotateX(90deg) rotateY(-20deg) translateY(20px); perspective: 1000px; }
          to { opacity: 1; transform: rotateX(0deg) rotateY(0deg) translateY(0); }
        }

        .testimonial-flip { animation: testimonial-flip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* TEXT FADE */
        @keyframes text-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .text-fade { animation: text-fade-in 0.8s ease-in 0.3s forwards; }

        /* CONTACT POP */
        @keyframes contact-pop {
          from { opacity: 0; transform: scale(0) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .contact-pop { animation: contact-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* CTA SCALE */
        @keyframes cta-scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .cta-scale { animation: cta-scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* BUTTON PULSE */
        @keyframes button-pulse {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .btn-pulse { animation: button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        .fade-in-buttons .btn-pulse:nth-child(2) { animation-delay: 0.1s; }

        /* CARD FLOAT */
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .card-float { animation: card-float 2s ease-in-out infinite; }

        /* BUTTON LIFT */
        @keyframes btn-lift {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .btn-lift { animation: btn-lift 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        /* IN-VIEW CLASS */
        .in-view { opacity: 1 !important; }

        /* GENERAL */
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
