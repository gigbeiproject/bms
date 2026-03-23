'use client';

import Link from "next/link";
import { ChevronLeft , Menu, Globe, ChevronRight, ArrowRight, Heart, Eye, Star, ShoppingCart } from "lucide-react";
import { useState,useEffect  } from "react";
import Image from "next/image";


// Enhanced Mock Data
const products = [
  { 
    id: 1, 
    name: 'Aradhya Plus (Paddy)', 
    category: 'Seeds',
    price: 450, 
    originalPrice: 550, 
    rating: 4.5, 
    reviews: 128,
     image: "/wp11pro.png",
    isNew: true 
  },
  { 
    id: 2, 
    name: 'Kanchana Plus (Paddy)', 
    category: 'Herbicides',
    price: 899, 
    originalPrice: 1200, 
    rating: 5.0, 
    reviews: 45,
    image: "/KANCHANApro.png",
    isNew: false 
  },
  { 
    id: 3, 
    name: 'Leela Gold (Paddy)', 
    category: 'Fertilizers',
    price: 1200, 
    originalPrice: 1200, 
    rating: 4.2, 
    reviews: 89,
     image: "/LEELApro.png",
    isNew: false 
  },
    { 
    id: 3, 
    name: 'MCS 4266 Gold', 
    category: 'Fertilizers',
    price: 1200, 
    originalPrice: 1200, 
    rating: 4.2, 
    reviews: 89,
   image: "/MCSpro.png",
    isNew: false 
  },
  // Add more products as needed...
];

// --- Components ---


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the 3 slides related to Morvi Crop Science
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070", // General Farming
      tag: "Welcome to Morvi Crops",
      title: "High Quality Seed & Pesticide Products",
      description: "We bring years of experience in agriculture farming to help you grow better.",
      cta: "Explore Products"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070", // Green Field/Organic
      tag: "100% Organic & Natural",
      title: "Sustainable Solutions for Modern Farming",
      description: "From Root Maker Gold to organic fertilizers, we ensure soil health and higher yields.",
      cta: "Explore Organic Range"
    },
    {
      id: 3,
      image: "/aaaaa.png", // Harvest/Growth
      tag: "Premium Quality",
      title: "Maximize Output with Advanced Technology",
      description: "Trusted brands like Kawach, Hitler, and Shakti Plus designed for your success.",
      cta: "Contact Us"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[500px] md:h-[600px] bg-gray-900 text-white overflow-hidden group">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear scale-105"
            style={{ backgroundImage: `url('${slide.image}')`, transform: index === currentSlide ? 'scale(110%)' : 'scale(100%)' }}
          >
            <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center px-4 md:px-12">
            <div className="max-w-4xl animate-fadeInUp">
              <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 uppercase tracking-wider mb-4 inline-block animate-[fadeIn_1s_ease-in]">
                {slide.tag}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                {slide.description}
              </p>
              {/* <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 hover:scale-105">
                {slide.cta} <ArrowRight size={18} />
              </button> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Visible on Hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? "bg-yellow-500 w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-green-700 font-bold uppercase text-sm mb-2 tracking-widest">
            About Morvi Crop Science
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            A trusted vision for high-quality seeds & organic farming.
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Morvi Crop Science Pvt Ltd is an aggressively growing company with a focused vision: to help farmers improve the output of their fields while coping with modern challenges. 
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We specialize in <strong>High Quality Seeds, Organic Fertilizers, and Bio Plant Care</strong>. Using top-notch technology and strict quality norms, we aim to create simplicity in agriculture and help farmers live a better life.
          </p>
          
          <Link href="/about" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition-all hover:gap-4">
            Read our full story <ChevronRight size={18} />
          </Link>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-2xl h-64 md:h-[400px] relative group">
             {/* Image: Green Field / Agriculture representing Morvi's work */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
             
             {/* Overlay Badge */}
             <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-yellow-500">
                <p className="text-sm font-bold text-green-800">Trusted by Farmers</p>
                <p className="text-xs text-gray-600">Delivering excellence in agro supplies across West Bengal.</p>
             </div>
        </div>
      </div>
    </section>
  );
};

const CardGrid = () => {
  const cards = [
    {
      title: "High Quality Seeds",
      desc: "Genetically superior hybrid seeds designed to withstand climate stress and ensure bumper harvests for every farmer.",
      link: "View Seeds",
      bg: "bg-green-800"
    },
    {
      title: "Organic Fertilizers",
      desc: "Eco-friendly bio-stimulants and soil conditioners like Root Maker Gold that regenerate soil health naturally.",
      link: "Go Organic",
      bg: "bg-teal-700"
    },
    {
      title: "Crop Protection",
      desc: "Advanced insecticides and herbicides, including Kawach and Hitler, to safeguard your crops from planting to harvest.",
      link: "See Products",
      bg: "bg-[#1e3a8a]" // Dark Blue similar to "Protection" themes
    }
  ];

  return (
    <section className="py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className={`${card.bg} text-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col`}>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="mb-8 opacity-90 leading-relaxed flex-grow">{card.desc}</p>
            <Link href="/product" className="font-bold flex items-center gap-2 hover:gap-4 transition-all mt-auto">
              {card.link} <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const NewsSection = () => {
  const news = [
    { 
      date: "18.11.2025", 
      title: "Morvi Crop Science launches improved 'Kawach' for better pest control" 
    },
    { 
      date: "10.11.2025", 
      title: "Successful Farmer Meetup held in Samudragarh: Focusing on organic yield" 
    },
    { 
      date: "30.10.2025", 
      title: "Introducing 'Root Maker Gold': The future of sustainable soil health" 
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest Updates</h2>
          <Link href="/news" className="text-green-700 font-bold hover:underline">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="border-t-4 border-green-500 pt-4 hover:bg-green-50 transition-colors p-4 cursor-pointer group">
              <span className="text-sm text-gray-500 font-medium">{item.date}</span>
              <h4 className="text-xl font-bold text-gray-800 mt-3 mb-4 group-hover:text-green-800 transition-colors leading-snug">
                {item.title}
              </h4>
              {/* <span className="text-green-700 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article <ChevronRight size={14} />
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const AgriculturalBanner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-white">
      {/* Left Content Side */}
      <div className="w-full md:w-1/2 bg-green-900 flex flex-col justify-center p-10 md:p-16 lg:p-24">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Agricultural <br />
            <span className="text-[#FDB913]">Biologicals</span>
          </h2>
          
          <p className="text-white text-lg mt-6 leading-relaxed opacity-90">
            Discover how biologicals support regenerative agriculture, soil health and why they are important.
          </p>

          <Link href="/product" className="mt-10 bg-gradient-to-r from-[#ff9c00] via-[#ff8800] to-[#ff9c00] hover:bg-yellow-500 text-black font-extrabold py-4 px-8 uppercase tracking-wider text-xs md:text-sm transition-colors inline-flex items-center gap-3 rounded-sm">
           Products
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-auto min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=2070&auto=format&fit=crop"
          alt="Close up of yellow corn cob"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};
const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600">
          Explore our premium range of agricultural solutions designed for maximum yield.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
              {/* Badge */}
              {product.isNew && (
                <span className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              )}
              {product.originalPrice > product.price && (
                <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}

              {/* Action Buttons (Visible on Hover) */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                <button
                  className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors"
                  title="Add to Wishlist"
                >
                  <Heart size={18} />
                </button>
                <button
                  className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors"
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">
                {product.category}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mb-2 truncate group-hover:text-green-700 transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">({product.reviews})</span>
              </div>

              {/* Price Section (Uncommented for layout balance, optional) */}
              <div className="mt-auto flex items-center justify-between">
                 {/* <div>
                  <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- NEW VIEW ALL BUTTON --- */}
      <div className="mt-12 text-center">
        <Link 
          href="/product" 
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          View All Products
          <ArrowRight size={20} />
        </Link>
      </div>

    </div>
  );
};


// --- Main Page Component ---

export default function Homeee() {
  return (
    <main className="min-h-screen bg-white">
  
      <HeroSection />
      <AboutSection />
      <CardGrid />
      <ProductGrid/>
      <AgriculturalBanner/>
      <NewsSection />
      
      {/* Sustainability Banner */}
      <section className="py-20 px-4 md:px-12 bg-green-900 text-center text-white">
         <h2 className="text-3xl font-bold mb-4">Our Sustainability Priorities</h2>
         <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Working with farmers, we believe agriculture can become a climate solution, regenerating soil and nature, while feeding the world.
         </p>
         <Link href="/product" className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-green-900 transition-colors font-semibold">
           View Products
         </Link>
      </section>

  
    </main>
  );
}