import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Open mailto with prefilled subject & body
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact__subtitle">Have a question or want to work together? Send me a message.</p>

      {sent ? (
        <div className="contact__success">
          ✅ Thanks! Your email client should have opened with the message pre-filled.
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label className="contact__label" htmlFor="name">Name</label>
            <input
              id="name"
              className="contact__input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact__row">
            <label className="contact__label" htmlFor="email">Email</label>
            <input
              id="email"
              className="contact__input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="contact__row">
            <label className="contact__label" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="contact__input contact__textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message…"
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary contact__submit">
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}
