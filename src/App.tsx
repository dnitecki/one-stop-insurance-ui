import { Overview } from "./pages/overview/Overview";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Overview />
        <Footer />
      </div>
    </div>
  );
}
