/**
 * API service placeholders for Punta Roj 39.
 *
 * The original PHP site had no backend form handling — the contact form
 * was front-end only (script.js just showed a success message).
 * These stubs are here so a real backend can be wired in without
 * touching the component layer.
 *
 * To add real email submission, replace submitContactForm below with
 * a fetch() call to your backend (e.g. a Vercel serverless function).
 */

/**
 * Submit the contact form.
 * @param {{ name: string, email: string, message: string }} data
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function submitContactForm(data) {
  // Placeholder — no backend wired. Matches original front-end-only behaviour.
  console.info('Contact form submission (no backend):', data)
  return {
    ok: true,
    message: "Thank you! Your message has been noted. We'll be in touch soon.",
  }
}
