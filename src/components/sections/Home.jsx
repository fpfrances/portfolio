import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent leading-right">Welcome to My Portfolio</h1>
                <p className="text-gray-300 text-lg mb-9 max-w-auto mx-auto">
                Hi there! Buckle up — welcome to my digital wonderland!<br></br>
                I'm a Software Engineer who loves mixing code, creativity, and a shot of caffeine to build cool things.<br></br>
                Here you'll find some of my projects, get to know me, and my world of tech in my virtual space.<br></br>
                Make yourself at home, click around, and I hope you find something that sparks your interest!</p><br></br>
                <a href="#about" className="bg-gradient-to-r from-yellow-500 to-pink-600 py-4 px-7 rounded-full font-medium transition relative overflow-hidden hover:shadow-[0_0_50px_rgba(234,179,8,0.4)]">Learn more</a>
            </div>
            </RevealOnScroll>
        </section>
    );
}


/*
🔧 Projects – From smart devices to interactive web apps, I like bringing ideas to life with code and hardware.
💡 Skills – A peek into the tools, languages, and tech I use to make magic happen.
📄 Resume – The official stuff: education, experience, and what I’ve been up to professionally.
📬 Contact – Want to collab, chat tech, or just say hi? Let’s connect!Hey there! Brace yourself — this is my digital wonderland! I'm a Software Engineer who loves mixing code, creativity, and a little bit of caffeine to build cool things. Here you'll find my projects, thoughts, and a glimpse into my world of tech. Make yourself at home, click around, and I hope you find something that sparks your interest!
*/