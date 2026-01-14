import React from "react";

/* --------------------------------
   Program Card Component
--------------------------------- */
function ProgramCard({ program, delay }) {
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="course-card">
        <div className="course-image">
          <img src={program.image} alt={program.title} className="img-fluid" />
          {program.badge && (
            <div className={`badge ${program.badge.type}`}>
              {program.badge.text}
            </div>
          )}
        </div>

        <div className="course-content">
          <div className="course-meta">
            <span className="level">{program.level}</span>
            <span className="duration">{program.duration}</span>
          </div>

          <h3>
            <a href="#">{program.title}</a>
          </h3>

          <p>{program.description}</p>

          {program.instructor && (
            <div className="instructor">
              <img
                src={program.instructor.image}
                alt={program.instructor.name}
                className="instructor-img"
              />
              <div className="instructor-info">
                <h6>{program.instructor.name}</h6>
                <span>{program.instructor.role}</span>
              </div>
            </div>
          )}

          <div className="course-stats">
            <div className="students">
              <i className="bi bi-people-fill"></i>
              <span>{program.students} Participants</span>
            </div>
          </div>

          <a href="#" className="btn-course">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------
   Programs Component
--------------------------------- */
function Programs() {
  const programs = [
    {
      title: "Get-Into-Tech Summer Camp ",
      image: "assets/img/education/DSC_9405.JPG",
      badge: { type: "featured", text: "Flagship" },
      level: "High School Students",
      duration: "August",
      description:
        "A month-long hands-on program in coding, robotics, and creativity for 100 high school students across Rwanda.",
      students: 100,
    },
    {
      title: "Internship Program ",
      image: "https://office-interior.com/cdn/shop/files/Office_Interior_12_b2afb8af-8552-4fd7-ba6e-79f54421df37.jpg?v=1722609418&width=2800",
      badge: { type: "new", text: "Internship" },
      level: "High School Students",
      duration: "Ongoing ",
      description:
        "A 4-week tech internship for students to gain real-world exposure in coding, AI, and robotics.",
      students: 200,
    },
    {
      title: "Enjoy AI Rwanda ",
      image: "assets/img/education/ai-competition.webp",
      badge: { type: "certificate", text: "Competition" },
      level: "Schools",
      duration: "",
      description:
        "Rwandan teams compete in AI challenges with a final competition on 5/10, showcasing creativity and innovation.",
      instructor: null,
      students: 200,
    },
    {
      title: "Enjoy AI Global  - China",
      image: "assets/img/education/global-ai.webp",
      badge: { type: "international", text: "Global" },
      level: "Selected Teams",
      duration: "December",
      description:
        "WithinTech Rwanda represents Rwanda at the international ENJOY AI final in China with 5 teams, mentors, and teachers.",
      instructor: null,
      students: 21,
    },
    {
      title: "Coding & Robotics Clubs",
      image: "assets/img/education/robotics-club.webp",
      badge: { type: "ongoing", text: "Clubs" },
      level: "High Schools",
      duration: "Ongoing ",
      description:
        "Hands-on coding and robotics clubs established in multiple schools across Rwanda, supporting over 350 students.",
      instructor: null,
      students: 350,
    },
  ];

  return (
    <section id="programs" className="featured-courses section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Programs</h2>
        <p>WithinTech Rwanda runs programs that empower students through coding, robotics, AI competitions, and mentorship.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              program={program}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
