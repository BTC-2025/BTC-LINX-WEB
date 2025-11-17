import type { Metadata } from 'next';
import HomepageWrapper from './HomepageWrapper';

export const metadata: Metadata = {
  title: 'BTC Linx Enterprise - AI-Powered Automation Platform',
  description: 'Enterprise-grade intelligent automation solutions transforming business operations with AI-driven connectivity and advanced analytics.',
};

export default function Homepage() {
  return <HomepageWrapper />;
}