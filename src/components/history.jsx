import { useNavigate } from 'react-router-dom';
import { useMedicalContext } from '../context/MedicalContext.jsx';

function History() {
  const navigate = useNavigate();
  const { medicalRecords } = useMedicalContext();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Medical History</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
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
        <h2>Patient: Ramesh</h2>
        <p><strong>License ID:</strong> [Entered License ID]</p>
        <p><strong>Blood Group:</strong> B+</p>
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Medical Records ({medicalRecords.length} records)</h3>
        {medicalRecords.length === 0 ? (
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            padding: '20px',
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#666'
          }}>
            <p>No medical records found.</p>
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
              <h4>Visit {index + 1} - {record.diagnosis}</h4>
              <p><strong>Date:</strong> {new Date(record.visitDate).toLocaleDateString()}</p>
              <p><strong>Doctor:</strong> {record.doctorName}</p>
              <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
              <p><strong>Prescription:</strong> {record.prescription}</p>
              {record.notes && <p><strong>Notes:</strong> {record.notes}</p>}
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
