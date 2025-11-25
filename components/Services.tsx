'use client';

import React from 'react';
import { Home, Search, TrendingUp, Calculator, MapPin, Video, Users, Award, FileText, Shield, Compass, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Advanced search filters to find your perfect property by location, price, size, and exclusive amenities.',
      features: ['Custom criteria', 'Real-time updates', 'Saved searches'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Home,
      title: 'Luxury Listings',
      description: 'Curated portfolio of premium properties with high-resolution galleries and detailed specifications.',
      features: ['HD photography', '3D floor plans', 'Property videos'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Video,
      title: 'Virtual Tours',
      description: 'Immersive 360° virtual tours and video walkthroughs from anywhere in the world.',
      features: ['360° viewing', 'Live video tours', 'VR compatible'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Calculator,
      title: 'Mortgage Calculator',
      description: 'Sophisticated financial tools to estimate payments, compare rates, and plan your investment.',
      features: ['Payment estimates', 'Rate comparison', 'Tax calculations'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Neighborhood Guides',
      description: 'Comprehensive insights into schools, amenities, lifestyle, and investment potential.',
      features: ['School ratings', 'Local amenities', 'Market trends'],
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Users,
      title: 'Expert Agents',
      description: 'Connect with our elite team of real estate professionals specializing in luxury properties.',
      features: ['Certified experts', 'Local knowledge', '24/7 availability'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'In-depth market reports and property valuations powered by advanced analytics.',
      features: ['Price trends', 'Investment ROI', 'Market forecasts'],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security and legal support throughout your entire property transaction.',
      features: ['Legal support', 'Secure payments', 'Title insurance'],
      color: 'from-slate-500 to-gray-600'
    }
  ];

  const premiumFeatures = [
    {
      icon: Award,
      title: 'Exclusive Access',
      description: 'First access to off-market listings'
    },
    {
      icon: FileText,
      title: 'Detailed Reports',
      description: 'Comprehensive property analytics'
    },
    {
      icon: Compass,
      title: 'Concierge Service',
      description: 'White-glove client experience'
    },
    {
      icon: Sparkles,
      title: 'Premium Support',
      description: 'Dedicated account manager'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Premium Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Everything You Need to Find
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Your Perfect Estate
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive tools and personalized service to guide you through every step of your luxury real estate journey.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Premium Features Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Premium Membership Benefits
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Unlock exclusive features and personalized service designed for discerning clients
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {premiumFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Explore Membership
                <Sparkles className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Your Journey to Luxury Living
            </h3>
            <p className="text-slate-600 text-lg">
              A seamless experience from search to settlement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Share your vision and requirements' },
              { step: '02', title: 'Curation', desc: 'Receive personalized property matches' },
              { step: '03', title: 'Experience', desc: 'Tour properties with expert guidance' },
              { step: '04', title: 'Acquisition', desc: 'Secure your dream estate seamlessly' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-amber-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;