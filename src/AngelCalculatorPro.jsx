import React, { useState, useEffect } from 'react';

const AngelCalculatorPro = () => {
  const [formData, setFormData] = useState({ dataNascita: '' });
  const [angelFound, setAngelFound] = useState(null);
  const [unifiedDB, setUnifiedDB] = useState(null);
  const [language, setLanguage] = useState('it'); // Lingua selezionabile: it, en, fr

  useEffect(() => {
    import('./database/angelsUnifiedDatabase_v2.json')
      .then(module => setUnifiedDB(module.default))
      .catch(err => console.error('Errore caricamento database', err));
  }, []);

  function findAngelByDate(month, day) {
    if (!unifiedDB) return null;
    const db = unifiedDB.database[language];
    for (const angel of db) {
      const [startMonth, startDay] = angel.dateStart.split('-').map(Number);
      const [endMonth, endDay] = angel.dateEnd.split('-').map(Number);

      if (
        (month > startMonth || (month === startMonth && day >= startDay)) &&
        (month < endMonth || (month === endMonth && day <= endDay))
      ) {
        return angel;
      }
    }
    return null;
  }

  const handleDateChange = (event) => {
    const dateValue = event.target.value; // formato YYYY-MM-DD
    setFormData({ dataNascita: dateValue });
    if (dateValue) {
      const [year, monthStr, dayStr] = dateValue.split('-');
      const month = Number(monthStr);
      const day = Number(dayStr);
      const angel = findAngelByDate(month, day);
      setAngelFound(angel);
    } else {
      setAngelFound(null);
    }
  };

  return (
    <div>
      <h1>Calcolatore Angelo Custode</h1>
      <input
        type="date"
        value={formData.dataNascita}
        onChange={handleDateChange}
      />
      {angelFound ? (
        <div>
          <h2>{angelFound.nome}</h2>
          <p>Periodo: {angelFound.dateStart} - {angelFound.dateEnd}</p>
          <p>Descrizione: {angelFound.description}</p>
        </div>
      ) : (
        <p>Inserisci la tua data di nascita per scoprire il tuo angelo custode.</p>
      )}
    </div>
  );
};

export default AngelCalculatorPro;
