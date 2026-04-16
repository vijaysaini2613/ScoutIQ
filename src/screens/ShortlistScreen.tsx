import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useShortlist } from '@/src/context/ShortlistContext';
import { athletes } from '@/src/data/athletes';
import { calculateScore } from '@/src/utils/calculateScore';

export default function ShortlistScreen() {
  const { shortlist, toggleShortlist } = useShortlist();

  const shortlistedAthletes = athletes.filter((a) =>
    shortlist.includes(a.id)
  );

  const avgScore =
    shortlistedAthletes.length > 0
      ? Math.round(
          shortlistedAthletes.reduce(
            (sum, a) => sum + calculateScore(a.stats),
            0
          ) / shortlistedAthletes.length
        )
      : 0;

  return (
    <View style={styles.container}>
      

      {/* 🔹 Summary Row */}
      <View style={styles.summaryRow}>
        <Text>Total: {shortlistedAthletes.length}</Text>
        <Text>Average Score: {avgScore}</Text>
      </View>

      {/* 🔹 List */}
      <FlatList
        data={shortlistedAthletes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const score = calculateScore(item.stats);

          return (
            <View style={styles.card}>
              {/* Left Side */}
              <Text style={styles.name}>{item.name}</Text>

              {/* Right Side */}
              <View style={styles.right}>
                <Text style={styles.score}>Score: {score}</Text>

                <TouchableOpacity
                  onPress={() => toggleShortlist(item.id)}
                  style={styles.removeBtn}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No shortlisted athletes yet
          </Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  right: {
    alignItems: 'flex-end',
  },
  score: {
    marginBottom: 5,
  },
  removeBtn: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#ffe5e5',
    borderRadius: 6,
  },
  removeText: {
    color: 'red',
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
  },
});