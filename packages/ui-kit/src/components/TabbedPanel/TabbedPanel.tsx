// Modules
import { PropsWithChildren, useEffect, useState } from 'react';

// Own Imports
import { TabbedPanelProps } from '.';
import { Box } from '@mui/material';

// Own Imports
import { Tab } from './TabbedPanel.styled';

/**
 * TabbedPanel Component
 */
export const TabbedPanel = ({
  tabs,
  header,
  footer,
  onChange,
  sx,
  children,
}: PropsWithChildren<TabbedPanelProps>) => {
  // States
  const [activeTab, setActiveTab] = useState('');

  // Effects
  /**
   * Select first tab as active by default.
   */
  useEffect(() => {
    if (tabs.length) setActiveTab(tabs[0].value);
  }, [tabs]);

  // Render
  return (
    <Box sx={sx}>
      <div className="flex align-stretch justify-stretch">
        {tabs.map(({ label, value, icon }) => (
          <Tab
            key={value}
            active={activeTab === value}
          >
            {icon || ''}
            {label}
          </Tab>
        ))}
      </div>
      {header || ''}
      {children}
      {footer || ''}
    </Box>
  );
};
