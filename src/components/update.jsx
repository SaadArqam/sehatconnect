import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMedicalContext } from '../hooks/useMedicalContext.js';

function Update() {
  const navigate = useNavigate();
  const { addMedicalRecord, patientDetails } = useMedicalContext();
  const [formData, setFormData] = useState({
    visitDate: '',
    doctorName: '',
    diagnosis: '',
    prescription: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.visitDate || !formData.doctorName || !formData.diagnosis) {
      alert('Please fill in all required fields (Date, Doctor Name, Diagnosis)');
      return;
    }

    // Add the new medical record to the context
    addMedicalRecord(formData);
    
    // Show success message and redirect
    alert('Medical record updated successfully!');
    navigate('/history');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div className="flex-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{color:"white"}}>Update Medical Record</h1>
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
        backgroundColor: '#f9f9f9',
        marginBottom: '20px'
      }}>
        <h2>Patient: {patientDetails.name}</h2>
        <p><strong>License ID:</strong> krushn.dayshmookh@newtonschool.co</p>
        <p><strong>Blood Group:</strong> {patientDetails.bloodGroup}</p>
        <p><strong>Mobile:</strong> {patientDetails.mobileNumber}</p>
        <p><strong>Address:</strong> {patientDetails.address}</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit} style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: 'white'
      }}>
        <h3>Add New Medical Record</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Visit Date *:
          </label>
          <input
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              backgroundColor: 'white',
              color: '#374151',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#4f46e5';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Doctor Name *:
          </label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleInputChange}
            placeholder="Enter doctor's name"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Diagnosis *:
          </label>
          <textarea
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            placeholder="Enter diagnosis"
            required
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Prescription:
          </label>
          <textarea
            name="prescription"
            value={formData.prescription}
            onChange={handleInputChange}
            placeholder="Enter prescription details"
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Additional Notes:
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Enter any additional notes"
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <div className="button-group flex-container" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Submit Update
          </button>
          <button
            type="button"
            onClick={handleGoBack}
            style={{
              padding: '12px 30px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
