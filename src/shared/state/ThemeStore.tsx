import { create } from "zustand";

type ThemeStore = {
  currentTheme: "light" | "dark" ;
  setCurrentTheme: (value: "light" | "dark") => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: "light",
  setCurrentTheme: (value) => set({ currentTheme: value }),
}));
