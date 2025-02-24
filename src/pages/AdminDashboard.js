import React from 'react';

const AdminDashboard = () => {
  // Mock data for admin stats (replace with API in real apps)
  const stats = [
    { label: 'Total Sales', value: '$10,000' },
    { label: 'Products Sold', value: '150' },
    { label: 'New Users', value: '25' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{stat.label}</h2>
            <p className="text-lg">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
