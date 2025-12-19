export const FORM_FIELD_TYPE = {
  INPUT: 'input',
  CHECKBOX: 'checkbox',
  TEXTAREA: 'textarea',
  PHONE_INPUT: 'phone_input',
  DATE_PICKER: 'date_picker',
  SELECT: 'select',
  SKELETON: 'skeleton',
} as const;

export type FormFieldType =
  (typeof FORM_FIELD_TYPE)[keyof typeof FORM_FIELD_TYPE];
