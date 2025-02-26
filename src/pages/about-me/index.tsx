import { Background } from "@/components/about-me/background";
import Hero from "@/components/about-me/hero";
import Navbar from "@/components/about-me/navbar";
import { SideNav } from "@/components/about-me/sidenav";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const AboutMe: React.FC = () => {
    return (
        <div
            className="w-full h-screen overflow-auto">
            <Background />
            <Navbar />
            <SideNav />
            <Hero />
            <h3 className="h-[100vh]">Aurora</h3>
        </div>
    );
}

export default AboutMe;