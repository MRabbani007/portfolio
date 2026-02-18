"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  Mail,
  MapPin,
  CheckCircle,
  Terminal,
} from "lucide-react";
import Wrapper from "@/components/Wrapper";
import Slide from "@/components/animate/Slide";
import { FaLinkedin } from "react-icons/fa6";
import { submitContactForm } from "@/lib/actions/contact";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Freelance Project",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
    <main className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      {/* Background elements synced with Hero style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Wrapper className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <Slide from="top" className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50/50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400 text-sm font-medium backdrop-blur-sm mb-6">
              <Terminal size={14} />
              <span>System.Contact_Initiated()</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Let&apos;s build something <br />
              <span className="text-sky-500">remarkable.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              Whether you have a question about my experience in Kazakhstan or a
              full-stack project in mind, my inbox is always open.
            </p>
          </Slide>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Expanded Info Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail className="text-sky-500" />}
                  label="Email"
                  value="info@mrabbani.com"
                  href="mailto:info@mrabbani.com"
                />
                <ContactInfoItem
                  icon={<FaLinkedin className="text-blue-600" />}
                  label="LinkedIn"
                  value="mohamadrabbani"
                  href="https://linkedin.com/in/mohamadrabbani"
                />
                <ContactInfoItem
                  icon={<MapPin className="text-rose-500" />}
                  label="Current Location"
                  value="Atyrau, Kazakhstan"
                />
              </div>

              {/* Status Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Available for Hire
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  I am currently taking on freelance projects and looking for
                  full-time Software Engineering roles.
                </p>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <InputGroup
                          label="Full Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                        <InputGroup
                          label="Email Address"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                          Project Type
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all outline-none dark:text-white appearance-none cursor-pointer"
                        >
                          <option>Freelance Project</option>
                          <option>Full-time Opportunity</option>
                          <option>Consultation</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or goals..."
                          required
                          rows={5}
                          className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all outline-none dark:text-white resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white py-5 rounded-2xl font-bold transition-all active:scale-[0.98] disabled:opacity-70"
                      >
                        {loading ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          <>
                            Send Inquiry <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <SuccessState />
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

// Sub-components for cleaner code
function InputGroup({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
        {label}
      </label>
      <input
        required
        className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all outline-none dark:text-white"
        {...props}
      />
    </div>
  );
}

function ContactInfoItem({ icon, label, value, href }: any) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-sky-500/50 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-slate-900 dark:text-white font-semibold hover:text-sky-500 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-slate-900 dark:text-white font-semibold">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 space-y-6"
    >
      <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle size={40} />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Message Transmitted
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          Thanks for reaching out! I&apos;ll get back to you shortly.
        </p>
      </div>
    </motion.div>
  );
}
