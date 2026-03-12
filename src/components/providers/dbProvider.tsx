'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '@/db/db';

const DbStatusContext = createContext({ isDbReady: false, error: null });

export const DbProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const [status, setStatus] = useState({ isDbReady: false, error: null });

  useEffect(() => {
    db.open()
      .then(() => setStatus({ isDbReady: true, error: null }))
      .catch((err) => setStatus({ isDbReady: false, error: err.message }));
  }, []);

  return (
    <DbStatusContext.Provider value={status}>
      {children}
    </DbStatusContext.Provider>
  );
};

export const useDbStatus = () => useContext(DbStatusContext);