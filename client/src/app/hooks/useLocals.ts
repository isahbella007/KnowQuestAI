// Create this file if it doesn't exist
export default function useLocales() {
  return {
    translate: (key: string) => key,
    currentLang: 'en',
  };
}