import React from "react";
import "../EducationSection.css";
 // Make sure to include the CSS file

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "R. C. Patel Institute of Technology,Shirpur",
      duration: "2022 - 2025",
      highlights: [
        "Current CGPA: 8.1",
        "Earn Money From FreeLancing",
        "Completed projects in ReactJS and Spring Boot.",
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Jalgaon",
      duration: "2019 - 2022",
      highlights: [
        "Secured 85.43% overall.",
        "Learned foundational programming and database concepts.",
        "Contribute for open Source in Hacktomber Fest 4 pull request accepted"
      ],
    },
    {
      degree: "Schooling ",
      institution: "S.S.P.D.Thepade Secondary School,Mhasawad",
      duration: "2008 - 2019",
      highlights: [
        "Secured 88.20% overall.",
        "Excelled in mathematics and science subjects.",
      ],
    },
  ];

  return (
    <div className="education-section">
      <div className="container">
        <h1 className="section-title">Education</h1>
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-left">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-duration">{edu.duration}</p>
            </div>
            <div className="education-right">
              <ul>
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
