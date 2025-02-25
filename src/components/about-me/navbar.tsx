import LOGO from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div className="w-full border-b border-black/50 fixed top-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-14 md:h-18 w-full px-8 py-4">
                    <img src={LOGO} className="h-full w-auto hidden sm:block" />
                    {/* <div className="flex items-center font-[funny]">
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            About
                        </Link>
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            Experience
                        </Link>
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            Projects
                        </Link>
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            Skills
                        </Link>
                    </div> */}
                    <div className="z-10 flex min-h-64 items-center justify-center">
                        <div
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span className="text-sm">✨ Follow Me</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;