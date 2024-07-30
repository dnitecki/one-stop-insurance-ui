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
  image?: any;
};

export type ReviewMapperType = {
  rating: number;
  review: string;
  name: string;
};

export type ContentMapperType = {
  sections: {
    [index: string]: {
      header: {
        [index: string]: string;
      };
      body?: {
        [index: string]: string;
      };
    };
  };
};
