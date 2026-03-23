"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter } from "lucide-react";

// --- Mock Data ---
const galleryItems = [
  { id: 1, category: "Field Days", src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070", title: "Farmer Meet 2024" },
  { id: 4, category: "Field Days", src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070", title: "Wheat Crop Inspection" },
  { id: 5, category: "Products", src: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=2070", title: "Premium Corn Seeds" },
  { id: 6, category: "Office", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069", title: "Headquarters Visit" },
  { id: 7, category: "Field Days", src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071", title: "Fertilizer Demo" },
  { id: 8, category: "Events", src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070", title: "Annual General Meeting" },
  {
  id: 9,
  category: "Products",
  src: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2070",
  title: "Hybrid Paddy Seed Trial",
},
{
  id: 10,
  category: "Office",
  src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070",
  title: "Dealer Training Program",
},
];

const categories = ["All", "Field Days", "Products", "Events", "Office"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter Logic
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Lightbox Navigation Logic
  const openLightbox = () => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const showNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => prev !== null ? (prev + 1) % filteredItems.length : 0);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header */}
      <div className="bg-[#1a4d2e] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Our Gallery</h1>
        <p className="opacity-90">Glimpses of our journey, field visits, and success stories.</p>
      </div>

      {/* 2. Filter Tabs */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all text-sm font-semibold tracking-wide
                ${activeCategory === cat 
                  ? "bg-green-700 text-white border-green-700 shadow-md" 
                  : "bg-white text-gray-600 border-gray-300 hover:border-green-600 hover:text-green-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative h-64 cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={32} className="mx-auto mb-2" />
                  <p className="font-bold text-lg">{item.title}</p>
                  <span className="text-xs uppercase tracking-wider bg-yellow-500 text-black px-2 py-1 rounded-sm font-bold">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Filter size={48} className="mx-auto mb-4 opacity-50" />
            <p>No images found in this category.</p>
          </div>
        )}
      </div>

      {/* 4. Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={40} />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-10 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            onClick={showPrev}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredItems[selectedImageIndex].src}
              alt={filteredItems[selectedImageIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white pointer-events-none">
              <h3 className="text-xl font-bold text-shadow">{filteredItems[selectedImageIndex].title}</h3>
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-10 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            onClick={showNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;