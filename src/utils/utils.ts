import { QuoteTypeEnum } from "../enums/formEnums";
import { QuoteFormDataType } from "../types/types";

export const formatFormTableData = (
  formData: QuoteFormDataType,
  content: any
) => {
  const tableData = [
    {
      label: content?.firstName,
      value: formData?.firstName,
    },
    {
      label: content?.lastName,
      value: formData?.lastName,
    },
    {
      label: content?.email,
      value: formData?.email,
    },
    {
      label: content?.phone,
      value: formData?.phone,
    },
    {
      label: content?.dateOfBirth,
      value: formData?.dateOfBirth,
    },
    {
      label: content?.driversLicenseNum,
      value: formData?.driversLicenseNum,
    },
    {
      label: content?.occupation,
      value: formData?.occupation,
    },
    {
      label: content?.street,
      value: formData?.street,
    },
    {
      label: content?.city,
      value: formData?.state,
    },
    {
      label: content?.country,
      value: formData?.country,
    },
  ];
  return tableData;
};
