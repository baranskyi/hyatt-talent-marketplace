import { Link } from 'react-router-dom';
import { Briefcase, Clock, DollarSign, Star, Building2, Users, ArrowRight, UserPlus, Search, CheckCircle, Wallet, ChevronRight } from 'lucide-react';

export default function Landing() {
  const features = [
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Choose shifts that fit your schedule. Work when you want, where you want.'
    },
    {
      icon: Building2,
      title: 'Top Hotels',
      description: 'Join the prestigious Hyatt network. Work at world-class luxury properties.'
    },
    {
      icon: DollarSign,
      title: 'Quick Pay',
      description: 'Get paid fast. Weekly payouts directly to your account.'
    }
  ];

  const stats = [
    { value: '150+', label: 'Hyatt Properties' },
    { value: '10K+', label: 'Active Workers' },
    { value: '4.8', label: 'Average Rating' },
    { value: '€2M+', label: 'Paid to Workers' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hyatt-blue overflow-hidden">
        {/* Background Image - Diverse team at luxury hotel */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
            alt="Diverse team of young hospitality professionals smiling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hyatt-blue/70 via-hyatt-blue/60 to-hyatt-blue/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            {/* Hyatt Logo */}
            <div className="mb-8">
              <img
                src="/hyatt-hotels.png"
                alt="Hyatt Hotels"
                className="h-20 md:h-28 w-auto mx-auto"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Flexible Work at{' '}
              <span className="text-hyatt-gold">Hyatt Hotels</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Join the Hyatt Talent Marketplace. Pick up shifts at luxury hotels,
              build your hospitality career, and earn on your own schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shifts"
                className="inline-flex items-center justify-center bg-hyatt-gold text-hyatt-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-hyatt-gold-light transition-all shadow-lg hover:shadow-xl"
              >
                <Briefcase className="mr-2" size={20} />
                Browse Shifts
              </Link>
              <Link
                to="/profile"
                className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <Users className="mr-2" size={20} />
                Join as Worker
              </Link>
            </div>

            {/* Credit */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">
                Created by <span className="text-hyatt-gold/70 font-medium">Bravo6</span> IE EMBA Group
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-hyatt-blue">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hyatt-blue mb-4">
              Why Work With Hyatt?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of hospitality professionals who trust Hyatt Talent Marketplace
              for flexible work opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all card-hover"
              >
                <div className="w-14 h-14 bg-hyatt-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-hyatt-gold" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-hyatt-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hyatt-blue mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and find your first shift today
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-2 relative">
            {[
              {
                step: '1',
                title: 'Create Profile',
                desc: 'Sign up, upload ID, and verify your identity',
                icon: UserPlus,
                color: 'bg-blue-500'
              },
              {
                step: '2',
                title: 'Browse Shifts',
                desc: 'Find opportunities that match your skills & schedule',
                icon: Search,
                color: 'bg-purple-500'
              },
              {
                step: '3',
                title: 'Apply & Work',
                desc: 'Get confirmed, show up, and deliver great service',
                icon: CheckCircle,
                color: 'bg-green-500'
              },
              {
                step: '4',
                title: 'Get Paid',
                desc: 'Receive payment and build your reputation',
                icon: Wallet,
                color: 'bg-hyatt-gold'
              }
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Connector Arrow (hidden on mobile, shown between items on desktop) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-10">
                    <ChevronRight className="text-gray-300" size={32} />
                  </div>
                )}

                {/* Card */}
                <div className="bg-gray-50 rounded-2xl p-6 text-center w-full hover:shadow-lg transition-all">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-hyatt-blue text-white text-sm font-bold px-3 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2 shadow-lg`}>
                    <item.icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-hyatt-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>

                {/* Mobile Arrow (shown below each card except last) */}
                {index < 3 && (
                  <div className="md:hidden my-4">
                    <ChevronRight className="text-gray-300 rotate-90" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Flow Summary */}
          <div className="mt-16 bg-gradient-to-r from-hyatt-blue to-hyatt-blue/80 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="text-hyatt-gold" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">~15 minutes</div>
                  <div className="text-white/70">Average time to first application</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-green-400" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">24-48 hours</div>
                  <div className="text-white/70">Typical response time</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Wallet className="text-hyatt-gold" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">Weekly payouts</div>
                  <div className="text-white/70">Direct to your bank account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hyatt-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Thousands of shifts are waiting for you at Hyatt properties worldwide.
          </p>
          <Link
            to="/shifts"
            className="inline-flex items-center bg-hyatt-gold text-hyatt-blue px-10 py-4 rounded-xl font-semibold text-lg hover:bg-hyatt-gold-light transition-all shadow-lg"
          >
            Explore Available Shifts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/hyatt-hotels.png"
                alt="Hyatt"
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
              <span className="text-white/50 mx-1">|</span>
              <span className="text-white font-semibold">Talent Marketplace</span>
            </div>
            <div className="text-sm">
              © 2025 Hyatt Corporation. All rights reserved. | Demo Prototype
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
