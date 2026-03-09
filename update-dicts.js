const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'src', 'i18n', 'dictionaries', 'en.json');
const frPath = path.join(__dirname, 'src', 'i18n', 'dictionaries', 'fr.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

en.about = {
  badge: "Operation JLAW 360",
  title_1: "The Next Generation",
  title_highlight: "Growth Agency",
  description_1: "Founded by Walkens, JLAW 360 was born out of frustration: too many agencies promise traffic, but none guarantee revenue. We are not ordinary web developers. We are conversion engineers.",
  description_2: "We combine cutting-edge technical development (Next.js, React), artificial intelligence algorithms, and bilingual SEO expertise (EN/FR) to dominate local markets in Montreal and beyond.",
  cta_primary: "Discover the Architecture",
  cta_secondary: "Speak to the Founder",
  years_exp_1: "Years of Strategic",
  years_exp_2: "Expertise",
  difference_title: "The JLAW 360",
  difference_highlight: "Difference",
  difference_desc: "Why our clients leave their old agencies for our technological infrastructures.",
  pillars: [
    { title: "Data Transparency", description: "No more reports about 'likes' and 'views'. We measure the ROAS (Return on Ad Spend) and the acquisition cost of each client." },
    { title: "Proprietary Technology", description: "We build systems on React & Next.js, offering load speeds that destroy the competition and convert better." },
    { title: "Bilingual Domination", description: "Our mastery of local SEO for French and English markets offers you maximum reach in Quebec and beyond." }
  ]
};

fr.about = {
  badge: "Opération JLAW 360",
  title_1: "L'Agence de Croissance",
  title_highlight: "Nouvelle Génération",
  description_1: "Fondée par Walkens, JLAW 360 est née d'une frustration : trop d'agences promettent du trafic, aucune ne garantit des revenus. Nous ne sommes pas des créateurs de sites web ordinaires. Nous sommes des ingénieurs en conversion.",
  description_2: "Nous combinons le développement technique de pointe (Next.js, React), des algorithmes d'intelligence artificielle, et une expertise SEO bilingue (EN/FR) pour dominer les marchés locaux de Montréal et d'ailleurs.",
  cta_primary: "Découvrir l'Architecture",
  cta_secondary: "Parler au Fondateur",
  years_exp_1: "Années d'Expertise",
  years_exp_2: "Stratégique",
  difference_title: "La Différence",
  difference_highlight: "JLAW 360",
  difference_desc: "Pourquoi nos clients quittent leurs anciennes agences pour nos infrastructures technologiques.",
  pillars: [
    { title: "Transparence Data", description: "Fini les rapports de 'j'aime' et de 'vues'. Nous mesurons le ROAS (Retour sur Investissement Publicitaire) et le coût d'acquisition de chaque client." },
    { title: "Technologie Propriétaire", description: "Nous construisons des systèmes sur React & Next.js, offrant des vitesses de chargement qui détruisent la compétition et convertissent mieux." },
    { title: "Domination Bilingue", description: "Notre maîtrise du SEO local pour les marchés francophones et anglophones vous offre une portée maximale au Québec et au-delà." }
  ]
};

en.services = {
  badge: "Technological Solutions",
  title_1: "Services &",
  title_highlight: "Expertise",
  subtitle: "We don't just sell services. We build predictable client acquisition infrastructures to dominate your market.",
  services_list: [
    { title: "Automated Lead Generation", description: "We deploy acquisition funnels that filter, qualify, and convert your visitors into hot prospects in a fully automated way.", features: ["High-End Landing Pages", "Irresistible Lead Magnets", "Real-Time CRM & Tracking"] },
    { title: "Meta & Google Ads", description: "Algorithmic optimization of your ad budget to target clients ready to buy in your geographic area with laser precision.", features: ["Hyper-Local Targeting (Montreal & Surrounding)", "Dynamic Retargeting", "Live ROAS Tracking"] },
    { title: "Futuristic SEO & Local Presence", description: "Dominate Google searches in your niche. We structure your site and Google My Business profile to be #1 in your region.", features: ["Complete Technical Audit", "Optimized Bilingualism (FR/EN)", "Automated Ranking"] },
    { title: "CRM Ecosystem & AI Chatbots", description: "Stop losing sales. We integrate AI agents that answer 24/7 and qualify your leads directly into your calendar.", features: ["Conversational Chatbots", "SMS/Email Workflows", "GoHighLevel Integration"] }
  ],
  cta_title: "Ready to dominate your market?",
  cta_subtitle: "Book a complete audit of your current ecosystem (Value: $500 - Offered).",
  cta_btn: "Request My Audit"
};

fr.services = {
  badge: "Solutions Technologiques",
  title_1: "Services &",
  title_highlight: "Expertise",
  subtitle: "Nous ne vendons pas de simples services. Nous construisons des infrastructures d'acquisition de clients prévisibles pour dominer votre marché.",
  services_list: [
    { title: "Génération de Leads Automatisée", description: "Nous déployons des tunnels d'acquisition qui filtrent, qualifient et convertissent vos visiteurs en prospects chauds d'une manière entièrement automatisée.", features: ["Landing Pages Haut-De-Gamme", "Lead Magnets Irrésistibles", "CRM & Suivi en Temps Réel"] },
    { title: "Publicité Meta & Google Ads", description: "Optimisation algorithmique de votre budget publicitaire pour cibler avec une précision laser les clients prêts à acheter dans votre zone géographique.", features: ["Ciblage Hyper-Local (Montréal & Environs)", "Retargeting Dynamique", "Suivi du ROAS en Direct"] },
    { title: "SEO Futuriste & Présence Locale", description: "Dominez les recherches Google dans votre niche. Nous structurons votre site et votre fiche Google My Business pour être le #1 de votre région.", features: ["Audit Technique Complet", "Bilinguisme Optimisé (FR/EN)", "Référencement Automatisé"] },
    { title: "Écosystème CRM & AI Chatbots", description: "Arrêtez de perdre des ventes. Nous intégrons des agents IA qui répondent 24/7 et qualifient vos leads directement dans votre calendrier.", features: ["Chatbots Conversationnels", "Workflows SMS/Email", "Intégration GoHighLevel"] }
  ],
  cta_title: "Prêt à dominer votre marché ?",
  cta_subtitle: "Réservez un audit complet de votre écosystème actuel (Valeur: 500$ - Offert).",
  cta_btn: "Demander Mon Audit"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2));
console.log('Dictionaries updated successfully!');
