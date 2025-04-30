// "use client"

// import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// type Theme = "light" | "dark"

// interface ThemeContextType {
//   theme: Theme
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<Theme>(() => {
//     // Check for saved theme preference or use system preference
//     const savedTheme = localStorage.getItem("theme") as Theme | null
//     if (savedTheme) return savedTheme

//     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
//   })

//   useEffect(() => {
//     // Update data-theme attribute on document
//     document.documentElement.setAttribute("data-theme", theme)
//     // Save theme preference
//     localStorage.setItem("theme", theme)
//   }, [theme])

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"))
//   }

//   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider")
//   }
//   return context
// }



"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Create context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme state from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    // For SSR/SSG compatibility
    if (typeof window === "undefined") return "dark"

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) return savedTheme

    // Use system preference as fallback
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  // Update document and localStorage when theme changes
  useEffect(() => {
    if (typeof window === "undefined") return

    // Update data-theme attribute on document
    document.documentElement.setAttribute("data-theme", theme)

    // Save theme preference
    localStorage.setItem("theme", theme)
  }, [theme])

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  // Provide theme context to children
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
