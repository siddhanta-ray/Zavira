
// pages/index.js
import Head from 'next/head';
import WelcomeSection from '@/app/components/WelcomeSection';
import AvailableContracts from '@/app/components/AvailableContracts';
import ActiveContracts from '@/app/components/ActiveContracts';
import ContractsHistory from '@/app/components/ContractHistory';
import Footer from '../components/Footer';

export default function contractor() {
  return (
    <div className="min-h-screen mt-20 ">
      <Head>
        <title>Zavira - Contractor Dashboard</title>
        <meta name="description" content="Contractor dashboard for waste management services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container mx-auto rounded-3xl px-4 py-8 space-y-8 bg-[linear-gradient(to_bottom,_#EEFFC5,_#D4F1A4,_#7FB069,_#4A7C59)]">
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
    </div>
  );
}