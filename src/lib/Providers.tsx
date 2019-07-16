import * as React from 'react';
import { LanguageStateProvider } from './LanguageStateProvider';

export const Provider: React.SFC = ({ children }) => (
  <LanguageStateProvider>{children}</LanguageStateProvider>
);
