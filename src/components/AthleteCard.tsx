import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Athlete } from '@/src/types/athlete';
import { calculateScore } from '@/src/utils/calculateScore';

export default function AthleteCard({
  athlete,
  onPress,
}: {
  athlete: Athlete;
  onPress: () => void;
}) {
  const score = calculateScore(athlete.stats);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9} // 👈 smoother press (no harsh effect)
    >
      {/* 🔹 LEFT SIDE */}
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{athlete.name}</Text>
        <Text style={styles.subtitle}>
          {athlete.sport} • {athlete.position}
        </Text>
        <Text style={styles.subtitle}>Age: {athlete.age}</Text>
        <Text style={styles.score}>Score: {score}</Text>
      </View>

      {/* 🔹 RIGHT SIDE IMAGE */}
      <Image
        source={athlete.image}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // 👈 IMPORTANT CHANGE
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    color: '#666',
    marginBottom: 4,
  },
  score: {
    marginTop: 6,
    fontWeight: '600',
    color: '#4CAF50',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10, // 👈 NOT circle (as you wanted)
    marginLeft: 10,
  },
});