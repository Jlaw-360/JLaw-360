import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, XCircle, CheckCircle, TrendingUp } from "lucide-react";
import ROICalculator from "@/components/funnels/ROICalculator";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function IndustryPage({ params }: { params: Promise<{ lang: string, industry: string }> }) {
  const { lang, industry } = await params;
  const dict = await getDictionary(lang as Locale);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (dict.industryData as Record<string, any>)?.[industry] as Record<string, any>;
  const pageDict = dict.industryPage;
  
  if (!data || !pageDict) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-navy)] text-white pt-24 pb-0 flex flex-col">
      {/* HERO */}
      <section className="pt-20 pb-20 px-6 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-4 block">{pageDict.focus} {data.title}</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            {data.heroHeadline}
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
            {data.heroSub}
          </p>
          <Link href="#simulator" className="neon-btn-gold px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3">
            {pageDict.heroBtn} <TrendingUp size={20} />
          </Link>
        </div>
      </section>

      {/* 1. INDUSTRY PROBLEMS */}
      <section className="py-24 px-6 bg-[#03090C]">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="text-red-500 w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">{pageDict.problemsTitle.replace("{title}", data.title)}</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            {data.problems}
          </p>
        </div>
      </section>

      {/* 2 & 3. WHAT'S WRONG VS WHAT WORKS */}
      <section className="py-24 px-6 border-y border-gray-800 bg-[#061016]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Wrong */}
          <div className="glass-card p-10 rounded-3xl border border-red-500/20 bg-black/40">
            <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-3">
              <XCircle /> {pageDict.wrongTitle}
            </h3>
            <ul className="space-y-6">
              {(data.doingWrong as string[]).map((item: string, i: number) => (
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
              <CheckCircle /> {pageDict.rightTitle}
            </h3>
            <ul className="space-y-6 relative z-10">
              {(data.competitors as string[]).map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">{i+1}</div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 & 5. THE GROWTH OPPORTUNITY & SIMULATOR */}
      <section id="simulator" className="py-24 px-6 bg-[var(--color-navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{pageDict.mathTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">{pageDict.mathTitle2}</span></h2>
            <p className="text-gray-400 text-lg">
              {pageDict.mathSub.replace("{title}", data.title.toLowerCase())}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* The Math breakdown */}
            <div className="space-y-8 p-10 bg-[#0A1116] rounded-3xl border border-[var(--color-teal)]/30 shadow-[0_0_40px_rgba(14,77,85,0.15)]">
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">{pageDict.simTitle}</h3>
              
              <div className="space-y-4 font-mono text-lg">
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">{pageDict.traffic}</span>
                  <span className="font-bold text-white">{data.caseStudy.visitors}</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl border border-[var(--color-teal)]/20">
                  <span className="text-[var(--color-teal)]">{pageDict.conv}</span>
                  <span className="font-bold text-[var(--color-teal)]">{data.caseStudy.conversion}%</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">{pageDict.leads}</span>
                  <span className="font-bold text-white">{data.caseStudy.leads}</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl border border-[var(--color-gold)]/20">
                  <span className="text-[var(--color-gold)]">{pageDict.close}</span>
                  <span className="font-bold text-[var(--color-gold)]">{data.caseStudy.closeRate}%</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">{pageDict.jobs}</span>
                  <span className="font-bold text-white">{data.caseStudy.jobs}</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                  <span className="text-gray-400">{pageDict.val}</span>
                  <span className="font-bold text-white">${data.metrics.avgJobValue.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-teal)]/30 mt-6">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 text-sm uppercase tracking-wider font-sans font-bold">{pageDict.newRev}</span>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">
                    ${data.caseStudy.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="text-lg text-gray-300 font-light leading-relaxed space-y-6">
              <p>
                {pageDict.context1} <span className="text-white font-bold">{pageDict.context1_bold}</span>.
              </p>
              <p>
                {pageDict.context2} <span className="text-[var(--color-gold)] font-bold">{pageDict.context2_bold}</span>.
              </p>
              <div className="bg-black/40 p-6 rounded-2xl border-l-4 border-[var(--color-teal)] mt-8">
                <h4 className="text-white font-bold mb-2">{pageDict.secretTitle}</h4>
                <p className="text-sm">{pageDict.secretDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insert Global ROI Calculator here at the end of the industry page too */}
      <div className="border-t border-[var(--color-teal-dark)]">
         <ROICalculator dict={dict.calculator} />
      </div>

    </main>
  );
}
