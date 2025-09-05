import { useContext } from 'react';
import { MedicalContext } from '../context/MedicalContext.js';

export const useMedicalContext = () => {
  const context = useContext(MedicalContext);
  if (!context) {
    throw new Error('useMedicalContext must be used within a MedicalProvider');
  }
  return context;
};
