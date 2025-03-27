// Modules
import { useEffect } from 'react';

// Local Imports
import { useExperienceStore } from '../../stores';

/**
 * Use System Theme - Custom Hook
 * Checks if the system has a preferred color scheme
 * and use it as the theme.
 *
 * @todo Prevent change if the user explicity has set
 * a theme.
 */
export const useSystemTheme = () => {
  const changeTheme = useExperienceStore((state) => state.changeTheme);

  useEffect(() => {
    if (!window.matchMedia) return;
    // Default Value
    changeTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );
  }, [changeTheme]);
};
