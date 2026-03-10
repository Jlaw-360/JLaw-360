const fs = require('fs');

const enFile = 'C:/Users/Walke/OneDrive/Desktop/Jlaw 360 marketing website -- antygrfity/jlaw-website/src/i18n/dictionaries/en.json';
const frFile = 'C:/Users/Walke/OneDrive/Desktop/Jlaw 360 marketing website -- antygrfity/jlaw-website/src/i18n/dictionaries/fr.json';

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

// Updates for navigation
en.navigation.realityCheck = "Reality Check";
fr.navigation.realityCheck = "Diagnostic";

en.homePage = {
  hero: {
    badge: "Interactive Growth Platform for Service Businesses",
    h1_1: "Turn Your Service Business",
    h1_2: "Into a Lead Machine",
    sub: "See How Much Revenue Your Business Is Losing Without a Proper Lead Generation System. Stop guessing and start dominating your local market.",
    btn_calc: "Calculate Lost Revenue",
    btn_strategy: "Generate Growth Strategy"
  },
  industries: {
    badge: "Specialized Solutions",
    title_1: "Engineered For",
    title_2: "Elite Niches",
    items: [
      { title: "Roofing Companies", desc: "Storm chasing & organic local SEO dominance."},
      { title: "HVAC Companies", desc: "Emergency calls & automated dispatch routing."},
      { title: "Dental Clinics", desc: "High-ticket implants & Invisalign patient funnels."},
      { title: "Landscaping", desc: "Commercial contracts & luxury residential builds."}
    ]
  },
  pain_points: {
    title_1: "Why Your Competitors Are",
    title_2: "Stealing Your Jobs",
    sub: "Most service businesses rely on word-of-mouth or outdated directory sites. Here is exactly where your lead funnel is leaking money right now.",
    items: [
      { title: "No Conversion Optimized Website", desc: "Your site looks like a brochure instead of a 24/7 sales rep." },
      { title: "Zero Keyword Dominance", desc: "You aren't ranking for 'Emergency [Service] Near Me' when people need you most." },
      { title: "Slow Lead Response Time", desc: "If you don't call a web lead within 5 minutes, close rates drop by 80%. You have no automation." },
      { title: "Relying on Shared Lead Providers", desc: "Paying Angi/HomeAdvisor for a lead that gets sold to 5 other competitors." }
    ],
    solution_title: "We Fix The Leaks.",
    solution_items: [
      "Custom Landing Page Funnels",
      "Instant AI SMS & Email Follow-Ups",
      "Exclusive High-Intent Leads"
    ]
  },
  footer_cta: {
    title_1: "Ready to Dominate",
    title_2: "Your Local Market?",
    sub: "Stop competing on price. Partner with a strategic growth agency that builds predictable lead generation systems.",
    btn: "Book Your Free Strategy Call"
  }
};

fr.homePage = {
  hero: {
    badge: "Plateforme d'Acquisition Interactive pour Services",
    h1_1: "Transformez Votre Entreprise",
    h1_2: "En Machine à Leads",
    sub: "Découvrez combien de revenus votre entreprise perd sans un système d'acquisition adéquat. Arrêtez de deviner et commencez à dominer votre marché local.",
    btn_calc: "Calculer les Revenus Perdus",
    btn_strategy: "Générer une Stratégie"
  },
  industries: {
    badge: "Solutions Spécialisées",
    title_1: "Conçu Pour Les",
    title_2: "Niches d'Élite",
    items: [
      { title: "Entreprises de Toiture", desc: "Chasse aux tempêtes & domination du SEO local." },
      { title: "Plomberie & Chauffage (CVC)", desc: "Appels d'urgence & répartition automatisée." },
      { title: "Cliniques Dentaires", desc: "Implants haute-valeur & tunnels de conversion." },
      { title: "Aménagement Paysager", desc: "Contrats commerciaux & projets résidentiels de luxe." }
    ]
  },
  pain_points: {
    title_1: "Pourquoi Vos Concurrents",
    title_2: "Vous Volent Vos Contrats",
    sub: "La plupart des entreprises de services dépendent du bouche-à-oreille ou des répertoires dépassés. Voici exactement où votre tunnel perd de l'argent.",
    items: [
      { title: "Site Web Sans Optimisation", desc: "Votre site ressemble à une brochure au lieu d'un représentant commercial actif 24/7." },
      { title: "Zéro Domination Locale", desc: "Vous ne vous classez pas pour 'Urgence [Service]' lorsque les clients en ont besoin." },
      { title: "Temps de Réponse Trop Lent", desc: "Si vous n'appelez pas un lead web dans les 5 minutes, les taux de conclusion chutent de 80%. Aucune automatisation." },
      { title: "Achat de Leads Partagés", desc: "Payer des plateformes pour un prospect qui est revendu à 5 concurrents en même temps." }
    ],
    solution_title: "Nous Réparons Les Failles.",
    solution_items: [
      "Pages de Capture Sur Mesure",
      "Suivis IA Instantanés (SMS & Email)",
      "Leads Exclusifs à Haute Intention"
    ]
  },
  footer_cta: {
    title_1: "Prêt à Dominer",
    title_2: "Votre Marché Local ?",
    sub: "Ne rivalisez plus sur les prix. Associez-vous à une agence qui bâtit des systèmes d'acquisition prévisibles.",
    btn: "Réserver Votre Appel Stratégique"
  }
};

en.calculator = {
  badge: "Interactive ROI Calculator",
  title_1: "See How Much Revenue You're",
  title_2: "Losing",
  sub: "Enter your current numbers below to see what happens when you install a proper Lead Generation System.",
  labels: {
    visitors: "Monthly Website Visitors",
    convRate: "Website Conversion Rate",
    closeRate: "Lead Close Rate",
    jobValue: "Average Job Value"
  },
  currentSys: {
    title: "Your Current System",
    leads: "Monthly Leads",
    clients: "New Clients",
    clients_per_mo: " /mo",
    monthlyRev: "Monthly Revenue:"
  },
  jlawSys: {
    badge: "JLAW 360 System",
    title: "With Optimized Funnel",
    leads: "Monthly Leads",
    clients: "New Clients",
    clients_per_mo: " /mo",
    monthlyRev: "Monthly Revenue:"
  },
  reveal: {
    text1: "By fixing your leaky funnel, you could generate an additional",
    text2: "In Missed Revenue Per Year",
    btn: "Fix My Lead Flow"
  }
};

fr.calculator = {
  badge: "Calculateur de ROI Interactif",
  title_1: "Découvrez Combien de Revenus Vous",
  title_2: "Perdez",
  sub: "Entrez vos chiffres actuels ci-dessous pour voir ce qui se passe lorsque vous installez un système d'acquisition optimisé.",
  labels: {
    visitors: "Visiteurs Mensuels du Site Web",
    convRate: "Taux de Conversion (Site Web)",
    closeRate: "Taux de Conclusion des Leads",
    jobValue: "Valeur Moyenne du Contrat"
  },
  currentSys: {
    title: "Votre Système Actuel",
    leads: "Leads Mensuels",
    clients: "Nouveaux Clients",
    clients_per_mo: " /mois",
    monthlyRev: "Revenus Mensuels :"
  },
  jlawSys: {
    badge: "Système JLAW 360",
    title: "Avec Tunnel Optimisé",
    leads: "Leads Mensuels",
    clients: "Nouveaux Clients",
    clients_per_mo: " /mois",
    monthlyRev: "Revenus Mensuels :"
  },
  reveal: {
    text1: "En réparant votre tunnel d'acquisition, vous pourriez générer jusqu'à",
    text2: "De Revenus Perdus Chaque Année",
    btn: "Réparer Mon Flux d'Acquisition"
  }
};

en.generator = {
  landing: {
    title_1: "Stop Guessing.",
    title_2: "Get Your",
    title_3: "Custom Growth Blueprint.",
    sub: "Answer 5 quick questions about your business and we'll instantly generate the exact digital marketing architecture you need to dominate your market.",
    btn: "Generate My Growth Strategy"
  },
  steps: {
    step: "Step",
    of: "of 5",
    back: "Back",
    continue: "Continue",
    analyzing: "Analyzing {industry} Market in {city}...",
    analyzing_sub: "Compiling your Digital Blueprint based on current revenue and goals.",
    start_over: "Start Over"
  },
  q1: {
    title: "What is your primary industry?",
    options: ["Roofing", "HVAC", "Dental", "Landscaping", "Other Home Service"]
  },
  q2: {
    title: "What city are you targeting?",
    placeholder: "e.g. Toronto, ON"
  },
  q3: {
    title: "What's your current monthly revenue?",
    options: ["Under $10k/mo", "$10k - $50k/mo", "$50k - $150k/mo", "$150k+/mo"]
  },
  q4: {
    title: "Where do most of your leads come from today?",
    options: ["Referrals (Word of Mouth)", "Buying Shared Leads (Angi/HomeAdvisor)", "Google Ads", "Organic/SEO", "Social Media"]
  },
  q5: {
    title: "What is your main goal for the next 12 months?",
    options: ["Get more consistent leads", "Increase quality of jobs (high-ticket)", "Automate my sales process", "Scale to the next revenue tier"]
  },
  result: {
    badge: "Ready for Implementation",
    title: "Your Custom Digital Blueprint",
    desc_start: "Based on your goal to ",
    desc_mid: ", here is the exact architecture we recommend for your ",
    desc_end: " business in ",
    proj: "Projected Result",
    s1: {
      title: "1. Conversion-Optimized Funnel",
      desc: "Replace your standard website with a direct-response landing page designed specifically to convert {city} traffic into booked appointments.",
      res: "+120% Conversion Rate"
    },
    s2: {
      title: "2. High-Intent Google Ads",
      desc: "Capture high-intent searches like \\\"{industry} near me in {city}\\\" with aggressive local ad campaigns targeting immediate needs.",
      res: "15 - 30 High-Quality Leads/mo"
    },
    s3: {
      title: "3. Local SEO Dominance",
      desc: "Optimize your Google Business Profile to rank in the \\\"Map Pack\\\" for organic searches, capturing free traffic from competitors.",
      res: "+40% Organic Call Volume"
    },
    s4: {
      title: "4. AI Follow-Up Automation",
      desc: "Implement immediate SMS and email follow-ups for every new lead, ensuring 0 leads fall through the cracks due to slow responses.",
      res: "Double Your Close Rate"
    },
    cta: {
      title: "Want us to build this for you?",
      desc: "Let's get on a 15-minute call to discuss how we can implement this exact architecture into your {industry} business.",
      btn: "Book Strategy Call"
    }
  }
};

fr.generator = {
  landing: {
    title_1: "Ne Devinez Plus.",
    title_2: "Obtenez Votre",
    title_3: "Plan de Croissance Sur Mesure.",
    sub: "Répondez à 5 questions rapides sur votre entreprise et nous générerons instantanément l'architecture marketing digitale exacte pour dominer votre marché.",
    btn: "Générer Ma Stratégie"
  },
  steps: {
    step: "Étape",
    of: "sur 5",
    back: "Retour",
    continue: "Continuer",
    analyzing: "Analyse du marché {industry} à {city}...",
    analyzing_sub: "Compilation de votre plan digital en cours selon vos revenus et objectifs.",
    start_over: "Recommencer"
  },
  q1: {
    title: "Quel est votre secteur principal ?",
    options: ["Toiture", "CVC & Plomberie", "Dentaire", "Aménagement Paysager", "Autre Service"]
  },
  q2: {
    title: "Quelle ville ciblez-vous ?",
    placeholder: "ex: Montréal, QC"
  },
  q3: {
    title: "Quel est votre revenu mensuel actuel ?",
    options: ["Moins de 10k$/mois", "10k$ - 50k$/mois", "50k$ - 150k$/mois", "150k$+/mois"]
  },
  q4: {
    title: "D'où proviennent la plupart de vos leads aujourd'hui ?",
    options: ["Références (Bouche-à-oreille)", "Achats de Leads Partagés", "Publicités Google", "Organique / SEO Local", "Réseaux Sociaux"]
  },
  q5: {
    title: "Quel est votre objectif principal pour les 12 prochains mois ?",
    options: ["Obtenir des prospects plus constants", "Améliorer la qualité des contrats", "Automatiser mon processus de vente", "Franchir le prochain palier de revenus"]
  },
  result: {
    badge: "Prêt pour l'Implémentation",
    title: "Votre Plan Digital Sur Mesure",
    desc_start: "Basé sur votre objectif de ",
    desc_mid: ", voici l'architecture exacte recommandée pour votre entreprise de ",
    desc_end: " à ",
    proj: "Résultat Projeté",
    s1: {
      title: "1. Tunnel Optimisé pour la Conversion",
      desc: "Remplacez votre site web classique par une page de capture à réponse directe conçue spécifiquement pour convertir le trafic de {city} en rendez-vous.",
      res: "+120% de Taux de Conversion"
    },
    s2: {
      title: "2. Google Ads Ultra-Ciblées",
      desc: "Capturez les recherches locales telles que \\\"{industry} près de chez moi à {city}\\\" avec des campagnes ciblant les besoins urgents.",
      res: "15 - 30 Leads Exclusifs/mois"
    },
    s3: {
      title: "3. Domination SEO Local",
      desc: "Optimisez votre profil Google My Business pour vous classer dans le \\\"Pack Local\\\" lors des recherches organiques.",
      res: "+40% d'Appels Organiques"
    },
    s4: {
      title: "4. Automatisation des Suivis",
      desc: "Déployez un suivi SMS et courriel instantané pour chaque nouveau prospect, vous assurant de ne perdre aucune vente par manque de rapidité.",
      res: "Taux de Conclusion Doublé"
    },
    cta: {
      title: "Voulez-vous que nous construisions cela pour vous ?",
      desc: "Planifions un appel de 15 minutes pour discuter de l'intégration de cette architecture à votre entreprise.",
      btn: "Réserver l'Appel Stratégique"
    }
  }
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));
