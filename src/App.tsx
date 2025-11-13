import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import GreetingRevenueCard from './components/GreetingRevenueCard';
import SuccessRateCard from './components/SuccessRateCard';
import PaymentIssuesCard from './components/PaymentIssuesCard';
import Messages from './components/Messages';
import logo from './assets/profile.jpg';
import { revenueData, successData, issuesData, messages } from './data/dashboardData';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-[1440px] h-[1134px] bg-gray-50">
      {/* Sidebar - Fixed position matching Figma */}
      <Sidebar />

      {/* Secondary Content */}
      <div className="ml-[243px] w-[1197px] h-[1134px] flex flex-col overflow-hidden bg-white">
        {/* Header */}
        <Header logo={logo} />

        {/* Body */}
        <main className="flex-1 overflow-y-auto p-6 pt-26 space-y-6 flex">
          {/* Left Column: Revenue + Stats Row */}
          <div className="flex-1 pr-6">
            {/* Greeting and Revenue Card */}
            <GreetingRevenueCard revenueData={revenueData} />

            {/* Stats Row: Success Rate + Payment Issues */}
            <div className="grid grid-cols-2 gap-6">
              {/* Success Rate */}
              <SuccessRateCard successData={successData} />

              {/* Payment Issues */}
              <PaymentIssuesCard issuesData={issuesData} />
            </div>
          </div>

          {/* Right Column: Messages - Tall panel */}
          <Messages messages={messages} />
        </main>
      </div>
    </div>
  );
};

export default App;