export const WHATSAPP_NUMBER = '6289699481497';

const DEFAULT_MESSAGE = 'Halo Utech, saya ingin konsultasi.';

export function buildWhatsAppLink(message?: string) {
  const trimmed = message?.trim();
  const text = trimmed && trimmed.length > 0 ? trimmed : DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
