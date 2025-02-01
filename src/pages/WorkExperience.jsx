const workExperienceData = [
    {
      role: "Java Developer Intern",
      company: "R3 Systems India Pvt Ltd,Nashik",
      duration: "February-March 2024",
      responsibilities: [
        "Developed RESTful APIs using Spring Boot.",
        "In frotend used React and MySQL Database is used (created Project during the InternShip)",
        "Collaborated with cross-functional teams to design scalable solutions.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "LetsGrowMore & CodeClause",
      duration: "June-July 2023",
      responsibilities: [
        "Created responsive web pages using HTML, CSS, and JavaScript.",
        "Implemented dynamic functionality using PHP and MySQL.",
        "Completed projects adhering to strict deadlines.",
      ],
    },
    
  ];
  
  const WorkExperience = () => {
    return (
      <div className="work-experience-section">
        <div className="section-title">Work Experience</div>
        {workExperienceData.map((item, index) => (
          <div key={index} className="work-experience-item">
            <div className="work-experience-left">
              <div
                className={`work-experience-role ${
                  item.role === "Java Developer Intern" || item.role === "Web Development Intern"
                    ? "highlight"
                    : ""
                }`}
              >
                {item.role}
              </div>
              <div className="work-experience-company">{item.company}</div>
              <div className="work-experience-duration">{item.duration}</div>
            </div>
            <div className="work-experience-right">
              <ul>
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default WorkExperience;
  