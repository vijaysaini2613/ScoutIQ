import { useShortlist } from '../context/ShortlistContext';
import { athletes } from '../data/athletes';
import { calculateScore } from '../utils/calculateScore';
// import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen({ id }: { id: string }) {
//const { id } = useLocalSearchParams();
const { shortlist, toggleShortlist } = useShortlist();

if (!id) {
  return <Text style={{ padding: 20 }}>Invalid athlete</Text>;
}

const athlete = athletes.find(
  (a) => a.id.toString() === id
);

if (!athlete) {
  return <Text style={{ padding: 20 }}>Athlete not found</Text>;
}

const isShortlisted = shortlist.includes(athlete.id);

  const score = calculateScore(athlete.stats);

  return (
    <View style={styles.container}>
      {/* 👤 Basic Info */}
      <Text style={styles.name}>{athlete.name}</Text>
      <Text>
        {athlete.sport} • {athlete.position}
      </Text>
      <Text>Age: {athlete.age}</Text>

      {/* 📊 Stats */}
      <View style={styles.stats}>
        <Text>Speed: {athlete.stats.speed}</Text>
        <Text>Stamina: {athlete.stats.stamina}</Text>
        <Text>Accuracy: {athlete.stats.accuracy}</Text>
      </View>

      {/* 📈 Progress Bar */}
      <View style={styles.progressBar}>
        <View
          style={[styles.progressFill, { width: `${score}%` }]}
        />
      </View>
      <Text style={{ marginTop: 5 }}>
        Readiness Score: {score}
      </Text>

      {/* ⭐ Shortlist Button */}
      <TouchableOpacity
  onPress={() => toggleShortlist(athlete.id)}
  style={{
    marginTop: 20,
    padding: 12,
    backgroundColor: isShortlisted ? 'red' : 'black',
    borderRadius: 10,
  }}
>
  <Text style={{ color: 'white', textAlign: 'center' }}>
    {isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
  </Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stats: {
    marginTop: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});