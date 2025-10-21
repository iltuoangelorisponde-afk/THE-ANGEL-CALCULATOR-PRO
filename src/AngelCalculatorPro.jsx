import React, { useState } from 'react';
import { Calendar, CreditCard, Download, Printer, Sparkles, Star, Globe } from 'lucide-react';
import { findAngelByDate as findAngelIT } from './database/angels72Database';
import { findAngelByDate as findAngelEN } from './database/angels72Database_EN';
import { findAngelByDate as findAngelFR } from './database/angels72Database_FR';
import { findAngelByDate as findAngelES } from './database/angels72Database_ES';
import { findAngelByDate as findAngelDE } from './database/angels72Database_DE';

const AngelCalculator = () => {
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
  
  const [language, setLanguage] = useState('IT');
  const [angelResult, setAngelResult] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const languages = [
    { code: 'IT', flag: '🇮🇹', name: 'Italiano' },
    { code: 'EN', flag: '🇬🇧', name: 'English' },
    { code: 'FR', flag: '🇫🇷', name: 'Français' },
    { code: 'ES', flag: '🇪🇸', name: 'Español' },
    { code: 'DE', flag: '🇩🇪', name: 'Deutsch' }
  ];

  const prefissi = [
    { code: '+39', flag: '🇮🇹', country: 'Italia' },
    { code: '+1', flag: '🇺🇸', country: 'USA' },
    { code: '+44', flag: '🇬🇧', country: 'UK' },
    { code: '+33', flag: '🇫🇷', country: 'France' },
    { code: '+49', flag: '🇩🇪', country: 'Germany' },
    { code: '+34', flag: '🇪🇸', country: 'España' }
  ];

  const translations = {
    IT: {
      title: 'The Angels Calculator',
      subtitle: 'Scopri il Tuo Angelo Custode',
      name: 'Nome',
      surname: 'Cognome',
      email: 'Email',
      phone: 'Cellulare',
      birthdate: 'Data di Nascita',
      promo: 'Autorizzo ad essere contattato/a per offerte promozionali sugli Angeli',
      privacy: 'Accetto la Privacy Policy e i Termini di Servizio',
      calculate: 'Calcola il Mio Angelo',
      printReport: 'Stampa Report',
      newSearch: 'Nuova Ricerca',
      plans: 'Scopri i Nostri Servizi Angelici!',
      free: 'GRATUITO',
      light: 'LIGHT',
      full: 'FULL',
      platinum: 'PLATINUM',
      buy: 'Acquista',
      active: 'Attivo',
      fillFields: 'Compila tutti i campi obbligatori',
      acceptPrivacy: 'Devi accettare la Privacy Policy'
    },
    EN: {
      title: 'The Angels Calculator',
      subtitle: 'Discover Your Guardian Angel',
      name: 'Name',
      surname: 'Surname',
      email: 'Email',
      phone: 'Phone',
      birthdate: 'Birth Date',
      promo: 'I authorize to be contacted for promotional offers about Angels',
      privacy: 'I accept the Privacy Policy and Terms of Service',
      calculate: 'Calculate My Angel',
      printReport: 'Print Report',
      newSearch: 'New Search',
      plans: 'Discover Our Angelic Services!',
      free: 'FREE',
      light: 'LIGHT',
      full: 'FULL',
      platinum: 'PLATINUM',
      buy: 'Buy',
      active: 'Active',
      fillFields: 'Fill all required fields',
      acceptPrivacy: 'You must accept the Privacy Policy'
    },
    FR: {
      title: 'The Angels Calculator',
      subtitle: 'Découvrez Votre Ange Gardien',
      name: 'Prénom',
      surname: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      birthdate: 'Date de Naissance',
      promo: 'J\'autorise à être contacté pour des offres promotionnelles sur les Anges',
      privacy: 'J\'accepte la Politique de Confidentialité et les Conditions de Service',
      calculate: 'Calculer Mon Ange',
      printReport: 'Imprimer Rapport',
      newSearch: 'Nouvelle Recherche',
      plans: 'Découvrez Nos Services Angéliques!',
      free: 'GRATUIT',
      light: 'LIGHT',
      full: 'FULL',
      platinum: 'PLATINUM',
      buy: 'Acheter',
      active: 'Actif',
      fillFields: 'Remplir tous les champs obligatoires',
      acceptPrivacy: 'Vous devez accepter la Politique de Confidentialité'
    },
    ES: {
      title: 'The Angels Calculator',
      subtitle: 'Descubre Tu Ángel Guardián',
      name: 'Nombre',
      surname: 'Apellido',
      email: 'Email',
      phone: 'Teléfono',
      birthdate: 'Fecha de Nacimiento',
      promo: 'Autorizo ser contactado para ofertas promocionales sobre Ángeles',
      privacy: 'Acepto la Política de Privacidad y los Términos de Servicio',
      calculate: 'Calcular Mi Ángel',
      printReport: 'Imprimir Informe',
      newSearch: 'Nueva Búsqueda',
      plans: '¡Descubre Nuestros Servicios Angélicos!',
      free: 'GRATIS',
      light: 'LIGHT',
      full: 'FULL',
      platinum: 'PLATINUM',
      buy: 'Comprar',
      active: 'Activo',
      fillFields: 'Completa todos los campos obligatorios',
      acceptPrivacy: 'Debes aceptar la Política de Privacidad'
    },
    DE: {
      title: 'The Angels Calculator',
      subtitle: 'Entdecke Deinen Schutzengel',
      name: 'Name',
      surname: 'Nachname',
      email: 'Email',
      phone: 'Telefon',
      birthdate: 'Geburtsdatum',
      promo: 'Ich erlaube kontaktiert zu werden für Werbeangebote über Engel',
      privacy: 'Ich akzeptiere die Datenschutzerklärung und Nutzungsbedingungen',
      calculate: 'Meinen Engel Berechnen',
      printReport: 'Bericht Drucken',
      newSearch: 'Neue Suche',
      plans: 'Entdecken Sie Unsere Engeldienste!',
      free: 'KOSTENLOS',
      light: 'LIGHT',
      full: 'FULL',
      platinum: 'PLATINUM',
      buy: 'Kaufen',
      active: 'Aktiv',
      fillFields: 'Alle Pflichtfelder ausfüllen',
      acceptPrivacy: 'Sie müssen die Datenschutzerklärung akzeptieren'
    }
  };

  const t = translations[language];

  const plans = {
    IT: [
      { id: 'free', name: 'GRATUITO', price: 0, features: ['Nome Angelo', 'Coro di Appartenenza', 'Essenza Angelica', 'Messaggio Personale'], icon: '✨' },
      { id: 'light', name: 'LIGHT', price: 4.99, features: ['Tutto Gratuito', 'Scheda Completa', 'Preghiera Angelo', 'Qualità e Difetti', 'Rituale Base'], icon: '🌙' },
      { id: 'full', name: 'FULL', price: 19.99, features: ['Tutto Light', '3 Rituali Completi', 'Giorni di Reggenza', 'Invocazione Completa', 'PDF Download'], icon: '⭐' },
      { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['Tutto Full', 'Attivazione Angelo a Distanza', 'Report via Email', 'Consegna entro 3 giorni'], icon: '👼' }
    ],
    EN: [
      { id: 'free', name: 'FREE', price: 0, features: ['Angel Name', 'Choir', 'Essence', 'Personal Message'], icon: '✨' },
      { id: 'light', name: 'LIGHT', price: 4.99, features: ['All Free', 'Complete Profile', 'Angel Prayer', 'Qualities & Defects', 'Basic Ritual'], icon: '🌙' },
      { id: 'full', name: 'FULL', price: 19.99, features: ['All Light', '3 Complete Rituals', 'Regency Days', 'Full Invocation', 'PDF Download'], icon: '⭐' },
      { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['All Full', 'Remote Angel Activation', 'Email Report', 'Delivery within 3 days'], icon: '👼' }
    ],
    FR: [
      { id: 'free', name: 'GRATUIT', price: 0, features: ['Nom Ange', 'Chœur', 'Essence', 'Message Personnel'], icon: '✨' },
      { id: 'light', name: 'LIGHT', price: 4.99, features: ['Tout Gratuit', 'Profil Complet', 'Prière Ange', 'Qualités & Défauts', 'Rituel Base'], icon: '🌙' },
      { id: 'full', name: 'FULL', price: 19.99, features: ['Tout Light', '3 Rituels Complets', 'Jours Régence', 'Invocation Complète', 'PDF Télécharger'], icon: '⭐' },
      { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['Tout Full', 'Activation Ange Distance', 'Rapport Email', 'Livraison sous 3 jours'], icon: '👼' }
    ],
    ES: [
      { id: 'free', name: 'GRATIS', price: 0, features: ['Nombre Ángel', 'Coro', 'Esencia', 'Mensaje Personal'], icon: '✨' },
      { id: 'light', name: 'LIGHT', price: 4.99, features: ['Todo Gratis', 'Perfil Completo', 'Oración Ángel', 'Cualidades y Defectos', 'Ritual Básico'], icon: '🌙' },
      { id: 'full', name: 'FULL', price: 19.99, features: ['Todo Light', '3 Rituales Completos', 'Días Regencia', 'Invocación Completa', 'PDF Descarga'], icon: '⭐' },
      { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['Todo Full', 'Activación Ángel Distancia', 'Informe Email', 'Entrega en 3 días'], icon: '👼' }
    ],
    DE: [
      { id: 'free', name: 'KOSTENLOS', price: 0, features: ['Engel Name', 'Chor', 'Essenz', 'Persönliche Nachricht'], icon: '✨' },
      { id: 'light', name: 'LIGHT', price: 4.99, features: ['Alles Kostenlos', 'Vollständiges Profil', 'Engel Gebet', 'Qualitäten & Mängel', 'Basis Ritual'], icon: '🌙' },
      { id: 'full', name: 'FULL', price: 19.99, features: ['Alles Light', '3 Vollständige Rituale', 'Regenztage', 'Vollständige Anrufung', 'PDF Download'], icon: '⭐' },
      { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['Alles Full', 'Fern Engel Aktivierung', 'Email Bericht', 'Lieferung in 3 Tagen'], icon: '👼' }
    ]
  };

  
const findAngelByDate = (date, angels) => {
  const [year, month, day] = date.split('-').map(Number);
  const dateNumber = month * 100 + day; // es. 3 maggio => 305

  for (let angel of angels) {
    const [startMonth, startDay] = angel.dateStart.split('-').map(Number);
    const [endMonth, endDay] = angel.dateEnd.split('-').map(Number);
    const startNumber = startMonth * 100 + startDay;
    const endNumber = endMonth * 100 + endDay;

    if (startNumber <= endNumber) {
      // Intervallo normale (es. 03-21 to 03-25)
      if (dateNumber >= startNumber && dateNumber <= endNumber) {
        return angel;
      }
    } else {
      // Intervallo che supera l'anno (es. 12-27 to 01-04)
      if (dateNumber >= startNumber || dateNumber <= endNumber) {
        return angel;
      }
    }
  }
  return null; // Nessun angelo trovato
};

  };

  const handleCalculate = () => {
    if (!formData.nome || !formData.cognome || !formData.email || !formData.dataNascita) {
      alert(t.fillFields);
      return;
    }
    if (!formData.accettoPrivacy) {
      alert(t.acceptPrivacy);
      return;
    }
    const angel = findAngelByDate(formData.dataNascita);
    if (angel) {
      setAngelResult(angel);
      setSelectedPlan('free');
    }
  };

  const handlePrint = () => window.print();
  const handleCheckout = (plan) => alert(`Checkout ${plan.name} - €${plan.price.toFixed(2)}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end mb-6 gap-2">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                language === lang.code 
                  ? 'bg-white text-purple-900 scale-110' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {lang.flag} {lang.code}
            </button>
          ))}
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 animate-pulse">✨ {t.title} ✨</h1>
          <p className="text-2xl text-purple-200">{t.subtitle}</p>
        </div>

        {!angelResult && (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder={`${t.name} *`}
                  value={formData.nome} 
                  onChange={(e) => setFormData({...formData, nome: e.target.value})} 
                  className="px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" 
                />
                <input 
                  type="text" 
                  placeholder={`${t.surname} *`}
                  value={formData.cognome} 
                  onChange={(e) => setFormData({...formData, cognome: e.target.value})} 
                  className="px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" 
                />
              </div>
              <input 
                type="email" 
                placeholder={`${t.email} *`}
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" 
              />
              <div className="grid grid-cols-12 gap-3">
                <select 
                  value={formData.prefisso} 
                  onChange={(e) => setFormData({...formData, prefisso: e.target.value})} 
                  className="col-span-4 px-3 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white"
                >
                  {prefissi.map(p => (
                    <option key={p.code} value={p.code} className="bg-purple-900">
                      {p.flag} {p.code}
                    </option>
                  ))}
                </select>
                <input 
                  type="tel" 
                  placeholder={t.phone}
                  value={formData.cellulare} 
                  onChange={(e) => setFormData({...formData, cellulare: e.target.value})} 
                  className="col-span-8 px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" 
                />
              </div>
              <label className="flex items-start gap-3 bg-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/20 transition">
                <input 
                  type="checkbox" 
                  checked={formData.accettoPromo} 
                  onChange={(e) => setFormData({...formData, accettoPromo: e.target.checked})} 
                  className="mt-1 w-5 h-5" 
                />
                <span className="text-sm">{t.promo}</span>
              </label>
              <label className="flex items-start gap-3 bg-yellow-500/20 border-2 border-yellow-400 rounded-xl p-4 cursor-pointer hover:bg-yellow-500/30 transition">
                <input 
                  type="checkbox" 
                  checked={formData.accettoPrivacy} 
                  onChange={(e) => setFormData({...formData, accettoPrivacy: e.target.checked})} 
                  className="mt-1 w-5 h-5" 
                  required
                />
                <span className="text-sm font-semibold">{t.privacy} *</span>
              </label>
              <input 
                type="date" 
                value={formData.dataNascita} 
                onChange={(e) => setFormData({...formData, dataNascita: e.target.value})} 
                className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white" 
              />
              <button 
                onClick={handleCalculate} 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-xl"
              >
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
                  {angelResult.coro}
                </div>
                <div className="text-2xl text-yellow-200 font-semibold">{angelResult.essenza}</div>
                <div className="text-lg text-purple-200 mt-4">{angelResult.dateRange}</div>
              </div>

              {selectedPlan === 'free' && angelResult.message && (
                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-8 mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">💫 {angelResult.message}</h3>
                </div>
              )}

              {(selectedPlan === 'light' || selectedPlan === 'full' || selectedPlan === 'platinum') && angelResult.prayer && (
                <div className="space-y-6">
                  <div className="bg-white/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4">🙏</h3>
                    <p className="text-xl leading-relaxed whitespace-pre-line">{angelResult.prayer}</p>
                  </div>
                  {angelResult.qualita && (
                    <div className="bg-white/20 rounded-2xl p-6">
                      <h3 className="text-2xl font-bold mb-4">💎</h3>
                      <p className="text-lg">{angelResult.qualita}</p>
                    </div>
                  )}
                  {angelResult.difetti && (
                    <div className="bg-white/20 rounded-2xl p-6">
                      <h3 className="text-2xl font-bold mb-4">🚫</h3>
                      <p className="text-lg">{angelResult.difetti}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button 
                  onClick={handlePrint} 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Printer className="w-5 h-5" />{t.printReport}
                </button>
                <button 
                  onClick={() => {
                    setAngelResult(null);
                    setSelectedPlan(null);
                  }} 
                  className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded-xl font-bold"
                >
                  {t.newSearch}
                </button>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">🌟 {t.plans} 🌟</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {plans[language].map((plan) => (
                  <div 
                    key={plan.id} 
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 transition-all hover:scale-105 ${
                      selectedPlan === plan.id ? 'border-yellow-400 shadow-2xl' : 'border-white/20 hover:border-pink-400'
                    }`}
                  >
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-2">{plan.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-pink-300">
                        {plan.price === 0 ? t.free : `€${plan.price}`}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.id === 'free' ? (
                      <button 
                        onClick={() => setSelectedPlan('free')} 
                        disabled={selectedPlan === 'free'} 
                        className="w-full bg-gray-600 py-3 rounded-xl font-bold"
                      >
                        {selectedPlan === 'free' ? t.active : t.free}
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleCheckout(plan)} 
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                      >
                        <CreditCard className="w-5 h-5" />{t.buy}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AngelCalculator;
