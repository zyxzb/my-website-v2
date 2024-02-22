'use client';

import {
  useEffect,
  // useState
} from 'react';
import { useThemeStore } from '@/lib/store.theme';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // const [mounted, setMounted] = useState(false);
  const theme = useThemeStore((store) => store.theme);

  useEffect(() => {
    try {
      const localTheme = JSON.parse(localStorage.getItem('theme') || '');
      if (localTheme) {
        document.documentElement.setAttribute(
          'data-mode',
          localTheme.state.theme,
        );
        document.documentElement.className = localTheme.state.theme;
      }
    } catch (err) {
      console.log('Error loading the color theme');
    }
    // setMounted(true);
  }, [theme]);

  // Loader before page loaded
  // better for SSR or client APP

  // if (!mounted) {
  //   return (
  //     <div
  //       className='flex h-screen items-center justify-center bg-darkBlue text-white'
  //       aria-label='Loading...'
  //       role='status'
  //     >
  //       <span className='text-4xl font-medium'>Loading...</span>
  //     </div>
  //   );
  // }

  return <>{children}</>;
};

export default ThemeProvider;
