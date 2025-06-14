import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import { TerminalContextProvider } from "react-terminal";


import Landing from './pages/Landing/Landing.jsx' 
import Developer from './pages/Developer/Developer.jsx';
import Recuiter from './pages/Recruiter/Recruiter.jsx'
import Stalker from './pages/Stalker/Stalker.jsx';
import Adventurer from './pages/Adventurer/Adventurer.jsx'
import HireMe from './pages/HireMe/HireMe.jsx';
import Skills from './pages/Skills/Skills.jsx';
import Project from './pages/Project/Project.jsx';
import Professional from './pages/Professional/Professional.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Landing />} />
    <Route path='/developer' element={<Developer />} />
    <Route path='/recruiter' element={<Recuiter />} />
    <Route path='/adventurer' element={<Adventurer />} />
    <Route path='/stalker' element={<Stalker />} />
    <Route path='/Hire' element={<HireMe />} />
    <Route path='/Skills' element={<Skills />} />
    <Route path='/Project' element={<Project />} />
    <Route path='/professional' element={<Professional />} />

    </>


  )
)

createRoot(document.getElementById('root')).render(
  <TerminalContextProvider>
    <RouterProvider router={router}/>
  </TerminalContextProvider>,
)
