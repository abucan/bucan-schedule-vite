/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ElementType } from 'react';
import type { E164Number } from 'libphonenumber-js';
import { Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FORM_FIELD_TYPE } from '@/constants';
import type { FormFieldProps } from '@/types';

import { Checkbox } from '../ui/checkbox';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const RenderInput = ({
  field,
  props,
}: {
  field: any;
  props: FormFieldProps;
}) => {
  const Icon: ElementType | undefined = props.icon;
  switch (props.fieldType) {
    case FORM_FIELD_TYPE.INPUT:
      return (
        <div className='flex rounded-md border items-start justify-center'>
          {Icon && <Icon width={24} className='ml-2 mr-1.5 self-center' />}
          <FormControl>
            <Input
              {...field}
              placeholder={props.placeholder}
              disabled={props.disabled}
              className='shad-input'
              type={props?.type}
              onKeyDown={props.onKeyDown}
            />
          </FormControl>
          {props.isLoading && (
            <Loader2 className='animate-spin mx-2 h-5 w-5 self-center' />
          )}
        </div>
      );
    case FORM_FIELD_TYPE.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            placeholder={props.placeholder}
            defaultCountry='HR'
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className='input-phone'
          />
        </FormControl>
      );
    case FORM_FIELD_TYPE.DATE_PICKER:
      return (
        <div className='flex items-center justify-center rounded-md border border-dark-500 bg-dark-400'></div>
      );
    case FORM_FIELD_TYPE.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    case FORM_FIELD_TYPE.SELECT:
      return (
        <FormControl>
          <Select
            onValueChange={props.onValueChange}
            defaultValue={props.value}
          >
            <FormControl>
              <SelectTrigger className='shad-select-trigger'>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{props.children}</SelectContent>
          </Select>
        </FormControl>
      );
    case FORM_FIELD_TYPE.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            className='shad-textArea'
            disabled={props.disabled}
            {...field}
          />
        </FormControl>
      );
    case FORM_FIELD_TYPE.CHECKBOX:
      return (
        <FormControl>
          <div className='flex items-center gap-4'>
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className='checkbox-label'>
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};

export const CustomFormField = (props: FormFieldProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FORM_FIELD_TYPE.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className='text-red-400' />
        </FormItem>
      )}
    />
  );
};
