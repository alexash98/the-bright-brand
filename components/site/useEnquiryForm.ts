'use client';

import { useRef, useState } from "react";
import { pushSignupEvent } from "@/lib/analytics/form-events";

export interface EnquiryFormData {
  name: string;
  email: string;
  website: string;
  message: string;
}

const EMPTY_FORM: EnquiryFormData = {
  name: "",
  email: "",
  website: "",
  message: "",
};

export function useEnquiryForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<EnquiryFormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.website) {
      setError("Please fill out all required fields marked with *");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please provide a valid work email address");
      return;
    }

    setLoading(true);

    void (async () => {
      try {
        const response = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            website: formData.website.trim(),
            message: formData.message.trim(),
            pageUrl: window.location.href,
          }),
        });

        const payload = (await response.json().catch(() => ({}))) as {
          error?: string;
        };

        if (!response.ok) {
          setError(
            payload.error ??
              "We could not send your enquiry. Email alex@thebrightbrand.com or try again in a moment.",
          );
          return;
        }

        pushSignupEvent({
          formName: "brightbrand_enquiry",
          email: formData.email.trim(),
          firstName: formData.name.trim(),
          companyWebsite: formData.website.trim(),
          message: formData.message.trim(),
        });
        setSuccess(true);
      } catch {
        setError(
          "Network error while sending your enquiry. Check your connection and try again, or email alex@thebrightbrand.com.",
        );
      } finally {
        setLoading(false);
      }
    })();
  };

  const resetForm = () => {
    setSuccess(false);
    setFormData(EMPTY_FORM);
  };

  const focusNameField = (): void => {
    nameInputRef.current?.focus();
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return {
    nameInputRef,
    formData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    resetForm,
    focusNameField,
  };
}
