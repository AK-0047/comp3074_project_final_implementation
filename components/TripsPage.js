import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import theme from '../utils/theme';
import { TripsContext } from '../context/TripsContext'; // Import context

const TripsPageScreen = () => {
  const { trips } = useContext(TripsContext); // Access trips from context

  const renderTrip = ({ item }) => (
    <View style={styles.tripCard}>
      <Text style={styles.tripDetail}>
        <Text style={styles.label}>Origin: </Text>
        {item.origin}
      </Text>
      <Text style={styles.tripDetail}>
        <Text style={styles.label}>Destination: </Text>
        {item.destination}
      </Text>
      <Text style={styles.tripDetail}>
        <Text style={styles.label}>Date: </Text>
        {item.date}
      </Text>
      <Text style={styles.tripDetail}>
        <Text style={styles.label}>Seats: </Text>
        {item.seats}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Trips</Text>
      <FlatList
        data={trips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTrip}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: theme.colors.textPrimary,
  },
  tripCard: {
    backgroundColor: '#007BFF', // Updated color for better UI
    borderRadius: 8,
    padding: 20, // More padding
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  tripDetail: {
    fontSize: 16, // Updated for better readability
    marginBottom: 5,
    color: '#fff', // White color for contrast
  },
  label: {
    fontWeight: 'bold',
    color: '#fff', // White for contrast
  },
});


export default TripsPageScreen;
