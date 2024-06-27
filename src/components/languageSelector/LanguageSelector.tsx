import { useState } from "react";
import "./LanguageSelector.scss";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageEnum } from "../../enums/languageEnums";
import { LanguageMapper } from "../../utils/languageMapper";
import { LanguageMapperType } from "../../types/types";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(LanguageEnum.ENGLISH);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: LanguageEnum) => {
    setLanguage(language);
    setIsOpen(!isOpen);
  };
  return (
    <div className="selector-container">
      <button
        className={`selector-button ${isOpen ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <LanguageIcon fontSize="inherit" />
        <p>{language}</p>
      </button>
      {isOpen ? (
        <div className="selector-dropdown">
          <>
            {LanguageMapper.map((item: LanguageMapperType) => (
              <button
                className="dropdown-button"
                key={item.id}
                onClick={() => handleLanguageSelect(item.language)}
              >
                <p>{item.language}</p>
              </button>
            ))}
          </>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LanguageSelector;
