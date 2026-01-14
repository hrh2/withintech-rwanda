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
            image: "assets/img/gallery/summer-camp-1.webp",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Get-Into-Tech Summer Camp 2024",
            image: "assets/img/gallery/summer-camp-1.webp",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Certification Ceremony 2024",
            image: "assets/img/gallery/summer-camp-1.webp",
            date: "July 27 - August 21, 2026",
            type: "Summer Camp",
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/gallery/ai-rwanda-1.webp",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/gallery/ai-rwanda-1.webp",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Certification Ceremony 2025",
            image: "assets/img/gallery/certification-1.webp",
            date: "August 31, 2026",
            type: "Event",
        },
        {
            title: "ENJOY AI 2025",
            image: "assets/img/gallery/ai-rwanda-1.webp",
            date: "September 14 - September 27, 2026",
            type: "Competition",
        },
        {
            title: "Coding Clubs",
            image: "assets/img/gallery/enjoy-ai-china.webp",
            date: "December 2026",
            type: "International Program",
        },
        {
            title: "Hands-on Robotics Workshop",
            image: "assets/img/gallery/robotics-1.webp",
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
