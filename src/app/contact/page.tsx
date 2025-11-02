'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';

interface VisibilityState {
  [key: string]: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).id;
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach((el) => {
      const element = el as HTMLElement;
      element.id = element.id || `element-${Math.random().toString(36).substr(2, 9)}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/15 to-cyan-600/8 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/15 to-emerald-600/8 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium mb-6 animate-fade-in-down">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Get in touch
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to protect your investment with SafePark? Get your personalized quote and join thousands of satisfied customers.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-32 px-6 bg-gradient-to-b from-black via-slate-950/30 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form - 2/3 width */}
            <div 
              id="contact-form"
              data-animate="true"
              className="lg:col-span-2"
              style={{
                opacity: isVisible['contact-form'] ? 1 : 0,
                transform: isVisible['contact-form'] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Get Your Free Quote
                      </h2>
                      <p className="text-gray-400">
                        Tell us about your needs and we'll create the perfect protection plan.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 group-hover:border-white/20"
                            placeholder="John Smith"
                          />
                        </div>
                        
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 group-hover:border-white/20"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 group-hover:border-white/20"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 resize-none group-hover:border-white/20"
                          placeholder="Tell us about your car, preferred installation date, and any specific requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25"
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                              Send Message
                            </>
                          )}
                        </div>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="tel:+919600840058"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a 
                        href="https://wa.me/919600840058"
                        className="inline-flex items-center justify-center gap-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact Methods */}
              <div 
                id="contact-methods"
                data-animate="true"
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl"
                style={{
                  opacity: isVisible['contact-methods'] ? 1 : 0,
                  transform: isVisible['contact-methods'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+919600840058"
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-lg flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm">
                        Call Us
                      </h4>
                      <p className="text-sm text-gray-400">+91 9600840058</p>
                      <p className="text-xs text-gray-500 mt-1">Mon-Sat 9AM-6PM</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1 mt-1" />
                  </a>

                  <a 
                    href="https://wa.me/919600840058"
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-500/20 transition-all duration-300 group-hover:scale-110">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors text-sm">
                        WhatsApp
                      </h4>
                      <p className="text-sm text-gray-400">Instant messaging</p>
                      <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-all duration-300 group-hover:translate-x-1 mt-1" />
                  </a>

                  <div className="flex items-start gap-4 p-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Email</h4>
                      <p className="text-sm text-gray-400 break-all">hello@safepark.in</p>
                      <p className="text-xs text-gray-500 mt-1">Reply within 24hrs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Location</h4>
                      <p className="text-sm text-gray-400">Coimbatore</p>
                      <p className="text-xs text-gray-500 mt-1">Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Promise */}
              <div 
                id="service-promise"
                data-animate="true"
                className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 shadow-xl"
                style={{
                  opacity: isVisible['service-promise'] ? 1 : 0,
                  transform: isVisible['service-promise'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Our Commitment</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Free consultation & site visit',
                    '24-hour response guarantee', 
                    '2-year comprehensive warranty',
                    'Professional installation team'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(0.98); }
          66% { transform: translate(40px, -30px) scale(1.05); }
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float-1 { animation: float-1 12s infinite ease-in-out; }
        .animate-float-2 { animation: float-2 14s infinite ease-in-out; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
