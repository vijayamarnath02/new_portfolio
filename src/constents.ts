export const EMAIL = 'vijayamarnathmv@gmail.com';
export const PHONE = '9442882709';
export const LINKEDIN = "https://www.linkedin.com/in/vijay-amarnath-m-v/";
export const GITHUB = "https://github.com/vijayamarnath02";
export const THEME = "theme"
export const ADDRESS = "Chennai, Tamil Nadu, India"

/** The date you joined Purpleslate as Angular Developer */
export const JOIN_DATE = new Date(2024, 8, 14); // Sep 14, 2024 (months are 0-indexed)

/**
 * Auto-calculates experience duration from JOIN_DATE to today.
 * Returns a string like "1.8+" that updates automatically every month.
 */
export function getExperienceText(): string {
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - JOIN_DATE.getFullYear()) * 12 +
    (now.getMonth() - JOIN_DATE.getMonth());
  const years = totalMonths / 12;
  return years.toFixed(1) + '+';
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