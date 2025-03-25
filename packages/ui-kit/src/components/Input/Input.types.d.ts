// Modules
import { ChangeEvent, HTMLAttributes, ReactElement, RefObject } from 'react';

// Interfaces
export interface InputProps extends InputElementProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: any;
  readonly?: boolean;
  required?: boolean;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<any>;
  inputProps?: HTMLAttributes<HTMLInputElement>;
  rootProps?: HTMLAttributes<HTMLDivElement>;
  icons?: InputIcon[];
}

export interface InputElementProps {
  isValid?: boolean;
  hasError?: boolean;
  disabled?: boolean;
}

export interface InputIcon {
  key?: string;
  size?: number;
  disabled?: boolean;
  component: ReactElement<any>;
  position: 'left' | 'right';
  onClick?: () => void;
}
