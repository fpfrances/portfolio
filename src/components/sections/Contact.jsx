import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"
import { useState } from "react"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY)
        .then(() => {
        alert("Message sent successfully!")
        setFormData({name: "", email: "", message: ""})
        })
        .catch(() => alert("Error sending message, please try again."))
    };


    return (
        <section id="contact" className="max-h-screen flex items-center justify-center py-80">
            <RevealOnScroll>
                <div className="px-4 w-full max-w-[35rem] sm:w-[35rem]">
                    <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-yellow-500 to-pink-600 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                            type="text"
                            id="name" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]" 
                            placeholder="Name...">
                            </input>
                        </div>
                        <div className="relative">
                            <input 
                            type="email"
                            id="email" 
                            name="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]" 
                            placeholder="Email...">
                            </input>
                        </div>
                        <div className="relative">
                            <textarea 
                            id="message" 
                            name="message" 
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            row={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]" 
                            placeholder="Message...">
                            </textarea>
                        </div>
                        <button type="submit" className="translate-y-7 justify-center sm:translate-x-43 sm:w-[12.5rem] w-[15rem] mx-auto bg-gradient-to-r from-yellow-500 to-pink-600 text-white py-3 rounded-full font-medium transition relative overflow-hidden hover:shadow-[0_0_50px_rgba(234,179,8,0.4)]">Send Message</button>
                        <div className="mt-40 translate-y-70 flex justify-center items-center gap-5">
                        <a href="https://www.linkedin.com/in/filipefrances/" target="_blank">
                            <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-600 transition" />
                        </a>
                        <a href="https://github.com/fpfrances" target="_blank">
                            <FaGithub className="text-3xl text-gray-400 hover:text-white transition" />
                        </a>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
