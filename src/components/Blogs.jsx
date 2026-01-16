import React, {useMemo} from 'react';

function Blogs({min, noTitle}) {

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
            image: "assets/img/blog/2024.jpg"
        },
        {
            title: "Get-Into-Tech Summer Camp 2024",
            image: "assets/img/blog/2024-1.jpg"
        },
        {
            title: "Certification Ceremony 2024",
            image: "assets/img/blog/2024-4.jpg"
        },
        {
            title: "Certification Ceremony 2024",
            image: "assets/img/blog/2024-5.jpg"
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025-3.JPG"
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025-4.JPG"
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025-2.jpg"
        },
        {
            title: "Get-Into-Tech Summer Camp 2025",
            image: "assets/img/blog/sessions2025.jpg"
        },
        {
            title: "Certification Ceremony 2025",
            image: "assets/img/blog/celemon2025-1.JPG"
        },
        {
            title: "Certification Ceremony 2025",
            image: "assets/img/blog/celmon2025.JPG"
        },
        {
            title: "ENJOY AI 2025",
            image: "assets/img/blog/enjoyai2.jpeg"
        },
        {
            title: "Coding Clubs",
            image: "assets/img/blog/impact.jpg"
        },
        {
            title: "Coding Clubs",
            image: "assets/img/blog/impact2.jpg"
        },
        {
            title: "Hands-on Robotics Workshop",
            image: "assets/img/blog/DSC_9363.JPG"
        },
    ];

    // Memoize shuffled gallery to prevent reshuffling on every render
    const shuffledGallery = useMemo(() => shuffleArray(galleryItems), [galleryItems]);

    return (
        <>
            {!noTitle && <div className="page-title light-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Gallery</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li className="current">media</li>
                        </ol>
                    </nav>
                </div>
            </div>}
            <section id="gallery" className="recent-blog-posts section">


                {/* Section Title */}
                {!noTitle && <div className="container section-title" data-aos="fade-up">
                    <h2>Photos</h2>
                    <p>Snapshots of our programs, competitions, workshops, and student achievements.</p>
                </div>}

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">

                        {shuffledGallery.slice(0, min).map((item, index) => (
                            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="card">
                                    <div className="card-img-wrapper">
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                {min && <div className="more-gallery text-center" data-aos="fade-up" data-aos-delay="500">
                    <a href="/gallery" className="btn-more">
                        Explore
                    </a>
                </div>}
            </section>
        </>
    );
}

export default Blogs;
