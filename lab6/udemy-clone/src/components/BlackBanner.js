import React from "react";
import { FaStar } from "react-icons/fa"; 
import vr from "../assets/vr.jpg"; 

export default function BlacknBanner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        padding: "40px 80px",
        background: "oklch(25.65% 0.0265 278.04deg)", 
        color: "white",
        borderRadius: "12px",
        width: "75%",
        margin: "0 auto"
      }}
    >
      <div style={{ flex: "1 1 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Reimagine your career in the AI era
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "24px", lineHeight: 1.4, color: "oklch(86.72% 0.0192 282.72deg)" }}>
          Future‑proof your skills with Personal Plan. Get access to a variety of
          fresh content from real-world experts.
        </p>

        <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px" }}>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "8px" }}>
            <FaStar /> Learn AI and more
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "8px" }}>
            <FaStar /> Prep for a certification
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "8px" }}>
            <FaStar /> Practice with AI coaching
          </li>
          <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "8px" }}>
            <FaStar /> Advance your career
          </li>
        </ul>
      <button style={{
          padding: "12px 24px",
          backgroundColor: "#ffff",
          color: "oklch(25.65% 0.0265 278.04deg)",
          border: "none",
          borderRadius: "6px",
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: "12px"
        }}>
          Learn More
        </button>
        <div style={{ fontSize: "20px", fontWeight: 400, color:"oklch(86.72% 0.0192 282.72deg)"}}>
          Starting at E£204.00 /month
        </div>
      </div>
         <div style={{ flex: "0 0 auto", width: "600px", height: "400px" }}>
        <img
          src={vr}
          alt="Personal Plan"
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        />
      </div>


    </div>
  );
}
