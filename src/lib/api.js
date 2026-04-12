const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

function buildUrl(path) {
  return API_BASE ? `${API_BASE}${path}` : path;
}

async function fetchJson(path, options = {}) {
  const headers = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(buildUrl(path), {
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      (typeof data === "object" && (data.detail || data.error)) ||
      (typeof data === "string" && data) ||
      `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

export function getApiBase() {
  return API_BASE || "same-origin";
}

export async function getHealth() {
  return fetchJson("/api/health");
}

export async function listAssets() {
  return fetchJson("/api/assets");
}

export async function createRun(payload) {
  return fetchJson("/api/runs", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getRunReceipts(runId) {
  return fetchJson(`/api/runs/${runId}/receipts`);
}

export async function submitContact(payload) {
  return fetchJson("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
