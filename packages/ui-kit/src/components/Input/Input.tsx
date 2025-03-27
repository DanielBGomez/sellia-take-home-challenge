'use client';

// Modules
import { ChangeEvent } from 'react';
import { Typography } from '@mui/material';

// Own Imports
import { InputProps } from '.';
import { Root, InputElement } from './Input.styled';
import { useParseInputIcons } from '../../hooks/useParseInputIcons';

/**
 * Input Component
 */
export const Input = ({
  id,
  name,
  label,
  placeholder,
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  readonly,
  required,
  hasError,
  isValid,
  value,
  onChange = (e: ChangeEvent<HTMLInputElement>) => {},
  inputRef,
  inputProps,
  rootProps,
  icons = [],
}: InputProps) => {
  // Hooks
  const { leftSpace, rightSpace, leftIcons, rightIcons } = useParseInputIcons({
    icons,
    disabled,
  });

  // Render
  return (
    <Root
      {...rootProps}
      data-id={id}
      className="flex flex-col gap-1"
    >
      {label && (
        <Typography variant="smallest">
          {label}
          {required && (
            <Typography
              variant="smallest"
              component="b"
              color="error"
              sx={{ paddingLeft: 0.25 }}
            >
              *
            </Typography>
          )}
        </Typography>
      )}
      <div className="input--wrapper flex w-full relative">
        {leftIcons}
        <InputElement
          {...inputProps}
          id={id}
          name={name}
          ref={inputRef}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          readOnly={readonly}
          hasError={hasError}
          isValid={isValid}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          sx={{
            paddingLeft: `${leftSpace}px`,
            paddingRight: `${rightSpace}px`,
          }}
        />
        {rightIcons}
      </div>
    </Root>
  );
};
