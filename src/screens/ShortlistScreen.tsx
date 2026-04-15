import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useShortlist } from '@/src/context/ShortlistContext';
import { athletes } from '@/src/data/athletes';
import { calculateScore } from '@/src/utils/calculateScore';

export default function ShortlistScreen() {
  const { shortlist, toggleShortlist } = useShortlist();

  const shortlistedAthletes = athletes.filter(a =>
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
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Total: {shortlistedAthletes.length}</Text>
      <Text>Average Score: {avgScore}</Text>

      <FlatList
        data={shortlistedAthletes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, backgroundColor: '#eee', marginVertical: 6 }}>
            <Text>{item.name}</Text>
            <Text>Score: {calculateScore(item.stats)}</Text>

            <TouchableOpacity onPress={() => toggleShortlist(item.id)}>
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 20, textAlign: 'center' }}>
            No shortlisted athletes yet
          </Text>
        }
      />
    </View>
  );
}