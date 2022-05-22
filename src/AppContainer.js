import { useState } from "react"
import { getLanguages } from "./const/languages"
import { ThemeContext, THEMES } from "./contexts/ThemeContext"
import { withLoading } from "./hoc/withLoading"
import App from "./App"

const AppComponent = withLoading(App, getLanguages);



export const AppContainer = () => {
  const [theme, setTheme] = useState(THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = (theme === THEMES.dark) ? THEMES.ligth : THEMES.dark;
    setTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  )
}