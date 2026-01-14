import React from 'react';

function Skills() {
    const skills = [
        { title: "Coding & Programming", icon: "bi bi-code-slash", count: "350+ High School Student" },
        { title: "Robotics", icon: "bi bi-robot", count: "50+ High school Students" },
        // { title: "AI & Machine Learning", icon: "bi bi-cpu", count: "50+ High school Students" },
        { title: "Web Development", icon: "bi bi-laptop", count: "350+ High school Students" },
        // { title: "App Development", icon: "bi bi-phone", count: "50+" },
        { title: "UI/UX Design", icon: "bi bi-palette", count: "350+ High school Students" },
        { title: "Digital Literacy", icon: "bi bi-globe", count: "350+ High school Students" },
        { title: "Problem Solving & Critical Thinking", icon: "bi bi-lightbulb", count: "350+ High school Students" },
        { title: "STEM & Engineering Skills", icon: "bi bi-gear", count: "10+ Schools" },
        // { title: "Data Science & Analytics", icon: "bi bi-graph-up", count: "4 Programs" },
        { title: "Entrepreneurship & Innovation", icon: "bi bi-briefcase", count: "350+ High School Student" },
        { title: "Collaboration & Leadership", icon: "bi bi-people-fill", count: "350+ High School Student" },
    ];

    return (
        <section id="impact" className="course-categories section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Impact</h2>
                <p>WithinTech Rwanda equips students with practical tech skills and problem-solving abilities to thrive in the digital world.</p>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6" data-aos="zoom-in" data-aos-delay={100 + index * 50}>
                            <a href="#programs" className={`category-card category-tech`}>
                                <div className="category-icon">
                                    <i className={skill.icon}></i>
                                </div>
                                <h5>{skill.title}</h5>
                                <span className="course-count">{skill.count}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Skills;
