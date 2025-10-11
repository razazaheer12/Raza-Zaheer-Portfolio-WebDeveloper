import { create } from 'zustand';

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  init: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  isDarkMode: true, // Default to dark mode
  toggleTheme: () => set((state) => {
    const newDarkMode = !state.isDarkMode;
    return { isDarkMode: newDarkMode };
  }),
  setTheme: (isDark: boolean) => set({ isDarkMode: isDark }),
  init: () => {
    // Force dark mode always regardless of saved theme or system preference
    set({ isDarkMode: true });
  },
}));

// Subscribe to theme changes and update localStorage and document
useThemeStore.subscribe((state) => {
  localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
  if (state.isDarkMode) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
