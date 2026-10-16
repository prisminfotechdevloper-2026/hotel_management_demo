export interface LeadPayload {
  fullName: string;
  hotelName: string;
  workEmail: string;
  phone: string;
  city?: string;
  rooms?: string;
  needs?: string[];
  preferredTime?: string;
  message?: string;
  honeypot?: string; // Bot protection
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  // Honeypot check
  if (payload.honeypot) {
    console.warn("Spam submission detected and dropped.");
    return { success: false, message: "Spam submission detected." };
  }

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("👉 [Lead Captured]:", payload);

  // In-memory or localStorage logging for client verification
  if (typeof window !== "undefined") {
    try {
      const storedLeads = JSON.parse(localStorage.getItem("prism_leads") || "[]");
      storedLeads.push({ ...payload, timestamp: new Date().toISOString() });
      localStorage.setItem("prism_leads", JSON.stringify(storedLeads));
    } catch {
      // Fallback silently if storage unavailable
    }
  }

  return {
    success: true,
    message: "Thank you. Our team will reach you within 24 hours.",
  };
}
