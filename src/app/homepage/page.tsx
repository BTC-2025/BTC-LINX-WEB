import type { Metadata } from 'next';
import HomepageWrapper from './HomepageWrapper';

export const metadata: Metadata = {
  title: 'Homepage - BTC Linx Enterprise',
  description: 'Intelligent automation...',
};

export default function Homepage() {
  return <HomepageWrapper />;
}
