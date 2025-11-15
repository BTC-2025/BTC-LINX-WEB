import type { Metadata } from 'next';
// import HomepageWrapper from './HomepageWrapper';

import HomepageWrapper from './homepage/HomepageWrapper';

export const metadata: Metadata = {
  title: 'Homepage - BTC Linx Enterprise',
  description: 'Intelligent automation...',

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function Homepage() {
  return <HomepageWrapper />;
}
