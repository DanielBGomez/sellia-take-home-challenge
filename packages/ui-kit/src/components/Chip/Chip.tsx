// Modules
import { Chip as ChipComponent, ChipProps } from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';

/**
 * Chip Component
 *
 * @extends {@mui/material} Chip
 */
export const Chip = ({ ...additionalProps }: ChipProps) => {
  // Render
  return (
    <ChipComponent
      deleteIcon={<CloseIcon sx={{ width: 14, height: 14 }} />}
      {...additionalProps}
    />
  );
};
