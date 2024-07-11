import { SvgIconProps } from "@mui/material";
import { LanguageEnumShort, LanguageEnumLong } from "../enums/languageEnums";

export type OverviewMapperType = {
  id: string;
  header: string;
  Component: React.FC;
};

export type LanguageMapperType = {
  id: string;
  language: LanguageEnumLong;
  code: LanguageEnumShort;
};

export type ServiceMapperType = {
  id: string;
  text: string;
  icon: React.FC<SvgIconProps>;
};

export type ContentMapperType = {
  sections: {
    partners: {
      header: {
        [index: string]: string;
      };
    };
    agency: {
      header: {
        [index: string]: string;
      };
      body: {
        [index: string]: string;
      };
    };
    services: {
      header: {
        [index: string]: string;
      };
      body: {
        [index: string]: string;
      };
    };
    contact: {
      header: {
        [index: string]: string;
      };
      body: {
        [index: string]: string;
      };
    };
  };
};
