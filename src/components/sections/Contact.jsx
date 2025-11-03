import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("❌ Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form
            className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="relative">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                name="name"
                id="name"
                value={formData.name}
                required
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                value={formData.email}
                required
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                name="message"
                id="message"
                required
                value={formData.message}
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] cursor-pointer"
              type="submit"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
