import Hero from "../components/Hero.jsx";
import Programs from "../components/Programs.jsx";
import Skills from "../components/Skills.jsx";
import Team from "../components/Team.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Blogs from "../components/Blogs.jsx";
import Cta from "../components/Cta.jsx";
import About from "./About.jsx";

function Index() {
    return (
        <main className="main">

            {/* Courses Hero Section */}
            <Hero/>
            {/* /Courses Hero Section */}
            <About noTitle={true} />
            {/* Featured Courses Section */}
            <Programs noTitle={true} />
            {/* /Featured Courses Section */}

            {/* Course Categories Section */}
            {/*<Skills/>*/}
            {/* Testimonials Section */}
            <Testimonial/>
            {/* /Testimonials Section */}
            {/* /Course Categories Section */}
            {/* Cta Section */}
            <Cta/>
            {/* /Cta Section */}
        </main>
    );
}

export default Index;