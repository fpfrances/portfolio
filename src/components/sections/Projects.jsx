import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-25">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-2">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center">
                Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                        hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Time Tracker App</h3>
                        <p className="text-gray-300 mb-4">
                        A simple and efficient time tracking app built with React, TailwindCSS, Vite, and Supabase.
                        It lets users clock in/out, add daily notes, track weekly and monthly hours, and generate detailed PDF time reports.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "React.js", "Supabase", "Tailwind CSS", "Vite"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                            <a href="https://fpfrances-time-tracker.vercel.app" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            ➔ Live Demo
                            </a><span className="text-gray-400">|</span>
                            <a href="https://github.com/fpfrances/time-tracker-app" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-gray-300 mb-4">
                        Built with React.js and TailwindCSS, this portfolio showcases some of my projects and skills.
                        It features a responsive design to ensure cross-device compatibility, smooth scrolling, and a contact form using EmailJS.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["EmailJS", "JavaScript", "React.js", "Tailwind CSS", "Vite"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                            <a href="https://github.com/fpfrances/portfolio" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Thermal Dune Energy Storage UI/UX</h3>
                        <p className="text-gray-300 mb-4">
                        An LCD UI/UX design project for a thermal energy storage system. The design focuses on user experience and usability,
                        with an emphasis on intuitive navigation and clear information presentation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["C++", "Collaboration", "MongoDB", "Teamwork"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                        <a href="https://youtu.be/9csl4HlAC3I?t=133" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            ➔ Live Demo
                            </a><span className="text-gray-400">|</span>
                            <a href="https://github.com/fpfrances/Arduino_SDProject" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                        hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Thermal Dune Energy Storage Website</h3>
                        <p className="text-gray-300 mb-4">
                        A website designed to showcase the Thermal Dune Energy Storage documentation. The website features a clean design,
                        with sections for project overview, technology, and team members. It is built using HTML, CSS, and JavaScript.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["CSS", "HTML", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                        <a href="https://fpfrances.github.io/SD1Web" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            ➔ Live Demo
                            </a><span className="text-gray-400">|</span>
                        <a href="https://github.com/fpfrances/SD1Web" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                        hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">We Love Coffee Website</h3>
                        <p className="text-gray-300 mb-4">
                        A website built using React.js and CSS. It features a clean design with sections for menu, about us, types of coffee, orders and contact.
                        It is designed to provide a great user experience and showcase the coffee roaster's products and services.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[ "CSS", "HTML", "JavaScript", "React.js"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                        <a href="https://fpfrances.github.io/coffee_website" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            ➔ Live Demo
                            </a><span className="text-gray-400">|</span>
                        <a href="https://github.com/fpfrances/coffee_website" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                        hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">AI-Powered ATS Resume Scanner</h3>
                        <p className="text-gray-300 mb-4">
                        This intelligent resume scanner simulates an Applicant Tracking System (ATS) with LLMs simulating how much a resume fits a job description.
                        Even though it does not exactly replicate corporate ATS system, it gives an accurate estimate of performance by focusing on technical and soft skills.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Flask", "GPT-3.5", "JavaScript", "LlamaIndex", "OpenAI API", "Python", "Tailwind CSS", "Vite"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                        <a href="https://fpfrances.github.io/ScannerATS" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            ➔ Live Demo
                            </a><span className="text-gray-400">|</span>
                        <a href="https://github.com/fpfrances/ScannerATS" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                        hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Knight's Rental Car Website</h3>
                        <p className="text-gray-300 mb-4">
                        A web application to rent cars, where users can browse through available cars, rent them, and manage their rentals.
                        The website has features like user authentication, car listing, and a booking system. P.s. This was my first website and I worked 
                        mainly UI/UX.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[ "Collaboration", "CSS", "Express.js", "HTML", "JavaScript", "MongoDB", "Node.js", "Teamwork"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-3">
                        <a href="https://fpfrances.github.io/Car-Rental-Service" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                            ➔ Live Demo
                            </a><span className="text-gray-400">|</span>
                        <a href="https://github.com/fpfrances/Car-Rental-Service" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                        hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">
                        <h3 className="text-xl font-bold mb-2">Multi-Cycle CPU Implementation</h3>
                        <p className="text-gray-300 mb-4">
                        A multi-cycle CPU implementation using Verilog. This project includes a testbench to verify the functionality of the CPU.
                        The CPU is designed to execute a set of instructions and includes components such as ALU, registers, and control unit.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Teamwork", "Verilog"].map((tech, key) => (
                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all">{tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex justify-left items-center mt-4">
                        <a href="https://github.com/fpfrances/multicycle_cpu" target="_blank" className="bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center px-2">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
};