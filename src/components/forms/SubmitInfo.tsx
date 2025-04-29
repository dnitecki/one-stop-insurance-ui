import { useSearchParams } from "react-router-dom";
import { ContentMapperType, QuoteFormProps } from "../../types/types";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import { formatFormTableData, handleBack } from "../../utils/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";

const SubmitInfo: React.FC<QuoteFormProps> = ({ formData, setActiveStep }) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const formContent = content?.sections.form.body[language];
  const tableData = formatFormTableData(formData, formContent);

  return (
    <div className="form-container">
      <div className="quote-header">
        <h1>{formContent?.submitHeader}</h1>
      </div>
      <table className="form-table">
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>
                <p>{item?.label}</p>
              </td>
              <td>
                <p>{item?.value}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {formData?.additionalDrivers?.length > 0 && (
        <table className="form-table">
          <tbody>
            {formData?.additionalDrivers?.map((item, index) => (
              <tr key={index}>
                <td>
                  <p>{`${formContent?.driver} ${index + 1}`}</p>
                </td>
                <td>
                  <p>{`${item?.firstName} ${item?.lastName}`}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <table className="form-table">
        <tbody>
          {formData?.vehicles?.map((item, index) => (
            <tr key={index}>
              <td>
                <p>{`${formContent?.vehicle} ${index + 1}`}</p>
              </td>
              <td>
                <p>{`${item?.year} ${item?.make} ${item?.model}`}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="form-navigation">
        <button
          className="form-nav-btn"
          type="button"
          onClick={() => {
            handleBack(setActiveStep);
          }}
        >
          <ArrowBackIcon fontSize="medium" />
          <p>{formContent?.back}</p>
        </button>
        <button className="form-nav-btn" type="button">
          <p>{formContent?.submit}</p>
          <SendIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default SubmitInfo;
