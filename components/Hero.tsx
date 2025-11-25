'use client';

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, TrendingUp, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchType, setSearchType] = useState('buy');

  const propertyImages = [
    {
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000',
      title: 'Modern Waterfront Villa',
      location: 'Miami Beach, FL',
      price: '$8,500,000'
    },
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000',
      title: 'Contemporary Estate',
      location: 'Beverly Hills, CA',
      price: '$12,900,000'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000',
      title: 'Luxury Penthouse',
      location: 'Manhattan, NY',
      price: '$15,200,000'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % propertyImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {propertyImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Premium Properties Since 1995</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Dream Estate
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Exclusive access to the world's most prestigious properties. Where luxury meets lifestyle, and your vision becomes reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Explore Properties
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md hover:bg-white/20 transition-all border border-white/30">
                <Play className="mr-2 w-5 h-5" />
                Virtual Tour
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-amber-400">$2.8B+</div>
                <div className="text-sm text-slate-300 mt-1">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-slate-300 mt-1">Luxury Listings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">98%</div>
                <div className="text-sm text-slate-300 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Search Card */}
          <div className="lg:ml-auto w-full max-w-lg">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Find Your Perfect Property
              </h3>

              {/* Property Type Tabs */}
              <div className="flex gap-2 mb-6">
                {['buy', 'rent', 'sell'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSearchType(type)}
                    className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all ${
                      searchType === type
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Location or Address"
                    className="w-full pl-12 pr-4 py-3.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select className="px-4 py-3.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white">
                    <option>Property Type</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                    <option>Mansion</option>
                  </select>

                  <select className="px-4 py-3.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white">
                    <option>Price Range</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M - $20M</option>
                    <option>$20M+</option>
                  </select>
                </div>

                <button className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
                  <Search className="mr-2 w-5 h-5" />
                  Search Properties
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-3">Popular Searches:</p>
                <div className="flex flex-wrap gap-2">
                  {['Waterfront', 'Golf Course', 'Penthouse', 'New Construction'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium hover:bg-amber-100 hover:text-amber-700 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {propertyImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-1 rounded-full transition-all ${
              index === activeSlide ? 'w-8 bg-amber-500' : 'w-1 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;