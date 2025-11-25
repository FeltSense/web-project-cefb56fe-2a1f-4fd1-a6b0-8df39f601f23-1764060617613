'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Heart } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Victoria Ashford',
      role: 'CEO, Ashford Enterprises',
      location: 'Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'Luxe Estate Properties transformed our home search into an extraordinary experience. Their attention to detail, market knowledge, and personalized service exceeded all expectations. We found our dream estate within weeks.',
      property: 'Mediterranean Villa - $12.5M',
      highlight: 'Exceptional Service'
    },
    {
      name: 'Marcus Wellington',
      role: 'Investment Banker',
      location: 'Manhattan, NY',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'As someone who values efficiency and expertise, I was thoroughly impressed by the Luxe Estate team. Their market analysis, negotiation skills, and exclusive access to off-market properties made all the difference.',
      property: 'Penthouse Suite - $18.2M',
      highlight: 'Market Expertise'
    },
    {
      name: 'Sophia & James Chen',
      role: 'Entrepreneurs',
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'From our first consultation to closing day, every interaction was marked by professionalism and genuine care. They understood our lifestyle needs and found the perfect waterfront property that checked every box.',
      property: 'Oceanfront Estate - $9.8M',
      highlight: 'Personalized Approach'
    },
    {
      name: 'Alexander Bennett',
      role: 'Tech Founder',
      location: 'Palo Alto, CA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'The virtual tour technology and detailed market analytics gave me confidence to make an investment decision remotely. Luxe Estate Properties truly understands modern luxury real estate.',
      property: 'Smart Home Estate - $7.5M',
      highlight: 'Innovative Technology'
    },
    {
      name: 'Isabella Rodriguez',
      role: 'Fashion Designer',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'Their curated selection of properties showcased impeccable taste. Every listing was thoughtfully presented with stunning photography and comprehensive details. They made luxury feel accessible.',
      property: 'Designer Villa - $6.3M',
      highlight: 'Refined Curation'
    },
    {
      name: 'David Montgomery',
      role: 'Retired Executive',
      location: 'Scottsdale, AZ',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'After working with several agencies, Luxe Estate Properties stood out for their integrity and commitment. They guided us through a complex transaction with patience and expertise.',
      property: 'Golf Course Estate - $5.2M',
      highlight: 'Trust & Integrity'
    }
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Luxury Homes Sold' },
    { icon: TrendingUp, value: '$2.8B+', label: 'Total Sales Value' },
    { icon: Heart, value: '98%', label: 'Client Satisfaction' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Discerning Clients
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover why high-net-worth individuals choose Luxe Estate Properties for their real estate journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Side - Client Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-amber-500 mb-6" />
                  
                  <div className="flex items-center mb-6">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-amber-500/20"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{current.name}</h3>
                      <p className="text-amber-400 text-sm">{current.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                      <span className="text-slate-300">{current.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                      <span className="text-slate-300">{current.property}</span>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <Award className="w-4 h-4 text-amber-400 mr-2" />
                    <span className="text-sm font-semibold text-amber-400">{current.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Testimonial Content */}
              <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    "{current.text}"
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === activeTestimonial
                            ? 'w-8 bg-amber-600'
                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm line-clamp-4">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">Ready to experience exceptional service?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Start Your Journey
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;