import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, TrendingUp, Zap, ChevronDown, Plus, Minus } from 'lucide-react';
import Marquee from './components/Marquee';
import AnimatedSection from './components/AnimatedSection';
import FaqAccordionItem from './components/FaqAccordionItem';
import { ServiceItem, PortfolioItem, FaqItem } from './types';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---
const services: ServiceItem[] = [
  {
    id: 's1',
    number: '01',
    title: 'Marketing Strategy',
    description: 'We dissect your market position and architect a roadmap that transforms casual browsers into loyal brand advocates.',
    tags: ['Brand Strategy', 'Market Analysis', 'Positioning']
  },
  {
    id: 's2',
    number: '02',
    title: 'Digital Design',
    description: 'Visual identity that cuts through the noise. We build systems, not just logos. Brutalist, minimal, or corporate.',
    tags: ['UI/UX', 'Web Design', 'Motion Graphics']
  },
  {
    id: 's3',
    number: '03',
    title: 'SEO & Content',
    description: 'Dominate search results with content that actually converts. Technical SEO meets storytelling.',
    tags: ['SEO', 'Copywriting', 'Content Strategy']
  }
];

const portfolio: PortfolioItem[] = [
  {
    id: 'p1',
    client: 'DARK BLOOM',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    stats: [{ label: 'Conv. Rate', value: '+40%' }, { label: 'ROI', value: '3.5x' }]
  },
  {
    id: 'p2',
    client: 'WONDEROUD',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop',
    stats: [{ label: 'Sales', value: '+188%' }, { label: 'Traffic', value: '2.1M' }]
  },
  {
    id: 'p3',
    client: 'TECHNO CORE',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    stats: [{ label: 'Signups', value: '+580%' }, { label: 'Retention', value: '92%' }]
  }
];

const faqs: FaqItem[] = [
  { question: "How does Nova Digital start a project?", answer: "We begin with a deep dive audit of your current digital footprint. No fluff, just hard data and brutal honesty about what's working and what isn't." },
  { question: "Do you work with startups?", answer: "Yes, if you have the ambition to disrupt. We prefer bold partners over safe ones." },
  { question: "What makes you different from other agencies in Brasov?", answer: "We don't just make things look pretty. We engineer growth systems. Our design is a weapon, not decoration." },
  { question: "How do you track results?", answer: "Live dashboards, weekly sprint reports, and direct ROI attribution. You'll never have to ask 'is this working?'" }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('s1');

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-nova-black text-white selection:bg-nova-red selection:text-black font-sans overflow-x-hidden">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference border-b border-white/10 backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-display tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-white rotate-45"></div>
            NOVA DIGITAL
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest uppercase">
            <button onClick={() => scrollTo('services')} className="hover:text-nova-red transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollTo('work')} className="hover:text-nova-red transition-colors cursor-pointer">Work</button>
            <button onClick={() => scrollTo('about')} className="hover:text-nova-red transition-colors cursor-pointer">Agency</button>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-white text-black px-6 py-2 font-bold hover:bg-nova-red hover:text-white transition-all skew-x-[-10deg] cursor-pointer"
            >
              <span className="skew-x-[10deg] block">Start Project</span>
            </button>
          </div>

          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-nova-red flex flex-col items-center justify-center"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <button className="absolute top-6 right-6 text-black cursor-pointer" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={48} />
            </button>
            <div className="flex flex-col gap-8 text-black font-display text-5xl uppercase text-center">
              <button onClick={() => scrollTo('services')} className="cursor-pointer hover:opacity-70 transition-opacity">Services</button>
              <button onClick={() => scrollTo('work')} className="cursor-pointer hover:opacity-70 transition-opacity">Work</button>
              <button onClick={() => scrollTo('about')} className="cursor-pointer hover:opacity-70 transition-opacity">Agency</button>
              <button onClick={() => scrollTo('contact')} className="cursor-pointer hover:opacity-70 transition-opacity">Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <main id="main-content">

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between px-4 md:px-8 max-w-[1600px] mx-auto border-x border-white/5">

          {/* Abstract Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full border border-white/10 opacity-20 pointer-events-none animate-spin-slow" aria-hidden="true">
            <div className="absolute inset-0 border border-white/10 rotate-45"></div>
            <div className="absolute inset-[15%] border border-white/10 -rotate-12"></div>
          </div>

          {/* Top Meta */}
          <div className="flex justify-between items-start font-mono text-xs md:text-sm text-gray-400 mb-12 uppercase tracking-widest">
            <div className="max-w-[200px]">
              Brasov, Romania<br />
              45.6427° N, 25.5887° E<br />
              Est. 2024
            </div>
            <div className="text-right max-w-[200px]">
              Digital Dominion<br />
              System Status: Online<br />
              <span className="text-nova-red animate-pulse">● Live</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="relative z-10">
            <AnimatedSection>
              <h1 className="text-[12vw] leading-[0.85] font-display uppercase tracking-tighter text-white mix-blend-normal">
                Control<br />
                <span className="text-outline hover:text-nova-red transition-all duration-500 cursor-default">Your</span><br />
                Marketing
              </h1>
            </AnimatedSection>
          </div>

          {/* Bottom CTA Area */}
          <div className="flex flex-col md:flex-row items-end justify-between mt-12 gap-8">
            <div className="max-w-md text-gray-400 text-lg leading-relaxed">
              Marketing should work like a precise mechanism—predictably, efficiently, and without unnecessary costs.
            </div>

            <div className="relative group cursor-pointer" onClick={() => scrollTo('work')} role="button" tabIndex={0} aria-label="Scroll to our work" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollTo('work'); }}>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-nova-red group-hover:border-nova-red transition-all duration-300">
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* --- MARQUEE STRIP --- */}
        <div className="py-20 relative overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-nova-black via-transparent to-nova-black z-10 pointer-events-none"></div>
          <Marquee text="NOVA DIGITAL + CONTROL + DOMINATE + RESULTS +" rotate className="border-y-4 border-black shadow-2xl" />
        </div>

        {/* --- STATS SECTION --- */}
        <section id="about" className="px-4 md:px-8 max-w-[1600px] mx-auto py-24 border-x border-white/5">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="space-y-8">
                <div className="inline-block px-3 py-1 border border-nova-red text-nova-red font-mono text-xs uppercase tracking-widest">
                  Efficiency x Armor
                </div>
                <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight">
                  And we don't just talk about results. <br />
                  <span className="text-nova-red">We deliver them.</span>
                </h2>
                <p className="text-gray-400 max-w-lg text-lg">
                  We've stripped away the agency fluff. No account managers who don't know the tech. No outsourcing to hidden teams. Just pure, unadulterated performance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="bg-nova-black p-8 md:p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
                  <span className="text-5xl md:text-7xl font-display text-white mb-2 group-hover:text-nova-red transition-colors">188%</span>
                  <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">Avg. Traffic Growth</span>
                </div>
                <div className="bg-nova-black p-8 md:p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
                  <span className="text-5xl md:text-7xl font-display text-white mb-2 group-hover:text-nova-red transition-colors">700+</span>
                  <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">Campaigns Launched</span>
                </div>
                <div className="bg-nova-black p-8 md:p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
                  <span className="text-5xl md:text-7xl font-display text-white mb-2 group-hover:text-nova-red transition-colors">10x</span>
                  <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">ROI Multiplier</span>
                </div>
                <div className="bg-nova-black p-8 md:p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
                  <span className="text-5xl md:text-7xl font-display text-white mb-2 group-hover:text-nova-red transition-colors">24/7</span>
                  <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">System Uptime</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="bg-white text-black py-24 px-4 md:px-8 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.8]">
                Our<br />Services
              </h2>
              <div className="max-w-sm text-sm font-mono uppercase tracking-wide border-l-2 border-nova-red pl-4">
                Providing a wide range of digital weaponry to give you a fiery result.
              </div>
            </div>

            <div className="flex flex-col border-t-2 border-black">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border-b-2 border-black transition-all duration-300 cursor-pointer ${activeAccordion === service.id ? 'bg-black text-white py-12' : 'py-8 hover:bg-gray-100'}`}
                  onMouseEnter={() => setActiveAccordion(service.id)}
                  onClick={() => setActiveAccordion(activeAccordion === service.id ? null : service.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeAccordion === service.id}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveAccordion(activeAccordion === service.id ? null : service.id); }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8 px-4">
                    <span className={`font-display text-3xl md:text-5xl opacity-50 ${activeAccordion === service.id ? 'text-nova-red opacity-100' : ''}`}>
                      /{service.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-3xl md:text-5xl font-display uppercase mb-4">{service.title}</h3>

                      <motion.div
                        initial={false}
                        animate={{ height: activeAccordion === service.id ? 'auto' : 0, opacity: activeAccordion === service.id ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <p className={`text-lg md:text-xl max-w-2xl mb-6 ${activeAccordion === service.id ? 'text-gray-300' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map(tag => (
                            <span key={tag} className={`px-3 py-1 text-xs font-mono border uppercase ${activeAccordion === service.id ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <div className="hidden md:block">
                      <div className={`w-12 h-12 flex items-center justify-center border rounded-full transition-transform duration-300 ${activeAccordion === service.id ? 'rotate-90 border-nova-red text-nova-red' : 'border-black'}`}>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PORTFOLIO SECTION --- */}
        <section id="work" className="py-32 px-4 md:px-8 max-w-[1600px] mx-auto border-x border-white/5">
          <AnimatedSection>
            <div className="mb-20 text-center">
              <span className="font-mono text-nova-red uppercase tracking-widest mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-display uppercase">Success Stories</h2>
            </div>

            <div className="space-y-32">
              {portfolio.map((item, index) => (
                <div key={item.id} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image Area */}
                  <div className="w-full md:w-3/5 group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-nova-red/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
                    <img
                      src={item.image}
                      alt={`${item.client} — ${item.category} case study`}
                      className="w-full aspect-[4/3] object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      <button className="bg-white text-black px-6 py-2 font-display uppercase text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">View Case Study</button>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="w-full md:w-2/5 space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-nova-red font-display text-2xl">0{index + 1}</span>
                      <div className="h-[1px] bg-white/20 flex-1"></div>
                      <span className="font-mono text-xs uppercase text-gray-500">{item.category}</span>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-display uppercase leading-[0.9]">
                      {item.client}
                    </h3>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                      {item.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-3xl font-display text-white">{stat.value}</div>
                          <div className="text-xs font-mono text-gray-500 uppercase mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="bg-zinc-900 py-24 px-4 md:px-8 border-y border-white/5" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-display uppercase mb-16 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FaqAccordionItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="relative py-32 px-4 md:px-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nova-red/10 via-black to-black pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              <div className="space-y-8">
                <div className="inline-block bg-nova-red text-black px-4 py-1 font-bold skew-x-[-10deg] uppercase text-sm mb-4">
                  <span className="skew-x-[10deg] block">System Ready</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-display uppercase leading-[0.85]">
                  Ready to<br />
                  <span className="text-outline-red">Upgrade?</span>
                </h2>
                <p className="text-gray-400 text-xl max-w-md">
                  We know how to take your business to the next level. Let's build something bold together.
                </p>

                <div className="flex flex-col gap-4 mt-12 font-mono text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-nova-red rounded-full animate-pulse" aria-hidden="true"></div>
                    <span>ACCEPTING NEW CLIENTS FOR Q1 2026</span>
                  </div>
                  <div>BRASOV, ROMANIA</div>
                  <div><a href="mailto:HELLO@NOVADIGITAL.RO" className="hover:text-nova-red transition-colors cursor-pointer">HELLO@NOVADIGITAL.RO</a></div>
                </div>
              </div>

              <form className="space-y-6 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase text-gray-500">Full Name</label>
                    <input id="contact-name" type="text" className="w-full bg-black border border-white/20 p-4 focus:border-nova-red focus:outline-none text-white transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase text-gray-500">Email Address</label>
                    <input id="contact-email" type="email" className="w-full bg-black border border-white/20 p-4 focus:border-nova-red focus:outline-none text-white transition-colors" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-project" className="text-xs font-mono uppercase text-gray-500">Project Type</label>
                  <select id="contact-project" className="w-full bg-black border border-white/20 p-4 focus:border-nova-red focus:outline-none text-white transition-colors appearance-none custom-select cursor-pointer">
                    <option>Marketing Strategy</option>
                    <option>Web Design & Development</option>
                    <option>Branding Identity</option>
                    <option>SEO & Content</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase text-gray-500">Tell us about your goals</label>
                  <textarea id="contact-message" rows={4} className="w-full bg-black border border-white/20 p-4 focus:border-nova-red focus:outline-none text-white transition-colors" placeholder="We want to dominate the market..."></textarea>
                </div>

                <button type="submit" className="w-full bg-nova-red text-black font-display uppercase text-xl py-6 hover:bg-white transition-colors flex items-center justify-center gap-4 group cursor-pointer">
                  Send Transmission
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>

            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white text-black pt-20 pb-8 px-4 md:px-8" role="contentinfo">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            <div>
              <h2 className="text-5xl md:text-9xl font-display tracking-tighter mb-8">NOVA<br />DIGITAL</h2>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer" aria-label="Visit our website"><Globe size={20} /></a>
                <a href="#" className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer" aria-label="View our analytics"><TrendingUp size={20} /></a>
                <a href="#" className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer" aria-label="Explore our services"><Zap size={20} /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-mono uppercase tracking-wide">
              <div className="flex flex-col gap-4">
                <span className="font-bold border-b border-black pb-2 mb-2">Sitemap</span>
                <a href="#about" className="hover:text-nova-red transition-colors cursor-pointer">About Agency</a>
                <a href="#work" className="hover:text-nova-red transition-colors cursor-pointer">Case Studies</a>
                <a href="#services" className="hover:text-nova-red transition-colors cursor-pointer">Services</a>
                <a href="#contact" className="hover:text-nova-red transition-colors cursor-pointer">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold border-b border-black pb-2 mb-2">Socials</span>
                <a href="#" className="hover:text-nova-red transition-colors cursor-pointer">Instagram</a>
                <a href="#" className="hover:text-nova-red transition-colors cursor-pointer">LinkedIn</a>
                <a href="#" className="hover:text-nova-red transition-colors cursor-pointer">Behance</a>
                <a href="#" className="hover:text-nova-red transition-colors cursor-pointer">Twitter/X</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold border-b border-black pb-2 mb-2">Legal</span>
                <a href="#" className="hover:text-nova-red transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="hover:text-nova-red transition-colors cursor-pointer">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-black pt-8 font-mono text-xs uppercase">
            <div>© 2026 Nova Digital. Brasov. All Rights Reserved.</div>
            <div className="mt-4 md:mt-0 opacity-50">Designed for Dominance</div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
