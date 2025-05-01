'use client';

import { Provider } from 'react-redux';
import { store , persistor } from '../state/store';
import { useEffect } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { useState } from 'react'


export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
      }, [])
    

  return (  
  <Provider store={store}>
    {isClient ? (
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    ) : (
      children
    )}
  </Provider>)
}