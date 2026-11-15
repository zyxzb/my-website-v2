'use client';

import { useLayoutEffect } from 'react';
import type { ReactNode } from 'react';
import { useThemeStore } from '@/lib/store.theme';

const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  useLayoutEffect(() => {
    const applyTheme = (): void => {
      const theme =
        useThemeStore.getState().theme === 'light' ? 'light' : 'dark';
      const root = document.documentElement;

      root.setAttribute('data-theme-changing', '');
      root.setAttribute('data-mode', theme);
      root.style.colorScheme = theme;
      // Apply the new palette before restoring hover and menu transitions.
      void root.offsetHeight;
      root.removeAttribute('data-theme-changing');
    };

    applyTheme();

    return useThemeStore.subscribe(applyTheme);
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
