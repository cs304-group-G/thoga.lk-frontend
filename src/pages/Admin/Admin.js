

import React from 'react';
import AdminForm from './AdminForm';
import AdminDashboard from './AdminDashboard';
import { AdminProvider } from './AdminContext';

function Admin() {
  return (
    <AdminProvider>
      <div>
        <AdminForm />
        <AdminDashboard />
      </div>
    </AdminProvider>
  );
}

export default Admin;
