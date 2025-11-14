import type { Metadata } from 'next';
// import Header from '@/components/common/Header';
import Header from '../../components/common/Header';
import AboutUsInteractive from './components/AboutUsInteractive';

export const metadata: Metadata = {
  title: 'About Us - BTC Linx Enterprise',
  description: 'Learn about BTC Linx Enterprise\'s mission to transform businesses through intelligent automation. Meet our leadership team, explore our technology philosophy, and discover career opportunities in AI and enterprise solutions.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <AboutUsInteractive />
      </div>
    </main>
  );
}