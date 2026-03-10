import { Metadata } from "next";
import BrandRealityCheck from "@/components/BrandRealityCheck";

export const metadata: Metadata = {
  title: "AI Brand Reality Check | JLAW 360 Marketing",
  description: "Find out exactly where your digital presence is leaking revenue with our AI Brand Reality Check tool.",
};

export default function RealityCheckPage() {
  return (
    <main className="min-h-screen bg-[var(--color-navy)] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[var(--color-teal)] opacity-10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[var(--color-gold-muted)] opacity-5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-center mb-6 tracking-tight">
          The AI Brand <br/> <span className="text-[var(--color-gold)] text-glow">Reality Check</span>
        </h1>
        <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl font-light">
          Are you losing deals to an invisible productivity gap? Take the 60-second diagnostic specifically engineered for Canadian service businesses.
        </p>

        {/* The Interactive Tool */}
        <div className="w-full">
          <BrandRealityCheck />
        </div>
      </div>
    </main>
  );
}
