export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  auth: {
    eyebrow: string;
    headline: string;
    body: string;
    googleButton: string;
  };
  shell: {
    productSubtitle: string;
    briefingState: string;
    briefingStateSummary: string;
    briefingStateBody: string;
    search: string;
    notifications: string;
    signOut: string;
    operator: string;
    nav: {
      dashboard: string;
      projects: string;
      actions: string;
      documents: string;
      calendar: string;
      settings: string;
    };
  };
  dashboard: {
    topbarTitle: string;
    topbarDescription: string;
    topbarEyebrow: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    criticalRisksTitle: string;
    criticalRisksDescription: string;
    primaryRisk: string;
    confidence: string;
    executiveImplication: string;
    executiveImplicationBody: string;
    nextFourWeeksTitle: string;
    nextFourWeeksDescription: string;
    calendarWeekTitle: string;
    calendarWeekDescription: string;
    todayTitle: string;
    todayDescription: string;
    firstMove: string;
    processedTitle: string;
    processedDescription: string;
  };
  projects: {
    topbarTitle: string;
    topbarDescription: string;
    createTitle: string;
    createDescription: string;
    projectName: string;
    projectNamePlaceholder: string;
    operatingContext: string;
    operatingContextPlaceholder: string;
    businessOwner: string;
    businessOwnerPlaceholder: string;
    currentSignal: string;
    reviewCadence: string;
    nextReviewDate: string;
    keyDecision: string;
    keyDecisionPlaceholder: string;
    riskHypothesis: string;
    riskHypothesisPlaceholder: string;
    successCondition: string;
    successConditionPlaceholder: string;
    createButton: string;
    activeTitle: string;
    activeDescription: string;
    owner: string;
    unassigned: string;
    nextReview: string;
    thisWeek: string;
    decision: string;
    emptyTitle: string;
    emptyBody: string;
    signals: Record<string, string>;
    cadences: Record<string, string>;
  };
  commonPages: {
    actionsTitle: string;
    actionsDescription: string;
    actionsSectionTitle: string;
    actionsSectionDescription: string;
    documentsTitle: string;
    documentsDescription: string;
    calendarTitle: string;
    calendarDescription: string;
    settingsTitle: string;
    settingsDescription: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    auth: {
      eyebrow: "Operational Intelligence",
      headline: "Sign in to your operating briefing.",
      body: "Use Google to access project signals, daily risks, and executive operating context.",
      googleButton: "Continue with Google",
    },
    shell: {
      productSubtitle: "Operational Intelligence",
      briefingState: "Briefing State",
      briefingStateSummary: "3 risk signals need review",
      briefingStateBody: "Updated from mock operational data. No integrations connected.",
      search: "Search operational signals",
      notifications: "Notifications",
      signOut: "Sign out",
      operator: "Operator",
      nav: {
        dashboard: "Dashboard",
        projects: "Projects",
        actions: "Actions",
        documents: "Documents",
        calendar: "Calendar",
        settings: "Settings",
      },
    },
    dashboard: {
      topbarTitle: "Daily Operating Brief",
      topbarDescription: "A calm executive view of the decisions, risks, and timing pressure that matter today.",
      topbarEyebrow: "Daily Operational Briefing",
      heroEyebrow: "AI Chief Operating Officer",
      heroTitle: "Today is about protecting decision quality before the operating week tightens.",
      heroBody:
        "Renewal pricing, executive approval capacity, and customer response alignment are now connected. The most valuable move is to resolve the pricing guardrails first, then use that clarity to simplify the rest of the day.",
      criticalRisksTitle: "Critical Risks",
      criticalRisksDescription: "Only the risks that can materially change today's operating posture.",
      primaryRisk: "Primary risk",
      confidence: "confidence",
      executiveImplication: "Executive implication",
      executiveImplicationBody:
        "Do not let the commercial review proceed until the approved range and fallback position are clear.",
      nextFourWeeksTitle: "Next 4 Weeks",
      nextFourWeeksDescription: "A forward view of where pressure is building, kept intentionally brief.",
      calendarWeekTitle: "This Calendar Week",
      calendarWeekDescription: "The operating rhythm, without a calendar grid.",
      todayTitle: "Today",
      todayDescription: "The few moves that deserve attention now.",
      firstMove: "First move",
      processedTitle: "Processed Information",
      processedDescription: "Quiet provenance for the briefing, shown as confidence context rather than operational noise.",
    },
    projects: {
      topbarTitle: "Project Signals",
      topbarDescription: "Create and monitor initiatives as operating signals for executive attention and decision support.",
      createTitle: "Create Project",
      createDescription: "Capture the operating context Operiq should monitor and elevate in future briefings.",
      projectName: "Project name",
      projectNamePlaceholder: "Enterprise renewal cycle",
      operatingContext: "Operating context",
      operatingContextPlaceholder: "Pricing, approvals, and stakeholder expectations are converging.",
      businessOwner: "Business owner",
      businessOwnerPlaceholder: "Commercial lead",
      currentSignal: "Current signal",
      reviewCadence: "Review cadence",
      nextReviewDate: "Next review date",
      keyDecision: "Key decision needed",
      keyDecisionPlaceholder: "Confirm pricing guardrails before the renewal review.",
      riskHypothesis: "Risk hypothesis",
      riskHypothesisPlaceholder: "Approval delays may compress the negotiation window.",
      successCondition: "Success condition",
      successConditionPlaceholder: "Executive owner confirms decision path and next review window.",
      createButton: "Create",
      activeTitle: "Active Intelligence",
      activeDescription: "Projects are shown as operating signals with owner, cadence, decision, and risk context.",
      owner: "Owner",
      unassigned: "Unassigned",
      nextReview: "Next review",
      thisWeek: "This week",
      decision: "Decision",
      emptyTitle: "No project signals yet",
      emptyBody: "Create the first project to start building an operating view around risks, reviews, and decisions.",
      signals: {
        stable: "Stable",
        watch: "Watch",
        "at-risk": "At risk",
        critical: "Critical",
      },
      cadences: {
        daily: "Daily",
        weekly: "Weekly",
        "critical-only": "Critical only",
      },
    },
    commonPages: {
      actionsTitle: "Action Recommendations",
      actionsDescription: "Recommended interventions that reduce risk, clarify ownership, or protect time-sensitive decisions.",
      actionsSectionTitle: "Recommended Next Moves",
      actionsSectionDescription: "Mock recommendations only. No automation or execution layer is connected.",
      documentsTitle: "Document Signals",
      documentsDescription: "Readiness indicators for briefing materials, decision notes, and operational context documents.",
      calendarTitle: "Calendar Pressure",
      calendarDescription: "Upcoming meetings and protected windows that influence risk handling and decision timing.",
      settingsTitle: "Settings",
      settingsDescription: "Configuration surfaces for the mock product shell. No accounts, authentication, or integrations are implemented.",
    },
  },
  de: {
    auth: {
      eyebrow: "Operative Intelligenz",
      headline: "Melden Sie sich bei Ihrem operativen Briefing an.",
      body: "Nutzen Sie Google, um Projektsignale, Tagesrisiken und operativen Kontext zu oeffnen.",
      googleButton: "Mit Google fortfahren",
    },
    shell: {
      productSubtitle: "Operative Intelligenz",
      briefingState: "Briefing-Status",
      briefingStateSummary: "3 Risikosignale erfordern Pruefung",
      briefingStateBody: "Aktualisiert aus operativen Beispieldaten. Keine Integrationen verbunden.",
      search: "Operative Signale suchen",
      notifications: "Benachrichtigungen",
      signOut: "Abmelden",
      operator: "Operator",
      nav: {
        dashboard: "Dashboard",
        projects: "Projekte",
        actions: "Empfehlungen",
        documents: "Dokumente",
        calendar: "Kalender",
        settings: "Einstellungen",
      },
    },
    dashboard: {
      topbarTitle: "Taegliches Operating Brief",
      topbarDescription: "Eine ruhige Executive-Sicht auf Entscheidungen, Risiken und Zeitdruck des heutigen Tages.",
      topbarEyebrow: "Taegliches operatives Briefing",
      heroEyebrow: "AI Chief Operating Officer",
      heroTitle: "Heute geht es darum, Entscheidungsqualitaet zu schuetzen, bevor die Woche enger wird.",
      heroBody:
        "Renewal Pricing, Executive-Freigaben und Kundenreaktion haengen jetzt zusammen. Der wichtigste Schritt ist, zuerst die Preisleitplanken zu klaeren und danach den Tag zu vereinfachen.",
      criticalRisksTitle: "Kritische Risiken",
      criticalRisksDescription: "Nur Risiken, die die heutige operative Lage wesentlich veraendern koennen.",
      primaryRisk: "Primaeres Risiko",
      confidence: "Sicherheit",
      executiveImplication: "Executive-Implikation",
      executiveImplicationBody:
        "Die kommerzielle Pruefung sollte nicht starten, bevor genehmigte Spanne und Rueckfallposition klar sind.",
      nextFourWeeksTitle: "Naechste 4 Wochen",
      nextFourWeeksDescription: "Ein kurzer Ausblick darauf, wo operativer Druck entsteht.",
      calendarWeekTitle: "Diese Kalenderwoche",
      calendarWeekDescription: "Der operative Rhythmus, ohne Kalendergitter.",
      todayTitle: "Heute",
      todayDescription: "Die wenigen Schritte, die jetzt Aufmerksamkeit verdienen.",
      firstMove: "Erster Schritt",
      processedTitle: "Verarbeitete Informationen",
      processedDescription: "Ruhiger Herkunftsnachweis fuer das Briefing, als Vertrauenskontext statt operativem Rauschen.",
    },
    projects: {
      topbarTitle: "Projektsignale",
      topbarDescription: "Erstellen und beobachten Sie Initiativen als operative Signale fuer Executive-Aufmerksamkeit.",
      createTitle: "Projekt erstellen",
      createDescription: "Erfassen Sie den operativen Kontext, den Operiq in kuenftigen Briefings hervorheben soll.",
      projectName: "Projektname",
      projectNamePlaceholder: "Enterprise Renewal Cycle",
      operatingContext: "Operativer Kontext",
      operatingContextPlaceholder: "Pricing, Freigaben und Stakeholder-Erwartungen laufen zusammen.",
      businessOwner: "Business Owner",
      businessOwnerPlaceholder: "Commercial Lead",
      currentSignal: "Aktuelles Signal",
      reviewCadence: "Review-Rhythmus",
      nextReviewDate: "Naechstes Review-Datum",
      keyDecision: "Benoetigte Entscheidung",
      keyDecisionPlaceholder: "Preisleitplanken vor dem Renewal Review bestaetigen.",
      riskHypothesis: "Risikohypothese",
      riskHypothesisPlaceholder: "Freigabeverzug kann das Verhandlungsfenster verengen.",
      successCondition: "Erfolgskriterium",
      successConditionPlaceholder: "Executive Owner bestaetigt Entscheidungspfad und naechstes Review.",
      createButton: "Erstellen",
      activeTitle: "Aktive Intelligenz",
      activeDescription: "Projekte erscheinen als operative Signale mit Owner, Rhythmus, Entscheidung und Risikokontext.",
      owner: "Owner",
      unassigned: "Nicht zugewiesen",
      nextReview: "Naechstes Review",
      thisWeek: "Diese Woche",
      decision: "Entscheidung",
      emptyTitle: "Noch keine Projektsignale",
      emptyBody: "Erstellen Sie das erste Projekt, um Risiken, Reviews und Entscheidungen operativ sichtbar zu machen.",
      signals: {
        stable: "Stabil",
        watch: "Beobachten",
        "at-risk": "Gefaehrdet",
        critical: "Kritisch",
      },
      cadences: {
        daily: "Taeglich",
        weekly: "Woechentlich",
        "critical-only": "Nur kritisch",
      },
    },
    commonPages: {
      actionsTitle: "Handlungsempfehlungen",
      actionsDescription: "Empfohlene Interventionen, die Risiko reduzieren, Ownership klaeren oder zeitkritische Entscheidungen schuetzen.",
      actionsSectionTitle: "Empfohlene naechste Schritte",
      actionsSectionDescription: "Nur Beispieldaten. Keine Automatisierung oder Ausfuehrungsebene verbunden.",
      documentsTitle: "Dokumentsignale",
      documentsDescription: "Bereitschaftssignale fuer Briefing-Materialien, Entscheidungsnotizen und operativen Kontext.",
      calendarTitle: "Kalenderdruck",
      calendarDescription: "Anstehende Termine und geschuetzte Zeitfenster, die Risikoarbeit und Entscheidungszeitpunkt beeinflussen.",
      settingsTitle: "Einstellungen",
      settingsDescription: "Konfigurationsflaechen fuer die Produkt-Shell. Keine Konten, Authentifizierung oder Integrationen aktiv.",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "de";
}
