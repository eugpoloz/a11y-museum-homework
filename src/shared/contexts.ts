import React from 'react';

type LangContextProps = [string, React.Dispatch<React.SetStateAction<string>>];

export const LangContext = React.createContext<LangContextProps>(['', () => {}]);