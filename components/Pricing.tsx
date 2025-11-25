'use client';

import React, { useState } from 'react';
import { Check, Star, Sparkles, Crown, Gift, Calendar, TrendingUp, ChevronRight, Award } from 'lucide-react';

const Pricing = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const eliteFeatures = [
    'Exclusive access to off-market luxury properties',
    'Priority viewing appointments with concierge scheduling',
    'Dedicated elite agent with 24/7 availability',
    'Comprehensive market analysis and investment reports',
    'Virtual reality property tours and 3D walkthroughs',
    'First-access notifications to new luxury listings',
    'Complimentary property valuation services',
    'Professional staging consultation for sellers',
    'Access to private luxury real estate events',
    'Premium neighborhood insights and analytics',
    'Personalized property matching algorithms',
    'Legal and financial advisor referrals'
  ];

  const bonuses = [
    {
      icon: Gift,
      title: 'Welcome Package',
      description: 'Luxury gift box and exclusive welcome materials'
    },
    {
      icon: Calendar,
      title: '90-Day Trial',
      description: 'Full access to all premium features with satisfaction guarantee'
    },
    {
      icon: Award,
      title: 'VIP Events',
      description: 'Invitations to exclusive property showcases and networking events'
    }
  ];

  const handlePreOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-200">
            <Crown className="w-4 h-4 fill-current" />
            <span>Exclusive Membership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Join the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Luxe Estate Elite
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Secure your exclusive membership at our special pre-launch rate. Limited founding memberships available.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Premium Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>FOUNDING MEMBER OFFER</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Pricing */}
                <div className="p-10 lg:p-12 border-r border-white/10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Elite Membership</h3>
                      <p className="text-amber-400 text-sm">Lifetime Access</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-end mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-white">$29</span>
                      <span className="text-slate-400 ml-3 mb-2">one-time</span>
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">Save $470 from regular $499 price</span>
                    </div>
                  </div>

                  <form onSubmit={handlePreOrder} className="space-y-4 mb-8">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Secure Your Membership</span>
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  {submitStatus === 'success' && (
                    <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-lg text-sm">
                      ✓ Thank you! We'll be in touch soon with next steps.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="flex items-center text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>Instant access upon launch</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>All future updates included</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Features */}
                <div className="p-10 lg:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Sparkles className="w-5 h-5 text-amber-500 mr-2" />
                    Everything Included
                  </h4>
                  
                  <div className="space-y-3 mb-8 max-h-96 overflow-y-auto custom-scrollbar">
                    {eliteFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-amber-400 font-semibold mb-3 flex items-center">
                      <Gift className="w-5 h-5 mr-2" />
                      Exclusive Bonuses
                    </p>
                    <div className="space-y-2">
                      {bonuses.map((bonus, index) => {
                        const Icon = bonus.icon;
                        return (
                          <div key={index} className="flex items-center text-slate-400 text-sm">
                            <Icon className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                            <span>{bonus.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{bonus.title}</h4>
                <p className="text-slate-600 text-sm">{bonus.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6 text-slate-600">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm">Instant Access</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm">Money-Back Guarantee</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
              ))}
              <span className="ml-2 text-slate-600 text-sm">Rated 4.9/5 by members</span>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: 'What happens after I pre-order?',
                a: "You'll receive immediate confirmation and priority access when we launch. We'll keep you updated throughout the process."
              },
              {
                q: 'Can I cancel my membership?',
                a: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll provide a full refund.'
              },
              {
                q: 'Are there any additional fees?',
                a: 'No. The $29 one-time payment gives you lifetime access to all features with no recurring charges.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Pricing;