
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [licenseId, setLicenseId] = useState('');
  const navigate = useNavigate();

  const handleViewHistory = () => {
    setShowPopup(true);
  };

  const handleAccess = () => {
    const correctLicenseId = "krushn.dayshmookh@newtonschool.co";
    if (licenseId.trim() === correctLicenseId) {
      navigate('/history');
    } else if (licenseId.trim() === '') {
      alert('Please enter a license ID');
    } else {
      alert('Invalid license ID. Please enter the correct license ID.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setLicenseId('');
  };

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          maxWidth: "300px",
          margin: "20px auto"
        }}
      >
        <img 
          src="/avatar.png" 
          style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
          alt="avatar"
        />
        <h1>Name: Rames</h1>
        <h2>Blood Group: B+</h2>
        <h2>Mob no: 1234567890</h2>
        <h2>Address: house no-20 lane 2, Kerela</h2>
        <button onClick={handleViewHistory}>View Medical History</button>
        <button>Update Record</button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              minWidth: '300px',
              textAlign: 'center'
            }}
          >
            <h3>Access Medical History</h3>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
              Enter your license ID:
            </label>
            <input
              type="text"
              value={licenseId}
              onChange={(e) => setLicenseId(e.target.value)}
              placeholder="Enter license ID"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={handleAccess}
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
                Access
              </button>
              <button
                onClick={handleClosePopup}
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
