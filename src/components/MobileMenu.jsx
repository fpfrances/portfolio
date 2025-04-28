import { useEffect } from "react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <div className={`fixed w-full bg-black z-50 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out ${menuOpen ? "h-100 opacity-90 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-2 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close menu">
                &times;
            </button>
            <div className="flex flex-col items-center justify-center space-y-8">
                <a href="#home" onClick={() => setMenuOpen(false)} className={`text-[20px] bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center my-3 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Home </a>
                <a href="#about" onClick={() => setMenuOpen(false)} className={`text-[20px] bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center my-3 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> About </a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-[20px] bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center my-3 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Projects </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-[20px] bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center my-3 bold transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Contact </a>
            </div>
        </div>
    );
}