import React, { useState } from 'react';
import { CreditCard, Printer, Star, Globe } from 'lucide-react';

const AngelCalculator = () => {
  const [language, setLanguage] = useState('it');
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    cellulare: '',
    prefisso: '+39',
    dataNascita: '',
    accettoPromo: false
  });
  
  const [angelResult, setAngelResult] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const choirTranslations = {
    it: { 'SERAFINI': 'SERAFINI', 'CHERUBINI': 'CHERUBINI', 'TRONI': 'TRONI', 'DOMINAZIONI': 'DOMINAZIONI', 'POTESTA': 'POTESTÀ', 'VIRTU': 'VIRTÙ', 'PRINCIPATI': 'PRINCIPATI', 'ARCANGELI': 'ARCANGELI', 'ANGELI': 'ANGELI' },
    en: { 'SERAFINI': 'SERAPHIM', 'CHERUBINI': 'CHERUBIM', 'TRONI': 'THRONES', 'DOMINAZIONI': 'DOMINATIONS', 'POTESTA': 'POWERS', 'VIRTU': 'VIRTUES', 'PRINCIPATI': 'PRINCIPALITIES', 'ARCANGELI': 'ARCHANGELS', 'ANGELI': 'ANGELS' },
    fr: { 'SERAFINI': 'SÉRAPHINS', 'CHERUBINI': 'CHÉRUBINS', 'TRONI': 'TRÔNES', 'DOMINAZIONI': 'DOMINATIONS', 'POTESTA': 'PUISSANCES', 'VIRTU': 'VERTUS', 'PRINCIPATI': 'PRINCIPAUTÉS', 'ARCANGELI': 'ARCHANGES', 'ANGELI': 'ANGES' },
    es: { 'SERAFINI': 'SERAFINES', 'CHERUBINI': 'QUERUBINES', 'TRONI': 'TRONOS', 'DOMINAZIONI': 'DOMINACIONES', 'POTESTA': 'POTESTADES', 'VIRTU': 'VIRTUDES', 'PRINCIPATI': 'PRINCIPADOS', 'ARCANGELI': 'ARCÁNGELES', 'ANGELI': 'ÁNGELES' },
    de: { 'SERAFINI': 'SERAPHIM', 'CHERUBINI': 'CHERUBIM', 'TRONI': 'THRONE', 'DOMINAZIONI': 'HERRSCHAFTEN', 'POTESTA': 'MÄCHTE', 'VIRTU': 'KRÄFTE', 'PRINCIPATI': 'FÜRSTENTÜMER', 'ARCANGELI': 'ERZENGEL', 'ANGELI': 'ENGEL' }
  };

  const essenceTranslations = {
    it: {},
    en: { 'VOLONTA': 'WILL', 'AMORE E SAGGEZZA': 'LOVE AND WISDOM', 'COSTRUTTORE': 'BUILDER', 'POTERE DIVINO': 'DIVINE POWER', 'RETTIFICATORE': 'RECTIFIER', 'LUCE DELL AMORE': 'LIGHT OF LOVE', 'PAZIENZA': 'PATIENCE', 'BENEDIZIONE': 'BLESSING', 'MISERICORDIA': 'MERCY', 'GRAZIA DIVINA': 'DIVINE GRACE', 'VITTORIA': 'VICTORY', 'RIFUGIO': 'REFUGE', 'FEDELTA': 'FIDELITY', 'VERITA E LIBERTA': 'TRUTH AND FREEDOM', 'PURIFICAZIONE': 'PURIFICATION', 'LEALTA': 'LOYALTY', 'RIVELAZIONE': 'REVELATION', 'GIUSTIZIA': 'JUSTICE', 'INTELLIGENZA': 'INTELLIGENCE', 'REDENZIONE': 'REDEMPTION', 'SAPIENZA': 'WISDOM', 'FORTUNA': 'FORTUNE', 'GUARIGIONE': 'HEALING', 'PROTEZIONE': 'PROTECTION', 'SAGGEZZA': 'WISDOM', 'ORDINE': 'ORDER', 'CIVILIZZAZIONE': 'CIVILIZATION', 'LONGEVITA': 'LONGEVITY', 'LIBERAZIONE': 'LIBERATION', 'MOLTIPLICAZIONE': 'MULTIPLICATION', 'TALENTO': 'TALENT', 'CONOSCENZA': 'KNOWLEDGE', 'OBBEDIENZA': 'OBEDIENCE', 'RICONCILIAZIONE': 'RECONCILIATION', 'LAVORO': 'WORK', 'CORAGGIO': 'COURAGE', 'RITUALE': 'RITUAL', 'RISPETTO': 'RESPECT', 'CONSOLAZIONE': 'CONSOLATION', 'MISSIONE': 'MISSION', 'ORDINE POLITICO': 'POLITICAL ORDER', 'PROSPERITA': 'PROSPERITY', 'KARMA': 'KARMA', 'MOTIVAZIONE': 'MOTIVATION', 'PERCEZIONE': 'PERCEPTION', 'CONTEMPLAZIONE': 'CONTEMPLATION', 'FECONDITA': 'FECUNDITY', 'ELEVAZIONE': 'ELEVATION', 'ELOQUENZA': 'ELOQUENCE', 'MEDICINA UNIVERSALE': 'UNIVERSAL MEDICINE', 'ESPIAZIONE': 'EXPIATION', 'COMUNICAZIONE': 'COMMUNICATION', 'GIOVINEZZA ETERNA': 'ETERNAL YOUTH', 'LUCIDITA': 'LUCIDITY', 'DISCERNIMENTO': 'DISCERNMENT', 'FORZA MENTALE': 'MENTAL STRENGTH', 'RICCHEZZA': 'WEALTH', 'RIPARAZIONE': 'REPARATION', 'AFFINITA': 'AFFINITY', 'DESIDERIO DI SAPERE': 'DESIRE TO KNOW', 'PERCEZIONE UNITA': 'UNITY PERCEPTION', 'VIVIFICAZIONE': 'VIVIFICATION', 'FONTE DI SAGGEZZA': 'SOURCE OF WISDOM', 'TRASFORMAZIONE': 'TRANSFORMATION', 'RESTITUZIONE': 'RESTITUTION', 'ALCHIMIA': 'ALCHEMY', 'ARMI': 'WEAPONS', 'FINE E RINASCITA': 'END AND REBIRTH' },
    fr: { 'VOLONTA': 'VOLONTÉ', 'INTELLIGENZA': 'INTELLIGENCE', 'GIUSTIZIA': 'JUSTICE' },
    es: { 'VOLONTA': 'VOLUNTAD', 'INTELLIGENZA': 'INTELIGENCIA', 'GIUSTIZIA': 'JUSTICIA' },
    de: { 'VOLONTA': 'WILLE', 'INTELLIGENZA': 'INTELLIGENZ', 'GIUSTIZIA': 'GERECHTIGKEIT' }
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
      footerText: 'Per avere informazioni su tutte le altre Consulenze Angeliche adatte a te visita:', 
      footerDiscover: 'Scopri Tutte le Consulenze Angeliche',
      free: 'GRATIS',
      buy: 'Acquista',
      active: 'Attivo',
      select: 'Seleziona',
      planFeatures: {
        free: ['Nome Angelo', 'Coro', 'Essenza'],
        light: ['Tutto Gratuito', 'Scheda Completa', 'Preghiera'],
        full: ['Tutto Light', '3 Rituali', 'Supporto 24h'],
        platinum: ['Tutto Full', 'Attivazione Angelo', 'Consulenza']
      }
    },
    en: { 
      title: 'The Angels Calculator', 
      subtitle: 'Discover Your Guardian Angel', 
      firstName: 'First Name', 
      lastName: 'Last Name', 
      email: 'Email', 
      phone: 'Phone (optional)', 
      birthDate: 'Birth Date', 
      promo: 'I authorize to be contacted for promotional offers about Angels', 
      calculate: 'Calculate My Angel', 
      print: 'Print Report', 
      newSearch: 'New Search', 
      guardianOf: 'Guardian Angel of', 
      choir: 'CHOIR', 
      essence: 'ESSENCE', 
      freeVersion: 'Free Version', 
      freeText: 'This is your Guardian Angel! To discover the complete prayer and personalized rituals, choose one of the premium plans.', 
      fillRequired: 'Fill in all required fields', 
      footerText: 'For information on all other Angelic Consultations suitable for you visit:', 
      footerDiscover: 'Discover All Angelic Consultations',
      free: 'FREE',
      buy: 'Buy',
      active: 'Active',
      select: 'Select',
      planFeatures: {
        free: ['Angel Name', 'Choir', 'Essence'],
        light: ['All Free', 'Complete Card', 'Prayer'],
        full: ['All Light', '3 Rituals', '24h Support'],
        platinum: ['All Full', 'Angel Activation', 'Consultation']
      }
    },
    fr: { 
      title: 'The Angels Calculator', 
      subtitle: 'Découvrez Votre Ange Gardien', 
      firstName: 'Prénom', 
      lastName: 'Nom', 
      email: 'Email', 
      phone: 'Téléphone (optionnel)', 
      birthDate: 'Date de Naissance', 
      promo: 'J\'autorise à être contacté(e) pour recevoir des offres promotionnelles sur les Anges', 
      calculate: 'Calculer Mon Ange', 
      print: 'Imprimer', 
      newSearch: 'Nouvelle Recherche', 
      guardianOf: 'Ange Gardien de', 
      choir: 'CHOEUR', 
      essence: 'ESSENCE', 
      freeVersion: 'Version Gratuite', 
      freeText: 'Ceci est votre Ange Gardien!', 
      fillRequired: 'Remplissez tous les champs obligatoires', 
      footerText: 'Pour des informations visitez:', 
      footerDiscover: 'Découvrez Toutes les Consultations',
      free: 'GRATUIT',
      buy: 'Acheter',
      active: 'Actif',
      select: 'Sélectionner',
      planFeatures: {
        free: ['Nom Ange', 'Choeur', 'Essence'],
        light: ['Tout Gratuit', 'Fiche Complète', 'Prière'],
        full: ['Tout Light', '3 Rituels', 'Support 24h'],
        platinum: ['Tout Full', 'Activation Ange', 'Consultation']
      }
    },
    es: { 
      title: 'The Angels Calculator', 
      subtitle: 'Descubre Tu Ángel Guardián', 
      firstName: 'Nombre', 
      lastName: 'Apellido', 
      email: 'Email', 
      phone: 'Teléfono (opcional)', 
      birthDate: 'Fecha de Nacimiento', 
      promo: 'Autorizo a ser contactado/a para ofertas sobre Ángeles', 
      calculate: 'Calcular Mi Ángel', 
      print: 'Imprimir', 
      newSearch: 'Nueva Búsqueda', 
      guardianOf: 'Ángel Guardián de', 
      choir: 'CORO', 
      essence: 'ESENCIA', 
      freeVersion: 'Versión Gratuita', 
      freeText: '¡Este es tu Ángel Guardián!', 
      fillRequired: 'Completa todos los campos', 
      footerText: 'Para información visita:', 
      footerDiscover: 'Descubre Todas las Consultas',
      free: 'GRATIS',
      buy: 'Comprar',
      active: 'Activo',
      select: 'Seleccionar',
      planFeatures: {
        free: ['Nombre Ángel', 'Coro', 'Esencia'],
        light: ['Todo Gratis', 'Ficha Completa', 'Oración'],
        full: ['Todo Light', '3 Rituales', 'Soporte 24h'],
        platinum: ['Todo Full', 'Activación Ángel', 'Consulta']
      }
    },
    de: { 
      title: 'The Angels Calculator', 
      subtitle: 'Entdecke Deinen Schutzengel', 
      firstName: 'Vorname', 
      lastName: 'Nachname', 
      email: 'Email', 
      phone: 'Telefon (optional)', 
      birthDate: 'Geburtsdatum', 
      promo: 'Ich erlaube Kontakt für Angebote', 
      calculate: 'Berechne Meinen Engel', 
      print: 'Drucken', 
      newSearch: 'Neue Suche', 
      guardianOf: 'Schutzengel von', 
      choir: 'CHOR', 
      essence: 'ESSENZ', 
      freeVersion: 'Kostenlose Version', 
      freeText: 'Dies ist dein Schutzengel!', 
      fillRequired: 'Fülle alle Felder aus', 
      footerText: 'Für Informationen besuche:', 
      footerDiscover: 'Entdecke Alle Beratungen',
      free: 'KOSTENLOS',
      buy: 'Kaufen',
      active: 'Aktiv',
      select: 'Wählen',
      planFeatures: {
        free: ['Engelname', 'Chor', 'Essenz'],
        light: ['Alles Kostenlos', 'Vollständige Karte', 'Gebet'],
        full: ['Alles Light', '3 Rituale', '24h Support'],
        platinum: ['Alles Full', 'Engel Aktivierung', 'Beratung']
      }
    }
  };

  const t = translations[language];
  const translateChoir = (choir) => choirTranslations[language][choir] || choir;
  const translateEssence = (essence) => language === 'it' ? essence : (essenceTranslations[language][essence] || essence);

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
    { num: 1, nome: 'VEHUIAH', coro: 'SERAFINI', essenza: 'VOLONTA', inizio: '03-21', fine: '03-25', preghiera: 'Dio elevato e esaltato sopra tutte le cose' },
    { num: 2, nome: 'JELIEL', coro: 'SERAFINI', essenza: 'AMORE E SAGGEZZA', inizio: '03-26', fine: '03-30', preghiera: 'Dio soccorrevole' },
    { num: 3, nome: 'SITAEL', coro: 'SERAFINI', essenza: 'COSTRUTTORE', inizio: '03-31', fine: '04-04', preghiera: 'Dio speranza di tutte le creature' },
    { num: 4, nome: 'ELEMIAH', coro: 'SERAFINI', essenza: 'POTERE DIVINO', inizio: '04-05', fine: '04-09', preghiera: 'Dio nascosto' },
    { num: 5, nome: 'MAHASIAH', coro: 'SERAFINI', essenza: 'RETTIFICATORE', inizio: '04-10', fine: '04-14', preghiera: 'Dio salvatore' },
    { num: 6, nome: 'LELAHEL', coro: 'SERAFINI', essenza: 'LUCE DELL AMORE', inizio: '04-15', fine: '04-20', preghiera: 'Dio lodevole' },
    { num: 7, nome: 'ACHAIAH', coro: 'SERAFINI', essenza: 'PAZIENZA', inizio: '04-21', fine: '04-25', preghiera: 'Dio buono e paziente' },
    { num: 8, nome: 'CAHETEL', coro: 'SERAFINI', essenza: 'BENEDIZIONE', inizio: '04-26', fine: '04-30', preghiera: 'Dio adorabile' },
    { num: 9, nome: 'HAZIEL', coro: 'CHERUBINI', essenza: 'MISERICORDIA', inizio: '05-01', fine: '05-05', preghiera: 'Dio misericordioso' },
    { num: 10, nome: 'ALADIAH', coro: 'CHERUBINI', essenza: 'GRAZIA DIVINA', inizio: '05-06', fine: '05-10', preghiera: 'Dio propizio' },
    { num: 11, nome: 'LAUVIAH', coro: 'CHERUBINI', essenza: 'VITTORIA', inizio: '05-11', fine: '05-15', preghiera: 'Dio lodato ed esaltato' },
    { num: 12, nome: 'HAHAIAH', coro: 'CHERUBINI', essenza: 'RIFUGIO', inizio: '05-16', fine: '05-20', preghiera: 'Dio rifugio' },
    { num: 13, nome: 'YEZALEL', coro: 'CHERUBINI', essenza: 'FEDELTA', inizio: '05-21', fine: '05-25', preghiera: 'Dio glorificato' },
    { num: 14, nome: 'MEBAHEL', coro: 'CHERUBINI', essenza: 'VERITA E LIBERTA', inizio: '05-26', fine: '05-31', preghiera: 'Dio conservatore' },
    { num: 15, nome: 'HARIEL', coro: 'CHERUBINI', essenza: 'PURIFICAZIONE', inizio: '06-01', fine: '06-05', preghiera: 'Dio creatore' },
    { num: 16, nome: 'HAKAMIAH', coro: 'CHERUBINI', essenza: 'LEALTA', inizio: '06-06', fine: '06-10', preghiera: 'Dio che erige l universo' },
    { num: 17, nome: 'LAUVIAH', coro: 'TRONI', essenza: 'RIVELAZIONE', inizio: '06-11', fine: '06-15', preghiera: 'Dio ammirevole' },
    { num: 18, nome: 'CALIEL', coro: 'TRONI', essenza: 'GIUSTIZIA', inizio: '06-16', fine: '06-21', preghiera: 'Dio pronto a soccorrere' },
    { num: 19, nome: 'LEUVIAH', coro: 'TRONI', essenza: 'INTELLIGENZA', inizio: '06-22', fine: '06-26', preghiera: 'Dio che accoglie i peccatori' },
    { num: 20, nome: 'PAHALIAH', coro: 'TRONI', essenza: 'REDENZIONE', inizio: '06-27', fine: '07-01', preghiera: 'Dio redentore' },
    { num: 21, nome: 'NELCHAEL', coro: 'TRONI', essenza: 'SAPIENZA', inizio: '07-02', fine: '07-06', preghiera: 'Dio solo e unico' },
    { num: 22, nome: 'YEIAYEL', coro: 'TRONI', essenza: 'FORTUNA', inizio: '07-07', fine: '07-11', preghiera: 'Dio che ascolta' },
    { num: 23, nome: 'MELAHEL', coro: 'TRONI', essenza: 'GUARIGIONE', inizio: '07-12', fine: '07-16', preghiera: 'Dio che libera dal male' },
    { num: 24, nome: 'HAHEUIAH', coro: 'TRONI', essenza: 'PROTEZIONE', inizio: '07-17', fine: '07-22', preghiera: 'Dio buono' },
    { num: 25, nome: 'NITH-HAIAH', coro: 'DOMINAZIONI', essenza: 'SAGGEZZA', inizio: '07-23', fine: '07-27', preghiera: 'Dio che dona saggezza' },
    { num: 26, nome: 'HAAIAH', coro: 'DOMINAZIONI', essenza: 'ORDINE', inizio: '07-28', fine: '08-01', preghiera: 'Dio nascosto' },
    { num: 27, nome: 'YERATEL', coro: 'DOMINAZIONI', essenza: 'CIVILIZZAZIONE', inizio: '08-02', fine: '08-06', preghiera: 'Dio che punisce i malvagi' },
    { num: 28, nome: 'SEHEIAH', coro: 'DOMINAZIONI', essenza: 'LONGEVITA', inizio: '08-07', fine: '08-12', preghiera: 'Dio che guarisce' },
    { num: 29, nome: 'REIYEL', coro: 'DOMINAZIONI', essenza: 'LIBERAZIONE', inizio: '08-13', fine: '08-17', preghiera: 'Dio pronto a soccorrere' },
    { num: 30, nome: 'OMAEL', coro: 'DOMINAZIONI', essenza: 'MOLTIPLICAZIONE', inizio: '08-18', fine: '08-22', preghiera: 'Dio paziente' },
    { num: 31, nome: 'LECABEL', coro: 'DOMINAZIONI', essenza: 'TALENTO', inizio: '08-23', fine: '08-28', preghiera: 'Dio che ispira' },
    { num: 32, nome: 'VASARIAH', coro: 'DOMINAZIONI', essenza: 'GIUSTIZIA', inizio: '08-29', fine: '09-02', preghiera: 'Dio giusto' },
    { num: 33, nome: 'YEHUIAH', coro: 'POTESTA', essenza: 'CONOSCENZA', inizio: '09-03', fine: '09-07', preghiera: 'Dio onnisciente' },
    { num: 34, nome: 'LEHAHIAH', coro: 'POTESTA', essenza: 'OBBEDIENZA', inizio: '09-08', fine: '09-12', preghiera: 'Dio clemente' },
    { num: 35, nome: 'CHAVAKHIAH', coro: 'POTESTA', essenza: 'RICONCILIAZIONE', inizio: '09-13', fine: '09-17', preghiera: 'Dio che dona gioia' },
    { num: 36, nome: 'MENADEL', coro: 'POTESTA', essenza: 'LAVORO', inizio: '09-18', fine: '09-23', preghiera: 'Dio adorabile' },
    { num: 37, nome: 'ANIEL', coro: 'POTESTA', essenza: 'CORAGGIO', inizio: '09-24', fine: '09-28', preghiera: 'Dio delle virtu' },
    { num: 38, nome: 'HAAMIAH', coro: 'POTESTA', essenza: 'RITUALE', inizio: '09-29', fine: '10-03', preghiera: 'Dio speranza' },
    { num: 39, nome: 'REHAEL', coro: 'POTESTA', essenza: 'RISPETTO', inizio: '10-04', fine: '10-08', preghiera: 'Dio che accoglie' },
    { num: 40, nome: 'YEIAZEL', coro: 'POTESTA', essenza: 'CONSOLAZIONE', inizio: '10-09', fine: '10-13', preghiera: 'Dio che rallegra' },
    { num: 41, nome: 'HAHAHEL', coro: 'VIRTU', essenza: 'MISSIONE', inizio: '10-14', fine: '10-18', preghiera: 'Dio in tre persone' },
    { num: 42, nome: 'MIKAEL', coro: 'VIRTU', essenza: 'ORDINE POLITICO', inizio: '10-19', fine: '10-23', preghiera: 'Dio simile a Dio' },
    { num: 43, nome: 'VEULIAH', coro: 'VIRTU', essenza: 'PROSPERITA', inizio: '10-24', fine: '10-28', preghiera: 'Dio re dominatore' },
    { num: 44, nome: 'YELAHIAH', coro: 'VIRTU', essenza: 'KARMA', inizio: '10-29', fine: '11-02', preghiera: 'Dio eterno' },
    { num: 45, nome: 'SEALIAH', coro: 'VIRTU', essenza: 'MOTIVAZIONE', inizio: '11-03', fine: '11-07', preghiera: 'Dio motore' },
    { num: 46, nome: 'ARIEL', coro: 'VIRTU', essenza: 'PERCEZIONE', inizio: '11-08', fine: '11-12', preghiera: 'Dio rivelatore' },
    { num: 47, nome: 'ASALIAH', coro: 'VIRTU', essenza: 'CONTEMPLAZIONE', inizio: '11-13', fine: '11-17', preghiera: 'Dio giusto' },
    { num: 48, nome: 'MIHAEL', coro: 'VIRTU', essenza: 'FECONDITA', inizio: '11-18', fine: '11-22', preghiera: 'Dio padre soccorrevole' },
    { num: 49, nome: 'VEHUEL', coro: 'PRINCIPATI', essenza: 'ELEVAZIONE', inizio: '11-23', fine: '11-27', preghiera: 'Dio grande e elevato' },
    { num: 50, nome: 'DANIEL', coro: 'PRINCIPATI', essenza: 'ELOQUENZA', inizio: '11-28', fine: '12-02', preghiera: 'Dio segno di misericordia' },
    { num: 51, nome: 'HAHASIAH', coro: 'PRINCIPATI', essenza: 'MEDICINA UNIVERSALE', inizio: '12-03', fine: '12-07', preghiera: 'Dio nascosto' },
    { num: 52, nome: 'IMAMIAH', coro: 'PRINCIPATI', essenza: 'ESPIAZIONE', inizio: '12-08', fine: '12-12', preghiera: 'Dio elevato' },
    { num: 53, nome: 'NANAEL', coro: 'PRINCIPATI', essenza: 'COMUNICAZIONE', inizio: '12-13', fine: '12-16', preghiera: 'Dio che abbassa i superbi' },
    { num: 54, nome: 'NITHAEL', coro: 'PRINCIPATI', essenza: 'GIOVINEZZA ETERNA', inizio: '12-17', fine: '12-21', preghiera: 'Re dei cieli' },
    { num: 55, nome: 'MEBAHIAH', coro: 'PRINCIPATI', essenza: 'LUCIDITA', inizio: '12-22', fine: '12-26', preghiera: 'Dio eterno' },
    { num: 56, nome: 'POYEL', coro: 'PRINCIPATI', essenza: 'FORTUNA', inizio: '12-27', fine: '12-31', preghiera: 'Dio che sostiene' },
    { num: 57, nome: 'NEMAMIAH', coro: 'ARCANGELI', essenza: 'DISCERNIMENTO', inizio: '01-01', fine: '01-05', preghiera: 'Dio lodevole' },
    { num: 58, nome: 'YEIALEL', coro: 'ARCANGELI', essenza: 'FORZA MENTALE', inizio: '01-06', fine: '01-10', preghiera: 'Dio che esaudisce' },
    { num: 59, nome: 'HARAEL', coro: 'ARCANGELI', essenza: 'RICCHEZZA', inizio: '01-11', fine: '01-15', preghiera: 'Dio che conosce tutto' },
    { num: 60, nome: 'MITZRAEL', coro: 'ARCANGELI', essenza: 'RIPARAZIONE', inizio: '01-16', fine: '01-20', preghiera: 'Dio che solleva' },
    { num: 61, nome: 'UMABEL', coro: 'ARCANGELI', essenza: 'AFFINITA', inizio: '01-21', fine: '01-25', preghiera: 'Dio immenso' },
    { num: 62, nome: 'IAH-HEL', coro: 'ARCANGELI', essenza: 'DESIDERIO DI SAPERE', inizio: '01-26', fine: '01-30', preghiera: 'Dio supremo' },
    { num: 63, nome: 'ANAUEL', coro: 'ARCANGELI', essenza: 'PERCEZIONE UNITA', inizio: '01-31', fine: '02-04', preghiera: 'Dio infinitamente buono' },
    { num: 64, nome: 'MEHIEL', coro: 'ARCANGELI', essenza: 'VIVIFICAZIONE', inizio: '02-05', fine: '02-09', preghiera: 'Dio che vivifica' },
    { num: 65, nome: 'DAMABIAH', coro: 'ANGELI', essenza: 'FONTE DI SAGGEZZA', inizio: '02-10', fine: '02-14', preghiera: 'Dio fonte di saggezza' },
    { num: 66, nome: 'MANAKEL', coro: 'ANGELI', essenza: 'CONOSCENZA', inizio: '02-15', fine: '02-19', preghiera: 'Dio che tutto conosce' },
    { num: 67, nome: 'EYAEL', coro: 'ANGELI', essenza: 'TRASFORMAZIONE', inizio: '02-20', fine: '02-24', preghiera: 'Dio delizia' },
    { num: 68, nome: 'HABUHIAH', coro: 'ANGELI', essenza: 'GUARIGIONE', inizio: '02-25', fine: '02-29', preghiera: 'Dio che dona generosamente' },
    { num: 69, nome: 'ROCHEL', coro: 'ANGELI', essenza: 'RESTITUZIONE', inizio: '03-01', fine: '03-05', preghiera: 'Dio che vede tutto' },
    { num: 70, nome: 'JABAMIAH', coro: 'ANGELI', essenza: 'ALCHIMIA', inizio: '03-06', fine: '03-10', preghiera: 'Verbo che produce tutto' },
    { num: 71, nome: 'HAIAIEL', coro: 'ANGELI', essenza: 'ARMI', inizio: '03-11', fine: '03-15', preghiera: 'Dio padrone universo' },
    { num: 72, nome: 'MUMIAH', coro: 'ANGELI', essenza: 'FINE E RINASCITA', inizio: '03-16', fine: '03-20', preghiera: 'Dio fine di tutte le cose' }
