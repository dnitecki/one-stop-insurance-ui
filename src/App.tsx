import "./App.scss";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Overview from "./pages/overview/Overview";
import Quote from "./pages/quote/Quote";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { LanguageEnumShort, SeachParamEnum } from "./enums/languageEnums";
import { useEffect } from "react";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const languageParam = searchParams.get(SeachParamEnum.LANG);
  const setInitLanguage = () => {
    if (!languageParam || !(languageParam in LanguageEnumShort)) {
      setSearchParams({ [SeachParamEnum.LANG]: LanguageEnumShort.EN });
    }
  };
  useEffect(() => {
    setInitLanguage();
  });

  return (
    <div className="app">
      <div className="app-container" id="app-container">
        <Header />
        <div className="page-container" id="page-container">
          <Routes>
            <Route index path="/" element={<Overview />} />
            <Route path="/requestquote" element={<Quote />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
