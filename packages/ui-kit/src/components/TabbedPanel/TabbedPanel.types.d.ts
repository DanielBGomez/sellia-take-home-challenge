// Modules
import { ReactElement } from 'react';
import { SxProps } from '@mui/material';

// Interfaces
export interface TabbedPanelProps {
  tabs: Tab[];
  header?: ReactElement;
  footer?: ReactElement;
  onChange?: (value: string) => void;
  sx?: SxProps;
}

export interface Tab {
  label: string;
  value: string;
  icon?: ReactElement;
}

export interface TabElement {
  active: boolean;
}
