import { EMPTY_STRING } from "../constants/constants";
import { QuoteFormDataType } from "../types/types";

export const formatFormTableData = (
  formData: QuoteFormDataType,
  content: any
) => {
  const tableData = (
    Object.keys(formData) as Array<keyof QuoteFormDataType>
  ).flatMap((key): { label: string; value: string } | [] => {
    const value = formData[key];

    if (!Array.isArray(value)) {
      if (key !== "type") {
        return {
          label: content?.[key as string] || EMPTY_STRING,
          value: value,
        };
      }
    }
    return [];
  });

  return tableData;
};

export const handleBack = (
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
) => {
  setActiveStep((prevStep) => prevStep - 1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const handleNext = (
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  formRef: React.RefObject<HTMLFormElement>
) => {
  if (formRef.current) {
    if (formRef.current.checkValidity()) {
      setActiveStep((prevStep) => prevStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      formRef.current.reportValidity();
    }
  }
};
