import generativeai from '../assets/generativeai.jpg'
import certifications from '../assets/certifications.jpg'
import datascience from '../assets/datascience.jpg'
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

export default function SkillsBanner() {
    return (
        <div style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            padding: "80px 120px"
        }}>
            <div style={{
                fontSize: "16px",
                color: "#323232ff",
                width: "300px",
                left: "100px",
                display: "block",
                top: "140px"
            }}><b style={{ fontSize: "32px" }}>Learn essential career and life skills</b>
                <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>

            </div>
            <div style={{
                display: "flex",
                gap: "20px"
            }}>
                <div style={{
                    position: "relative",
                    width: "300px",
                    alignItems: "center",
                    height: "350px"
                }}>
                    <img src={generativeai}
                        style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            bottom: "1px",
                            width: "80%",
                            height: "100px",
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            borderRadius: "6px",
                            fontSize: "18px",
                            fontWeight: 100,
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                            gap: "5px",
                            boxSizing: "border-box",

                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                            <FaPeopleGroup size={24} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <span style={{ fontWeight: 400 }}>Generative AI</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <FaArrowRight size={20} />
                        </div>
                    </div>
                </div>
                <div style={{
                    position: "relative",
                    width: "300px",
                    alignItems: "center",
                    height: "350px"
                }}>
                    <img src={certifications}
                        style={{ width: "300px", height: "350px", borderRadius: "8px" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            bottom: "1px",
                            width: "80%",
                            height: "100px",
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            borderRadius: "6px",
                            fontSize: "18px",
                            fontWeight: 100,
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                            gap: "5px",
                            boxSizing: "border-box",

                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                            <FaPeopleGroup size={24} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <span style={{ fontWeight: 400 }}>Generative AI</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <FaArrowRight size={20} />
                        </div>
                    </div>
                </div>
                <div style={{
                    position: "relative",
                    width: "300px",
                    alignItems: "center",
                    height: "350px"
                }}>
                    <img src={datascience}
                        style={{ width: "300px", height: "350px", borderRadius: "8px" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            bottom: "1px",
                            width: "80%",
                            height: "100px",
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            borderRadius: "6px",
                            fontSize: "18px",
                            fontWeight: 100,
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                            gap: "5px",
                            boxSizing: "border-box",

                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                            <FaPeopleGroup size={24} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <span style={{ fontWeight: 400 }}>Generative AI</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <FaArrowRight size={20} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );

}