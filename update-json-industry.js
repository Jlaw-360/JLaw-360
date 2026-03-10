const fs = require('fs');

const enFile = 'C:/Users/Walke/OneDrive/Desktop/Jlaw 360 marketing website -- antygrfity/jlaw-website/src/i18n/dictionaries/en.json';
const frFile = 'C:/Users/Walke/OneDrive/Desktop/Jlaw 360 marketing website -- antygrfity/jlaw-website/src/i18n/dictionaries/fr.json';

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.industryData = {
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
    metrics: { avgJobValue: 12000, avgCloseRate: 30, monthlyTarget: 100000 },
    caseStudy: { visitors: 500, conversion: 8, leads: 40, closeRate: 35, jobs: 14, revenue: 168000 }
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
    metrics: { avgJobValue: 8000, avgCloseRate: 40, monthlyTarget: 150000 },
    caseStudy: { visitors: 800, conversion: 10, leads: 80, closeRate: 50, jobs: 40, revenue: 320000 }
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
    metrics: { avgJobValue: 6500, avgCloseRate: 25, monthlyTarget: 80000 },
    caseStudy: { visitors: 1200, conversion: 4, leads: 48, closeRate: 30, jobs: 14, revenue: 91000 }
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
    metrics: { avgJobValue: 25000, avgCloseRate: 20, monthlyTarget: 200000 },
    caseStudy: { visitors: 400, conversion: 5, leads: 20, closeRate: 25, jobs: 5, revenue: 125000 }
  }
};

en.industryPage = {
  focus: "Industry Focus:",
  heroBtn: "See Your Growth Potential",
  problemsTitle: "Why {title} Struggle to Scale",
  wrongTitle: "What You Are Doing Wrong",
  rightTitle: "What Top 1% Competitors Do",
  mathTitle1: "The Mathematical",
  mathTitle2: "Opportunity",
  mathSub: "Lead generation is just math. Here is what happens when we install our system for your {title}.",
  simTitle: "Simulation: New Landing Page Funnel",
  traffic: "Monthly Traffic",
  conv: "Funnel Conversion Rate",
  leads: "Qualified Leads",
  close: "Sales Close Rate",
  jobs: "New Jobs Booked",
  val: "Average Job Value",
  newRev: "New Monthly Revenue",
  context1: "By replacing a standard website with a high-converting landing page, and driving high-intent traffic via Google Ads and SEO, we instantly increase the ",
  context1_bold: "Conversion Rate",
  context2: "Then, by utilizing AI automation for instant follow-ups on every lead, we ensure your sales team maximizes the ",
  context2_bold: "Close Rate",
  secretTitle: "The Secret:",
  secretDesc: "You don't need million-dollar ad budgets. You just need a system that converts traffic at 8%+ instead of the industry average 2%."
};

fr.industryData = {
  roofing: {
    title: "Entreprises de Toiture",
    heroHeadline: "Cessez de Vous Battre pour des Miettes sur HomeAdvisor.",
    heroSub: "Découvrez pourquoi le marketing traditionnel en toiture échoue et comment le top 1 % construit des machines à leads automatisées.",
    problems: "Le secteur de la toiture est hyper compétitif. La majorité dépendent des tempêtes, achètent des leads partagés ultra chers ou comptent sur le bouche-à-oreille qui s'assèche hors saison.",
    doingWrong: [
      "Pas de tunnel de conversion—juste un site vitrine de base.",
      "Zéro domination SEO pour 'Réparation toiture urgence près de moi'.",
      "Achat de leads partagés appelés par 5 concurrents en même temps.",
      "Aucun suivi automatisé lorsqu'un propriétaire demande une soumission."
    ],
    competitors: [
      "Campagnes de recherche Google hyper-locales pour l'intention immédiate.",
      "Suivi SMS par IA pour contacter les leads en moins de 60 secondes.",
      "Trafic dirigé vers des pages de capture dédiées, pas la page d'accueil."
    ],
    metrics: en.industryData.roofing.metrics,
    caseStudy: en.industryData.roofing.caseStudy
  },
  hvac: {
    title: "Plomberie & Chauffage (CVC)",
    heroHeadline: "Dominez les Appels d'Urgence dans Votre Ville.",
    heroSub: "Pendant que vous manquez des appels, les leaders du CVC utilisent nos tunnels de répartition IA pour booker des contrats 24/7.",
    problems: "Le CVC est un besoin immédiat. Quand une chaudière lâche en janvier, le client clique sur le premier résultat. Si vous n'êtes pas visible et réactif en 5 minutes, vous perdez le contrat.",
    doingWrong: [
      "Absence d'enchères sur les mots-clés d'urgence à haute intention.",
      "Trafic payant envoyé sur une page d'accueil déroutante au lieu d'un tunnel de réservation.",
      "Appels manqués en dehors des heures d'ouverture sans relais IA.",
      "Ignorer le classement local Google My Business (Map Pack)."
    ],
    competitors: [
      "Classement #1 dans le Map Pack Google pour leur zone de service.",
      "Système de réservation calendrier automatisé directement sur le site.",
      "Retargeting des anciens clients pour les entretiens saisonniers."
    ],
    metrics: en.industryData.hvac.metrics,
    caseStudy: en.industryData.hvac.caseStudy
  },
  dental: {
    title: "Cliniques Dentaires",
    heroHeadline: "Remplissez Vos Chaises avec des Patients Implants à Haute Valeur.",
    heroSub: "La dentisterie générale paie les factures. Les tunnels pour implants et Invisalign créent la richesse.",
    problems: "La plupart des dentistes comptent sur le quartier et les assurances. Ils rivalisent sur les prix pour des nettoyages au lieu de bâtir une autorité pour les procédures cosmétiques à 10 000$+.",
    doingWrong: [
      "Aucune page de capture dédiée aux services chers (Implants, Facettes).",
      "Échec de l'entretien des leads non prêts à réserver aujourd'hui.",
      "Pas de présence publicitaire Facebook/Instagram pour créer la demande.",
      "Faibles avis Google comparés aux cliniques concurrentes."
    ],
    competitors: [
      "Publicités vidéo éducatives ciblant les insécurités cosmétiques spécifiques.",
      "Consultations virtuelles gratuites via des tunnels automatisés.",
      "Séquence de relance par courriel sur 12 mois pour les leads à haute valeur."
    ],
    metrics: en.industryData.dental.metrics,
    caseStudy: en.industryData.dental.caseStudy
  },
  landscaping: {
    title: "Aménagement Paysager",
    heroHeadline: "Décrochez des Contrats Commerciaux et Résidentiels de Luxe.",
    heroSub: "Ne rivalisez plus pour des tontes à 50$. Concevez un système attirant des projets d'aménagement à 30 000$+.",
    problems: "Les paysagistes restent souvent bloqués dans l'entretien à faible marge car ils ignorent comment cibler numériquement les propriétaires fortunés ou les gestionnaires commerciaux.",
    doingWrong: [
      "Un site portfolio avec de mauvaises photos et aucun appel à l'action.",
      "Aucune stratégie LinkedIn B2B pour les contrats commerciaux.",
      "Aucune publicité ciblée dans les codes postaux aisés.",
      "Processus de soumission lent qui frustre les acheteurs premium."
    ],
    competitors: [
      "Utilisation de maquettes 3D interactives comme aimant à prospects.",
      "Marketing B2B ciblé (ABM) pour les contrats commerciaux.",
      "Vendre la 'transformation' sur des pages de capture dédiées à l'aménagement de luxe."
    ],
    metrics: en.industryData.landscaping.metrics,
    caseStudy: en.industryData.landscaping.caseStudy
  }
};

fr.industryPage = {
  focus: "Focus Industrie :",
  heroBtn: "Découvrez Votre Potentiel de Croissance",
  problemsTitle: "Pourquoi Les {title} Peinent à Scaler",
  wrongTitle: "Ce Que Vous Faites Mal",
  rightTitle: "Ce Que le Top 1% Fait",
  mathTitle1: "L'Opportunité",
  mathTitle2: "Mathématique",
  mathSub: "L'acquisition de leads n'est qu'une affaire de mathématiques. Voici ce qu'il se passe lorsque nous installons notre système pour votre entreprise.",
  simTitle: "Simulation : Nouveau Tunnel de Capture",
  traffic: "Trafic Mensuel",
  conv: "Taux de Conversion du Tunnel",
  leads: "Leads Qualifiés",
  close: "Taux de Conclusion des Ventes",
  jobs: "Nouveaux Contrats Obtenus",
  val: "Valeur Moyenne du Contrat",
  newRev: "Nouveaux Revenus Mensuels",
  context1: "En remplaçant un site web standard par une page de capture à haute conversion, et en attirant un trafic à forte intention via Google Ads et le SEO, nous augmentons instantanément le ",
  context1_bold: "Taux de Conversion",
  context2: "Ensuite, grâce à l'automatisation IA pour des suivis instantanés de chaque prospect, nous nous assurons que votre équipe de vente maximise le ",
  context2_bold: "Taux de Conclusion",
  secretTitle: "Le Secret :",
  secretDesc: "Vous n'avez pas besoin d'un budget publicitaire colossal. Vous avez juste besoin d'un système qui convertit à 8%+ au lieu de la moyenne de 2% de l'industrie."
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));
