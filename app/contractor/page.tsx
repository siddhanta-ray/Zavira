
// pages/index.js
import Head from 'next/head';
import WelcomeSection from '@/app/components/WelcomeSection';
import AvailableContracts from '@/app/components/AvailableContracts';
import ActiveContracts from '@/app/components/ActiveContracts';
import ContractsHistory from '@/app/components/ContractHistory';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Head>
        <title>Zavira - Contractor Dashboard</title>
        <meta name="description" content="Contractor dashboard for waste management services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <WelcomeSection />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AvailableContracts />
          </div>
          <div>
            <ActiveContracts />
          </div>
        </div>
        
        <ContractsHistory />
      </main>

      <Footer />
    </div>
  );
}