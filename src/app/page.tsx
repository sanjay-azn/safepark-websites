'use client';

import { Shield, Umbrella, Zap, UserCheck, Phone, MessageCircle, MapPin, Star, Award, ArrowRight, CheckCircle2, Play, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-observe').forEach((el) => observer.observe(el));

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
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        
        {/* Animated Background Orbs - Very Subtle */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-cyan-500/3 rounded-full blur-3xl animate-blob-1"></div>
          <div className="absolute bottom-10 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/3 rounded-full blur-3xl animate-blob-2"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium text-sm hover:bg-emerald-500/20 transition-all duration-300 w-fit fade-in-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Made in India • Premium Quality
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-none text-white fade-in-2">
                  Everyday Risks.
                </h1>
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-none bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent fade-in-3">
                  Lasting Protection.
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-md font-light fade-in-4 pt-2">
                Your car faces <span className="text-white font-semibold">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 fade-in-5">
                <a 
                  href="tel:+919600840058"
                  className="group px-7 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2 btn-lift"
                >
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Protect My Car
                </a>
                
                <a 
                  href="#gallery"
                  className="px-7 py-3 rounded-lg border-2 border-emerald-500/50 text-emerald-400 font-bold text-sm hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 inline-flex items-center justify-center gap-2 group btn-lift"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Gallery
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 fade-in-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 text-xs font-medium">2,000+ Protected</span>
                </div>
                <div className="h-5 w-px bg-gray-700"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300 text-xs">2-Year Warranty</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 text-xs text-gray-400 fade-in-7">
                {['Free Install', '2-4 Hrs Setup', 'No Hidden Costs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 badge-pop" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 parallax fade-in-image">
              <div className="relative w-full max-w-[450px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-emerald-500/10 rounded-2xl blur-2xl opacity-60"></div>
                
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium car protected by SafePark"
                  className="relative w-full h-auto object-contain rounded-2xl shadow-2xl border border-emerald-500/20"
                  loading="eager"
                />
                
                <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500/90 to-cyan-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                  Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative bg-black">
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-observe space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white heading-reveal">Complete Protection</h2>
            <p className="text-sm md:text-base text-gray-400 font-light max-w-xl mx-auto">
              Four layers of engineered defense
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Shield className="w-10 h-10 text-red-400" />, title: "Fire Protection", desc: "Heat & flame resistant" },
              { icon: <Umbrella className="w-10 h-10 text-blue-400" />, title: "Rain Protection", desc: "100% waterproof" },
              { icon: <Zap className="w-10 h-10 text-yellow-400" />, title: "Scratch-Proof", desc: "Military-grade" },
              { icon: <UserCheck className="w-10 h-10 text-green-400" />, title: "Safe Kids", desc: "Family-friendly" }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="scroll-observe group relative p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 card-stagger"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex flex-col items-start space-y-3">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/8 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-observe space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white heading-reveal">Why SafePark?</h2>
            <p className="text-sm md:text-base text-gray-400 font-light">Premium engineered for you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Weather Protection", desc: "100% UV protection", badge: "Waterproof" },
              { icon: <Zap className="w-8 h-8" />, title: "Damage Cover", desc: "Retractable design", badge: "Military" },
              { icon: <Award className="w-8 h-8" />, title: "Warranty", desc: "2-year coverage", badge: "Premium" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="scroll-observe group relative p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.06] card-slide"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute -top-3 right-4 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  {item.badge}
                </div>

                <div className="space-y-3 pt-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/15 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section id="gallery" className="py-20 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-observe space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white heading-reveal">Installation Gallery</h2>
            <p className="text-sm md:text-base text-gray-400 font-light">Real installations, real results</p>
          </div>
          
          {/* Main Carousel */}
          <div className="relative scroll-observe">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <div className="relative h-80 md:h-[420px] w-full bg-gray-900">
                <img 
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg md:text-xl font-bold text-white">{galleryImages[currentSlide].title}</h3>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 snap-x">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                    currentSlide === idx ? 'border-emerald-500 ring-2 ring-emerald-500/30' : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 scroll-observe space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white heading-reveal">FAQ</h2>
            <p className="text-sm md:text-base text-gray-400 font-light">Common questions answered</p>
          </div>

          <div className="space-y-3 scroll-observe">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-all overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-all"
                >
                  <h3 className="text-sm md:text-base font-bold text-white flex-1 pr-4">{item.question}</h3>
                  <div className="flex-shrink-0 text-emerald-400">
                    {expandedFaq === idx ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedFaq === idx && (
                  <div className="px-5 pb-4 text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fade-up">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - COMPACT */}
      <section className="py-16 px-6 md:px-12 lg:px-20 relative bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="relative scroll-observe cta-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 to-cyan-500/8 rounded-xl blur-xl opacity-50"></div>
            
            <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 text-center space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-white heading-reveal">Ready to Protect?</h2>
              <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto font-light">
                Join 2,000+ happy customers. Get started in minutes.
              </p>

              {/* Contact Grid */}
              <div className="grid md:grid-cols-3 gap-6 py-6 border-y border-white/10">
                {[
                  { icon: <Phone className="w-5 h-5" />, title: "Call", content: "+91 9600840058", href: "tel:+919600840058" },
                  { icon: <MessageCircle className="w-5 h-5" />, title: "WhatsApp", content: "Message", href: "https://wa.me/919600840058" },
                  { icon: <MapPin className="w-5 h-5" />, title: "Visit", content: "Coimbatore", href: null }
                ].map((contact, i) => (
                  <div key={i} className="group/contact contact-pop" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-2 text-emerald-400 group-hover/contact:bg-emerald-500/25 transition-colors">
                      {contact.icon}
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{contact.title}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-emerald-400 hover:text-emerald-300 font-semibold text-xs transition-colors">
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-emerald-300 font-semibold text-xs">{contact.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a 
                  href="tel:+919600840058"
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all btn-pulse"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919600840058"
                  className="px-6 py-2.5 rounded-lg border border-emerald-500/50 text-emerald-400 font-bold text-sm hover:bg-emerald-500/10 transition-all btn-pulse"
                  style={{ animationDelay: '100ms' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
                <span className="text-xl font-bold text-white">SafePark</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4 font-light">
                Premium car protection engineered for India. Trusted by thousands.
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-400">2,000+ Happy Customers</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+919600840058" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Coimbatore, TN
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-400 font-light">
            <p>© 2025 SafePark. All rights reserved.</p>
          </div>
        </div>
      </footer>

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

        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .fade-in-image { animation: zoom-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both; }

        @keyframes scroll-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .scroll-observe {
          opacity: 0;
          animation: scroll-fade-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes heading-reveal {
          from { opacity: 0; transform: translateY(-20px) scaleY(0.8); }
          to { opacity: 1; transform: translateY(0) scaleY(1); }
        }

        .heading-reveal { animation: heading-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important; }

        @keyframes text-reveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .text-reveal { animation: text-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards !important; }

        @keyframes card-scale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .card-stagger { animation: card-scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes card-slide-in {
          from { opacity: 0; transform: translateX(-20px) translateY(20px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }

        .card-slide { animation: card-slide-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes contact-pop {
          from { opacity: 0; transform: scale(0) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .contact-pop { animation: contact-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes cta-scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .cta-scale { animation: cta-scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes button-pulse {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .btn-pulse { animation: button-pulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        .in-view { opacity: 1 !important; }

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
