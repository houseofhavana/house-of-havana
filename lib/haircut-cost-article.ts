import article from "@/data/haircut-cost-article.json";
import { getServiceBySlug } from "@/data/services";

function getMenuItem(slug: string, name: string) {
  const item = getServiceBySlug(slug)?.items.find((item) => item.name === name);
  if (!item?.price || !item.duration) {
    throw new Error(`Missing article pricing source: ${slug} / ${name}`);
  }
  return item as typeof item & { price: string; duration: string };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

/** Keep the article's prices, service names and durations aligned with the menu. */
export function getHaircutCostArticleHtml() {
  const haircut = getMenuItem("mens-haircut-saskatoon", "Haircut + Wash and Style");
  const fade = getMenuItem("fade-haircut-saskatoon", "Haircut + Wash and Style (ask your barber for a fade)");
  const haircutBeard = getMenuItem("mens-haircut-saskatoon", "Haircut + Beard Grooming");
  const beard = getMenuItem("beard-grooming-saskatoon", "Beard Grooming");
  const shave = getMenuItem("hot-towel-shave-saskatoon", "Hot Towel Shaves");
  const rows = [haircut, fade, haircutBeard, beard, shave].map((item) =>
    `<tr><td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.price)}</td><td>${escapeHtml(item.duration)}</td></tr>`
  ).join("");
  const replacements: Record<string, string> = {
    haircutPrice: escapeHtml(haircut.price.toLowerCase()),
    fadePrice: escapeHtml(fade.price.toLowerCase()),
    haircutBeardPrice: escapeHtml(haircutBeard.price.toLowerCase()),
    haircutBeardDuration: escapeHtml(haircutBeard.duration),
    beardPrice: escapeHtml(beard.price.toLowerCase()),
    servicePricingTable: `<div class="overflow-x-auto"><table><caption>House of Havana service prices and appointment times</caption><thead><tr><th scope="col">Service</th><th scope="col">Published price</th><th scope="col">Appointment time</th></tr></thead><tbody>${rows}</tbody></table></div>`,
  };
  return article.html.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    if (!(key in replacements)) throw new Error(`Unknown article pricing field: ${key}`);
    return replacements[key];
  });
}
