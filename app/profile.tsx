import { useLocalSearchParams } from 'expo-router';
import ProfileScreen from '@/src/screens/ProfileScreen';

export default function Profile() {
  const { id } = useLocalSearchParams();

  // Handle case where id can be string | string[]
  const athleteId = Array.isArray(id) ? id[0] : id;

  return <ProfileScreen id={athleteId as string} />;
}