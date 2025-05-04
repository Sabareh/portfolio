import { createContext, useState, useEffect, useContext } from 'react'
import { darkTheme, lightTheme } from '../stitches.config'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme')
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialTheme = savedTheme || (darkModePreference ? 'dark' : 'light')
    setTheme(initialTheme)
    
    const classDark = darkTheme
    const classLight = lightTheme
    if (initialTheme === 'dark') {
      document.documentElement.classList.add(classDark)
      document.documentElement.classList.remove(classLight)
    } else {
      document.documentElement.classList.add(classLight)
      document.documentElement.classList.remove(classDark)
    }
  }, [])
  
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme)
      
      const classDark = darkTheme
      const classLight = lightTheme
      if (newTheme === 'dark') {
        document.documentElement.classList.add(classDark)
        document.documentElement.classList.remove(classLight)
      } else {
        document.documentElement.classList.add(classLight)
        document.documentElement.classList.remove(classDark)
      }
      
      return newTheme
    })
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
