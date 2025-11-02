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
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden py-16 bg-gradient-to-b from-black via-black to-black">
        
        {/* Rich Animated Background Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl animate-blob-1"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl animate-blob-2"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl animate-blob-3" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 -z-5"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-medium text-sm hover:bg-emerald-500/25 transition-all duration-300 w-fit fade-in-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Made in India • Premium Quality
              </div>

              <div className="space-y-1">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white fade-in-2 break-words">
                  Everyday Risks.
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent fade-in-3 break-words">
                  Lasting<br className="hidden lg:block" /> Protection.
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl font-light fade-in-4">
                Your car faces <span className="text-white font-semibold">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-300 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-5">
                <a 
                  href="tel:+919600840058"
                  className="group px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-base hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-2 btn-lift"
                >
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Protect My Car Now
                </a>
                
                <a 
                  href="#gallery"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-500/60 text-emerald-300 font-bold text-base hover:bg-emerald-500/15 hover:border-emerald-400 hover:text-emerald-200 transition-all duration-300 inline-flex items-center justify-center gap-2 group btn-lift"
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
                <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>
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

            {/* RIGHT IMAGE - FULL QUALITY */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last parallax fade-in-image">
              <div className="relative w-full max-w-[520px] h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-cyan-500/15 to-emerald-500/20 rounded-3xl blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 rounded-3xl blur-2xl opacity-60"></div>
                
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium car protected by SafePark"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500"
                  loading="eager"
                />
                
                <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500/95 to-cyan-500/85 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  Premium Protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-black via-black to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-cyan-900/5 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">Complete Protection</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto text-reveal">
              Four layers of engineered defense for every risk
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-12 h-12 text-red-400" />, title: "Fire Protection", desc: "Heat & flame resistant" },
              { icon: <Umbrella className="w-12 h-12 text-blue-400" />, title: "Rain Protection", desc: "100% waterproof coating" },
              { icon: <Zap className="w-12 h-12 text-yellow-400" />, title: "Scratch-Proof", desc: "Military-grade fabric" },
              { icon: <UserCheck className="w-12 h-12 text-green-400" />, title: "Safe for Kids", desc: "Family-friendly design" }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="scroll-observe group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05] hover:-translate-y-2 hover:shadow-xl card-stagger"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/15 group-hover:to-white/8 transition-colors duration-300 icon-bounce" style={{ animationDelay: `${idx * 150}ms` }}>
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
      <section className="py-24 px-6 md:px-12 lg:px-20 relative bg-black">
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
                className="scroll-observe group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-emerald-500/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05] hover:-translate-y-2 card-slide"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-500/40 text-emerald-200 text-xs font-bold badge-scale">
                  {item.badge}
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/25 transition-all duration-300 icon-spin">
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

      {/* GALLERY CAROUSEL - PROFESSIONAL */}
      <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">SafePark Installation</h2>
            <p className="text-lg text-gray-400 font-light text-reveal">Real installations, real results</p>
          </div>
          
          {/* Main Carousel */}
          <div className="relative scroll-observe">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
              <div className="relative h-[450px] md:h-[550px] w-full bg-gray-950 flex items-center justify-center overflow-hidden">
                <img 
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-all z-10 hover:scale-110 duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-all z-10 hover:scale-110 duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Counter */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-black/70 text-emerald-300 text-sm font-bold backdrop-blur-sm">
                {currentSlide + 1} / {galleryImages.length}
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{galleryImages[currentSlide].title}</h3>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-4 mt-8 overflow-x-auto pb-2 scroll-smooth">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'border-emerald-500 ring-2 ring-emerald-500/50 scale-110' 
                      : 'border-white/20 hover:border-white/50'
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
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black to-black relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 scroll-observe space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-reveal">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-400 font-light text-reveal">Everything you need to know about SafePark</p>
          </div>

          <div className="space-y-4 scroll-observe">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="group border border-white/15 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-all"
                >
                  <h3 className="text-lg font-bold text-white flex-1">{item.question}</h3>
                  <div className="ml-4 flex-shrink-0 text-emerald-400 group-hover:text-emerald-300">
                    {expandedFaq === idx ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed animate-fade-up border-t border-white/10">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="relative scroll-observe cta-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-cyan-600/5 to-emerald-600/10 rounded-3xl blur-3xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/15 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white heading-reveal">Ready to Protect Your Vehicle?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light text-reveal">
                Join thousands who chose SafePark. Get started in minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-white/15">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+91 9600840058", href: "tel:+919600840058" },
                  { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", content: "Message Us", href: "https://wa.me/919600840058" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Location", content: "Coimbatore, Tamil Nadu", href: null }
                ].map((contact, i) => (
                  <div key={i} className="group/contact contact-pop" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3 text-emerald-300 group-hover/contact:bg-emerald-500/30 group-hover/contact:text-emerald-200 transition-all">
                      {contact.icon}
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{contact.title}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors">
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
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500 btn-pulse"
                >
                  Call for Free Quote
                </a>
                <a 
                  href="https://wa.me/919600840058"
                  className="px-8 py-3 rounded-xl border-2 border-emerald-500/60 text-emerald-300 font-bold hover:bg-emerald-500/15 hover:border-emerald-400 hover:text-emerald-200 transition-all duration-300 btn-pulse"
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
      <footer className="border-t border-white/10 bg-gradient-to-b from-black to-black/50 py-16 px-6 md:px-12 lg:px-20">
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
                <a href="tel:+919600840058" className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors">
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

        @keyframes blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -80px) scale(1.1); }
        }

        .animate-blob-1 { animation: blob-1 8s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 7s infinite ease-in-out; }
        .animate-blob-3 { animation: blob-3 9s infinite ease-in-out; }

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
          from { opacity: 0; transform: translateY(-30px) scaleY(0.8); }
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

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .icon-bounce { animation: icon-bounce 2s ease-in-out infinite; }

        @keyframes icon-spin {
          from { transform: rotate(-180deg); opacity: 0; }
          to { transform: rotate(0deg); opacity: 1; }
        }

        .icon-spin { animation: icon-spin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

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

        @keyframes star-twinkle {
          from { opacity: 0; transform: scale(0) rotate(-180deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .star-pop { animation: star-twinkle 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

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

        .fade-in-buttons .btn-pulse:nth-child(2) { animation-delay: 0.1s; }

        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .card-float { animation: card-float 2s ease-in-out infinite; }

        @keyframes btn-lift {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .btn-lift { animation: btn-lift 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

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
