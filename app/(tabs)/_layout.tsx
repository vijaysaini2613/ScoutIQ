import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="discover" options={{ title: "Discover" }} />
      <Tabs.Screen name="shortlist" options={{ title: "Shortlist" }} />
    </Tabs>
  );
}