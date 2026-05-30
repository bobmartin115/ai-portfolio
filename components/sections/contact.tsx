"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      setSuccess(true)
      form.reset()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-xl font-semibold">Contact</h2>

      <div className="space-y-4 rounded-lg border-2 border-gray-100 p-6 shadow-md dark:border-gray-600 dark:shadow-[0_10px_25px_-5px_rgba(255,255,255,0.2)]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-80 disabled:opacity-50 dark:bg-white dark:text-black"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-sm text-green-500">
              Message sent successfully 🚀
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
