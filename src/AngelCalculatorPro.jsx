import React, { useState, useEffect } from 'react';
import { CreditCard, Printer, Globe, Shield, X } from 'lucide-react';

const AngelCalculator = () => {
  const [language, setLanguage] = useState('it');
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    cellulare: '',
    prefisso: '+39',
    dataNascita: '',
    accettoPromo: false,
    accettoPrivacy: false
  });
  
  const [angelResult, setAngelResult] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [cookieConsent, setCookieConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowCookieBanner(true), 1000);
    } else {
      setCookieConsent(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAllCookies = () => {
    const consent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setCookieConsent(consent);
    setShowCookieBanner(false);
  };

  const handleRejectAllCookies = () => {
    const consent = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setCookieConsent(consent);
    setShowCookieBanner(false);
  };

  const handleSaveCookiePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieConsent));
    setShowCookieBanner(false);
  };

  const translations = {
    it: { 
      title: 'The Angels Calculator', 
      subtitle: 'Scopri il Tuo Angelo Custode', 
      firstName: 'Nome', 
      lastName: 'Cognome', 
      email: 'Email', 
      phone: 'Cellulare (opzionale)', 
      birthDate: 'Data di Nascita', 
      promo: 'Autorizzo a essere contattato/a per ricevere offerte promozionali sugli Angeli', 
      calculate: 'Calcola il Mio Angelo', 
      print: 'Stampa Report', 
      newSearch: 'Nuova Ricerca', 
      guardianOf: 'Angelo Custode di', 
      choir: 'CORO', 
      essence: 'ESSENZA', 
      freeVersion: 'Versione Gratuita', 
      freeText: 'Questo è il tuo Angelo Custode! Per scoprire la preghiera completa e i rituali personalizzati, scegli uno dei piani premium.', 
      fillRequired: 'Compila tutti i campi obbligatori', 
      footerText: 'Per informazioni su tutte le altre Consulenze Angeliche:', 
      footerDiscover: 'Scopri Tutte le Consulenze',
      free: 'GRATIS',
      buy: 'Acquista',
      active: 'Attivo',
      select: 'Seleziona',
      privacyConsent: 'Accetto Privacy Policy e Termini',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Termini e Condizioni',
      viewPrivacy: 'Leggi Privacy',
      viewTerms: 'Leggi Termini',
      privacyRequired: 'Devi accettare la Privacy Policy',
      cookieSettings: 'Cookie',
      cookieTitle: 'Utilizzo dei Cookie',
      cookieDesc: 'Utilizziamo cookie per migliorare la tua esperienza.',
      acceptAll: 'Accetta Tutti',
      rejectAll: 'Solo Necessari',
      savePrefs: 'Salva',
      necessary: 'Necessari',
      analytics: 'Analitici',
      marketing: 'Marketing'
    },
    en: { 
      title: 'The Angels Calculator', 
      subtitle: 'Discover Your Guardian Angel', 
      firstName: 'First Name', 
      lastName: 'Last Name', 
      email: 'Email', 
      phone: 'Phone (optional)', 
      birthDate: 'Birth Date', 
      promo: 'I authorize to be contacted for promotional offers', 
      calculate: 'Calculate My Angel', 
      print: 'Print Report', 
      newSearch: 'New Search', 
      guardianOf: 'Guardian Angel of', 
      choir: 'CHOIR', 
      essence: 'ESSENCE', 
      freeVersion: 'Free Version', 
      freeText: 'This is your Guardian Angel!', 
      fillRequired: 'Fill in all required fields', 
      footerText: 'For more information:', 
      footerDiscover: 'Discover All Consultations',
      free: 'FREE',
      buy: 'Buy',
      active: 'Active',
      select: 'Select',
      privacyConsent: 'I accept Privacy Policy and Terms',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms and Conditions',
      viewPrivacy: 'Read Privacy',
      viewTerms: 'Read Terms',
      privacyRequired: 'You must accept the Privacy Policy',
      cookieSettings: 'Cookies',
      cookieTitle: 'Cookie Usage',
      cookieDesc: 'We use cookies to improve your experience.',
      acceptAll: 'Accept All',
      rejectAll: 'Only Necessary',
      savePrefs: 'Save',
      necessary: 'Necessary',
      analytics: 'Analytics',
      marketing: 'Marketing'
    },
    fr: { 
      title: 'The Angels Calculator', 
      subtitle: 'Découvrez Votre Ange Gardien', 
      firstName: 'Prénom', 
      lastName: 'Nom', 
      email: 'Email', 
      phone: 'Téléphone (optionnel)', 
      birthDate: 'Date de Naissance', 
      promo: 'J\'autorise à être contacté', 
      calculate: 'Calculer Mon Ange', 
      print: 'Imprimer', 
      newSearch: 'Nouvelle Recherche', 
      guardianOf: 'Ange Gardien de', 
      choir: 'CHOEUR', 
      essence: 'ESSENCE', 
      freeVersion: 'Version Gratuite', 
      freeText: 'Ceci est votre Ange Gardien!', 
      fillRequired: 'Remplissez tous les champs', 
      footerText: 'Pour des informations:', 
      footerDiscover: 'Découvrez Toutes',
      free: 'GRATUIT',
      buy: 'Acheter',
      active: 'Actif',
      select: 'Sélectionner',
      privacyConsent: 'J\'accepte Privacy et Termes',
      privacyPolicy: 'Privacy',
      termsConditions: 'Termes',
      viewPrivacy: 'Lire',
      viewTerms: 'Lire',
      privacyRequired: 'Acceptez Privacy',
      cookieSettings: 'Cookies',
      cookieTitle: 'Cookies',
      cookieDesc: 'Nous utilisons des cookies.',
      acceptAll: 'Tout',
      rejectAll: 'Nécessaires',
      savePrefs: 'Sauvegarder',
      necessary: 'Nécessaires',
      analytics: 'Analytiques',
      marketing: 'Marketing'
    },
    es: { 
      title: 'The Angels Calculator', 
      subtitle: 'Descubre Tu Ángel Guardián', 
      firstName: 'Nombre', 
      lastName: 'Apellido', 
      email: 'Email', 
      phone: 'Teléfono (opcional)', 
      birthDate: 'Fecha de Nacimiento', 
      promo: 'Autorizo contacto', 
      calculate: 'Calcular Mi Ángel', 
      print: 'Imprimir', 
      newSearch: 'Nueva Búsqueda', 
      guardianOf: 'Ángel Guardián de', 
      choir: 'CORO', 
      essence: 'ESENCIA', 
      freeVersion: 'Versión Gratuita', 
      freeText: 'Este es tu Ángel!', 
      fillRequired: 'Completa todos los campos', 
      footerText: 'Para información:', 
      footerDiscover: 'Descubre Todas',
      free: 'GRATIS',
      buy: 'Comprar',
      active: 'Activo',
      select: 'Seleccionar',
      privacyConsent: 'Acepto Privacy y Términos',
      privacyPolicy: 'Privacy',
      termsConditions: 'Términos',
      viewPrivacy: 'Leer',
      viewTerms: 'Leer',
      privacyRequired: 'Acepta Privacy',
      cookieSettings: 'Cookies',
      cookieTitle: 'Cookies',
      cookieDesc: 'Usamos cookies.',
      acceptAll: 'Todo',
      rejectAll: 'Necesarias',
      savePrefs: 'Guardar',
      necessary: 'Necesarias',
      analytics: 'Analíticas',
      marketing: 'Marketing'
    },
    de: { 
      title: 'The Angels Calculator', 
      subtitle: 'Entdecke Deinen Schutzengel', 
      firstName: 'Vorname', 
      lastName: 'Nachname', 
      email: 'Email', 
      phone: 'Telefon (optional)', 
      birthDate: 'Geburtsdatum', 
      promo: 'Ich erlaube Kontakt', 
      calculate: 'Berechne', 
      print: 'Drucken', 
      newSearch: 'Neue Suche', 
      guardianOf: 'Schutzengel von', 
      choir: 'CHOR', 
      essence: 'ESSENZ', 
      freeVersion: 'Kostenlos', 
      freeText: 'Dies ist dein Schutzengel!', 
      fillRequired: 'Fülle alle Felder', 
      footerText: 'Für Informationen:', 
      footerDiscover: 'Entdecke Alle',
      free: 'KOSTENLOS',
      buy: 'Kaufen',
      active: 'Aktiv',
      select: 'Wählen',
      privacyConsent: 'Ich akzeptiere Privacy',
      privacyPolicy: 'Privacy',
      termsConditions: 'Bedingungen',
      viewPrivacy: 'Lesen',
      viewTerms: 'Lesen',
      privacyRequired: 'Akzeptiere Privacy',
      cookieSettings: 'Cookies',
      cookieTitle: 'Cookies',
      cookieDesc: 'Wir verwenden Cookies.',
      acceptAll: 'Alle',
      rejectAll: 'Notwendige',
      savePrefs: 'Speichern',
      necessary: 'Notwendig',
      analytics: 'Analytisch',
      marketing: 'Marketing'
    }
  };

  const planFeatures = {
    it: {
      free: ['Nome Angelo', 'Coro', 'Essenza'],
      light: ['Tutto Gratuito', 'Scheda Completa', 'Preghiera'],
      full: ['Tutto Light', '3 Rituali', 'Supporto 24h'],
      platinum: ['Tutto Full', 'Attivazione Angelo', 'Consulenza']
    },
    en: {
      free: ['Angel Name', 'Choir', 'Essence'],
      light: ['All Free', 'Complete Card', 'Prayer'],
      full: ['All Light', '3 Rituals', '24h Support'],
      platinum: ['All Full', 'Activation', 'Consultation']
    },
    fr: {
      free: ['Nom Ange', 'Choeur', 'Essence'],
      light: ['Tout Gratuit', 'Fiche Complète', 'Prière'],
      full: ['Tout Light', '3 Rituels', 'Support 24h'],
      platinum: ['Tout Full', 'Activation', 'Consultation']
    },
    es: {
      free: ['Nombre Ángel', 'Coro', 'Esencia'],
      light: ['Todo Gratis', 'Ficha Completa', 'Oración'],
      full: ['Todo Light', '3 Rituales', 'Soporte 24h'],
      platinum: ['Todo Full', 'Activación', 'Consulta']
    },
    de: {
      free: ['Engelname', 'Chor', 'Essenz'],
      light: ['Alles Kostenlos', 'Karte', 'Gebet'],
      full: ['Alles Light', '3 Rituale', '24h Support'],
      platinum: ['Alles Full', 'Aktivierung', 'Beratung']
    }
  };

  const choirTranslations = {
    it: { SERAFINI: 'SERAFINI', CHERUBINI: 'CHERUBINI', TRONI: 'TRONI', DOMINAZIONI: 'DOMINAZIONI', POTESTA: 'POTESTÀ', VIRTU: 'VIRTÙ', PRINCIPATI: 'PRINCIPATI', ARCANGELI: 'ARCANGELI', ANGELI: 'ANGELI' },
    en: { SERAFINI: 'SERAPHIM', CHERUBINI: 'CHERUBIM', TRONI: 'THRONES', DOMINAZIONI: 'DOMINATIONS', POTESTA: 'POWERS', VIRTU: 'VIRTUES', PRINCIPATI: 'PRINCIPALITIES', ARCANGELI: 'ARCHANGELS', ANGELI: 'ANGELS' },
    fr: { SERAFINI: 'SÉRAPHINS', CHERUBINI: 'CHÉRUBINS', TRONI: 'TRÔNES', DOMINAZIONI: 'DOMINATIONS', POTESTA: 'PUISSANCES', VIRTU: 'VERTUS', PRINCIPATI: 'PRINCIPAUTÉS', ARCANGELI: 'ARCHANGES', ANGELI: 'ANGES' },
    es: { SERAFINI: 'SERAFINES', CHERUBINI: 'QUERUBINES', TRONI: 'TRONOS', DOMINAZIONI: 'DOMINACIONES', POTESTA: 'POTESTADES', VIRTU: 'VIRTUDES', PRINCIPATI: 'PRINCIPADOS', ARCANGELI: 'ARCÁNGELES', ANGELI: 'ÁNGELES' },
    de: { SERAFINI: 'SERAPHIM', CHERUBINI: 'CHERUBIM', TRONI: 'THRONE', DOMINAZIONI: 'HERRSCHAFTEN', POTESTA: 'MÄCHTE', VIRTU: 'KRÄFTE', PRINCIPATI: 'FÜRSTENTÜMER', ARCANGELI: 'ERZENGEL', ANGELI: 'ENGEL' }
  };

  const t = translations[language];
  const translateChoir = (choir) => choirTranslations[language][choir] || choir;

  const languages = [ 
    { code: 'it', flag: '🇮🇹', name: 'Italiano' }, 
    { code: 'en', flag: '🇺🇸', name: 'English' }, 
    { code: 'fr', flag: '🇫🇷', name: 'Français' }, 
    { code: 'es', flag: '🇪🇸', name: 'Español' }, 
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' } 
  ];

  const prefissi = [ 
    { code: '+39', flag: '🇮🇹' }, 
    { code: '+1', flag: '🇺🇸' }, 
    { code: '+44', flag: '🇬🇧' }, 
    { code: '+33', flag: '🇫🇷' }, 
    { code: '+34', flag: '🇪🇸' }, 
    { code: '+49', flag: '🇩🇪' } 
  ];

  const angelsDB = [
    { num: 1, nome: 'VEHUIAH', coro: 'SERAFINI', essenza: 'VOLONTA', inizio: '03-21', fine: '03-25' },
    { num: 2, nome: 'JELIEL', coro: 'SERAFINI', essenza: 'AMORE', inizio: '03-26', fine: '03-30' },
    { num: 3, nome: 'SITAEL', coro: 'SERAFINI', essenza: 'COSTRUTTORE', inizio: '03-31', fine: '04-04' },
    { num: 4, nome: 'ELEMIAH', coro: 'SERAFINI', essenza: 'POTERE', inizio: '04-05', fine: '04-09' },
    { num: 5, nome: 'MAHASIAH', coro: 'SERAFINI', essenza: 'RETTIFICATORE', inizio: '04-10', fine: '04-14' },
    { num: 6, nome: 'LELAHEL', coro: 'SERAFINI', essenza: 'LUCE', inizio: '04-15', fine: '04-20' },
    { num: 7, nome: 'ACHAIAH', coro: 'SERAFINI', essenza: 'PAZIENZA', inizio: '04-21', fine: '04-25' },
    { num: 8, nome: 'CAHETEL', coro: 'SERAFINI', essenza: 'BENEDIZIONE', inizio: '04-26', fine: '04-30' },
    { num: 9, nome: 'HAZIEL', coro: 'CHERUBINI', essenza: 'MISERICORDIA', inizio: '05-01', fine: '05-05' },
    { num: 10, nome: 'ALADIAH', coro: 'CHERUBINI', essenza: 'GRAZIA', inizio: '05-06', fine: '05-10' },
    { num: 11, nome: 'LAUVIAH', coro: 'CHERUBINI', essenza: 'VITTORIA', inizio: '05-11', fine: '05-15' },
    { num: 12, nome: 'HAHAIAH', coro: 'CHERUBINI', essenza: 'RIFUGIO', inizio: '05-16', fine: '05-20' },
    { num: 13, nome: 'YEZALEL', coro: 'CHERUBINI', essenza: 'FEDELTA', inizio: '05-21', fine: '05-25' },
    { num: 14, nome: 'MEBAHEL', coro: 'CHERUBINI', essenza: 'VERITA', inizio: '05-26', fine: '05-31' },
    { num: 15, nome: 'HARIEL', coro: 'CHERUBINI', essenza: 'PURIFICAZIONE', inizio: '06-01', fine: '06-05' },
    { num: 16, nome: 'HAKAMIAH', coro: 'CHERUBINI', essenza: 'LEALTA', inizio: '06-06', fine: '06-10' },
    { num: 17, nome: 'LAUVIAH', coro: 'TRONI', essenza: 'RIVELAZIONE', inizio: '06-11', fine: '06-15' },
    { num: 18, nome: 'CALIEL', coro: 'TRONI', essenza: 'GIUSTIZIA', inizio: '06-16', fine: '06-21' },
    { num: 19, nome: 'LEUVIAH', coro: 'TRONI', essenza: 'INTELLIGENZA', inizio: '06-22', fine: '06-26' },
    { num: 20, nome: 'PAHALIAH', coro: 'TRONI', essenza: 'REDENZIONE', inizio: '06-27', fine: '07-01' },
    { num: 21, nome: 'NELCHAEL', coro: 'TRONI', essenza: 'SAPIENZA', inizio: '07-02', fine: '07-06' },
    { num: 22, nome: 'YEIAYEL', coro: 'TRONI', essenza: 'FORTUNA', inizio: '07-07', fine: '07-11' },
    { num: 23, nome: 'MELAHEL', coro: 'TRONI', essenza: 'GUARIGIONE', inizio: '07-12', fine: '07-16' },
    { num: 24, nome: 'HAHEUIAH', coro: 'TRONI', essenza: 'PROTEZIONE', inizio: '07-17', fine: '07-22' },
    { num: 25, nome: 'NITH-HAIAH', coro: 'DOMINAZIONI', essenza: 'SAGGEZZA', inizio: '07-23', fine: '07-27' },
    { num: 26, nome: 'HAAIAH', coro: 'DOMINAZIONI', essenza: 'ORDINE', inizio: '07-28', fine: '08-01' },
    { num: 27, nome: 'YERATEL', coro: 'DOMINAZIONI', essenza: 'CIVILIZZAZIONE', inizio: '08-02', fine: '08-06' },
    { num: 28, nome: 'SEHEIAH', coro: 'DOMINAZIONI', essenza: 'LONGEVITA', inizio: '08-07', fine: '08-12' },
    { num: 29, nome: 'REIYEL', coro: 'DOMINAZIONI', essenza: 'LIBERAZIONE', inizio: '08-13', fine: '08-17' },
    { num: 30, nome: 'OMAEL', coro: 'DOMINAZIONI', essenza: 'MOLTIPLICAZIONE', inizio: '08-18', fine: '08-22' },
    { num: 31, nome: 'LECABEL', coro: 'DOMINAZIONI', essenza: 'TALENTO', inizio: '08-23', fine: '08-28' },
    { num: 32, nome: 'VASARIAH', coro: 'DOMINAZIONI', essenza: 'GIUSTIZIA', inizio: '08-29', fine: '09-02' },
    { num: 33, nome: 'YEHUIAH', coro: 'POTESTA', essenza: 'CONOSCENZA', inizio: '09-03', fine: '09-07' },
    { num: 34, nome: 'LEHAHIAH', coro: 'POTESTA', essenza: 'OBBEDIENZA', inizio: '09-08', fine: '09-12' },
    { num: 35, nome: 'CHAVAKHIAH', coro: 'POTESTA', essenza: 'RICONCILIAZIONE', inizio: '09-13', fine: '09-17' },
    { num: 36, nome: 'MENADEL', coro: 'POTESTA', essenza: 'LAVORO', inizio: '09-18', fine: '09-23' },
    { num: 37, nome: 'ANIEL', coro: 'POTESTA', essenza: 'CORAGGIO', inizio: '09-24', fine: '09-28' },
    { num: 38, nome: 'HAAMIAH', coro: 'POTESTA', essenza: 'RITUALE', inizio: '09-29', fine: '10-03' },
    { num: 39, nome: 'REHAEL', coro: 'POTESTA', essenza: 'RISPETTO', inizio: '10-04', fine: '10-08' },
    { num: 40, nome: 'YEIAZEL', coro: 'POTESTA', essenza: 'CONSOLAZIONE', inizio: '10-09', fine: '10-13' },
    { num: 41, nome: 'HAHAHEL', coro: 'VIRTU', essenza: 'MISSIONE', inizio: '10-14', fine: '10-18' },
    { num: 42, nome: 'MIKAEL', coro: 'VIRTU', essenza: 'ORDINE', inizio: '10-19', fine: '10-23' },
    { num: 43, nome: 'VEULIAH', coro: 'VIRTU', essenza: 'PROSPERITA', inizio: '10-24', fine: '10-28' },
    { num: 44, nome: 'YELAHIAH', coro: 'VIRTU', essenza: 'KARMA', inizio: '10-29', fine: '11-02' },
    { num: 45, nome: 'SEALIAH', coro: 'VIRTU', essenza: 'MOTIVAZIONE', inizio: '11-03', fine: '11-07' },
    { num: 46, nome: 'ARIEL', coro: 'VIRTU', essenza: 'PERCEZIONE', inizio: '11-08', fine: '11-12' },
    { num: 47, nome: 'ASALIAH', coro: 'VIRTU', essenza: 'CONTEMPLAZIONE', inizio: '11-13', fine: '11-17' },
    { num: 48, nome: 'MIHAEL', coro: 'VIRTU', essenza: 'FECONDITA', inizio: '11-18', fine: '11-22' },
    { num: 49, nome: 'VEHUEL', coro: 'PRINCIPATI', essenza: 'ELEVAZIONE', inizio: '11-23', fine: '11-27' },
    { num: 50, nome: 'DANIEL', coro: 'PRINCIPATI', essenza: 'ELOQUENZA', inizio: '11-28', fine: '12-02' },
    { num: 51, nome: 'HAHASIAH', coro: 'PRINCIPATI', essenza: 'MEDICINA', inizio: '12-03', fine: '12-07' },
    { num: 52, nome: 'IMAMIAH', coro: 'PRINCIPATI', essenza: 'ESPIAZIONE', inizio: '12-08', fine: '12-12' },
    { num: 53, nome: 'NANAEL', coro: 'PRINCIPATI', essenza: 'COMUNICAZIONE', inizio: '12-13', fine: '12-16' },
    { num: 54, nome: 'NITHAEL', coro: 'PRINCIPATI', essenza: 'GIOVINEZZA', inizio: '12-17', fine: '12-21' },
    { num: 55, nome: 'MEBAHIAH', coro: 'PRINCIPATI', essenza: 'LUCIDITA', inizio: '12-22', fine: '12-26' },
    { num: 56, nome: 'POYEL', coro: 'PRINCIPATI', essenza: 'FORTUNA', inizio: '12-27', fine: '12-31' },
    { num: 57, nome: 'NEMAMIAH', coro: 'ARCANGELI', essenza: 'DISCERNIMENTO', inizio: '01-01', fine: '01-05' },
    { num: 58, nome: 'YEIALEL', coro: 'ARCANGELI', essenza: 'FORZA', inizio: '01-06', fine: '01-10' },
    { num: 59, nome: 'HARAEL', coro: 'ARCANGELI', essenza: 'RICCHEZZA', inizio: '01-11', fine: '01-15' },
    { num: 60, nome: 'MITZRAEL', coro: 'ARCANGELI', essenza: 'RIPARAZIONE', inizio: '01-16', fine: '01-20' },
    { num: 61, nome: 'UMABEL', coro: 'ARCANGELI', essenza: 'AFFINITA', inizio: '01-21', fine: '01-25' },
    { num: 62, nome: 'IAH-HEL', coro: 'ARCANGELI', essenza: 'DESIDERIO', inizio: '01-26', fine: '01-30' },
    { num: 63, nome: 'ANAUEL', coro: 'ARCANGELI', essenza: 'PERCEZIONE', inizio: '01-31', fine: '02-04' },
    { num: 64, nome: 'MEHIEL', coro: 'ARCANGELI', essenza: 'VIVIFICAZIONE', inizio: '02-05', fine: '02-09' },
    { num: 65, nome: 'DAMABIAH', coro: 'ANGELI', essenza: 'FONTE', inizio: '02-10', fine: '02-14' },
    { num: 66, nome: 'MANAKEL', coro: 'ANGELI', essenza: 'CONOSCENZA', inizio: '02-15', fine: '02-19' },
    { num: 67, nome: 'EYAEL', coro: 'ANGELI', essenza: 'TRASFORMAZIONE', inizio: '02-20', fine: '02-24' },
    { num: 68, nome: 'HABUHIAH', coro: 'ANGELI', essenza: 'GUARIGIONE', inizio: '02-25', fine: '02-29' },
    { num: 69, nome: 'ROCHEL', coro: 'ANGELI', essenza: 'RESTITUZIONE', inizio: '03-01', fine: '03-05' },
    { num: 70, nome: 'JABAMIAH', coro: 'ANGELI', essenza: 'ALCHIMIA', inizio: '03-06', fine: '03-10' },
    { num: 71, nome: 'HAIAIEL', coro: 'ANGELI', essenza: 'ARMI', inizio: '03-11', fine: '03-15' },
    { num: 72, nome: 'MUMIAH', coro: 'ANGELI', essenza: 'RINASCITA', inizio: '03-16', fine: '03-20' }
  ];

  const plans = [ 
    { id: 'free', name: 'GRATUITO', price: 0, icon: '✨' }, 
    { id: 'light', name: 'LIGHT', price: 4.99, icon: '🌙' }, 
    { id: 'full', name: 'FULL', price: 19.99, icon: '⭐' }, 
    { id: 'platinum', name: 'PLATINUM', price: 49.99, icon: '👼' } 
  ];

  const PAYPAL_EMAIL = 'gaiamadreterra@gmail.com';

  const handlePayPalCheckout = (plan) => {
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${PAYPAL_EMAIL}&item_name=Angel Calculator ${plan.name}&amount=${plan.price}&currency_code=EUR`;
    window.open(paypalUrl, '_blank');
  };

  const findAngel = (date) => {
    const [year, month, day] = date.split('-');
    const birthDate = `${month}-${day}`;
    return angelsDB.find(angel => birthDate >= angel.inizio && birthDate <= angel.fine);
  };

  const handleCalculate = () => {
    if (!formData.nome || !formData.cognome || !formData.email || !formData.dataNascita) {
      alert(t.fillRequired);
      return;
    }
    if (!formData.accettoPrivacy) {
      alert(t.privacyRequired);
      return;
    }
    const angel = findAngel(formData.dataNascita);
    if (angel) {
      setAngelResult(angel);
      setSelectedPlan('free');
    } else {
      alert('Angelo non trovato!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <div className="flex gap-2 bg-white/10 backdrop-blur-lg rounded-xl p-2">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => setLanguage(lang.code)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${language === lang.code ? 'bg-pink-500 text-white' : 'bg-transparent text-white/70 hover:text-white hover:bg-white/10'}`}>
                {lang.flag} {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 animate-pulse">✨ {t.title} ✨</h1>
          <p className="text-2xl text-purple-200">{t.subtitle}</p>
        </div>

        {!angelResult && (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder={`${t.firstName} *`} value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
                <input type="text" placeholder={`${t.lastName} *`} value={formData.cognome} onChange={(e) => setFormData({...formData, cognome: e.target.value})} className="px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              </div>
              <input type="email" placeholder={`${t.email} *`} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              
              <div className="grid grid-cols-12 gap-3">
                <select value={formData.prefisso} onChange={(e) => setFormData({...formData, prefisso: e.target.value})} className="col-span-4 px-3 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white">
                  {prefissi.map(p => (<option key={p.code} value={p.code} className="bg-purple-900">{p.flag} {p.code}</option>))}
                </select>
                <input type="tel" placeholder={t.phone} value={formData.cellulare} onChange={(e) => setFormData({...formData, cellulare: e.target.value})} className="col-span-8 px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              </div>

              <input type="date" value={formData.dataNascita} onChange={(e) => setFormData({...formData, dataNascita: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white" />
              
              <label className="flex items-start gap-3 bg-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/15 transition-all">
                <input type="checkbox" checked={formData.accettoPromo} onChange={(e) => setFormData({...formData, accettoPromo: e.target.checked})} className="mt-1 w-5 h-5 cursor-pointer" />
                <span className="text-sm">{t.promo}</span>
              </label>

              <label className="flex items-start gap-3 bg-pink-500/20 border-2 border-pink-400 rounded-xl p-4 cursor-pointer hover:bg-pink-500/30 transition-all">
                <input type="checkbox" checked={formData.accettoPrivacy} onChange={(e) => setFormData({...formData, accettoPrivacy: e.target.checked})} className="mt-1 w-5 h-5 cursor-pointer" required />
                <span className="text-sm">
                  {t.privacyConsent} *
                  <div className="mt-2 flex gap-3">
                    <button type="button" onClick={() => setShowPrivacyPolicy(true)} className="text-yellow-300 hover:text-yellow-100 underline text-xs">
                      📄 {t.viewPrivacy}
                    </button>
                    <button type="button" onClick={() => setShowTerms(true)} className="text-yellow-300 hover:text-yellow-100 underline text-xs">
                      📋 {t.viewTerms}
                    </button>
                  </div>
                </span>
              </label>

              <button onClick={handleCalculate} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all">
                ✨ {t.calculate} ✨
              </button>
            </div>
          </div>
        )}

        {angelResult && (
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-4 border-yellow-400/50">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-yellow-300 mb-2 animate-pulse">{angelResult.nome}</div>
                <div className="text-3xl font-semibold text-pink-200 mb-1">N. {angelResult.num}</div>
                <div className="inline-block bg-purple-500/50 px-6 py-2 rounded-full text-xl font-bold mb-2">
                  {t.choir}: {translateChoir(angelResult.coro)}
                </div>
                <div className="text-2xl text-yellow-200 font-semibold">
                  {t.essence}: {angelResult.essenza}
                </div>
              </div>

              <div className="bg-white/20 rounded-2xl p-6 mb-6 text-center">
                <p className="text-2xl font-bold">{t.guardianOf}: {formData.nome} {formData.cognome}</p>
                <p className="text-lg text-purple-200 mt-2">{t.birthDate}: {new Date(formData.dataNascita).toLocaleDateString()}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center">✨ {t.freeVersion} ✨</h3>
                <p className="text-lg leading-relaxed text-center">{t.freeText}</p>
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={() => window.print()} className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Printer className="w-5 h-5" />{t.print}
                </button>
                <button onClick={() => setAngelResult(null)} className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded-xl font-bold">
                  {t.newSearch}
                </button>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-2xl p-6 border-2 border-purple-400 text-center">
                <p className="text-lg mb-3 font-semibold">✨ {t.footerText}</p>
                <a href="https://iltuoangelo.it/consulenze/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-8 py-3 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg">
                  🌟 iltuoangelo.it/consulenze 🌟
                </a>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">🌟 {t.footerDiscover} 🌟</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {plans.map((plan) => (
                  <div key={plan.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 transition-all hover:scale-105 ${selectedPlan === plan.id ? 'border-yellow-400 shadow-2xl' : 'border-white/20 hover:border-pink-400'}`}>
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-2">{plan.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-pink-300">{plan.price === 0 ? t.free : `€${plan.price.toFixed(2)}`}</div>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {planFeatures[language][plan.id].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-400">✓</span><span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.id === 'free' ? (
                      <button onClick={() => setSelectedPlan('free')} disabled={selectedPlan === 'free'} className="w-full bg-gray-600 py-3 rounded-xl font-bold">
                        {selectedPlan === 'free' ? t.active : t.select}
                      </button>
                    ) : (
                      <button onClick={() => handlePayPalCheckout(plan)} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                        <CreditCard className="w-5 h-5" />{t.buy}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 backdrop-blur-lg rounded-3xl p-8 border-2 border-purple-400/50 text-center">
          <Globe className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
          <p className="text-2xl font-bold mb-2">✨ {t.footerDiscover} ✨</p>
          <p className="text-lg text-purple-200 mb-4">{t.footerText}</p>
          <a href="https://iltuoangelo.it/consulenze/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-purple-900 px-10 py-4 rounded-2xl font-bold text-2xl hover:scale-110 transition-all shadow-2xl animate-pulse">
            🌟 iltuoangelo.it/consulenze 🌟
          </a>
          <div className="mt-6 text-sm text-purple-200/70">
            © 2025 The Angels Calculator
            <div className="flex justify-center gap-4 mt-2 flex-wrap">
              <button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-yellow-300 transition-all flex items-center gap-1">
                <Shield className="w-4 h-4" />{t.privacyPolicy}
              </button>
              <button onClick={() => setShowTerms(true)} className="hover:text-yellow-300 transition-all">
                📋 {t.termsConditions}
              </button>
              <button onClick={() => setShowCookieBanner(true)} className="hover:text-yellow-300 transition-all">
                🍪 {t.cookieSettings}
              </button>
            </div>
          </div>
        </div>

        {showCookieBanner && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border-2 border-purple-400">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">🍪 {t.cookieTitle}</h2>
                <button onClick={() => setShowCookieBanner(false)} className="text-white/70 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-base md:text-lg mb-6 opacity-90">{t.cookieDesc}</p>

              <div className="space-y-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <label className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm md:text-base">{t.necessary}</p>
                    </div>
                    <input type="checkbox" checked={cookieConsent.necessary} disabled className="w-5 h-5 md:w-6 md:h-6" />
                  </label>
                </div>

                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="font-bold text-sm md:text-base">{t.analytics}</p>
                    </div>
                    <input type="checkbox" checked={cookieConsent.analytics} onChange={(e) => setCookieConsent({...cookieConsent, analytics: e.target.checked})} className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
                  </label>
                </div>

                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="font-bold text-sm md:text-base">{t.marketing}</p>
                    </div>
                    <input type="checkbox" checked={cookieConsent.marketing} onChange={(e) => setCookieConsent({...cookieConsent, marketing: e.target.checked})} className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button onClick={handleAcceptAllCookies} className="flex-1 bg-gradient-to-r from-green-500 to-green-600 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                  {t.acceptAll}
                </button>
                <button onClick={handleSaveCookiePreferences} className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                  {t.savePrefs}
                </button>
                <button onClick={handleRejectAllCookies} className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                  {t.rejectAll}
                </button>
              </div>
            </div>
          </div>
        )}

        {showPrivacyPolicy && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto my-8">
              <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-blue-400">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{t.privacyPolicy}</h2>
                  <button onClick={() => setShowPrivacyPolicy(false)} className="text-white/70 hover:text-white">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>

                <div className="space-y-4 text-left max-h-96 overflow-y-auto">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">1. Titolare</h3>
                    <p className="text-sm">The Angels Calculator - Email: gaiamadreterra@gmail.com</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">2. Dati Raccolti</h3>
                    <p className="text-sm">Nome, Cognome, Email, Telefono, Data di Nascita, IP, Cookie</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">3. Finalità</h3>
                    <p className="text-sm">Fornire il servizio, inviarti informazioni, migliorare esperienza</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">4. Diritti</h3>
                    <p className="text-sm">Accedere, rettificare, cancellare, limitare, opporti</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">5. Conservazione</h3>
                    <p className="text-sm">Massimo 24 mesi</p>
                  </div>
                </div>

                <button onClick={() => setShowPrivacyPolicy(false)} className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        )}

        {showTerms && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto my-8">
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-purple-400">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{t.termsConditions}</h2>
                  <button onClick={() => setShowTerms(false)} className="text-white/70 hover:text-white">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>

                <div className="space-y-4 text-left max-h-96 overflow-y-auto">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">1. Accettazione</h3>
                    <p className="text-sm">Utilizzando questo servizio, accetti questi Termini</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">2. Servizio</h3>
                    <p className="text-sm">Calcolo Angelo Custode. Versione gratuita e piani premium</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">3. Pagamenti</h3>
                    <p className="text-sm">LIGHT: €4.99 | FULL: €19.99 | PLATINUM: €49.99. Via PayPal</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">4. Copyright</h3>
                    <p className="text-sm">Tutti i contenuti sono protetti</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-bold mb-2">5. Limitazione</h3>
                    <p className="text-sm">Servizio fornito così com'è</p>
                  </div>
                </div>

                <button onClick={() => setShowTerms(false)} className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AngelCalculator;
