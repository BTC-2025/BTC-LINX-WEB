import type { Metadata } from 'next';
// import Header from '@/components/common/Header';
import Header from '../../components/common/Header';
import TechnologyStackInteractive from './components/TechnologyStackInteractive';

export const metadata: Metadata = {
  title: 'Technology Stack - BTC Linx Enterprise',
  description: 'Explore our comprehensive technology ecosystem built on industry-leading partnerships including AWS, Azure, Cisco, OpenAI, and Twilio. Interactive showcase of AI capabilities, network automation tools, and enterprise security frameworks.',
};

export default function TechnologyStackPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TechnologyStackInteractive />
    </main>
  );
}