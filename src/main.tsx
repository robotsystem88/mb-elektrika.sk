import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { LanguageProvider } from "./context/LanguageContext";
import { ModelPage } from "./components/ModelPage";
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/models/:modelKey" element={<ModelPage />} />
            <Route path="*" element={<App />} />
          </Routes>
        </LanguageProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);