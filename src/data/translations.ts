export type Language = "en" | "hi";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  slug: string;
  accent: "gold" | "cyan" | "purple";
}

export interface IndustryItem {
  id: string;
  name: string;
  desc: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  metrics: string;
  desc: string;
  isDemo: boolean;
  tags: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    pricing: string;
    contact: string;
    cta: string;
    tagline: string;
  };
  hero: {
    badge: string;
    headlineMain: string;
    headlineSecondary: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustedBadge: string;
    scrollPrompt: string;
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: ServiceItem[];
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    pillars: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  industries: {
    badge: string;
    title: string;
    subtitle: string;
    items: IndustryItem[];
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    demoNote: string;
    items: PortfolioItem[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
    phoneLabel: string;
  };
  contactForm: {
    badge: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      business: string;
      service: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    aboutText: string;
    quickLinks: string;
    servicesLabel: string;
    contactLabel: string;
    operatingLocation: string;
    rights: string;
    whatsappChat: string;
  };
}

export const content: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Let's Talk",
      tagline: "Your Business, Our Digital Partnership.",
    },
    hero: {
      badge: "YOUR DIGITAL GROWTH PARTNER",
      headlineMain: "Welcome to Vyapar Sathi",
      headlineSecondary: "Your Business. Our Digital Partnership.",
      description:
        "We help businesses build a powerful digital presence through strategic marketing, smart technology and meaningful online experiences.",
      primaryCta: "Let's Grow Together",
      secondaryCta: "Explore Our Services",
      trustedBadge: "Empowering Local & Growing Businesses",
      scrollPrompt: "Explore Digital Universe",
    },
    journey: {
      badge: "CONNECTED GROWTH SYSTEM",
      title: "The Digital Growth Journey",
      subtitle:
        "Every successful business follows a proven digital pathway to dominate its market.",
      steps: [
        {
          title: "GET DISCOVERED",
          desc: "Targeted Google Ads, high-ranking SEO, and optimized Google Business Profile bring high-intent local customers to your doorstep.",
        },
        {
          title: "BUILD TRUST",
          desc: "A lightning-fast, premium website and active social presence establish immediate authority and credibility in your market.",
        },
        {
          title: "GENERATE ENQUIRIES",
          desc: "Conversion-optimized landing funnels, seamless WhatsApp integrations, and clear contact triggers turn visitors into genuine enquiries.",
        },
        {
          title: "GROW YOUR BUSINESS",
          desc: "Continuous performance optimization, regular website maintenance, and strategic campaigns scale your revenue month after month.",
        },
      ],
    },
    services: {
      badge: "CORE CAPABILITIES",
      title: "Six Pillars of Digital Growth",
      subtitle:
        "Tailored digital solutions engineered for measurable business impact.",
      learnMore: "Learn More",
      items: [
        {
          id: "google-ads",
          number: "01",
          title: "Google Ads Management",
          shortDesc:
            "High-intent search campaigns, keyword research, conversion tracking and ongoing optimization to generate immediate enquiries.",
          fullDesc:
            "Drive qualified prospects who are actively searching for your services right now. We manage budget, keywords, ad copy, and negative terms for maximum ROI.",
          benefits: ["Immediate lead generation", "Targeted local reach", "Transparent budget control"],
          features: ["Search & Local Campaigns", "Negative Keyword Lists", "Conversion Tracking Setup"],
          slug: "/services/google-ads",
          accent: "gold",
        },
        {
          id: "google-business-profile",
          number: "02",
          title: "Google Business Profile",
          shortDesc:
            "Complete GBP setup, local map pack ranking optimization, service catalog management, and local visibility engineering.",
          fullDesc:
            "Own the top spots on Google Maps. We optimize your categories, business hours, service areas, photos, and review strategies for maximum walk-ins and phone calls.",
          benefits: ["Top 3 Map Pack dominance", "Direct calls & directions", "Reputation & trust building"],
          features: ["Profile Setup & Verification", "Category Optimization", "Review Strategy Guidance"],
          slug: "/services/google-business-profile",
          accent: "cyan",
        },
        {
          id: "website-development",
          number: "03",
          title: "Website Development",
          shortDesc:
            "Fast, mobile-responsive, modern business websites and high-converting landing pages built with clean code and SEO foundations.",
          fullDesc:
            "Your 24/7 digital storefront. We develop bespoke websites that load in under a second, look breathtaking on smartphones, and seamlessly convert visitors into calls.",
          benefits: ["Sub-second page loading", "100% Mobile responsiveness", "Conversion-focused layouts"],
          features: ["Modern Responsive Framework", "SEO-Friendly Architecture", "WhatsApp & Call Integrations"],
          slug: "/services/website-development",
          accent: "purple",
        },
        {
          id: "seo-local-seo",
          number: "04",
          title: "SEO & Local SEO",
          shortDesc:
            "Technical site audits, on-page content optimization, local schema markup, and long-term organic ranking strategies.",
          fullDesc:
            "Earn permanent organic rankings without paying for every single click. We optimize your website code, site speed, local citations, and geo-targeted keywords.",
          benefits: ["Consistent organic traffic", "Zero cost-per-click clicks", "Long-term compounding asset"],
          features: ["Technical SEO Audits", "On-Page Keyword Optimization", "Local Citations & Schema"],
          slug: "/services/seo-local-seo",
          accent: "gold",
        },
        {
          id: "social-media-marketing",
          number: "05",
          title: "Social Media Marketing",
          shortDesc:
            "Strategic content planning, platform management, brand awareness, and targeted audience engagement campaigns.",
          fullDesc:
            "Build an engaged community around your local brand. We plan content calendars, design compelling campaign messaging, and run hyper-targeted social ads.",
          benefits: ["Local brand authority", "Engaged audience loyalty", "Cross-channel brand recall"],
          features: ["Content Strategy & Scheduling", "Platform Channel Setup", "Targeted Paid Campaigns"],
          slug: "/services/social-media-marketing",
          accent: "cyan",
        },
        {
          id: "website-maintenance",
          number: "06",
          title: "Website Maintenance",
          shortDesc:
            "Scheduled backups, security updates, speed monitoring, bug fixes, and continuous technical support for peace of mind.",
          fullDesc:
            "Never worry about your website breaking or going down. Our engineers monitor uptime, deploy security patches, keep content updated, and resolve technical issues.",
          benefits: ["99.9% Uptime assurance", "Routine automated backups", "Fast turnaround tech support"],
          features: ["Security & Malware Audits", "Content & Image Updates", "Performance Benchmarking"],
          slug: "/services/website-maintenance",
          accent: "purple",
        },
      ],
    },
    whyUs: {
      badge: "THE VYAPAR SATHI DIFFERENCE",
      title: "More Than Digital Services.\nA Partnership Built Around Your Growth.",
      subtitle:
        "We don't sell vanity metrics. We align our engineering and marketing directly with your business goals.",
      pillars: [
        {
          number: "01",
          title: "Strategy Before Execution",
          desc: "We analyze your competition, local demand, and customer acquisition bottlenecks before touching a single campaign or line of code.",
        },
        {
          number: "02",
          title: "Solutions Built Around Your Business",
          desc: "Every business has unique strengths. We never push cookie-cutter packages; we craft tailored digital systems that match your exact operations.",
        },
        {
          number: "03",
          title: "Transparent Communication",
          desc: "No confusing technical jargon. You get straightforward weekly reporting, honest ROI discussions, and direct access to your growth team.",
        },
        {
          number: "04",
          title: "Focus on Meaningful Enquiries",
          desc: "Impressions and clicks do not pay bills. We obsess over genuine phone calls, WhatsApp inquiries, and high-intent leads that convert into paying customers.",
        },
        {
          number: "05",
          title: "Practical Digital Solutions",
          desc: "We prioritize solutions that work reliably in the real world: fast mobile loading, effortless WhatsApp touchpoints, and easy customer forms.",
        },
        {
          number: "06",
          title: "Long-Term Partnership",
          desc: "As your 'Vyapar Sathi' (Business Companion), we stand beside you through market shifts, seasonal cycles, and continuous brand scaling.",
        },
      ],
    },
    process: {
      badge: "OUR METHODOLOGY",
      title: "Engineered 5-Step Process",
      subtitle: "A systematic approach designed for predictable, sustainable business growth.",
      steps: [
        {
          number: "01",
          title: "UNDERSTAND",
          subtitle: "Discovery & Audit",
          desc: "We understand your business model, customer demographics, core service profitability, and local competitive landscape.",
        },
        {
          number: "02",
          title: "STRATEGIZE",
          subtitle: "Digital Roadmap",
          desc: "We engineer a tailored roadmap combining the right mix of paid search, local maps, SEO, and website conversion architecture.",
        },
        {
          number: "03",
          title: "CREATE",
          subtitle: "High-Performance Build",
          desc: "We build or upgrade your digital assets — crafting fast websites, fine-tuned ad campaigns, and pristine Google Business Profiles.",
        },
        {
          number: "04",
          title: "OPTIMIZE",
          subtitle: "Conversion Tuning",
          desc: "We track user interactions, refine keywords, test landing page hooks, and continuously lower your cost per meaningful enquiry.",
        },
        {
          number: "05",
          title: "GROW",
          subtitle: "Scalable Expansion",
          desc: "With a reliable enquiry engine in place, we help scale your presence across new locations, service verticals, and market segments.",
        },
      ],
    },
    industries: {
      badge: "SECTOR EXPERTISE",
      title: "Who We Help Grow",
      subtitle:
        "Specialized digital growth strategies engineered for specific business models and local markets.",
      items: [
        {
          id: "home-services",
          name: "Home Services",
          desc: "Electricians, plumbers, HVAC, cleaning, and renovation contractors looking for immediate local emergency calls.",
          iconName: "Wrench",
        },
        {
          id: "restaurants-cafes",
          name: "Restaurants & Cafes",
          desc: "Dining spots, bakeries, and cloud kitchens seeking maximum Google Maps walk-ins, reviews, and table bookings.",
          iconName: "Utensils",
        },
        {
          id: "retail-shops",
          name: "Retail Shops",
          desc: "Boutiques, jewelry, electronics, and specialty stores driving footfall and local catalog discovery.",
          iconName: "ShoppingBag",
        },
        {
          id: "healthcare",
          name: "Healthcare & Clinics",
          desc: "Doctors, dental clinics, diagnostic centers, and physiotherapists needing trusted patient appointment bookings.",
          iconName: "Activity",
        },
        {
          id: "education-coaching",
          name: "Education & Coaching",
          desc: "Coaching institutes, skill academies, and tutors seeking verified student admissions and batch inquiries.",
          iconName: "GraduationCap",
        },
        {
          id: "professional-services",
          name: "Professional Services",
          desc: "Lawyers, chartered accountants, architects, and consultants building authority and corporate mandates.",
          iconName: "Briefcase",
        },
        {
          id: "local-service-providers",
          name: "Local Service Providers",
          desc: "Event managers, salon studios, photographers, and auto repair shops dominating local radius searches.",
          iconName: "MapPin",
        },
        {
          id: "smb-enterprises",
          name: "Small & Medium Businesses",
          desc: "Manufacturing units, suppliers, and distributors establishing modern B2B websites and digital inquiry funnels.",
          iconName: "Building2",
        },
      ],
    },
    portfolio: {
      badge: "SHOWCASE ARCHITECTURE",
      title: "Featured Growth Frameworks",
      subtitle:
        "Explore conceptual case studies demonstrating our digital design, funnel structure, and conversion engineering.",
      demoNote: "Interactive Demo Showcase — Demonstrating architecture & performance prototypes",
      items: [
        {
          id: "demo-1",
          title: "Apex Home Care Systems",
          category: "Google Ads + High-Speed Landing Page",
          industry: "Home Services",
          metrics: "+142% Inquiries within 60 Days",
          desc: "Engineered ultra-fast 0.6s mobile landing funnels paired with localized Google Search campaigns for emergency plumbing and HVAC.",
          isDemo: true,
          tags: ["Google Ads", "Web Development", "Conversion UX"],
        },
        {
          id: "demo-2",
          title: "Saffron Lounge & Bistro",
          category: "Google Maps Optimization + Visual Site",
          industry: "Restaurants & Cafes",
          metrics: "Top 3 Google Maps Ranking",
          desc: "Comprehensive Google Business Profile overhaul, geo-tagged photography structure, and responsive mobile reservation UI.",
          isDemo: true,
          tags: ["Google Business Profile", "Local SEO", "Mobile First"],
        },
        {
          id: "demo-3",
          title: "Drona Coaching Academy",
          category: "Full Digital Growth Suite",
          industry: "Education & Coaching",
          metrics: "+320 Verified Batch Applications",
          desc: "Targeted localized search campaigns coupled with interactive course syllabi pages and automated WhatsApp lead intake.",
          isDemo: true,
          tags: ["Google Ads", "Landing Pages", "WhatsApp Automation"],
        },
        {
          id: "demo-4",
          title: "Nirvana Dental & Implant Clinic",
          category: "Local SEO + Authority Website",
          industry: "Healthcare",
          metrics: "2.4x Increase in Direct Call Bookings",
          desc: "Clean clinical website architecture with verified doctor bios, appointment schema markup, and Google Map pack prominence.",
          isDemo: true,
          tags: ["Local SEO", "Web Development", "Schema Markup"],
        },
      ],
    },
    faq: {
      badge: "TRANSPARENT ANSWERS",
      title: "Frequently Asked Questions",
      subtitle:
        "Clear, honest insights into how we collaborate, execute, and deliver results.",
      items: [
        {
          question: "How is Vyapar Sathi different from typical marketing agencies?",
          answer:
            "Most agencies focus on vanity numbers like impressions and post likes that do not help paying bills. At Vyapar Sathi, we operate as your genuine business partner ('Sathi'), prioritizing direct phone calls, WhatsApp inquiries, and high-intent local customer discovery tailored specifically to your operating margins.",
        },
        {
          question: "Which service should my business start with?",
          answer:
            "If you need immediate customer calls within 48–72 hours, Google Ads and an optimized landing page deliver the fastest ROI. If you run a local retail store, clinic, or restaurant, dominating the Google Business Profile 3-pack is the foundational first step.",
        },
        {
          question: "How long does it take to see tangible results?",
          answer:
            "Google Ads campaigns start generating calls within days of launch. Google Business Profile ranking improvements typically become visible within 3 to 6 weeks, while organic SEO establishes solid compounding results over 3 to 6 months.",
        },
        {
          question: "Do you build mobile-responsive websites?",
          answer:
            "Every single website we build is 100% mobile-first, lightweight, and engineered to load under one second. Over 80% of local customer searches happen on smartphones, so we ensure lightning-fast touchpoints with instant WhatsApp and Call buttons.",
        },
        {
          question: "Will I have full ownership of my website, domain, and ad accounts?",
          answer:
            "Yes, absolutely 100%. You maintain full administrative ownership of your domain, hosting, Google Business Profile, and Google Ads accounts. We operate with complete transparency.",
        },
        {
          question: "Where are you based and how do we communicate?",
          answer:
            "We are based at Ghaziabad, Uttar Pradesh, India. We maintain seamless communication via WhatsApp, direct phone calls, and Google Meet for reviews and updates.",
        },
      ],
    },
    ctaBanner: {
      title: "Ready to Transform Your Digital Growth?",
      subtitle:
        "Let's discuss how we can build high-visibility digital systems for your business.",
      primaryBtn: "Start Conversation",
      secondaryBtn: "Chat on WhatsApp",
      phoneLabel: "Direct Hotline: +91 7704841382",
    },
    contactForm: {
      badge: "CONNECT WITH US",
      title: "Schedule a Growth Consultation",
      subtitle:
        "Share your business requirements and we will prepare a personalized digital growth roadmap.",
      fields: {
        name: "Your Full Name *",
        phone: "Mobile Phone Number *",
        email: "Email Address (Optional)",
        business: "Business Name *",
        service: "Primary Service Required *",
        message: "Tell us about your business goals and challenges...",
        submit: "Submit Growth Inquiry",
        submitting: "Submitting...",
        success:
          "Thank you! Your inquiry has been received. Our team will contact you within 24 hours.",
      },
    },
    footer: {
      tagline: "Your Business, Our Digital Partnership.",
      aboutText:
        "A premium digital growth partner helping local and growing businesses build market visibility, trust, and a scalable enquiry pipeline.",
      quickLinks: "Quick Links",
      servicesLabel: "Core Services",
      contactLabel: "Contact Information",
      operatingLocation: "Ghaziabad, Uttar Pradesh, India",
      rights: "Vyapar Sathi. All rights reserved.",
      whatsappChat: "Message on WhatsApp",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      portfolio: "पोर्टफोलियो",
      pricing: "मूल्य निर्धारण",
      contact: "संपर्क करें",
      cta: "बातचीत शुरू करें",
      tagline: "आपके व्यापार का डिजिटल साथी।",
    },
    hero: {
      badge: "आपका डिजिटल ग्रोथ पार्टनर",
      headlineMain: "Welcome to Vyapar Sathi",
      headlineSecondary: "आपके व्यापार को डिजिटल पहचान दें। आपकी तरक्की में बनें आपके साथी।",
      description:
        "हम सटीक मार्केटिंग, स्मार्ट टेक्नोलॉजी और बेहतरीन डिजिटल अनुभवों के माध्यम से स्थानीय और बढ़ते व्यापारों को एक शक्तिशाली ऑनलाइन उपस्थिति प्रदान करते हैं।",
      primaryCta: "साथ मिलकर आगे बढ़ें",
      secondaryCta: "हमारी सेवाएं देखें",
      trustedBadge: "स्थानीय और प्रगतिशील व्यापारों का विश्वसनीय साथी",
      scrollPrompt: "डिजिटल संसार का अनुभव करें",
    },
    journey: {
      badge: "डिजिटल ग्रोथ सिस्टम",
      title: "व्यापार विकास की 4 सीढ़ियां",
      subtitle: "हर सफल व्यापार एक ठोस डिजिटल मार्ग अपनाकर अपने बाजार में अग्रणी बनता है।",
      steps: [
        {
          title: "पहचान बनाएं (GET DISCOVERED)",
          desc: "गूगल विज्ञापनों, लोकल SEO और गूगल बिजनेस प्रोफाइल के जरिए अपनी दुकान या सेवा को स्थानीय ग्राहकों की पहली पसंद बनाएं।",
        },
        {
          title: "विश्वास जीतें (BUILD TRUST)",
          desc: "एक अल्ट्रा-फास्ट, आधुनिक वेबसाइट और सोशल मीडिया उपस्थिति से ग्राहकों के मन में तुरंत भरोसा और सम्मान स्थापित करें।",
        },
        {
          title: "पूछताछ पाएं (GENERATE ENQUIRIES)",
          desc: "व्हाट्सएप इंटीग्रेशन, डायरेक्ट कॉल बटन्स और आसान फॉर्म्स से वेबसाइट विज़िटर्स को वास्तविक ग्राहकों में बदलें।",
        },
        {
          title: "व्यापार बढ़ाएं (GROW YOUR BUSINESS)",
          desc: "नियमित परफॉर्मेंस ऑप्टिमाइजेशन और वेबसाइट मेंटेनेंस के साथ अपने व्यापार और आमदनी को निरंतर नई ऊंचाइयों पर ले जाएं।",
        },
      ],
    },
    services: {
      badge: "मुख्य सेवाएं",
      title: "डिजिटल विकास के 6 मजबूत स्तंभ",
      subtitle: "व्यापार के वास्तविक मुनाफे और ग्राहकों की संख्या बढ़ाने के लिए तैयार की गई सेवाएं।",
      learnMore: "विस्तार से जानें",
      items: [
        {
          id: "google-ads",
          number: "01",
          title: "Google Ads Management",
          shortDesc:
            "सर्च कैंपेन, कीवर्ड रिसर्च, कन्वर्जन ट्रैकिंग और सटीक मैनेजमेंट ताकि तुरंत वास्तविक कस्टमर कॉल्स आएं।",
          fullDesc:
            "उन ग्राहकों तक सीधे पहुंचें जो गूगल पर आपकी सेवाएं खोज रहे हैं। हम बजट, कीवर्ड्स और विज्ञापनों को ऑप्टिमाइज़ करके अधिकतम आरओआई सुनिश्चित करते हैं।",
          benefits: ["तुरंत कॉल्स और लीड्स", "स्थानीय ग्राहकों तक पहुंच", "बजट पर पूरा नियंत्रण"],
          features: ["लोकल सर्च कैंपेन", "नेगेटिव कीवर्ड मैनेजमेंट", "कॉल और लीड ट्रैकिंग"],
          slug: "/services/google-ads",
          accent: "gold",
        },
        {
          id: "google-business-profile",
          number: "02",
          title: "Google Business Profile",
          shortDesc:
            "गूगल मैप्स पर प्रोफाइल सेटअप, टॉप 3 मैप पैक रैंकिंग, कैटलॉग ऑप्टिमाइजेशन और लोकल विजिबिलिटी।",
          fullDesc:
            "गूगल मैप्स पर अपने इलाके में सबसे ऊपर दिखें। हम आपकी कैटेगरी, कार्य-समय, फोटो, सेवाएं और रिव्यू रणनीति को सही तरीके से मैनेज करते हैं।",
          benefits: ["गूगल मैप्स पर टॉप रैंकिंग", "सीधे फोन कॉल्स और स्टोर विज़िट्स", "स्थानीय विश्वसनीयता"],
          features: ["प्रोफाइल वेरिफिकेशन व सेटअप", "लोकल कैटेगरी ऑप्टिमाइजेशन", "रिव्यू स्ट्रैटेजी गाइडेंस"],
          slug: "/services/google-business-profile",
          accent: "cyan",
        },
        {
          id: "website-development",
          number: "03",
          title: "Website Development",
          shortDesc:
            "सुपर-फास्ट, मोबाइल-फ्रेंडली आधुनिक वेबसाइट्स और लैंडिंग पेजेस जो विजिटर्स को कस्टमर में बदलें।",
          fullDesc:
            "आपकी 24 घंटे चलने वाली डिजिटल दुकान। हम ऐसी वेबसाइट्स बनाते हैं जो 1 सेकंड में खुलती हैं, मोबाइल पर शानदार दिखती हैं और सीधे कॉल जनरेट करती हैं।",
          benefits: ["1 सेकंड से कम लोडिंग टाइम", "मोबाइल पर 100% परफेक्ट", "कॉल व व्हाट्सएप बटन"],
          features: ["मॉडर्न रिस्पॉन्सिव कोडिंग", "SEO-फ्रेंडली आर्किटेक्चर", "व्हाट्सएप और कॉन्टैक्ट फॉर्म"],
          slug: "/services/website-development",
          accent: "purple",
        },
        {
          id: "seo-local-seo",
          number: "04",
          title: "SEO & Local SEO",
          shortDesc:
            "टेक्निकल ऑडिट, ऑन-पेज कंटेंट ऑप्टिमाइजेशन, लोकल स्कीमा और स्थायी ऑर्गेनिक रैंकिंग रणनीति।",
          fullDesc:
            "बिना हर क्लिक के पैसे दिए गूगल पर स्थायी ऑर्गेनिक रैंकिंग हासिल करें। हम आपकी वेबसाइट कोड, स्पीड और लोकल कीवर्ड्स को ऑप्टिमाइज़ करते हैं।",
          benefits: ["लगातार मुफ्त ऑर्गेनिक ग्राहक", "स्थायी डिजिटल संपत्ति", "बाजार में ब्रांड अथॉरिटी"],
          features: ["टेक्निकल SEO ऑडिट", "ऑन-पेज कीवर्ड ऑप्टिमाइजेशन", "लोकल साइटेशन्स और स्कीमा"],
          slug: "/services/seo-local-seo",
          accent: "gold",
        },
        {
          id: "social-media-marketing",
          number: "05",
          title: "Social Media Marketing",
          shortDesc:
            "रणनीतिक कंटेंट प्लानिंग, प्लेटफॉर्म मैनेजमेंट, ब्रांड जागरूकता और लक्षित सोशल विज्ञापन कैंपेन।",
          fullDesc:
            "अपने स्थानीय ब्रांड के प्रति लोगों का जुड़ाव बढ़ाएं। हम आकर्षक पोस्ट्स की योजना बनाते हैं और सही ग्राहकों तक पहुंचने वाले विज्ञापन चलाते हैं।",
          benefits: ["स्थानीय ब्रांड पहचान", "ग्राहकों के साथ सक्रिय संवाद", "मजबूत सोशल उपस्थिति"],
          features: ["कंटेंट कैलेंडर और प्लानिंग", "प्रोफाइल ब्रांडिंग सेटअप", "टारगेटेड सोशल एड्स"],
          slug: "/services/social-media-marketing",
          accent: "cyan",
        },
        {
          id: "website-maintenance",
          number: "06",
          title: "Website Maintenance",
          shortDesc:
            "नियमित बैकअप्स, सुरक्षा अपडेट्स, स्पीड मॉनिटरिंग, बग फिक्स और निरंतर तकनीकी सहायता।",
          fullDesc:
            "वेबसाइट बंद होने या खराब होने की चिंता बिल्कुल छोड़ दें। हमारे इंजीनियर सुरक्षा, बैकअप और स्पीड की 24/7 निगरानी करते हैं।",
          benefits: ["99.9% अपटाइम की सुरक्षा", "नियमित ऑटोमेटेड बैकअप", "त्वरित तकनीकी सपोर्ट"],
          features: ["सिक्योरिटी और मैलवेयर ऑडिट", "कंटेंट और इमेज अपडेट", "स्पीड बेंचमार्किंग"],
          slug: "/services/website-maintenance",
          accent: "purple",
        },
      ],
    },
    whyUs: {
      badge: "व्यापार साथी की खासियत",
      title: "केवल डिजिटल सेवाएं नहीं।\nआपकी तरक्की के लिए एक सच्ची साझेदारी।",
      subtitle:
        "हम दिखावटी आंकड़ों पर नहीं, बल्कि सीधे आपके व्यापार के वास्तविक विकास पर काम करते हैं।",
      pillars: [
        {
          number: "01",
          title: "काम शुरू करने से पहले ठोस रणनीति",
          desc: "हम कोई भी विज्ञापन या कोड लिखने से पहले आपके प्रतिद्वंद्वियों, स्थानीय मांग और ग्राहकों की जरूरतों का बारीकी से अध्ययन करते हैं।",
        },
        {
          number: "02",
          title: "आपके व्यापार के अनुकूल समाधान",
          desc: "हर व्यापार अलग होता है। हम रटी-रटाई योजनाएं नहीं बेचते, बल्कि आपके काम और बजट के अनुसार सही डिजिटल सिस्टम बनाते हैं।",
        },
        {
          number: "03",
          title: "पारदर्शी और सीधी बातचीत",
          desc: "कोई तकनीकी उलझन नहीं। आपको हर हफ्ते आसान भाषा में रिपोर्टिंग मिलती है और आप सीधे अपनी टीम से बात कर सकते हैं।",
        },
        {
          number: "04",
          title: "वास्तविक पूछताछ पर ध्यान",
          desc: "व्यूज और लाइक्स से बिजली का बिल नहीं भरता। हमारा मुख्य लक्ष्य सिर्फ वास्तविक फोन कॉल्स, व्हाट्सएप संदेश और इच्छुक ग्राहक लाना है।",
        },
        {
          number: "05",
          title: "व्यावहारिक डिजिटल समाधान",
          desc: "हम उन चीजों को प्राथमिकता देते हैं जो जमीनी स्तर पर काम करती हैं: मोबाइल पर तेज खुलना, आसान व्हाट्सएप बटन और सीधा संपर्क।",
        },
        {
          number: "06",
          title: "दीर्घकालिक साथ",
          desc: "आपके 'व्यापार साथी' के रूप में, हम हर मौसम, बाजार के उतार-चढ़ाव और आपके व्यापार के विस्तार में हमेशा आपके साथ खड़े रहते हैं।",
        },
      ],
    },
    process: {
      badge: "काम करने का तरीका",
      title: "व्यवस्थित 5-चरणीय प्रक्रिया",
      subtitle: "सुनियोजित और टिकाऊ व्यापार विस्तार के लिए परखा हुआ मॉडल।",
      steps: [
        {
          number: "01",
          title: "समझना (UNDERSTAND)",
          subtitle: "पहचान व विश्लेषण",
          desc: "हम आपके व्यापार मॉडल, प्राथमिक सेवाओं, मुनाफे के दायरे और ग्राहकों के व्यवहार को गहराई से समझते हैं।",
        },
        {
          number: "02",
          title: "रणनीति (STRATEGIZE)",
          subtitle: "डिजिटल योजना",
          desc: "सर्च विज्ञापन, गूगल मैप्स, वेबसाइट और सोशल मीडिया का सही संतुलन बनाकर विकास की योजना तैयार करते हैं।",
        },
        {
          number: "03",
          title: "निर्माण (CREATE)",
          subtitle: "हाई-परफॉर्मेंस सेटअप",
          desc: "हम आपकी अल्ट्रा-फास्ट वेबसाइट, कस्टमाइज्ड विज्ञापन कैंपेन और गूगल बिजनेस प्रोफाइल का निर्माण और सेटअप करते हैं।",
        },
        {
          number: "04",
          title: "सुधार (OPTIMIZE)",
          subtitle: "कन्वर्जन ऑप्टिमाइजेशन",
          desc: "हम लगातार जांच करते हैं कि ग्राहक कहां से आ रहे हैं और प्रति कॉल का खर्च कैसे कम से कम किया जाए।",
        },
        {
          number: "05",
          title: "विस्तार (GROW)",
          subtitle: "सदाबहार तरक्की",
          desc: "एक स्थिर कस्टमर सिस्टम बन जाने के बाद, हम आपके नए इलाकों और नई सेवाओं में व्यापार बढ़ाने में मदद करते हैं।",
        },
      ],
    },
    industries: {
      badge: "उद्योग विशेषज्ञता",
      title: "हम किन व्यापारों को आगे बढ़ाते हैं",
      subtitle: "हर सेक्टर के लिए तैयार की गई विशेष डिजिटल विकास रणनीतियां।",
      items: [
        {
          id: "home-services",
          name: "होम सर्विसेज",
          desc: "इलेक्ट्रीशियन, प्लंबर, एसी रिपेयर, कारपेंटर और मेंटेनेंस पेशेवर जिन्हें तुरंत स्थानीय कॉल्स की जरूरत होती है।",
          iconName: "Wrench",
        },
        {
          id: "restaurants-cafes",
          name: "रेस्टोरेंट्स और कैफे",
          desc: "रेस्टोरेंट, बेकरी और ढाबे जो गूगल मैप्स पर ग्राहकों की भारी भीड़, रिव्यूज और डाइन-इन बुकिंग्स चाहते हैं।",
          iconName: "Utensils",
        },
        {
          id: "retail-shops",
          name: "रिटेल शॉप्स व स्टोर्स",
          desc: "कपड़े, आभूषण, इलेक्ट्रॉनिक्स और किराना स्टोर्स जो अपने इलाके में ग्राहकों का फुटफॉल बढ़ाना चाहते हैं।",
          iconName: "ShoppingBag",
        },
        {
          id: "healthcare",
          name: "हेल्थकेयर व क्लिनिक्स",
          desc: "डॉक्टर, डेंटल क्लिनिक, पैथोलॉजी लैब और फिजियोथेरेपिस्ट जिन्हें भरोसेमंद मरीज अपॉइंटमेंट्स चाहिए।",
          iconName: "Activity",
        },
        {
          id: "education-coaching",
          name: "शिक्षा व कोचिंग सेंटर्स",
          desc: "कोचिंग संस्थान, ट्यूशन क्लासेस और स्किल ट्रेनिंग सेंटर्स जो नए बैच में छात्रों के एडमिशन चाहते हैं।",
          iconName: "GraduationCap",
        },
        {
          id: "professional-services",
          name: "प्रोफेशनल सर्विसेज",
          desc: "वकील, सीए, आर्किटेक्ट और कंसल्टेंट्स जो अपनी ब्रांड प्रतिष्ठा और बड़े क्लाइंट्स बनाना चाहते हैं।",
          iconName: "Briefcase",
        },
        {
          id: "local-service-providers",
          name: "लोकल सर्विस प्रोवाइडर्स",
          desc: "इवेंट प्लानर्स, सैलून, फोटोग्राफर और ऑटो गैरेज जो अपने शहर के सर्च पर पूरा कब्जा चाहते हैं।",
          iconName: "MapPin",
        },
        {
          id: "smb-enterprises",
          name: "लघु व मध्यम उद्योग (SMB)",
          desc: "मैन्युफैक्चरर्स, डीलर्स और सप्लायर्स जो आधुनिक बी2बी वेबसाइट और इंक्वायरी सिस्टम चाहते हैं।",
          iconName: "Building2",
        },
      ],
    },
    portfolio: {
      badge: "प्रदर्शनी आर्किटेक्चर",
      title: "डिजिटल विकास संरचनाएं",
      subtitle: "हमारे डिजाइन, फनल स्ट्रक्चर और कन्वर्जन इंजीनियरिंग को प्रदर्शित करने वाले संकल्पनात्मक केस स्टडीज।",
      demoNote: "इंटरैक्टिव डेमो केस स्टडीज — आर्किटेक्चर और परफॉर्मेंस मॉडल प्रदर्शित करते हुए",
      items: [
        {
          id: "demo-1",
          title: "एपेक्स होम केयर सिस्टम्स",
          category: "Google Ads + हाई-स्पीड लैंडिंग पेज",
          industry: "होम सर्विसेज",
          metrics: "60 दिनों में +142% ज्यादा कॉल्स",
          desc: "प्लमबिंग और एसी रिपेयर के लिए 0.6 सेकंड में खुलने वाला मोबाइल लैंडिंग पेज और सटीक लोकल गूगल सर्च कैंपेन।",
          isDemo: true,
          tags: ["गूगल ऐड्स", "वेब डेवलपमेंट", "कन्वर्जन UX"],
        },
        {
          id: "demo-2",
          title: "सैफरन लाउंज व बिस्ट्रो",
          category: "Google Maps ऑप्टिमाइजेशन + रिस्पॉन्सिव साइट",
          industry: "रेस्टोरेंट व कैफे",
          metrics: "Google Maps पर टॉप 3 रैंकिंग",
          desc: "गूगल बिजनेस प्रोफाइल का संपूर्ण कायाकल्प, जियो-टैग फोटोग्राफी और आसान मोबाइल रिजर्वेशन इंटरफेस।",
          isDemo: true,
          tags: ["गूगल बिजनेस प्रोफाइल", "लोकल SEO", "मोबाइल फर्स्ट"],
        },
        {
          id: "demo-3",
          title: "द्रोणा कोचिंग एकेडमी",
          category: "फुल डिजिटल ग्रोथ सूट",
          industry: "शिक्षा व कोचिंग",
          metrics: "+320 छात्र प्रवेश पूछताछ",
          desc: "स्थानीय अभिभावकों को आकर्षित करने वाले सर्च विज्ञापन, कोर्स विवरण पेज और व्हाट्सएप लीड ऑटोमेशन।",
          isDemo: true,
          tags: ["गूगल ऐड्स", "कोर्स पेजेस", "व्हाट्सएप ऑटोमेशन"],
        },
        {
          id: "demo-4",
          title: "निर्वाणा डेंटल व इम्प्लांट क्लिनिक",
          category: "लोकल SEO + अथॉरिटी वेबसाइट",
          industry: "हेल्थकेयर",
          metrics: "सीधे अपॉइंटमेंट कॉल्स में 2.4 गुना वृद्धि",
          desc: "साफ-सुथरी क्लिनिकल वेबसाइट, डॉक्टर प्रोफाइल, अपॉइंटमेंट स्कीमा और गूगल मैप्स पैक में शीर्ष स्थान।",
          isDemo: true,
          tags: ["लोकल SEO", "वेबसाइट डेवलपमेंट", "स्कीमा"],
        },
      ],
    },
    faq: {
      badge: "स्पष्ट उत्तर",
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "हमारे काम करने के तरीके, समय और परिणामों से जुड़े महत्वपूर्ण तथ्य।",
      items: [
        {
          question: "व्यापार साथी अन्य मार्केटिंग एजेंसियों से कैसे अलग है?",
          answer:
            "अधिकतर एजेंसियां सिर्फ लाइक्स और व्यूज दिखाती हैं जिससे कमाई नहीं बढ़ती। व्यापार साथी आपके सच्चे साथी के रूप में काम करता है, जिसका प्राथमिक ध्यान सिर्फ वास्तविक फोन कॉल्स, व्हाट्सएप संदेश और गंभीर ग्राहकों पर होता है।",
        },
        {
          question: "मेरे व्यापार को सबसे पहले किस सेवा से शुरुआत करनी चाहिए?",
          answer:
            "यदि आपको 2-3 दिनों में तुरंत ग्राहक कॉल्स चाहिए, तो गूगल ऐड्स और एक फास्ट लैंडिंग पेज सबसे तेज परिणाम देते हैं। यदि आपकी स्थानीय दुकान, क्लिनिक या रेस्टोरेंट है, तो गूगल मैप्स (GBP) सबसे पहली बुनियादी जरूरत है।",
        },
        {
          question: "परिणाम दिखने में कितना समय लगता है?",
          answer:
            "गूगल विज्ञापन शुरू होने के 2-3 दिनों में ही कॉल्स आने लगती हैं। गूगल बिजनेस प्रोफाइल की रैंकिंग 3 से 6 हफ्तों में मजबूत होती है, जबकि ऑर्गेनिक SEO 3 से 6 महीनों में स्थायी ग्राहक देने लगता है।",
        },
        {
          question: "क्या आपकी बनाई वेबसाइट्स मोबाइल पर अच्छी चलती हैं?",
          answer:
            "हमारी प्रत्येक वेबसाइट 100% मोबाइल-फर्स्ट होती है और 1 सेकंड से भी कम समय में खुलती है। चूंकि 80% से ज्यादा ग्राहक मोबाइल से खोजते हैं, हम त्वरित कॉल और व्हाट्सएप बटन प्रमुखता से लगाते हैं।",
        },
        {
          question: "क्या वेबसाइट और ऐड एकाउंट्स का मालिकाना हक मेरा होगा?",
          answer:
            "जी हां, 100%। आपका डोमेन, होस्टिंग, गूगल प्रोफाइल और गूगल ऐड एकाउंट पूरी तरह आपके नाम पर ही रहते हैं। हम पूरी पारदर्शिता में विश्वास करते हैं।",
        },
        {
          question: "आपका कार्यालय कहां है और संपर्क कैसे होगा?",
          answer:
            "हमारा कार्यालय गाजियाबाद, उत्तर प्रदेश में स्थित है। आप सीधे +91 7704841382 पर कॉल कर सकते हैं या व्हाट्सएप पर बात कर सकते हैं।",
        },
      ],
    },
    ctaBanner: {
      title: "क्या आप अपने व्यापार को डिजिटल ऊंचाइयों पर ले जाना चाहते हैं?",
      subtitle:
        "आइए चर्चा करें कि हम आपके व्यापार के लिए एक मजबूत डिजिटल कस्टमर सिस्टम कैसे तैयार कर सकते हैं।",
      primaryBtn: "मुफ्त बातचीत शुरू करें",
      secondaryBtn: "व्हाट्सएप पर संपर्क करें",
      phoneLabel: "सीधा फोन नंबर: +91 7704841382",
    },
    contactForm: {
      badge: "हमसे संपर्क करें",
      title: "ग्रोथ कंसल्टेशन का समय तय करें",
      subtitle:
        "अपने व्यापार की जानकारी साझा करें, हम आपके लिए एक अनुकूलित डिजिटल ग्रोथ रूपरेखा तैयार करेंगे।",
      fields: {
        name: "आपका पूरा नाम *",
        phone: "मोबाइल नंबर *",
        email: "ईमेल आईडी (वैकल्पिक)",
        business: "व्यापार / दुकान का नाम *",
        service: "आवश्यक मुख्य सेवा *",
        message: "अपने व्यापार के लक्ष्य और चुनौतियों के बारे में बताएं...",
        submit: "पूछताछ भेजें",
        submitting: "भेजा जा रहा है...",
        success:
          "धन्यवाद! आपकी पूछताछ प्राप्त हो गई है। हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।",
      },
    },
    footer: {
      tagline: "आपके व्यापार का डिजिटल साथी।",
      aboutText:
        "स्थानीय और उभरते व्यापारों को बाजार में दृश्यता, भरोसा और ग्राहकों की निरंतर श्रृंखला प्रदान करने वाला प्रीमियम डिजिटल पार्टनर।",
      quickLinks: "महत्वपूर्ण लिंक्स",
      servicesLabel: "मुख्य सेवाएं",
      contactLabel: "संपर्क सूत्र",
      operatingLocation: " गाजियाबाद, उत्तर प्रदेश, भारत",
      rights: "व्यापार साथी। सर्वाधिकार सुरक्षित।",
      whatsappChat: "व्हाट्सएप पर बात करें",
    },
  },
};
