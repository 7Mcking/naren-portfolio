import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o2mzpme", // Replace with your EmailJS service ID
        "template_qyc5qxf", // Replace with your EmailJS template ID
        formData,
        "IhR14mLuZlP12EiQS" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="w-full max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-white">
              <Mail className="w-6 h-6 text-purple-400" />
              <span>sadhwaninaren@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Phone className="w-6 h-6 text-purple-400" />
              <span>+91 9157824853</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span>Pune, Maharashtra</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}