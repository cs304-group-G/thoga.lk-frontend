

import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  const setForm = (data) => {
    setFormData(data);
  };

  return (
    <AdminContext.Provider value={{ formData, setForm }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within an AdminProvider');
  }
  return context;
};
