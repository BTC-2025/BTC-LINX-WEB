import type { Metadata } from 'next';
// import Header from '@/components/common/Header';
import Header from '../../components/common/Header';
import IndustriesInteractive from './components/IndustriesInteractive';

export const metadata: Metadata = {
  title: 'Industries We Serve - BTC Linx Enterprise',
  description: 'Discover how BTC Linx transforms operations across BPO, Finance, Telecom, Healthcare, Education, and E-commerce with AI-powered automation solutions tailored to your industry needs.',
};

export default function IndustriesWeServePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <IndustriesInteractive />
      </div>
    </main>
  );
}