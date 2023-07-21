import React, { useState } from 'react';
import './App.css';
import MainText from './components/MainText';

export const languageContext = React.createContext<'es' | 'en'>('es');
function App() {
    const [language, setLanguage] = useState<'es' | 'en'>('es');

    const handleLanguage = () => {
        if (language === 'es') {
            setLanguage('en');
        }
        if (language === 'en') {
            setLanguage('es');
        }
    };
    return (
        <>
            <languageContext.Provider value={language}>
                <MainText />
                <button onClick={handleLanguage}>
                    {language === 'es' ? 'Cambiar idioma' : 'Change language'}
                </button>
            </languageContext.Provider>
        </>
    );
}

export default App;
