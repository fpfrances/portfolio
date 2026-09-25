import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const FrontendSkills = [
        "CSS",
        "HTML",
        "JavaScript",
        "React.js",
        "Tailwind CSS"
    ];

    const BackendSkills = [
        "Java",
        "MongoDB",
        "Node.js",
        "Python",
        "Supabase",
    ];

    const ITSupportSystemsSkills = [
        "Help Desk & Troubleshooting",
        "Hardware Assembly & Configuration",
        "System Monitoring",
        "Windows",
        "Microsoft Office",
        "C/C++",
        "VHDL",
        "Verilog"
    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-25">
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-auto">
                <h2 className="text-4xl font-bold mb-7 bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center">
                    About Me</h2>

                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                <p className="text-gray-400 mb-1">
                I'm an IT specialist who works across both support and development. My tech career has grown from a persistent curiosity and desire to learn.
                I enjoy solving problems wherever they show up. From troubleshooting systems and hardware, keeping applications running smoothly to building intuitive frontend experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl p-7 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {FrontendSkills.map((tech, key) =>(
                                <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">{tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-7 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {BackendSkills.map((tech, key) =>(
                                <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">{tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-7 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">IT Support & Systems</h3>
                        <div className="flex flex-wrap gap-2">
                            {ITSupportSystemsSkills.map((tech, key) =>(
                                <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition">{tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>
                                <strong>Bachelor of Science in Computer Engineering</strong> 
                                <p>University of Central Florida</p>
                                <p>Graduated: Fall 2024</p>
                                <p>GPA: 3.1</p><br></br>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold mb-4 text-gray-200">Coursework</h3>
                                <p><strong>Senior Design I & II</strong></p>
                                <p><strong>Object-Oriented Software Development Processes</strong></p>
                                <p><strong>Verification of Digital System</strong></p>
                                <p><strong>HDL in Digital System Design</strong></p><br></br>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold mb-4 text-gray-200">Certifications</h3>
                                <strong>IBM - Python for Data Science, AI and Development</strong><br></br>
                                <br></br>                    
                            </li>
                            <li>
                                <h3 className="text-xl font-bold mb-4 text-gray-200">Award</h3>
                                <strong>2020 All-Florida Academic Team Award: Recognized for academic excellence, leadership, and community service.</strong><br></br>
                                <br></br>                    
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <h3 className="text-xl font-bold mb-4">Relevant Experience</h3>
                        <div className="space-y-8 text-gray-400">
                            <div>
                            <h4 className="text-white"><strong>Webtech Forge Labs (Sep 25 – Nov 25)</strong></h4>
                                <p>Founded and ran an IT services venture: designed, launched, and maintained a responsive
                                company website, while providing ongoing frontend and systems support to keep it fast and reliable
                                across devices.
                                </p>
                            </div>
                            <div>
                            <h4 className="text-white"><strong>Callao Energy (Jun 25 – Aug 25)</strong></h4>
                                <p>Redesigned the website for a solar energy company to be more responsive and professional,
                                adding interactive UI elements and data graphs, while providing technical support to keep
                                the site running smoothly for the client.
                                </p>
                            </div>
                            <div>
                            <h4 className="text-white"><strong> Time Tracker App (May 25 – Jun 25)</strong></h4>
                                <p>Built a lightweight, mobile-friendly time tracking application using React.js, Supabase, Vite, and CSS.
                                Enables users to clock in/out, manage daily notes, and generate detailed PDF reports to track weekly and monthly productivity.
                                </p>
                            </div>
                            <div>
                            <h4 className="text-white"><strong> We Love Coffee (Jan 25 – May 25)</strong></h4>
                                <p>Developed a dynamic, responsive website for a Brazilian coffee roaster
                                using React.js and CSS. Implemented intuitive navigation and interactivity
                                to enhance customer engagement, while ensuring cross-device compatibility.
                                </p>
                            </div>
                            <div>
                            <h4 className="text-white"><strong>Thermal Dune Energy Storage (May 24 – Dec 24)</strong></h4>
                                <p>Built a project documentation website using HTML, CSS, and JavaScript
                                to improve usability for all stakeholders on the project. Built and implemented
                                a touchscreen-optimized UI for an ESP32-powered LCD display.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-80 bg-black" />
            </RevealOnScroll>
        </section>
    );
}