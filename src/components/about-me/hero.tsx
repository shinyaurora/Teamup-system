import { TextAnimate } from "@/components/magicui/text-animate";

const Hero = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="text-[30px] font-[funny]">
                <TextAnimate>
                    👋 Hi there
                </TextAnimate>
            </div>
        </div>
    )
}

export default Hero;