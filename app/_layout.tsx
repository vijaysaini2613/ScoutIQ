import { Slot } from 'expo-router';
import { ShortlistProvider } from '../src/context/ShortlistContext';

export default function RootLayout() {
  return (
    <ShortlistProvider>
      <Slot />
    </ShortlistProvider>
  );
}