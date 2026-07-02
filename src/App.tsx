import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  User, 
  CheckCircle2, 
  Search, 
  Building2, 
  Droplet, 
  HeartPulse, 
  Sprout, 
  GraduationCap, 
  Wifi, 
  WifiOff, 
  Plus, 
  X, 
  Languages, 
  HelpCircle, 
  Info,
  Calendar,
  Compass,
  Navigation,
  SlidersHorizontal,
  ArrowUpDown,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Shield,
  Store,
  Baby,
  FileText,
  Hospital,
  School,
  Landmark,
  Waves,
  Wheat,
  ClipboardList,
  Stethoscope,
  Ambulance,
  FlaskConical,
  BookOpen,
  FileCheck2,
  Banknote,
  Home,
  Trees,
  BusFront,
  Scale,
  HandCoins,
  AlertTriangle,
  Copy,
  Share2,
  MessageCircle,
  Flag,
  ListChecks,
  Eye,
  Type,
  Siren,
  Filter
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { 
  INITIAL_SERVICES, 
  KERALA_DISTRICTS, 
  LOCALITIES_EN, 
  LOCALITIES_ML, 
  LOCALITIES_HI, 
  LOCALITIES_TE 
} from './data/services';
import { ServiceItem, ServiceTranslation } from './types';
import CategoryChart from './components/CategoryChart';

function DirectoryApp() {
  const { language, setLanguage, t, supportedLanguages } = useLanguage();
  
  const locStrings = {
    en: {
      locationHubTitle: "Location Filter Hub",
      districtLabel: "Select District",
      localityLabel: "Select Locality",
      allDistricts: "All Districts",
      allLocalities: "All Municipalities / Villages",
      nearMeBtn: "Simulate GPS / Locate Me",
      nearMeActiveDesc: "Location: Vaikom, Kottayam",
      radiusLabel: "Search Radius",
      sortByNearest: "Sort by Proximity"
    },
    ml: {
      locationHubTitle: "പ്രാദേശിക തിരച്ചിൽ",
      districtLabel: "ജില്ല തിരഞ്ഞെടുക്കുക",
      localityLabel: "സ്ഥലം തിരഞ്ഞെടുക്കുക",
      allDistricts: "എല്ലാ ജില്ലകളും (കേരളം മുഴുവൻ)",
      allLocalities: "എല്ലാ സ്ഥലങ്ങളും / വില്ലേജുകൾ",
      nearMeBtn: "എന്റെ സമീപത്തുള്ളവ കണ്ടെത്തുക (GPS)",
      nearMeActiveDesc: "നിങ്ങളുടെ സ്ഥാനം: വൈക്കം, കോട്ടയം",
      radiusLabel: "ചുറ്റളവ് പരിധി",
      sortByNearest: "അടുത്തുള്ളവ ആദ്യം കാണിക്കുക"
    },
    hi: {
      locationHubTitle: "स्थान फिल्टर केंद्र",
      districtLabel: "जिला चुनें",
      localityLabel: "स्थान / नगर चुनें",
      allDistricts: "सभी जिले",
      allLocalities: "सभी स्थान / गाँव",
      nearMeBtn: "जीपीएस सिमुलेशन / मेरे निकट",
      nearMeActiveDesc: "अनुकरण स्थान: वैकोम, कोट्टायम",
      radiusLabel: "खोज का दायरा",
      sortByNearest: "निकटतम पहले दिखाएं"
    },
    te: {
      locationHubTitle: "ప్రాంతీయ ఫిల్టర్",
      districtLabel: "జిల్లాను ఎంచుకోండి",
      localityLabel: "గ్రామం / నగరం ఎంచుకోండి",
      allDistricts: "అన్ని జిల్లాలు",
      allLocalities: "అన్ని ప్రాంతాలు",
      nearMeBtn: "నా సమీపంలో ఉన్నవి (GPS)",
      nearMeActiveDesc: "ప్రస్తుత స్థానం: వైకోమ్, కొట్టాయం",
      radiusLabel: "పరిధి దూరం",
      sortByNearest: "సమీపంలోనివి లోడ్ చేయి"
    }
  };

  const ls = locStrings[language as keyof typeof locStrings] || locStrings.en;

  const ui = {
    en: {
      emergency: "Emergency",
      services: "Services",
      map: "Map",
      suggest: "Suggest",
      profile: "Profile",
      reportWrongInfo: "Report wrong info",
      reportTitle: "Report incorrect service details",
      reportHint: "Tell local volunteers what needs correction.",
      reportPlaceholder: "Phone number is wrong, timing changed, location closed...",
      submitReport: "Submit report",
      documentChecklist: "Document checklist",
      actions: "Quick actions",
      copyPhone: "Copy phone",
      copyDetails: "Copy details",
      whatsapp: "WhatsApp",
      share: "Share",
      searchSuggestions: "Suggestions",
      emergencyIntro: "Fast access to urgent health, safety, and public support contacts.",
      noEmergency: "No emergency services found for these filters.",
      accessibility: "Accessibility",
      largeText: "Large text",
      highContrast: "High contrast",
      mapFilter: "Map filter"
    },
    ml: {
      emergency: "അടിയന്തിരം",
      services: "സേവനങ്ങൾ",
      map: "മാപ്പ്",
      suggest: "നിർദ്ദേശം",
      profile: "പ്രൊഫൈൽ",
      reportWrongInfo: "തെറ്റായ വിവരം റിപ്പോർട്ട് ചെയ്യുക",
      reportTitle: "സേവന വിവര തിരുത്തൽ റിപ്പോർട്ട്",
      reportHint: "തിരുത്തേണ്ട കാര്യം സന്നദ്ധപ്രവർത്തകരെ അറിയിക്കുക.",
      reportPlaceholder: "ഫോൺ നമ്പർ തെറ്റാണ്, സമയം മാറി, സ്ഥലം അടഞ്ഞു...",
      submitReport: "റിപ്പോർട്ട് സമർപ്പിക്കുക",
      documentChecklist: "രേഖാ പട്ടിക",
      actions: "വേഗത്തിലുള്ള പ്രവർത്തനങ്ങൾ",
      copyPhone: "ഫോൺ പകർത്തുക",
      copyDetails: "വിവരം പകർത്തുക",
      whatsapp: "വാട്ട്സ്ആപ്പ്",
      share: "പങ്കിടുക",
      searchSuggestions: "നിർദ്ദേശങ്ങൾ",
      emergencyIntro: "ആരോഗ്യം, സുരക്ഷ, പൊതു സഹായം എന്നിവയ്ക്കുള്ള അടിയന്തിര ബന്ധങ്ങൾ.",
      noEmergency: "ഈ ഫിൽട്ടറിൽ അടിയന്തിര സേവനങ്ങളില്ല.",
      accessibility: "അക്സസിബിലിറ്റി",
      largeText: "വലിയ ടെക്സ്റ്റ്",
      highContrast: "ഹൈ കോൺട്രാസ്റ്റ്",
      mapFilter: "മാപ്പ് ഫിൽട്ടർ"
    },
    hi: {
      emergency: "आपातकाल",
      services: "सेवाएं",
      map: "मैप",
      suggest: "सुझाव",
      profile: "प्रोफाइल",
      reportWrongInfo: "गलत जानकारी रिपोर्ट करें",
      reportTitle: "सेवा विवरण सुधार रिपोर्ट",
      reportHint: "स्थानीय स्वयंसेवकों को बताएं क्या सुधारना है।",
      reportPlaceholder: "फोन नंबर गलत है, समय बदला है, स्थान बंद है...",
      submitReport: "रिपोर्ट भेजें",
      documentChecklist: "दस्तावेज सूची",
      actions: "त्वरित क्रियाएं",
      copyPhone: "फोन कॉपी करें",
      copyDetails: "विवरण कॉपी करें",
      whatsapp: "WhatsApp",
      share: "शेयर करें",
      searchSuggestions: "सुझाव",
      emergencyIntro: "स्वास्थ्य, सुरक्षा और सार्वजनिक सहायता के लिए तेज संपर्क।",
      noEmergency: "इन फिल्टरों में आपातकालीन सेवाएं नहीं मिलीं।",
      accessibility: "सुलभता",
      largeText: "बड़ा टेक्स्ट",
      highContrast: "उच्च कंट्रास्ट",
      mapFilter: "मैप फिल्टर"
    },
    te: {
      emergency: "అత్యవసరం",
      services: "సేవలు",
      map: "మ్యాప్",
      suggest: "సూచించండి",
      profile: "ప్రొఫైల్",
      reportWrongInfo: "తప్పు సమాచారాన్ని నివేదించండి",
      reportTitle: "సేవా వివరాల సవరణ నివేదిక",
      reportHint: "ఏది సరిచేయాలో స్థానిక వాలంటీర్లకు తెలియజేయండి.",
      reportPlaceholder: "ఫోన్ నంబర్ తప్పు, సమయం మారింది, స్థలం మూసివేశారు...",
      submitReport: "నివేదిక పంపండి",
      documentChecklist: "పత్రాల జాబితా",
      actions: "త్వరిత చర్యలు",
      copyPhone: "ఫోన్ కాపీ",
      copyDetails: "వివరాలు కాపీ",
      whatsapp: "WhatsApp",
      share: "పంచుకోండి",
      searchSuggestions: "సూచనలు",
      emergencyIntro: "ఆరోగ్యం, భద్రత, ప్రజా సహాయం కోసం వేగవంతమైన సంప్రదింపులు.",
      noEmergency: "ఈ ఫిల్టర్లలో అత్యవసర సేవలు లేవు.",
      accessibility: "యాక్సెసిబిలిటీ",
      largeText: "పెద్ద టెక్స్ట్",
      highContrast: "హై కాంట్రాస్ట్",
      mapFilter: "మ్యాప్ ఫిల్టర్"
    },
    kn: {
      emergency: "ತುರ್ತು",
      services: "ಸೇವೆಗಳು",
      map: "ನಕ್ಷೆ",
      suggest: "ಸೂಚಿಸಿ",
      profile: "ಪ್ರೊಫೈಲ್",
      reportWrongInfo: "ತಪ್ಪು ಮಾಹಿತಿಯನ್ನು ವರದಿ ಮಾಡಿ",
      reportTitle: "ತಪ್ಪಾದ ಸೇವಾ ವಿವರ ವರದಿ",
      reportHint: "ಯಾವ ವಿವರ ತಿದ್ದಬೇಕು ಎಂದು ಸ್ಥಳೀಯ ಸ್ವಯಂಸೇವಕರಿಗೆ ತಿಳಿಸಿ.",
      reportPlaceholder: "ಫೋನ್ ಸಂಖ್ಯೆ ತಪ್ಪಾಗಿದೆ, ಸಮಯ ಬದಲಾಗಿದೆ, ಸ್ಥಳ ಮುಚ್ಚಿದೆ...",
      submitReport: "ವರದಿ ಕಳುಹಿಸಿ",
      documentChecklist: "ದಾಖಲೆಗಳ ಪಟ್ಟಿ",
      actions: "ತ್ವರಿತ ಕ್ರಮಗಳು",
      copyPhone: "ಫೋನ್ ನಕಲಿಸಿ",
      copyDetails: "ವಿವರ ನಕಲಿಸಿ",
      whatsapp: "WhatsApp",
      share: "ಹಂಚಿ",
      searchSuggestions: "ಸಲಹೆಗಳು",
      emergencyIntro: "ಆರೋಗ್ಯ, ಭದ್ರತೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಹಾಯಕ್ಕಾಗಿ ತುರ್ತು ಸಂಪರ್ಕಗಳು.",
      noEmergency: "ಈ ಫಿಲ್ಟರ್‌ಗಳಲ್ಲಿ ತುರ್ತು ಸೇವೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
      accessibility: "ಪ್ರವೇಶಯೋಗ್ಯತೆ",
      largeText: "ದೊಡ್ಡ ಪಠ್ಯ",
      highContrast: "ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್",
      mapFilter: "ನಕ್ಷೆ ಫಿಲ್ಟರ್"
    }
  }[language as 'en' | 'ml' | 'hi' | 'te' | 'kn'] || {
    emergency: "Emergency",
    services: "Services",
    map: "Map",
    suggest: "Suggest",
    profile: "Profile",
    reportWrongInfo: "Report wrong info",
    reportTitle: "Report incorrect service details",
    reportHint: "Tell local volunteers what needs correction.",
    reportPlaceholder: "Phone number is wrong, timing changed, location closed...",
    submitReport: "Submit report",
    documentChecklist: "Document checklist",
    actions: "Quick actions",
    copyPhone: "Copy phone",
    copyDetails: "Copy details",
    whatsapp: "WhatsApp",
    share: "Share",
    searchSuggestions: "Suggestions",
    emergencyIntro: "Fast access to urgent health, safety, and public support contacts.",
    noEmergency: "No emergency services found for these filters.",
    accessibility: "Accessibility",
    largeText: "Large text",
    highContrast: "High contrast",
    mapFilter: "Map filter"
  };
  
  // Tab controller state: 'services' | 'emergency' | 'map' | 'suggest' | 'profile'
  const [currentTab, setCurrentTab] = useState<'services' | 'emergency' | 'map' | 'suggest' | 'profile'>('services');

  // Offline access state
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  
  // Category state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mapCategoryFilter, setMapCategoryFilter] = useState<string>('all');
  
  // Location and proximity states (defaulted to Kozhikode / Mukkali)
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Kozhikode');
  const [selectedLocality, setSelectedLocality] = useState<string>('Mukkali');
  const [isNearMeActive, setIsNearMeActive] = useState<boolean>(false);
  const [nearMeDistance, setNearMeDistance] = useState<number>(30); // max radius filter
  const [sortByProximity, setSortByProximity] = useState<boolean>(false);

  // Load More state for performance optimization
  const [visibleCount, setVisibleCount] = useState<number>(50);
  const [reportService, setReportService] = useState<ServiceItem | null>(null);
  const [reportText, setReportText] = useState('');
  const [isLargeText, setIsLargeText] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Reset pagination when filters change to avoid unnecessary rendering overhead
  useEffect(() => {
    setVisibleCount(50);
  }, [searchQuery, selectedCategory, selectedDistrict, selectedLocality, isNearMeActive, sortByProximity]);

  // Deterministic proximity distance calculator (simulates real GPS coordinates mapping but operates purely offline)
  const getSimulatedDistance = (service: ServiceItem): number => {
    if (service.id === 'serv-m1') return 1.2;
    if (service.id === 'serv-m2') return 0.4;
    if (service.id === 'serv-m3') return 2.8;
    if (service.id === 'serv-m4') return 0.9;
    if (service.id === 'serv-m5') return 1.7;
    if (service.id === 'serv-m6') return 0.6;

    // Generate a quick stable hash from service.id
    let hash = 0;
    const idStr = service.id || '';
    for (let j = 0; j < idStr.length; j++) {
      hash = idStr.charCodeAt(j) + ((hash << 5) - hash);
    }
    const noise = Math.abs(hash % 10) / 10; // 0.0 to 0.9

    // Check if the service location matches current simulated client position (Vaikom, Kottayam)
    const isSameDistrict = service.districtName === "Kottayam";
    const isSameLocality = service.localityName === "Vaikom";

    if (isSameDistrict && isSameLocality) {
      return Math.round((0.5 + noise * 1.5) * 10) / 10; // 0.5km to 2.0km
    } else if (isSameDistrict) {
      const idx = Math.abs(hash % 12) + 3; // 3 to 14 km
      return Math.round((idx + noise) * 10) / 10;
    } else {
      // Approximate map distance from Kottayam to other Kerala districts
      const distMapping: Record<string, number> = {
        "Alappuzha": 34,
        "Ernakulam": 42,
        "Idukki": 74,
        "Pathanamthitta": 66,
        "Kollam": 112,
        "Thrissur": 122,
        "Thiruvananthapuram": 174,
        "Palakkad": 182,
        "Malappuram": 224,
        "Kozhikode": 268,
        "Wayanad": 322,
        "Kannur": 354,
        "Kasaragod": 435
      };
      
      const baseDist = distMapping[service.districtName || ''] || 160;
      return Math.round((baseDist + noise * 12) * 10) / 10;
    }
  };
  
  // Services state with offline-first persistence
  const [services, setServices] = useState<ServiceItem[]>([]);
  
  // Modal state
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [detailPreviewLang, setDetailPreviewLang] = useState<'en' | 'hi' | 'te' | 'ml' | 'kn' | null>(null);

  // Kerala map interactive zoom and pan states
  const [mapZoom, setMapZoom] = useState<number>(1);
  const [mapPan, setMapPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMapDragging, setIsMapDragging] = useState<boolean>(false);
  const [mapDragStart, setMapDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedDetailService) {
      setMapZoom(1);
      setMapPan({ x: 0, y: 0 });
      setIsMapDragging(false);
    }
  }, [selectedDetailService]);

  // Helper functions for rich detail view
  const getServiceHistory = (service: ServiceItem): string[] => {
    const trans = service.translations[language] || service.translations['en'];
    if (trans.history && trans.history.length > 0) {
      return trans.history;
    }

    switch (service.categoryKey) {
      case 'health':
        switch (language) {
          case 'hi':
            return [
              "24 घंटे पहले: प्राथमिक टीकाकरण स्टॉक और बाल पूरक भोजन आपूर्ति सत्यापित किया गया।",
              "3 दिन पहले: चिकित्सा अधिकारी द्वारा प्राथमिक चिकित्सा किट स्टॉक का पुन: निरीक्षण किया गया।",
              "1 सप्ताह पहले: सौर ऊर्जा द्वारा संचालित टीका प्रशीतन बैटरी का परीक्षण पूर्ण हुआ।"
            ];
          case 'te':
            return [
              "24 గంటల క్రితం: శిశు నిరోధక టీకాలు మరియు ప్రాథమిక ఆరోగ్య మందుల నిల్వ ధృవీకరించబడింది.",
              "3 రోజుల క్రితం: ఆరోగ్య బోర్డు అధికారి ద్వారా ప్రథమ చికిత్స మందుల పునఃస్థాపన జరిగింది.",
              "1 వారం క్రితం: వ్యాక్సిన్ నిల్వ సోలార్ రిఫ్రిజిరేటర్ బ్యాటరీలు విజయవంతంగా పనిచేస్తున్నాయని నివేదించబడింది."
            ];
          case 'ml':
            return [
              "24 മണിക്കൂർ മുൻപ്: കുട്ടികൾക്കുള്ള കുത്തിവെപ്പ് മരുന്നുകളുടെ ലഭ്യത പരിശോധിച്ചുറപ്പാക്കി.",
              "3 ദിവസം മുൻപ്: സുരക്ഷാ മാനദണ്ഡങ്ങൾ മെഡിക്കൽ ഓഫീസർ പരിശോധിച്ച് സാക്ഷ്യപ്പെടുത്തി.",
              "1 ആഴ്‌ച മുൻപ്: വാക്സിൻ കേടുകൂടാതെ സൂക്ഷിക്കാനുള്ള സോളാർ റഫ്രിജറേറ്റർ പ്രവർത്തനം പരിശോധിച്ചു."
            ];
          default:
            return [
              "24 hours ago: Child immunization card inventories and essential cold-chain vaccine checked.",
              "3 days ago: Primary first-aid boxes and trauma bandages cargo verified by District Health Desk.",
              "1 week ago: Micro-solar back-up battery and vaccine cabinet temperature log validated."
            ];
        }
      case 'water':
        switch (language) {
          case 'hi':
            return [
              "12 घंटे पहले: बोरवेल संचालन का परीक्षण और टीडीएस पानी की गुणवत्ता की जांच सफल रही।",
              "2 दिन पहले: आरओ निस्पंदन झिल्ली (आरओ मेम्ब्रेन) का बैकवाश चक्र पूरा किया गया।",
              "1 सप्ताह पहले: ग्राम जल समिति द्वारा ओवरहेड टैंक स्वच्छता का ऑडिट सफल रहा।"
            ];
          case 'te':
            return [
              "12 గంటల క్రితం: నీటి నాణ్యత పరీక్ష (TDS స్థాయి) విజయవంతంగా ధృవీకరించబడింది.",
              "2 రోజుల క్రితం: ఫిల్టర్ ప్లాంట్ ఆర్.ఓ మెంబ్రేన్ విజయవంతంగా క్లీన్ చేయబడింది.",
              "1 వారం క్రితం: గ్రామ నీటి కమిటీ సభ్యుల సమక్షంలో ట్యాంక్ క్లోరినేషన్ ఆడిట్ చేయబడింది."
            ];
          case 'ml':
            return [
              "12 മണിക്കൂർ മുൻപ്: കുടിവെള്ളത്തിന്റെ ശുദ്ധി അളക്കുന്ന ടിഡിഎസ് പരിശോധന പൂർത്തിയാക്കി.",
              "2 ദിവസം മുൻപ്: റിവേഴ്‌സ് ഓസ്മോസിസ് (RO) പ്ലാന്റിലെ ഫിൽട്ടറുകൾ വൃത്തിയാക്കി.",
              "1 ആഴ്‌ച മുൻപ്: വാട്ടർമ്മിറ്റിയുടെ ആഭിമുഖ്യത്തിൽ ഓവർഹെഡ് ടാങ്ക് ക്ലോറിനേഷൻ പൂർത്തിയാക്കി."
            ];
          default:
            return [
              "12 hours ago: Hourly borewell outflow rate and water TDS (turbidity) levels validated.",
              "2 days ago: Reverse osmosis filtration filtration membrane clean backwash cycle executed.",
              "1 week ago: Overhead distribution steel tank chlorination audited and certified safe."
            ];
        }
      case 'agriculture':
        switch (language) {
          case 'hi':
            return [
              "आज: कल्याणसोना उच्च-गुणवत्ता बीज स्टॉक के बफर का निरीक्षण किया गया।",
              "3 दिन पहले: सहकारी जैव-उर्वरक की नई खेप डिपो में प्राप्त हुई।",
              "1 सप्ताह पहले: मृदा परीक्षण डिजिटल रीडर का अंशांकन और सत्यापन पूर्ण कंप्यूटर अपडेट के साथ पूरा।"
            ];
          case 'te':
            return [
              "ఈరోజు: లభ్యతలో ఉన్న మేలురకం విత్తనాల సంచి నిల్వలను తనిఖీ చేశారు.",
              "3 రోజుల క్రితం: సహకార సేంద్రీయ ఎరువుల సప్లై విజయవంతంగా డిపోకు చేరింది.",
              "1 వారం క్రితం: సరికొత్త డిజిటల్ నేల పరీక్ష పరికరం ధృవీకరించబడింది."
            ];
          case 'ml':
            return [
              "ഇന്ന്: കർഷകർക്കുള്ള സബ്‌സിഡി വളങ്ങളുടെയും വിത്തു വിതരണ ശൃംഖലയുടെയും സ്റ്റോക്ക് പരിശോധിച്ചു.",
              "3 ദിവസം മുൻപ്: ജൈവ വളങ്ങളുടെയും തെങ്ങിൻ തൈകളുടെയും പുതിയ ബാച്ച് ഓഫീസിൽ എത്തിച്ചു.",
              "1 ആഴ്‌ച മുൻപ്: മണ്ണ് പരിശോധനാ വിഭാഗത്തിലെ ശാസ്ത്രീയ ക്യാലിബ്രേഷൻ വിജയകരമായി പൂർത്തിയാക്കി."
            ];
          default:
            return [
              "Today: Certified high-yield wheat (Kalyansona) seed stock balance verified.",
              "3 days ago: Liquid bio-fertilizer supply freight registered and stocked into warehouse.",
              "1 week ago: Soil testing electronic calibration probe benchmark set."
            ];
        }
      case 'education':
        switch (language) {
          case 'hi':
            return [
              "कल: बच्चों के दैनिक मध्याह्न पौष्टिक भोजन की स्वच्छता मंजूरी प्रमाणित हुई।",
              "4 दिन पहले: ई-लर्निंग कंप्यूटर लैब के सौर बैटरी इनवर्टर सर्विसिंग की गई।",
              "2 सप्ताह पहले: प्राथमिक शिक्षा बोर्ड द्वारा नई पाठ्यपुस्तकों का नि: शुल्क वितरण संपन्न।"
            ];
          case 'te':
            return [
              "నిన్న: మధ్యాహ్న భోజన పథకంలో ప్రతి విద్యార్థికి విటమిన్లు కలిగిన పౌష్టికాహారం అందించబడుతుంది.",
              "4 రోజుల క్రితం: ఈ-లెర్నింగ్ రూమ్ సోలార్ పవర్ ఇన్వర్టర్ బ్యాటరీ సర్వీసింగ్ చేయబడింది.",
              "2 వారాల క్రితం: ప్రాథమిక విద్యా మండలి వారి పుస్తకాల ఉచిత పంపిణీ ఆడిట్ పూర్తయింది."
            ];
          case 'ml':
            return [
              "ഇന്നലെ: ഉച്ചഭക്ഷണ പദ്ധതിയിലെ (സൗജന്യ ഉണ്ണ്) ശുചിത്വവും സുരക്ഷിതത്വവും ഉറപ്പാക്കി.",
              "4 ദിവസം മുൻപ്: ഐ.ടി കമ്പ്യൂട്ടർ ക്ലാസ്റൂമിലെ യുപിഎസ് ബാറ്ററി ബാക്കപ്പുകൾ സർവീസ് ചെയ്തു.",
              "2 ആഴ്‌ച മുൻപ്: സംസ്ഥാന വിദ്യാഭ്യാസ ബോർഡിന്റെ പുതിയ പാഠപുസ്തകങ്ങളുടെ വിതരണം പൂർത്തിയാക്കി."
            ];
          default:
            return [
              "Yesterday: Daily Mid-Day Meal nutrition safety & hygiene audit clearance standard granted.",
              "4 days ago: Computer lab e-classroom solar storage inverter batteries fully serviced.",
              "2 weeks ago: Free primary textbook library stock replenished and logged."
            ];
        }
      default: // government
        switch (language) {
          case 'hi':
            return [
              "कल: जन शिकायत पुस्तिका का डिजिटलीकरण किया गया और ऑनलाइन पोर्टल पर सिंक किया गया।",
              "3 दिन पहले: पंचायत विकास कोष खर्च रिपोर्ट बोर्ड पर सार्वजनिक रूप से चस्पा की गई।",
              "1 सप्ताह पहले: नवनिर्वाचित उपग्राम समिति सदस्यों की बैठक आयोजित और मिनट बुक पर हस्ताक्षर हुए।"
            ];
          case 'te':
            return [
              "నిన్న: ప్రజా ఫిర్యాదుల రిజిస్టర్ డిజిటలైజ్ చేయబడి ప్రభుత్వ వెబ్‌సైట్‌కు పంపించబడింది.",
              "3 రోజుల క్రితం: கிராம பஞ்சായతీ అభివృద్ధి నిధుల ఖర్చుల పత్రాలను బోర్డుపై ప్రదర్శించారు.",
              "1 వారం క్రితం: పంచాయతీ సమితి సర్పంచ్ సమక్షంలో జరిగిన ప్రజా తీర్మానం నమోదు చేయబడింది."
            ];
          case 'ml':
            return [
              "ഇന്നലെ: തദ്ദേശ പൊതുപരാതി പരിഹാര സെല്ലിലെ അപേക്ഷകൾ പഞ്ചായത്ത് വെബ് പോർട്ടലിലേക്ക് സമന്വയിപ്പിച്ചു.",
              "3 ദിവസം മുൻപ്: സാമ്പത്തിക വികസന ഫണ്ടുകളുടെ ചിലവ് അവലോകന റിപ്പോർട്ട് നോട്ടീസ് ബോർഡിൽ പ്രസിദ്ധീകരിച്ചു.",
              "1 ആഴ്‌ച മുൻപ്: പഞ്ചായത്ത് ജനപ്രതിനിധികളുടെ അവലോകന യോഗം തൊഴിലുറപ്പ് പദ്ധതി കാര്യക്ഷമത വിലയിരുത്തി."
            ];
          default:
            return [
              "Yesterday: Public grievance log countersigned and transmitted to district portal via cellular sync.",
              "3 days ago: Village development funds balance ledger posted on community notice board.",
              "1 week ago: Elected Ward Council session logged and birth certificates countersigned."
            ];
        }
    }
  };

  const getServiceGuidelines = (service: ServiceItem): string => {
    const trans = service.translations[language] || service.translations['en'];
    if (trans.volunteerNotesDetail) {
      return trans.volunteerNotesDetail;
    }

    switch (service.categoryKey) {
      case 'health':
        switch (language) {
          case 'hi':
            return "सिस्टर आनंदी बाई उप-केंद्र परिसर के ही बगल में निवास करती हैं। रात के आपातकालीन प्रसव मामलों या गंभीर चोटों के लिए, सीधे उनके निवास के द्वार पर दस्तक दें। नियमित टीकाकरण सत्र हर सोमवार और गुरुवार को आयोजित होते हैं। कृपया बच्चे का पुराना टीकाकरण मातृ कार्ड साथ लाना न भूलें।";
          case 'te':
            return "సిస్టర్ ఆనంది బాయి ఆరోగ్య కేంద్రం ఆవరణలోనే నివసిస్తుంటారు. రాత్రి వేళ అత్యవసర ప్రసవాలు లేదా తీవ్రమైన గాయాలు వంటి విషయాల్లో హెడ్ క్వార్టర్ తలుపును నేరుగా సంప్రదించవచ్చు. సాధారణ పోలియో డ్రాప్స్ మరియు పిల్లల టీకాలు ప్రతి సోమవారం మరియు గురువారం ఉదయం నిర్వహిస్తారు. శిశువు గులాబీ కార్డు తప్పనిసరిగా తీసుకురావాలి.";
          case 'ml':
            return "ഹെൽത്ത് നേഴ്‌സ് സിസ്റ്റർ മേരി ജോസഫ് ആശുപത്രി വളപ്പിൽ തന്നെയാണ് താമസിക്കുന്നത്. രാത്രിയിൽ അടിയന്തിര പ്രസവ ആവശ്യങ്ങൾക്കോ കഠിനമായ പരിക്കുകൾക്കോ വേണ്ടി കോട്ടേഴ്‌സ് കോളിംഗ് ബെൽ ഉപയോഗിക്കാവുന്നതാണ്. കുട്ടികൾക്കുള്ള കുത്തിവെപ്പുകൾ എല്ലാ തിങ്കളാഴ്ചയും വ്യാഴാഴ്ചയും രാവിലെയാണ്. കുഞ്ഞിന്റെ ഹെൽത്ത് കാർഡ് മറക്കാതെ കൊണ്ടുവരുക.";
          default:
            return "Nurse Midwife Sister Anandi Bai resides directly adjacent to the clinic precinct. For emergency obstetrics or severe injury protocols during local off-hours, knock on the side residence buzzer instead of front gate lock. Regular immunizations run every Monday and Thursday morning. Please remember to bring the child's pink health verification card.";
        }
      case 'water':
        switch (language) {
          case 'hi':
            return "प्रत्येक परिवार टोकन पर प्रतिदिन अधिकतम 20 लीटर पीने का पानी सीमित है। आरओ पानी के 5 रुपये वाले सिक्के सीधे राजू कुर्मी से पहले खरीद लें। कृपया कतार में खड़े होने से पहले अपने कनिस्तर बर्तनों को अच्छी तरह से सैनिटाइज-धो लें।";
          case 'te':
            return "నీటి ఎద్దడి దృష్ట్యా ప్రతి కుటుంబానికి ఒక రోజుకు గరిష్టంగా 20 లీటర్ల మంచినీరు మాత్రమే పంపిణీ చేయబడుతుంది. లైన్ లో నిలబడడానికి ముందే 5 రూపాయల ఆర్.ఓ కాయిన్‌ని రాజు కుర్మి వద్ద కొనుగోలు చేయాలి. దయచేసి శుభ్రపరిచిన పాత్రలతో మాత్రమే లైన్ లో నిలబడండి.";
          case 'ml':
            return "കുടിവെള്ള ക്ഷാമം ഉള്ള സമയങ്ങളിൽ ഓരോ കുടുംബത്തിനും പ്രതിദിനം പരമാവധി 20 ലിറ്റർ വെള്ളം മാത്രമായി പരിമിതപ്പെടുത്തിയിരിക്കുന്നു. ക്യൂ നിൽക്കുന്നതിന് മുൻപ് തന്നെ വോലന്റീയർ ബാലൻ കെ.യിൽ നിന്നും ജലനിധി ടോക്കൺ വാങ്ങിച്ചിരിക്കേണ്ടതാണ്. വൃത്തിയുള്ള പാത്രങ്ങൾ മാത്രം ഉപയോഗിക്കുക.";
          default:
            return "In periods of severe dry local spells, consumption output is strictly capped at 20 Litres per day per household token. Purchase 5-Rupee RO coins directly from Raju Kurmi before queuing up at filtration tanks. Clean-sanitized and chemical-free containers only.";
        }
      case 'agriculture':
        switch (language) {
          case 'hi':
            return "सहकारी डिपो दर पर कृषि सब्सिडी सामग्री का लाभ उठाने के लिए मूल किसान विशिष्ट आईडी कार्ड (जैसे पीएम-किसान या राज्य पासबुक प्रतिलिपि) प्रस्तुत करना अनिवार्य है। कृषि जुताई वाली ट्रैक्टर मशीनरी बुकिंग न्यूनतम 48 घंटे पहले डिपो प्रबंधक श्री महेंद्र प्रसाद के पास दर्ज की जानी चाहिए।";
          case 'te':
            return "సబ్సిడీతో కూడిన వ్యవసాయ విత్తనాలు మరియు రసాయనాలు కొనుగోలు చేయుటకు మీ వద్ద రైతు బంధు లేదా పిఎమ్ కిసాన్ గుర్తింపు పత్రం తప్పనిసరిగా ఉండాలి. ట్రాక్టర్ అద్దె గంటల కొరకు కనీసం 48 గంటల ముందే డిపో మేనేజర్ శ్రీ మహేంద్ర ప్రసాద్ వద్ద బుకింగ్ చేసుకోవాలి.";
          case 'ml':
            return "സബ്‌സിഡി നിരക്കിലുള്ള വിത്തുകളും വളങ്ങളും ലഭിക്കുന്നതിനായി കർഷകർ തങ്ങളുടെ ഫാർമർ ഐഡി കാർഡോ റേഷൻ കാർഡോ കൃഷിഭവൻ കൗണ്ടറിൽ സമർപ്പിക്കേണ്ടതാണ്. വലിയ ട്രാക്ടറുകൾ തുടങ്ങിയ കൃഷി ഉപകരണങ്ങൾ വാടകയ്ക്ക് എടുക്കുന്നതിനായി അഡ്വാンス ബുക്കിങ് കുറഞ്ഞത് 48 മണിക്കൂർ മുൻപെങ്കിലും കൃഷി ഓഫീസർ വഴി ചെയ്തിരിക്കണം.";
          default:
            return "To utilize subsidized cooperative farm materials, presentation of your official Farmer Unique Registration (PM-KISAN status or State Land Record Booklet) is mandatory at the checkout counter. Agricultural heavy till equipment hires must be reserved minimum 48 hours in advance in ledger book of Depot Manager.";
        }
      case 'education':
        switch (language) {
          case 'hi':
            return "स्कूल दोपहर के भोजन कार्यक्रम के तहत बच्चों को रोज़ाना ताजा आहार प्रदान करता है। अभिभावकों से अनुरोध है कि वे हर तिमाही बैठक में बच्चों की सीखने के प्रति सहमति फॉर्म जमा करें। सरकारी छात्रवृत्तियों के आवेदन के लिए आधार कार्ड और भामाशाह आईडी की प्रति प्रधानाध्यापिका के पास जमा करें।";
          case 'te':
            return "మధ్యాహ్న భోజన పథకంలో ప్రతి విద్యార్థికి విటమిన్లు కలిగిన పౌష్టికాహారం అందించబడుతుంది. ప్రభుత్వ ఉచిత దుస్తులు మరియు స్కాలర్‌షిప్ దరఖాస్తుల కొరకు సంబంధిత కుల మరియు ఆదాయ ధృవీకరణ పత్రాలను ప్రధానోపాధ్యాయురాలైన సాల్టెడ్ కమలమ్మ గారి వద్ద సమర్పించాలి.";
          case 'ml':
            return "സ്കൂളിലെ കുട്ടികൾക്കുള്ള സൗജന്യ ഉച്ചഭക്ഷണ പദ്ധതി ദിവസവും കൃത്യമായി നടപ്പിലാക്കുന്നുണ്ട്. കുട്ടികളുടെ പഠന പുരോഗതി അവലോകനം ചെയ്യുന്നതിനായുള്ള രക്ഷിതാക്കളുടെ യോഗത്തിൽ എല്ലാ ക്വാർട്ടറിലും നിർബന്ധമായും പങ്കെടുക്കേണ്ടതാണ്. പുതിയ സ്കോളർഷിപ്പ് അപേക്ഷകൾ ഹെഡ്മാസ്റ്റർ രാധാകൃഷ്ണൻ കെ.യ്ക്ക് നേരിട്ട് സമർപ്പിക്കുക.";
          default:
            return "Our primary school distributes dietary-inspected warm midday children meals daily. Parents are requested to submit mandatory progress card acknowledgment receipts every quarter. For state-funded uniform and writing supplies benefits, file the child's identity copy on desk of Headmistress Kamala Reddy.";
        }
      default: // government
        switch (language) {
          case 'hi':
            return "ग्राम परिषद जन-शिकायत दर्ज करने के लिए आवेदक के पास पहचान प्रमाण पत्र (जैसे आधार कार्ड अथवा ग्राम राशन कार्ड) प्रस्तुत होना होना आवश्यक है। भूमि रिकॉर्ड और खसरा नंबर नकल प्रतियों के लिए पंचायत सहायक के पास आवेदन पत्र जमा करें, जिसे तैयार होने में सामान्यत: 48 से 72 कार्य दिवस घंटे लगते हैं।";
          case 'te':
            return "పంచాయతీ సహాయ కేంద్రంలో ప్రజా ఫిర్యాదుల కొరకు మీ గుర్తింపు కార్డు (ఆధార్ లేదా రేషన్ కార్డ్) సమర్పించాలి. భూమి రికార్డులు లేదా పట్టాదారు పాస్ పొందుటకు దరఖాస్తు చేసుకున్న తర్వాత సాధారణంగా రికార్డులు వెలికితీయడానికి 48 నుండి 72 గంటల సమయం పడుతుంది.";
          case 'ml':
            return "പഞ്ചായത്ത് പരാതി പരിഹാര സെല്ലിൽ പരാതി നൽകുന്നതിന് വോട്ടർ ഐഡിയോ ആധാർ കാർഡോ സമർപ്പിക്കേണ്ടതുണ്ട്. പുതിയ കെട്ടിട പെർമിറ്റുകളും കൈവശാവകാശ സർട്ടിഫിക്കറ്റുകളും അപേക്ഷ സമർപ്പിച്ച് 48 മുതൽ 72 പ്രവർത്തന മണിക്കൂറുകൾക്കുള്ളിൽ അതിരപ്പിള്ളി പഞ്ചായത്ത് ഓഫീസിൽ നിന്നും കൈപ്പറ്റാവുന്നതാണ്.";
          default:
            return "Grievance logging inside Gram Council registry accepts verification strictly upon showing your Resident ID (Aadhaar or local Ration Registration). Land boundary maps or ownership ledger certification requests are processed within a standard 48 to 72 operating hour cycle at Panchayat Bhawan desk.";
        }
    }
  };

  // Form input states
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'health' | 'water' | 'agriculture' | 'education' | 'government'>('health');
  const [newDesc, setNewDesc] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newHours, setNewHours] = useState('');
  const [newContact, setNewContact] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [isEmergencyCheck, setIsEmergencyCheck] = useState(false);
  const [newDistrict, setNewDistrict] = useState('Kozhikode');
  const [newLocality, setNewLocality] = useState('Mukkali');

  // Success toast for suggested service addition
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Load and merge initial + locally stored/suggested services
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedServices = localStorage.getItem('village_custom_services');
      if (savedServices) {
        try {
          const parsed = JSON.parse(savedServices) as ServiceItem[];
          setServices([...INITIAL_SERVICES, ...parsed]);
        } catch (e) {
          console.error("Error reading saved services", e);
          setServices(INITIAL_SERVICES);
        }
      } else {
        setServices(INITIAL_SERVICES);
      }
    }
  }, []);

  // Handle adding new service listing
  const handleAddService = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim() || !newPhone.trim()) {
      return;
    }

    const newId = `custom-serv-${Date.now()}`;
    const today = new Date().toISOString().split('T')[0];

    // Find the localized district / locality name if possible for general storage
    const distLookup = KERALA_DISTRICTS.find(d => d.en === newDistrict);
    const distLocalizedName = distLookup ? ((distLookup as any)[language] || newDistrict) : newDistrict;

    const serviceTranslationObj: ServiceTranslation = {
      title: newTitle,
      description: newDesc,
      category: newCategory === 'health' ? t.health :
                newCategory === 'water' ? t.water :
                newCategory === 'agriculture' ? t.agriculture :
                newCategory === 'education' ? t.education : t.government,
      location: `${newLocation ? newLocation + ', ' : ''}${newLocality}, ${distLocalizedName}, Kerala`,
      hours: newHours || "9:00 AM - 5:00 PM",
      contactName: newContact || "Community Volunteer"
    };

    const translationsRecord: Record<'en', ServiceTranslation> & Partial<Record<'hi' | 'te' | 'ml' | 'kn', ServiceTranslation>> = {
      en: { ...serviceTranslationObj, category: "Volunteer Suggestion" },
      hi: { ...serviceTranslationObj, title: `${newTitle} (स्वयंसेवक सुझाव)`, category: "स्वयंसेवक योगदान" },
      te: { ...serviceTranslationObj, title: `${newTitle} (స్వచ్ఛంద సేవ)`, category: "స్వచ్ఛంద ప్రతిపాదన" },
      ml: { ...serviceTranslationObj, title: `${newTitle} (സന്നദ്ധസേവന സമർപ്പണം)`, category: "വോളണ്ടിയർ നിർദ്ദേശം" },
      kn: { ...serviceTranslationObj, title: `${newTitle} (ಸ್ವಯಂಸೇವಕ ಸೂಚನೆ)`, category: "ಸ್ವಯಂಸೇವಕ ಸೂಚನೆ" }
    };

    const newService: ServiceItem = {
      id: newId,
      categoryKey: newCategory,
      phoneNumber: newPhone,
      lastVerified: today,
      isEmergency: isEmergencyCheck,
      districtName: newDistrict,
      localityName: newLocality,
      translations: translationsRecord
    };

    const updatedServices = [newService, ...services];
    setServices(updatedServices);
    localStorage.setItem('village_custom_services', JSON.stringify([newService, ...services.filter(s => s.id.startsWith('custom-serv-'))]));

    // Reset fields
    setNewTitle('');
    setNewDesc('');
    setNewLocation('');
    setNewHours('');
    setNewContact('');
    setNewPhone('');
    setIsEmergencyCheck(false);

    // Show toast and redirect
    setSuccessToast("Service suggested successfully!");
    setTimeout(() => setSuccessToast(null), 3000);
    setCurrentTab('services');
  };

  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'health': return <Stethoscope className="w-5 h-5" />;
      case 'water': return <Waves className="w-5 h-5" />;
      case 'agriculture': return <Wheat className="w-5 h-5" />;
      case 'education': return <School className="w-5 h-5" />;
      default: return <Landmark className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (categoryKey: string) => {
    switch (categoryKey) {
      case 'health': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'water': return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'agriculture': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'education': return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      default: return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    }
  };

  const getCategoryName = (categoryKey: string) => {
    switch (categoryKey) {
      case 'health': return t.health;
      case 'water': return t.water;
      case 'agriculture': return t.agriculture;
      case 'education': return t.education;
      default: return t.government;
    }
  };

  // Service-specific icons make dense directory rows easier to scan.
  const getCustomizedIcon = (service: ServiceItem) => {
    const titleLower = (service.translations.en?.title || '').toLowerCase();
    const categoryLower = (service.translations.en?.category || '').toLowerCase();
    const haystack = `${titleLower} ${categoryLower}`;
    const catLower = service.categoryKey;
    
    if (haystack.includes('police') || haystack.includes('security')) {
      return <Shield className="w-5 h-5" />;
    }
    if (haystack.includes('hospital') || haystack.includes('taluk')) {
      return <Hospital className="w-5 h-5" />;
    }
    if (haystack.includes('health') || haystack.includes('clinic') || haystack.includes('phc') || haystack.includes('fhc')) {
      return <Stethoscope className="w-5 h-5" />;
    }
    if (haystack.includes('ambulance') || haystack.includes('emergency')) {
      return <Ambulance className="w-5 h-5" />;
    }
    if (haystack.includes('water') || haystack.includes('jal') || haystack.includes('kwa')) {
      return <Waves className="w-5 h-5" />;
    }
    if (haystack.includes('school') || haystack.includes('ghss') || haystack.includes('glps') || haystack.includes('education')) {
      return <School className="w-5 h-5" />;
    }
    if (haystack.includes('library') || haystack.includes('book')) {
      return <BookOpen className="w-5 h-5" />;
    }
    if (haystack.includes('krishi') || haystack.includes('farm') || haystack.includes('agri')) {
      return <Wheat className="w-5 h-5" />;
    }
    if (haystack.includes('soil') || haystack.includes('lab') || haystack.includes('test')) {
      return <FlaskConical className="w-5 h-5" />;
    }
    if (haystack.includes('ration') || haystack.includes('shop')) {
      return <Store className="w-5 h-5" />;
    }
    if (haystack.includes('anganwadi') || haystack.includes('child')) {
      return <Baby className="w-5 h-5" />;
    }
    if (haystack.includes('village') || haystack.includes('registry') || haystack.includes('panchayat') || haystack.includes('office')) {
      return <Landmark className="w-5 h-5" />;
    }
    if (haystack.includes('certificate') || haystack.includes('document') || haystack.includes('revenue')) {
      return <FileCheck2 className="w-5 h-5" />;
    }
    if (haystack.includes('pension') || haystack.includes('welfare') || haystack.includes('fund')) {
      return <HandCoins className="w-5 h-5" />;
    }
    if (haystack.includes('bank') || haystack.includes('akshaya') || haystack.includes('e-centre')) {
      return <Banknote className="w-5 h-5" />;
    }
    if (haystack.includes('bus') || haystack.includes('transport')) {
      return <BusFront className="w-5 h-5" />;
    }
    if (haystack.includes('forest') || haystack.includes('garden')) {
      return <Trees className="w-5 h-5" />;
    }
    if (haystack.includes('court') || haystack.includes('legal')) {
      return <Scale className="w-5 h-5" />;
    }
    if (haystack.includes('housing') || haystack.includes('home')) {
      return <Home className="w-5 h-5" />;
    }
    if (haystack.includes('application') || haystack.includes('register')) {
      return <ClipboardList className="w-5 h-5" />;
    }
    return getCategoryIcon(catLower);
  };

  const categoryOptions = [
    { key: 'all', label: t.allCategories || 'All', icon: <Building2 className="w-3.5 h-3.5" /> },
    { key: 'health', label: t.health || 'Health', icon: <HeartPulse className="w-3.5 h-3.5" /> },
    { key: 'education', label: t.education || 'Education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { key: 'government', label: t.government || 'Government', icon: <Shield className="w-3.5 h-3.5" /> },
    { key: 'water', label: t.water || 'Water', icon: <Droplet className="w-3.5 h-3.5" /> },
    { key: 'agriculture', label: t.agriculture || 'Agriculture', icon: <Sprout className="w-3.5 h-3.5" /> }
  ];

  const getServiceShareText = (service: ServiceItem): string => {
    const data = service.translations[language] || service.translations.en;
    return `${data.title}\n${data.location}\n${data.hours}\nPhone: ${service.phoneNumber}`;
  };

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessToast(label);
    } catch {
      setSuccessToast(text);
    }
    setTimeout(() => setSuccessToast(null), 2200);
  };

  const shareService = async (service: ServiceItem) => {
    const data = service.translations[language] || service.translations.en;
    const text = getServiceShareText(service);
    if (navigator.share) {
      await navigator.share({ title: data.title, text }).catch(() => undefined);
    } else {
      await copyText(text, 'Service details copied');
    }
  };

  const submitReport = () => {
    if (!reportService || !reportText.trim()) return;
    const report = {
      serviceId: reportService.id,
      title: reportService.translations.en.title,
      message: reportText.trim(),
      createdAt: new Date().toISOString()
    };
    const saved = localStorage.getItem('gramseva_reports');
    const reports = saved ? JSON.parse(saved) : [];
    localStorage.setItem('gramseva_reports', JSON.stringify([report, ...reports]));
    setReportService(null);
    setReportText('');
    setSuccessToast('Report saved for volunteer review');
    setTimeout(() => setSuccessToast(null), 2200);
  };

  const getDocumentChecklist = (service: ServiceItem): string[] => {
    const title = service.translations.en.title.toLowerCase();
    const category = service.categoryKey;
    if (title.includes('akshaya') || title.includes('e-centre')) {
      return ['Aadhaar card', 'Mobile number linked to Aadhaar', 'Service-specific certificate or application number', 'Fee receipt if applicable'];
    }
    if (title.includes('village') || title.includes('registry') || category === 'government') {
      return ['Aadhaar or voter ID', 'Address proof', 'Previous certificate or application number', 'Passport-size photo if required'];
    }
    if (category === 'health') {
      return ['Aadhaar or health ID', 'Previous prescription or health card', 'Vaccination card for children', 'Emergency contact number'];
    }
    if (category === 'education') {
      return ['Student ID or birth certificate', 'Parent Aadhaar/contact number', 'Previous school record if available', 'Address proof'];
    }
    if (category === 'water') {
      return ['Consumer number if available', 'Address proof', 'Recent bill or connection receipt', 'Photo of issue for complaints'];
    }
    if (category === 'agriculture') {
      return ['Land tax receipt or farmer ID', 'Aadhaar card', 'Bank passbook copy', 'Krishi registration number if available'];
    }
    return ['Aadhaar card', 'Address proof', 'Phone number', 'Relevant application or receipt'];
  };

  // Filter and search logic
  const baseFilteredServices = services.filter(service => {
    // 1. Filter by category
    if (selectedCategory !== 'all' && service.categoryKey !== selectedCategory) {
      // Allow mapping "Ration" (stored under agriculture) correctly
      if (selectedCategory === 'agriculture' && service.translations.en.category.toLowerCase() === 'ration') {
        // Fall through
      } else {
        return false;
      }
    }

    // 2. Filter by district
    if (selectedDistrict !== 'all' && service.districtName !== selectedDistrict) {
      return false;
    }

    // 3. Filter by locality
    if (selectedLocality !== 'all' && service.localityName !== selectedLocality) {
      return false;
    }

    // 4. Proximity range filter if "Near Me" GPS is active
    if (isNearMeActive) {
      const dist = getSimulatedDistance(service);
      if (dist > nearMeDistance) {
        return false;
      }
    }

    // 5. Search query match
    if (!searchQuery.trim()) return true;

    const normQuery = searchQuery.toLowerCase();
    const trans = service.translations[language] || service.translations['en'];
    const titleMatch = trans.title.toLowerCase().includes(normQuery);
    const descMatch = trans.description.toLowerCase().includes(normQuery);
    const locMatch = trans.location.toLowerCase().includes(normQuery);
    const contactMatch = trans.contactName.toLowerCase().includes(normQuery);
    const categoryMatch = trans.category.toLowerCase().includes(normQuery);
    const phoneMatch = service.phoneNumber.includes(normQuery);

    const transEn = service.translations['en'];
    const titleEnMatch = transEn.title.toLowerCase().includes(normQuery);
    const descEnMatch = transEn.description.toLowerCase().includes(normQuery);

    return titleMatch || descMatch || locMatch || contactMatch || categoryMatch || phoneMatch || titleEnMatch || descEnMatch;
  });

  // Sort by nearest if selected or if Near Me GPS is active
  const filteredServices = [...baseFilteredServices];
  if (isNearMeActive || sortByProximity) {
    filteredServices.sort((a, b) => getSimulatedDistance(a) - getSimulatedDistance(b));
  }

  const emergencyServices = filteredServices.filter((service) => (
    service.isEmergency ||
    service.categoryKey === 'health' ||
    /police|ambulance|hospital|fire|emergency|helpline/i.test(service.translations.en.title)
  )).slice(0, 24);

  const mapServices = filteredServices.filter((service) => (
    mapCategoryFilter === 'all' || service.categoryKey === mapCategoryFilter
  ));

  const searchSuggestions = searchQuery.trim().length > 0
    ? filteredServices.slice(0, 5).map((service) => {
        const data = service.translations[language] || service.translations.en;
        return { id: service.id, label: data.title, helper: data.category };
      })
    : [
        { id: 'birth certificate', label: 'Birth certificate', helper: t.government || 'Government' },
        { id: 'ration card', label: 'Ration card', helper: t.government || 'Government' },
        { id: 'water connection', label: 'Water connection', helper: t.water || 'Water' },
        { id: 'family health centre', label: 'Family Health Centre', helper: t.health || 'Health' }
      ];

  return (
    <div id="dir-app-root" className={`min-h-screen ${isHighContrast ? 'bg-black' : 'bg-[#f4f1e8]'} text-slate-900 font-sans antialiased flex flex-col 2xl:flex-row items-stretch 2xl:items-center justify-center p-0 sm:p-6 transition-all duration-300 ${isLargeText ? 'text-[110%]' : ''}`}>
      
      {/* Desktop context panel */}
      <div className="hidden 2xl:flex flex-col max-w-xs mr-6 bg-white border border-stone-200 p-6 rounded-2xl space-y-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-emerald-700 text-white rounded-xl shadow-sm">
            <Languages className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-classical text-3xl font-extrabold text-slate-950 tracking-tight">GramSeva</h1>
            <p className="font-label text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Local service directory</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          A practical directory for panchayat-level services in Kerala. Residents can search by place, language, category, timings, and verified contact details without digging through scattered sources.
        </p>

        <div className="space-y-3 pt-2">
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-700">
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <span>Kozhikode and Mukkali data ready on launch</span>
          </div>
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-700">
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <span>Map view for nearby public facilities</span>
          </div>
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-700">
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <span>English, Malayalam, Hindi, and Telugu content</span>
          </div>
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-700">
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <span>Local storage keeps added services available</span>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-200 text-[11px] text-slate-500 font-medium leading-relaxed">
          Built as a resident-facing prototype: search the directory, view facilities on the map, add suggestions, and manage local data from the profile tab.
        </div>
      </div>

      {/* App frame */}
      <div className="relative w-full max-w-none lg:max-w-[1180px] 2xl:max-w-[1080px] h-dvh min-h-[620px] sm:h-[calc(100vh-48px)] sm:min-h-[720px] bg-[#121214] sm:rounded-3xl sm:border sm:border-stone-300 sm:shadow-xl flex flex-col overflow-hidden transition-all">
        
        {/* Dynamic Mobile Banner Header block */}
        <div className="bg-gradient-to-br from-[#0c594d] via-[#0d9488] to-[#047857] text-white p-4 sm:p-5 lg:p-6 pt-8 sm:pt-6 pb-5 shrink-0 flex flex-col gap-2 relative shadow-lg">
          
          {/* Virtual OS Status Bar */}
          <div className="h-6 flex justify-between items-center text-[12px] text-white/95 font-semibold px-1 mb-1">
            <span>9:41</span>
            <span className="font-label text-[10px] font-extrabold tracking-widest text-emerald-100 uppercase">GramSeva</span>
            <div className={`flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold border transition-colors ${
              isOfflineMode 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isOfflineMode ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
              <span className="font-label">Offline Ready</span>
            </div>
          </div>

          {/* Panchayat Branding */}
          <div className="flex justify-between items-start gap-2 mt-1">
            <div className="flex-1 min-w-0">
              <h2 className="font-classical text-2xl lg:text-3xl font-black text-white tracking-tight truncate leading-none">
                {selectedLocality === 'all' ? 'Manjeshwaram' : selectedLocality} Panchayat
              </h2>
              <p className="text-xs lg:text-sm text-emerald-100/95 font-semibold tracking-wide mt-1">
                {selectedDistrict} District &middot; {filteredServices.length} services
              </p>
            </div>
            
            {/* Quick Vernacular Lang Buttons (Capsule style matching mockup) */}
            <div className="flex bg-black/20 p-0.5 rounded-lg border border-white/10 shrink-0">
              {[
                { code: 'en', label: 'EN' },
                { code: 'ml', label: 'മല' },
                { code: 'hi', label: 'हि' },
                { code: 'te', label: 'తె' },
                { code: 'kn', label: 'ಕ' }
              ].map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`px-2 py-0.5 rounded text-[10px] font-extrabold tracking-tight transition ${
                      isActive 
                        ? 'bg-white text-emerald-900 shadow-xs' 
                        : 'text-white/85 hover:bg-white/10'
                    }`}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary search input */}
          <div className="relative md:max-w-3xl">
            <div className="bg-white rounded-2xl p-1 shadow-md flex items-center mt-3 border border-slate-100">
              <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder={t.searchPlaceholder || "Search services..."}
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 140)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-slate-800 placeholder-slate-400 bg-transparent text-xs py-1.5 px-2.5 outline-none border-none leading-none font-medium"
              />
              {searchQuery ? (
                <button onClick={() => setSearchQuery('')} className="p-1 text-slate-400 hover:text-slate-600 mr-2" aria-label="Clear search">
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="w-4 h-4 rounded-full bg-slate-100 mr-3 shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                </span>
              )}
            </div>
            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 z-40 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-xl p-2">
                <div className="px-2 pb-1 text-[10px] font-black uppercase tracking-wider text-slate-400">{ui.searchSuggestions}</div>
                {searchSuggestions.map((item) => (
                  <button
                    key={item.id}
                    onMouseDown={() => setSearchQuery(item.label)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 transition flex items-center justify-between gap-3"
                  >
                    <span className="text-xs font-bold truncate">{item.label}</span>
                    <span className="text-[10px] text-emerald-700 font-bold shrink-0">{item.helper}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* View switcher container */}
        <div className="flex-1 flex flex-col min-h-0 bg-[#121214]">
          
          {/* Tab Content 1: Services Directory List */}
          {currentTab === 'services' && (
            <>
              {/* Category Horizontal Filter Row */}
              <div className="flex overflow-x-auto gap-2 px-4 sm:px-5 lg:px-6 py-3 bg-[#18181b] border-b border-zinc-800/80 scrollbar-none shrink-0 select-none">
                {categoryOptions.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap border shrink-0 ${
                        isActive
                          ? 'bg-zinc-800 text-white border-zinc-700 shadow-sm'
                          : 'bg-transparent text-zinc-400 border-zinc-800/60 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      {cat.icon}
                <span className="font-label text-[11px]">{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic scrollable directory area */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-5 lg:px-8 pt-3 sm:pt-5 pb-24 scrollbar-none space-y-3 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 lg:items-start">
                <div className="flex justify-between items-center text-xs font-black tracking-wider text-zinc-500 uppercase px-1 mb-1 lg:col-span-2">
                  <span>Nearby Services</span>
                  <span>{filteredServices.length} listed</span>
                </div>

                <AnimatePresence initial={false}>
                  {filteredServices.length > 0 ? (
                    filteredServices.slice(0, visibleCount).map((service, index) => {
                      const data = service.translations[language] || service.translations['en'];
                      
                      // Check verified pulse in last 30 days
                      const isVerifiedPulse = (() => {
                        if (!service.lastVerified) return false;
                        try {
                          const verifiedDate = new Date(service.lastVerified);
                          const diffTime = Math.abs(new Date().getTime() - verifiedDate.getTime());
                          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                          return diffDays <= 30;
                        } catch (e) {
                          return false;
                        }
                      })();

                      return (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: Math.min(index * 0.04, 0.2) }}
                          onClick={() => setSelectedDetailService(service)}
                          className="bg-zinc-900/95 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 min-h-[128px] lg:min-h-[154px] cursor-pointer hover:bg-zinc-850 hover:border-zinc-700 transition flex gap-3 sm:gap-4 shadow-md relative overflow-hidden"
                        >
                          {/* Emergency Stripe */}
                          {service.isEmergency && (
                            <div className="absolute top-0 bottom-0 left-0 w-1 bg-rose-500" />
                          )}

                          {/* Customized icon wrapper on left */}
                          <div className={`w-12 h-12 lg:w-13 lg:h-13 rounded-xl flex items-center justify-center shrink-0 ${getCategoryColor(service.categoryKey)}`}>
                            {getCustomizedIcon(service)}
                          </div>

                          {/* Detail block on right */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-classical text-base font-black text-white leading-snug tracking-tight pr-1 line-clamp-2">
                                {data.title}
                              </h3>
                              
                              {/* Status indicator capsule */}
                              {isVerifiedPulse ? (
                                <span className="shrink-0 text-[9px] font-black tracking-tight text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                                  <span className="font-label">Verified</span>
                                </span>
                              ) : (
                                <span className="shrink-0 text-[9px] font-black tracking-tight text-amber-400 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded-full">
                                  May be outdated
                                </span>
                              )}
                            </div>

                            <p className="font-label text-[10px] text-zinc-400 font-bold tracking-wide uppercase mt-1">
                              {data.category}
                            </p>

                            <p className="hidden sm:block text-xs lg:text-[11px] text-zinc-400/90 leading-relaxed mt-2 line-clamp-2">
                              {data.description}
                            </p>

                            {/* Info Badges */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-500 font-semibold mt-2.5">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-emerald-500" />
                                <span>{getSimulatedDistance(service)} km</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-zinc-500" />
                                <span className="truncate max-w-[170px] sm:max-w-[360px] lg:max-w-[220px]">{data.hours}</span>
                              </div>
                            </div>
                          </div>

                        </motion.div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12 px-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl lg:col-span-2">
                      <HelpCircle className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                      <p className="text-zinc-400 text-xs font-bold">{t.noServicesFound || "No services found"}</p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                          setSelectedDistrict('Kozhikode');
                          setSelectedLocality('Mukkali');
                        }}
                        className="mt-3 text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest hover:underline"
                      >
                        Reset Local Filters
                      </button>
                    </div>
                  )}
                </AnimatePresence>

                {filteredServices.length > visibleCount && (
                  <div className="pt-2 pb-4 text-center lg:col-span-2">
                    <button
                      onClick={() => setVisibleCount(p => p + 100)}
                      className="w-full py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 text-emerald-400 font-extrabold text-xs uppercase tracking-widest rounded-2xl transition shadow-md active:scale-98"
                    >
                      Load More (+100)
                    </button>
                    <p className="text-[10px] text-zinc-500 font-semibold mt-1.5">
                      Showing {visibleCount} of {filteredServices.length} services
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Tab Content 2: Emergency quick access */}
          {currentTab === 'emergency' && (
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 lg:px-8 pt-4 sm:pt-5 pb-24 scrollbar-none space-y-4">
              <div className="bg-rose-950/40 border border-rose-500/20 rounded-2xl p-4 flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-rose-500/15 text-rose-300 flex items-center justify-center shrink-0">
                  <Siren className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-classical text-xl text-white font-black">{ui.emergency}</h3>
                  <p className="text-xs text-rose-100/75 leading-relaxed mt-1">{ui.emergencyIntro}</p>
                </div>
              </div>

              {emergencyServices.length > 0 ? (
                <div className="grid gap-3 lg:grid-cols-2">
                  {emergencyServices.map((service) => {
                    const data = service.translations[language] || service.translations.en;
                    return (
                      <div key={service.id} className="bg-zinc-900/95 border border-zinc-800 rounded-2xl p-4 flex gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getCategoryColor(service.categoryKey)}`}>
                          {service.isEmergency ? <AlertTriangle className="w-5 h-5" /> : getCustomizedIcon(service)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-classical text-base text-white font-black leading-snug line-clamp-2">{data.title}</h4>
                            <span className="text-[9px] text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-full font-bold shrink-0">Urgent</span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{data.location}</p>
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <a href={`tel:${service.phoneNumber}`} className="flex items-center justify-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white py-2 text-[11px] font-black">
                              <Phone className="w-3.5 h-3.5" />
                              Call
                            </a>
                            <button onClick={() => setSelectedDetailService(service)} className="rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-2 text-[11px] font-black">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 px-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
                  <AlertTriangle className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                  <p className="text-zinc-400 text-xs font-bold">{ui.noEmergency}</p>
                </div>
              )}
            </div>
          )}

          {/* Tab Content 2: Full interactive vector map */}
          {currentTab === 'map' && (
            <div className="flex-1 flex flex-col relative select-none">
              
              {/* Floating Map HUD header */}
              <div className="absolute top-3 inset-x-3 md:inset-x-6 z-30 bg-zinc-950/90 border border-zinc-850 p-2.5 md:p-3 rounded-xl flex flex-wrap items-center justify-between text-[11px] md:text-xs text-zinc-300 font-bold gap-2 shadow-lg backdrop-blur-xs">
                <div className="font-label flex items-center gap-1.5 text-white min-w-0">
                  <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '24s' }} />
                  <span className="truncate">{selectedDistrict.toUpperCase()} LOCATION HUB</span>
                </div>
                <span className="text-[9px] text-zinc-500 font-label">Zoom: {Math.round(mapZoom * 100)}%</span>
              </div>

              {/* Vector Map Container */}
              <div className="flex-1 bg-[#ecf9ff] relative overflow-hidden select-none">
                <div className="absolute top-18 md:top-20 left-3 md:left-6 right-3 md:right-auto md:max-w-xl z-30 flex gap-2 overflow-x-auto scrollbar-none">
                  {categoryOptions.map((cat) => {
                    const isActive = mapCategoryFilter === cat.key;
                    return (
                      <button
                        key={cat.key}
                        onClick={() => setMapCategoryFilter(cat.key)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold whitespace-nowrap ${
                          isActive
                            ? 'bg-zinc-950 text-white border-zinc-800'
                            : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-white'
                        }`}
                      >
                        <Filter className="w-3 h-3" />
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
                
                {/* Floating Map Zoom/Reset Controllers */}
                <div className="absolute right-3 md:right-6 bottom-20 md:bottom-24 z-30 flex flex-col gap-1.5 select-none">
                  <button 
                    onClick={() => setMapZoom(p => Math.min(4, p + 0.3))}
                    className="w-8 h-8 bg-zinc-900 border border-zinc-800 text-white rounded-lg flex items-center justify-center transition active:scale-90"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setMapZoom(p => Math.max(0.8, p - 0.3))}
                    className="w-8 h-8 bg-zinc-900 border border-zinc-800 text-white rounded-lg flex items-center justify-center transition active:scale-90"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => { setMapZoom(1); setMapPan({ x: 0, y: 0 }); }}
                    className="w-8 h-8 bg-zinc-900 border border-zinc-800 text-white rounded-lg flex items-center justify-center transition active:scale-90"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Simulated Grid Layer */}
                <div 
                  style={{
                    transform: `translate(${mapPan.x}px, ${mapPan.y}px) scale(${mapZoom})`,
                    transformOrigin: 'center center',
                    transition: isMapDragging ? 'none' : 'transform 0.15s cubic-bezier(0.1, 0.9, 0.2, 1)',
                    touchAction: 'none'
                  }}
                  className={`absolute inset-0 w-full h-full ${isMapDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                  onMouseDown={(e) => {
                    setIsMapDragging(true);
                    setMapDragStart({ x: e.clientX - mapPan.x, y: e.clientY - mapPan.y });
                  }}
                  onMouseMove={(e) => {
                    if (!isMapDragging) return;
                    setMapPan({
                      x: e.clientX - mapDragStart.x,
                      y: e.clientY - mapDragStart.y
                    });
                  }}
                  onMouseUp={() => setIsMapDragging(false)}
                  onMouseLeave={() => setIsMapDragging(false)}
                  onTouchStart={(e) => {
                    if (e.touches.length === 1) {
                      setIsMapDragging(true);
                      setMapDragStart({ x: e.touches[0].clientX - mapPan.x, y: e.touches[0].clientY - mapPan.y });
                    }
                  }}
                  onTouchMove={(e) => {
                    if (e.touches.length === 1 && isMapDragging) {
                      setMapPan({
                        x: e.touches[0].clientX - mapDragStart.x,
                        y: e.touches[0].clientY - mapDragStart.y
                      });
                    }
                  }}
                  onTouchEnd={() => setIsMapDragging(false)}
                >
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.06)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

                  {/* Sea Labels */}
                  <div className="absolute left-6 top-36 font-black text-[9px] uppercase tracking-widest text-[#0ca5e9]/25 font-mono -rotate-90">Laccadive Sea</div>

                  {/* Shaded Land */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 12,0 L 22,12 Q 28,22 42,26 T 34,36 T 44,46 T 62,52 T 48,62 T 48,72 T 74,74 T 58,82 T 44,86 T 66,90 T 56,94 T 72,98 L 100,100 L 100,0 Z"
                      className="fill-[#f2f8f4] stroke-emerald-600/10 stroke-1"
                    />
                  </svg>

                  {/* Static nodes on map */}
                  {[
                    { name: "Kasaragod", x: 22, y: 12 },
                    { name: "Kannur", x: 28, y: 22 },
                    { name: "Wayanad", x: 42, y: 26 },
                    { name: "Kozhikode", x: 34, y: 36 },
                    { name: "Malappuram", x: 44, y: 46 },
                    { name: "Palakkad", x: 62, y: 52 },
                    { name: "Kottayam", x: 58, y: 82 }
                  ].map((node) => {
                    const isSelected = selectedDistrict === node.name;
                    return (
                      <div
                        key={node.name}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
                      >
                        {isSelected && (
                          <span className="absolute w-6 h-6 rounded-full bg-emerald-500/20 animate-ping" />
                        )}
                        <button
                          onClick={() => {
                            setSelectedDistrict(node.name);
                            const locals = LOCALITIES_EN[node.name] || [];
                            setSelectedLocality(locals[0] || 'all');
                          }}
                          className={`w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center transition-all ${
                            isSelected 
                              ? 'bg-emerald-600 scale-125 ring-4 ring-emerald-500/30' 
                              : 'bg-zinc-400 hover:bg-emerald-600'
                          }`}
                        />
                        <span className="text-[8px] font-black text-slate-800 bg-white/95 border border-slate-200/80 px-1 py-0.2 rounded shadow-xs mt-1 pointer-events-none whitespace-nowrap">
                          {node.name}
                        </span>
                      </div>
                    );
                  })}

                  {/* Floating Pins for Kasaragod services inside active coordinates */}
                  {selectedDistrict === 'Kasaragod' && (
                    <>
                      {/* Sub-node representing active Manjeshwar locality */}
                      <div className="absolute left-[24%] top-[14%] z-20 flex flex-col items-center">
                        <span className="absolute w-12 h-12 rounded-full border border-teal-500/40 animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="w-4 h-4 bg-teal-600 rounded-full border-2 border-white flex items-center justify-center shadow-md shadow-teal-500/30 animate-pulse">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="bg-teal-900 text-white font-extrabold text-[8px] px-2 py-0.5 rounded shadow-lg border border-teal-500/30 mt-1 pointer-events-none whitespace-nowrap uppercase tracking-widest">
                          Manjeshwar Grid
                        </div>
                      </div>
                    </>
                  )}

                  {/* Floating Pins for Kozhikode services inside active coordinates */}
                  {selectedDistrict === 'Kozhikode' && (
                    <>
                      {/* Sub-node representing Mukkali / Chombala */}
                      <div className="absolute left-[33%] top-[34%] z-20 flex flex-col items-center">
                        <span className="absolute w-10 h-10 rounded-full border border-emerald-500/40 animate-ping" style={{ animationDuration: '3.5s' }} />
                        <div className="w-3.5 h-3.5 bg-emerald-600 rounded-full border border-white flex items-center justify-center shadow-md shadow-emerald-500/30 animate-pulse">
                          <div className="w-1 h-1 rounded-full bg-white" />
                        </div>
                        <div className="bg-emerald-950/95 text-emerald-300 font-extrabold text-[8px] px-1.5 py-0.5 rounded shadow-lg border border-emerald-500/30 mt-1 pointer-events-none whitespace-nowrap uppercase tracking-widest scale-90">
                          Mukkali (Chombala)
                        </div>
                      </div>

                      {/* Sub-node representing Vadakara */}
                      <div className="absolute left-[36%] top-[39%] z-20 flex flex-col items-center">
                        <span className="absolute w-10 h-10 rounded-full border border-sky-500/40 animate-ping" style={{ animationDuration: '2.8s' }} />
                        <div className="w-3.5 h-3.5 bg-sky-600 rounded-full border-2 border-white flex items-center justify-center shadow-md shadow-sky-500/30 animate-pulse">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="bg-sky-950/95 text-sky-300 font-extrabold text-[8px] px-1.5 py-0.5 rounded shadow-lg border border-sky-500/30 mt-1 pointer-events-none whitespace-nowrap uppercase tracking-widest scale-90">
                          Vadakara Grid
                        </div>
                      </div>
                    </>
                  )}

                  {mapServices.slice(0, 8).map((service, idx) => {
                    const data = service.translations[language] || service.translations.en;
                    const x = 28 + ((idx * 9) % 38);
                    const y = 24 + ((idx * 13) % 48);
                    return (
                      <button
                        key={`map-${service.id}`}
                        onClick={() => setSelectedDetailService(service)}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        className="absolute z-30 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
                        title={data.title}
                      >
                        <span className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center shadow-lg ${service.isEmergency ? 'bg-rose-600 text-white' : 'bg-emerald-700 text-white'}`}>
                          {getCustomizedIcon(service)}
                        </span>
                        <span className="mt-1 max-w-[100px] truncate bg-white/95 text-slate-800 border border-slate-200 px-1.5 py-0.5 rounded text-[8px] font-black shadow-sm">
                          {data.title}
                        </span>
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* Map instructions panel */}
              <div className="absolute bottom-18 md:bottom-20 inset-x-3 md:left-6 md:right-auto md:max-w-md bg-zinc-950/95 border border-zinc-800/80 p-3 rounded-2xl flex flex-col gap-1 select-none shadow-lg">
                <span className="font-label text-[10px] font-black text-white uppercase tracking-wider">Kerala Grid Operations</span>
                <p className="text-[9px] text-zinc-400 leading-tight">
                  Drag the viewport to explore the coast. Showing {mapServices.length} services for the current map filter.
                </p>
              </div>

            </div>
          )}

          {/* Tab Content 3: Suggest local service form */}
          {currentTab === 'suggest' && (
            <div className="flex-1 overflow-y-auto px-4 md:px-6 pt-4 md:pt-6 pb-24 scrollbar-none">
              <div className="border-b border-zinc-800 pb-3 max-w-5xl mx-auto">
                <h3 className="font-classical text-lg font-black text-white tracking-wide flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <span>{t.addServiceTitle || "Suggest Service"}</span>
                </h3>
                <p className="text-[10px] text-zinc-400 mt-0.5">
                  Contribute details about essential community assets. Your submissions are cached instantly.
                </p>
              </div>

              <form onSubmit={handleAddService} className="max-w-5xl mx-auto mt-4 grid gap-3.5 text-xs md:grid-cols-2">
                
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Primary Health Centre Subcenter"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:col-span-2">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Category *
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-2 py-2 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="health">{t.health || "Health"}</option>
                      <option value="water">{t.water || "Water"}</option>
                      <option value="agriculture">{t.agriculture || "Agriculture"}</option>
                      <option value="education">{t.education || "Education"}</option>
                      <option value="government">{t.government || "Government"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Description & Service details *
                  </label>
                  <textarea
                    required
                    rows={2.5}
                    placeholder="Describe what help, documents, or aids are provided here..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 resize-none leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:col-span-2">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Operating Hours
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 9:00 AM - 4:00 PM"
                      value={newHours}
                      onChange={(e) => setNewHours(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sister Lakshmi"
                      value={newContact}
                      onChange={(e) => setNewContact(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:col-span-2">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      District
                    </label>
                    <select
                      value={newDistrict}
                      onChange={(e) => {
                        setNewDistrict(e.target.value);
                        const locals = LOCALITIES_EN[e.target.value] || [];
                        setNewLocality(locals[0] || '');
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-2 py-2 focus:outline-none focus:border-emerald-500"
                    >
                      {KERALA_DISTRICTS.map((d) => (
                        <option key={d.en} value={d.en}>{d.en}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Locality
                    </label>
                    <select
                      value={newLocality}
                      onChange={(e) => setNewLocality(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-2 py-2 focus:outline-none focus:border-emerald-500"
                    >
                      {(LOCALITIES_EN[newDistrict] || []).map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Landmark / Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Opposite Local Library block"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-1 md:col-span-2">
                  <input
                    type="checkbox"
                    id="mobile-em-chk"
                    checked={isEmergencyCheck}
                    onChange={(e) => setIsEmergencyCheck(e.target.checked)}
                    className="w-4 h-4 bg-zinc-900 border-zinc-800 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="mobile-em-chk" className="text-[10px] font-extrabold text-zinc-300 select-none cursor-pointer uppercase tracking-wider">
                    Emergency 24/7 Service
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full md:max-w-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition mt-3 shadow-lg uppercase tracking-wider text-[11px] md:col-span-2"
                >
                  {t.submitBtn || "Submit to Local Directory"}
                </button>

              </form>
            </div>
          )}

          {/* Tab Content 4: Profile / Diagnostic settings */}
          {currentTab === 'profile' && (
            <div className="flex-1 overflow-y-auto px-4 md:px-6 pt-4 md:pt-6 pb-24 scrollbar-none">
              <div className="border-b border-zinc-800 pb-3 max-w-5xl mx-auto">
                <h3 className="font-classical text-lg font-black text-white tracking-wide">
                  Directory Settings
                </h3>
                <p className="text-[10px] text-zinc-400 mt-0.5">
                  Local data controls, place filters, and offline access.
                </p>
              </div>

              {/* State Controls Block */}
              <div className="max-w-5xl mx-auto mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-4 shadow-md">
                
                {/* Simulated Offline Switch */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-black text-white block uppercase tracking-wider">Network Status</span>
                    <span className="text-[9px] text-zinc-400 block">Use locally saved directory data</span>
                  </div>
                  <button
                    onClick={() => setIsOfflineMode(!isOfflineMode)}
                    className={`p-2 rounded-xl transition ${
                      isOfflineMode 
                        ? 'bg-amber-500/20 text-amber-300' 
                        : 'bg-emerald-500/20 text-emerald-300'
                    }`}
                  >
                    {isOfflineMode ? <WifiOff className="w-5 h-5" /> : <Wifi className="w-5 h-5" />}
                  </button>
                </div>

                {/* District and Locality Selection Hub */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-3">
                  <span className="text-[10px] font-black text-zinc-500 block uppercase tracking-wider">Location Config</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">District</label>
                      <select
                        value={selectedDistrict}
                        onChange={(e) => {
                          setSelectedDistrict(e.target.value);
                          const locals = LOCALITIES_EN[e.target.value] || [];
                          setSelectedLocality(locals[0] || 'all');
                        }}
                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg p-1.5 text-[10px] outline-none"
                      >
                        <option value="all">All Districts</option>
                        {KERALA_DISTRICTS.map((d) => (
                          <option key={d.en} value={d.en}>{d.en}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">Locality</label>
                      <select
                        value={selectedLocality}
                        onChange={(e) => setSelectedLocality(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg p-1.5 text-[10px] outline-none"
                      >
                        <option value="all">All Localities</option>
                        {(LOCALITIES_EN[selectedDistrict] || []).map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Simulated GPS block */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-black text-white block uppercase tracking-wider">Nearby Services</span>
                      <span className="text-[9px] text-zinc-400 block">Sort and filter by approximate distance</span>
                    </div>
                    <button
                      onClick={() => {
                        const nextVal = !isNearMeActive;
                        setIsNearMeActive(nextVal);
                        if (nextVal) {
                          setSelectedDistrict('all');
                          setSelectedLocality('all');
                        }
                      }}
                      className={`p-2 rounded-xl transition ${
                        isNearMeActive 
                          ? 'bg-amber-500/20 text-amber-300' 
                          : 'bg-zinc-950 text-zinc-500'
                      }`}
                    >
                      <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: isNearMeActive ? '8s' : '0s' }} />
                    </button>
                  </div>

                  {isNearMeActive && (
                    <div className="space-y-2 pt-1 animate-fade-in">
                      <div className="flex justify-between items-center text-[9px] text-zinc-400 font-bold uppercase">
                        <span>Search Radius</span>
                        <span className="text-amber-400 font-black">{nearMeDistance} km</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="200"
                        step="5"
                        value={nearMeDistance}
                        onChange={(e) => setNearMeDistance(Number(e.target.value))}
                        className="w-full accent-emerald-500 h-1 bg-zinc-950 rounded"
                      />
                    </div>
                  )}
                </div>

              </div>

              {/* Cache status report */}
              <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-4 text-[11px] text-zinc-400 space-y-2">
                <span className="font-black text-white block uppercase tracking-wider">Local Data Status</span>
                <div className="flex justify-between font-mono text-[10px]">
                  <span>Directory records:</span>
                  <span className="text-emerald-400">1,000 services</span>
                </div>
                <div className="flex justify-between font-mono text-[10px]">
                  <span>Saved in browser:</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="flex justify-between font-mono text-[10px]">
                  <span>Update mode:</span>
                  <span className="text-zinc-500">Manual review</span>
                </div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-4 text-[11px] text-zinc-400 space-y-3">
                <span className="font-black text-white block uppercase tracking-wider">{ui.accessibility}</span>
                <button
                  onClick={() => setIsLargeText(!isLargeText)}
                  className={`w-full flex items-center justify-between rounded-xl border px-3 py-2 transition ${isLargeText ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`}
                >
                  <span className="flex items-center gap-2 font-bold"><Type className="w-4 h-4" />{ui.largeText}</span>
                  <span>{isLargeText ? 'On' : 'Off'}</span>
                </button>
                <button
                  onClick={() => setIsHighContrast(!isHighContrast)}
                  className={`w-full flex items-center justify-between rounded-xl border px-3 py-2 transition ${isHighContrast ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`}
                >
                  <span className="flex items-center gap-2 font-bold"><Eye className="w-4 h-4" />{ui.highContrast}</span>
                  <span>{isHighContrast ? 'On' : 'Off'}</span>
                </button>
              </div>

              {/* Reset State Button */}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDistrict('Kasaragod');
                  setSelectedLocality('Manjeshwar');
                  setIsNearMeActive(false);
                  setIsOfflineMode(false);
                }}
                className="w-full py-2.5 bg-zinc-900 border border-zinc-800 hover:text-white transition rounded-xl text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-2"
              >
                Reset App State
              </button>
              </div>

            </div>
          )}

        </div>

        {/* Dynamic bottom detail drawer (native iOS/Android style slide up drawer overlay) */}
        <AnimatePresence>
          {selectedDetailService && (() => {
            const activeDetailLang = detailPreviewLang || language;
            const detailData = selectedDetailService.translations[activeDetailLang] || selectedDetailService.translations['en'];
            const historyLogs = getServiceHistory(selectedDetailService);
            const guidelines = getServiceGuidelines(selectedDetailService);

            const isRecentVerified = (() => {
              if (!selectedDetailService.lastVerified) return false;
              try {
                const verifiedDate = new Date(selectedDetailService.lastVerified);
                const diffTime = Math.abs(new Date().getTime() - verifiedDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= 30;
              } catch (e) {
                return false;
              }
            })();

            return (
              <>
                {/* Backdrop dark shroud inside smartphone */}
                <div 
                  onClick={() => {
                    setSelectedDetailService(null);
                    setDetailPreviewLang(null);
                  }}
                  className="absolute inset-0 bg-black/60 z-40 backdrop-blur-xs cursor-pointer"
                />

                {/* Bottom slide-up sheet drawer */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  className="absolute inset-x-0 bottom-0 max-h-[85%] md:inset-x-auto md:right-0 md:top-0 md:bottom-0 md:h-full md:w-[min(460px,42vw)] md:max-h-none bg-zinc-950 border-t md:border-t-0 md:border-l border-zinc-800 rounded-t-[32px] md:rounded-none shadow-[0_-12px_42px_rgba(0,0,0,0.85)] md:shadow-[-18px_0_42px_rgba(0,0,0,0.45)] z-50 flex flex-col overflow-hidden text-zinc-100 font-sans"
                >
                  
                  {/* Pull Handle accent */}
                  <div className="w-11 h-1 bg-zinc-800 rounded-full mx-auto my-3 shrink-0 md:hidden" />

                  {/* Header Row */}
                  <div className="px-5 pt-0 md:pt-5 pb-3 border-b border-zinc-900 flex justify-between items-start gap-2 shrink-0">
                    <div className="flex items-start space-x-3 pr-2 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getCategoryColor(selectedDetailService.categoryKey)}`}>
                        {getCustomizedIcon(selectedDetailService)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block leading-none mb-1">
                          {getCategoryName(selectedDetailService.categoryKey)}
                        </span>
                        <h4 className="font-classical text-sm sm:text-base font-black truncate text-white leading-tight">
                          {detailData.title}
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedDetailService(null);
                        setDetailPreviewLang(null);
                      }}
                      className="p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quick Preview Language Swapper widget (Vernacular helper) */}
                  <div className="bg-zinc-900/60 border-b border-zinc-900 px-5 py-2 shrink-0 flex items-center justify-between gap-2.5 text-[9px] font-bold text-zinc-400 select-none">
                    <span className="font-label">Vernacular Swapper:</span>
                    <div className="flex bg-black/30 p-0.5 rounded border border-zinc-800">
                      {[
                        { code: 'en', flag: '🇬🇧', label: 'EN' },
                        { code: 'ml', flag: '🇮🇳', label: 'മല' },
                        { code: 'hi', flag: '🇮🇳', label: 'हि' },
                        { code: 'te', flag: '🇮🇳', label: 'తె' },
                        { code: 'kn', flag: '🇮🇳', label: 'ಕ' }
                      ].map((lang) => {
                        const isActive = activeDetailLang === lang.code;
                        return (
                          <button
                            key={lang.code}
                            onClick={() => setDetailPreviewLang(lang.code as any)}
                            className={`px-2 py-0.5 rounded-[3px] text-[8.5px] font-extrabold transition-all ${
                              isActive 
                                ? 'bg-emerald-600 text-white shadow-xs' 
                                : 'text-zinc-500 hover:text-white'
                            }`}
                          >
                            {lang.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scrollable details view content */}
                  <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-xs leading-relaxed">
                    
                    {/* Primary specs row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3 bg-zinc-900/40 border border-zinc-900 p-3 rounded-2xl">
                      <div>
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block mb-0.5">Contact</span>
                        <span className="font-bold text-white block truncate">{detailData.contactName || "Local Volunteer"}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block mb-0.5">Hours</span>
                        <span className="font-bold text-white block truncate">{detailData.hours}</span>
                      </div>
                      <div className="sm:col-span-2 md:col-span-1 xl:col-span-2 pt-2 border-t border-zinc-900">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block mb-0.5">Location</span>
                        <p className="text-[10px] text-zinc-300 leading-tight font-medium">{detailData.location}</p>
                      </div>
                    </div>

                    {/* Description Text block */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block">Description Details</span>
                      <p className="text-zinc-300 leading-relaxed font-medium">{detailData.description}</p>
                    </div>

                    {/* Direct Telephone Dialer Dial btn */}
                    <div className="space-y-2">
                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block">{ui.actions}</span>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`tel:${selectedDetailService.phoneNumber}`}
                          className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black py-3 px-4 rounded-xl transition uppercase tracking-wider shadow-lg shrink-0 select-none active:scale-95"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                        <a
                          href={`https://wa.me/${selectedDetailService.phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(getServiceShareText(selectedDetailService))}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center space-x-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 text-[11px] font-black py-3 px-4 rounded-xl transition uppercase tracking-wider"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{ui.whatsapp}</span>
                        </a>
                        <button
                          onClick={() => copyText(selectedDetailService.phoneNumber, 'Phone number copied')}
                          className="flex items-center justify-center space-x-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 text-[11px] font-black py-3 px-4 rounded-xl transition uppercase tracking-wider"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{ui.copyPhone}</span>
                        </button>
                        <button
                          onClick={() => copyText(getServiceShareText(selectedDetailService), 'Service details copied')}
                          className="flex items-center justify-center space-x-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 text-[11px] font-black py-3 px-4 rounded-xl transition uppercase tracking-wider"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{ui.copyDetails}</span>
                        </button>
                        <button
                          onClick={() => shareService(selectedDetailService)}
                          className="flex items-center justify-center space-x-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 text-[11px] font-black py-3 px-4 rounded-xl transition uppercase tracking-wider"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{ui.share}</span>
                        </button>
                      </div>
                      <button
                        onClick={() => setReportService(selectedDetailService)}
                        className="flex items-center justify-center space-x-2 w-full bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/15 text-amber-300 text-[11px] font-black py-2.5 px-4 rounded-xl transition uppercase tracking-wider"
                      >
                        <Flag className="w-3.5 h-3.5" />
                        <span>{ui.reportWrongInfo}</span>
                      </button>
                    </div>

                    <div className="bg-zinc-900/40 border border-zinc-900 p-3 rounded-2xl space-y-2">
                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                        <ListChecks className="w-3.5 h-3.5 text-emerald-400" />
                        {ui.documentChecklist}
                      </span>
                      <div className="space-y-1.5">
                        {getDocumentChecklist(selectedDetailService).map((item) => (
                          <label key={item} className="flex items-start gap-2 text-[10.5px] text-zinc-300 leading-snug">
                            <input type="checkbox" className="mt-0.5 accent-emerald-500" />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Static Verification Timeline */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block">Verification Timeline</span>
                      <div className="border-l border-zinc-800 pl-3 ml-1.5 space-y-3.5">
                        {historyLogs.slice(0, 2).map((log, idx) => (
                          <div key={idx} className="relative">
                            <span className="absolute -left-[15.5px] top-1 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
                            <p className="text-[10.5px] text-zinc-400 font-medium leading-normal">{log}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Community Guidelines Notes */}
                    <div className="bg-amber-500/5 border border-amber-500/10 p-3 rounded-2xl space-y-1 mt-1 select-none">
                      <span className="text-[9px] font-black text-amber-500 uppercase tracking-wider block">Community Guidelines</span>
                      <p className="text-[10px] text-amber-100/90 leading-normal font-medium">{guidelines}</p>
                    </div>

                  </div>

                </motion.div>
              </>
            );
          })()}
        </AnimatePresence>

        <AnimatePresence>
          {reportService && (
            <>
              <div className="absolute inset-0 bg-black/70 z-[60] backdrop-blur-xs" onClick={() => setReportService(null)} />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                className="absolute z-[61] left-4 right-4 top-24 md:left-1/2 md:right-auto md:w-[420px] md:-translate-x-1/2 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-4 text-zinc-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-classical text-lg font-black text-white">{ui.reportTitle}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{ui.reportHint}</p>
                  </div>
                  <button onClick={() => setReportService(null)} className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="mt-3 rounded-xl bg-zinc-900/70 border border-zinc-800 p-3 text-xs text-zinc-300">
                  {reportService.translations[language]?.title || reportService.translations.en.title}
                </div>
                <textarea
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder={ui.reportPlaceholder}
                  className="mt-3 w-full min-h-[110px] bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 resize-none"
                />
                <button
                  onClick={submitReport}
                  disabled={!reportText.trim()}
                  className="mt-3 w-full bg-emerald-600 disabled:bg-zinc-800 disabled:text-zinc-500 hover:bg-emerald-700 text-white font-black py-3 rounded-xl text-xs uppercase tracking-wider"
                >
                  {ui.submitReport}
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Global Floating Toast for successful directory additions */}
        {successToast && (
          <div className="absolute top-20 inset-x-6 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg text-center text-[10px] font-extrabold uppercase tracking-widest animate-bounce">
            {successToast}
          </div>
        )}

        {/* Static virtual bottom nav tab row (matching screenshots) */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-[#0c0c0e] border-t border-zinc-800/85 flex items-center justify-around z-40 px-3 md:px-10 select-none">
          {[
            { id: 'services', label: ui.services, icon: <Building2 className="w-5 h-5" /> },
            { id: 'emergency', label: ui.emergency, icon: <Siren className="w-5 h-5" /> },
            { id: 'map', label: ui.map, icon: <Compass className="w-5 h-5" /> },
            { id: 'suggest', label: ui.suggest, icon: <Plus className="w-5 h-5" /> },
            { id: 'profile', label: ui.profile, icon: <User className="w-5 h-5" /> }
          ].map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id as any)}
                className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 transition cursor-pointer select-none active:scale-95 ${
                  isActive 
                    ? 'text-emerald-500 font-bold' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.icon}
                <span className="font-label text-[8px] md:text-[9px] font-extrabold tracking-wider uppercase leading-none">{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <DirectoryApp />
    </LanguageProvider>
  );
}
