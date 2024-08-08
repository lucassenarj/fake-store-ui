import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // while user session exist
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/:category" element={<ProductPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
