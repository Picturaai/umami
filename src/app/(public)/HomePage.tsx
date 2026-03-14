'use client';

import Link from 'next/link';
import { BarChart3, Shield, Zap, Lock, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          <span className="text-xl font-semibold text-neutral-900">Pictura Analytics</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            Features
          </a>
          <a href="#about" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            About
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2.5 bg-[#C87941] text-white font-medium rounded-lg hover:bg-[#B06835] transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-5xl mt-16">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10 overflow-hidden">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b border-neutral-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1.5 text-sm text-neutral-500 border border-neutral-200 max-w-md mx-auto">
              analytics.pictura.com/dashboard
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-56 bg-neutral-900 p-4 min-h-[400px] hidden md:block">
            <div className="flex items-center gap-3 mb-8">
              <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                <path d="M22 46V18h10c3.5 0 6.3 1.2 8.4 3.5 2.1 2.3 3.1 5.2 3.1 8.5s-1 6.2-3.1 8.5C38.3 40.8 35.5 42 32 42h-4" stroke="#C87941" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="44" cy="20" r="3" fill="#FFD700"/>
              </svg>
              <span className="text-white font-semibold">Pictura</span>
            </div>
            <nav className="space-y-1">
              {['Dashboard', 'Realtime', 'Pages', 'Referrers', 'Events'].map((item, i) => (
                <div key={item} className={`px-3 py-2 rounded-lg text-sm ${i === 0 ? 'bg-[#C87941] text-white' : 'text-neutral-400 hover:text-white'}`}>
                  {item}
                </div>
              ))}
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-6 bg-neutral-50">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">mywebsite.com</h2>
                <p className="text-sm text-neutral-500">Last 7 days</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200 text-sm text-neutral-600">
                  Today
                </div>
                <div className="px-3 py-1.5 bg-[#C87941] rounded-lg text-sm text-white font-medium">
                  7 Days
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Visitors', value: '12,847', change: '+24%' },
                { label: 'Page Views', value: '48,291', change: '+18%' },
                { label: 'Bounce Rate', value: '32%', change: '-5%' },
                { label: 'Avg. Time', value: '3m 24s', change: '+12%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-4 rounded-xl border border-neutral-200">
                  <p className="text-sm text-neutral-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                    {stat.change} vs last week
                  </p>
                </div>
              ))}
            </div>
            
            {/* Chart Placeholder */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <h3 className="text-sm font-medium text-neutral-900 mb-4">Visitors Overview</h3>
              <div className="flex items-end gap-1 h-32">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div key={i} className="flex-1 bg-[#C87941]/20 rounded-t hover:bg-[#C87941]/40 transition-colors" style={{ height: `${height}%` }}>
                    <div className="w-full bg-[#C87941] rounded-t" style={{ height: `${Math.random() * 40 + 30}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-neutral-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            100% Privacy-Focused
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6 text-balance">
            Analytics made{' '}
            <span className="text-[#C87941]">simple</span> and{' '}
            <span className="text-[#C87941]">secure</span>
          </h1>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Understand your visitors without compromising their privacy. Pictura Analytics is the
            free, open-source alternative to Google Analytics that respects user privacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C87941] text-white font-semibold rounded-xl hover:bg-[#B06835] transition-all shadow-lg shadow-[#C87941]/20"
            >
              Get started - it&apos;s free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-100 text-neutral-900 font-semibold rounded-xl hover:bg-neutral-200 transition-colors"
            >
              View demo
            </Link>
          </div>

          <p className="text-sm text-neutral-500 mt-6">No credit card required. Free forever.</p>
        </div>
        
        <DashboardMockup />
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy First',
      description:
        'No cookies, no personal data collection. GDPR, CCPA, and PECR compliant out of the box.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description:
        'Lightweight script under 1KB. Zero impact on your site performance and load times.',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Simple Insights',
      description:
        'Clean, intuitive dashboard. Get the metrics that matter without overwhelming complexity.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Your Data, Your Server',
      description:
        'Self-host or use our cloud. You own your data completely - we never sell or share it.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Analytics',
      description:
        'Watch your visitors in real-time. Track pageviews, referrers, devices, and more instantly.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'No Cookie Banners',
      description:
        "Since we don't use cookies, you won't need annoying consent popups on your website.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Simple, powerful analytics without the bloat of traditional platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C87941]/10 text-[#C87941] flex items-center justify-center mb-5 group-hover:bg-[#C87941] group-hover:text-white transition-colors">
                {feature.icon}
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

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Pictura Analytics</h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Built by <strong className="text-white">Imoogle Labs</strong>, Pictura Analytics was
              created with a simple mission: make web analytics accessible to everyone while
              protecting user privacy.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Unlike Google Analytics, we don&apos;t track your visitors across the web, we
              don&apos;t sell data to advertisers, and we don&apos;t require cookie consent banners
              that annoy your users.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Our aim is to make analytics <strong className="text-white">simple</strong> and{' '}
              <strong className="text-white">secure</strong>. You get the insights you need to grow
              your business, and your visitors get the privacy they deserve.
            </p>
          </div>

          <div className="bg-neutral-800 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              Why Pictura?
            </h3>

            <ul className="space-y-4">
              {[
                'Completely free and open-source',
                'No tracking, no cookies, no fingerprinting',
                'GDPR, CCPA, PECR compliant',
                'Own your data 100%',
                'Simple and intuitive interface',
                'Made by Imoogle Labs',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-neutral-600">
            Pictura Analytics is completely free. No hidden fees, no premium tiers, no tricks.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-3xl border-2 border-[#C87941] p-10 bg-gradient-to-b from-amber-50/50 to-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Free Forever</h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-6xl font-bold text-neutral-900">$0</span>
                <span className="text-neutral-500">/month</span>
              </div>
              <p className="text-neutral-600">Everything you need to get started</p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Unlimited websites',
                'Unlimited pageviews',
                'Real-time analytics',
                'Custom events tracking',
                'Goals and funnels',
                'Team collaboration',
                'API access',
                'Data export',
                'Self-hosting option',
                'Community support',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-[#C87941] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="block w-full text-center px-8 py-4 bg-[#C87941] text-white font-semibold rounded-xl hover:bg-[#B06835] transition-colors shadow-lg shadow-[#C87941]/20"
            >
              Get started for free
            </Link>

            <p className="text-center text-sm text-neutral-500 mt-4">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 bg-[#C87941]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to respect your visitors?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join thousands of websites using Pictura Analytics for privacy-focused insights.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#C87941] font-semibold rounded-xl hover:bg-neutral-100 transition-colors"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B06835] text-white font-semibold rounded-xl hover:bg-[#9A5B2E] transition-colors"
          >
            Sign in to dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 bg-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              <span className="text-lg font-semibold text-white">Pictura Analytics</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Privacy-focused web analytics made by Imoogle Labs. Free, simple, and secure.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
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
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pictura Analytics by Imoogle Labs. All rights
            reserved.
          </p>
          <p className="text-sm">
            Made with care for privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
