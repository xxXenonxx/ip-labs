import React from "react";
import volkswagen_logo from "../assets/volkswagen_logo.png";
import samsung_logo from "../assets/samsung_logo.png";
import cisco_logo from "../assets/cisco_logo.png";
import vimeo_logo from "../assets/vimeo_logo.png";
import pg_logo from "../assets/pg_logo.png";
import hp_logo from "../assets/hp_logo.png";
import citi_logo from "../assets/citi_logo.png";
import ericsson_logo from "../assets/ericsson_logo.png";

const logos = [volkswagen_logo, samsung_logo, cisco_logo, vimeo_logo, pg_logo, hp_logo, citi_logo, ericsson_logo];

export default function TrustedCompanies() {
  return (
    <div style={{ textAlign: "center", padding: "60px 0", backgroundColor: "#f8f8f8" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "32px" }}>
        Trusted by over 17,000 companies and millions of learners around the world
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index}`}
            style={{ maxHeight: "50px", objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
  );
}
