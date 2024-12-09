import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
  </BrowserRouter>
);
