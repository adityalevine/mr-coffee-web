import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./utils/scrollToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import RewardPage from "./pages/RewardPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
