import { useNavigate } from 'react-router-dom';
import { useMedicalContext } from '../hooks/useMedicalContext.js';

function History() {
  const navigate = useNavigate();
  const { medicalRecords, patientDetails } = useMedicalContext();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div className="flex-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{color:"white"}}>Medical History</h1>
        <div className="button-group flex-container" style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => navigate('/update')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Update Record
          </button>
          <button 
            onClick={handleGoBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Back to Profile
          </button>
        </div>
      </div>

      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '10px', 
        padding: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2 style={{color: '#1f2937'}}>Patient: {patientDetails.name}</h2>
        <p style={{color: '#1f2937'}}><strong>License ID:</strong> {patientDetails.authenticatedLicenseId}</p>
        <p style={{color: '#1f2937'}}><strong>Blood Group:</strong> {patientDetails.bloodGroup}</p>
        <p style={{color: '#1f2937'}}><strong>Mobile:</strong> {patientDetails.mobileNumber}</p>
        <p style={{color: '#1f2937'}}><strong>Address:</strong> {patientDetails.address}</p>
        <p style={{color: '#1f2937'}}><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{color: 'white'}}>Medical Records ({medicalRecords.length} records)</h3>
        {medicalRecords.length === 0 ? (
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            padding: '20px',
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#1f2937'
          }}>
            <p style={{color: '#1f2937'}}>No medical records found.</p>
          </div>
        ) : (
          medicalRecords.map((record, index) => (
            <div key={record.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '5px', 
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: 'white'
            }}>
              <h4 style={{color: '#1f2937'}}>Visit {index + 1} - {record.diagnosis}</h4>
              <p style={{color: '#1f2937'}}><strong>Date:</strong> {new Date(record.visitDate).toLocaleDateString()}</p>
              <p style={{color: '#1f2937'}}><strong>Doctor:</strong> {record.doctorName}</p>
              <p style={{color: '#1f2937'}}><strong>Diagnosis:</strong> {record.diagnosis}</p>
              <p style={{color: '#1f2937'}}><strong>Prescription:</strong> {record.prescription}</p>
              {record.notes && <p style={{color: '#1f2937'}}><strong>Notes:</strong> {record.notes}</p>}
            </div>
          ))
        )}
      </div>

      {/* Update Record Button at Bottom */}
      <div style={{ 
        marginTop: '30px', 
        textAlign: 'center',
        padding: '20px',
        borderTop: '1px solid #ddd'
      }}>
        <button 
          onClick={() => navigate('/update')}
          style={{
            padding: '15px 30px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          + Add New Medical Record
        </button>
      </div>
    </div>
  );
}

export default History;
