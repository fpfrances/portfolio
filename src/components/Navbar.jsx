import { useEffect } from "react";
import logo from "/Mini_logo.png";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
    <nav className="fixed top-0 w-full z-50 bg-black backdrop-blur-lg border-b border-white/15 shadow-lg">
    <div className="px-4 mx-auto max-w-8xl">
        <div className="flex justify-between items-center h-14">
        
            {/* Left side: logo + title */}
            <div className="flex items-center">
            <img src={logo} alt="Mini logo" className="h-8 w-8 object-contain mr-2" />
            <a href="#home" className="font-mono text-xl font-bold bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text
            text-transparent">Techy Tales By Filipe
            </a>
            </div>

            {/* Right side: menu toggle & nav links */}
            <div className="flex items-center">
            <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8 ml-4">
                <a href="#home" className="text-gray-300 font-semibold hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-300 font-semibold hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-gray-300 font-semibold hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-gray-300 font-semibold hover:text-white transition-colors">Contact</a>
            </div>
            </div>
        </div>
    </div>
    </nav>
    );
};