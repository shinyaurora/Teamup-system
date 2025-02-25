import { Background } from "@/components/about-me/background";
import Hero from "@/components/about-me/hero";
import Navbar from "@/components/about-me/navbar";
import { SideNav } from "@/components/about-me/sidenav";

const AboutMe: React.FC = () => {
    return (
        <div className="w-full h-screen overflow-auto">
            <Background />
            <Navbar />
            <SideNav />
            <Hero />
        </div>
    );
}

export default AboutMe;