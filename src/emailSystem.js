// ============================================
// SISTEMA EMAIL - ANGEL CALCULATOR
// ============================================

// --------------------------------------------
// 1. CONFIGURAZIONE EMAILJS
// --------------------------------------------
// Vai su: https://www.emailjs.com/
// Crea account gratuito
// Ottieni: SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY

const EMAIL_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // Inserisci il tuo Service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Inserisci il tuo Template ID
  publicKey: 'YOUR_PUBLIC_KEY'       // Inserisci la tua Public Key
};

// --------------------------------------------
// 2. INSTALLA EMAILJS NEL TUO PROGETTO
// --------------------------------------------
// npm install @emailjs/browser

// --------------------------------------------
// 3. IMPORTA EMAILJS NEL COMPONENTE
// --------------------------------------------
import emailjs from '@emailjs/browser';
import { useState } from 'react';

// --------------------------------------------
// 4. FUNZIONE PER INVIARE EMAIL
// --------------------------------------------

export const sendAngelEmail = async (userData, angelData, language = 'it') => {
  
  const emailTemplates = {
    it: {
      subject: `✨ Il Tuo Angelo Custode: ${angelData.nome}`,
      greeting: `Ciao ${userData.nome},`,
      intro: `Ecco i dettagli del tuo Angelo Custode:`,
      angelName: `Angelo: ${angelData.nome}`,
      angelNumber: `Numero: ${angelData.num}`,
      choir: `Coro: ${angelData.coro}`,
      essence: `Essenza: ${angelData.essenza}`,
      birthDate: `Data di Nascita: ${userData.dataNascita}`,
      footer: `Per scoprire di più visita: https://iltuoangelo.it/consulenze/`,
      signature: `Con amore,\nThe Angels Calculator Team`
    },
    en: {
      subject: `✨ Your Guardian Angel: ${angelData.nome}`,
      greeting: `Hello ${userData.nome},`,
      intro: `Here are your Guardian Angel details:`,
      angelName: `Angel: ${angelData.nome}`,
      angelNumber: `Number: ${angelData.num}`,
      choir: `Choir: ${angelData.coro}`,
      essence: `Essence: ${angelData.essenza}`,
      birthDate: `Birth Date: ${userData.dataNascita}`,
      footer: `Discover more at: https://iltuoangelo.it/consulenze/`,
      signature: `With love,\nThe Angels Calculator Team`
    },
    fr: {
      subject: `✨ Votre Ange Gardien: ${angelData.nome}`,
      greeting: `Bonjour ${userData.nome},`,
      intro: `Voici les détails de votre Ange Gardien:`,
      angelName: `Ange: ${angelData.nome}`,
      angelNumber: `Numéro: ${angelData.num}`,
      choir: `Choeur: ${angelData.coro}`,
      essence: `Essence: ${angelData.essenza}`,
      birthDate: `Date de Naissance: ${userData.dataNascita}`,
      footer: `Découvrez plus sur: https://iltuoangelo.it/consulenze/`,
      signature: `Avec amour,\nThe Angels Calculator Team`
    },
    es: {
      subject: `✨ Tu Ángel Guardián: ${angelData.nome}`,
      greeting: `Hola ${userData.nome},`,
      intro: `Aquí están los detalles de tu Ángel Guardián:`,
      angelName: `Ángel: ${angelData.nome}`,
      angelNumber: `Número: ${angelData.num}`,
      choir: `Coro: ${angelData.coro}`,
      essence: `Esencia: ${angelData.essenza}`,
      birthDate: `Fecha de Nacimiento: ${userData.dataNascita}`,
      footer: `Descubre más en: https://iltuoangelo.it/consulenze/`,
      signature: `Con amor,\nThe Angels Calculator Team`
    },
    de: {
      subject: `✨ Dein Schutzengel: ${angelData.nome}`,
      greeting: `Hallo ${userData.nome},`,
      intro: `Hier sind die Details deines Schutzengels:`,
      angelName: `Engel: ${angelData.nome}`,
      angelNumber: `Nummer: ${angelData.num}`,
      choir: `Chor: ${angelData.coro}`,
      essence: `Essenz: ${angelData.essenza}`,
      birthDate: `Geburtsdatum: ${userData.dataNascita}`,
      footer: `Mehr erfahren auf: https://iltuoangelo.it/consulenze/`,
      signature: `Mit Liebe,\nThe Angels Calculator Team`
    }
  };

  const template = emailTemplates[language];

  const emailParams = {
    to_email: userData.email,
    to_name: `${userData.nome} ${userData.cognome}`,
    subject: template.subject,
    message: `
      ${template.greeting}
      
      ${template.intro}
      
      ${template.angelName}
      ${template.angelNumber}
      ${template.choir}
      ${template.essence}
      ${template.birthDate}
      
      ${template.footer}
      
      ${template.signature}
    `,
    angel_name: angelData.nome,
    angel_number: angelData.num,
    angel_choir: angelData.coro,
    angel_essence: angelData.essenza,
    user_name: userData.nome,
    user_surname: userData.cognome,
    user_email: userData.email,
    user_birthdate: userData.dataNascita
  };

  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      emailParams,
      EMAIL_CONFIG.publicKey
    );
    
    console.log('✅ Email inviata con successo!', response.status, response.text);
    return { success: true, message: 'Email inviata!' };
    
  } catch (error) {
    console.error('❌ Errore invio email:', error);
    return { success: false, message: 'Errore invio email' };
  }
};

// --------------------------------------------
// 5. EMAIL AMMINISTRATORE (NOTIFICA NUOVO UTENTE)
// --------------------------------------------

export const sendAdminNotification = async (userData, angelData) => {
  const adminParams = {
    to_email: 'gaiamadreterra@gmail.com', // Email amministratore
    subject: '🆕 Nuovo Utente - Angel Calculator',
    message: `
      Nuovo utente registrato:
      
      Nome: ${userData.nome} ${userData.cognome}
      Email: ${userData.email}
      Telefono: ${userData.prefisso} ${userData.cellulare}
      Data Nascita: ${userData.dataNascita}
      Angelo: ${angelData.nome} (N.${angelData.num})
      Promo: ${userData.accettoPromo ? 'SÌ' : 'NO'}
      
      Data: ${new Date().toLocaleString('it-IT')}
    `
  };

  try {
    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      'admin_notification_template',
      adminParams,
      EMAIL_CONFIG.publicKey
    );
    console.log('✅ Notifica admin inviata!');
  } catch (error) {
    console.error('❌ Errore notifica admin:', error);
  }
};

// --------------------------------------------
// 6. COMPONENTE REACT CON INVIO EMAIL
// --------------------------------------------

export const EmailButton = ({ userData, angelData, language }) => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSendEmail = async () => {
    setSending(true);
    
    const result = await sendAngelEmail(userData, angelData, language);
    await sendAdminNotification(userData, angelData);
    
    setSending(false);
    
    if (result.success) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <button
      onClick={handleSendEmail}
      disabled={sending || sent}
      className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
        sent 
          ? 'bg-green-600 cursor-not-allowed' 
          : sending 
            ? 'bg-gray-600 cursor-wait' 
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
      }`}
    >
      {sent ? (
        <>✅ Email Inviata!</>
      ) : sending ? (
        <>⏳ Invio...</>
      ) : (
        <>📧 Invia Email</>
      )}
    </button>
  );
};

export default { sendAngelEmail, sendAdminNotification, EmailButton };