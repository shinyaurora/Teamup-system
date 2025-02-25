import LOGO from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full border-b border-black/50 fixed top-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-18 w-full px-8 py-4">
                    <img src={LOGO} className="h-full w-auto" />
                    <div className="flex items-center">
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            About
                        </Link>
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            My Journey
                        </Link>
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            Projects
                        </Link>
                        <Link to={"#"} className="text-sm px-4 py-2 rounded-full hover:bg-white font-semibold transition-all duration-300">
                            Hire Me
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;