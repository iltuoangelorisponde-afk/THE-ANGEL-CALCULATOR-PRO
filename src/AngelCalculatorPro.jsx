import { EmailButton } from './emailSystem';
import React, { useState } from 'react';
import { Calendar, CreditCard, Download, Printer, Sparkles, Star } from 'lucide-react';

const AngelCalculator = () => {
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

  const prefissi = [
    { code: '+39', flag: '🇮🇹' },
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    { code: '+33', flag: '🇫🇷' }
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
  ];

  const plans = [
    { id: 'free', name: 'GRATUITO', price: 0, features: ['Nome Angelo', 'Coro di Appartenenza', 'Essenza Angelica'], icon: '✨' },
    { id: 'light', name: 'LIGHT', price: 4.99, features: ['Tutto Gratuito', 'Scheda Completa', 'Preghiera Angelo', 'PDF Download'], icon: '🌙' },
    { id: 'full', name: 'FULL', price: 19.99, features: ['Tutto Light', '3 Rituali Personalizzati', 'Meditazioni Guidate', 'Supporto 24h'], icon: '⭐' },
    { id: 'platinum', name: 'PLATINUM', price: 49.99, features: ['Tutto Full', 'Attivazione Angelo a Distanza', 'Consegna entro 3 giorni', 'Consulenza Personale'], icon: '👼' }
  ];

  const findAngel = (date) => {
    const [year, month, day] = date.split('-');
    const birthDate = `${month}-${day}`;
    return angelsDB.find(angel => birthDate >= angel.inizio && birthDate <= angel.fine);
  };

  const handleCalculate = () => {
    if (!formData.nome || !formData.cognome || !formData.email || !formData.dataNascita) {
      alert('Compila tutti i campi obbligatori');
      return;
    }
    const angel = findAngel(formData.dataNascita);
    if (angel) {
      setAngelResult(angel);
      setSelectedPlan('free');
    }
  };

  const handlePrint = () => window.print();
  const handleCheckout = (plan) => alert(`Checkout ${plan.name} - €${plan.price.toFixed(2)}`);

  const generateRituals = () => [
    { title: 'Rituale del Mantra Sacro', description: `Accendi una candela bianca e incenso. Ripeti "${angelResult.nome}" 108 volte come mantra, visualizzando luce dorata. Recita: "${angelResult.preghiera}" e formula le tue richieste.` },
    { title: 'Rituale della Luna Piena', description: `Scrivi su foglio bianco ${angelResult.nome} e la tua richiesta. Piegalo 3 volte, tienilo sotto il cuscino per 3 notti consecutive recitando la preghiera angelica.` },
    { title: 'Rituale dell Alba', description: `All'alba verso est, accendi candela oro e pronuncia 7 volte: "Angelo ${angelResult.nome}, guida la mia ${angelResult.essenza}". Lascia bruciare completamente.` }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 animate-pulse">✨ The Angels Calculator ✨</h1>
          <p className="text-2xl text-purple-200">Scopri il Tuo Angelo Custode</p>
        </div>

        {!angelResult && (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nome *" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
                <input type="text" placeholder="Cognome *" value={formData.cognome} onChange={(e) => setFormData({...formData, cognome: e.target.value})} className="px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              </div>
              <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              <div className="grid grid-cols-12 gap-3">
                <select value={formData.prefisso} onChange={(e) => setFormData({...formData, prefisso: e.target.value})} className="col-span-4 px-3 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white">
                  {prefissi.map(p => <option key={p.code} value={p.code} className="bg-purple-900">{p.flag} {p.code}</option>)}
                </select>
                <input type="tel" placeholder="Cellulare" value={formData.cellulare} onChange={(e) => setFormData({...formData, cellulare: e.target.value})} className="col-span-8 px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white placeholder-white/50" />
              </div>
              <label className="flex items-start gap-3 bg-white/10 rounded-xl p-4 cursor-pointer">
                <input type="checkbox" checked={formData.accettoPromo} onChange={(e) => setFormData({...formData, accettoPromo: e.target.checked})} className="mt-1 w-5 h-5" />
                <span className="text-sm">Autorizzo ad essere contattato/a per offerte promozionali sugli Angeli</span>
              </label>
              <input type="date" value={formData.dataNascita} onChange={(e) => setFormData({...formData, dataNascita: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-pink-400 focus:outline-none text-white" />
              <button onClick={handleCalculate} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all">✨ Calcola il Mio Angelo ✨</button>
            </div>
          </div>
        )}

        {angelResult && (
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-4 border-yellow-400/50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Star className="w-96 h-96" />
              </div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-8xl font-bold text-yellow-300 mb-2 animate-pulse">{angelResult.nome}</div>
                  <div className="text-3xl font-semibold text-pink-200 mb-1">N. {angelResult.num}</div>
                  <div className="inline-block bg-purple-500/50 px-6 py-2 rounded-full text-xl font-bold mb-2">CORO: {angelResult.coro}</div>
                  <div className="text-2xl text-yellow-200 font-semibold">ESSENZA: {angelResult.essenza}</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 mb-6 text-center">
                  <p className="text-2xl font-bold">Angelo Custode di: {formData.nome} {formData.cognome}</p>
                  <p className="text-lg text-purple-200 mt-2">Data di Nascita: {new Date(formData.dataNascita).toLocaleDateString('it-IT')}</p>
                </div>

                {selectedPlan === 'free' && (
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-8 mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">✨ Versione Gratuita ✨</h3>
                    <p className="text-lg leading-relaxed text-center">Questo e il tuo Angelo Custode! Per scoprire la preghiera completa e i rituali personalizzati, scegli uno dei piani premium.</p>
                  </div>
                )}

                {(selectedPlan === 'light' || selectedPlan === 'full' || selectedPlan === 'platinum') && (
                  <div className="space-y-6">
                    <div className="bg-white/20 rounded-2xl p-6">
                      <h3 className="text-2xl font-bold mb-4">🙏 Preghiera Angelica</h3>
                      <p className="text-xl italic leading-relaxed">"{angelResult.preghiera}"</p>
                      <p className="mt-4 text-lg">Recita questa preghiera ogni mattina per entrare in sintonia con il tuo Angelo Custode.</p>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-6">
                      <h3 className="text-2xl font-bold mb-4">💎 Qualita Angeliche</h3>
                      <ul className="space-y-2 text-lg">
                        <li>✨ Protezione spirituale costante</li>
                        <li>✨ Guida nelle decisioni importanti</li>
                        <li>✨ Supporto nei momenti difficili</li>
                        <li>✨ Sviluppo essenza: {angelResult.essenza}</li>
                      </ul>
                    </div>
                  </div>
                )}

                {(selectedPlan === 'full' || selectedPlan === 'platinum') && (
                  <div className="mt-6 space-y-6">
                    <h3 className="text-3xl font-bold text-center mb-6">🕯️ Rituali Personalizzati</h3>
                    {generateRituals().map((ritual, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 rounded-2xl p-6">
                        <h4 className="text-2xl font-bold mb-3">{idx + 1}. {ritual.title}</h4>
                        <p className="text-lg leading-relaxed">{ritual.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedPlan === 'platinum' && (
                  <div className="mt-6 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-2xl p-8 border-2 border-yellow-400">
                    <h3 className="text-3xl font-bold text-center mb-4">👼 ATTIVAZIONE ANGELO CUSTODE</h3>
                    <p className="text-xl text-center leading-relaxed">Riceverai attivazione energetica del tuo Angelo {angelResult.nome} entro 3 giorni dal pagamento. Sarai contattato via email per concordare il momento piu propizio.</p>
                    <p className="text-lg text-center mt-4 text-yellow-200">⭐ Questa attivazione apre un canale diretto con il tuo Angelo Custode ⭐</p>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  <button onClick={handlePrint} className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Printer className="w-5 h-5" />Stampa Report
                  </button>
                  <button onClick={() => setAngelResult(null)} className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded-xl font-bold">Nuova Ricerca</button>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">🌟 Scopri i Nostri Servizi Angelici! 🌟</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {plans.map((plan) => (
                  <div key={plan.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 transition-all hover:scale-105 ${selectedPlan === plan.id ? 'border-yellow-400 shadow-2xl' : 'border-white/20 hover:border-pink-400'}`}>
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-2">{plan.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-pink-300">{plan.price === 0 ? 'GRATIS' : `€${plan.price}`}</div>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-400">✓</span><span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.id === 'free' ? (
                      <button onClick={() => setSelectedPlan('free')} disabled={selectedPlan === 'free'} className="w-full bg-gray-600 py-3 rounded-xl font-bold">{selectedPlan === 'free' ? 'Attivo' : 'Seleziona'}</button>
                    ) : (
                      <button onClick={() => handleCheckout(plan)} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                        <CreditCard className="w-5 h-5" />Acquista
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-blue-500/20 border-2 border-blue-400 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">💡 Come Funziona</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div><div className="text-4xl mb-2">1️⃣</div><p className="font-semibold">Scegli il tuo piano</p></div>
                  <div><div className="text-4xl mb-2">2️⃣</div><p className="font-semibold">Pagamento sicuro PayPal</p></div>
                  <div><div className="text-4xl mb-2">3️⃣</div><p className="font-semibold">Ricevi report via email</p></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AngelCalculator;
