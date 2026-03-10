import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle, XCircle, CheckCircle, TrendingUp, DollarSign } from "lucide-react";
import ROICalculator from "@/components/funnels/ROICalculator";

// Data for each industry
const industryData = {
  roofing: {
    title: "Roofing Companies",
    heroHeadline: "Stop Fighting For Scraps on HomeAdvisor.",
    heroSub: "See why typical roofing marketing fails, and how top 1% roofers build automated lead machines.",
    problems: "Roofing is highly competitive. Most roofers rely on unpredictable storms, expensive shared leads from Angi/HomeAdvisor, or word-of-mouth that dries up in the off-season.",
    doingWrong: [
      "No conversion funnel—just a basic brochure website.",
      "Zero 'Emergency Roof Repair Near Me' Google search dominance.",
      "Buying shared leads that get called by 5 competitors simultaneously.",
      "No automated follow-up when a homeowner requests a quote."
    ],
    competitors: [
      "Running hyper-local Google Search campaigns for immediate intent.",
      "Using AI SMS auto-responders to contact new leads within 60 seconds.",
      "Driving traffic to dedicated landing pages, not the homepage."
    ],
    metrics: {
      avgJobValue: 12000,
      avgCloseRate: 30,
      monthlyTarget: 100000
    },
    caseStudy: {
      visitors: 500,
      conversion: 8,
      leads: 40,
      closeRate: 35,
      jobs: 14,
      revenue: 168000
    }
  },
  hvac: {
    title: "HVAC & Trades",
    heroHeadline: "Dominate Emergency HVAC Calls in Your City.",
    heroSub: "While your competitors are missing calls, top HVAC companies are using our AI dispatch funnels to book jobs 24/7.",
    problems: "HVAC is a need-it-now business. When a furnace breaks in January, homeowners click the first result. If you aren't visible and responsive in 5 minutes, you lose the job.",
    doingWrong: [
      "Not bidding on high-intent emergency keywords.",
      "Sending paid traffic to a confusing homepage instead of a booking funnel.",
      "Missing phone calls after hours with no AI fallback.",
      "Ignoring Local SEO Map Pack rankings."
    ],
    competitors: [
      "Ranking #1 in the Google Map Pack for their service area.",
      "Using an automated calendar booking system directly on the site.",
      "Retargeting past customers for seasonal tune-ups."
    ],
    metrics: {
      avgJobValue: 8000,
      avgCloseRate: 40,
      monthlyTarget: 150000
    },
    caseStudy: {
      visitors: 800,
      conversion: 10,
      leads: 80,
      closeRate: 50,
      jobs: 40,
      revenue: 320000
    }
  },
  dental: {
    title: "Dental Clinics",
    heroHeadline: "Fill Your Chairs With High-Ticket Implant Patients.",
    heroSub: "General dentistry pays the bills. High-ticket funnels for Implants and Invisalign generate wealth.",
    problems: "Most dentists rely on neighborhood walk-ins and insurance referrals. They compete on price for cleanings instead of building authority for $10k+ cosmetic procedures.",
    doingWrong: [
      "No specific landing pages for high-ticket services (Implants, Veneers).",
      "Failing to nurture leads who aren't ready to book today.",
      "No Facebook/Instagram ad presence to generate demand.",
      "Weak Google Reviews compared to corporate dental competitors."
    ],
    competitors: [
      "Running educational video ads targeting specific cosmetic insecurities.",
      "Offering free virtual consultations via automated funnels.",
      "Having a 12-month email nurture sequence for high-value leads."
    ],
    metrics: {
      avgJobValue: 6500,
      avgCloseRate: 25,
      monthlyTarget: 80000
    },
    caseStudy: {
      visitors: 1200,
      conversion: 4,
      leads: 48,
      closeRate: 30,
      jobs: 14,
      revenue: 91000
    }
  },
  landscaping: {
    title: "Landscaping Companies",
    heroHeadline: "Land Premium Commercial & Luxury Residential Contracts.",
    heroSub: "Stop competing for $50 lawn cuts. Build a system that attracts $30k+ hardscaping and commercial bids.",
    problems: "Landscapers often get stuck doing low-margin maintenance work because they don't know how to digitally target high-net-worth homeowners or commercial property managers.",
    doingWrong: [
      "A portfolio site with bad photos and zero calls-to-action.",
      "No LinkedIn B2B strategy for commercial contracts.",
      "Not running targeted ads in affluent zip codes.",
      "Slow quoting processes that frustrate premium buyers."
    ],
    competitors: [
      "Using interactive 3D design lead magnets.",
      "Running Account-Based Marketing (ABM) for commercial contracts.",
      "Selling the 'transformation' on dedicated hardscaping landing pages."
    ],
    metrics: {
      avgJobValue: 25000,
      avgCloseRate: 20,
      monthlyTarget: 200000
    },
    caseStudy: {
      visitors: 400,
      conversion: 5,
      leads: 20,
      closeRate: 25,
      jobs: 5,
      revenue: 125000
    }
  }
};

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = industryData[params.industry as keyof typeof industryData];
  
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-navy)] text-white pt-24 pb-0 flex flex-col">
      
      {/* --- HERO --- */}
      <section className="pt-20 pb-20 px-6 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-4 block">Industry Focus: {data.title}</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            {data.heroHeadline}
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
            {data.heroSub}
          </p>
          <Link href="#simulator" className="neon-btn-gold px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3">
            See Your Growth Potential <TrendingUp size={20} />
          </Link>
        </div>
      </section>

      {/* --- 1. INDUSTRY PROBLEMS --- */}
      <section className="py-24 px-6 bg-[#03090C]">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="text-red-500 w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Why {data.title} Struggle to Scale</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            {data.problems}
          </p>
        </div>
      </section>

      {/* --- 2 & 3. WHAT'S WRONG VS WHAT WORKS --- */}
      <section className="py-24 px-6 border-y border-gray-800 bg-[#061016]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Wrong */}
          <div className="glass-card p-10 rounded-3xl border border-red-500/20 bg-black/40">
            <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-3">
              <XCircle /> What You Are Doing Wrong
            </h3>
            <ul className="space-y-6">
              {data.doingWrong.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">{i+1}</div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="glass-card p-10 rounded-3xl border border-[var(--color-gold)]/30 bg-black/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-[60px]" />
            <h3 className="text-2xl font-bold mb-8 text-[var(--color-gold)] flex items-center gap-3 relative z-10">
              <CheckCircle /> What Top 1% Competitors Do
            </h3>
            <ul className="space-y-6 relative z-10">
              {data.competitors.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">{i+1}</div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* --- 4 & 5. THE GROWTH OPPORTUNITY & SIMULATOR --- */}
      <section id="simulator" className="py-24 px-6 bg-[var(--color-navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Mathematical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">Opportunity</span></h2>
            <p className="text-gray-400 text-lg">Lead generation is just math. Here is what happens when we install our system for your {data.title.toLowerCase()}.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* The Math breakdown */}
            <div className="space-y-8 p-10 bg-[#0A1116] rounded-3xl border border-[var(--color-teal)]/30 shadow-[0_0_40px_rgba(14,77,85,0.15)]">
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">Simulation: New Landing Page Funnel</h3>
              
              <div className="space-y-4 font-mono text-lg">
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">Monthly Traffic</span>
                  <span className="font-bold text-white">{data.caseStudy.visitors} visitors</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl border border-[var(--color-teal)]/20">
                  <span className="text-[var(--color-teal)]">Funnel Conversion Rate</span>
                  <span className="font-bold text-[var(--color-teal)]">{data.caseStudy.conversion}%</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">Qualified Leads</span>
                  <span className="font-bold text-white">{data.caseStudy.leads}</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl border border-[var(--color-gold)]/20">
                  <span className="text-[var(--color-gold)]">Sales Close Rate</span>
                  <span className="font-bold text-[var(--color-gold)]">{data.caseStudy.closeRate}%</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">New Jobs Booked</span>
                  <span className="font-bold text-white">{data.caseStudy.jobs}</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">Average Job Value</span>
                  <span className="font-bold text-white">${data.metrics.avgJobValue.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-teal)]/30 mt-6">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 text-sm uppercase tracking-wider font-sans font-bold">New Monthly Revenue</span>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">
                    ${data.caseStudy.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="text-lg text-gray-300 font-light leading-relaxed space-y-6">
              <p>
                By replacing a standard website with a high-converting landing page, and driving high-intent traffic via Google Ads and SEO, we instantly increase the <span className="text-white font-bold">Conversion Rate</span>.
              </p>
              <p>
                Then, by utilizing AI automation for instant follow-ups on every lead, we ensure your sales team maximizes the <span className="text-[var(--color-gold)] font-bold">Close Rate</span>.
              </p>
              <div className="bg-black/40 p-6 rounded-2xl border-l-4 border-[var(--color-teal)] mt-8">
                <h4 className="text-white font-bold mb-2">The Secret:</h4>
                <p className="text-sm">You don't need million-dollar ad budgets. You just need a system that converts traffic at 8%+ instead of the industry average 2%.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Insert Global ROI Calculator here at the end of the industry page too */}
      <div className="border-t border-[var(--color-teal-dark)]">
         <ROICalculator />
      </div>

    </main>
  );
}
