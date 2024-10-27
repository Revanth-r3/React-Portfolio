import { CONTACT } from "../constants";
// import RESUME from "../assets/Revanth_R_CV.pdf";
import RESUME from "../assets/CV-Revanth_R.pdf";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data via EmailJS
    emailjs
      .send(
        "service_xp3jjq7", // Replace with your EmailJS service ID
        "template_iuvvpye", // Replace with your EmailJS template ID
        formData,
        "8fOubcQ4lHmyZui-l" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setEmailSent(true);
          // Clear the form after submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter">
        {/* Display contact information */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          want to work with me, feel free to contact me.
        </motion.p>
        
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          Phone: {CONTACT.phoneNo}
        </motion.p>
        
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          Email: {CONTACT.email}
        </a>

        {/* Contact Form */}
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit} // Handle form submission
          className="my-4 mx-auto w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-left mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-700 transition"
          >
            Send Message
          </button>

          {emailSent && (
            <p className="mt-4 text-green-500">
              Thank you for your message. We'll get back to you shortly!
            </p>
          )}
        </motion.form>

        {/* Download Resume Button */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="my-6 text-center"
        >
          <a
            href={RESUME}
            download="Revanth_CV.pdf"
            className="inline-block px-8 py-3 bg-neutral-900 text-white font-semibold rounded-md hover:bg-neutral-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
