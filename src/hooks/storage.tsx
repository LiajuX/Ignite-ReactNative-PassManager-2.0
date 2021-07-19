import React, { 
  createContext, 
  ReactNode, 
  useContext 
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StorageProviderProps {
  children: ReactNode;
}

interface NewLoginData {
  id: string;
  title: string;
  email: string;
  password: string;
}

interface StorageContextData {
  getStorageData(): Promise<string | null>;
  setStorageData(newLoginData: NewLoginData): Promise<void>;
}

const StorageContext = createContext({} as StorageContextData);

function StorageProvider({ children }: StorageProviderProps) {
  const dataKey = '@passmanager:logins';

  async function getStorageData() {
    return await AsyncStorage.getItem(dataKey);
  }

  async function setStorageData(newLoginData: NewLoginData) {
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    const formattedData = [
      ...currentData,
      newLoginData
    ];

    await AsyncStorage.setItem(dataKey, JSON.stringify(formattedData));
  }

  return (
    <StorageContext.Provider value={{
      getStorageData,
      setStorageData,
    }}>
      { children }
    </StorageContext.Provider>
  );
}

function useStorageData() {
  const context = useContext(StorageContext);

  return context;
}

export { StorageProvider, useStorageData };
