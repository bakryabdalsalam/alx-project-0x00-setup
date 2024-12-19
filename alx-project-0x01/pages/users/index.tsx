import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Users: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-semibold">Users Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Users;