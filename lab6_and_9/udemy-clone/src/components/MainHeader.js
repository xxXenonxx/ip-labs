import { FaGlobe, FaShoppingCart } from "react-icons/fa";


export default function MainHeader() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 20px",
        gap: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: 700 }}>Udemy</div>

      <button style={btnStyle1}>Explore</button>

      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search for anything"
          style={{
            width: "90%",
            padding: "10px 15px",
            borderRadius: 30,
            border: "1px solid #ccc",
          }}
        />
      </div>

      <button style={btnStyle1}>Plans & Pricing</button>
      <button style={btnStyle1}>Udemy Business</button>
      <button style={btnStyle1}>Teach on Udemy</button>
      <FaShoppingCart size={20} />
      <button style={btnStyle2}>Login</button>
      <button style={{ ...btnStyle2, background: "#6d28d2", color: "white" }}>
        Sign up
      </button>
      <button style={btnStyle2}>< FaGlobe/>  </button>
    </header>
  );
}

const btnStyle1={
  background: "transparent",
  border: "none",
  padding: "8px 12px",
  fontWeight: 500,
  cursor: "pointer",

};

const btnStyle2 = {
  background: "transparent",
  border: "1px solid #6d28d2",
  padding: "8px 12px",
  borderRadius: 4,
  fontWeight: 800,
  cursor: "pointer",
  color: "#6d28d2"
};
