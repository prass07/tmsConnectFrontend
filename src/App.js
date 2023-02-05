import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
