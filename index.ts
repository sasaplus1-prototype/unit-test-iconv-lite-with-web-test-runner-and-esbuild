import iconv from 'iconv-lite';

export function convertToShiftJis(text: string): string {
  return iconv.encode(text, 'Shift_JIS');
}
