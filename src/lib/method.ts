import type { Lang } from '@/i18n';

export type Phase = {
  name: string;
  claim: string;
  text: string[];
  you: string[];      // was du beiträgst
  out: string[];      // was am Ende steht
  tools: string;      // KI / Netzwerk
};

export type MethodCopy = {
  title: string;
  lede: string;
  why: { h: string; p: string[] };
  phases: Phase[];
  labels: { you: string; out: string; tools: string };
  principles: { h: string; items: { t: string; p: string }[] };
  cta: { h: string; p: string };
};

export const method: Record<Lang, MethodCopy> = {
  de: {
    title: 'Methode',
    lede: 'Vier Schritte, die sich wiederholen. Erst das Problem, dann die Lösung, dann die Umsetzung mit KI und Leuten, die es können – und dann Zahlen, die sagen, ob es funktioniert hat.',
    why: {
      h: 'Warum ein Kreislauf und keine Liste',
      p: [
        'Die meisten Marketingprojekte scheitern nicht an der Idee, sondern daran, dass nach dem Launch niemand mehr hinschaut. Die Kampagne läuft, der Report kommt, keiner liest ihn, nächstes Jahr dasselbe.',
        'Deshalb endet bei mir Schritt vier nicht, sondern führt zurück zu Schritt eins: Was haben die Zahlen gezeigt? Was ist jetzt das Problem? Das klingt banal, ist aber der Unterschied zwischen Marketing, das Geld kostet, und Marketing, das Geld bringt.',
      ],
    },
    labels: { you: 'Was ich von dir brauche', out: 'Was am Ende steht', tools: 'KI und Netzwerk' },
    phases: [
      {
        name: 'Analyse',
        claim: 'Was ist das eigentliche Problem?',
        text: [
          'Ich fange nicht mit Kanälen oder Tools an, sondern mit Fragen. Was soll anders sein in sechs Monaten? Wer entscheidet beim Kunden, und was bringt ihn dazu? Was wurde schon versucht, und warum hat es nicht gereicht?',
          'Dazu: Zahlen, die es schon gibt (Website, Social, CRM, Vertrieb), Gespräche mit den Leuten, die täglich mit Kunden zu tun haben, und ein ehrlicher Blick von außen auf Marke, Auftritt und Wettbewerb.',
        ],
        you: ['Zwei bis drei Stunden Zeit für Gespräche', 'Zugang zu den Zahlen, die es gibt', 'Ehrlichkeit darüber, was bisher nicht funktioniert hat'],
        out: ['Eine Diagnose auf zwei Seiten: Problem, Ursachen, Hebel', 'Eine erste Einschätzung, was realistisch ist'],
        tools: 'KI für Markt- und Wettbewerbsrecherche, Auswertung von Bewertungen und Social-Kommentaren, erste Datenanalyse. Das Gespräch führe ich selbst.',
      },
      {
        name: 'Lösung',
        claim: 'Der kürzeste Weg, nicht der schönste.',
        text: [
          'Ein Vorschlag, der zu deiner Firma passt, nicht zu meinem Portfolio. Mit Prioritäten: Was zuerst, was später, was bewusst nicht. Mit Aufwand und Zeitplan. Und mit den KPIs, an denen wir am Ende messen – vorher festgelegt, nicht hinterher passend gemacht.',
          'Manchmal ist die Lösung ein neuer Markenauftritt. Oft ist sie kleiner: eine bessere Landingpage, ein anderes Angebot, ein Vertriebsprozess, der endlich Leads nachfasst. Ich sage dir auch, wenn Marketing nicht das Problem ist.',
        ],
        you: ['Eine Entscheidung', 'Ein Budgetrahmen', 'Jemanden auf deiner Seite, der Dinge freigibt'],
        out: ['Ein Plan mit Prioritäten, Zeit, Kosten und KPIs', 'Klare Rollen: Wer macht was'],
        tools: 'KI für Varianten, Szenarien, erste Entwürfe. Spezialisten aus dem Netzwerk, wenn es um Branding, Media-Planung oder Technik geht, die über mein Handwerk hinausgeht.',
      },
      {
        name: 'Umsetzung',
        claim: 'Fertige Dinge, keine Konzepte.',
        text: [
          'Ich setze um – selbst oder mit Leuten, die es besser können als ich. Art Directors, Filmer, Entwickler, Texter, Media-Planer, in Deutschland und international. Du hast einen Ansprechpartner, ich koordiniere.',
          'KI, wo sie Zeit und Geld spart: Recherche, Rohentwürfe, Varianten, Übersetzungen, Schnitt-Vorbereitung, Reporting. Menschen, wo es echt aussehen und sich echt anfühlen muss: Konzept, Film, Fotografie, die letzten zwanzig Prozent eines Textes.',
        ],
        you: ['Freigaben, zügig', 'Zugang zu Leuten und Material', 'Vertrauen, dass nicht jede Zeile einen Workshop braucht'],
        out: ['Website, Kampagne, Content, Prozess – live', 'Dokumentation, damit es ohne mich weiterläuft'],
        tools: 'Claude, ChatGPT, Gemini, Firefly, Midjourney, Runway und was gerade besser ist. Netzwerk nach Bedarf, abgerechnet transparent.',
      },
      {
        name: 'Messen & nachsteuern',
        claim: 'Zahlen, die du verstehst.',
        text: [
          'Die KPIs aus Schritt zwei, regelmäßig gemessen und in Klartext berichtet: Was hat was gekostet, was hat was gebracht, was machen wir anders. Kein 40-seitiges Dashboard, sondern eine Seite mit den fünf Zahlen, die zählen.',
          'Was funktioniert, wird ausgebaut. Was nicht funktioniert, fliegt raus – auch wenn es meine Idee war. Und dann geht es zurück zu Schritt eins: Was ist jetzt das Problem?',
        ],
        you: ['Dreißig Minuten im Monat', 'Die Bereitschaft, Dinge zu stoppen, die nicht laufen'],
        out: ['Monatlicher Report auf einer Seite', 'Entscheidungen, nicht nur Zahlen'],
        tools: 'KI für Datenaufbereitung, Anomalie-Erkennung, Reporting. Die Schlussfolgerungen ziehe ich.',
      },
    ],
    principles: {
      h: 'Woran du mich erkennst',
      items: [
        { t: 'Problem vor Tool', p: 'Ich verkaufe keine KI und kein Social Media. Ich verkaufe die Lösung für ein Problem – und nehme dafür, was funktioniert.' },
        { t: 'Zwei Seiten statt sechzig Folien', p: 'Wenn ich es nicht kurz erklären kann, habe ich es nicht verstanden.' },
        { t: 'Vorher festlegen, woran wir messen', p: 'KPIs stehen im Plan, bevor der erste Euro ausgegeben wird.' },
        { t: 'Sagen, wenn es nicht passt', p: 'Manchmal ist Marketing nicht das Problem. Dann sage ich das, auch wenn es mich den Auftrag kostet.' },
        { t: 'Ohne mich weiterlaufen', p: 'Was ich baue, dokumentiere ich so, dass dein Team es übernehmen kann.' },
      ],
    },
    cta: { h: 'Schritt eins dauert ein Gespräch.', p: 'Erzähl mir, wo es hakt. Ich sage dir innerhalb von 24 Stunden, ob und wie ich helfen kann.' },
  },

  en: {
    title: 'Method',
    lede: 'Four steps that repeat. First the problem, then the solution, then execution with AI and people who know their craft – and then numbers that tell us whether it worked.',
    why: {
      h: 'Why a cycle and not a list',
      p: [
        'Most marketing projects don’t fail on the idea. They fail because nobody looks after the launch. The campaign runs, the report arrives, nobody reads it, same again next year.',
        'So step four doesn’t end with me – it leads back to step one: what did the numbers show? What is the problem now? Sounds trivial, but it’s the difference between marketing that costs money and marketing that makes it.',
      ],
    },
    labels: { you: 'What I need from you', out: 'What you end up with', tools: 'AI and network' },
    phases: [
      {
        name: 'Analysis',
        claim: 'What is the actual problem?',
        text: [
          'I don’t start with channels or tools, I start with questions. What should be different in six months? Who decides on the customer side, and what makes them decide? What has been tried, and why wasn’t it enough?',
          'Plus: the numbers that already exist (website, social, CRM, sales), conversations with the people who deal with customers every day, and an honest outside look at brand, presence and competition.',
        ],
        you: ['Two to three hours for conversations', 'Access to the numbers you have', 'Honesty about what hasn’t worked so far'],
        out: ['A diagnosis on two pages: problem, causes, levers', 'A first view of what is realistic'],
        tools: 'AI for market and competitor research, analysis of reviews and social comments, first data analysis. The conversations I do myself.',
      },
      {
        name: 'Solution',
        claim: 'The shortest route, not the prettiest.',
        text: [
          'A proposal that fits your company, not my portfolio. With priorities: what first, what later, what deliberately not. With effort and timeline. And with the KPIs we’ll measure against – agreed up front, not fitted afterwards.',
          'Sometimes the solution is a new brand identity. Often it’s smaller: a better landing page, a different offer, a sales process that finally follows up on leads. I’ll also tell you when marketing isn’t the problem.',
        ],
        you: ['A decision', 'A budget range', 'Someone on your side who signs things off'],
        out: ['A plan with priorities, time, cost and KPIs', 'Clear roles: who does what'],
        tools: 'AI for variants, scenarios, first drafts. Specialists from the network when it comes to branding, media planning or technology beyond my own craft.',
      },
      {
        name: 'Execution',
        claim: 'Finished things, not concepts.',
        text: [
          'I build – myself or with people who do it better than me. Art directors, filmmakers, developers, copywriters, media planners, in Germany and internationally. You have one point of contact; I coordinate.',
          'AI where it saves time and money: research, rough drafts, variants, translations, edit prep, reporting. People where it has to look and feel real: concept, film, photography, the last twenty percent of a text.',
        ],
        you: ['Approvals, promptly', 'Access to people and material', 'Trust that not every line needs a workshop'],
        out: ['Website, campaign, content, process – live', 'Documentation so it runs without me'],
        tools: 'Claude, ChatGPT, Gemini, Firefly, Midjourney, Runway and whatever is better right now. Network as needed, billed transparently.',
      },
      {
        name: 'Measure & adjust',
        claim: 'Numbers you understand.',
        text: [
          'The KPIs from step two, measured regularly and reported in plain language: what cost what, what brought what, what we do differently. Not a 40-page dashboard – one page with the five numbers that count.',
          'What works gets scaled. What doesn’t gets cut – even if it was my idea. And then back to step one: what is the problem now?',
        ],
        you: ['Thirty minutes a month', 'The willingness to stop things that aren’t working'],
        out: ['Monthly one-page report', 'Decisions, not just numbers'],
        tools: 'AI for data preparation, anomaly detection, reporting. The conclusions are mine.',
      },
    ],
    principles: {
      h: 'How you’ll recognise me',
      items: [
        { t: 'Problem before tool', p: 'I don’t sell AI or social media. I sell the solution to a problem – and use whatever works.' },
        { t: 'Two pages instead of sixty slides', p: 'If I can’t explain it briefly, I haven’t understood it.' },
        { t: 'Agree the measures up front', p: 'KPIs are in the plan before the first euro is spent.' },
        { t: 'Say so when it doesn’t fit', p: 'Sometimes marketing isn’t the problem. Then I say so, even if it costs me the job.' },
        { t: 'Runs without me', p: 'What I build, I document so your team can take it over.' },
      ],
    },
    cta: { h: 'Step one takes one conversation.', p: 'Tell me where it’s stuck. Within 24 hours I’ll tell you whether and how I can help.' },
  },
};
