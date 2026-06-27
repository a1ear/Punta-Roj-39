/**
 * ContactForm — front-end-only contact form.
 * Migrated from the form in contact.php + the submit handler in script.js
 *
 * No backend is wired; matches the original behaviour exactly:
 * validate → show success message → reset.
 *
 * If a backend is added later, update src/services/api.js and swap the
 * handleSubmit body accordingly.
 */

import { useState } from 'react'

const INITIAL = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [fields, setFields]   = useState(INITIAL)
  const [status, setStatus]   = useState('')
  const [errors, setErrors]   = useState({})

  const validate = () => {
    const e = {}
    if (!fields.name.trim())    e.name    = 'Name is required.'
    if (!fields.email.trim())   e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Enter a valid email.'
    if (!fields.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Front-end only — mirrors the original PHP-less behaviour
    setStatus("Thank you! Your message has been noted. We'll be in touch soon.")
    setFields(INITIAL)
    setErrors({})
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div className="mb-3">
        <label htmlFor="cf-name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control${errors.name ? ' is-invalid' : ''}`}
          id="cf-name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="cf-email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control${errors.email ? ' is-invalid' : ''}`}
          id="cf-email"
          name="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="cf-message" className="form-label">
          Message
        </label>
        <textarea
          className={`form-control${errors.message ? ' is-invalid' : ''}`}
          id="cf-message"
          name="message"
          rows="4"
          value={fields.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-brand w-100">
        Send Message
      </button>

      {status && (
        <p
          className="form-status"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      )}
    </form>
  )
}
