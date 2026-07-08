// This site is a static export with no backend — form submissions used to go
// to a hosted entity store that no longer exists. Wire this up to a real form
// service (e.g. Formspree, Netlify Forms, EmailJS) or a custom API endpoint
// before relying on it to capture leads in production.
export async function submitLead(payload) {
  console.warn('[Contact form] No backend configured — lead was not sent anywhere:', payload);
  return Promise.resolve();
}
