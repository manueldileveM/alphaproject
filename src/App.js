import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ProjectsPage from './pages/ProjectsPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/progetti" element={<ProjectsPage />} />
    </Routes>
  )
}

export default App
