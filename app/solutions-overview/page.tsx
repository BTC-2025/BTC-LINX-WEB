import type { Metadata } from 'next';
// import Header from '@/components/common/Header';
import Header from '../../components/common/Header';
import SolutionsInteractive from './components/SolutionsInteractive';

export const metadata: Metadata = {
  title: 'Solutions Overview - BTC Linx Enterprise',
  description: 'Comprehensive showcase of AI-powered enterprise solutions including AI Calling & BPO Automation, Network Automation, Data Security, Business Intelligence, and Cloud Infrastructure with interactive ROI calculators and comparison tools.',
};

export default function SolutionsOverviewPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SolutionsInteractive />
    </main>
  );
}