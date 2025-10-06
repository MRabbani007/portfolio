"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSections() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // You can replace this with your email API (e.g., Nodemailer, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-50 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-none shadow-xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-semibold text-zinc-800 dark:text-white">
                Get in Touch
              </CardTitle>
              <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
                Have a project in mind? Let’s build something great together.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="border-zinc-300 dark:border-zinc-700"
                />
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  type="email"
                  required
                  className="border-zinc-300 dark:border-zinc-700"
                />
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="border-zinc-300 dark:border-zinc-700"
                  rows={5}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full font-medium bg-sky-600 hover:bg-sky-700 text-white dark:bg-sky-500 dark:hover:bg-sky-600 transition-all duration-300"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
