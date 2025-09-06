
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMedicalContext } from './hooks/useMedicalContext.js';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(''); // 'history' or 'update'
  const [licenseId, setLicenseId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    bloodGroup: '',
    mobileNumber: '',
    address: ''
  });
  const navigate = useNavigate();
  const { patientDetails, updatePatientDetails } = useMedicalContext();

  const handleViewHistory = () => {
    setPopupType('history');
    setShowPopup(true);
  };

  const handleUpdateRecord = () => {
    setPopupType('update');
    setShowPopup(true);
  };

  const handleAccess = () => {
    const correctLicenseId = "krushn.dayshmookh@newtonschool.co";
    if (licenseId.trim() === correctLicenseId) {
      if (popupType === 'history') {
        navigate('/history');
      } else if (popupType === 'update') {
        navigate('/update');
      }
    } else if (licenseId.trim() === '') {
      alert('Please enter a license ID');
    } else {
      alert('Invalid license ID. Please enter the correct license ID.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setLicenseId('');
    setPopupType('');
  };

  const handleEditClick = () => {
    setEditForm({
      name: patientDetails.name,
      bloodGroup: patientDetails.bloodGroup,
      mobileNumber: patientDetails.mobileNumber,
      address: patientDetails.address
    });
    setIsEditing(true);
  };

  const handleEditSave = () => {
    updatePatientDetails(editForm);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <div
        className="card"
        style={{
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
          maxWidth: "400px",
          margin: "40px auto",
          transition: "all 0.3s ease",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <div
          style={{
            background: "linear-gradient(145deg, #6366f1, #4f46e5)",
            padding: "8px",
            borderRadius: "50%",
            marginBottom: "24px",
            boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3)"
          }}
        >
          <img 
            src="/avatar.png" 
            style={{ 
              width: "120px", 
              height: "120px", 
              borderRadius: "50%",
              border: "4px solid white"
            }} 
            alt="avatar"
          />
        </div>
        {isEditing ? (
          <input
            name="name"
            value={editForm.name}
            onChange={handleEditInputChange}
            style={{
              color: "#1f2937", 
              fontSize: "2.5rem", 
              marginBottom: "24px",
              fontWeight: "700",
              letterSpacing: "-0.025em",
              lineHeight: "1.2",
              border: "2px solid #4f46e5",
              borderRadius: "8px",
              padding: "8px 16px",
              textAlign: "center",
              background: "white"
            }}
          />
        ) : (
          <h1 style={{ 
            color: "#1f2937", 
            fontSize: "2.5rem", 
            marginBottom: "24px",
            fontWeight: "700",
            letterSpacing: "-0.025em",
            lineHeight: "1.2"
          }}>{patientDetails.name}</h1>
        )}
        <div style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "16px",
          width: "100%",
          marginBottom: "24px"
        }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "12px",
            color: "#4b5563"
          }}>
            <span style={{ fontWeight: "600", marginRight: "8px" }}>Blood Group:</span>
            {isEditing ? (
              <input
                name="bloodGroup"
                value={editForm.bloodGroup}
                onChange={handleEditInputChange}
                style={{
                  border: "2px solid #4f46e5",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  background: "white"
                }}
              />
            ) : (
              <span>{patientDetails.bloodGroup}</span>
            )}
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "12px",
            color: "#4b5563"
          }}>
            <span style={{ fontWeight: "600", marginRight: "8px" }}>Mobile:</span>
            {isEditing ? (
              <input
                name="mobileNumber"
                value={editForm.mobileNumber}
                onChange={handleEditInputChange}
                style={{
                  border: "2px solid #4f46e5",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  background: "white"
                }}
              />
            ) : (
              <span>{patientDetails.mobileNumber}</span>
            )}
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center",
            color: "#4b5563"
          }}>
            <span style={{ fontWeight: "600", marginRight: "8px" }}>Address:</span>
            {isEditing ? (
              <input
                name="address"
                value={editForm.address}
                onChange={handleEditInputChange}
                style={{
                  border: "2px solid #4f46e5",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  background: "white",
                  flex: 1
                }}
              />
            ) : (
              <span>{patientDetails.address}</span>
            )}
          </div>
        </div>
        <div className="button-group flex-container" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {isEditing ? (
            <>
              <button 
                onClick={handleEditSave}
                style={{
                  backgroundColor: "#10b981",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.2)"
                }}
              >
                Save Changes
              </button>
              <button 
                onClick={handleEditCancel}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.2)"
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleViewHistory}
                style={{
                  backgroundColor: "#4f46e5",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.2)"
                }}
              >
                View Medical History
              </button>
              <button 
                onClick={handleUpdateRecord}
                style={{
                  backgroundColor: "#fff",
                  color: "#4f46e5",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "2px solid #4f46e5",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease"
                }}
              >
                Update Record
              </button>
              <button 
                onClick={handleEditClick}
                style={{
                  backgroundColor: "#f59e0b",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(245, 158, 11, 0.2)"
                }}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div
          className="popup-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            className="popup-content card"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '40px',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              minWidth: '400px',
              maxWidth: '90vw',
              width: '90vw',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease-out',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              color: '#1f2937',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              {popupType === 'history' ? 'Access Medical History' : 'Update Medical Record'}
            </h3>
            <label style={{ 
              display: 'block', 
              marginBottom: '12px', 
              fontWeight: '500',
              color: '#4b5563',
              fontSize: '1.1rem'
            }}>
              Enter your license ID:
            </label>
            <input
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '2px solid #e5e7eb',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                outline: 'none',
                marginBottom: '24px',
              }}
              type="text"
              value={licenseId}
              onChange={(e) => setLicenseId(e.target.value)}
              placeholder="Enter license ID"
            />
            <div className="button-group flex-container" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button
                onClick={handleAccess}
                style={{
                  backgroundColor: "#4f46e5",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.2)"
                }}
              >
                Access
              </button>
              <button
                onClick={handleClosePopup}
                style={{
                  backgroundColor: "#fff",
                  color: "#4f46e5",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "2px solid #4f46e5",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
