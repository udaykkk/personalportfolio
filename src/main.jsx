import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import "./index.css";
import App from "./App.jsx";
import { TerminalContextProvider } from "react-terminal";

import Landing from "./pages/Landing/Landing.jsx";
import Developer from "./pages/Developer/Developer.jsx";
import Recuiter from "./pages/Recruiter/Recruiter.jsx";
import Friends from "./pages/Friends/Friend.jsx";
import Adventurer from "./pages/Adventurer/Adventurer.jsx";
import HireMe from "./pages/HireMe/HireMe.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Project from "./pages/Project/Project.jsx";
import Professional from "./pages/Professional/Professional.jsx";
import Terminal from "./components/Terminal.jsx";
import Music from "./pages/Music/Music.jsx";
import Game from "./pages/Game/Game.jsx";
import Destination from "./pages/Destination/Destination.jsx";
import MemePage from "./pages/Meme/Meme.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/recruiter" element={<Recuiter />} />
      <Route path="/adventurer" element={<Adventurer />} />
      <Route path="/friend" element={<Friends />} />
      <Route path="/Hire" element={<HireMe />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/terminal" element={<Terminal />} />
      <Route path="/music" element={<Music />} />
      <Route path="/game" element={<Game />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/meme" element={<MemePage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <TerminalContextProvider>
    <RouterProvider router={router} />
  </TerminalContextProvider>
);
