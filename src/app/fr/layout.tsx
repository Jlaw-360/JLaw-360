import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JLAW 360 Marketing | Votre Partenaire en SEO & Génération de Leads",
    description:
        "Cessez de perdre des prospects. JLAW 360 déploie des systèmes automatisés, du référencement SEO bilingue et des entonnoirs de vente performants.",
    keywords: [
        "agence SEO Montréal",
        "génération de leads",
        "automatisation IA Québec",
        "stratégie marketing numérique",
        "entonnoirs de vente",
    ],
};

export default function FrenchLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
