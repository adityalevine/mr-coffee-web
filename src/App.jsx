import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./utils/scrollToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import RewardPage from "./pages/RewardPage";
import AboutUsPage from "./pages/AboutUsPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
