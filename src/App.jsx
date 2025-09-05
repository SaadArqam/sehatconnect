
function App() {

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
  <h1>Name: Ramesh</h1>
  <h2>Blood Group: B+</h2>
  <h2>Mob no: 1234567890</h2>
  <h2>Address: house no-20 lane 2, Kerela</h2>
<button>View Medical History</button>
<button>Update Record</button>
</div>

    </>
  )
}

export default App
