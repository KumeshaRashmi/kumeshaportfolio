"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type Props = object;

function ContactMe({}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Kumesha Rashmi",
          from_email: form.email,
          to_email: "Kumesharashmi918@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setLoading(false);
      alert("Email sent successfully");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-gray-900 px-4"
      id="contact"
    >
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Contact Me
        </h1>
        <p className="mb-8 text-center text-gray-300 sm:text-sm">
        Have a question or just want to connect? Drop me an email, and I’ll get back to you promptly!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-700 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="yourname@gmail.com"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-gray-700 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 bg-gray-700 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
