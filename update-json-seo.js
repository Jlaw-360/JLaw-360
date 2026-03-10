const fs = require('fs');

const enFile = 'C:/Users/Walke/OneDrive/Desktop/Jlaw 360 marketing website -- antygrfity/jlaw-website/src/i18n/dictionaries/en.json';
const frFile = 'C:/Users/Walke/OneDrive/Desktop/Jlaw 360 marketing website -- antygrfity/jlaw-website/src/i18n/dictionaries/fr.json';

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.seo = {
  home_title: "JLAW 360 Marketing | Top SEO & Lead Generation Agency",
  home_desc: "Stop losing leads to an invisible online presence. JLAW 360 builds the bridge between your product and your profit with high-converting funnels, SEO, and AI automation.",
  keywords: ["SEO agency Montreal", "lead generation services", "sales funnels", "AI automation for business", "bilingual SEO", "digital marketing strategy"]
};

fr.seo = {
  home_title: "JLAW 360 Marketing | Agence de Génération de Leads & SEO",
  home_desc: "Cessez de perdre des prospects. JLAW 360 construit le pont entre votre produit et vos profits avec des tunnels de vente, du SEO bilingue et l'automatisation IA.",
  keywords: ["Agence SEO Montréal", "génération de leads", "tunnels de vente", "automatisation IA", "SEO bilingue", "stratégie marketing digital"]
};

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));
