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
      address: 'house no-20 lane 2, Kerela'
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

  const addMedicalRecord = (newRecord) => {
    const recordWithId = {
      ...newRecord,
      id: Date.now(), // Simple ID generation
      visitDate: newRecord.visitDate,
      doctorName: newRecord.doctorName,
      diagnosis: newRecord.diagnosis,
      prescription: newRecord.prescription || 'None',
      notes: newRecord.notes || 'No additional notes'
    };
    
    setMedicalRecords(prev => {
      const updatedRecords = [recordWithId, ...prev];
      saveToStorage('medicalRecords', updatedRecords);
      return updatedRecords;
    });
  };

  const updatePatientDetails = (updatedDetails) => {
    setPatientDetails(prev => {
      const updatedDetails_merged = {
        ...prev,
        ...updatedDetails
      };
      saveToStorage('patientDetails', updatedDetails_merged);
      return updatedDetails_merged;
    });
  };

  // Effect to handle initial data loading
  useEffect(() => {
    console.log('Medical data loaded from localStorage');
  }, []);

  // Utility function to clear all data (for testing purposes)
  const clearAllData = () => {
    localStorage.removeItem('patientDetails');
    localStorage.removeItem('medicalRecords');
    setPatientDetails({
      name: 'batman',
      bloodGroup: 'B+',
      mobileNumber: '1234567890',
      address: 'house no-20 lane 2, Kerela'
    });
    setMedicalRecords([
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
    ]);
  };

  const value = {
    patientDetails,
    medicalRecords,
    addMedicalRecord,
    updatePatientDetails,
    clearAllData
  };

  return (
    <MedicalContext.Provider value={value}>
      {children}
    </MedicalContext.Provider>
  );
};

export { MedicalProvider };
