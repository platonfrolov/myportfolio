import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App";
import Modal from "react-modal";
import Project from "pages/Project";

Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<App />);
root.render((
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
   
      {/* <Route path="/" element={<AllMeetupsPage />} /> */}
      <Route exact path="/" element={<App />} />
      <Route exact path="/project/*" element={<Project />} />
      {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
     
   
    </Routes>
  </BrowserRouter>
    ), document.getElementById('root')
  );
