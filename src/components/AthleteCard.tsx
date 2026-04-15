import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Athlete } from '@/src/types/athlete';
import { calculateScore } from '@/src/utils/calculateScore';

export default function AthleteCard({ athlete, onPress }: {
  athlete: Athlete;
  onPress: () => void;
}) {
  const score = calculateScore(athlete.stats);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{athlete.name}</Text>
      <Text>{athlete.sport} • {athlete.position}</Text>
      <Text>Age: {athlete.age}</Text>
      <Text style={styles.score}>Score: {score}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});