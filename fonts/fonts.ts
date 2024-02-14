import localFont from 'next/font/local';

export const inconsolata = localFont({
  src: [
    {
      path: './Inconsolata-Regular.ttf',
      weight: '200',
      style: 'ExtraLight',
    },
    {
      path: './Inconsolata-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inconsolata-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});
