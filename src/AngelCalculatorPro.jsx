        <div className="mt-12 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 backdrop-blur-lg rounded-3xl p-8 border-2 border-purple-400/50 text-center">
          <Globe className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
          <p className="text-2xl font-bold mb-2">✨ {t.footerDiscover} ✨</p>
          <p className="text-lg text-purple-200 mb-4">{t.footerText}</p>
          <a href="https://iltuoangelo.it/consulenze/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-purple-900 px-10 py-4 rounded-2xl font-bold text-2xl hover:scale-110 transition-all shadow-2xl animate-pulse">
            🌟 iltuoangelo.it/consulenze 🌟
          </a>
          <div className="mt-6 text-sm text-purple-200/70">
            © 2025 The Angels Calculator
            <div className="flex justify-center gap-4 mt-2">
              <button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-yellow-300 transition-all">
                <Shield className="w-4 h-4 inline mr-1" />{t.privacyPolicy}
              </button>
              <button onClick={() => setShowTerms(true)} className="hover:text-yellow-300 transition-all">
                📋 {t.termsConditions}
              </button>
              <button onClick={() => setShowCookieBanner(true)} className="hover:text-yellow-300 transition-all">
                🍪 Cookie
              </button>
            </div>
          </div>
        </div>

        {/* Cookie Banner */}
        {showCookieBanner && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border-2 border-purple-400">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{tc.title}</h2>
                <button onClick={() => setShowCookieBanner(false)} className="text-white/70 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-base md:text-lg mb-6 opacity-90">{tc.description}</p>

              <div className="space-y-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="font-bold text-sm md:text-base">{tc.necessary}</p>
                      <p className="text-xs md:text-sm opacity-70">{tc.necessaryDesc}</p>
                    </div>
                    <input type="checkbox" checked={cookieConsent.necessary} disabled className="w-5 h-5 md:w-6 md:h-6" />
                  </label>
                </div>

                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="font-bold text-sm md:text-base">{tc.analytics}</p>
                      <p className="text-xs md:text-sm opacity-70">{tc.analyticsDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookieConsent.analytics}
                      onChange={(e) => setCookieConsent({...cookieConsent, analytics: e.target.checked})}
                      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                    />
                  </label>
                </div>

                <div className="bg-white/10 rounded-xl p-3 md:p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="font-bold text-sm md:text-base">{tc.marketing}</p>
                      <p className="text-xs md:text-sm opacity-70">{tc.marketingDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookieConsent.marketing}
                      onChange={(e) => setCookieConsent({...cookieConsent, marketing: e.target.checked})}
                      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={handleAcceptAllCookies}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 py-3 rounded-xl font-bold hover:scale-105 transition-all text-sm md:text-base"
                >
                  {tc.acceptAll}
                </button>
                <button
                  onClick={handleSaveCookiePreferences}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 py-3 rounded-xl font-bold hover:scale-105 transition-all text-sm md:text-base"
                >
                  {tc.savePreferences}
                </button>
                <button
                  onClick={handleRejectAllCookies}
                  className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 py-3 rounded-xl font-bold hover:scale-105 transition-all text-sm md:text-base"
                >
                  {tc.rejectAll}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Policy Modal */}
        {showPrivacyPolicy && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto my-8">
              <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-blue-400">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.privacyPolicy}</h2>
                    <p className="text-sm opacity-70">Ultimo aggiornamento: 17 Ottobre 2025</p>
                  </div>
                  <button onClick={() => setShowPrivacyPolicy(false)} className="text-white/70 hover:text-white">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>

                <div className="space-y-4 text-left max-h-96 overflow-y-auto pr-2">
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">2. Servizio</h3>
                    <p className="text-sm md:text-base">The Angels Calculator fornisce calcolo Angelo Custode basato su data di nascita. Disponibile in versione gratuita e piani premium.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">3. Piani e Pagamenti</h3>
                    <p className="text-sm md:text-base">LIGHT: €4.99 | FULL: €19.99 | PLATINUM: €49.99<br/>Pagamenti via PayPal. Non effettuiamo rimborsi salvo casi eccezionali.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">4. Proprietà Intellettuale</h3>
                    <p className="text-sm md:text-base">Tutti i contenuti sono protetti dalle leggi sul copyright.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">5. Limitazione Responsabilità</h3>
                    <p className="text-sm md:text-base">Servizio fornito "così com'è". Non garantiamo servizio ininterrotto o privo di errori.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">6. Legge Applicabile</h3>
                    <p className="text-sm md:text-base">Questi termini sono regolati dalla legge italiana. Controversie sottoposte a tribunali italiani.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">7. Contatti</h3>
                    <p className="text-sm md:text-base">Per domande: gaiamadreterra@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowTerms(false)}
                  className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl hover:scale-105 transition-all"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        )}="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">1. Titolare del Trattamento</h3>
                    <p className="text-sm md:text-base">The Angels Calculator<br/>Email: gaiamadreterra@gmail.com<br/>Sede: Italia</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">2. Dati Raccolti</h3>
                    <p className="text-sm md:text-base">Raccogliamo: Nome, Cognome, Email, Telefono (opzionale), Data di Nascita, IP, Cookie.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">3. Finalità</h3>
                    <p className="text-sm md:text-base">Fornire il servizio, inviarti informazioni (con consenso), migliorare esperienza utente, adempiere obblighi legali.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">4. I Tuoi Diritti</h3>
                    <p className="text-sm md:text-base">Hai diritto ad: accedere, rettificare, cancellare, limitare, portabilità dati, opporti, revocare consenso.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">5. Conservazione</h3>
                    <p className="text-sm md:text-base">Dati conservati massimo 24 mesi dall'ultima interazione.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">6. Contatti</h3>
                    <p className="text-sm md:text-base">Per esercitare i tuoi diritti: gaiamadreterra@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl hover:scale-105 transition-all"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Terms Modal */}
        {showTerms && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto my-8">
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-purple-400">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.termsConditions}</h2>
                    <p className="text-sm opacity-70">Ultimo aggiornamento: 17 Ottobre 2025</p>
                  </div>
                  <button onClick={() => setShowTerms(false)} className="text-white/70 hover:text-white">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>

                <div className="space-y-4 text-left max-h-96 overflow-y-auto pr-2">
                  <div className="bg-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">1. Accettazione</h3>
                    <p className="text-sm md:text-base">Utilizzando questo servizio, accetti questi Termini e la Privacy Policy.</p>
                  </div>
                  <div classNameimport React, { useState } from 'react';
import { CreditCard, Printer, Globe } from 'lucide-react';

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
      platinum: ['All Full', 'Angel Activation', 'Consultation']
    },
    fr: {
      free: ['Nom Ange', 'Choeur', 'Essence'],
      light: ['Tout Gratuit', 'Fiche Complète', 'Prière'],
      full: ['Tout Light', '3 Rituels', 'Support 24h'],
      platinum: ['Tout Full', 'Activation Ange', 'Consultation']
    },
    es: {
      free: ['Nombre Ángel', 'Coro', 'Esencia'],
      light: ['Todo Gratis', 'Ficha Completa', 'Oración'],
      full: ['Todo Light', '3 Rituales', 'Soporte 24h'],
      platinum: ['Todo Full', 'Activación Ángel', 'Consulta']
    },
    de: {
      free: ['Engelname', 'Chor', 'Essenz'],
      light: ['Alles Kostenlos', 'Vollständige Karte', 'Gebet'],
      full: ['Alles Light', '3 Rituale', '24h Support'],
      platinum: ['Alles Full', 'Engel Aktivierung', 'Beratung']
    }
  };

  const cookieBannerTranslations = {
    it: {
      title: '🍪 Utilizzo dei Cookie',
      description: 'Utilizziamo cookie per migliorare la tua esperienza. Puoi scegliere quali accettare.',
      acceptAll: 'Accetta Tutti',
      rejectAll: 'Solo Necessari',
      savePreferences: 'Salva',
      necessary: 'Cookie Necessari',
      necessaryDesc: 'Essenziali per il funzionamento',
      analytics: 'Cookie Analitici',
      analyticsDesc: 'Analisi utilizzo sito',
      marketing: 'Cookie Marketing',
      marketingDesc: 'Annunci personalizzati'
    },
    en: {
      title: '🍪 Cookie Usage',
      description: 'We use cookies to improve your experience. You can choose which to accept.',
      acceptAll: 'Accept All',
      rejectAll: 'Only Necessary',
      savePreferences: 'Save',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'Essential for functionality',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'Site usage analysis',
      marketing: 'Marketing Cookies',
      marketingDesc: 'Personalized ads'
    },
    fr: {
      title: '🍪 Utilisation des Cookies',
      description: 'Nous utilisons des cookies pour améliorer votre expérience. Choisissez lesquels accepter.',
      acceptAll: 'Tout Accepter',
      rejectAll: 'Nécessaires Seuls',
      savePreferences: 'Sauvegarder',
      necessary: 'Cookies Nécessaires',
      necessaryDesc: 'Essentiels au fonctionnement',
      analytics: 'Cookies Analytiques',
      analyticsDesc: 'Analyse utilisation',
      marketing: 'Cookies Marketing',
      marketingDesc: 'Publicités personnalisées'
    },
    es: {
      title: '🍪 Uso de Cookies',
      description: 'Usamos cookies para mejorar tu experiencia. Elige cuáles aceptar.',
      acceptAll: 'Aceptar Todo',
      rejectAll: 'Solo Necesarias',
      savePreferences: 'Guardar',
      necessary: 'Cookies Necesarias',
      necessaryDesc: 'Esenciales para funcionar',
      analytics: 'Cookies Analíticas',
      analyticsDesc: 'Análisis de uso',
      marketing: 'Cookies Marketing',
      marketingDesc: 'Anuncios personalizados'
    },
    de: {
      title: '🍪 Cookie-Nutzung',
      description: 'Wir verwenden Cookies zur Verbesserung. Wählen Sie, welche Sie akzeptieren.',
      acceptAll: 'Alle Akzeptieren',
      rejectAll: 'Nur Notwendige',
      savePreferences: 'Speichern',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Wesentlich für Funktionalität',
      analytics: 'Analytische Cookies',
      analyticsDesc: 'Nutzungsanalyse',
      marketing: 'Marketing Cookies',
      marketingDesc: 'Personalisierte Werbung'
    }
  };

  const translations = {
    it: {
      title: '🍪 Utilizzo dei Cookie',
      description: 'Utilizziamo cookie per migliorare la tua esperienza. Puoi scegliere quali accettare.',
      acceptAll: 'Accetta Tutti',
      rejectAll: 'Solo Necessari',
      savePreferences: 'Salva',
      necessary: 'Cookie Necessari',
      necessaryDesc: 'Essenziali per il funzionamento',
      analytics: 'Cookie Analitici',
      analyticsDesc: 'Analisi utilizzo sito',
      marketing: 'Cookie Marketing',
      marketingDesc: 'Annunci personalizzati'
    },
    en: {
      title: '🍪 Cookie Usage',
      description: 'We use cookies to improve your experience. You can choose which to accept.',
      acceptAll: 'Accept All',
      rejectAll: 'Only Necessary',
      savePreferences: 'Save',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'Essential for functionality',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'Site usage analysis',
      marketing: 'Marketing Cookies',
      marketingDesc: 'Personalized ads'
    },
    fr: {
      title: '🍪 Utilisation des Cookies',
      description: 'Nous utilisons des cookies pour améliorer votre expérience. Choisissez lesquels accepter.',
      acceptAll: 'Tout Accepter',
      rejectAll: 'Nécessaires Seuls',
      savePreferences: 'Sauvegarder',
      necessary: 'Cookies Nécessaires',
      necessaryDesc: 'Essentiels au fonctionnement',
      analytics: 'Cookies Analytiques',
      analyticsDesc: 'Analyse utilisation',
      marketing: 'Cookies Marketing',
      marketingDesc: 'Publicités personnalisées'
    },
    es: {
      title: '🍪 Uso de Cookies',
      description: 'Usamos cookies para mejorar tu experiencia. Elige cuáles aceptar.',
      acceptAll: 'Aceptar Todo',
      rejectAll: 'Solo Necesarias',
      savePreferences: 'Guardar',
      necessary: 'Cookies Necesarias',
      necessaryDesc: 'Esenciales para funcionar',
      analytics: 'Cookies Analíticas',
      analyticsDesc: 'Análisis de uso',
      marketing: 'Cookies Marketing',
      marketingDesc: 'Anuncios personalizados'
    },
    de: {
      title: '🍪 Cookie-Nutzung',
      description: 'Wir verwenden Cookies zur Verbesserung. Wählen Sie, welche Sie akzeptieren.',
      acceptAll: 'Alle Akzeptieren',
      rejectAll: 'Nur Notwendige',
      savePreferences: 'Speichern',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Wesentlich für Funktionalität',
      analytics: 'Analytische Cookies',
      analyticsDesc: 'Nutzungsanalyse',
      marketing: 'Marketing Cookies',
      marketingDesc: 'Personalisierte Werbung'
    }
  };
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
      platinum: ['All Full', 'Angel Activation', 'Consultation']
    },
    fr: {
      free: ['Nom Ange', 'Choeur', 'Essence'],
      light: ['Tout Gratuit', 'Fiche Complète', 'Prière'],
      full: ['Tout Light', '3 Rituels', 'Support 24h'],
      platinum: ['Tout Full', 'Activation Ange', 'Consultation']
    },
    es: {
      free: ['Nombre Ángel', 'Coro', 'Esencia'],
      light: ['Todo Gratis', 'Ficha Completa', 'Oración'],
      full: ['Todo Light', '3 Rituales', 'Soporte 24h'],
      platinum: ['Todo Full', 'Activación Ángel', 'Consulta']
    },
    de: {
      free: ['Engelname', 'Chor', 'Essenz'],
      light: ['Alles Kostenlos', 'Vollständige Karte', 'Gebet'],
      full: ['Alles Light', '3 Rituale', '24h Support'],
      platinum: ['Alles Full', 'Engel Aktivierung', 'Beratung']
    }
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
      privacyConsent: 'Accetto l\'Informativa Privacy e i Termini e Condizioni',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Termini e Condizioni',
      viewPrivacy: 'Leggi Privacy',
      viewTerms: 'Leggi Termini',
      privacyRequired: 'Devi accettare la Privacy Policy per continuare'
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
      privacyConsent: 'I accept the Privacy Policy and Terms and Conditions',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms and Conditions',
      viewPrivacy: 'Read Privacy',
      viewTerms: 'Read Terms',
      privacyRequired: 'You must accept the Privacy Policy to continue'
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
      privacyConsent: 'J\'accepte la Politique de Confidentialité et les Conditions',
      privacyPolicy: 'Politique de Confidentialité',
      termsConditions: 'Conditions Générales',
      viewPrivacy: 'Lire Confidentialité',
      viewTerms: 'Lire Conditions',
      privacyRequired: 'Vous devez accepter la Politique de Confidentialité'
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
      privacyConsent: 'Acepto la Política de Privacidad y los Términos y Condiciones',
      privacyPolicy: 'Política de Privacidad',
      termsConditions: 'Términos y Condiciones',
      viewPrivacy: 'Leer Privacidad',
      viewTerms: 'Leer Términos',
      privacyRequired: 'Debes aceptar la Política de Privacidad para continuar'
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
      privacyConsent: 'Ich akzeptiere die Datenschutzerklärung und die Bedingungen',
      privacyPolicy: 'Datenschutzerklärung',
      termsConditions: 'Allgemeine Geschäftsbedingungen',
      viewPrivacy: 'Datenschutz Lesen',
      viewTerms: 'Bedingungen Lesen',
      privacyRequired: 'Sie müssen die Datenschutzerklärung akzeptieren'
    }
  };

  const t = translations[language];
  const tc = cookieBannerTranslations[language];
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
    { num: 1, nome: 'VEHUIAH', coro: 'SERAFINI', essenza: 'VOLONTA', inizio: '03-21', fine: '03-25' },
    { num: 2, nome: 'JELIEL', coro: 'SERAFINI', essenza: 'AMORE E SAGGEZZA', inizio: '03-26', fine: '03-30' },
    { num: 3, nome: 'SITAEL', coro: 'SERAFINI', essenza: 'COSTRUTTORE', inizio: '03-31', fine: '04-04' },
    { num: 4, nome: 'ELEMIAH', coro: 'SERAFINI', essenza: 'POTERE DIVINO', inizio: '04-05', fine: '04-09' },
    { num: 5, nome: 'MAHASIAH', coro: 'SERAFINI', essenza: 'RETTIFICATORE', inizio: '04-10', fine: '04-14' },
    { num: 6, nome: 'LELAHEL', coro: 'SERAFINI', essenza: 'LUCE DELL AMORE', inizio: '04-15', fine: '04-20' },
    { num: 7, nome: 'ACHAIAH', coro: 'SERAFINI', essenza: 'PAZIENZA', inizio: '04-21', fine: '04-25' },
    { num: 8, nome: 'CAHETEL', coro: 'SERAFINI', essenza: 'BENEDIZIONE', inizio: '04-26', fine: '04-30' },
    { num: 9, nome: 'HAZIEL', coro: 'CHERUBINI', essenza: 'MISERICORDIA', inizio: '05-01', fine: '05-05' },
    { num: 10, nome: 'ALADIAH', coro: 'CHERUBINI', essenza: 'GRAZIA DIVINA', inizio: '05-06', fine: '05-10' },
    { num: 11, nome: 'LAUVIAH', coro: 'CHERUBINI', essenza: 'VITTORIA', inizio: '05-11', fine: '05-15' },
    { num: 12, nome: 'HAHAIAH', coro: 'CHERUBINI', essenza: 'RIFUGIO', inizio: '05-16', fine: '05-20' },
    { num: 13, nome: 'YEZALEL', coro: 'CHERUBINI', essenza: 'FEDELTA', inizio: '05-21', fine: '05-25' },
    { num: 14, nome: 'MEBAHEL', coro: 'CHERUBINI', essenza: 'VERITA E LIBERTA', inizio: '05-26', fine: '05-31' },
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
    { num: 42, nome: 'MIKAEL', coro: 'VIRTU', essenza: 'ORDINE POLITICO', inizio: '10-19', fine: '10-23' },
    { num: 43, nome: 'VEULIAH', coro: 'VIRTU', essenza: 'PROSPERITA', inizio: '10-24', fine: '10-28' },
    { num: 44, nome: 'YELAHIAH', coro: 'VIRTU', essenza: 'KARMA', inizio: '10-29', fine: '11-02' },
    { num: 45, nome: 'SEALIAH', coro: 'VIRTU', essenza: 'MOTIVAZIONE', inizio: '11-03', fine: '11-07' },
    { num: 46, nome: 'ARIEL', coro: 'VIRTU', essenza: 'PERCEZIONE', inizio: '11-08', fine: '11-12' },
    { num: 47, nome: 'ASALIAH', coro: 'VIRTU', essenza: 'CONTEMPLAZIONE', inizio: '11-13', fine: '11-17' },
    { num: 48, nome: 'MIHAEL', coro: 'VIRTU', essenza: 'FECONDITA', inizio: '11-18', fine: '11-22' },
    { num: 49, nome: 'VEHUEL', coro: 'PRINCIPATI', essenza: 'ELEVAZIONE', inizio: '11-23', fine: '11-27' },
    { num: 50, nome: 'DANIEL', coro: 'PRINCIPATI', essenza: 'ELOQUENZA', inizio: '11-28', fine: '12-02' },
    { num: 51, nome: 'HAHASIAH', coro: 'PRINCIPATI', essenza: 'MEDICINA UNIVERSALE', inizio: '12-03', fine: '12-07' },
    { num: 52, nome: 'IMAMIAH', coro: 'PRINCIPATI', essenza: 'ESPIAZIONE', inizio: '12-08', fine: '12-12' },
    { num: 53, nome: 'NANAEL', coro: 'PRINCIPATI', essenza: 'COMUNICAZIONE', inizio: '12-13', fine: '12-16' },
    { num: 54, nome: 'NITHAEL', coro: 'PRINCIPATI', essenza: 'GIOVINEZZA ETERNA', inizio: '12-17', fine: '12-21' },
    { num: 55, nome: 'MEBAHIAH', coro: 'PRINCIPATI', essenza: 'LUCIDITA', inizio: '12-22', fine: '12-26' },
    { num: 56, nome: 'POYEL', coro: 'PRINCIPATI', essenza: 'FORTUNA', inizio: '12-27', fine: '12-31' },
    { num: 57, nome: 'NEMAMIAH', coro: 'ARCANGELI', essenza: 'DISCERNIMENTO', inizio: '01-01', fine: '01-05' },
    { num: 58, nome: 'YEIALEL', coro: 'ARCANGELI', essenza: 'FORZA MENTALE', inizio: '01-06', fine: '01-10' },
    { num: 59, nome: 'HARAEL', coro: 'ARCANGELI', essenza: 'RICCHEZZA', inizio: '01-11', fine: '01-15' },
    { num: 60, nome: 'MITZRAEL', coro: 'ARCANGELI', essenza: 'RIPARAZIONE', inizio: '01-16', fine: '01-20' },
    { num: 61, nome: 'UMABEL', coro: 'ARCANGELI', essenza: 'AFFINITA', inizio: '01-21', fine: '01-25' },
    { num: 62, nome: 'IAH-HEL', coro: 'ARCANGELI', essenza: 'DESIDERIO DI SAPERE', inizio: '01-26', fine: '01-30' },
    { num: 63, nome: 'ANAUEL', coro: 'ARCANGELI', essenza: 'PERCEZIONE UNITA', inizio: '01-31', fine: '02-04' },
    { num: 64, nome: 'MEHIEL', coro: 'ARCANGELI', essenza: 'VIVIFICAZIONE', inizio: '02-05', fine: '02-09' },
    { num: 65, nome: 'DAMABIAH', coro: 'ANGELI', essenza: 'FONTE DI SAGGEZZA', inizio: '02-10', fine: '02-14' },
    { num: 66, nome: 'MANAKEL', coro: 'ANGELI', essenza: 'CONOSCENZA', inizio: '02-15', fine: '02-19' },
    { num: 67, nome: 'EYAEL', coro: 'ANGELI', essenza: 'TRASFORMAZIONE', inizio: '02-20', fine: '02-24' },
    { num: 68, nome: 'HABUHIAH', coro: 'ANGELI', essenza: 'GUARIGIONE', inizio: '02-25', fine: '02-29' },
    { num: 69, nome: 'ROCHEL', coro: 'ANGELI', essenza: 'RESTITUZIONE', inizio: '03-01', fine: '03-05' },
    { num: 70, nome: 'JABAMIAH', coro: 'ANGELI', essenza: 'ALCHIMIA', inizio: '03-06', fine: '03-10' },
    { num: 71, nome: 'HAIAIEL', coro: 'ANGELI', essenza: 'ARMI', inizio: '03-11', fine: '03-15' },
    { num: 72, nome: 'MUMIAH', coro: 'ANGELI', essenza: 'FINE E RINASCITA', inizio: '03-16', fine: '03-20' }
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
      alert('Angelo non trovato per questa data!');
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
                  {t.essence}: {translateEssence(angelResult.essenza)}
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
          <div className="mt-6 text-sm text-purple-200/70">© 2025 The Angels Calculator</div>
        </div>
      </div>
    </div>
  );
};

export default AngelCalculator;
