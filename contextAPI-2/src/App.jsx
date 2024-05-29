import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode , setThemeMode] = useState('light')

  // the darkTheme & lightTheme is not defined yet --- so if you declare & define the methods with teh same name -- then the functionality is set automaticallyyyyy 
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Actual change in theme 
  useEffect(() => {
    document.querySelector('html').classList.remove('light' , 'dark')
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  return (
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme button */}
          <ThemeBtn></ThemeBtn>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card */}
          <Card></Card>
        </div>
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App
