import { EMPTY_STRING } from "../constants/constants";
import { QuoteTypeEnum } from "../enums/formEnums";
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
      return {
        label: content?.[key as string] || EMPTY_STRING,
        value: value,
      };
    } else {
      return [];
    }
  });
  return tableData;
};
