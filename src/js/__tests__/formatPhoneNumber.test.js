import formatPhoneNumber from '../formatPhoneNumber';

test('should format Russian phone number with 8 at the start', () => {
  const phoneNumber = '8 (927) 000-00-00';
  const expected = '+79270000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should format Russian phone number with +7 at the start', () => {
  const phoneNumber = '+7 960 000 00 00';
  const expected = '+79600000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should format Chinese phone number with +86 at the start', () => {
  const phoneNumber = '+86 000 000 0000';
  const expected = '+860000000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should format phone number with mixed symbols', () => {
  const phoneNumber = '8-927-000-00-00';
  const expected = '+79270000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should format phone number with spaces', () => {
  const phoneNumber = '8 927 000 00 00';
  const expected = '+79270000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should format phone number with no spaces or symbols', () => {
  const phoneNumber = '89270000000';
  const expected = '+79270000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should handle phone number starting with +', () => {
  const phoneNumber = '+1234567890';
  const expected = '+1234567890';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should handle phone number with invalid characters', () => {
  const phoneNumber = '8@927!000#00$00';
  const expected = '+79270000000';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should handle empty phone number', () => {
  const phoneNumber = '';
  const expected = '+';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});

test('should handle phone number with only special characters', () => {
  const phoneNumber = '()-';
  const expected = '+';
  const result = formatPhoneNumber(phoneNumber);
  expect(result).toBe(expected);
});
