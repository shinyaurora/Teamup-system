import { OrbitingCircles } from "../magicui/orbiting-circles";
import { TextAnimate } from "../magicui/text-animate";
import Icons from "../icons";

const Skills = () => {
    return (
        <div className="border-b border-black/50 pt-12">
            <h3 className="text-center font-bold font-[funny] text-3xl mb-8">
                <TextAnimate>
                    This Is How I Approach Problems
                </TextAnimate>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="border-b lg:border-r border-black/50 px-4 pt-4 pb-12">
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                        <OrbitingCircles iconSize={40}>
                            <Icons.react />
                            <Icons.next />
                            <Icons.angular />
                            <Icons.threejs />
                            <Icons.express />
                            <Icons.nest />
                            <Icons.django />
                            <Icons.flask />
                            <Icons.mysql />
                            <Icons.postgresql />
                            <Icons.mongodb />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                            <Icons.git />
                            <Icons.azure />
                            <Icons.kubernetes />
                            <Icons.docker />
                            <Icons.aws />
                            <Icons.jira />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={40} radius={50} speed={3}>
                            <Icons.blockchain />
                            <Icons.ai />
                        </OrbitingCircles>
                    </div>
                </div>
                <div className=" px-4 pt-4 pb-12 h-[400px]">

                </div>
            </div>
        </div>
    )
}

export default Skills;