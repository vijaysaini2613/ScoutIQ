import { Tabs } from 'expo-router';
import { Image } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="discover"
        options={{
          title: 'ScoutIQ',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/discover.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#000' : '#888',
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="shortlist"
        options={{
          title: 'Shortlist',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/shortlist.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#000' : '#888',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}