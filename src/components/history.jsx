import { useNavigate } from 'react-router-dom';

function History() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Medical History</h1>
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
        <h3>Medical Records</h3>
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '5px', 
          padding: '15px',
          marginBottom: '15px',
          backgroundColor: 'white'
        }}>
          <h4>Visit 1 - General Checkup</h4>
          <p><strong>Date:</strong> 2024-01-15</p>
          <p><strong>Doctor:</strong> Dr. Smith</p>
          <p><strong>Diagnosis:</strong> Normal health checkup</p>
          <p><strong>Prescription:</strong> Multivitamins</p>
        </div>

        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '5px', 
          padding: '15px',
          marginBottom: '15px',
          backgroundColor: 'white'
        }}>
          <h4>Visit 2 - Blood Test</h4>
          <p><strong>Date:</strong> 2024-02-10</p>
          <p><strong>Doctor:</strong> Dr. Johnson</p>
          <p><strong>Diagnosis:</strong> Routine blood work</p>
          <p><strong>Results:</strong> All parameters within normal range</p>
        </div>

        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '5px', 
          padding: '15px',
          backgroundColor: 'white'
        }}>
          <h4>Visit 3 - Follow-up</h4>
          <p><strong>Date:</strong> 2024-03-05</p>
          <p><strong>Doctor:</strong> Dr. Smith</p>
          <p><strong>Diagnosis:</strong> Follow-up consultation</p>
          <p><strong>Notes:</strong> Patient is in good health</p>
        </div>
      </div>
    </div>
  );
}

export default History;
