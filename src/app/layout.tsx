"use client";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store'; // adjust the import path

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
