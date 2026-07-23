export const EMAIL = 'vijayamarnathmv@gmail.com';
export const PHONE = '9442882709';
export const LINKEDIN = "https://www.linkedin.com/in/vijay-amarnath-m-v/";
export const GITHUB = "https://github.com/vijayamarnath02";
export const THEME = "theme"
export const ADDRESS = "Chennai, Tamil Nadu, India"
export const RESUME_ASSET_URL = 'assets/VIJAY_AMARNATH_M_V_RESUME_v2.5.pdf';
export const RESUME_DOWNLOAD_NAME = 'Vijay_Amarnath_M_V_Resume_v2.5.pdf';
export const EXPERIENCE_DISPLAY_TEXT = '2.5+';

export function getExperienceText(): string {
  return EXPERIENCE_DISPLAY_TEXT;
}

/**
 * Returns a human-readable duration string like "1 yr 8 mos"
 */
export function getExperienceDuration(startDate: Date, endDate: Date = new Date()): string {
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months} mos`;
  if (months === 0) return `${years} yr`;
  return `${years} yr ${months} mos`;
}
