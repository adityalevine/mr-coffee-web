import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
