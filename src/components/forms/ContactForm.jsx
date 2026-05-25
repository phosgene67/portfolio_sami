import { useState } from 'react'
import Button from '../common/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Since we're using Formspree, the form will submit directly
      // This is a simple form that works without additional backend setup
      setSubmitStatus('sending')

      // Simulate form submission delay
      setTimeout(() => {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000)
      }, 1000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 5000)
    }
  }

  return (
    <form
      action="https://formspree.io/f/xojprajp"
      method="POST"
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 smooth-transition"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 smooth-transition"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          required
          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 smooth-transition"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or inquiry..."
          rows="6"
          required
          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 smooth-transition resize-none"
        ></textarea>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 text-sm font-semibold">
            ✓ Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-semibold">
            ✗ Failed to send message. Please try again.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={submitStatus === 'sending'}
      >
        {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
