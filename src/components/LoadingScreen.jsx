import { useEffect, useState } from "react";
import logo from "/Mini_logo.png";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Filipe Pestana Frances";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000); // Wait for 1 second before calling onComplete
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

return (
<div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
    <img src={logo} alt="Mini logo" className="h-25 w-25 object-contain mb-15" />
    <div className="mb-4 text-2xl sm:text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">|</span>
    </div>

    <div className="w-[300px] h-[3px] bg-black-100 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-yellow-500 to-pink-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
        </div>
    </div>
</div>
);
};