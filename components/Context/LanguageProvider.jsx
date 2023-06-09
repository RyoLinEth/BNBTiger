import React, { createContext, useState } from 'react';

// 创建语言上下文
const LanguageContext = createContext();

// 创建提供语言状态的语言上下文提供器
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
