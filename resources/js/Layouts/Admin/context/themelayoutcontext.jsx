import React, { createContext, useState, useEffect, useContext } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [layoutConfig, setLayoutConfig] = useState({ theme: 'light' });

  useEffect(() => {
    // Leer el tema desde localStorage al cargar la aplicación
    const savedTheme = localStorage.getItem('theme');
    const colorScheme = localStorage.getItem('color-scheme');

    if (savedTheme && colorScheme) {
      setLayoutConfig(prevConfig => ({ ...prevConfig, theme: savedTheme, colorScheme }));
    }
  }, []);

  useEffect(() => {
    // Aplicar el tema al cuerpo del documento y actualizar el enlace al CSS
    document.body.className = layoutConfig.theme;
    const themeLink = document.getElementById('theme-css');
    if (themeLink) {
      themeLink.href = `/css/theme-${layoutConfig.theme}.css`;
    }
  }, [layoutConfig.theme]);

  return (
    <LayoutContext.Provider value={{ layoutConfig, setLayoutConfig }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);