import { Slot } from 'expo-router';
import { ShortlistProvider } from '../src/context/ShortlistContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ShortlistProvider>
        <Slot />
      </ShortlistProvider>
    </SafeAreaProvider>
  );
}