"use client";

import Header from '../../components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export default function HomepageWrapper() {
  return (
    <main className="min-h-screen bg-background antialiased overflow-hidden">
      <Header />
      <div className="pt-16">
        <HomepageInteractive />
      </div>
    </main>
  );
}