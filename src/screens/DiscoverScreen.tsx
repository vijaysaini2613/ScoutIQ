import AthleteCard from '../../src/components/AthleteCard';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import { athletes } from '../../src/data/athletes';

export default function DiscoverScreen() {
  const [selectedSport, setSelectedSport] = useState('All');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const router = useRouter();
  const sports = ['All', 'Cricket', 'Football', 'Basketball'];

  // ⚡ Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔍 Filter logic
  const filteredAthletes = athletes.filter(
    (a) =>
      (selectedSport === 'All' || a.sport === selectedSport) &&
      a.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8', padding: 16 }}>
      <Text style={{
         fontSize: 22,
         fontWeight: '700',
         marginBottom: 10
      }}>
       Discover Athletes
      </Text>

      {/* 🔍 Search */}
      <TextInput
        placeholder="Search athletes..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}
      />

      {/* 🔢 Result Count */}
      <Text style={{ color: '#666', marginBottom: 10 }}>
        {filteredAthletes.length} results
      </Text>

      {/* 🎯 Filters */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport}
            onPress={() => setSelectedSport(sport)}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 12,
              marginRight: 8,
              borderRadius: 20,
              backgroundColor:
                selectedSport === sport ? '#000' : '#ddd',
            }}
          >
            <Text
              style={{
                color: selectedSport === sport ? '#fff' : '#000',
              }}
            >
              {sport}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 📋 List */}
      <FlatList
        data={filteredAthletes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AthleteCard
            athlete={item}
            onPress={() => router.push(`/profile?id=${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No athletes found
          </Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}