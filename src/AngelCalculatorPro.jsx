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

  // Traduzioni CORI e ESSENZE
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
    fr: { 'VOLONTA': 'VOLONTÉ', 'AMORE E SAGGEZZA': 'AMOUR ET SAGESSE', 'INTELLIGENZA': 'INTELLIGENCE', 'GIUSTIZIA': 'JUSTICE' },
    es: { 'VOLONTA': 'VOLUNTAD', 'AMORE E SAGGEZZA': 'AMOR Y SABIDURÍA', 'INTELLIGENZA': 'INTELIGENCIA', 'GIUSTIZIA': 'JUSTICIA' },
    de: { 'VOLONTA': 'WILLE', 'AMORE E SAGGEZZA': 'LIEBE UND WEISHEIT', 'INTELLIGENZA': 'INTELLIGENZ', 'GIUSTIZIA': 'GERECHTIGKEIT' }
  };

  const translations = {
    it: { title: 'The Angels Calculator', subtitle: 'Scopri il Tuo Angelo Custode', firstName: 'Nome', lastName: 'Cognome', email: 'Email', phone: 'Cellulare', birthDate: 'Data di Nascita', promo: 'Autorizzo ad essere contattato/a per offerte promozionali sugli Angeli', calculate: 'Calcola il Mio Angelo', print: 'Stampa Report', newSearch: 'Nuova Ricerca', guardianOf: 'Angelo Custode di', choir: 'CORO', essence: 'ESSENZA', freeVersion: 'Versione Gratuita', freeText: 'Questo è il tuo Angelo Custode! Per scoprire la preghiera completa e i rituali personalizzati, scegli uno dei piani premium.', angelicPrayer: 'Preghiera Angelica', prayerInstruction: 'Recita questa preghiera ogni mattina per entrare in sintonia con il tuo Angelo Custode.', angelicQualities: 'Qualità Angeliche', quality1: 'Protezione spirituale costante', quality2: 'Guida nelle decisioni importanti', quality3: 'Supporto nei momenti difficili', quality4: 'Sviluppo essenza', personalRituals: 'Rituali Personalizzati', activation: 'ATTIVAZIONE ANGELO CUSTODE', activationText: 'Riceverai attivazione energetica del tuo Angelo', activationNote: 'Questa attivazione apre un canale diretto con il tuo Angelo Custode', services: 'Scopri i Nostri Servizi Angelici!', free: 'GRATIS', active: 'Attivo', select: 'Seleziona', buy: 'Acquista', howItWorks: 'Come Funziona', step1: 'Scegli il tuo piano', step2: 'Pagamento sicuro PayPal', step3: 'Ricevi report via email', fillRequired: 'Compila tutti i campi obbligatori', footerText: 'Per avere informazioni su tutte le altre Consulenze Angeliche adatte a te visita:', footerDiscover: 'Scopri Tutte le Consulenze Angeliche' },
    en: { title: 'The Angels Calculator', subtitle: 'Discover Your Guardian Angel', firstName: 'First Name', lastName: 'Last Name', email: 'Email', phone: 'Phone', birthDate: 'Birth Date', promo: 'I authorize to be contacted for promotional offers about Angels', calculate: 'Calculate My Angel', print: 'Print Report', newSearch: 'New Search', guardianOf: 'Guardian Angel of', choir: 'CHOIR', essence: 'ESSENCE', freeVersion: 'Free Version', freeText: 'This is your Guardian Angel! To discover the complete prayer and personalized rituals, choose one of the premium plans.', angelicPrayer: 'Angelic Prayer', prayerInstruction: 'Recite this prayer every morning to attune with your Guardian Angel.', angelicQualities: 'Angelic Qualities', quality1: 'Constant spiritual protection', quality2: 'Guidance in important decisions', quality3: 'Support in difficult times', quality4: 'Essence development', personalRituals: 'Personalized Rituals', activation: 'GUARDIAN ANGEL ACTIVATION', activationText: 'You will receive energetic activation of your Angel', activationNote: 'This activation opens a direct channel with your Guardian Angel', services: 'Discover Our Angelic Services!', free: 'FREE', active: 'Active', select: 'Select', buy: 'Buy', howItWorks: 'How It Works', step1: 'Choose your plan', step2: 'Secure PayPal payment', step3: 'Receive report via email', fillRequired: 'Fill in all required fields', footerText: 'For information on all other Angelic Consultations suitable for you visit:', footerDiscover: 'Discover All Angelic Consultations' },
    fr: { title: 'The Angels Calculator', subtitle: 'Découvrez Votre Ange Gardien', firstName: 'Prénom', lastName: 'Nom', footerText: 'Pour des informations sur toutes les autres Consultations Angéliques visitez:', footerDiscover: 'Découvrez Toutes les Consultations Angéliques' },
    es: { title: 'The Angels Calculator', subtitle: 'Descubre Tu Ángel Guardián', firstName: 'Nombre', lastName: 'Apellido', footerText: 'Para información sobre todas las otras Consultas Angélicas visita:', footerDiscover: 'Descubre Todas las Consultas Angélicas' },
    de: { title: 'The Angels Calculator', subtitle: 'Entdecke Deinen Schutzengel', firstName: 'Vorname', lastName: 'Nachname', footerText: 'Für Informationen über alle anderen Engelberatungen besuche:', footerDiscover: 'Entdecke Alle Engelberatungen' }
  };

  const t = translations[language];
  const translateChoir = (choir) => choirTranslations[language][choir] || choir;
  const translateEssence = (essence) => language === 'it' ? essence : (essenceTranslations[language][essence] || essence);

  const languages = [ { code: 'it', flag: '🇮🇹', name: 'Italiano' }, { code: 'en', flag: '🇺🇸', name: 'English' }, { code: 'fr', flag: '🇫🇷', name: 'Français' }, { code: 'es', flag: '🇪🇸', name: 'Español' }, { code: 'de', flag: '🇩🇪', name: 'Deutsch' } ];

  const prefissi = [ { code: '+39', flag: '🇮🇹' }, { code: '+1', flag: '🇺🇸' }, { code: '+44', flag: '🇬🇧' }, { code: '+33', flag: '🇫🇷' }, { code: '+34', flag: '🇪🇸' }, { code: '+49', flag: '🇩🇪' } ];

  const angelsDB = [
    { num: 1, nome: 'VEHUIAH', coro: 'SERAFINI', essenza: 'VOLONTA', inizio: '03-21', fine: '03-25', preghiera: 'Dio elevato e esaltato sopra tutte le cose' },
    { num: 2, nome: 'JELIEL', coro: 'SERAFINI', essenza: 'AMORE E SAGGEZZA', inizio: '03-26', fine: '03-30', preghiera: 'Dio soccorrevole' },
    { num: 19, nome: 'LEUVIAH', coro: 'TRONI', essenza: 'INTELLIGENZA', inizio: '06-22', fine: '06-26', preghiera: 'Dio che accoglie i peccatori' },
    { num: 72, nome: 'MUMIAH', coro: 'ANGELI', essenza: 'FINE E RINASCITA', inizio: '03-16', fine: '03-20', preghiera: 'Dio fine di tutte le cose' }
  ];

  const plans = [ { id: 'free', name: 'GRATUITO', price: 0, features: ['Nome Angelo', 'Coro', 'Essenza'], icon: '✨' }, { id: 'light', name: 'LIGHT', price: 4.99, features: ['Tutto Gratuito', 'Scheda Completa', 'Preghiera'], icon: '🌙' }, { id: 'full', name: 'FULL', price: 19.99, features: ['Tutto Light', '3 Rituali', 'Supporto 24h'], icon: '⭐' }, { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['Tutto Full', 'Attivazione Angelo', 'Consulenza'], icon: '👼' } ];

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
    const angel = findAngel(formData.dataNascita);
    if (angel) {
      setAngelResult(angel);
      setSelectedPlan('free');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <div className="flex gap-2 bg-white/10 backdrop-blur-lg rounded-xl p-2">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => setLanguage(lang.code)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${language === lang.code ? 'bg-pink-500 text-white' : 'bg-transparent text-white/70 hover:text-white hover:bg-white/10'}`} title={lang.name}>
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
              <input type="email" placeholder={`${t.email || 'Email'} *`} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              <input type="date" value={formData.dataNascita} onChange={(e) => setFormData({...formData, dataNascita: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white" />
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
                  {t.essence}: {translateEssence(angelResult.essenza)}
                </div>
              </div>

              <div className="bg-white/20 rounded-2xl p-6 mb-6 text-center">
                <p className="text-2xl font-bold">{t.guardianOf}: {formData.nome} {formData.cognome}</p>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-2xl p-6 border-2 border-purple-400 text-center">
                <p className="text-lg mb-3 font-semibold">✨ {t.footerText}</p>
                <a href="https://iltuoangelo.it/consulenze/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-8 py-3 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg">
                  🌟 iltuoangelo.it/consulenze 🌟
                </a>
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
        </div>
      </div>
    </div>
  );
};

export default AngelCalculator;
