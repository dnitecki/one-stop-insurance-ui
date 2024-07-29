import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";

const Agency = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  return (
    <div className="card">
      <p>{ContentMapper.sections["agency"].body[language]}</p>
    </div>
  );
};

export default Agency;
