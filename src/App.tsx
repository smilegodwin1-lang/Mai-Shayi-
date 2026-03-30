/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Facebook,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'tea' | 'snacks' | 'breakfast';
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Signature Ginger Tea',
    price: '₦500',
    description: 'Warm, spicy, and perfectly sweetened. The heart of Mai Shayi.',
    image: 'https://picsum.photos/seed/tea1/400/400',
    category: 'tea'
  },
  {
    id: '2',
    name: 'Masa & Honey',
    price: '₦1,200',
    description: 'Fluffy rice cakes served with pure local honey.',
    image: 'https://picsum.photos/seed/masa/400/400',
    category: 'breakfast'
  },
  {
    id: '3',
    name: 'Spiced Fried Eggs',
    price: '₦800',
    description: 'Two eggs fried with our secret Northern spice blend.',
    image: 'https://picsum.photos/seed/eggs/400/400',
    category: 'breakfast'
  },
  {
    id: '4',
    name: 'Crunchy Chin-Chin',
    price: '₦300',
    description: 'The perfect companion for your afternoon tea.',
    image: 'https://picsum.photos/seed/chinchin/400/400',
    category: 'snacks'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amina Bello',
    role: 'Student',
    content: 'The ginger tea tastes exactly like home. It’s my go-to every morning before classes.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=amina'
  },
  {
    id: '2',
    name: 'Ibrahim Musa',
    role: 'Tech Worker',
    content: 'Fast delivery and the Masa is always fresh. Best breakfast spot in the city!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ibrahim'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-amber-600 p-1.5 rounded-lg">
            <Coffee className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-amber-900' : 'text-white'}`}>
            Mai Shayi
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'About', 'Locations', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-medium hover:text-amber-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20">
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <MenuIcon className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Menu', 'About', 'Locations', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-semibold text-gray-800 border-b border-gray-50 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-amber-600 text-white w-full py-4 rounded-xl font-bold text-lg mt-2">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/tea-culture/1920/1080" 
          alt="Northern Tea Culture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-amber-600/30">
            Authentic Northern Flavors
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Warmth in Every <span className="text-amber-500 italic">Sip.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            Experience the rich tradition of Northern Nigerian street tea. Freshly brewed, perfectly spiced, and delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-600/30 group">
              Order Your Tea Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              View Menu
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-amber-900"
                />
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              <span className="text-white font-bold">2,500+</span> happy tea lovers this month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-amber-900 font-bold text-sm">
          {product.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <button className="text-gray-300 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        <button className="w-full bg-amber-50 text-amber-700 py-3 rounded-xl font-bold hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          Add to Order
        </button>
      </div>
    </motion.div>
  );
};

const StorySection = () => {
  return (
    <section id="about" className="py-24 bg-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/story/800/800" 
                alt="Our Story" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] hidden lg:block">
              <p className="text-amber-900 font-serif italic text-xl leading-relaxed">
                "It's not just tea, it's a conversation starter."
              </p>
              <p className="text-gray-500 text-sm mt-4 font-bold">— Founder, Mai Shayi</p>
            </div>
          </div>
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">The Culture</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-8 leading-tight">
              More Than Just a Cup of Tea.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In the North, "Mai Shayi" is more than a tea seller. He's a community builder, a morning ritual, and a late-night comfort. 
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We've taken that authentic street-side experience and refined it for the modern world. Using the finest local ginger, cloves, and spices, we bring the warmth of the North to your doorstep.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <CheckCircle2 className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Locally Sourced</h4>
                  <p className="text-sm text-gray-500">Direct from farmers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <CheckCircle2 className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Traditional Recipe</h4>
                  <p className="text-sm text-gray-500">Passed down generations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Pick Your Favorites",
      desc: "Browse our menu of teas, snacks, and breakfast specials."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "We Brew It Fresh",
      desc: "Our Shayi experts prepare your order with traditional care."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Swift Delivery",
      desc: "Hot and fresh, right to your home or office in minutes."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16">How to Get Your Fix</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-amber-50 w-20 h-20 rounded-3xl flex items-center justify-center text-amber-600 mx-auto mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              {idx < 2 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-full h-[2px] bg-amber-100 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-600 p-1.5 rounded-lg">
                <Coffee className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Mai Shayi</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Bringing the authentic Northern Nigerian tea experience to your doorstep. Warmth, community, and flavor in every cup.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Order Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500" />
                +234 800 MAI SHAYI
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500" />
                Abuja, Nigeria
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-500" />
                Open Daily: 6AM - 11PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Mai Shayi Food Co. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tea' | 'snacks' | 'breakfast'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Social Proof Bar */}
        <div className="bg-amber-600 py-4 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-12 text-white font-bold uppercase tracking-widest text-sm">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                <span>Voted Best Breakfast in Abuja 2025</span>
                <span className="mx-4 opacity-30">|</span>
                <span>Authentic Northern Spices</span>
                <span className="mx-4 opacity-30">|</span>
                <span>Freshly Brewed Daily</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Section */}
        <section id="menu" className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">Freshly Brewed Favorites</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From our signature spiced tea to fluffy Masa, every item is prepared with love and tradition.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'tea', 'breakfast', 'snacks'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-3 rounded-full font-bold transition-all capitalize ${
                  activeCategory === cat 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-amber-600 font-bold text-lg hover:gap-4 transition-all">
              View Full Menu <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <StorySection />

        <HowItWorks />

        {/* Testimonials */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Loved by the Community</h2>
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />)}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-gray-600 italic mb-8 text-lg">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-amber-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                  Ready for the <br /> <span className="text-amber-500">Best Shayi</span> in Town?
                </h2>
                <p className="text-amber-100/70 text-xl mb-12 max-w-xl mx-auto">
                  Don't wait. Your warm cup of tradition is just a few clicks away. Order now and feel the warmth.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-amber-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-500 transition-all shadow-xl shadow-amber-600/20">
                    Order Now
                  </button>
                  <button className="bg-transparent text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                    Find a Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/2348000000000" 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden md:inline font-bold">Order on WhatsApp</span>
      </a>
    </div>
  );
}
