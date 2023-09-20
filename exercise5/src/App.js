import React, { createContext, useContext, useState } from 'react';

// Étape 1 : Créez un contexte
const AppContext = createContext();

// Étape 2 : Créez un fournisseur de contexte
function AppProvider({ children }) {
  // Définissez l'état global ici
  const [theme, setTheme] = useState('light');

  // Créez des fonctions pour mettre à jour l'état global
  const toggleTheme = () => {
    // Inversez le thème entre 'light' et 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Passez l'état global et les fonctions aux composants enfants
  const contextValue = {
    theme,
    toggleTheme,
  };

  // Renvoyez le fournisseur de contexte avec les composants enfants
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

// Étape 3 : Créez un hook pour accéder au contexte
function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext doit être utilisé dans un composant AppProvider');
  }
  return context;
}

// Étape 4 : Utilisez le contexte dans vos composants
function ThemeSwitcher() {
  // Utilisez le hook pour accéder au contexte
  const { theme, toggleTheme } = useAppContext();

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer de thème</button>
    </div>
  );
}

function App() {
  return (
    // Enveloppez votre application avec le fournisseur de contexte
    <AppProvider>
      <div>
        <h1>Application React avec Contexte</h1>
        <ThemeSwitcher />
      </div>
    </AppProvider>
  );
}

export default App;


//Using local storage to store the context below

// Dans votre composant AppProvider

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AppContext = createContext();

// function AppProvider({ children }) {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme); // Enregistrez le thème dans le localStorage
//   };

//   useEffect(() => {
//     // Lorsque le composant est monté, vérifiez s'il existe un thème dans le localStorage
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//       setTheme(storedTheme);
//     }
//   }, []);

//   const contextValue = {
//     theme,
//     toggleTheme,
//   };

//   return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
// }

// ...

