import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Overview from "./pages/overview/Overview";
import QuoteForm from "./pages/quoteForm/QuoteForm";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <div className="app-container" id="app-container">
        <Header />
        <div className="page-container" id="page-container">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="quote" element={<QuoteForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
