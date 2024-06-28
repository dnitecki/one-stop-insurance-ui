import { useState } from "react";
import "./LanguageSelector.scss";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageEnumShort } from "../../enums/languageEnums";
import { LanguageMapper } from "../../utils/languageMapper";
import { LanguageMapperType } from "../../types/types";
import { useCollapse } from "react-collapsed";

const LanguageSelector = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState(LanguageEnumShort.EN);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  const handleLanguageSelect = (language: LanguageEnumShort) => {
    setLanguage(language);
    setExpanded(!isExpanded);
  };
  return (
    <div className="selector-container">
      <button
        className={`selector-button ${isExpanded ? "clicked" : ""}`}
        {...getToggleProps({
          onClick: () => handleClick(),
        })}
      >
        <LanguageIcon fontSize="inherit" />
        <p>{language}</p>
      </button>
      <div className="selector-dropdown" {...getCollapseProps()}>
        <div className="dropdown-content">
          {LanguageMapper.map((item: LanguageMapperType) => (
            <button
              className="dropdown-button"
              key={item.id}
              onClick={() => handleLanguageSelect(item.code)}
            >
              <p>{item.language}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
