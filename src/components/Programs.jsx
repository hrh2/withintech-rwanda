import React from "react";

/* --------------------------------
   Program Card Component
--------------------------------- */
function ProgramCard({program, delay}) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={delay}>
            <div className="program">
                <img src={program.image} className="img-fluid" alt=""/>
                <div className="program-info">
                    <div className="program-info-content">
                        <h4><a href={"#"}>{program.title}</a></h4>
                        <span>{program.badge.type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* --------------------------------
   Programs Component
--------------------------------- */
function Programs({noTitle}) {
    const programs = [
        {
            title: "Get-Into-Tech Summer Camp ",
            image: "assets/img/blog/session2025-1.jpg",
            badge: {type: "featured", text: "Flagship"},
            level: "High School Students",
            duration: "August",
            description:
                "A month-long hands-on program in coding, robotics, and creativity for 100 high school students across Rwanda.",
            students: 100,
        },
        {
            title: "Internship Program ",
            image: "https://office-interior.com/cdn/shop/files/Office_Interior_12_b2afb8af-8552-4fd7-ba6e-79f54421df37.jpg?v=1722609418&width=2800",
            badge: {type: "new", text: "Internship"},
            level: "High School Students",
            duration: "Ongoing ",
            description:
                "A 4-week tech internship for students to gain real-world exposure in coding, AI, and robotics.",
            students: 200,
        },
        {
            title: "Enjoy AI Rwanda ",
            image: "assets/img/blog/enjoyai.jpeg",
            badge: {type: "certificate", text: "Competition"},
            level: "Schools",
            duration: "",
            description:
                "Rwandan teams compete in Robotic and  AI challenges with a final competition on 5/10, showcasing creativity and innovation.",
            instructor: null,
            students: 200,
        },
        {
            title: "Coding & Robotics",
            image: "assets/img/education/DSC_9405.JPG",
            badge: {type: "ongoing", text: "Clubs"},
            level: "High Schools",
            duration: "Ongoing ",
            description:
                "Hands-on coding and robotics clubs established in multiple schools across Rwanda, supporting over 350 students.",
            instructor: null,
            students: 350,
        },
    ];

    return (
        <>
            {/* Section Title */}
            {!noTitle&&<div className="page-title light-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0"></h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li className="current">programs</li>
                        </ol>
                    </nav>
                </div>
            </div>}
            <section id="programs" className="programs featured-courses  section">

                {/*  Section Title  */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Our Programs</h2>
                    <p>WithinTech Rwanda runs programs that empower students through coding, robotics, AI competitions,
                        and
                        mentorship.</p>
                </div>
                {/*  End Section Title  */}

                <div className="container">

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
        </>
    );
}

export default Programs;
