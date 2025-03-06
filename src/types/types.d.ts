import { SvgIconProps } from "@mui/material";
import { LanguageEnumShort, LanguageEnumLong } from "../enums/languageEnums";

export type OverviewMapperType = {
  id: string;
  Component: React.FC;
  className: string;
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
      header?: {
        [index: string]: string;
      };
      body?: {
        [index: string]: string | any;
      };
    };
  };
};

export type ObjectIndexType = {
  [index: string]: JSX.Element | string;
};

export type ContactContentType = {
  formTitle: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  policyType: string;
  addtlInfo: string;
  submit: string;
  or: string;
};

export type QuoteFormProps = {
  setFormData: React.Dispatch<React.SetStateAction>;
  setActiveStep: React.Dispatch<React.SetStateAction>;
  formData?: any;
};
