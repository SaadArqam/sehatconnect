import { useState, useEffect } from 'react';
import { MedicalContext } from './MedicalContext.js';

const MedicalProvider = ({ children }) => {
  // Helper functions for localStorage
  const loadFromStorage = (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return defaultValue;
    }
  };

  const saveToStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  // Initial patient details with localStorage persistence
  const [patientDetails, setPatientDetails] = useState(() => 
    loadFromStorage('patientDetails', {
      name: 'batman',
      bloodGroup: 'B+',
      mobileNumber: '1234567890',
      address: 'Gotham City, Kerela',
      authenticatedLicenseId: ''
    })
  );

  // Initial medical records with localStorage persistence
  const [medicalRecords, setMedicalRecords] = useState(() => 
    loadFromStorage('medicalRecords', [
      {
        id: 1,
        visitDate: '2024-01-15',
        doctorName: 'Dr. Smith',
        diagnosis: 'Normal health checkup',
        prescription: 'Multivitamins',
        notes: 'Patient is in good health'
      },
      {
        id: 2,
        visitDate: '2024-02-10',
        doctorName: 'Dr. Johnson',
        diagnosis: 'Routine blood work',
        prescription: 'None',
        notes: 'All parameters within normal range'
      },
      {
        id: 3,
        visitDate: '2024-03-05',
        doctorName: 'Dr. Smith',
        diagnosis: 'Follow-up consultation',
        prescription: 'None',
        notes: 'Patient is in good health'
      }
    ])
  );

  // Save to localStorage whenever patientDetails changes
  useEffect(() => {
    saveToStorage('patientDetails', patientDetails);
  }, [patientDetails]);

  // Save to localStorage whenever medicalRecords changes
  useEffect(() => {
    saveToStorage('medicalRecords', medicalRecords);
  }, [medicalRecords]);

  const addMedicalRecord = (newRecord) => {
    const recordWithId = {
      ...newRecord,
      id: Date.now(),
      visitDate: newRecord.visitDate,
      doctorName: newRecord.doctorName,
      diagnosis: newRecord.diagnosis,
      prescription: newRecord.prescription || 'None',
      notes: newRecord.notes || 'No additional notes'
    };
    
    setMedicalRecords(prev => [recordWithId, ...prev]);
  };

  const updatePatientDetails = (updatedDetails) => {
    setPatientDetails(prev => ({
      ...prev,
      ...updatedDetails
    }));
  };

  const value = {
    patientDetails,
    medicalRecords,
    addMedicalRecord,
    updatePatientDetails
  };

  return (
    <MedicalContext.Provider value={value}>
      {children}
    </MedicalContext.Provider>
  );
};

export { MedicalProvider };
