declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushSignupEvent(input: {
  formName: string;
  email: string;
  firstName: string;
  companyWebsite?: string;
  message?: string;
}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "signup",
    form_name: input.formName,
    email: input.email,
    first_name: input.firstName,
    company_website: input.companyWebsite ?? "",
    message: input.message ?? "",
    page_url: window.location.href,
  });
}
