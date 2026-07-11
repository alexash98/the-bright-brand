'use client';

import { useRef, useState } from "react";

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

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
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
