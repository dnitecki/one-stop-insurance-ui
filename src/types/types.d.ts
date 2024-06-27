import { LanguageEnum } from "../enums/languageEnums";

export type OverviewMapperType = {
  id: string;
  header: string;
  Component: React.FC;
};

export type LanguageMapperType = {
  id: string;
  language: LanguageEnum;
};
