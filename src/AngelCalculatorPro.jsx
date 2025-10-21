import React, { useState, useEffect } from 'react';

const AngelCalculatorPro = () => {
  const [formData, setFormData] = useState({ dataNascita: '' });
  const [angelFound, setAngelFound] = useState(null);
  const [unifiedDB, setUnifiedDB] = useState(null);
  const [language, setLanguage] = useState('it'); // Lingua selezionabile: it, en, fr

  useEffect(() => {
    // Caricamento file JSON unificato
    import('./angelsUnifiedDatabase_v2.json')
      .then(module => {
        setUnifiedDB(module.default);
      })
      .catch(err => console.error('Errore caricamento database:', err));
  }, []);

  const findAngelByDate = (month, day) => {
    if (!unifiedDB) return null;

    const db = unifiedDB.database[language];
    for (const angel of db) {
      const [startMonth, startDay] = angel.dateStart.split('-').map(Number);
      const [endMonth, endDay] = angel.dateEnd.split('-').map(Number);

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay) ||
        (month > startMonth && month < endMonth)
      ) {
        return angel;
      }
    }

    return null;
  };

  const handleDateChange = (event) => {
    const dateValue = event.target.value; // formato YYYY-MM-DD
    setFormData({ dataNascita: dateValue });

    if (dateValue) {
      const [year, month, day] = dateValue.split('-').map(Number);
      const angel = findAngelByDate(month, day);
      setAngelFound(angel);
    } else {
      setAngelFound(null);
    }
  };

  return (
    <div>
      <label htmlFor="dateInput">Inserisci la data di nascita:</label>
      <input
        id="dateInput"
        type="date"
        value={formData.dataNascita}
        onChange={handleDateChange}
      />
      {angelFound ? (
        <div>
          <h2>L'angelo associato</h2>
          <p>{angelFound.nome}</p>
          <p>Qualità: {angelFound.qualita || 'Non disponibile'}</p>
          <p>Essenza: {angelFound.essenza || 'Non disponibile'}</p>
        </div>
      ) : (
        <p>Inserisci una data per trovare l'angelo.</p>
      )}

      <div>
        <label htmlFor="languageSelect">Seleziona lingua:</label>
        <select
          id="languageSelect"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="it">Italiano</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
};

export default AngelCalculatorPro;
