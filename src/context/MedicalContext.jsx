import { useState } from 'react';
import { MedicalContext } from './MedicalContext.js';

const MedicalProvider = ({ children }) => {
  // Initial patient details
  const [patientDetails, setPatientDetails] = useState({
    name: 'batman',
    bloodGroup: 'B+',
    mobileNumber: '1234567890',
    address: 'Gotham City, Kerela'
  });

  // Initial medical records
  const [medicalRecords, setMedicalRecords] = useState([
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
    
    setMedicalRecords(prev => [recordWithId, ...prev]); // Add new record at the beginning
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
