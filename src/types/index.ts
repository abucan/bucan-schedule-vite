/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Control } from 'react-hook-form';
import type { LucideIcon } from 'lucide-react';
import { type FormFieldType } from '@/constants';

export type FormFieldProps = {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  icon?: LucideIcon;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  type?: string;
  isLoading?: boolean;
  renderSkeleton?: (field: any) => React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  value?: string;
};

export type SubmitButtonProps = {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
};
