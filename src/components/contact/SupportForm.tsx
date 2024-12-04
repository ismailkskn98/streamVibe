// src/components/support/form.tsx
"use client";
import { useState } from "react";
import { registerSupportRequest } from "../../app/destek/actions";

export default function SupportForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Alan bazında doğrulama yap
  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    if (name === "name") {
      if (value.length < 3) {
        newErrors.name = "Name must be at least 3 characters long";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "email") {
      if (!value) {
        newErrors.email = "Email is required";
      } else {
        delete newErrors.email;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const result = await registerSupportRequest(form);

    if (!result.success) {
      setErrors(result.errors || {});
    } else {
      setErrors({});
      alert("Request submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
