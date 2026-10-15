import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeModeProvider } from './context/ThemeModeContext.tsx'
import Homepage from './pages/Homepage'
import ProjectsPage from './pages/ProjectsPage.tsx'
import './theme.css'
import ScrollToTop from './widget/ScrollToTop.tsx'

function App() {
  return (
    <ThemeModeProvider>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/progetti" element={<ProjectsPage />} />
      </Routes>
    </ThemeModeProvider>
  )
}

export default App
