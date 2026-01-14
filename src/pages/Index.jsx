import Hero from "../components/Hero.jsx";
import Programs from "../components/Programs.jsx";
import Skills from "../components/Skills.jsx";
import Team from "../components/Team.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Blogs from "../components/Blogs.jsx";
import Cta from "../components/Cta.jsx";

function Index() {
    return (
        <main className="main">

            {/* Courses Hero Section */}
            <Hero/>
            {/* /Courses Hero Section */}

            {/* Featured Courses Section */}
            <Programs/>
            {/* /Featured Courses Section */}

            {/* Course Categories Section */}
            <Skills/>
            {/* /Course Categories Section */}
            {/* Cta Section */}
            <Cta/>
            {/* /Cta Section */}
            {/* Testimonials Section */}
            <Testimonial/>
            {/* /Testimonials Section */}

            {/* Recent Blog Posts Section */}
            <Blogs min={3}/>
            {/* /Recent Blog Posts Section */}
        </main>
    );
}

export default Index;