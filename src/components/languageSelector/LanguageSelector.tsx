import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./LanguageSelector.scss";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageEnumShort } from "../../enums/languageEnums";
import { LanguageMapper } from "../../utils/languageMapper";
import { LanguageMapperType } from "../../types/types";
import { useCollapse } from "react-collapsed";

const LanguageSelector = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  useEffect(() => {
    setInitLanguage();
  });

  const setInitLanguage = () => {
    if (!searchParams.get("lang")) {
      setSearchParams({ lang: LanguageEnumShort.EN });
    }
  };

  const handleLanguageSelect = (language: LanguageEnumShort) => {
    setExpanded(!isExpanded);
    setSearchParams({ lang: language });
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
        <p>{searchParams.get("lang")}</p>
      </button>
      <div
        className="selector-dropdown"
        {...getCollapseProps({
          style: {
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          },
        })}
      >
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
