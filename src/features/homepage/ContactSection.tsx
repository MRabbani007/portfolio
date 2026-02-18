"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Mail, MapPin, CheckCircle } from "lucide-react";
import Wrapper from "@/components/Wrapper";
import { FaLinkedin } from "react-icons/fa6";
import { submitContactForm } from "@/lib/actions/contact";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Contact Me",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContactForm(formData);

      console.log(result);
      if (result.status === 200) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          subject: "Freelance Project",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("System error: Failed to transmit message.");
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#030712] transition-colors duration-500"
    >
      <Wrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                Let&apos;s start a <br />
                <span className="text-sky-500">conversation.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
                I&apos;m currently available for freelance work and full-time
                opportunities. Expect a response within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="text-sky-500" />,
                  label: "Email",
                  value: "info@mrabbani.com",
                  href: "mailto:info@mrabbani.com",
                },
                {
                  icon: <FaLinkedin className="text-blue-600" />,
                  label: "LinkedIn",
                  value: "https://linkedin.com/in/mohamadrabbani",
                  href: "https://linkedin.com/in/mohamadrabbani",
                },
                {
                  icon: <MapPin className="text-rose-500" />,
                  label: "Location",
                  value: "Atyrau, Kazakhstan",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-900 dark:text-white font-medium hover:text-sky-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 blur-3xl rounded-[3rem] pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              className="relative p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl space-y-6"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                          Name
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all outline-none dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all outline-none dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        required
                        rows={4}
                        className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all outline-none dark:text-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white py-4 rounded-2xl font-bold transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send
                            size={18}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Thank you for reaching out. I&apos;ll get back to you
                      shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
