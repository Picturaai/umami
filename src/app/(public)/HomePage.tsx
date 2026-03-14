'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  Lock,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Eye,
  MousePointer,
  Clock,
  MapPin,
  Laptop,
  Smartphone,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DashboardPreview />
      <FeaturesSection />
      <ComparisonSection />
      <AboutSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path
              d="M22 46V18h10c3.5 0 6.3 1.2 8.4 3.5 2.1 2.3 3.1 5.2 3.1 8.5s-1 6.2-3.1 8.5C38.3 40.8 35.5 42 32 42h-4"
              stroke="#C87941"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="44" cy="20" r="3" fill="#FFD700" />
          </svg>
          <span className="font-bold text-xl text-neutral-900">Pictura Analytics</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-neutral-700 font-medium hover:text-neutral-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-[#C87941] text-white font-medium rounded-lg hover:bg-[#B06835] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-8 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C87941]/10 text-[#C87941] rounded-full text-sm font-medium mb-8">
          <Shield className="w-4 h-4" />
          Privacy-First Analytics
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6 text-balance">
          Better insights.
          <br />
          <span className="text-[#C87941]">Zero compromise.</span>
        </h1>

        <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Privacy-focused web analytics that gives you the insights you need without tracking your
          visitors. Free forever. Made by Imoogle Labs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C87941] text-white font-semibold rounded-xl hover:bg-[#B06835] transition-all shadow-lg shadow-[#C87941]/20 hover:shadow-xl hover:shadow-[#C87941]/30 hover:-translate-y-0.5"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all"
          >
            View live demo
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 mt-8 text-sm text-neutral-500">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Forever free
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            GDPR compliant
          </span>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C87941]/20 via-[#FFD700]/20 to-[#C87941]/20 blur-3xl opacity-30 -z-10" />

          <div className="rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 border-b border-neutral-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-lg px-4 py-2 text-sm text-neutral-500 border border-neutral-200 max-w-md mx-auto flex items-center gap-2">
                  <Lock className="w-3 h-3 text-green-600" />
                  analytics.pictura.com/dashboard
                </div>
              </div>
            </div>

            <div className="flex min-h-[500px]">
              <div className="w-64 bg-neutral-900 p-5 hidden lg:block">
                <div className="flex items-center gap-3 mb-8">
                  <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M22 46V18h10c3.5 0 6.3 1.2 8.4 3.5 2.1 2.3 3.1 5.2 3.1 8.5s-1 6.2-3.1 8.5C38.3 40.8 35.5 42 32 42h-4"
                      stroke="#C87941"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="44" cy="20" r="3" fill="#FFD700" />
                  </svg>
                  <span className="text-white font-semibold text-lg">Pictura</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { name: 'Dashboard', icon: BarChart3, active: true },
                    { name: 'Realtime', icon: Zap, active: false },
                    { name: 'Pages', icon: Globe, active: false },
                    { name: 'Referrers', icon: TrendingUp, active: false },
                    { name: 'Events', icon: MousePointer, active: false },
                    { name: 'Settings', icon: Users, active: false },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        item.active
                          ? 'bg-[#C87941] text-white'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="flex-1 p-6 bg-neutral-50/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900">mywebsite.com</h2>
                    <p className="text-sm text-neutral-500">Last 7 days</p>
                  </div>
                  <div className="flex gap-2">
                    {['Today', '7 Days', '30 Days', 'Custom'].map((period, i) => (
                      <button
                        key={period}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          i === 1
                            ? 'bg-[#C87941] text-white shadow-md'
                            : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Unique Visitors', value: '24,847', change: '+24.5%', icon: Users, positive: true },
                    { label: 'Page Views', value: '98,291', change: '+18.2%', icon: Eye, positive: true },
                    { label: 'Bounce Rate', value: '32.4%', change: '-5.1%', icon: TrendingUp, positive: true },
                    { label: 'Avg. Session', value: '4m 24s', change: '+12.8%', icon: Clock, positive: true },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white p-5 rounded-xl border border-neutral-200 hover:border-[#C87941]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <stat.icon className="w-5 h-5 text-[#C87941]" />
                        <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-500'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                      <p className="text-sm text-neutral-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-neutral-200">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-neutral-900">Visitors Overview</h3>
                      <div className="flex gap-4 text-sm">
                        <span className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#C87941]" />
                          Visitors
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FFD700]" />
                          Page Views
                        </span>
                      </div>
                    </div>
                    <div className="h-48 flex items-end gap-2">
                      {[35, 45, 30, 60, 40, 75, 55, 85, 65, 90, 70, 80, 95, 75].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-1">
                          <div
                            className="bg-[#C87941]/20 rounded-t-sm hover:bg-[#C87941]/30 transition-colors relative"
                            style={{ height: `${height}%` }}
                          >
                            <div
                              className="absolute bottom-0 left-0 right-0 bg-[#C87941] rounded-t-sm"
                              style={{ height: `${50 + i * 3}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-neutral-400">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-4">Top Pages</h3>
                    <div className="space-y-3">
                      {[
                        { page: '/', views: '12,847', percent: 100 },
                        { page: '/pricing', views: '8,291', percent: 64 },
                        { page: '/features', views: '6,102', percent: 47 },
                        { page: '/blog', views: '4,829', percent: 37 },
                        { page: '/about', views: '2,918', percent: 22 },
                      ].map((item) => (
                        <div key={item.page}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-neutral-700 font-medium truncate">{item.page}</span>
                            <span className="text-neutral-500">{item.views}</span>
                          </div>
                          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#C87941] rounded-full" style={{ width: `${item.percent}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-6 rounded-xl border border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C87941]" />
                      Top Countries
                    </h3>
                    <div className="space-y-3">
                      {[
                        { country: 'United States', flag: '🇺🇸', visitors: '8,291' },
                        { country: 'United Kingdom', flag: '🇬🇧', visitors: '4,102' },
                        { country: 'Germany', flag: '🇩🇪', visitors: '3,829' },
                        { country: 'France', flag: '🇫🇷', visitors: '2,918' },
                      ].map((item) => (
                        <div key={item.country} className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm">
                            <span className="text-lg">{item.flag}</span>
                            {item.country}
                          </span>
                          <span className="text-sm text-neutral-500">{item.visitors}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-[#C87941]" />
                      Devices
                    </h3>
                    <div className="space-y-3">
                      {[
                        { device: 'Desktop', icon: Laptop, percent: 58 },
                        { device: 'Mobile', icon: Smartphone, percent: 36 },
                        { device: 'Tablet', icon: Laptop, percent: 6 },
                      ].map((item) => (
                        <div key={item.device}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="flex items-center gap-2 text-neutral-700">
                              <item.icon className="w-4 h-4" />
                              {item.device}
                            </span>
                            <span className="text-neutral-500">{item.percent}%</span>
                          </div>
                          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#FFD700] rounded-full" style={{ width: `${item.percent}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Live Visitors
                    </h3>
                    <div className="text-center py-4">
                      <p className="text-5xl font-bold text-neutral-900 mb-2">47</p>
                      <p className="text-sm text-neutral-500">active right now</p>
                    </div>
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-green-500/60 rounded-full"
                          style={{ height: `${12 + (i % 5) * 6}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No cookies, no personal data collection. Your visitors stay anonymous while you get the insights you need.',
    },
    {
      icon: Zap,
      title: 'Lightweight Script',
      description: 'Under 1KB gzipped. Our tracking script is 45x smaller than Google Analytics, making your site faster.',
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      description: 'No consent banners needed. We comply with GDPR, CCPA, and PECR out of the box.',
    },
    {
      icon: Globe,
      title: 'Open Source',
      description: 'Fully transparent and auditable. Self-host on your own infrastructure or use our cloud.',
    },
    {
      icon: BarChart3,
      title: 'Simple Dashboard',
      description: 'All your metrics at a glance. No complex reports, just the data that matters.',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Data',
      description: 'See who is on your site right now. Track events and conversions as they happen.',
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why choose Pictura?</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Unlike Google Analytics, we believe you can have powerful insights without sacrificing your users&apos; privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-[#C87941]/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-[#C87941]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C87941]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#C87941]" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const comparisons = [
    { feature: 'Privacy-focused', pictura: true, ga: false },
    { feature: 'No cookies required', pictura: true, ga: false },
    { feature: 'GDPR compliant by default', pictura: true, ga: false },
    { feature: 'Lightweight (< 1KB)', pictura: true, ga: false },
    { feature: 'Real-time analytics', pictura: true, ga: true },
    { feature: 'Open source', pictura: true, ga: false },
    { feature: 'Free tier', pictura: true, ga: true },
    { feature: 'Self-hostable', pictura: true, ga: false },
    { feature: 'No data sampling', pictura: true, ga: false },
    { feature: 'Simple UI', pictura: true, ga: false },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Pictura vs Google Analytics</h2>
          <p className="text-xl text-neutral-600">See why thousands are making the switch.</p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-neutral-50 border-b border-neutral-200">
            <div className="p-4 font-semibold text-neutral-900">Feature</div>
            <div className="p-4 font-semibold text-center text-[#C87941]">Pictura</div>
            <div className="p-4 font-semibold text-center text-neutral-500">Google Analytics</div>
          </div>
          {comparisons.map((item, i) => (
            <div
              key={item.feature}
              className={`grid grid-cols-3 ${i !== comparisons.length - 1 ? 'border-b border-neutral-100' : ''}`}
            >
              <div className="p-4 text-neutral-700">{item.feature}</div>
              <div className="p-4 flex justify-center">
                {item.pictura ? <Check className="w-5 h-5 text-green-500" /> : <span className="w-5 h-5 text-neutral-300">-</span>}
              </div>
              <div className="p-4 flex justify-center">
                {item.ga ? <Check className="w-5 h-5 text-green-500" /> : <span className="w-5 h-5 text-neutral-300">-</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8">
          Made by Imoogle Labs
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Our mission is to make analytics <span className="text-[#C87941]">simple and secure</span>
        </h2>

        <p className="text-xl text-neutral-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          We believe the web should respect user privacy. Google Analytics tracks users across the internet, builds
          detailed profiles, and sells that data to advertisers. We think there&apos;s a better way.
        </p>

        <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
          Pictura Analytics gives you all the insights you need to understand your website&apos;s performance without
          compromising your visitors&apos; privacy. No tracking, no cookies, no personal data - just simple, actionable
          analytics.
        </p>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Free forever. No strings attached.</h2>
          <p className="text-xl text-neutral-600">Unlimited websites, unlimited page views, unlimited data retention.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl border-2 border-[#C87941] shadow-xl shadow-[#C87941]/10 p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C87941] text-white text-sm font-medium rounded-full">
              100% Free
            </div>

            <div className="text-center mb-8">
              <p className="text-6xl font-bold text-neutral-900 mb-2">$0</p>
              <p className="text-neutral-600">Forever free</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Unlimited websites',
                'Unlimited page views',
                'Unlimited data retention',
                'Real-time dashboard',
                'Custom events tracking',
                'API access',
                'Export your data',
                'Email support',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="block w-full py-4 bg-[#C87941] text-white text-center font-semibold rounded-xl hover:bg-[#B06835] transition-colors"
            >
              Get started for free
            </Link>
          </div>
        </div>

        <p className="text-center text-neutral-500 mt-8">
          Need enterprise features?{' '}
          <a href="mailto:hello@imooglelabs.com" className="text-[#C87941] hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#C87941] to-[#B06835]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to try privacy-focused analytics?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join thousands of website owners who switched from Google Analytics to Pictura. Get started in under 5 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#C87941] font-semibold rounded-xl hover:bg-neutral-100 transition-all shadow-lg"
          >
            Create free account
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
          >
            View demo
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                <path
                  d="M22 46V18h10c3.5 0 6.3 1.2 8.4 3.5 2.1 2.3 3.1 5.2 3.1 8.5s-1 6.2-3.1 8.5C38.3 40.8 35.5 42 32 42h-4"
                  stroke="#C87941"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="44" cy="20" r="3" fill="#FFD700" />
              </svg>
              <span className="font-bold text-xl">Pictura Analytics</span>
            </Link>
            <p className="text-neutral-400 max-w-xs">Privacy-focused web analytics made by Imoogle Labs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Picturaai/umami" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Pictura Analytics. Made with love by Imoogle Labs.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Picturaai/umami" className="text-neutral-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
