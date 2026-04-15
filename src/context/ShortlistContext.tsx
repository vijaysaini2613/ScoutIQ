import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ShortlistContextType {
  shortlist: string[];
  toggleShortlist: (id: string) => void;
}

const ShortlistContext = createContext<ShortlistContextType | undefined>(undefined);

export const ShortlistProvider = ({ children }: any) => {
  const [shortlist, setShortlist] = useState<string[]>([]);

  // Load from storage
  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem('shortlist');
      if (data) setShortlist(JSON.parse(data));
    };
    loadData();
  }, []);

  // Save to storage
  useEffect(() => {
    AsyncStorage.setItem('shortlist', JSON.stringify(shortlist));
  }, [shortlist]);

  const toggleShortlist = (id: string) => {
    setShortlist(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <ShortlistContext.Provider value={{ shortlist, toggleShortlist }}>
      {children}
    </ShortlistContext.Provider>
  );
};

export const useShortlist = () => {
  const context = useContext(ShortlistContext);
  if (!context) throw new Error('useShortlist must be used within provider');
  return context;
};