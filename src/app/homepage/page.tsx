import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Homepage - BTC Linx Enterprise',
  description: 'Intelligent automation that adapts to your business. Transform your enterprise with AI-powered solutions that deliver measurable results across industries.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HomepageInteractive />
      </div>
    </main>
  );
}