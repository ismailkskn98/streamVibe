export async function registerSupportRequest(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const errors: Record<string, string> = {};
  if (!name || name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }
  if (!email) {
    errors.email = "Email is required";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // Başarı durumu
  console.log(`Support request registered: ${name} - ${email}`);
  return { success: true };
}
