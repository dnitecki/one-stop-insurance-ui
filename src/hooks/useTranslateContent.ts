import { useSearchParams } from "react-router-dom";
import { LanguageEnumShort, SeachParamEnum } from "../enums/languageEnums";
import OverviewContentMapper from "../content/overviewContentMapper.json";
import { ContentMapperType, TranslateContentReturnType } from "../types/types";
import { ContentSectionEnum } from "../enums/enums";

const useTranslateContent = (
  section?: ContentSectionEnum
): TranslateContentReturnType => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const contentMapper: ContentMapperType = OverviewContentMapper;
  const content = contentMapper?.sections[section]?.body[language] ?? {};
  return {
    content,
    language: language as LanguageEnumShort,
  };
};

export default useTranslateContent;
