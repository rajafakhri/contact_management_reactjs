import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layouts from './components/Layouts'
import UserRegister from './components/User/UserRegister'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layouts />}>
              <Route path="/register" element={<UserRegister />} />
            </Route>
          <Route path="/dashboard">
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
