'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

const translations = {
  en: {
    home: {
      hero: {
        title: "Artistic Resin By Komal",
        description: "Explore a unique collection of handcrafted resin art, from elegant home décor to beautiful personal accessories. Each piece is a one-of-a-kind creation, made with passion and precision.",
        button1: "Our Story",
        button2: "Our Collections"
      },
      video: {
        title: "Crafted with passion, poured with purpose",
        subtitle: "Resin art made to inspire"
      },
      delivery: {
        text: "Delivering Pan India"
      },
      pincode: {
        pincodePlaceholder: "Enter Pincode",
        cityPlaceholder: "Select City",
        button: "Check Availability",
        success: "We are happy to deliver in {{city}}!",
        cities: {
            Mumbai: "Mumbai",
            Delhi: "Delhi",
            Bangalore: "Bangalore",
            Jaipur: "Jaipur",
            Kolkata: "Kolkata"
        }
      },
      collection: {
        title: "Our Collection",
        filters: {
            AllProducts: "All Products",
            Jewelry: "Jewelry",
            HomeDecor: "Home Decor",
            CustomPieces: "Custom Pieces"
        }
      },
      gallery: {
        title: "My Resin Arts"
      },
      create: {
        title: "Watch Me Create",
        description: "See the magic happen! Watch a timelapse of a beautiful piece being created from start to finish."
      }
    },
    about: {
      subtitle: "The Artisan's Touch",
      title_prefix: "Hi, I'm ",
      title_name: "Komal",
      title_suffix: "",
      para1: "- the artist behind AK Artistic Resin. What started as a passion project has blossomed into a dedicated craft of creating beautiful resin art pieces.",
      para2: "Each creation is meticulously handcrafted with attention to detail, using high-quality materials and sustainable practices. My inspiration comes from the beauty of nature, abstract patterns, and the endless possibilities of resin as a medium.",
      feature1: "Unique, one-of-a-kind designs",
      feature2: "Eco-friendly materials & practices",
      feature3: "Made with love & attention to detail"
    },
    contact: {
      title: "Get In Touch",
      description: "Have questions about our products or interested in a custom piece? Reach out to us through any of these channels.",
      email: "Email",
      instagram: "Instagram",
      phone: "Phone"
    },
    footer: {
      shop: {
        title: "Shop Directly on Instagram",
        description: "Browse our latest collections, see behind-the-scenes, and purchase directly through Instagram DMs. Follow us for updates on new arrivals and exclusive offers!",
        button: "Visit Our Instagram Shop",
        note: "DM us on Instagram to purchase any product"
      },
      tagline: "Creating beautiful resin art pieces that inspire and delight.",
      quicklinks: {
        title: "Quick Links",
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact"
      },
      categories: {
        title: "Categories",
        jewelry: "Resin Jewelry",
        homedecor: "Home Decor",
        wallart: "Wall Art",
        customorders: "Custom Orders"
      },
      newsletter: {
        title: "Newsletter",
        description: "Subscribe for updates on new collections and exclusive offers.",
        placeholder: "Your email",
        button: "Subscribe"
      },
      copyright: "© {{year}} Artistic Resin By Komal. All rights reserved.",
      handcrafted: "Handcrafted with",
      ineverypiece: "in every piece"
    }
  },
  hi: {
    home: {
      hero: {
        title: "कोमल की कलात्मक रेज़िन",
        description: "हस्तनिर्मित रेज़िन कला का एक अनूठा संग्रह देखें, जिसमें सुंदर घर की सजावट से लेकर सुंदर व्यक्तिगत सामान शामिल हैं। प्रत्येक टुकड़ा जुनून और सटीकता के साथ बनाई गई एक अनूठी रचना है।",
        button1: "हमारी कहानी",
        button2: "हमारे संग्रह"
      },
      video: {
        title: "जुनून से गढ़ा, उद्देश्य से उंडेला गया",
        subtitle: "प्रेरित करने के लिए बनी रेज़िन कला"
      },
      delivery: {
        text: "पूरे भारत में डिलीवरी"
      },
      pincode: {
        pincodePlaceholder: "पिनकोड दर्ज करें",
        cityPlaceholder: "शहर चुनें",
        button: "उपलब्धता जांचें",
        success: "हमें {{city}} में डिलीवरी करने में खुशी है!",
        cities: {
            Mumbai: "मुंबई",
            Delhi: "दिल्ली",
            Bangalore: "बैंगलोर",
            Jaipur: "जयपुर",
            Kolkata: "कोलकाता"
        }
      },
      collection: {
        title: "हमारा संग्रह",
        filters: {
            AllProducts: "सभी उत्पाद",
            Jewelry: "आभूषण",
            HomeDecor: "घर की सजावट",
            CustomPieces: "कस्टम पीस"
        }
      },
      gallery: {
        title: "मेरी रेज़िन कला"
      },
      create: {
        title: "मुझे बनाते हुए देखें",
        description: "जादू होते देखें! शुरू से अंत तक बनाए जा रहे एक सुंदर टुकड़े का टाइमलैप्स देखें।"
      }
    },
    about: {
      subtitle: "कलाकार का स्पर्श",
      title_prefix: "नमस्ते, मैं ",
      title_name: "कोमल",
      title_suffix: " हूँ",
      para1: "- AK आर्टिस्टिक रेज़िन के पीछे की कलाकार। जो एक जुनून परियोजना के रूप में शुरू हुआ वह सुंदर रेज़िन कला के टुकड़े बनाने के एक समर्पित शिल्प में बदल गया है।",
      para2: "प्रत्येक रचना को उच्च-गुणवत्ता वाली सामग्री और टिकाऊ प्रथाओं का उपयोग करके विस्तार से सावधानीपूर्वक दस्तकारी की जाती है। मेरी प्रेरणा प्रकृति की सुंदरता, अमूर्त पैटर्न और एक माध्यम के रूप में रेज़िन की अनंत संभावनाओं से आती है।",
      feature1: "अद्वितीय, एक तरह का डिज़ाइन",
      feature2: "पर्यावरण के अनुकूल सामग्री और प्रथाएं",
      feature3: "प्यार और विस्तार पर ध्यान देने के साथ बनाया गया"
    },
    contact: {
      title: "संपर्क में रहें",
      description: "हमारे उत्पादों के बारे में प्रश्न हैं या एक कस्टम टुकड़े में रुचि रखते हैं? इन चैनलों में से किसी के माध्यम से हमसे संपर्क करें।",
      email: "ईमेल",
      instagram: "इंस्टाग्राम",
      phone: "फ़ोन"
    },
    footer: {
      shop: {
        title: "इंस्टाग्राम पर सीधे खरीदारी करें",
        description: "हमारे नवीनतम संग्रह ब्राउज़ करें, पर्दे के पीछे देखें, और सीधे इंस्टाग्राम डीएम के माध्यम से खरीदें। नए आगमन और विशेष प्रस्तावों पर अपडेट के लिए हमें फॉलो करें!",
        button: "हमारी इंस्टाग्राम दुकान पर जाएँ",
        note: "किसी भी उत्पाद को खरीदने के लिए हमें इंस्टाग्राम पर डीएम करें"
      },
      tagline: "सुंदर रेज़िन कला के टुकड़े बनाना जो प्रेरित और प्रसन्न करते हैं।",
      quicklinks: {
        title: "त्वरित सम्पक",
        home: "होम",
        products: "उत्पादों",
        about: "हमारे बारे में",
        contact: "संपर्क करें"
      },
      categories: {
        title: "श्रेणियाँ",
        jewelry: "रेज़िन आभूषण",
        homedecor: "घर की सजावट",
        wallart: "दीवार कला",
        customorders: "कस्टम आदेश"
      },
      newsletter: {
        title: "न्यूज़लेटर",
        description: "नए संग्रह और विशेष प्रस्तावों पर अपडेट के लिए सदस्यता लें।",
        placeholder: "आपका ईमेल",
        button: "सदस्यता लें"
      },
      copyright: "© {{year}} कोमल द्वारा कलात्मक रेज़िन। सर्वाधिकार सुरक्षित।",
      handcrafted: "हस्तनिर्मित",
      ineverypiece: "हर टुकड़े में"
    }
  },
  de: {
    home: {
      hero: {
        title: "Künstlerisches Harz von Komal",
        description: "Entdecken Sie eine einzigartige Sammlung handgefertigter Harzkunst, von eleganter Wohnkultur bis hin zu wunderschönen persönlichen Accessoires. Jedes Stück ist eine einzigartige Kreation, die mit Leidenschaft und Präzision hergestellt wurde.",
        button1: "Unsere Geschichte",
        button2: "Unsere Kollektionen"
      },
      video: {
        title: "Mit Leidenschaft gefertigt, mit Absicht gegossen",
        subtitle: "Harzkunst, die inspiriert"
      },
      delivery: {
        text: "Lieferung in ganz Indien"
      },
      pincode: {
        pincodePlaceholder: "Postleitzahl eingeben",
        cityPlaceholder: "Stadt auswählen",
        button: "Verfügbarkeit prüfen",
        success: "Wir liefern gerne in {{city}}!",
        cities: {
            Mumbai: "Mumbai",
            Delhi: "Delhi",
            Bangalore: "Bangalore",
            Jaipur: "Jaipur",
            Kolkata: "Kolkata"
        }
      },
      collection: {
        title: "Unsere Kollektion",
        filters: {
            AllProducts: "Alle Produkte",
            Jewelry: "Schmuck",
            HomeDecor: "Wohnkultur",
            CustomPieces: "Einzelanfertigungen"
        }
      },
      gallery: {
        title: "Meine Harzkünste"
      },
      create: {
        title: "Schau mir beim Schaffen zu",
        description: "Sehen Sie die Magie geschehen! Sehen Sie sich einen Zeitraffer an, wie ein wunderschönes Stück von Anfang bis Ende entsteht."
      }
    },
    about: {
      subtitle: "Die Note des Handwerkers",
      title_prefix: "Hallo, ich bin ",
      title_name: "Komal",
      title_suffix: "",
      para1: "- die Künstlerin hinter AK Artistic Resin. Was als Leidenschaftsprojekt begann, hat sich zu einem engagierten Handwerk entwickelt, bei dem wunderschöne Harzkunstwerke entstehen.",
      para2: "Jede Kreation wird sorgfältig von Hand und mit Liebe zum Detail gefertigt, wobei hochwertige Materialien und nachhaltige Praktiken verwendet werden. Meine Inspiration kommt von der Schönheit der Natur, abstrakten Mustern und den endlosen Möglichkeiten von Harz als Medium.",
      feature1: "Einzigartige, einmalige Designs",
      feature2: "Umweltfreundliche Materialien und Praktiken",
      feature3: "Mit Liebe und Liebe zum Detail hergestellt"
    },
    contact: {
      title: "In Kontakt kommen",
      description: "Haben Sie Fragen zu unseren Produkten oder interessieren Sie sich für ein individuelles Stück? Kontaktieren Sie uns über einen dieser Kanäle.",
      email: "Email",
      instagram: "Instagram",
      phone: "Telefon"
    },
    footer: {
      shop: {
        title: "Direkt auf Instagram einkaufen",
        description: "Durchsuchen Sie unsere neuesten Kollektionen, sehen Sie hinter die Kulissen und kaufen Sie direkt über Instagram DMs. Folgen Sie uns für Updates zu Neuankömmlingen und exklusiven Angeboten!",
        button: "Besuchen Sie unseren Instagram-Shop",
        note: "DM uns auf Instagram, um ein Produkt zu kaufen"
      },
      tagline: "Schöne Harzkunstwerke schaffen, die inspirieren und begeistern.",
      quicklinks: {
        title: "Schnelllinks",
        home: "Startseite",
        products: "Produkte",
        about: "Über uns",
        contact: "Kontakt"
      },
      categories: {
        title: "Kategorien",
        jewelry: "Harzschmuck",
        homedecor: "Wohnkultur",
        wallart: "Wandkunst",
        customorders: "Sonderanfertigungen"
      },
      newsletter: {
        title: "Newsletter",
        description: "Abonnieren Sie für Updates zu neuen Kollektionen und exklusiven Angeboten.",
        placeholder: "Deine E-Mail",
        button: "Abonnieren"
      },
      copyright: "© {{year}} Künstlerisches Harz von Komal. Alle Rechte vorbehalten.",
      handcrafted: "Handgefertigt mit",
      ineverypiece: "in jedem Stück"
    }
  },
  mrw: {
    home: {
      hero: {
        title: "कोमल री कलात्मक रेजिन",
        description: "हाथ सूं बणायोड़ी रेजिन कला रो एक अनूठो संग्रह देखो, जिणमें सुंदर घर री सजावट सूं ले'र खूबसूरत व्यक्तिगत सामान शामिल है। हर एक रचना जुनून अर सटीकता रे साथ बणायोड़ी एक अनूठी कलाकृति है।",
        button1: "म्हारी कहाणी",
        button2: "म्हारो संग्रह"
      },
      video: {
        title: "जुनून सूं बणायोड़ी, मकसद सूं ढाळी",
        subtitle: "प्रेरित करण वास्ते बणायोड़ी रेजिन कला"
      },
      delivery: {
        text: "पूरे भारत में डिलीवरी"
      },
      pincode: {
        pincodePlaceholder: "पिनकोड दर्ज करो",
        cityPlaceholder: "शहर चुणो",
        button: "उपलब्धता जांचो",
        success: "म्हने {{city}} में डिलीवरी करतां खुशी है!",
        cities: {
            Mumbai: "मुंबई",
            Delhi: "दिल्ली",
            Bangalore: "बैंगलोर",
            Jaipur: "जयपुर",
            Kolkata: "कोलकाता"
        }
      },
      collection: {
        title: "म्हारो संग्रह",
        filters: {
            AllProducts: "सारा उत्पाद",
            Jewelry: "गहणा",
            HomeDecor: "घर री सजावट",
            CustomPieces: "खास बणायोड़ा"
        }
      },
      gallery: {
        title: "म्हारी रेजिन कला"
      },
      create: {
        title: "मने बणावता देखो",
        description: "जादू होता देखो! शुरू सूं ले'र आखिर तक एक खूबसूरत कलाकृति ने बणता देखो।"
      }
    },
    about: {
      subtitle: "कलाकार रो स्पर्श",
      title_prefix: "राम राम, मैं ",
      title_name: "कोमल",
      title_suffix: " हूं",
      para1: "- एके आर्टिस्टिक रेजिन री कलाकार। जिको एक शौक रे रूप में शुरू हुयो हो, वो अब खूबसूरत रेजिन कलाकृतियां बणावण रो एक समर्पित शिल्प बण गयो है।",
      para2: "हर एक रचना ने बारीकी सूं, उच्च गुणवत्ता वाली सामग्री अर टिकाऊ तरीकां सूं हाथ सूं बणाई जावे है। म्हारी प्रेरणा प्रकृति री सुंदरता, अमूर्त पैटर्न अर रेजिन री अनंत संभावनावां सूं आवे है।",
      feature1: "अनूठा, एक-एक डिजाइन",
      feature2: "पर्यावरण-अनुकूल सामग्री और तरीका",
      feature3: "प्रेम अर बारीकी सूं बणायोड़ी"
    },
    contact: {
      title: "सम्पर्क करो",
      description: "म्हारे उत्पादां रे बारे में कोई सवाल है या कोई खास चीज बणवावण में रुचि है? इण तरीकां सूं म्हारे सूं संपर्क करो।",
      email: "ईमेल",
      instagram: "इंस्टाग्राम",
      phone: "फ़ोन"
    },
    footer: {
      shop: {
        title: "इंस्टाग्राम पर सीधा खरीदो",
        description: "म्हारो नयो संग्रह देखो, पर्दा रे पीछे री झलक देखो, अर सीधा इंस्टाग्राम डीएम के जरिए खरीदो। नया आगमनां अर खास पेशकशों री जानकारी वास्ते मने फॉलो करो!",
        button: "म्हारे इंस्टाग्राम दुकान पर पधारो",
        note: "कोई भी उत्पाद खरीदण वास्ते इंस्टाग्राम पर डीएम करो"
      },
      tagline: "सुंदर रेजिन कलाकृतियां बणावणी जिकी प्रेरित करे अर खुशी देवे।",
      quicklinks: {
        title: "त्वरित लिंक",
        home: "घर",
        products: "उत्पाद",
        about: "म्हारे बारे में",
        contact: "सम्पर्क"
      },
      categories: {
        title: "श्रेणियाँ",
        jewelry: "रेजिन रा गहणा",
        homedecor: "घर री सजावट",
        wallart: "दीवार कला",
        customorders: "खास ऑर्डर"
      },
      newsletter: {
        title: "न्यूज़लेटर",
        description: "नया संग्रहां अर खास पेशकशों री जानकारी वास्ते सब्सक्राइब करो।",
        placeholder: "थारो ईमेल",
        button: "सब्सक्राइब करो"
      },
      copyright: "© {{year}} कोमल री कलात्मक रेजिन। सर्वाधिकार सुरक्षित।",
      handcrafted: "हाथ सूं बणायोड़ी",
      ineverypiece: "हर एक रचना में"
    }
  }
};

type Language = keyof typeof translations;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, replacements: Record<string, string | number> = {}) => {
    const keys = key.split('.');
    
    // Get translation for current language
    let result: any = translations[language];
    for (const k of keys) {
      result = result?.[k];
    }

    // Fallback to English if not found
    if (result === undefined) {
      result = translations.en;
      for (const k of keys) {
        result = result?.[k];
      }
    }
    
    // If still not found, use the key itself. Otherwise, use the found value (even if it's an empty string).
    let text: any = result ?? key;

    // Perform replacements if the result is a string
    if (typeof text === 'string') {
      Object.keys(replacements).forEach(rKey => {
        text = text.replace(`{{${rKey}}}`, String(replacements[rKey]));
      });
    }

    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
