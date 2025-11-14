"use client";

// import Header from '@/components/common/Header';
import Header from '../../components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export default function HomepageWrapper() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HomepageInteractive />
      </div>
    </main>
  );
}
