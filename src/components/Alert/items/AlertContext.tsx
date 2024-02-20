'use client';

import { createContext, useContext } from 'react';
import { FlowbiteAlertTheme } from './AlertModal';


type AlertContext = {
  theme: FlowbiteAlertTheme;
  popup?: boolean;
  setHeaderId: (id: string | undefined) => void;
  onClose?: () => void;
};

export const AlertContext = createContext<AlertContext | undefined>(undefined);

export function useModalContext(): AlertContext {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlertContext should be used within the AlertContext provider!');
  }

  return context;
}
