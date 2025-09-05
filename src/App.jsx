
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(''); // 'history' or 'update'
  const [licenseId, setLicenseId] = useState('');
  const navigate = useNavigate();

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

  return (
    <>
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
          transition: "all 0.3s ease"
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
        <h1 style={{ 
          color: "#1f2937", 
          fontSize: "2.5rem", 
          marginBottom: "24px",
          fontWeight: "700",
          letterSpacing: "-0.025em",
          lineHeight: "1.2"
        }}>Rames</h1>
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
            <span>B+</span>
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "12px",
            color: "#4b5563"
          }}>
            <span style={{ fontWeight: "600", marginRight: "8px" }}>Mobile:</span>
            <span>1234567890</span>
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center",
            color: "#4b5563"
          }}>
            <span style={{ fontWeight: "600", marginRight: "8px" }}>Address:</span>
            <span>Gotham city,Kerela</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
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
              boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.2)",
              ":hover": {
                backgroundColor: "#4338ca",
                transform: "translateY(-2px)"
              }
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
              transition: "all 0.2s ease",
              ":hover": {
                backgroundColor: "#f3f4f6"
              }
            }}
          >
            Update Record
          </button>
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
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease-out'
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
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
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
    </>
  )
}

export default App
