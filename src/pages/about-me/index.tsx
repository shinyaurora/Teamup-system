import { Background } from "@/components/about-me/background";
import Experience from "@/components/about-me/experience";
import Hero from "@/components/about-me/hero";
import Navbar from "@/components/about-me/navbar";
import { SideNav } from "@/components/about-me/sidenav";

const AboutMe: React.FC = () => {
    return (
        <div
            className="w-full h-screen overflow-auto pb-32">
            <Background />
            <Navbar />
            <SideNav />
            <Hero />
            <Experience />
        </div>
    );
}

export default AboutMe;