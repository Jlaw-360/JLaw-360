import { CheckCircle, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Merci - JLAW 360 Marketing",
  description: "Merci pour votre intérêt. Votre audit est en cours de préparation.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#020507] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-teal)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="w-full max-w-2xl relative z-10 text-center">
        
        {/* Animated Checkmark */}
        <div className="flex justify-center mb-8">
           <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-gold)]/20 blur-xl rounded-full animate-pulse-glow" />
              <CheckCircle className="w-24 h-24 text-[var(--color-gold)] relative z-10" />
           </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Audit Initié. <br/> <span className="text-[var(--color-teal)]">Merci pour votre intérêt.</span>
        </h1>
        
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Vos informations ont été transmises avec succès à l'équipe JLAW 360. 
          Veuillez vérifier votre boîte de réception d'ici quelques minutes pour les prochaines étapes de notre protocole de croissance.
        </p>

        <div className="cyber-glass p-8 rounded-2xl border border-gray-800 flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 shadow-2xl">
           <Link href="/" className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)] text-white font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_15px_rgba(39,126,149,0.3)] flex items-center justify-center gap-2">
             <Home size={18} /> Retour à l'Accueil
           </Link>
           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-bold rounded-xl hover:border-[var(--color-gold)] hover:text-white transition-all flex items-center justify-center gap-2">
             Rejoindre le Groupe VIP <ArrowRight size={18} />
           </a>
        </div>

        {/* System Status Line */}
        <div className="text-center flex flex-col items-center gap-2 opacity-60">
           <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-teal)]"></span>
           </span>
           <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Transmission Sécurisée : Succès</p>
        </div>

      </div>
    </div>
  )
}
