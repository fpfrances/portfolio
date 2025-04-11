import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const FrontendSkills = [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS"
    ];

    const BackendSkills = [
        "Node.js",
        "MongoDB",
        "Java",
        "C/C++",
        "Python",
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-25">
            <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-7 bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center">
                    About Me</h2>

                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                <p className="text-gray-400 mb-1">
                I'm a software developer who enjoys creating new things. My tech career has grown by a persistent curiosity and desire to learn.
                While I've worked on many different kinds of projects, frontend development most energizes me because I get to bring ideas into existence
                and build intuitive user experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>
                                <strong>Bachelor of Science in Computer Engineering</strong> University of Central Florida
                                <p>Graduated: Fall 2024</p><br></br>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold mb-4 text-gray-200">Coursework</h3>
                                <strong>Senior Design II (Fall 2024)</strong><p>Designed a touchscreen interface for an ESP32-driven LCD, with enhanced response and user interaction.</p><br></br>
                                <strong>Senior Design I (Summer 2024)</strong><p>Designed and implemented an organized project documentation website using HTML, CSS, and JavaScript that provided a one-stop shop for project collaboration and accessibility.</p><br></br>
                                <strong>Object-Oriented Software Development Processes (Spring 2024)</strong><p>Developed a rental car website with frontend components using JavaScript, HTML, CSS, and MongoDB.</p><br></br>
                                <strong>Embedded Systems (Fall 2023)</strong><p>Developed projects with MSP430 and ESP32 in C and C++, focusing on real-time systems.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <h3 className="text-xl font-bold mb-4">Experience</h3>
                        <div className="space-y-8 text-gray-400">
                            <div>
                            <h4><strong> We Love Coffee (Jan 25 – Present)</strong></h4>
                                <p>Developing a dynamic, responsive website for a Brazilian coffee roaster
                                using React.js and CSS. Implementing intuitive navigation and interactivity
                                to enhance customer engagement, while ensuring cross-device compatibility.
                                </p>
                            </div>
                            <div>
                            <h4><strong>Thermal Dune Energy Storage (May 24 – Dec 24)</strong></h4>
                                <p>Built a project documentation website using HTML, CSS, and JavaScript
                                to improve usability for all stakeholders on the project. Built and implemented
                                a touchscreen-optimized UI for an ESP32-powered LCD display.
                                </p>
                            </div>
                            <div>
                            <h4><strong>Knight's Rental Car (Jan 24 – May 24)</strong></h4>
                                <p>Designed end-user-friendly web application for over 100 users using HTML,
                                CSS, JavaScript, and MongoDB with a key focus on frontend development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}