import type { Lang } from '@/i18n';

/* Alle Texte der Startseite, beide Sprachen. Kein Lorem – echte erste Fassung, bitte gegenlesen. */

type Problem = { statement: string; answer: string; href: string; cta: string };
type Step = { name: string; what: string; out: string };
type Service = { name: string; who: string; what: string; href: string };

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: { kicker: string; question: string; problems: Problem[] };
  intro: { h: string; p: string[] };
  method: { h: string; lede: string; steps: Step[]; href: string; more: string };
  services: { h: string; lede: string; items: Service[] };
  network: { h: string; p: string[] };
  proof: { h: string; lede: string; clients: string[] };
  cta: { h: string; p: string; button: string };
};

export const home: Record<Lang, HomeCopy> = {
  de: {
    meta: {
      title: 'Die Neue',
      description:
        'Chris Helmbrecht – Marketing, KI-Beratung und ein Netzwerk, das liefert. Vom Problem zur messbaren Lösung. München, international.',
    },
    hero: {
      kicker: 'Die Neue · Chris Helmbrecht',
      question: 'Welches davon ist deins?',
      problems: [
        {
          statement: 'Alle reden von KI. In deiner Firma nutzt sie noch keiner richtig.',
          answer:
            'Ich zeige dir und deinem Team, wo KI in Marketing, Vertrieb und Verwaltung wirklich Zeit spart – und baue es mit euch ein, bis es läuft. Ohne Buzzwords, ohne dass du IT-ler werden musst.',
          href: '/leistungen#ki',
          cta: 'KI-Beratung',
        },
        {
          statement: 'Du brauchst jemanden, der Marketing macht. Nicht jemanden, der Meetings darüber hält.',
          answer:
            'Marketing-Management auf Zeit: Strategie, Content, Social, Kampagnen. Ich kenne die Plattformen von innen und weiß, was gerade funktioniert – und was nur so aussieht.',
          href: '/leistungen#marketing',
          cta: 'Marketing-Management',
        },
        {
          statement: 'Deine Ads laufen. Nur das Geschäft nicht.',
          answer:
            'Paid Social funktioniert nur mit dem richtigen Content, der richtigen Zielgruppe und einem Budget, das nicht verpufft. Ich plane alle drei zusammen – und produziere, was fehlt.',
          href: '/leistungen#paid',
          cta: 'Paid Social & Content',
        },
      ],
    },
    intro: {
      h: 'Seit 1995 online. Seit 1997 davon leben.',
      p: [
        'Webdesigner, CTO bei Euro RSCG in New York, eigene Agenturen in New York und Moskau, TV-Produktion, Marketingleitung für Marken in Deutschland, Norwegen und den USA. Dazwischen Red Bull, Volkswagen, Volvo, New Balance und ein paar Start-ups.',
        'Heute arbeite ich mit Verbänden, Mittelständlern, Start-ups und Marken, die ein konkretes Problem haben und keine Lust auf Agentur-Theater. Ich komme rein, analysiere, schlage eine Lösung vor und setze sie um – mit KI, wo sie hilft, und mit Leuten aus meinem Netzwerk, wo sie besser sind als ich.',
      ],
    },
    method: {
      h: 'So arbeite ich',
      lede: 'Nicht Tools zuerst, nicht Kanäle zuerst. Zuerst dein Problem. Dann der kürzeste Weg zu einer Lösung, die man messen kann.',
      steps: [
        { name: 'Analyse', what: 'Was ist das eigentliche Problem – und was ist nur Symptom? Zahlen, Gespräche, ehrlicher Blick auf das, was bisher gemacht wurde.', out: 'Eine klare Diagnose auf zwei Seiten.' },
        { name: 'Lösung', what: 'Ein Vorschlag, der zu deiner Firma passt, nicht zu meinem Portfolio. Mit Prioritäten, Aufwand und dem, was wir bewusst weglassen.', out: 'Ein Plan, dem du zustimmen kannst.' },
        { name: 'Umsetzung', what: 'KI, wo sie Zeit und Geld spart. Echte Spezialisten aus meinem Netzwerk, wo Erfahrung zählt. Ich koordiniere, du hast einen Ansprechpartner.', out: 'Fertige Dinge, keine Konzepte.' },
        { name: 'Messen & nachsteuern', what: 'Vorher festgelegte KPIs, regelmäßige Reports in Klartext. Was funktioniert, wird ausgebaut, der Rest fliegt raus.', out: 'Zahlen, die du verstehst.' },
      ],
      href: '/methode',
      more: 'Die Methode im Detail',
    },
    services: {
      h: 'Leistungen',
      lede: 'Drei Dinge, die ich richtig gut kann. Alles andere holt mein Netzwerk.',
      items: [
        { name: 'KI-Beratung & Einführung', who: 'Für Geschäftsführer und Teams, die KI nutzen wollen, statt nur davon zu lesen.', what: 'Audit der Abläufe, Workshops mit deinem Team, Einrichtung der Tools, Regeln für Datenschutz und Qualität. Bis es im Alltag läuft.', href: '/leistungen#ki' },
        { name: 'Marketing-Management', who: 'Für Unternehmen, die einen erfahrenen Marketingkopf brauchen – ohne Festanstellung.', what: 'Strategie, Markenführung, Content, Social Media, Website. Interim, auf Abruf oder als fester Tag pro Woche.', href: '/leistungen#marketing' },
        { name: 'Paid Social & Content-Produktion', who: 'Für Marken, deren Anzeigen Reichweite bringen, aber keine Kunden.', what: 'Kampagnenplanung, Budgetstruktur, Creatives, Video, Landingpages. Meta, TikTok, LinkedIn, YouTube.', href: '/leistungen#paid' },
      ],
    },
    network: {
      h: 'KI und Menschen mit Jahrzehnten Erfahrung',
      p: [
        'Ich arbeite täglich mit Claude, ChatGPT, Gemini, Perplexity, Firefly, Runway und einer Reihe weiterer Werkzeuge. Nicht, weil es modern ist, sondern weil es Recherche, Produktion und Reporting schneller und billiger macht.',
        'Und ich arbeite mit Leuten, die ihr Handwerk seit zwanzig, dreißig Jahren machen: Art Directors, Filmer, Entwickler, Texter, Media-Planer – in Deutschland und international. Du bekommst das Passende, nicht das, was gerade im Büro sitzt.',
      ],
    },
    proof: {
      h: 'Kunden',
      lede: 'Sportverband, Mittelstand, Start-up, Marke. In Deutschland, Norwegen, den USA und früher in Russland.',
      clients: ['BLSV Sportcamps', 'VGAN Chocolate', 'Sportschule Oberhaching', 'Deutsche Schule Moskau', 'Red Bull', 'Volkswagen', 'Volvo', 'New Balance', 'Leopolis Hotel'],
    },
    cta: {
      h: 'Was kann ich für deine Firma tun?',
      p: 'Eine Mail oder ein Anruf reicht. Innerhalb von 24 Stunden sage ich dir, ob und wie ich helfen kann.',
      button: 'Schreib mir',
    },
  },

  en: {
    meta: {
      title: 'Die Neue',
      description:
        'Chris Helmbrecht – marketing, AI consulting and a network that delivers. From the problem to a measurable solution. Munich, working internationally.',
    },
    hero: {
      kicker: 'Die Neue · Chris Helmbrecht',
      question: 'Which one is yours?',
      problems: [
        {
          statement: 'Everyone talks about AI. Nobody in your company really uses it yet.',
          answer:
            'I show you and your team where AI actually saves time in marketing, sales and operations – and build it in with you until it runs. No buzzwords, and you don’t have to become an IT person.',
          href: '/services#ai',
          cta: 'AI consulting',
        },
        {
          statement: 'You need someone who does marketing. Not someone who holds meetings about it.',
          answer:
            'Marketing management on demand: strategy, content, social, campaigns. I know the platforms from the inside and what works right now – and what only looks like it does.',
          href: '/services#marketing',
          cta: 'Marketing management',
        },
        {
          statement: 'Your ads are running. Your business isn’t.',
          answer:
            'Paid social only works with the right content, the right audience and a budget that doesn’t evaporate. I plan all three together – and produce what’s missing.',
          href: '/services#paid',
          cta: 'Paid social & content',
        },
      ],
    },
    intro: {
      h: 'Online since 1995. Making a living from it since 1997.',
      p: [
        'Web designer, CTO at Euro RSCG in New York, my own agencies in New York and Moscow, TV production, head of marketing for brands in Germany, Norway and the US. Along the way: Red Bull, Volkswagen, Volvo, New Balance and a few start-ups.',
        'Today I work with associations, mid-sized companies, start-ups and brands that have a concrete problem and no appetite for agency theatre. I come in, analyse, propose a solution and build it – with AI where it helps, and with people from my network where they are better than me.',
      ],
    },
    method: {
      h: 'How I work',
      lede: 'Not tools first, not channels first. Your problem first. Then the shortest route to a solution you can measure.',
      steps: [
        { name: 'Analysis', what: 'What is the actual problem – and what is just a symptom? Numbers, conversations, an honest look at what has been done so far.', out: 'A clear diagnosis on two pages.' },
        { name: 'Solution', what: 'A proposal that fits your company, not my portfolio. With priorities, effort and the things we deliberately leave out.', out: 'A plan you can sign off.' },
        { name: 'Execution', what: 'AI where it saves time and money. Real specialists from my network where experience counts. I coordinate, you have one point of contact.', out: 'Finished things, not concepts.' },
        { name: 'Measure & adjust', what: 'KPIs agreed up front, regular reports in plain language. What works gets scaled, the rest gets cut.', out: 'Numbers you understand.' },
      ],
      href: '/method',
      more: 'The method in detail',
    },
    services: {
      h: 'Services',
      lede: 'Three things I do really well. My network covers the rest.',
      items: [
        { name: 'AI consulting & rollout', who: 'For founders, CEOs and teams who want to use AI instead of just reading about it.', what: 'Audit of your workflows, workshops with your team, tool setup, rules for data protection and quality. Until it runs day to day.', href: '/services#ai' },
        { name: 'Marketing management', who: 'For companies that need an experienced marketing lead – without a full-time hire.', what: 'Strategy, brand, content, social media, website. Interim, on call, or one fixed day a week.', href: '/services#marketing' },
        { name: 'Paid social & content production', who: 'For brands whose ads bring reach but no customers.', what: 'Campaign planning, budget structure, creatives, video, landing pages. Meta, TikTok, LinkedIn, YouTube.', href: '/services#paid' },
      ],
    },
    network: {
      h: 'AI, plus people with decades of experience',
      p: [
        'I work with Claude, ChatGPT, Gemini, Perplexity, Firefly, Runway and a range of other tools every day. Not because it is fashionable, but because it makes research, production and reporting faster and cheaper.',
        'And I work with people who have practised their craft for twenty or thirty years: art directors, filmmakers, developers, copywriters, media planners – in Germany and internationally. You get the right fit, not whoever happens to be in the office.',
      ],
    },
    proof: {
      h: 'Clients',
      lede: 'Sports association, mid-sized company, start-up, brand. In Germany, Norway, the US and, earlier, Russia.',
      clients: ['BLSV Sportcamps', 'VGAN Chocolate', 'Sportschule Oberhaching', 'German School Moscow', 'Red Bull', 'Volkswagen', 'Volvo', 'New Balance', 'Leopolis Hotel'],
    },
    cta: {
      h: 'What can I do for your company?',
      p: 'An email or a call is enough. Within 24 hours I’ll tell you whether and how I can help.',
      button: 'Get in touch',
    },
  },
};
