'use client';

import { Shield, Umbrella, Zap, UserCheck, Phone, MessageCircle, MapPin, Star, Award, CheckCircle2, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.observe-section').forEach((section) => {
      observer.observe(section);
    });

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat((element.dataset as any).speed || '0.5');
        element.style.transform = `translateY(${scrolled * speed}px)`;
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
      
      <main>
        {/* HERO SECTION */}
        <section 
          ref={heroRef}
          className={`pt-28 pb-16 px-6 md:px-12 lg:px-20 relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          aria-label="Hero section"
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100/10 border border-emerald-400/20 text-emerald-300 font-medium text-sm backdrop-blur-sm mb-6 hover:bg-emerald-100/20 hover:border-emerald-400/40 hover:scale-105 transition-all duration-500 cursor-default animate-slide-down"
                  style={{ animationDelay: '0.1s' }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  Made in India • Premium Quality
                </div>

                <h1 
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6 animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  Everyday Risks.
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent mt-2 animate-gradient-x">
                    Lasting Protection.
                  </span>
                </h1>
                
                <p 
                  className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl animate-slide-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  Your car faces <span className="font-semibold text-white hover:text-emerald-400 transition-colors duration-300">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300">complete peace of mind</span>.
                </p>

                {/* Social Proof */}
                <div 
                  className="flex items-center justify-center lg:justify-start gap-8 mb-8 animate-slide-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="flex items-center gap-2 group">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300 cursor-pointer" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">2,000+ Protected Cars</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <span className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300 cursor-default">2-Year Warranty</span>
                </div>

                {/* CTAs */}
                <div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up"
                  style={{ animationDelay: '0.5s' }}
                >
                  <a 
                    href="tel:+919600840058"
                    className="group relative bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 inline-flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Shield className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Protect My Car Now</span>
                    <div className="absolute inset-0 -z-10 bg-emerald-600 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  </a>
                  
                  <a 
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 inline-flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>View Gallery</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div 
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 animate-slide-up"
                  style={{ animationDelay: '0.6s' }}
                >
                  {[
                    { text: 'Free Installation' },
                    { text: '2-4 Hour Setup' },
                    { text: 'No Hidden Costs' }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300 cursor-default group"
                      style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div 
                className="flex justify-center lg:justify-end order-first lg:order-last animate-slide-left"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="relative w-full max-w-[600px] group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-cyan-300/30 rounded-3xl blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse-slow"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                  
                  <img 
                    src="/gallery/hero-car.jpeg" 
                    alt="Premium BMW protected by SafePark car protection system" 
                    className="relative w-full h-[350px] md:h-[400px] object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700 parallax"
                    data-speed="0.1"
                    loading="eager"
                    width="600"
                    height="400"
                  />
                  
                  <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-all duration-300 hover:scale-110 cursor-default animate-bounce-subtle">
                    Premium Protection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section 
          ref={featuresRef}
          className="py-16 px-6 md:px-12 lg:px-20 relative observe-section opacity-0"
          aria-label="Product features"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-purple-500/5 backdrop-blur-3xl animate-gradient-slow"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
                Complete Protection for Every Risk
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Four layers of premium defense engineered for your vehicle's safety
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Shield className="w-10 h-10 mb-4 text-red-400" />, 
                  title: "Fire Protection", 
                  desc: "Heat & flame resistant materials with advanced coating technology",
                  gradient: "from-red-500/10 to-orange-500/10"
                },
                { 
                  icon: <Umbrella className="w-10 h-10 mb-4 text-blue-400" />, 
                  title: "Rain Protection", 
                  desc: "100% waterproof coating ensures complete weather resistance",
                  gradient: "from-blue-500/10 to-cyan-500/10"
                },
                { 
                  icon: <Zap className="w-10 h-10 mb-4 text-yellow-400" />, 
                  title: "Scratch-Proof", 
                  desc: "Durable fabric protection prevents surface damage",
                  gradient: "from-yellow-500/10 to-amber-500/10"
                },
                { 
                  icon: <UserCheck className="w-10 h-10 mb-4 text-green-400" />, 
                  title: "Safe for Kids", 
                  desc: "Rounded edges and stable design prioritize safety",
                  gradient: "from-green-500/10 to-emerald-500/10"
                }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl text-center transition-all duration-500 hover:scale-105 hover:bg-white/[0.10] hover:shadow-2xl hover:shadow-white/10 h-[200px] flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-2">
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{feature.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm relative z-10 group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE PROPS SECTION */}
        <section className="py-16 px-6 md:px-12 lg:px-20 relative observe-section opacity-0" aria-label="Why choose SafePark">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 backdrop-blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
                Why Choose SafePark?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Premium protection engineered for modern vehicles
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12 mb-6 text-emerald-400" />,
                  title: "Weather Protection",
                  desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating technology",
                  stats: "100% Waterproof"
                },
                {
                  icon: <Zap className="w-12 h-12 mb-6 text-emerald-400" />,
                  title: "Scratch & Damage Cover",
                  desc: "Revolutionary retractable design prevents scratches, dings, and surface damage from daily hazards",
                  stats: "Military Grade"
                },
                {
                  icon: <Award className="w-12 h-12 mb-6 text-emerald-400" />,
                  title: "Peace of Mind Warranty",
                  desc: "2-year comprehensive warranty with ongoing maintenance and premium customer support guarantee",
                  stats: "2-Year Coverage"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative bg-white/[0.06] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl text-center transition-all duration-700 hover:scale-105 hover:bg-white/[0.10] hover:shadow-2xl min-h-[280px] flex flex-col justify-between cursor-pointer hover:-translate-y-3">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400/0 group-hover:border-emerald-400/50 transition-all duration-700 scale-95 group-hover:scale-100"></div>
                    
                    <div className="absolute -top-3 right-4 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm group-hover:bg-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                      {item.stats}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-16 px-6 md:px-12 lg:px-20 bg-slate-800/30 observe-section opacity-0" aria-label="Gallery">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
                See SafePark in Action
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Real installations, real protection, real results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/gallery/gallery1.jpg",
                  alt: "Luxury car protection setup with SafePark retractable carport",
                  caption: "Luxury Car Protection",
                  tag: "Premium"
                },
                {
                  src: "/gallery/gallery2.jpg",
                  alt: "All-weather installation showing waterproof protection",
                  caption: "All-Weather Installation",
                  tag: "Weatherproof"
                },
                {
                  src: "/gallery/gallery3.jpg",
                  alt: "Quick setup demonstration of SafePark installation",
                  caption: "Quick Setup Demo",
                  tag: "Fast Setup"
                },
                {
                  src: "/gallery/gallery4.jpg",
                  alt: "Urban car protection solution for city parking",
                  caption: "Urban Protection",
                  tag: "City Ready"
                },
                {
                  src: "/gallery/gallery5.jpg",
                  alt: "Family vehicle protected with SafePark system",
                  caption: "Family Vehicle Care",
                  tag: "Family Safe"
                },
                {
                  src: "/gallery/gallery-video.mp4",
                  alt: "Professional installation process demonstration video",
                  caption: "Installation Process",
                  tag: "Professional",
                  type: "video"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-4 rounded-2xl shadow-lg bg-gray-900/50 backdrop-blur border border-gray-800/50 hover:bg-gray-800/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        poster="/gallery/gallery1.jpg"
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        width="400"
                        height="160"
                      />
                    )}
                    
                    <div className="absolute top-2 right-2 bg-emerald-500/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold group-hover:bg-emerald-400 group-hover:scale-110 transition-all duration-300">
                      {item.tag}
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors duration-300">{item.caption}</h3>
                    <p className="text-emerald-400/70 text-xs group-hover:text-emerald-300 transition-colors duration-300">Professional Installation</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-16 px-6 md:px-12 lg:px-20 relative observe-section opacity-0" aria-label="Customer testimonials">
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-emerald-500/5 to-cyan-500/5"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-lg text-gray-300">What our customers say about SafePark</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Coimbatore",
                  text: "SafePark completely transformed how I protect my BMW. The installation was incredibly quick and the quality exceeds all expectations.",
                  rating: 5,
                  role: "BMW Owner"
                },
                {
                  name: "Priya Sharma", 
                  location: "Tamil Nadu",
                  text: "Amazing product with world-class service. The retractable design is genius - no more worrying about weather damage ever again.",
                  rating: 5,
                  role: "Entrepreneur"
                },
                {
                  name: "Arjun Patel", 
                  location: "Gujarat",
                  text: "Professional installation and premium quality materials. SafePark has exceeded my expectations in every way.",
                  rating: 5,
                  role: "Business Owner"
                }
              ].map((review, idx) => (
                <div 
                  key={idx} 
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl transition-all duration-700 hover:scale-[1.02] hover:bg-white/[0.10] h-[220px] flex flex-col justify-between cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10">
                    
                    <div className="absolute inset-1 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="absolute -top-2 -left-2 text-6xl text-emerald-400/20 font-serif group-hover:text-emerald-400/40 group-hover:scale-110 transition-all duration-500">"</div>
                    
                    <div className="relative z-10">
                      <div className="flex mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" 
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                      <blockquote className="leading-relaxed text-gray-300 mb-4 text-sm italic group-hover:text-white transition-colors duration-300">
                        "{review.text}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors duration-300">{review.name}</div>
                          <div className="text-xs text-emerald-400">{review.role} • {review.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 px-6 md:px-12 lg:px-20 relative observe-section opacity-0" aria-label="Call to action">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 via-cyan-500/8 to-purple-500/8"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-white mb-4">
                Ready to Protect Your Vehicle?
              </h2>
              <p className="text-lg text-emerald-200 leading-relaxed max-w-2xl mx-auto">
                Join thousands who chose SafePark for premium protection. Get started in minutes.
              </p>
            </div>
            
            <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-700 group">
              
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 relative z-10">
                {[
                  {
                    icon: <Phone className="w-8 h-8 text-emerald-400" />,
                    title: "Phone",
                    content: "+91 9600840058",
                    href: "tel:+919600840058",
                    ariaLabel: "Call us at +91 9600840058"
                  },
                  {
                    icon: <MessageCircle className="w-8 h-8 text-emerald-400" />,
                    title: "WhatsApp",
                    content: "Message Us",
                    href: "https://wa.me/919600840058",
                    ariaLabel: "Message us on WhatsApp"
                  },
                  {
                    icon: <MapPin className="w-8 h-8 text-emerald-400" />,
                    title: "Location",
                    content: "Coimbatore, Tamil Nadu",
                    href: null,
                    ariaLabel: "Our location"
                  }
                ].map((contact, idx) => (
                  <div 
                    key={idx}
                    className="text-center group/contact hover:scale-105 transition-all duration-500"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/contact:bg-emerald-500/30 transition-all duration-500 group-hover/contact:rotate-6 group-hover/contact:scale-110">
                      {contact.icon}
                    </div>
                    <h3 className="font-bold text-white mb-2 text-lg group-hover/contact:text-emerald-300 transition-colors duration-300">{contact.title}</h3>
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors duration-300"
                        aria-label={contact.ariaLabel}
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-emerald-200">{contact.content}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <a 
                  href="tel:+919600840058" 
                  className="group/btn relative bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-emerald-500/30 hover:shadow-2xl text-center inline-flex items-center justify-center gap-2 overflow-hidden"
                  aria-label="Call for free quote"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <Phone className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Call for Free Quote</span>
                </a>
                <a 
                  href="https://wa.me/919600840058" 
                  className="group/btn relative bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 text-center inline-flex items-center justify-center gap-2 overflow-hidden hover:shadow-2xl hover:shadow-white/10"
                  aria-label="Message us on WhatsApp"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <MessageCircle className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 px-6 md:px-12 lg:px-20 bg-black/40 border-t border-white/10" role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-4 mb-8 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    S
                  </div>
                  <span className="text-white font-bold text-3xl group-hover:text-emerald-400 transition-colors duration-300">SafePark</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg hover:text-gray-300 transition-colors duration-300">
                  Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.
                </p>
                <div className="flex items-center space-x-4 group">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300">2,000+ Happy Customers</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl mb-8">Contact</h4>
                <nav className="space-y-6" aria-label="Footer navigation">
                  <a 
                    href="tel:+919600840058" 
                    className="flex items-center text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 text-lg group"
                    aria-label="Call us"
                  >
                    <Phone className="w-5 h-5 mr-4 group-hover:rotate-12 transition-transform duration-300" />
                    +91 9600840058
                  </a>
                  <a 
                    href="https://wa.me/919600840058" 
                    className="flex items-center text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 text-lg group"
                    aria-label="Message us on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                    WhatsApp
                  </a>
                  <div className="flex items-center text-gray-400 text-lg group hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                    Coimbatore, Tamil Nadu
                  </div>
                </nav>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors duration-300">© 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slide-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient-slow {
          animation: gradient-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .observe-section {
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(50px);
        }

        .observe-section.animate-in {
          opacity: 1 !important;
          transform: translateY(0);
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        .group,
        .transition-all,
        .hover\:scale-105,
        .hover\:scale-110,
        .hover\:-translate-y-2 {
          will-change: transform;
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #10b981;
          outline-offset: 4px;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
