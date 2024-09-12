export function formatPhoneNumber(phone: string) {
  return phone.replace(/[^\d]/g, "");
}
