import type { Lang } from '@/i18n';

export type Service = {
  id: string;
  name: string;
  who: string;
  problem: string;
  what: string[];
  deliver: string[];
  kpis: string[];
  formats: string;
  image: string;
  imageAlt: string;
  credit?: string;
  diagram: 'loop' | 'budget' | 'funnel';
  box: { h: string; p: string };
};

export const services: Record<Lang, Service[]> = {
  de: [
    {
      id: 'ki',
      name: 'KI-Beratung & Einführung',
      who: 'Geschäftsführer, Inhaber und Teams in Unternehmen ohne eigene IT-Abteilung, die KI im Alltag nutzen wollen – in Marketing, Vertrieb, Verwaltung, Kundenservice.',
      problem: 'Alle reden davon, ein paar Leute probieren ChatGPT, niemand hat einen Plan. Lizenzen werden gekauft und nicht genutzt. Die Angst vor Datenschutz blockiert, die Angst, den Anschluss zu verlieren, auch.',
      what: [
        'KI-Audit: Ich schaue mir eure Abläufe an und finde die fünf Stellen, an denen KI wirklich Zeit spart – nicht die fünfzig, die theoretisch gehen.',
        'Workshops mit dem Team: Hands-on, mit euren echten Aufgaben, nicht mit Beispielen aus dem Internet. Nach einem Tag kann jeder im Raum etwas, das er vorher nicht konnte.',
        'Einrichtung: Welche Tools, welche Zugänge, welche Regeln (Datenschutz, Freigaben, Qualitätskontrolle). Prompts und Vorlagen, die zu eurer Arbeit passen.',
        'Begleitung: Ich bleibe dran, bis es im Alltag läuft. Monatlicher Check: Was funktioniert, was nicht, was kommt Neues.',
      ],
      deliver: ['Audit-Bericht mit Prioritäten und Aufwand', 'Workshop-Tag(e) mit eurem Team', 'Tool-Setup, Richtlinien, Vorlagen', 'Monatliche Begleitung nach Bedarf'],
      kpis: ['Gesparte Stunden pro Woche und Person', 'Durchlaufzeit von Angeboten, Texten, Reports', 'Anteil des Teams, der die Tools wöchentlich nutzt'],
      formats: 'Audit (2–3 Tage), Workshop-Tag, laufende Begleitung.',
      image: '/images/svc-ki.webp', imageAlt: 'Chris Helmbrecht erklärt einen Case vor Publikum', credit: 'BI Norwegian Business School', diagram: 'loop',
      box: { h: 'Und der Datenschutz?', p: 'Die häufigste Frage – und der häufigste Grund, warum nichts passiert. Die Antwort ist kein Nein, sondern ein Regelwerk: Welche Daten dürfen in welches Tool, welche nie. Modelle mit EU-Servern und Verträgen zur Auftragsverarbeitung, wo Kundendaten im Spiel sind. Kein Training auf euren Daten. Freigaben, bevor etwas rausgeht. Das richte ich mit euch ein, bevor das erste Team-Mitglied einen Prompt schreibt – damit der Geschäftsführer nachts schläft und das Team trotzdem arbeiten kann.' },
    },
    {
      id: 'marketing',
      name: 'Marketing-Management',
      who: 'Unternehmen, Verbände und Marken, die einen erfahrenen Marketingkopf brauchen, aber keine Festanstellung wollen oder können.',
      problem: 'Die Agentur liefert hübsche Konzepte und wenig Umsetzung. Der interne Mitarbeiter ist gut, aber allein und hat keinen Sparringspartner. Social Media läuft nebenbei. Niemand weiß, was von alledem eigentlich wirkt.',
      what: [
        'Strategie: Wo stehen wir, wen wollen wir erreichen, was sagen wir, auf welchen Kanälen – auf zwei Seiten, nicht auf sechzig Folien.',
        'Markenführung: Positionierung, Tonalität, Erscheinungsbild. Bei Bedarf Rebranding mit Spezialisten aus meinem Netzwerk.',
        'Content und Social Media: Redaktionsplan, Produktion, Community. Ich kenne die Plattformen von innen und weiß, was dieses Jahr funktioniert.',
        'Website und digitale Präsenz: Konzept, Umsetzung, Barrierefreiheit, SEO und GEO (Sichtbarkeit in KI-Suchen).',
        'Steuerung: Budget, Dienstleister, Reporting. Ein Ansprechpartner für alles.',
      ],
      deliver: ['Marketingstrategie und Jahresplan', 'Laufender Betrieb von Content, Social, Website', 'Monatlicher Report in Klartext'],
      kpis: ['Reichweite und Engagement je Kanal', 'Anfragen, Buchungen, Bewerbungen', 'Kosten pro Kontakt'],
      formats: 'Interim (Vollzeit für einige Monate), fester Tag pro Woche, auf Abruf.',
      image: '/images/svc-marketing.webp', imageAlt: 'Arbeitsrunde am Tisch', credit: 'BI Norwegian Business School', diagram: 'budget',
      box: { h: 'Was es kostet – und wie wir das Meiste rausholen', p: 'Ich arbeite nach Tagessatz oder mit festem Monatsbudget, ohne Agentur-Overhead: kein Account-Manager, kein Junior, der lernt, keine 15 % Handling auf Fremdkosten. Das Marketingbudget selbst wird nach einem einfachen Prinzip verteilt: Erst klein testen, dann messen, dann dorthin umschichten, wo die Zahlen am besten sind. Jeden Monat. Was nicht liefert, wird gestoppt – auch wenn es meine Idee war. So holt ein mittleres Budget mehr raus als ein großes, das einmal im Jahr geplant wird.' },
    },
    {
      id: 'paid',
      name: 'Paid Social & Content-Produktion',
      who: 'Marken und Unternehmen, die mit Anzeigen auf Meta, TikTok, LinkedIn oder YouTube Kunden gewinnen wollen – und bisher vor allem Reichweite gekauft haben.',
      problem: 'Die Kampagne läuft, der Klickpreis ist okay, das Geschäft bleibt aus. Meistens liegt es nicht an der Zielgruppe, sondern am Content: Die Anzeige sieht aus wie Werbung, die Landingpage passt nicht, das Angebot ist unklar.',
      what: [
        'Kampagnenplanung: Ziel, Zielgruppe, Angebot, Budgetstruktur, Testplan. Was wir lernen wollen, bevor wir skalieren.',
        'Content-Produktion: Video, Foto, Text, Landingpages – in den Formaten, die auf der jeweiligen Plattform funktionieren. Mit KI, wo es schneller und günstiger geht, mit echten Leuten, wo es echt aussehen muss.',
        'Betrieb: Einrichtung, Tracking, laufende Optimierung, wöchentliche Tests neuer Creatives.',
        'Reporting: Was hat was gekostet, was hat was gebracht, was machen wir nächste Woche anders.',
      ],
      deliver: ['Kampagnenkonzept mit Budgetplan', 'Creatives und Landingpages', 'Laufende Betreuung und Wochenreport'],
      kpis: ['Kosten pro Lead, Anfrage oder Kauf', 'Return on Ad Spend', 'Conversion-Rate der Landingpage'],
      formats: 'Projekt (Kampagne mit Start und Ende) oder laufende Betreuung mit Monatsbudget.',
      image: '/images/svc-paid.webp', imageAlt: 'Instagram-Profil des BLSV Sportcamps auf dem Handy', diagram: 'funnel',
      box: { h: 'Hochglanz war gestern', p: 'Für einen TV-Spot braucht es noch das perfekte Licht und das Model. Auf Social Media, in Ads und auf Websites gewinnt heute das Echte: der Mitarbeiter statt des Schauspielers, das Handyvideo vom Set statt der Studioproduktion, der kleine Fehler, der zeigt, dass es wirklich passiert ist. Nutzer erkennen Werbung in einer halben Sekunde und scrollen weiter – Authentizität hält sie. Das heißt nicht schlampig, sondern bewusst: schnell produziert, ehrlich erzählt, in der Sprache der Plattform.' },
    },
  ],
  en: [
    {
      id: 'ai',
      name: 'AI consulting & rollout',
      who: 'Founders, CEOs and teams in companies without their own IT department who want to use AI day to day – in marketing, sales, administration, customer service.',
      problem: 'Everyone is talking about it, a few people try ChatGPT, nobody has a plan. Licences get bought and not used. Fear of data protection blocks things; so does the fear of falling behind.',
      what: [
        'AI audit: I look at your workflows and find the five places where AI actually saves time – not the fifty that theoretically work.',
        'Workshops with the team: hands-on, with your real tasks, not with examples from the internet. After one day everyone in the room can do something they couldn’t before.',
        'Setup: which tools, which access, which rules (data protection, approvals, quality control). Prompts and templates that fit your work.',
        'Follow-through: I stay on it until it runs day to day. Monthly check: what works, what doesn’t, what’s new.',
      ],
      deliver: ['Audit report with priorities and effort', 'Workshop day(s) with your team', 'Tool setup, guidelines, templates', 'Monthly follow-up as needed'],
      kpis: ['Hours saved per week and person', 'Turnaround time for proposals, copy, reports', 'Share of the team using the tools weekly'],
      formats: 'Audit (2–3 days), workshop day, ongoing support.',
      image: '/images/svc-ki.webp', imageAlt: 'Chris Helmbrecht explaining a case to an audience', credit: 'BI Norwegian Business School', diagram: 'loop',
      box: { h: 'And data protection?', p: 'The most common question – and the most common reason nothing happens. The answer isn’t “no”, it’s a set of rules: which data may go into which tool, which never. Models with EU servers and data processing agreements where customer data is involved. No training on your data. Approvals before anything goes out. I set this up with you before the first team member writes a prompt – so the CEO sleeps at night and the team can still work.' },
    },
    {
      id: 'marketing',
      name: 'Marketing management',
      who: 'Companies, associations and brands that need an experienced marketing lead but don’t want or can’t afford a full-time hire.',
      problem: 'The agency delivers pretty concepts and little execution. The in-house person is good but alone, with no sparring partner. Social media happens on the side. Nobody knows what any of it actually does.',
      what: [
        'Strategy: where we stand, who we want to reach, what we say, on which channels – on two pages, not sixty slides.',
        'Brand: positioning, tone, visual identity. Rebranding with specialists from my network where needed.',
        'Content and social media: editorial plan, production, community. I know the platforms from the inside and what works this year.',
        'Website and digital presence: concept, build, accessibility, SEO and GEO (visibility in AI search).',
        'Steering: budget, suppliers, reporting. One point of contact for everything.',
      ],
      deliver: ['Marketing strategy and annual plan', 'Ongoing operation of content, social, website', 'Monthly report in plain language'],
      kpis: ['Reach and engagement per channel', 'Enquiries, bookings, applications', 'Cost per contact'],
      formats: 'Interim (full time for a few months), one fixed day a week, on call.',
      image: '/images/svc-marketing.webp', imageAlt: 'Working session at a table', credit: 'BI Norwegian Business School', diagram: 'budget',
      box: { h: 'What it costs – and how we get the most out of it', p: 'I work on a day rate or a fixed monthly budget, without agency overhead: no account manager, no junior learning on your time, no 15% handling on third-party costs. The marketing budget itself is allocated by a simple principle: test small first, then measure, then shift to where the numbers are best. Every month. What doesn’t deliver gets stopped – even if it was my idea. That’s how a medium budget gets more out than a big one planned once a year.' },
    },
    {
      id: 'paid',
      name: 'Paid social & content production',
      who: 'Brands and companies that want to win customers with ads on Meta, TikTok, LinkedIn or YouTube – and have mostly bought reach so far.',
      problem: 'The campaign runs, the click price is fine, the business doesn’t come. Usually it’s not the audience, it’s the content: the ad looks like an ad, the landing page doesn’t match, the offer is unclear.',
      what: [
        'Campaign planning: goal, audience, offer, budget structure, test plan. What we want to learn before we scale.',
        'Content production: video, photo, copy, landing pages – in the formats that work on each platform. With AI where it’s faster and cheaper, with real people where it has to look real.',
        'Operation: setup, tracking, ongoing optimisation, weekly tests of new creatives.',
        'Reporting: what cost what, what brought what, what we do differently next week.',
      ],
      deliver: ['Campaign concept with budget plan', 'Creatives and landing pages', 'Ongoing management and weekly report'],
      kpis: ['Cost per lead, enquiry or purchase', 'Return on ad spend', 'Landing page conversion rate'],
      formats: 'Project (campaign with a start and an end) or ongoing management with a monthly budget.',
      image: '/images/svc-paid.webp', imageAlt: 'Instagram profile of the BLSV sports camp on a phone', diagram: 'funnel',
      box: { h: 'Glossy is over', p: 'A TV spot still needs perfect light and a model. On social media, in ads and on websites, the real thing wins today: the employee instead of the actor, the phone video from the set instead of the studio production, the small mistake that shows it actually happened. Users spot advertising in half a second and scroll on – authenticity holds them. That doesn’t mean sloppy, it means deliberate: produced fast, told honestly, in the language of the platform.' },
    },
  ],
};
