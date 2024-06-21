import { Overview } from "./pages/overview/Overview";
import "./App.scss";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Overview />
      </div>
    </div>
  );
}
