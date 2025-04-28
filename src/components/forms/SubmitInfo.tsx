import { useSearchParams } from "react-router-dom";
import { ContentMapperType, QuoteFormProps } from "../../types/types";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import { formatFormTableData } from "../../utils/utils";

const SubmitInfo: React.FC<QuoteFormProps> = ({ formData }) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const formContent = content?.sections.form.body[language];
  const tableData = formatFormTableData(formData, formContent);

  return (
    <div className="form-container">
      <div className="quote-header">
        <h1>Review and Submit</h1>
      </div>
      <table className="form-table">
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmitInfo;
