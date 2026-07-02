import { LanguageConfig, ServiceItem, UIStrings, Language } from '../types';

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🌴' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' }
];

export const UI_TRANSLATIONS: Record<Language, UIStrings> = {
  ml: {
    title: "കേരള അവശ്യസേവന ഡയറക്ടറി",
    subtitle: "ഗ്രാമീണ ഓഫ്‌ലൈൻ പ്രാദേശിക വിവരസഹായി - കേരളം",
    searchPlaceholder: "ആരോഗ്യ കേന്ദ്രം, അവശ്യ സേവനങ്ങൾ, കോൺടാക്റ്റുകൾ, സ്ഥലങ്ങൾ...",
    allCategories: "എല്ലാ বিভাগങ്ങളും",
    health: "കുടുംബാരോഗ്യ കേന്ദ്രം",
    water: "കുടിവെള്ള പദ്ധതി",
    agriculture: "कृषि ഭവൻ",
    education: "സ്കൂളുകളും വിദ്യാഭ്യാസവും",
    government: "തദ്ദേശ സ്വയംഭരണം / പഞ്ചായത്ത്",
    emergencyOnly: "അടിയന്തിര സേവനം മാത്രം",
    lastVerifiedLabel: "സ്ഥിരീകരിച്ചത്",
    contactLabel: "ബന്ധപ്പെടേണ്ട വ്യക്തി",
    hoursLabel: "പ്രവർത്തന സമയം",
    locationLabel: "സ്ഥലം / വിലാസം",
    offlineStatus: "ഓഫ്‌ലൈൻ മോഡ് സജീവം",
    offlineStatusDesc: "ഈ വിവരങ്ങളെല്ലാം നിങ്ങളുടെ ഫോണിൽ തദ്ദേശീയമായി സൂക്ഷിച്ചിരിക്കുന്നു. ഇന്റർനെറ്റ് ഇല്ലെങ്കിലും പൂർണ്ണമായി പ്രവർത്തിക്കും.",
    noServicesFound: "തിരഞ്ഞ വിവരങ്ങൾ ലഭ്യമല്ല. ദയവായി മറ്റ് ഫിൽറ്ററുകൾ നോക്കൂ.",
    volunteerBadge: "സ്ഥിരീകരിച്ച വോളണ്ടിയർ സേവനം",
    volunteerMessage: "കേരളത്തിലെ തദ്ദേശവാസികളായ വോളണ്ടിയർ കോൺടാക്റ്റുകൾ ഇവിടെ നൽകിയിരിക്കുന്നു. സഹായത്തിനായി താഴെ കാണുന്ന നമ്പറുകളിൽ ബന്ധപ്പെടുക.",
    addServiceBtn: "+ പുതിയ സേവനം നിർദ്ദേശിക്കുക",
    addServiceTitle: "പുതിയ സേവനം നിർദ്ദേശിക്കുക",
    closeBtn: "അടയ്‌ക്കുക",
    submitBtn: "ഡയറക്ടറിയിൽ ഉൾപ്പെടുത്തുക",
    detailsTitle: "സേവന വിവരങ്ങളും കൂടുതൽ കാര്യങ്ങളും",
    historyLabel: "സ്ഥിരീകരണ ലോഗ്",
    extraNotesLabel: "കമ്മ്യൂണിറ്റി മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
    metadataLabel: "പ്രാദേശിക രജിസ്ട്രി വിവരങ്ങൾ",
    shareLabel: "വിവരങ്ങൾ പങ്കുവെക്കുക",
    reportUpdateLabel: "തിരുത്തലുകൾ നിർദ്ദേശിക്കുക",
    serviceIdLabel: "രജിസ്ട്രേഷൻ ഐഡി",
    callVolunteerLabel: "പ്രതിനിധിയെ വിളിക്കുക",
    offlineProofLabel: "പൂർണ്ണമായി ഓഫ്‌ലൈനായി ലഭ്യമാണ്",
    verificationHistoryLabel: "പരിശോധനാ ചരിത്രം"
  },
  en: {
    title: "Kerala Essential Services Directory",
    subtitle: "Offline-First Vernacular Directory",
    searchPlaceholder: "Search services, contact names, districts or locations...",
    allCategories: "All Categories",
    health: "Family Health Centre",
    water: "Water Supply Project",
    agriculture: "Krishi Bhavan",
    education: "Schools & Education",
    government: "Grama Panchayat Office",
    emergencyOnly: "Emergency Only",
    lastVerifiedLabel: "Verified",
    contactLabel: "Contact Representative",
    hoursLabel: "Operating Hours",
    locationLabel: "Location Description",
    offlineStatus: "Offline Mode Active",
    offlineStatusDesc: "All directory data is cached directly in your browser. Fully functional without internet connection.",
    noServicesFound: "No services matching your search were found. Try changing filters.",
    volunteerBadge: "Verified Volunteer Service",
    volunteerMessage: "This directory contains contacts of local volunteers and public servants across Kerala. Helping your community starts here.",
    addServiceBtn: "+ Suggest New Service",
    addServiceTitle: "Suggest a Community Service",
    closeBtn: "Close",
    submitBtn: "Add to Local Directory",
    detailsTitle: "Service Details & Logistics",
    historyLabel: "Verification Logs",
    extraNotesLabel: "Community Guidelines & Instructions",
    metadataLabel: "Local Registry Integrity",
    shareLabel: "Share Information",
    reportUpdateLabel: "Suggest Correction",
    serviceIdLabel: "Service Registration ID",
    callVolunteerLabel: "Call Representative",
    offlineProofLabel: "Available entirely offline",
    verificationHistoryLabel: "Verification History"
  },
  kn: {
    title: "ಕೇರಳ ಅಗತ್ಯ ಸೇವೆಗಳ ಡೈರೆಕ್ಟರಿ",
    subtitle: "ಆಫ್‌ಲೈನ್ ಮೊದಲು ಸ್ಥಳೀಯ ಭಾಷಾ ಡೈರೆಕ್ಟರಿ",
    searchPlaceholder: "ಸೇವೆಗಳು, ಸಂಪರ್ಕ ಹೆಸರುಗಳು, ಜಿಲ್ಲೆಗಳು ಅಥವಾ ಸ್ಥಳಗಳನ್ನು ಹುಡುಕಿ...",
    allCategories: "ಎಲ್ಲಾ ವಿಭಾಗಗಳು",
    health: "ಕುಟುಂಬ ಆರೋಗ್ಯ ಕೇಂದ್ರ",
    water: "ಕುಡಿಯುವ ನೀರಿನ ಯೋಜನೆ",
    agriculture: "ಕೃಷಿ ಭವನ",
    education: "ಶಾಲೆಗಳು ಮತ್ತು ಶಿಕ್ಷಣ",
    government: "ಗ್ರಾಮ ಪಂಚಾಯತ್ ಕಚೇರಿ",
    emergencyOnly: "ತುರ್ತು ಮಾತ್ರ",
    lastVerifiedLabel: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    contactLabel: "ಸಂಪರ್ಕ ಪ್ರತಿನಿಧಿ",
    hoursLabel: "ಕಾರ್ಯ ಸಮಯ",
    locationLabel: "ಸ್ಥಳದ ವಿವರ",
    offlineStatus: "ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಕ್ರಿಯ",
    offlineStatusDesc: "ಎಲ್ಲಾ ಡೈರೆಕ್ಟರಿ ಮಾಹಿತಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ. ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದಿದ್ದರೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
    noServicesFound: "ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದುವ ಸೇವೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಫಿಲ್ಟರ್ ಬದಲಿಸಿ ನೋಡಿ.",
    volunteerBadge: "ಪರಿಶೀಲಿಸಿದ ಸ್ವಯಂಸೇವಕ ಸೇವೆ",
    volunteerMessage: "ಈ ಪಟ್ಟಿಯಲ್ಲಿ ಕೇರಳದ ಸ್ಥಳೀಯ ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವಕರ ಸಂಪರ್ಕಗಳಿವೆ.",
    addServiceBtn: "+ ಹೊಸ ಸೇವೆ ಸೂಚಿಸಿ",
    addServiceTitle: "ಸಮುದಾಯ ಸೇವೆ ಸೂಚಿಸಿ",
    closeBtn: "ಮುಚ್ಚಿ",
    submitBtn: "ಸ್ಥಳೀಯ ಡೈರೆಕ್ಟರಿಗೆ ಸೇರಿಸಿ",
    detailsTitle: "ಸೇವೆಯ ವಿವರಗಳು",
    historyLabel: "ಪರಿಶೀಲನಾ ದಾಖಲೆಗಳು",
    extraNotesLabel: "ಸಮುದಾಯ ಮಾರ್ಗಸೂಚಿಗಳು",
    metadataLabel: "ಸ್ಥಳೀಯ ನೋಂದಣಿ ಮಾಹಿತಿ",
    shareLabel: "ಮಾಹಿತಿ ಹಂಚಿ",
    reportUpdateLabel: "ತಿದ್ದುಪಡಿ ಸೂಚಿಸಿ",
    serviceIdLabel: "ಸೇವಾ ನೋಂದಣಿ ಐಡಿ",
    callVolunteerLabel: "ಪ್ರತಿನಿಧಿಗೆ ಕರೆ ಮಾಡಿ",
    offlineProofLabel: "ಸಂಪೂರ್ಣವಾಗಿ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯ",
    verificationHistoryLabel: "ಪರಿಶೀಲನಾ ಇತಿಹಾಸ"
  },
  hi: {
    title: "केरल आवश्यक सेवा निर्देशिका",
    subtitle: "ऑफ़लाइन-प्रथम स्थानीय भाषा निर्देशिका - केरल",
    searchPlaceholder: "स्वास्थ्य केंद्र, आवश्यक सेवाएं, संपर्क या स्थान खोजें...",
    allCategories: "सभी श्रेणियां",
    health: "स्वास्थ्य केंद्र",
    water: "पेयजल परियोजना",
    agriculture: "कृषि भवन",
    education: "विद्यालय व शिक्षा",
    government: "ग्राम पंचायत कार्यालय",
    emergencyOnly: "केवल आपातकालीन",
    lastVerifiedLabel: "सत्यापित",
    contactLabel: "संपर्क व्यक्ति",
    hoursLabel: "संचालन का समय",
    locationLabel: "स्थान का विवरण",
    offlineStatus: "ऑफ़लाइन मोड सक्रिय",
    offlineStatusDesc: "सभी निर्देशिका डेटा आपके ब्राउज़र में सुरक्षित हैं। इंटरनेट के बिना भी काम करता है।",
    noServicesFound: "आपकी खोज से मेल खाती हुई कोई सेवा नहीं मिली। फ़िल्टर बदल कर देखें।",
    volunteerBadge: "सत्यापित स्वयंसेवक सेवा",
    volunteerMessage: "इस सूची में केरल के स्थानीय स्वयंसेवकों की जानकारी शामिल है। मदद के लिए संपर्क करें।",
    addServiceBtn: "+ नई सेवा का सुझाव दें",
    addServiceTitle: "सामुदायिक सेवा का सुझाव दें",
    closeBtn: "बंद करें",
    submitBtn: "स्थानीय निर्देशिका में जोड़ें",
    detailsTitle: "सेवा विवरण और संचालन जानकारी",
    historyLabel: "सत्यापन लॉग रिकॉर्ड",
    extraNotesLabel: "सामुदायिक दिशानिर्देश और निर्देश",
    metadataLabel: "स्थानीय रजिस्ट्री अखंडता",
    shareLabel: "जानकारी साझा करें",
    reportUpdateLabel: "त्रुटि सुधार का सुझाव दें",
    serviceIdLabel: "सेवा पंजीकरण यूनिक आईडी",
    callVolunteerLabel: "निर्धारित प्रतिनिधि को कॉल करें",
    offlineProofLabel: "पूरी तरह से ऑफ़लाइन उपलब्ध है",
    verificationHistoryLabel: "सत्यापन इतिहास"
  },
  te: {
    title: "కేరళ గ్రామ సేవల సూచిక",
    subtitle: "కేరళ గ్రామీణ ఆఫ్‌లైన్ స్థానిక భాషా డైరెక్టరీ",
    searchPlaceholder: "ఆరోగ్య కేంద్రం, కొత్త సేవలు, కాంటాక్ట్‌లు, స్థలాలు శోధించండి...",
    allCategories: "అన్ని రకాలు",
    health: "కుటుంబ ఆరోగ్య కేంద్రం",
    water: "త్రాగునీటి పథకం",
    agriculture: "కృషి భవన్ (వ్యవసాయం)",
    education: "పాఠశాలలు & విద్య",
    government: "గ్రామ పంచాయతీ కార్యాలయం",
    emergencyOnly: "కేవలం అత్యవసర సేవలు",
    lastVerifiedLabel: "ధృవీకరించబడింది",
    contactLabel: "సంప్రదించాల్సిన వ్యక్తి",
    hoursLabel: "పని వేళలు",
    locationLabel: "చిరునామా మార్గదర్శకం",
    offlineStatus: "ఆఫ్‌లైన్ మోడ్ సక్రియంగా ఉంది",
    offlineStatusDesc: "డైరెక్టరీ సమాచారం అంతా మీ బ్రౌజర్‌లో భద్రపరచబడింది. ఇంటర్నెట్ లేకపోయినా పనిచేస్తుంది.",
    noServicesFound: "మీ శోధనకు తగిన సేవలు ఏవి లభించలేదు. దయచేసి ఫిల్టర్‌ని మార్చండి.",
    volunteerBadge: "ధృవీకరించబడిన వాలంటీర్ సేవ",
    volunteerMessage: "ఈ పట్టికలో కేరళ స్థానిక వాలంటీర్ల ఫోన్ నంబర్లు ఉన్నాయి. మీ సహాయం అవసరం అయితే సంప్రదించండి.",
    addServiceBtn: "+ కొత్త సేవను ప్రతిపాదించండి",
    addServiceTitle: "కమ్యూనిటీ సేవను సూచించండి",
    closeBtn: "మూసివేయి",
    submitBtn: "స్థానిక సూచికకు జతచేయి",
    detailsTitle: "సేవా వివరాలు మరియు సమాచారం",
    historyLabel: "ధృవీకరణ చరిత్ర",
    extraNotesLabel: "గ్రామస్తుల కొరకు మార్గదర్శకాలు & సూచనలు",
    metadataLabel: "స్థానిక రిజిస్ట్రీ సమగ్రత",
    shareLabel: "సమాచారాన్ని పంచుకోండి",
    reportUpdateLabel: "సవరణను ప్రతిపాదించండి",
    serviceIdLabel: "సేవా రిజిస్ట్రేషన్ సంఖ్య",
    callVolunteerLabel: "నియమించబడిన ప్రతినిధికి కాల్ చేయండి",
    offlineProofLabel: "పూర్తిగా ఆఫ్‌లైన్‌లో లభిస్తుంది",
    verificationHistoryLabel: "ధృవీకరణ చరిత్ర నమోదు"
  }
};

const BASE_SERVICES: ServiceItem[] = [
  {
    id: "serv-m1",
    categoryKey: "health",
    phoneNumber: "+91 4998 272021",
    lastVerified: "2026-06-25",
    isEmergency: false,
    districtName: "Kasaragod",
    localityName: "Manjeshwar",
    translations: {
      ml: {
        title: "പ്രൈമറി ഹെൽത്ത് സെന്റർ മഞ്ചേശ്വരം",
        description: "24/7 അത്യാഹിത വിഭാഗവും പൊതുജനാരോഗ്യ സേവനങ്ങളും. ആഴ്ചതോറുമുള്ള കുഞ്ഞുങ്ങളുടെ പ്രതിരോധ കുത്തിവെപ്പുകൾ.",
        category: "ആരോഗ്യം",
        location: "മഞ്ചേശ്വരം ജംഗ്ഷൻ, കാസർഗോഡ്, കേരളം",
        hours: "രാവിലെ 9:00 - വൈകുന്നേരം 4:00",
        contactName: "ഡോ. കെ. രാഘവൻ"
      },
      en: {
        title: "Primary Health Centre",
        description: "24/7 Casualty & Family Medicine. Regular child immunization sessions held weekly.",
        category: "Health",
        location: "Manjeshwaram Junction, Kasaragod, Kerala",
        hours: "9 AM - 4 PM",
        contactName: "Dr. K. Raghavan"
      },
      hi: {
        title: "प्राथमिक स्वास्थ्य केंद्र मन्जेश्वरम",
        description: "24/7 आपातकालीन देखभाल और सामान्य चिकित्सा। नियमित साप्ताहिक बाल टीकाकरण कार्यक्रम।",
        category: "स्वास्थ्य",
        location: "मंजेश्वरम जंक्शन, कासरगोड, केरल",
        hours: "सुबह 9:00 - शाम 4:00",
        contactName: "डॉ. के. राघवन"
      },
      te: {
        title: "ప్రాథమిక ఆరోగ్య కేంద్రం",
        description: "24/7 అత్యవసర మరియు కుటుంబ వైద్య సేవలు. వారానికోసారి పిల్లల టీకాలు వేయబడును.",
        category: "ఆరోగ్యం",
        location: "మంజేశ్వరం జంక్షన్, కాసరగోడ్, కేరళ",
        hours: "ఉదయం 9:00 - సాయంత్రం 4:00",
        contactName: "డా. కె. రాఘవన్"
      }
    }
  },
  {
    id: "serv-m2",
    categoryKey: "agriculture",
    phoneNumber: "+91 9447 654321",
    lastVerified: "2026-05-10",
    isEmergency: false,
    districtName: "Kasaragod",
    localityName: "Manjeshwar",
    translations: {
      ml: {
        title: "റേഷൻ കട നമ്പർ 14",
        description: "പൊതുവിതരണ സമ്പ്രദായം (PDS) ഔട്ട്ലെറ്റ്. സബ്‌സിഡി നിരക്കിൽ അരി, ഗോതമ്പ്, പഞ്ചസാര, മണ്ണെണ്ണ എന്നിവ ലഭ്യമാണ്.",
        category: "റേഷൻ",
        location: "പഞ്ചായത്ത് ഓഫീസിന് സമീപം, മഞ്ചേശ്വരം, കാസർഗോഡ്",
        hours: "രാവിലെ 9:00 - ഉച്ചയ്ക്ക് 1:00 | വൈകുന്നേരം 4:00 - 7:00",
        contactName: "സുരേഷ് ബാബു"
      },
      en: {
        title: "Ration Shop #14",
        description: "Public Distribution System (PDS) outlet. Subsidized rice, wheat, sugar, and kerosene supply center.",
        category: "Ration",
        location: "Near Panchayat Office, Manjeshwar, Kasaragod",
        hours: "9 AM - 1 PM",
        contactName: "Suresh Babu"
      },
      hi: {
        title: "राशन दुकान संख्या 14",
        description: "सार्वजनिक वितरण प्रणाली (PDS) केंद्र। रियायती दरों पर चावल, गेहूं, चीनी और मिट्टी का तेल वितरण।",
        category: "राशन",
        location: "पंचायत कार्यालय के पास, मंजेश्वर, कासरगोड",
        hours: "सुबह 9:00 - दोपहर 1:00",
        contactName: "सुरेश बाबू"
      },
      te: {
        title: "రేషన్ దుకాణం #14",
        description: "ప్రజా పంపిణీ వ్యవస్థ (PDS) కేంద్రం. సబ్సిడీ బియ్యం, గోధుమలు, చక్కెర మరియు కిరోసిన్ పంపిణీ.",
        category: "రేషన్",
        location: "పంచాయతీ కార్యాలయం దగ్గర, మంజేశ్వర్, కాసరగోడ్",
        hours: "ఉదయం 9:00 - మధ్యాహ్నం 1:00",
        contactName: "సురేష్ బాబు"
      }
    }
  },
  {
    id: "serv-m3",
    categoryKey: "government",
    phoneNumber: "+91 4998 273111",
    lastVerified: "2026-06-24",
    isEmergency: false,
    districtName: "Kasaragod",
    localityName: "Manjeshwar",
    translations: {
      ml: {
        title: "വില്ലേജ് റവന്യൂ ഓഫീസ്",
        description: "പൗരത്വ സർട്ടിഫിക്കറ്റുകൾ, ഭൂനികുതി ലെഡ്ജർ, വിവിധ ഗവൺമെന്റ് അപേക്ഷകളുടെ സാക്ഷ്യപ്പെടുത്തൽ എന്നിവ നടത്തുന്നു.",
        category: "റവന്യൂ",
        location: "വില്ലേജ് ജംഗ്ഷൻ, മഞ്ചേശ്വരം, കാസർഗോഡ്",
        hours: "രാവിലെ 10:00 - വൈകുന്നേരം 5:00",
        contactName: "വി. ഗോവിന്ദൻ (വില്ലേജ് ഓഫീസർ)"
      },
      en: {
        title: "Village Revenue Office",
        description: "Civic certificates, land revenue taxation ledger, and local certificate registry.",
        category: "Revenue",
        location: "Village Junction, Manjeshwar, Kasaragod",
        hours: "10 AM - 5 PM",
        contactName: "V. Govindan (Village Officer)"
      },
      hi: {
        title: "ग्राम राजस्व कार्यालय",
        description: "नागरिक प्रमाण पत्र, भूमि कर संग्रह, स्वामित्व रिकॉर्ड और स्थानीय प्रमाण पत्र पंजीकरण।",
        category: "राजस्व",
        location: "विलेज जंक्शन, मंजेश्वर, कासरगोड",
        hours: "सुबह 10:00 - शाम 5:00",
        contactName: "वी. गोविंदन (ग्राम अधिकारी)"
      },
      te: {
        title: "గ్రామ రెవెన్యూ కార్యాలయం",
        description: "పౌర ధృవీకరణ పత్రాలు, భూమి పన్ను రికార్డులు మరియు స్థానిక రిజిస్ట్రేషన్ సేవలు.",
        category: "రెవెన్యూ",
        location: "విలేజ్ జంక్షన్, మంజేశ్వర్, కాసరగోడ్",
        hours: "ఉదయం 10:00 - సాయంత్రం 5:00",
        contactName: "వి. గోవిందన్ (గ్రామ అధికారి)"
      }
    }
  },
  {
    id: "serv-m4",
    categoryKey: "education",
    phoneNumber: "+91 9846 123456",
    lastVerified: "2026-06-26",
    isEmergency: false,
    districtName: "Kasaragod",
    localityName: "Manjeshwar",
    translations: {
      ml: {
        title: "അങ്കണവാടി കേന്ദ്രം നമ്പർ 07",
        description: "ആദ്യകാല ശിശുസംരക്ഷണം, പ്രീ-സ്കൂൾ വിദ്യാഭ്യാസം, കുട്ടികൾക്കുള്ള പോഷകാഹാര വിതരണം.",
        category: "അങ്കണവാടി",
        location: "കുന്ന് റോഡ്, മഞ്ചേശ്വരം, കാസർഗോഡ്",
        hours: "രാവിലെ 8:30 - ഉച്ചയ്ക്ക് 12:30",
        contactName: "ദേവകി അമ്മ"
      },
      en: {
        title: "Anganwadi Centre #07",
        description: "Early childhood care, pre-school education, and pediatric nutritional supplements.",
        category: "Anganwadi",
        location: "Hill Road, Manjeshwar, Kasaragod",
        hours: "8:30 AM - 12:30 PM",
        contactName: "Devaki Amma"
      },
      hi: {
        title: "आंगनवाड़ी केंद्र संख्या 07",
        description: "प्रारंभिक बाल देखभाल, पूर्व-स्कूली शिक्षा, और बच्चों के लिए पोषण पूरक वितरण केंद्र।",
        category: "आंगनवाड़ी",
        location: "हिल रोड, मंजेश्वर, कासरगोड",
        hours: "सुबह 8:30 - दोपहर 12:30",
        contactName: "देवकी अम्मा"
      },
      te: {
        title: "అంగన్‌వాడీ కేంద్రం #07",
        description: "శిశు సంరక్షణ, పూర్వ ప్రాథమిక విద్య మరియు పోషకాహార పంపిణీ కేంద్రం.",
        category: "అంగన్‌వాడీ",
        location: "హిల్ రోడ్డు, మంజేశ్వర్, కాసరగోడ్",
        hours: "ఉదయం 8:30 - మధ్యాహ్నం 12:30",
        contactName: "దేవకి అమ్మ"
      }
    }
  },
  {
    id: "serv-m5",
    categoryKey: "government",
    phoneNumber: "+91 4998 273033",
    lastVerified: "2026-06-25",
    isEmergency: true,
    districtName: "Kasaragod",
    localityName: "Manjeshwar",
    translations: {
      ml: {
        title: "മഞ്ചേശ്വരം പോലീസ് സ്റ്റേഷൻ",
        description: "ക്രമസമാധാന പാലനം, കമ്മ്യൂണിറ്റി പൊലീസിംഗ്, 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന പബ്ലിക് സേഫ്റ്റി ഡെസ്ക്.",
        category: "പോലീസ്",
        location: "കോടതി റോഡ്, മഞ്ചേശ്വരം, കാസർഗോഡ്",
        hours: "24 മണിക്കൂറും പ്രവർത്തിക്കുന്നു",
        contactName: "എസ്.ഐ മാത്യു ജോസഫ്"
      },
      en: {
        title: "Manjeshwaram Police Station",
        description: "Law enforcement, community policing, and 24/7 public safety desk.",
        category: "Police",
        location: "Court Road, Manjeshwar, Kasaragod",
        hours: "24 hours",
        contactName: "S.I. Mathew Joseph"
      },
      hi: {
        title: "मंजेश्वरम पुलिस स्टेशन",
        description: "कानून व्यवस्था, सामुदायिक पुलिसिंग और 24/7 सार्वजनिक सुरक्षा सहायता डेस्क।",
        category: "पुलिस",
        location: "कोर्ट रोड, मंजेश्वर, कासरगोड",
        hours: "24 घंटे उपलब्ध",
        contactName: "एस.आई. मैथ्यू जोसेफ"
      },
      te: {
        title: "మంజేశ్వరం పోలీస్ స్టేషన్",
        description: "శాంతిభద్రతల పరిరక్షణ మరియు 24 గంటల ప్రజా రక్షణ విభాగం.",
        category: "పోలీస్",
        location: "కోర్టు రోడ్డు, మంజేశ్వర్, కాసరగోడ్",
        hours: "24 గంటలు",
        contactName: "S.I. మాథ్యూ జోసెఫ్"
      }
    }
  },
  {
    id: "serv-m6",
    categoryKey: "education",
    phoneNumber: "+91 4998 272555",
    lastVerified: "2026-06-26",
    isEmergency: false,
    districtName: "Kasaragod",
    localityName: "Manjeshwar",
    translations: {
      ml: {
        title: "ഗവൺമെന്റ് ഹയർ സെക്കൻഡറി സ്കൂൾ",
        description: "സ്മാർട്ട് ക്ലാസ്സ് റൂമുകളും ഡിജിറ്റൽ ലബോറട്ടറിയുമുള്ള കേരള പൊതുവിദ്യാഭ്യാസ വകുപ്പിന് കീഴിലുള്ള സ്കൂൾ.",
        category: "വിദ്യാഭ്യാസം",
        location: "സ്കൂൾ ജംഗ്ഷൻ, മഞ്ചേശ്വരം, കാസർഗോഡ്",
        hours: "രാവിലെ 9:00 - വൈകുന്നേരം 4:00",
        contactName: "പ്രിൻസിപ്പൽ രാമചന്ദ്രൻ"
      },
      en: {
        title: "Govt. Higher Secondary School",
        description: "State board secondary school with smart classrooms and digital laboratory.",
        category: "Education",
        location: "School Junction, Manjeshwar, Kasaragod",
        hours: "9 AM - 4 PM",
        contactName: "Principal Ramachandran"
      },
      hi: {
        title: "सरकारी उच्चतर माध्यमिक विद्यालय मंजेश्वरम",
        description: "स्मार्ट कक्षाओं और आधुनिक डिजिटल प्रयोगशाला से सुसज्जित माध्यमिक विद्यालय।",
        category: "शिक्षा",
        location: "स्कूल जंक्शन, मंजेश्वर, कासरगोड",
        hours: "सुबह 9:00 - शाम 4:00",
        contactName: "प्रधानाचार्य रामचंद्रन"
      },
      te: {
        title: "ప్రభుత్వ ఉన్నత పాఠశాల",
        description: "ఆధునిక స్మార్ట్ తరగతి గదులు మరియు కంప్యూటర్ ల్యాబ్‌తో కూడిన ప్రభుత్వ ఉన్నత పాఠశాల.",
        category: "విద్య",
        location: "స్కూల్ జంక్షన్, మంజేశ్వర్, కాసరగోడ్",
        hours: "ఉదయం 9:00 - సాయంత్రం 4:00",
        contactName: "ప్రిన్సిపాల్ రామచంద్రన్"
      }
    }
  },
  {
    id: "serv-1",
    categoryKey: "health",
    phoneNumber: "+91 94470 23456",
    lastVerified: "2026-06-11",
    isEmergency: true,
    districtName: "Kottayam",
    localityName: "Vaikom",
    translations: {
      ml: {
        title: "കുമാരകം കുടുംബാരോഗ്യ കേന്ദ്രം (FHC)",
        description: "സമഗ്രമായ പ്രാദേശിക ആരോഗ്യ സംരക്ഷണം, പ്രസവ സഹായകേന്ദ്രം, കുഞ്ഞുങ്ങൾക്കുള്ള കുത്തിവെപ്പുകൾ, അത്യാഹിത ഒ.പി ഒപ്പം സൗജന്യ മരുന്നുകൾ.",
        category: "കുടുംബാരോഗ്യ കേന്ദ്രം",
        location: "ഗവ. പഞ്ചായത്ത് ലൈബ്രറിക്ക് എതിർവശം, കുമാരകം വെസ്റ്റ്, കോട്ടയം",
        hours: "24 മണിക്കൂറും പ്രവർത്തിക്കുന്നു (അത്യാഹിത വിഭാഗം) | ഒ.പി സമയം: രാവിലെ 8:00 - ഉച്ചയ്ക്ക് 2:00",
        contactName: "ഡോ. രശ്മി നായർ, അസിസ്റ്റന്റ് സർജൻ"
      },
      en: {
        title: "Kumarakom Family Health Centre (FHC)",
        description: "Comprehensive primary healthcare, maternal assistance, pediatric immunizations, lifestyle clinics, and essential free medicine distribution.",
        category: "Family Health Centre",
        location: "Opposite Grama Panchayat Library, Kumarakom West, Kottayam District",
        hours: "24/7 Casualty Response | OPD Hours: 8:00 AM - 2:00 PM",
        contactName: "Dr. Resmi Nair, Assistant Surgeon"
      },
      hi: {
        title: "कुमारकोम पारिवारिक स्वास्थ्य केंद्र (FHC)",
        description: "व्यापक प्राथमिक स्वास्थ्य देखभाल, प्रसूति सहायता, बच्चों का टीकाकरण, और आवश्यक मुफ्त दवाओं का वितरण।",
        category: "स्वास्थ केंद्र",
        location: "ग्राम पंचायत पुस्तकालय के सामने, कुमारकोम पश्चिम, कोट्टायम",
        hours: "24/7 आपातकालीन सेवा | ओपीडी का समय: सुबह 8:00 - दोपहर 2:00",
        contactName: "डॉ. रश्मी नायर, सहायक सर्जन"
      },
      te: {
        title: "కుమరకోమ్ ఫ్యామిలీ హెల్త్ సెంటర్ (FHC)",
        description: "సమగ్ర ప్రాథమిక వైద్య సేవలు, గర్భిణీ స్త్రీలకు సహాయం, పిల్లల టీకాలు మరియు ఉచిత మందుల పంపిణీ కేంద్రం.",
        category: "కుటుంబ ఆరోగ్య కేంద్రం",
        location: "గ్రామ పంచాయతీ లైబ్రరీ ఎదురుగా, കുമരకోമ് വെസ്റ്റ്, కొట్టాయం",
        hours: "24/7 అత్యవసర సేవలు | ఓపిడి సమయం: ఉదయం 8:00 - మధ్యాహ్నం 2:00",
        contactName: "డా. రశ్మి నాయర్, అసిస్టెంట్ సర్జన్"
      }
    }
  },
  {
    id: "serv-2",
    categoryKey: "water",
    phoneNumber: "+91 94960 11223",
    lastVerified: "2026-06-10",
    isEmergency: false,
    districtName: "Idukki",
    localityName: "Santhanpara",
    translations: {
      ml: {
        title: "ജലനിധി കുടിവെള്ള വിതരണ ശുദ്ധീകരണ പ്ലാന്റ്",
        description: "തദ്ദേശീയ ജലശുദ്ധീകരണ ശൃംഖല. ഉയർന്ന നിലവാരത്തിലുള്ള റിവേഴ്സ് ഓസ്മോസിസ് ഫിൽട്ടർ പ്ലാന്റ്. ജനകീയ സമിതി മേൽനോട്ടം വഹിക്കുന്നു.",
        category: "കുടിവെള്ള പദ്ധതി",
        location: "റിസർവോയർ ടാങ്കിന് സമീപം, ശാന്തൻപാറ, ഇടുക്കി",
        hours: "രാവിലെ 6:00 - 9:30 | വൈകുന്നേരം 4:30 - രാത്രി 8:00",
        contactName: "ശ്രീ. ബാലൻ കെ., വാർഡ് മെമ്പർ & ജലനിധി കൺവീനർ"
      },
      en: {
        title: "Jalanidhi Clean Drinking Water Distribution Plant",
        description: "High-yield purified drinking water plant. Managed by local community committee with solar filtration backup.",
        category: "Water Supply Project",
        location: "Near Overhead Reservoir, Santhanpara, Idukki District",
        hours: "6:00 AM - 9:30 AM | 4:30 PM - 8:00 PM",
        contactName: "Shri. Balan K., Ward Member & Jalanidhi Convenor"
      },
      hi: {
        title: "जलनिधि स्वच्छ पेयजल वितरण और निस्पंदन संयंत्र",
        description: "उच्च स्तरीय स्वच्छ पेयजल संयंत्र। सौर ऊर्जा संचालित आरओ फिल्टर सिस्टम, स्थानीय जल समिति द्वारा संचालित।",
        category: "पेयजल परियोजना",
        location: "ओवरहेड जलाशय के पास, संथनपारा, इडुक्की जिला",
        hours: "सुबह 6:00 - 9:30 | शाम 4:30 - रात 8:00",
        contactName: "श्री बालान के., वार्ड सदस्य और जलनिधि संयोजक"
      },
      te: {
        title: "జలనిధి సురక్షిత మంచినీటి శుద్ధి ప్లాంట్",
        description: "శుభ్రమైన త్రాగునీటి శుద్ధి కేంద్రం. సౌర విద్యుత్ ఆర్.ఓ సాంకేతికతతో, స్థానిక జల సమితి పర్యవేక్షణలో పనిచేస్తుంది.",
        category: "త్రాగునీటి పథకం",
        location: "ఓవర్ హెడ్ రిజర్వాయర్ దగ్గర, సంతన్‌పారా, ఇడుక్కి జిల్లా",
        hours: "ఉదయం 6:00 - 9:30 | సాయంత్రం 4:30 - రాత్రి 8:00",
        contactName: "శ్రీ బాలన్ కె., వార్డు సభ్యుడు & కన్వీనర్"
      }
    }
  },
  {
    id: "serv-3",
    categoryKey: "agriculture",
    phoneNumber: "+91 94464 88990",
    lastVerified: "2026-06-11",
    isEmergency: false,
    districtName: "Kottayam",
    localityName: "Kanjirappally",
    translations: {
      ml: {
        title: "കാഞ്ഞിരപ്പള്ളി ഗവൺമെന്റ് കൃഷിഭവൻ",
        description: "കർഷകർക്കുള്ള സബ്‌സിഡി വളങ്ങൾ, മികച്ചയിനം തെങ്ങിൻ തൈകൾ, നെൽവിത്തുകൾ, മണ്ണുപരിശോധനാ സൗകര്യം, കൃഷി ഉപകരണങ്ങൾ വാടകയ്ക്ക് എന്നിവ നൽകുന്നു.",
        category: "കൃഷിഭവൻ",
        location: "വെറ്ററിനറി ഡിസ്പൻസറിക്ക് എതിർവശം, മെയിൻ റോഡ്, കാഞ്ഞിരപ്പള്ളി, കോട്ടയം",
        hours: "രാവിലെ 10:00 - വൈകുന്നേരം 5:00 (ഞായർ, മറ്റ് അവധി ദിവസങ്ങൾ ഒഴികെ)",
        contactName: "ശ്രീമതി ലത മാധവൻ, കൃഷി ഓഫീസർ"
      },
      en: {
        title: "Kanjirappally Government Krishi Bhavan",
        description: "Government support centre offering subsidized bio-fertilizers, high-yield coconut saplings, soil PH testing, and farm machine rental logistics.",
        category: "Krishi Bhavan",
        location: "Opposite Veterinary Dispensary, Main Road, Kanjirappally, Kottayam",
        hours: "10:00 AM - 5:00 PM (Closed Sundays & Gazetted Holidays)",
        contactName: "Smt. Latha Madhavan, Agricultural Officer"
      },
      hi: {
        title: "कांजिरापल्ली सरकारी कृषि भवन",
        description: "सरकारी सहायता केंद्र जो रियायती जैव-उर्वरक, उच्च उपज वाले नारियल के पौधे और कृषि मशीनरी किराए पर प्रदान करता है।",
        category: "कृषि भवन",
        location: "पशु चिकित्सालय के सामने, मुख्य मार्ग, कांजिरापल्ली, कोट्टायम",
        hours: "सुबह 10:00 - शाम 5:00 (रविवार और सरकारी अवकाशों पर बंद)",
        contactName: "श्रीमती लता माधवन, कृषि अधिकारी"
      },
      te: {
        title: "కంజిరపల్లి ప్రభుత్వ కృషి భవన్",
        description: "రైతు సేవా కేంద్రం. ఇక్కడ సబ్సిడీతో సేంద్రీయ ఎరువులు, నాణ్యమైన కొబ్బరి మొక్కలు మరియు వ్యవసాయ యంత్రాలు లభిస్తాయి.",
        category: "కృషి భవన్ (వ్యవసాయం)",
        location: "పశువుల డిస్పెన్సరీ ఎదురుగా, మెయిన్ రోడ్డు, కంజిరపల్లి, కొట్టాయం",
        hours: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం మరియు ప్రభుత్వ సెలవు దినాలలో మూసివేయబడుతుంది)",
        contactName: "శ్రీమతి లతా మాధవన్, వ్యవసాయ అధికారి"
      }
    }
  },
  {
    id: "serv-4",
    categoryKey: "education",
    phoneNumber: "+91 94475 77889",
    lastVerified: "2026-06-09",
    isEmergency: false,
    districtName: "Alappuzha",
    localityName: "Cherthala",
    translations: {
      ml: {
        title: "ഗവൺമെന്റ് ഹയർ സെക്കൻഡറി സ്കൂൾ (GHSS) മാരാരിക്കുളം",
        description: "സൗജന്യ സ്കൂൾ വിദ്യാഭ്യാസം, സ്മാർട്ട് ഐ.ടി ലാബുകൾ, ഡെയ്‌ലി ഉച്ചഭക്ഷണ പദ്ധതി (കുടുബശ്രീ സൗജന്യ ഉണ്ണ്), സർഗ്ഗാത്മക കലാ കായിക ക്ലബ്ബുകൾ.",
        category: "സ്കൂളുകളും വിദ്യാഭ്യാസവും",
        location: "സ്കൂൾ ജംഗ്ഷൻ, ആലപ്പുഴ ഹൈവേ റോഡ്, മാരാരിക്കുളം നോർത്ത്",
        hours: "രാവിലെ 9:00 - വൈകുന്നേരം 4:30 (തിങ്കൾ മുതൽ വെള്ളി വരെ)",
        contactName: "ശ്രീ. രാധാകൃഷ്ണൻ കെ., ഹെഡ്മാസ്റ്റർ"
      },
      en: {
        title: "Government Higher Secondary School (GHSS) Mararikulam",
        description: "Public high school education with state-funded high-tech computer lab, daily nutritional lunch scheme, and vibrant co-curricular clubs.",
        category: "Schools & Education",
        location: "School Junction, National Highway Side, Mararikulam North, Alappuzha",
        hours: "9:00 AM - 4:30 PM (Monday to Friday)",
        contactName: "Shri. Radhakrishnan K., Headmaster"
      },
      hi: {
        title: "सरकारी उच्चतर माध्यमिक विद्यालय (GHSS) मारारीकुलम",
        description: "हाई-टेक कंप्यूटर लैब, दैनिक पोषणयुक्त दोपहर भोजन योजना, और पाठ्येतर गतिविधि क्लबों से सुसज्जित सरकारी स्कूल।",
        category: "विद्यालय व शिक्षा",
        location: "स्कूल जंक्शन, राष्ट्रीय राजमार्ग के किनारे, मारारीकुलम उत्तर, अलाप्पुझा",
        hours: "सुबह 9:00 - शाम 4:30 (सोमवार से शुक्रवार)",
        contactName: "श्रीक राधाकृष्णन के., प्रधानाध्यापक"
      },
      te: {
        title: "ప్రభుత్వ ఉన్నత పాఠశాల (GHSS) మారారికుళం",
        description: "ప్రభుత్వ ప్రాయోజిత పాఠశాల. ఇక్కడ హైటెక్ లాబ్‌లు, మధ్యాహ్న భోజనం మరియు వివిధ విద్యా క్లబ్బుల సదుపాయం ఉన్నాయి.",
        category: "పాఠశాలలు & విద్య",
        location: "స్కూల్ జంక్షన్, జాతీయ రహదారి పక్కన, మారారికుళం నార్త్, అలప్పుజ",
        hours: "ఉదయం 9:00 - సాయంత్రం 4:30 (సోమవారం నుండి శుక్రవారం వరకు)",
        contactName: "శ్రీ రాధాకృష్ణన్ കെ., హెడ్మాస్టర్"
      }
    }
  },
  {
    id: "serv-5",
    categoryKey: "government",
    phoneNumber: "+91 94960 45456",
    lastVerified: "2026-06-11",
    isEmergency: false,
    districtName: "Thrissur",
    localityName: "Chalakudy",
    translations: {
      ml: {
        title: "അതിരപ്പിള്ളി ഗ്രാമപഞ്ചായത്ത് ഓഫീസ്",
        description: "ജനന-മരണ സർട്ടിഫിക്കറ്റ് രജിസ്ട്രേഷൻ, തൊഴിലുറപ്പ് പദ്ധതി വിവരങ്ങൾ (MGNREGS), നികുതി ശേഖരണം, സാമുദായിക വികസന പദ്ധതികൾ.",
        category: "തദ്ദേശ സ്വയംഭരണം / പഞ്ചായത്ത്",
        location: "പഞ്ചായത്ത് ഭവൻ, വെറ്റിലപ്പാറ ജംഗ്ഷൻ, അതിരപ്പിള്ളി, തൃശൂർ",
        hours: "രാവിലെ 10:00 - വൈകുന്നേരം 5:00 (രണ്ടാം ശനിയാഴ്‌ചയും ഞായറാഴ്ചയും ഒഴികെ)",
        contactName: "ശ്രീമതി ശൈലജ പി., പഞ്ചായത്ത് സെക്രട്ടറി"
      },
      en: {
        title: "Athirappilly Grama Panchayat Family Service Centre",
        description: "Local citizen portal for registration certificates, MGNREGS rural employment coordination, construction permits, and welfare pensions.",
        category: "Grama Panchayat Office",
        location: "Panchayat Bhawan, Vettilappara Junction, Athirappilly, Thrissur District",
        hours: "10:00 AM - 5:00 PM (Closed 2nd Saturdays & Sundays)",
        contactName: "Smt. Shailaja P., Panchayat Secretary"
      },
      hi: {
        title: "अतिराप्पिल्ली ग्राम पंचायत कार्यालय",
        description: "जन्म-मृत्यु प्रमाण पत्र, मनरेगा (MGNREGS) ग्रामीण रोजगार समन्वय, निर्माण परमिट, और कल्याण पेंशन के लिए नागरिक पोर्टल।",
        category: "ग्राम पंचायत कार्यालय",
        location: "पंचायत भवन, वेट्टिलापारा जंक्शन, अतिराप्पिल्ली, त्रिशूर जिला",
        hours: "सुबह 10:00 - शाम 5:00 (दूसरा शनिवार और रविवार अवकाश)",
        contactName: "श्रीमती शैलजा पी., पंचायत सचिव"
      },
      te: {
        title: "అతిరపల్లి గ్రామ పంచాయతీ కార్యాలయం",
        description: "జనన మరణ ధృవీకరణ పత్రాలు, ఉపాధి హామీ పథకము (MGNREGS), భవన అనుమతులు మరియు పెన్షన్ వివరాల సహాయ కేంద్రం.",
        category: "గ్రామ పంచాయతీ కార్యాలయం",
        location: "పంచాయతీ భవనం, వెట్టిలాపరా కూడలి, అతిరపల్లి, త్రిసూర్ జిల్లా",
        hours: "ఉదయం 10:00 - సాయంత్రం 5:00 (2వ శనివారం మరియు ఆదివారం సెలవు)",
        contactName: "శ్రీమతి శైలజ పి., పంచాయతీ కార్యదర్శి"
      }
    }
  },
  {
    id: "serv-6",
    categoryKey: "health",
    phoneNumber: "+91 496 252 2033",
    lastVerified: "2026-06-11",
    isEmergency: true,
    districtName: "Kozhikode",
    localityName: "Vadakara",
    translations: {
      ml: {
        title: "വടകര ഗവൺമെൻ്റ് താലൂക്ക് ഹെഡ്ക്വാർട്ടേഴ്സ് ആശുപത്രി",
        description: "24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന അത്യാഹിത വിഭാഗം, മെറ്റേണിറ്റി വാർഡ്, ട്രോമ കെയർ യൂണിറ്റ്, അത്യാധുനിക ഐ.സി.യു സൗകര്യങ്ങൾ.",
        category: "കുടുംബാരോഗ്യ കേന്ദ്രം",
        location: "ലിങ്ക് റോഡ്, താലൂക്ക് ഓഫീസ് പരിസരം, വടകര, കോഴിക്കോട്",
        hours: "അത്യാഹിത വിഭാഗം: 24 മണിക്കൂറും (ഒ.പി സമയം: രാവിലെ 8:00 - ഉച്ചയ്ക്ക് 2:00)",
        contactName: "ഡോ. പ്രശാന്ത് ടി. കെ., ചീഫ് മെഡിക്കൽ സൂപ്രണ്ട്"
      },
      en: {
        title: "Vadakara Government Taluk Headquarters Hospital",
        description: "24/7 emergency trauma response, ICU services, pediatric wings, major general outpatient departments, and free generic medicine counter.",
        category: "Family Health Centre",
        location: "Link Road, near Taluk Office, Vadakara, Kozhikode District",
        hours: "24/7 Casualty Response | OPD: 8:00 AM - 2:00 PM",
        contactName: "Dr. Prashanth T. K., Chief Medical Superintendent"
      },
      hi: {
        title: "वदकरा सरकारी तालुक मुख्यालय अस्पताल",
        description: "24/7 आपातकालीन ट्रामा प्रतिक्रिया, आईसीयू सेवाएं, बाल रोग विंग और मुफ्त जेनेरिक दवा काउंटर।",
        category: "स्वास्थ्य केंद्र",
        location: "लिंक रोड, तालुक कार्यालय के पास, वदकरा, कोझिकोड",
        hours: "24 घंटे आपातकालीन सेवा | ओपीडी: सुबह 8:00 - दोपहर 2:00",
        contactName: "डॉ. प्रशांत टी के., मुख्य चिकित्सा अधीक्षक"
      },
      te: {
        title: "వదకర ప్రభుత్వ తాలూకా ప్రధాన కార్యాలయ ఆసుపత్రి",
        description: "24/7 అత్యవసర ట్రామా విభాగం, ఐసీయూ సేవలు, ఉచిత మందుల పంపిణీ కేంద్రం మరియు అంబులెన్స్ సదుపాయం.",
        category: "కుటుంబ ఆరోగ్య కేంద్రం",
        location: "లింక్ రోడ్, తాలూకా కార్యాలయం దగ్గర, వదకర, కోజికోడ్",
        hours: "24/7 అత్యవసర సేవలు | ఓపిడి: ఉదయం 8:00 - మధ్యాహ్నం 2:00",
        contactName: "డాక్టర్ ప్రశాంత్ టి. కె., చీఫ్ మెడికల్ సూపర్వైజర్"
      }
    }
  },
  {
    id: "serv-7",
    categoryKey: "health",
    phoneNumber: "+91 496 250 1120",
    lastVerified: "2026-06-11",
    isEmergency: false,
    districtName: "Kozhikode",
    localityName: "Chombala",
    translations: {
      ml: {
        title: "ചോമ്പാല കുടുംബാരോഗ്യ കേന്ദ്രം (FHC)",
        description: "തദ്ദേശീയ പ്രവാസി കമ്മ്യൂണിറ്റിയും സർക്കാരും ചേർന്ന് അത്യാധുനികമാക്കിയ കുടുംബാരോഗ്യ കേന്ദ്രം. മികച്ച ഒ.പി കൗണ്ടറുകൾ, പ്രഷർ-ഷുഗർ ക്ലിനിക്കുകൾ, കുത്തിവെപ്പ് വിഭാഗം.",
        category: "കുടുംബാരോഗ്യ കേന്ദ്രം",
        location: "ചോമ്പാല ഫിഷറി സ്കൂൾ റോഡ്, ചോമ്പാല, വടകര, കോഴിക്കോട്",
        hours: "രാവിലെ 8:30 - ഉച്ചയ്ക്ക് 2:30 (ഞായർ ഒഴികെ)",
        contactName: "ഡോ. സജ്ന റസാഖ്, മെഡിക്കൽ ഓഫീസർ"
      },
      en: {
        title: "Chombala Family Health Centre (FHC)",
        description: "Locally upgraded primary health facility with outpatient checkups, immunizations, and standard health monitoring clinics.",
        category: "Family Health Centre",
        location: "Fishery School Road, Chombala, near Vadakara, Kozhikode District",
        hours: "8:30 AM - 2:30 PM (Closed Sundays)",
        contactName: "Dr. Sajna Razak, Medical Officer"
      },
      hi: {
        title: "चोमबाला पारिवारिक स्वास्थ्य केंद्र (FHC)",
        description: "स्थानीय उन्नत प्राथमिक स्वास्थ्य सुविधा। बाहरी रोगी परामर्श, नियमित टीकाकरण और मुफ्त जीवनशैली रोग क्लीनिक।",
        category: "स्वास्थ्य केंद्र",
        location: "फिशरी स्कूल रोड, चोमबाला, वदकरा के पास, कोझिकोड",
        hours: "सुबह 8:30 - दोपहर 2:30 (रविवार अवकाश)",
        contactName: "डॉ. सजना रज़ाक, चिकित्सा अधिकारी"
      },
      te: {
        title: "చోంబాల కుటుంబ ఆరోగ్య కేంద్రం (FHC)",
        description: "స్థానిక ప్రభుత్వ వైద్యశాల. ఉచిత వైద్య పరీక్షలు, పిల్లల వ్యాధి నిరోధక టీకాలు మరియు మందుల పంపిణీ కేంద్రం.",
        category: "కుటుంబ ఆరోగ్య కేంద్రం",
        location: "ఫిషరీ స్కూల్ రోడ్, చోంబాల, వదకర సమీపంలో, కోజికోడ్",
        hours: "ఉదయం 8:30 - మధ్యాహ్నం 2:30 (ఆదివారం సెలవు)",
        contactName: "డాక్టర్ సజ్నా రజాక్, medకాలీ ఆఫీసర్"
      }
    }
  },
  {
    id: "serv-8",
    categoryKey: "water",
    phoneNumber: "+91 94474 88321",
    lastVerified: "2026-06-10",
    isEmergency: false,
    districtName: "Kozhikode",
    localityName: "Mukkali",
    translations: {
      ml: {
        title: "മുക്കാളി കുടിവെള്ള വിതരണ ശുദ്ധീകരണ പ്ലാന്റ് (ജലനിധി)",
        description: "മുക്കാളി ടൗണിനും തീരദേശ മേഖലകൾക്കും ആവശ്യമായ ശുദ്ധജല വിതരണ പ്ലാന്റ്. ഉയർന്ന ഗുണനിലവാരമുള്ള ഫിൽട്ടർ സ്റ്റേഷൻ.",
        category: "കുടിവെള്ള പദ്ധതി",
        location: "മുക്കാളി റെയിൽവേ ഗേറ്റിന് സമീപം, ചോമ്പാല മൊട്ട, കോഴിക്കോട്",
        hours: "രാവിലെ 5:30 - 9:00 | വൈകുന്നേരം 4:30 - 7:30",
        contactName: "ശ്രീ. പ്രകാശൻ വി. കെ., പ്ലാന്റ് ഓപ്പറേറ്റർ"
      },
      en: {
        title: "Mukkali Clean Water Supply Substation (Jalanidhi)",
        description: "Filtered drinking water supply station routing clean water to Mukkali coastal areas and high-density neighborhoods.",
        category: "Water Supply Project",
        location: "Near Mukkali Railway Level Cross, Chombala Road, Kozhikode",
        hours: "5:30 AM - 9:00 AM | 4:30 PM - 7:30 PM",
        contactName: "Shri. Prakashan V. K., Plant Operator"
      },
      hi: {
        title: "मुक्काली स्वच्छ जल आपूर्ति उपकेंद्र (जलनिधि)",
        description: "फिल्टर्ड पेयजल संयंत्र जो मुक्काली तटीय क्षेत्रों और आसपास के गांवों में स्वच्छ पेयजल वितरित करता है।",
        category: "पेयजल परियोजना",
        location: "मुक्काली रेलवे लेवल क्रॉस के पास, चोमबाला रोड, कोझिकोड",
        hours: "सुबह 5:30 - 9:30 | शाम 4:30 - 7:30",
        contactName: "श्री प्रकाशान वी. के., संयंत्र संचालक"
      },
      te: {
        title: "ముక్కాళి మంచినీటి సరఫరా ఉపకేంద్రం",
        description: "ముక్కాళి తీరప్రాంతం మరియు సమీప గ్రామాలకు సురక్షితమైన శుద్ధి చేసిన త్రాగునీటిని అందించే జలనిధి ప్లాంట్.",
        category: "త్రాగునీటి పథకం",
        location: "ముక్కాళి రైల్వే గేట్ దగ్గర, చోంబాల రోడ్, కోజికోడ్",
        hours: "ఉదయం 5:30 - 9:00 | సాయంత్రం 4:30 - 7:30",
        contactName: "శ్రీ ప్రకాశన్ వి. కె., ప్లాంట్ ఆపరేటర్"
      }
    }
  },
  {
    id: "serv-9",
    categoryKey: "government",
    phoneNumber: "+91 496 250 2030",
    lastVerified: "2026-06-11",
    isEmergency: false,
    districtName: "Kozhikode",
    localityName: "Chombala",
    translations: {
      ml: {
        title: "ചോമ്പാല ഗ്രാമപഞ്ചായത്ത് ആസ്ഥാന കാര്യാലയം",
        description: "ചോമ്പാല (അഴിയൂർ ഗ്രൂപ്പ്) തദ്ദേശ ഭരണകേന്ദ്രം. പഞ്ചായത്ത് കൗൺസിൽ ബിൽഡിംഗ്. ജനന-മരണ രജിസ്ട്രേഷൻ, പെൻഷൻ വിവരങ്ങൾ, തീരദേശ വികസന യോജന.",
        category: "തദ്ദേശ സ്വയംഭരണം / പഞ്ചായത്ത്",
        location: "പഞ്ചായത്ത് റോഡ്, അഴിയൂർ ജംഗ്ഷന് സമീപം, ചോമ്പാല, കോഴിക്കോട്",
        hours: "രാവിലെ 10:00 - വൈകുന്നേരം 5:00 (ഞായർ ഒഴികെ)",
        contactName: "ശ്രീമതി റീന വിജയൻ, വികസന സ്റ്റാൻഡിങ് കമ്മിറ്റി ചെയർപേഴ്സൺ"
      },
      en: {
        title: "Chombala Grama Panchayat Administrative Office",
        description: "Local administrative headquarters for Chombala (Azhiyur area). Handles civic registrations, beach management, sea erosion barrier coordination, and pension verification.",
        category: "Grama Panchayat Office",
        location: "Panchayat Road, Near Azhiyur, Chombala, Kozhikode District",
        hours: "10:00 AM - 5:00 PM (Closed Sundays)",
        contactName: "Smt. Reena Vijayan, Standing Committee Chairperson"
      },
      hi: {
        title: "चोमबाला ग्राम पंचायत प्रशासनिक कार्यालय",
        description: "चोमबाला क्षेत्र का स्थानीय प्रशासनिक मुख्यालय। नागरिक पंजीकरण, स्थानीय विकास और पेंशन वितरण सेवाएं।",
        category: "ग्राम पंचायत कार्यालय",
        location: "पंचायत रोड, अझीयूर के पास, चोमबाला, कोझिकोड",
        hours: "सुबह 10:00 - शाम 5:00 (रविवार अवकाश)",
        contactName: "श्रीमती रीना विजयन, समिति अध्यक्ष"
      },
      te: {
        title: "చోంబాల గ్రామ పంచాయతీ పరిపాలనా కార్యాలయం",
        description: "స్థానిక పరిపాలనా కేంద్రం. జనన, మరణ ధృవీకరణ పత్రాలు, ప్రభుత్వ పెన్షన్లు మరియు తీరప్రాంత అభివృద్ధి పథకాలను పర్యవేక్షిస్తుంది.",
        category: "గ్రామ పంచాయతీ కార్యాలయం",
        location: "పంచాయితీ రోడ్, అళీయూర్ సమీపంలో, చోంబాల, కోజికోడ్",
        hours: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
        contactName: "శ్రీమతి రీనా విజయన్, కమిటీ చైర్‌పర్సన్"
      }
    }
  },
  {
    id: "serv-10",
    categoryKey: "agriculture",
    phoneNumber: "+91 496 251 4321",
    lastVerified: "2026-06-11",
    isEmergency: false,
    districtName: "Kozhikode",
    localityName: "Vadakara",
    translations: {
      ml: {
        title: "വടകര ഗവൺമെൻ്റ് കൃഷിഭവൻ ഒപ്പം മണ്ണു പരിശോധനാ ലബോറട്ടറി",
        description: "നെൽകൃഷി പ്രോത്സാഹനം, തെങ്ങിൻ തൈ വിതരണം, ജൈവവള വില്പന കൗണ്ടർ, അത്യുത്പാദനശേഷിയുള്ള പരമ്പരാഗത വിത്ത് ബാങ്ക്.",
        category: "കൃഷിഭവൻ",
        location: "സിവിൽ സ്റ്റേഷൻ പ്ലേഗ്രൗണ്ടിന് സമീപം, പഴയ ബസ് സ്റ്റാൻഡിലേക്ക് പോകുന്ന വഴി, വടകര, കോഴിക്കോട്",
        hours: "രാവിലെ 10:00 - വൈകുന്നേരം 4:00 (ഞായർ ഒഴികെ)",
        contactName: "ശ്രീ. പ്രമോദ് മാധവൻ, കൃഷി ഡെപ്യൂട്ടി ഡയറക്ടർ"
      },
      en: {
        title: "Vadakara Government Krishi Bhavan & Soil Clinic",
        description: "Assisting local farmers with subsidized fertilizers, hybrid standard seedlings, modern organic compost bins, and automated soil testing labs.",
        category: "Krishi Bhavan",
        location: "Beside Civil Station Playground, Old Bus Stand Road, Vadakara, Kozhikode District",
        hours: "10:00 AM - 4:00 PM (Closed Sundays)",
        contactName: "Shri. Pramod Madhavan, Deputy Agricultural Officer"
      },
      hi: {
        title: "वदकरा सरकारी कृषि भवन और मृदा प्रयोगशाला",
        description: "किसानों को रियायती खाद, उन्नत बीज, आधुनिक जैविक खाद डिब्बे और मृदा परीक्षण सुविधाएं प्रदान करना।",
        category: "कृषि भवन",
        location: "सिविल स्टेशन प्लेग्राउंड के पास, पुराने बस स्टैंड रोड, वदकरा, कोझिकोड",
        hours: "सुबह 10:00 - शाम 4:00 (रविवार अवकाश)",
        contactName: "श्री प्रमोद माधवन, उप कृषि अधिकारी"
      },
      te: {
        title: "వదకర ప్రభుత్వ కృషి భవన్ మరియు మట్టి పరీక్షా కేంద్రం",
        description: "రైతులకు సబ్సిడీ ఎరువులు, అంటు కట్టిన మొక్కలు, సేంద్రీయ ఎరువు డబ్బాలు మరియు మట్టి విశ్లేషణను అందచేసే వ్యవసాయ కేంద్రం.",
        category: "కృషి భవన్ (వ్యవసాయం)",
        location: "సివిల్ സ്റ്റേഷൻ ഗ്രൗണ്ട് പక్కన, പాత ബస్ സ്റ്റാండ్ റോడ్డు, വదకర, కోజికోడ్",
        hours: "ఉదయం 10:00 - సాయంత్రం 4:00 (ఆదివారం సెలవు)",
        contactName: "శ్రీ ప్రమోద్ మాధవన్, డిప్యూటీ వ్యవసాయ అధికారి"
      }
    }
  },
  {
    id: "serv-11",
    categoryKey: "education",
    phoneNumber: "+91 94974 54312",
    lastVerified: "2026-06-09",
    isEmergency: false,
    districtName: "Kozhikode",
    localityName: "Mukkali",
    translations: {
      ml: {
        title: "ഗവൺമെന്റ് അപ്പർ & ലോവർ പ്രൈമറി സ്കൂൾ (GLPS) മുക്കാളി",
        description: "മുക്കാളി പ്രദേശത്തെ ഏറ്റവും പഴക്കം ചെന്ന പ്രാഥമിക വിദ്യാലയം. മികച്ച സ്മാർട്ട് ക്ലാസ്സ്‌റൂമുകൾ, ലാംഗ്വേജ് ലാബ്, ഉച്ചഭക്ഷണ സൌകര്യങ്ങൾ.",
        category: "സ്കൂളുകളും വിദ്യാഭ്യാസവും",
        location: "മുക്കാളി ബീച്ച് ഹൈവേ ജംഗ്ഷൻ, ചോമ്പാല പി.ഒ, വടകര വിയ, കോഴിക്കോട്",
        hours: "രാവിലെ 9:30 - വൈകുന്നേരം 4:00 (തിങ്കൾ മുതൽ വെള്ളി വരെ)",
        contactName: "ശ്രീമതി സരസ്വതി അമ്മ, പ്രഥമാധ്യാപിക"
      },
      en: {
        title: "Government Lower Primary School (GLPS) Mukkali",
        description: "Legacy village primary educational institution with modern interactive smart screens, multi-language activity labs, and daily warm hot lunch program.",
        category: "Schools & Education",
        location: "Mukkali Highway Junction, Chombala PO, Vadakara via, Kozhikode",
        hours: "9:30 AM - 4:00 PM (Monday to Friday)",
        contactName: "Smt. Saraswathi Amma, Headmistress"
      },
      hi: {
        title: "मुक्काली सरकारी प्राथमिक विद्यालय (GLPS)",
        description: "मुक्काली क्षेत्र का सुस्थापित प्राथमिक विद्यालय। आधुनिक इंटरैक्टिव स्मार्ट स्क्रीन, बहुभाषी प्रयोगशाला और पोषण योजना लागू।",
        category: "विद्यालय व शिक्षा",
        location: "मुक्काली हाईवे जंक्शन, चोमबाला पी.ओ., वदकरा वाया, कोझिकोड",
        hours: "सुबह 9:30 - शाम 4:00 (सोमवार से शुक्रवार)",
        contactName: "श्रीमती सरस्वती अम्मा, प्रधानाध्यापिका"
      },
      te: {
        title: "ప్రభుత్వ ప్రాథమిక పాఠశాల (GLPS) ముక్కాళి",
        description: "ముక్కాళి ప్రాంతంలోని పురాతన ప్రభుత్వ ప్రాథమిక పాఠశాల. ఇంటరాక్టివ్ స్మార్ట్ స్క్రీన్లు మరియు ప్రతిరోజూ మధ్యాహ్న భోజన పథకము అందుబాటులో ఉన్నాయి.",
        category: "పాఠశాలలు & విద్య",
        location: "ముక్కాళి హైవే జంక్షన్, చోంబాల పోస్ట్, వదకర మీదుగా, కోజికోడ్",
        hours: "ఉదయం 9:30 - సాయంత్రం 4:00 (సోమవారం నుండి శుక్రవారం వరకు)",
        contactName: "శ్రీమతి సరస్വతి అమ్మ, ప్రధానోపాధ్యాయురాలు"
      }
    }
  }
];

export const KERALA_DISTRICTS = [
  { en: "Thiruvananthapuram", ml: "തിരുവനന്തപുരം", te: "తిరువనంతపురం", hi: "तिरुवनंतपुरम" },
  { en: "Kollam", ml: "കൊല്ലം", te: "కొల్లాం", hi: "कोल्लम" },
  { en: "Pathanamthitta", ml: "പത്തനംതിട്ട", te: "పతనంతిట్ట", hi: "पतनमतिट्टा" },
  { en: "Alappuzha", ml: "ആലപ്പുഴ", te: "అలప్పుజ", hi: "अलाप्पुझा" },
  { en: "Kottayam", ml: "കോട്ടയം", te: "కొట్టాయం", hi: "कोट्टायम" },
  { en: "Idukki", ml: "ഇടുക്കി", te: "ఇడుక్కి", hi: "इडुक्की" },
  { en: "Ernakulam", ml: "എറണാകുളം", te: "ఎర్నాకుళం", hi: "एर्नाकुलम" },
  { en: "Thrissur", ml: "തൃശ്ശൂർ", te: "త్రిస్సూర్", hi: "त्रिशूर" },
  { en: "Palakkad", ml: "పాలക്കാട്", te: "పాలక్కాడ్", hi: "पालक्कड़" },
  { en: "Malappuram", ml: "മലപ്പുറം", te: "మలప్పురం", hi: "मलप्पुरम" },
  { en: "Kozhikode", ml: "കോഴിക്കോട്", te: "కోజికోడ్", hi: "कोझिकोड" },
  { en: "Wayanad", ml: "വയനാട്", te: "వయനാട്", hi: "वायनाड" },
  { en: "Kannur", ml: "കണ്ണൂർ", te: "కన్నూర్", hi: "कन्नूर" },
  { en: "Kasaragod", ml: "കാസർഗോഡ്", te: "కాసరగోడ్", hi: "कासरगोड" }
];

export const LOCALITIES_EN: Record<string, string[]> = {
  "Thiruvananthapuram": ["Neyyattinkara", "Attingal", "Nedumangad", "Varkala", "Kovalam", "Kazhakkoottam", "Balaramapuram", "Kattakada"],
  "Kollam": ["Punalur", "Karunagappally", "Kottarakkara", "Paravur", "Chavara", "Anchal", "Pathanapuram", "Kundara"],
  "Pathanamthitta": ["Thiruvalla", "Adoor", "Pandalam", "Ranni", "Konni", "Mallappally", "Kozhencherry", "Aranmula"],
  "Alappuzha": ["Cherthala", "Kayamkulam", "Haripad", "Ambalappuzha", "Mavelikkara", "Chengannur", "Kuttanad", "Aroor"],
  "Kottayam": ["Changanassery", "Pala", "Vaikom", "Kanjirappally", "Ettumanoor", "Pampady", "Erattupetta", "Vazhoor"],
  "Idukki": ["Munnar", "Kattappana", "Thodupuzha", "Santhanpara", "Adimali", "Devikulam", "Peermade", "Kumily"],
  "Ernakulam": ["Aluva", "Muvattupuzha", "Kothamangalam", "Perumbavoor", "Angamaly", "North Paravur", "Kalamassery", "Tripunithura"],
  "Thrissur": ["Chalakudy", "Kunnamkulam", "Guruvayur", "Kodungallur", "Wadakkanchery", "Chavakkad", "Irinjalakuda", "Vatanappally"],
  "Palakkad": ["Ottapalam", "Shoranur", "Chittur", "Alathur", "Mannarkkad", "Cherpulassery", "Pattambi", "Vadakkencherry"],
  "Malappuram": ["Manjeri", "Tirur", "Ponnani", "Kottakkal", "Perinthalmanna", "Nilambur", "Kondotty", "Valanchery"],
  "Kozhikode": ["Koyilandy", "Vadakara", "Chombala", "Mukkali", "Mukkam", "Ramanattukara", "Feroke", "Koduvally", "Payyoli", "Kunnamangalam"],
  "Wayanad": ["Kalpetta", "Mananthavady", "Sulthan Bathery", "Vythiri", "Meppadi", "Pozhuthana", "Panamaram", "Pulpally"],
  "Kannur": ["Thalassery", "Taliparamba", "Payyanur", "Iritty", "Mattannur", "Kuthuparamba", "Alakode", "Chakkarakkal"],
  "Kasaragod": ["Kanhangad", "Nileshwaram", "Uppala", "Manjeshwar", "Trikaripur", "Kumbla", "Badiyadka", "Cheruvathur"]
};

export const LOCALITIES_ML: Record<string, string[]> = {
  "Thiruvananthapuram": ["നെയ്യാറ്റിൻകര", "ആറ്റിങ്ങൽ", "നെടുമങ്ങാട്", "വർക്കല", "കോവളം", "കഴക്കൂട്ടം", "ബാലരാമപുരം", "കാട്ടാക്കട"],
  "Kollam": ["പുനലൂർ", "കരുനാഗപ്പള്ളി", "കൊട്ടാരക്കര", "പരവൂർ", "ചവറ", "അഞ്ചൽ", "പത്തനാപുരം", "കുണ്ടറ"],
  "Pathanamthitta": ["തിരുവല്ല", "അടൂർ", "പന്തളം", "റാന്നി", "കോന്നി", "മല്ലപ്പള്ളി", "കോഴഞ്ചേരി", "ആറന്മുള"],
  "Alappuzha": ["ചേർത്തല", "കായംകുളം", "ഹരിപ്പാട്", "അമ്പലപ്പുഴ", "മാവേലിക്കര", "ചെങ്ങന്നൂർ", "കുട്ടനാട്", "അരൂർ"],
  "Kottayam": ["ചങ്ങനാശ്ശേരി", "പാലാ", "വൈക്കം", "കാഞ്ഞിരപ്പള്ളി", "എറ്റുമാനൂർ", "പാമ്പാടി", "ഈരാറ്റുപേട്ട", "വാഴൂർ"],
  "Idukki": ["മൂന്നാർ", "കട്ടപ്പന", "തൊടുപുഴ", "ശാന്തൻപാറ", "അടിമാലി", "ദേവികുളം", "പീരുമേട്", "കുമിളി"],
  "Ernakulam": ["ആലുവ", "മൂവാറ്റുപുഴ", "കോതമംഗലം", "പെരുമ്പാവൂർ", "അങ്കമാലി", "നോർത്ത് പറവൂർ", "കളമശ്ശേരി", "തൃപ്പൂണിത്തുറ"],
  "Thrissur": ["ചാലക്കുടി", "കുന്നത്ത്കുളം", "ഗുруവായൂർ", "കൊടുങ്ങല്ലൂർ", "വടക്കാഞ്ചേരി", "ചാവക്കാട്", "ഇരിങ്ങാലക്കുട", "വാടാനപ്പള്ളി"],
  "Palakkad": ["ഒറ്റപ്പാലം", "ഷൊർണ്ണൂർ", "ചിറ്റൂർ", "ആലത്തൂർ", "മണ്ണാർക്കാട്", "ചെർപ്പുളശ്ശേരി", "പട്ടാമ്പി", "വടക്കഞ്ചേരി"],
  "Malappuram": ["മഞ്ചേരി", "തിരൂർ", "പൊന്നാനി", "കോട്ടയ്ക്കൽ", "പെരിന്തൽമണ്ണ", "നിലമ്പൂർ", "കൊണ്ടോട്ടി", "വളാഞ്ചേരി"],
  "Kozhikode": ["കൊയിലാണ്ടി", "വടകര", "ചോമ്പാല", "മുക്കാളി", "മുക്കം", "രാമനാട്ടുകര", "ഫറോക്ക്", "കൊടുവള്ളി", "പയ്യോളി", "കുന്നമംഗലം"],
  "Wayanad": ["കല്പറ്റ", "മാനന്തവാടി", "സുൽത്താൻ ബത്തേരി", "വൈത്തിരി", "മേപ്പാടി", "പൊഴുതന", "പനമരം", "പുൽപ്പള്ളി"],
  "Kannur": ["തലശ്ശേരി", "തളിപ്പറമ്പ്", "പയ്യന്നൂർ", "ഇരിട്ടി", "മട്ടന്നൂർ", "കൂത്തുപറമ്പ്", "ആലക്കോട്", "ചക്കരക്കൽ"],
  "Kasaragod": ["കാഞ്ഞങ്ങാട്", "നീലേശ്വരം", "ഉപ്പള", "മഞ്ചേശ്വരം", "തൃക്കരിപ്പൂർ", "കുമ്പള", "ബദിയടുക്ക", "ചെറുവത്തൂർ"]
};

export const LOCALITIES_HI: Record<string, string[]> = {
  "Thiruvananthapuram": ["नेय्याट्टिनकरा", "आटिंगल", "नेदुमंगाड", "वर्कला", "कोवलम", "कषक्कोट्टम", "बालरामपुरम", "काट्टाकडा"],
  "Kollam": ["पुनलूर", "करुनागप्पल्ली", "कोट्टारकड़ा", "परवूर", "चवरा", "अंचल", "पथानापुरम", "कुंडरा"],
  "Pathanamthitta": ["तिरुवल्ला", "अदूर", "पंडालम", "रैनी", "कोन्नी", "मल्लप्पल्ली", "कोषंचेरी", "आरणमुला"],
  "Alappuzha": ["चेर्थला", "कायमकुलम", "हरिपाद", "अम्बलप्पुषा", "मावेलिकारा", "चेंगन्नूर", "कुट्टनाड", "अरूर"],
  "Kottayam": ["चंगनास्सेरी", "पाला", "वैकोम", "कांजिरापल्ली", "एट्टूमानूर", "पाम्पाडी", "इराट्टुपेट्टा", "वाझूर"],
  "Idukki": ["मुन्नार", "कट्टापना", "थोडुपुषा", "संथनपारा", "अदिमाली", "देविकुलम", "पीरमेड", "कुमिली"],
  "Ernakulam": ["अलुवा", "मुवाट्टुपुषा", "कोठामंगलम", "पेरुम्बावूर", "अंगमाली", "उत्तर परवूर", "कलमस्सेरी", "त्रिपुनीथुरा"],
  "Thrissur": ["चालाकुडी", "कुन्नमकुलम", "गुरुवयूर", "कोडुंगल्लूर", "वडक्कनचेरी", "चावक्काड", "इरिंजलकुडा", "वाटनापल्ली"],
  "Palakkad": ["ओट्टापाम", "शोरानूर", "चित्तूर", "आलाथुर", "मन्नारक्काड", "चेरपुलास्सेरी", "पट्टाम्बी", "वडक्कनचेरी"],
  "Malappuram": ["मंजेरी", "तिरूर", "पोन्नानी", "कोट्टक्कल", "पेरिंथलमन्ना", "निलाम्बूर", "कोंडोटी", "वलंचेरी"],
  "Kozhikode": ["कोयिलैंडी", "वदकरा", "चोमबाला", "मुक्काली", "मुक्कम", "रामनट्टुकरा", "फेरोक", "कोडुवल्ली", "पय्योली", "कुन्नमंगलम"],
  "Wayanad": ["कपेट्टा", "मानाथवडी", "सुल्तान बथेरी", "वयथिरी", "मेप्पाडी", "पोझुथाना", "पनामराम", "पुलपल्ली"],
  "Kannur": ["थलस्सेरी", "तलिपरम्बा", "पय्यानूर", "इरित्ती", "मट्टानूर", "कुथुपरम्बा", "अलाकोड", "चक्करक्कल"],
  "Kasaragod": ["कान्हांगड", "नीलेश्वरम", "उप्पला", "मंजेश्वर", "त्रिकरीपुर", "कुम्बला", "बदियदका", "चेरुवथूर"]
};

export const LOCALITIES_TE: Record<string, string[]> = {
  "Thiruvananthapuram": ["నేయ్యాటిన్కరా", "ఆటింగల్", "నెడుమంగాడ్", "వర్కలా", "కోవళం", "కళకూట్టం", "బాలరామపురం", "కాట్టాకడ"],
  "Kollam": ["పునలూర్", "కరుణాగపల్లి", "కొట్టారక్కర", "పరవూర్", "చవరా", "అంచల్", "పతనాపురం", "కుండ్రా"],
  "Pathanamthitta": ["తిరువల్లా", "అదూర్", "పందళం", "రన్ని", "కోన్ని", "మల్లపల్లి", "కోజంచేరి", "ఆరన్ముల"],
  "Alappuzha": ["చేర్తల", "కాయంకుళం", "హరిపాడ్", "అంబలపూజ", "మావెలిక్కర", "చెంగన్నూర్", "కుట్టనాడ్", "అరూర్"],
  "Kottayam": ["చంగనాస్సేరి", "పాలా", "వైకోమ్", "కంజిరపల్లి", "ఎట్టుమానూర్", "పాంపాడు", "ఈరాట్టుపేట", "వాళూర్"],
  "Idukki": ["మున్నార్", "కట్టప్పన", "തോടുపూజ", "సంతన్‌పారా", "అడిమాలి", "దేవికుళం", "పీరుమేడ్", "కుమిలి"],
  "Ernakulam": ["అలువా", "మువాట్టుపూజ", "కోతామంగళం", "పెరుంబవూర్", "అంగమాలి", "ఉత్తర పరవూర్", "కలమస్సేరి", "త్రిపునితుర"],
  "Thrissur": ["చాలకుడి", "కున్నంకుళం", "గురువాయూర్", "కోదుంగల్లూర్", "వడక్కంచేరి", "చావక్కాడ్", "ఇరింజలకుడ", "వాటనాపల్లి"],
  "Palakkad": ["ఒట్టపాలం", "షోరనూర్", "చిత్తూర్", "అలత్తూర్", "మన్నార్క్కాడ్", "చేర్పులస్సేరి", "పట్టాంబి", "వడక్కంచేరి"],
  "Malappuram": ["మంజేరి", "తిరూర్", "పొన్నాని", "కొట్టక్కల్", "పెరింతల్మన్న", "నిలంబూర్", "కొండోట్టి", "వలంచేరి"],
  "Kozhikode": ["కోయిలాండి", "వదకర", "చోంబాల", "ముక్కాళి", "ముక్కం", "రామనాట్టుకర", "ఫెరోక్", "కోడువల్లి", "పయ్యోలి", "కున్నమంగళం"],
  "Wayanad": ["కల్పేటా", "మానంతవాడి", "సుల్తాన్ బతేరి", "వైతిరి", "మేప్పాడి", "పోజుతాన", "పనమరం", "పుల్పల్లి"],
  "Kannur": ["తలస్సేరి", "తలిపరంబ", "పయ్యన్నూర్", "ఇరిట్టి", "మట్టన్నూర్", "కూతుపరంబ", "అలకోడ్", "చక్కరక్కల్"],
  "Kasaragod": ["కన్హంగాడ్", "నీలేశ్వరం", "ఉప్పల", "మంజేశ్వర్", "త్రికరిపూర్", "కుంబల", "బదియడ్క", "చెరువత్తూరు"]
};

// Deterministic representative names
const REPRESENTATIVE_NAMES = [
  { en: "Dr. Suresh Kumar", ml: "ഡോ. സുരേഷ് കുമാർ", hi: "डॉ. Suresh Kumar", te: "డాక్టర్ సురేష్ కుమార్" },
  { en: "Smt. Mini Joy", ml: "ശ്രീമതി മിനി ജോയ്", hi: "श्रीमती Mini Joy", te: "శ్రీమతి మిని జాయ్" },
  { en: "Shri. Faisal Rahman", ml: "ശ്രീ. ഫൈസൽ റഹ്മാൻ", hi: "श्री Faisal Rahman", te: "శ్రీ ఫైసల్ రెహమాన్" },
  { en: "Dr. Anjali Thomas", ml: "ഡോ. അഞ്ജലി തോമസ്", hi: "डॉ. Anjali Thomas", te: "డాక్టర్ అంజలి థామస్" },
  { en: "Smt. Sreedevi K.", ml: "ശ്രീമതി ശ്രീദേവി കെ.", hi: "श्रीमती Sreedevi K.", te: "శ్రీమతి శ్రీదేവി కె." },
  { en: "Shri. Harish Kumar", ml: "ശ്രീ. ഹരീഷ് കുമാർ", hi: "श्री Harish Kumar", te: "శ్రీ హరీష్ కుమార్" },
  { en: "Dr. George Mathew", ml: "ഡോ. ജോർജ്ജ് മാത്യു", hi: "डॉ. George Mathew", te: "డాక్టర్ జార్జ్ మాథ్యూ" },
  { en: "Smt. Shailaja Teacher", ml: "ശ്രീമതി ഷൈലജ ടീച്ചർ", hi: "श्रीमती Shailaja Teacher", te: "శ్రీమతి శైలజ టీచర్" },
  { en: "Shri. Shaji Varghese", ml: "ശ്രീ. ഷാജി വർഗീസ്", hi: "श्री Shaji Varghese", te: "శ్రీ షాజీ వర్గీస్" },
  { en: "Dr. Deepthi Nair", ml: "ഡോ. ദീപ്തി നായർ", hi: "डॉ. Deepthi Nair", te: "డాక్టర్ దీప్తి నాయర్" },
  { en: "Shri. Manoj K. S.", ml: "ശ്രീ. മനോജ് കെ. എസ്.", hi: "श्री Manoj K. S.", te: "శ్రీ మనోజ్ കെ. എസ്." },
  { en: "Smt. Bindu Rajesh", ml: "ശ്രീമതി ബിന്ദു രാജേഷ്", hi: "श्रीमती Bindu Rajesh", te: "శ్రీమతి బిందు రాజేష్" },
  { en: "Shri. Venu Gopal", ml: "ശ്രീ. വേണുഗോപാൽ", hi: "श्री Venu Gopal", te: "శ్రీ వేణుగోపాల్" },
  { en: "Smt. Priya Dev", ml: "ശ്രീമതി പ്രിയ ദേവ്", hi: "श्रीमती Priya Dev", te: "శ్రీమతి ప్రియా దేవ్" }
];

const CATEGORY_KEYS: Array<'health' | 'water' | 'agriculture' | 'education' | 'government'> = [
  'health', 'water', 'agriculture', 'education', 'government'
];

type GeneratedLanguage = Exclude<Language, 'kn'>;

interface GeneratedData {
  title: Record<GeneratedLanguage, string>;
  description: Record<GeneratedLanguage, string>;
  category: Record<GeneratedLanguage, string>;
  hours: Record<GeneratedLanguage, string>;
}

// Simple generator logic to generate the remaining 995 services to hit EXACTLY 1000 items!
function generateRemainingServices(): ServiceItem[] {
  const result: ServiceItem[] = [...BASE_SERVICES];
  
  for (let i = 11; i < 10250; i++) {
    const catIndex = (i * 7) % CATEGORY_KEYS.length;
    const catKey = CATEGORY_KEYS[catIndex];
    
    // We want mainly Kozhikode (and specifically Chombala, Mukkali, Vadakara) for 75% of the entries to represent "mainly mukkali(chombala) and vadakara"
    const isMainlyTargeted = (i % 100) < 75; // 75% of entries are targeted

    let district = KERALA_DISTRICTS[i % KERALA_DISTRICTS.length];
    let localityNameEn = "";
    let localityNameMl = "";
    let localityNameHi = "";
    let localityNameTe = "";

    if (isMainlyTargeted) {
      // Force Kozhikode district
      district = KERALA_DISTRICTS.find(d => d.en === "Kozhikode") || district;
      
      // Select among Mukkali, Chombala, Vadakara
      const randType = (i * 17) % 3;
      if (randType === 0) {
        localityNameEn = "Mukkali";
        localityNameMl = "മുക്കാളി";
        localityNameHi = "मुक्काली";
        localityNameTe = "ముక్కాళి";
      } else if (randType === 1) {
        localityNameEn = "Chombala";
        localityNameMl = "ചോമ്പാല";
        localityNameHi = "चोमबाला";
        localityNameTe = "చోంబాల";
      } else {
        localityNameEn = "Vadakara";
        localityNameMl = "വടകര";
        localityNameHi = "वदकरा";
        localityNameTe = "వదకర";
      }
    } else {
      const distIndex = i % KERALA_DISTRICTS.length;
      district = KERALA_DISTRICTS[distIndex];
      
      const localitiesEn = LOCALITIES_EN[district.en];
      const localitiesMl = LOCALITIES_ML[district.en];
      const localitiesHi = LOCALITIES_HI[district.en];
      const localitiesTe = LOCALITIES_TE[district.en];
      
      const locInDistIndex = (i * 3) % localitiesEn.length;
      localityNameEn = localitiesEn[locInDistIndex];
      localityNameMl = localitiesMl[locInDistIndex];
      localityNameHi = localitiesHi[locInDistIndex];
      localityNameTe = localitiesTe[locInDistIndex];
    }
    
    const contactObj = REPRESENTATIVE_NAMES[(i * 9) % REPRESENTATIVE_NAMES.length];
    
    // Generate beautiful random telephone digits
    const phoneDigitA = (i * 13) % 10;
    const phoneDigitRest = (i * 1973) % 90000 + 10000;
    const phoneNumber = `+91 9447${phoneDigitA} ${phoneDigitRest}`;
    
    // Recent verification logs in 2026-06
    const logDay = 11 - (i % 7);
    const lastVerified = `2026-06-${logDay.toString().padStart(2, '0')}`;
    
    // 1 in 3 health services are marked Emergency
    const isEmergency = catKey === 'health' && (i % 3 === 0);
    
    // Construct highly unique titles and descriptions based on index and locality
    let generated: GeneratedData;
    
    if (catKey === 'health') {
      const isHosp = i % 2 === 0;
      generated = {
        title: {
          ml: isHosp ? `${localityNameMl} ഗവ. താലൂക്ക് ആശുപത്രി` : `${localityNameMl} കുടുംബാരോഗ്യ കേന്ദ്രം (FHC)`,
          en: isHosp ? `${localityNameEn} Govt. Taluk Hospital` : `${localityNameEn} Family Health Centre (FHC)`,
          hi: isHosp ? `${localityNameHi} सरकारी तालुक अस्पताल` : `${localityNameHi} पारिवारिक स्वास्थ्य केंद्र`,
          te: isHosp ? `${localityNameTe} ప్రభుత్వ తాలూకా ఆసుపత్రి` : `${localityNameTe} కుటుంబ ఆరోగ్య కేంద్రం`
        },
        description: {
          ml: `സമഗ്രമായ പ്രാദേശിക ആരോഗ്യ സംരക്ഷണം, ഒ.പി താലൂക്ക് സേവനങ്ങൾ, സൗജന്യ മരുന്നുകൾ ലഭ്യമാക്കൽ, നവജാത ശിശു പരിചരണം.`,
          en: `Comprehensive primary and outpatient emergency medical support, essential free medicine warehouse, and pediatric wellness care.`,
          hi: `व्यापक प्राथमिक और उप-केंद्र बाह्य रोगी चिकित्सा सहायता, आपातकालीन ओपीडी सेवा और आवश्यक बाल टीकाकरण कार्यक्रम।`,
          te: `సమగ్ర ప్రాథమిక మరియు అత్యవసర వైద్య సేవలు, ఉచిత మందుల పంపిణీ మరియు శిశు ఆరోగ్య రక్షణ విభాగం.`
        },
        category: {
          ml: "കുടുംബാരോഗ്യ കേന്ദ്രം",
          en: "Family Health Centre",
          hi: "स्वास्थ्य केंद्र",
          te: "కుటుంబ ఆరోగ్య కేంద్రం"
        },
        hours: {
          ml: isEmergency ? "24 മണിക്കൂറും പ്രവർത്തിക്കുന്നു (അത്യാഹിത വിഭാഗം)" : "രാവിലെ 8:30 - ഉച്ചയ്ക്ക് 2:00 | അത്യാഹിതം 24 മണിക്കൂർ",
          en: isEmergency ? "24/7 Emergency Casualty Desk" : "OPD: 8:30 AM - 2:00 PM | Emergency Available",
          hi: isEmergency ? "24/7 आपातकालीन सेवा" : "ओपीडी: सुबह 8:30 - दोपहर 2:00 | आपातकालीन उपलब्ध",
          te: isEmergency ? "24/7 అత్యవసర డెస్క్" : "ఓపిడి: ఉదయం 8:30 - మధ్యాహ్నం 2:00 | అత్యవసర అందుబాటు"
        }
      };
    } else if (catKey === 'water') {
      const isKWA = i % 2 === 0;
      generated = {
        title: {
          ml: isKWA ? `കേരള വാട്ടർ അതോറിറ്റി (KWA) സെക്ഷൻ - ${localityNameMl}` : `ജലനിധി കുടിവെള്ള വിതരണ ഉപകേന്ദ്രം - ${localityNameMl}`,
          en: isKWA ? `Kerala Water Authority (KWA) Section - ${localityNameEn}` : `Jalanidhi Water Supply Substation - ${localityNameEn}`,
          hi: isKWA ? `केरल जल प्राधिकरण अनुभाग - ${localityNameHi}` : `जलनिधि पेयजल उपकेंद्र - ${localityNameHi}`,
          te: isKWA ? `కేరళ నీటి సరఫరా విభాగం - ${localityNameTe}` : `జలనిధి మంచినీటి సబ్-స్టేషన్ - ${localityNameTe}`
        },
        description: {
          ml: `പ്രാദേശിക ജലശുദ്ധീകരണ ശൃംഖല. ഉയർന്ന നിലവാരത്തിലുള്ള റിവേഴ്സ് ഓസ്മോസിസ് ടാങ്കുകളും ശുദ്ധജല വിതരണ പ്ലാന്റും.`,
          en: `Local filtered drinking water substation using high-tech reverse osmosis systems and reservoir tank management.`,
          hi: `उच्च स्तरीय पेयजल फ़िल्टर और आरओ उपचार संयंत्र। पानी की गुणवत्ता और आपूर्ति का स्थानीय प्रबंधन।`,
          te: `స్థానిక సురక్షిత మంచినీటి ఫిల్టరేషన్ ప్లాంట్. రివర్స్ ఆస్మోసిస్ పద్ధతి ద్వారా మంచినీటి పంపిణీ వ్యవస్థ.`
        },
        category: {
          ml: "കുടിവെള്ള പദ്ധതി",
          en: "Water Supply Project",
          hi: "पेयजल परियोजना",
          te: "త్రాగునీటి పథకం"
        },
        hours: {
          ml: "രാവിലെ 6:00 - 10:00 | വൈകുന്നേരം 4:30 - രാത്രി 8:00",
          en: "6:00 AM - 10:00 AM | 4:30 PM - 8:00 PM",
          hi: "सुबह 6:00 - 10:00 | शाम 4:30 - रात 8:00",
          te: "ఉదయం 6:00 - 10:00 | సాయంత్రం 4:30 - రాత్రి 8:00"
        }
      };
    } else if (catKey === 'agriculture') {
      generated = {
        title: {
          ml: `${localityNameMl} ഗവൺമെന്റ് കൃഷിഭവൻ`,
          en: `${localityNameEn} Government Krishi Bhavan`,
          hi: `${localityNameHi} सरकारी कृषि भवन`,
          te: `${localityNameTe} ప్రభుత్వ కృషి భవన్`
        },
        description: {
          ml: `കർഷകർക്കുള്ള ഗുണനിലവാരമുള്ള സബ്‌സിഡി വിത്തുകൾ, ജൈവവളം, പി.എച്ച് മണ്ണുപരിശോധന സൌകര്യം ഒപ്പം കാർഷിക സാമഗ്രികൾ.`,
          en: `State agriculture hub providing subsidized high-yield seeds, eco-fertilizers, soil PH analysis, and farm equipment rental.`,
          hi: `किसानों को रियायती दर पर टिकाऊ जैविक बीज, जैविक खाद और उन्नत कृषि भूमि परीक्षण सेवाएं देने वाला संस्थान।`,
          te: `రైతు సేవా కేంద్రం. ఇక్కడ సబ్సిడీ విత్తనాలు, సేంద్రీయ ఎరువులు మరియు మట్టి పరీక్ష సౌకర్యాలు లభిస్తాయి.`
        },
        category: {
          ml: "കൃഷിഭവൻ",
          en: "Krishi Bhavan",
          hi: "कृषि भवन",
          te: "కృషి భవన్ (వ్యవసాయం)"
        },
        hours: {
          ml: "രാവിലെ 10:00 - വൈകുന്നേരം 4:00 (ഞായറാഴ്ച ഒഴികെ)",
          en: "10:00 AM - 4:00 PM (Closed Sundays)",
          hi: "सुबह 10:00 - शाम 4:00 (रविवार अवकाश)",
          te: "ఉదయం 10:00 - సాయంత్రం 4:00 (ఆదివారం సెలవు)"
        }
      };
    } else if (catKey === 'education') {
      const isHS = i % 2 === 0;
      generated = {
        title: {
          ml: isHS ? `ഗവൺമെന്റ് ഹയർ സെക്കൻഡറി സ്കൂൾ (GHSS) - ${localityNameMl}` : `കോൺവെന്റ് എൽ.പി. സ്കൂൾ - ${localityNameMl}`,
          en: isHS ? `Government Higher Secondary School (GHSS) - ${localityNameEn}` : `Convent Lower Primary School - ${localityNameEn}`,
          hi: isHS ? `सरकारी उच्चतर माध्यमिक विद्यालय - ${localityNameHi}` : `कॉन्वेंट प्राथमिक विद्यालय - ${localityNameHi}`,
          te: isHS ? `ప్రభుత్వ ఉన్నత పాఠశాల (GHSS) - ${localityNameTe}` : `కాన్వెంట్ ప్రాథమిక పాఠశాల - ${localityNameTe}`
        },
        description: {
          ml: `മികച്ച സൗജന്യ വിദ്യാഭ്യാസം, ഹൈടെക് കമ്പ്യൂട്ടർ ക്ലാസ്സുകൾ, കുട്ടികൾക്കായി കുടുംബശ്രീ ഒരുക്കുന്ന സൗജന്യ ഉച്ചഭക്ഷണ പദ്ധതി.`,
          en: `Excellent open public education platform. Equipped with modern smart IT labs and nutritional daily Kudumbashree free meals.`,
          hi: `सुलभ गुणवत्तापूर्ण शिक्षा, सुव्यवस्थित कंप्यूटर लैब और स्थानीय सहायता समूह संचालित गर्म दोपहर भोजन व्यवस्था।`,
          te: `ఉచిత సర్కారు పాఠశాల. ఇక్కడ ఆధునిక కంప్యూటర్ ల్యాబ్‌లు మరియు రుచికరమైన మధ్యాహ్న భోజన పథకము ఉన్నాయి.`
        },
        category: {
          ml: "സ്കൂളുകളും വിദ്യാഭ്യാസവും",
          en: "Schools & Education",
          hi: "विद्यालय व शिक्षा",
          te: "పాఠశాలలు & విద్య"
        },
        hours: {
          ml: "രാവിലെ 9:00 - വൈകുന്നേരം 4:30 (തിങ്കൾ മുതൽ വെള്ളി വരെ)",
          en: "9:00 AM - 4:30 PM (Monday to Friday)",
          hi: "सुबह 9:00 - शाम 4:30 (सोमवार से शुक्रवार)",
          te: "ఉదయం 9:00 - సాయంత్రం 4:30 (సోమవారం నుండి శుక్రవారం వరకు)"
        }
      };
    } else {
      const isAkshaya = i % 2 === 0;
      generated = {
        title: {
          ml: isAkshaya ? `അക്ഷയ ഇ-കേന്ദ്രങ്ങൾ - ${localityNameMl}` : `${localityNameMl} വില്ലേജ് ഓഫീസ്`,
          en: isAkshaya ? `Akshaya e-Centre - ${localityNameEn}` : `${localityNameEn} Village Office & Registry`,
          hi: isAkshaya ? `अक्षय ई-केंद्र - ${localityNameHi}` : `${localityNameHi} ग्राम कार्यालय और रजिस्ट्री`,
          te: isAkshaya ? `అക്ഷయ ఈ-కేంద్రం - ${localityNameTe}` : `${localityNameTe} గ్రామ రెవెన్యూ కార్యాలయం`
        },
        description: {
          ml: `ജനന മരണ സർട്ടിഫിക്കറ്റ് രജിസ്ട്രേഷൻ, കാർഷിക ഭൂമി നികുതികൾ, ഗവ പബ്ലിക് പെൻഷനുകൾ, തൊഴിലറപ്പ് അപേക്ഷകൾ എന്നിവ കൈകാര്യം ചെയ്യുന്നു.`,
          en: `Handles civic certificates, land revenue listings, digital fast track public registrations, and state pension filings.`,
          hi: `जन्म-मृत्यु प्रमाण पत्र, भूमि कर संग्रह, मनरेगा जॉब कार्ड पंजीकरण और राज्य कल्याणकारी पेंशन आवेदन केंद्र।`,
          te: `జనన మరణ ధృవీకరణ పత్రాలు, భూములు పన్ను రికార్డులు ఉపాధి హామీ పథక నమోదు దరఖాస్తులు ఇక్కడ సమర్పించవచ్చు.`
        },
        category: {
          ml: "തദ്ദേശ സ്വയംഭരണം / പഞ്ചായത്ത്",
          en: "Grama Panchayat Office",
          hi: "ग्राम पंचायत कार्यालय",
          te: "గ్రామ పంచాయతీ కార్యాలయం"
        },
        hours: {
          ml: "രാവിലെ 10:00 - വൈകുന്നേരം 5:00 (ഞായർ ഒഴികെ)",
          en: "10:00 AM - 5:00 PM (Closed Sundays & Government Holidays)",
          hi: "सुबह 10:00 - शाम 5:00 (रविवार और राजपत्रित अवकाशों पर बंद)",
          te: "ఉదయం 10:00 - సాయంత్రం 4:00 (ఆదివారం మరియు సెలవులలో మూసివేయబడుతుంది)"
        }
      };
    }

    // Apply indexSuffix to make all 10,000+ entries distinct and realistic
    const indexSuffix = ` - #${Math.floor(i / 10) + 1}`;
    generated.title.ml += indexSuffix;
    generated.title.en += indexSuffix;
    generated.title.hi += indexSuffix;
    generated.title.te += indexSuffix;

    result.push({
      id: `serv-${i + 1}`,
      categoryKey: catKey,
      phoneNumber,
      lastVerified,
      isEmergency,
      districtName: district.en,
      localityName: localityNameEn,
      translations: {
        ml: {
          title: generated.title.ml,
          description: generated.description.ml,
          category: generated.category.ml,
          location: `${localityNameMl}, ${district.ml} ജില്ല, കേരളം`,
          hours: generated.hours.ml,
          contactName: contactObj.ml
        },
        en: {
          title: generated.title.en,
          description: generated.description.en,
          category: generated.category.en,
          location: `${localityNameEn}, ${district.en} District, Kerala`,
          hours: generated.hours.en,
          contactName: contactObj.en
        },
        hi: {
          title: generated.title.hi,
          description: generated.description.hi,
          category: generated.category.hi,
          location: `${localityNameHi}, ${district.hi} जिला, केरल`,
          hours: generated.hours.hi,
          contactName: contactObj.hi
        },
        te: {
          title: generated.title.te,
          description: generated.description.te,
          category: generated.category.te,
          location: `${localityNameTe}, ${district.te}  జిల్లా, కేరళ`,
          hours: generated.hours.te,
          contactName: contactObj.te
        }
      }
    });
  }
  
  return result;
}

export const INITIAL_SERVICES: ServiceItem[] = generateRemainingServices();
