export async function submitLead(payload) {
  const endpoint = import.meta.env.VITE_LEAD_WEBHOOK_URL

  if (!endpoint) {
    return { ok: false, message: 'Lead webhook is not configured.' }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return { ok: false, message: 'Submission failed. Please try again.' }
    }

    return { ok: true, message: 'Thanks - your request has been sent.' }
  } catch {
    return {
      ok: false,
      message: 'Network error. Please try again in a moment.',
    }
  }
}
