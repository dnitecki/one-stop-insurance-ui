import "./App.scss";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Overview from "./pages/overview/Overview";
import Quote from "./pages/quote/Quote";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { LanguageEnumShort, SeachParamEnum } from "./enums/languageEnums";
import { useEffect } from "react";
import useTranslateContent from "./hooks/useTranslateContent";

export const App = () => {
  const { language } = useTranslateContent();
  const [, setSearchParams] = useSearchParams();
  const setInitLanguage = () => {
    if (!language || !(language in LanguageEnumShort)) {
      setSearchParams({ [SeachParamEnum.LANG]: LanguageEnumShort.EN });
    }
  };

  useEffect(() => {
    setInitLanguage();
  }, [language]);

  return (
    <div className="app-container" id="app-container">
      <Header />
      <main className="page-container" id="page-container">
        <Routes>
          <Route index path="/" element={<Overview />} />
          <Route path="/requestquote" element={<Quote />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
