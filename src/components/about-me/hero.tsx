import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <div className="text-[30px] font-[funny]">
                <TextAnimate>
                    👋 Hi there
                </TextAnimate>
            </div>
            <div className="text-[40px] font-[funny]">
                <TextAnimate>
                    Thank you for visiting my site.
                </TextAnimate>
            </div>
            <div className="font-[funny] text-sm flex flex-col gap-3 justify-center items-center mt-4">
                <div>
                    I am a
                    <AnimatedGradientText className="inline mx-1">
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            Senior Full-Stack Developer
                        </span>
                    </AnimatedGradientText>
                    with over 8 years of experience.
                </div>
                <p className="text-lg text-center px-2">
                    <TextAnimate>
                        Proficient in React, Node.js, and AI technologies with deep expertise in Web3 and blockchain development.
                    </TextAnimate>
                </p>
                <div>
                    Let’s connect if you're seeking a results-driven developer.
                </div>
                <Button size="lg" className="text-md rounded-full mx-1 mt-4">
                    <span className="text-xl -mt-1">👉</span>
                    Explore my work
                </Button>
            </div>
        </div>
    )
}

export default Hero;