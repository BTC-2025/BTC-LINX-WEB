import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AICallingSolutionsInteractive from './components/AICallingSolutionsInteractive';

export const metadata: Metadata = {
  title: 'AI Calling Solutions - BTC Linx Enterprise',
  description: 'Transform your BPO operations with intelligent AI calling platform. Automate workflows, enhance productivity, and deliver exceptional customer experiences at scale with 95% cost reduction.',
};

export default function AICallingSolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <AICallingSolutionsInteractive />
      </div>
    </main>
  );
}