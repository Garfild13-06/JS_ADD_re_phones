export default function formatPhoneNumber(phoneNumber) {
  // Убираем все символы, кроме цифр и плюса
  const cleaned = phoneNumber.replace(/[^\d+]/g, '');

  // Если номер начинается с 8 и длина 11 символов, заменяем 8 на +7
  if (cleaned.length === 11 && cleaned.startsWith('8')) {
    return '+7' + cleaned.slice(1);
  }

  // Если номер уже начинается с +, возвращаем его как есть
  if (cleaned.startsWith('+')) {
    return cleaned;
  }

  // В противном случае возвращаем номер как есть (например, для номеров Китая)
  return '+' + cleaned;
}
