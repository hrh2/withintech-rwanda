import React, {useMemo} from 'react';

function Blogs({min}) {

    // Shuffle function using Fisher-Yates algorithm
    function shuffleArray(array) {
        const arr = array.slice(); // copy to avoid mutating original
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const galleryItems = [
        {
            title: "Get-Into-Tech Summer Camp 2024",
            image: "assets/img/blog/2024.jpg",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Get-Into-Tech Summer Camp 2024",
            image: "assets/img/blog/2024-1.jpg",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Certification Ceremony 2024",
            image: "assets/img/blog/2024-4.jpg",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Certification Ceremony 2024",
            image: "assets/img/blog/2024-5.jpg",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025-3.JPG",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025-4.JPG",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025-2.jpg",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025.jpg",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Certification Ceremony 2025",
            image: "assets/img/blog/celemon2025-1.JPG",
            date: "August 31, 2026",
            type: "Event",
        },
        {
            title: "Certification Ceremony 2025",
            image: "assets/img/blog/celmon2025.JPG",
            date: "August 31, 2026",
            type: "Event",
        },
        {
            title: "ENJOY AI 2025",
            image: "assets/img/blog/enjoyai2.jpeg",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Coding Clubs",
            image: "assets/img/blog/impact.jpg",
            date: "December 2026",
            type: "International Program",
        },
        {
            title: "Coding Clubs",
            image: "assets/img/blog/impact2.jpg",
            date: "December 2026",
            type: "International Program",
        },
        {
            title: "Hands-on Robotics Workshop",
            image: "assets/img/blog/DSC_9363.JPG",
            date: "Ongoing",
            type: "Workshop",
        },
    ];

    // Memoize shuffled gallery to prevent reshuffling on every render
    const shuffledGallery = useMemo(() => shuffleArray(galleryItems), [galleryItems]);

    return (
        <section id="gallery" className="recent-blog-posts section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Gallery</h2>
                <p>Snapshots of our programs, competitions, workshops, and student achievements.</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">

                    {shuffledGallery.slice(0, min).map((item, index) => (
                        <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {min&&<div className="more-courses text-center" data-aos="fade-up" data-aos-delay="500">
                    <a href="/gallery" className="btn-more">
                        Explore
                    </a>
                </div>}
        </section>
    );
}

export default Blogs;
