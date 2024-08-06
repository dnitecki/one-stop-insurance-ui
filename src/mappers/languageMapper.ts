import { LanguageEnumLong, LanguageEnumShort } from "../enums/languageEnums";
import { LanguageMapperType } from "../types/types";

export const LanguageMapper: LanguageMapperType[] = [
  {
    id: "english",
    language: LanguageEnumLong.ENGLISH,
    code: LanguageEnumShort.EN,
  },
  {
    id: "polish",
    language: LanguageEnumLong.POLISH,
    code: LanguageEnumShort.PL,
  },
  {
    id: "spanish",
    language: LanguageEnumLong.SPANISH,
    code: LanguageEnumShort.ES,
  },
];
