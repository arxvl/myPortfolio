import AnimatedGeometricBackground from "../component/GeometricBackground";
import { Navbar } from "../component/Navbar";
import { ThemeToggle } from "../component/ThemeToggle";
import { HomeSection } from "../component/HomeSection";
import { AboutSection } from "../component/AboutSection";
import { SkillsSection } from "../component/SkillsSection";
import { ProjectsSection } from "../component/ProjectsSection";
import { ContactSection } from "../component/ContactSection";
import { Footer } from "../component/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen">
    {/* Background Effects */}
    <AnimatedGeometricBackground />

    {/* Navbar */}
    <Navbar />

    {/*Theme Toggle*/}
    <ThemeToggle />

    {/*Main Content*/}
    <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main>

    {/* Footer */}
        <Footer />
    </div>
    );
};

