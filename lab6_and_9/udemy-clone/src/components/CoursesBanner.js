import React from "react";
import { FaStar } from "react-icons/fa";
import { courses } from "./dummyData"; 
import first from '../assets/first.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import fourth from '../assets/fourth.jpg';

export default function SkillsSection() {
  return (
    <div style={{ padding: "60px 120px" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
        Skills to transform your career and life
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "40px", color: "#555" }}>
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "300px",
              padding: "16px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              cursor: "pointer",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            {course.image && (
              <img
                src={course.image}
                alt={course.title}
                style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "6px", marginBottom: "12px" }}
              />
            )}

            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
              {course.title}
            </h3>

              <div style={{ fontWeight: 300, marginBottom: "8px", fontSize: "14px" }}>
               {course.instructor} 
            </div>


            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px", gap: "6px" }}>
             | {course.badge}| <FaStar color="#f5c518" /> <span>{course.rating}</span> ({course.reviews.toLocaleString()} reviews)
            </div>

          
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: "16px" }}>
              <span>E£{course.currentPrice}</span>
              <span style={{ textDecoration: "line-through", color: "#aaa" }}>E£{course.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
