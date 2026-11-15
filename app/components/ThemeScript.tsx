'use client';

import { useSyncExternalStore } from 'react';

const subscribe = (): (() => void) => (): void => {};
const getSnapshot = (): boolean => false;
const getServerSnapshot = (): boolean => true;

const themeScript = `
(() => {
  let theme = 'dark';

  try {
    const savedTheme = JSON.parse(localStorage.getItem('theme') || 'null');
    if (savedTheme?.state?.theme === 'light') {
      theme = 'light';
    }
  } catch {}

  document.documentElement.setAttribute('data-mode', theme);
  document.documentElement.style.colorScheme = theme;
})();
`;

const ThemeScript = (): React.JSX.Element | null => {
  // Keep the bootstrap in the initial document, not in client-side navigations.
  const isInitialDocument = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isInitialDocument) {
    return null;
  }

  return (
    <script id='theme-init' dangerouslySetInnerHTML={{ __html: themeScript }} />
  );
};

export default ThemeScript;
