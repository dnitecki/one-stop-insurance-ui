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
    agency: any;
    services: any;
    contact: any;
  };
};
