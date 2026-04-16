import { useShortlist } from '../context/ShortlistContext';
import { athletes } from '../data/athletes';
import { calculateScore } from '../utils/calculateScore';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  ScreenWrapper  from '@/src/components/ScreenWrapper';
import { Image } from 'react-native';

export default function ProfileScreen({ id }: { id: string }) {
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
    <ScreenWrapper>
    <View style={styles.container}>
      {/* 👤 Avatar */}
      <Image source={athlete.image} style={styles.avatar}/>

      {/* 🧑 Name & Info */}
      <Text style={styles.name}>{athlete.name}</Text>
      <Text style={styles.info}>
        {athlete.sport} • {athlete.position}
      </Text>
      <Text style={styles.info}>Age: {athlete.age}</Text>

      {/* 📦 Stats Box */}
      <View style={styles.statsBox}>
        <Text>Speed: {athlete.stats.speed}</Text>
        <Text>Stamina: {athlete.stats.stamina}</Text>
        <Text>Accuracy: {athlete.stats.accuracy}</Text>
      </View>

      {/* 📈 Progress */}
      <View style={styles.progressBar}>
        <View
          style={[styles.progressFill, { width: `${score}%` }]}
        />
      </View>

      <Text style={styles.score}>
        Readiness Score: {score}
      </Text>

      {/* ⭐ Button */}
      <TouchableOpacity
        onPress={() => toggleShortlist(athlete.id)}
        style={[
          styles.button,
          { backgroundColor: isShortlisted ? 'red' : 'black' },
        ]}
      >
        <Text style={styles.buttonText}>
          {isShortlisted
            ? 'Remove from Shortlist'
            : 'Add to Shortlist'}
        </Text>
      </TouchableOpacity>
    </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
},
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  statsBox: {
    marginTop: 20,
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    backgroundColor: 'green',
  },
  score: {
    marginTop: 8,
  },
  button: {
    marginTop: 20,
    padding: 14,
    width: '100%',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});