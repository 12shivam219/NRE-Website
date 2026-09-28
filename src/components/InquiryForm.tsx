"use client";

import type { FormEvent } from "react";
import { contact, coreServices } from "@/lib/site";

export function InquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const body = [
      `Name: ${value("name")}`,
      `Company / organization: ${value("company") || "Not provided"}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Service: ${value("service")}`,
      `Expected timeline: ${value("timeline") || "Not specified"}`,
      "",
      "Project requirements:",
      value("requirements"),
    ].join("\n");
    const subject = `Project inquiry: ${value("service")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="inquiry-form" onSubmit={handleSubmit}><div className="form-grid"><label>Full name <span>*</span><input name="name" autoComplete="name" required maxLength={100} /></label><label>Company / organization<input name="company" autoComplete="organization" maxLength={120} /></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={180} /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label><label>Service of interest <span>*</span><select name="service" required defaultValue=""><option value="" disabled>Choose a service</option>{coreServices.map(service => <option key={service.slug}>{service.title}</option>)}<option>WhatsApp Business & automation</option><option>Custom solution</option></select></label><label>Expected timeline<select name="timeline" defaultValue=""><option value="">Not sure yet</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Exploring for later</option></select></label></div><label>Project requirements <span>*</span><textarea name="requirements" rows={6} required maxLength={2000} placeholder="Tell us about your business goal and what you need help building or improving." /></label><p className="form-note">This opens a draft in your email app. Review and send it there; this website does not store your information.</p><button type="submit" className="button button-dark">Open email draft <span aria-hidden="true">↗</span></button></form>;
}
