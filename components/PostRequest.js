import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TripsContext } from '../context/TripsContext';

const API_KEY = 'f2af45e829f6418f908c29cadb94a5ef';

const PostRequestScreen = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [filteredCitiesOrigin, setFilteredCitiesOrigin] = useState([]);
  const [filteredCitiesDestination, setFilteredCitiesDestination] = useState([]);

  const fetchCitySuggestions = async (query, type) => {
    if (query.length < 3) return;
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${API_KEY}&limit=5&countrycode=ca`
      );
      const data = await response.json();

      if (data.results) {
        const suggestions = data.results.map((result) => result.formatted);
        if (type === 'origin') setFilteredCitiesOrigin(suggestions);
        if (type === 'destination') setFilteredCitiesDestination(suggestions);
      }
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
    }
  };

  const handleOriginChange = (text) => {
    setOrigin(text);
    fetchCitySuggestions(text, 'origin');
  };

  const handleDestinationChange = (text) => {
    setDestination(text);
    fetchCitySuggestions(text, 'destination');
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = `${selectedDate.getDate()}/${
        selectedDate.getMonth() + 1
      }/${selectedDate.getFullYear()}`;
      setDate(formattedDate);
    }
  };

  const { addTrip } = useContext(TripsContext); // Access addTrip from TripsContext

  const handlePost = () => {
    if (!origin || !destination || !date || !seats) {
      Alert.alert('Error', 'Please fill all fields!');
    } else {
      const newTrip = { origin, destination, date, seats };
      addTrip(newTrip); // Add trip to the context
      Alert.alert('Success', 'Trip Posted Successfully!');
      navigation.navigate('TripsPage'); // Navigate to TripsPage
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post a Trip</Text>

      {/* Autocomplete for Origin */}
      <View style={styles.autocompleteContainer}>
        <TextInput
          style={styles.input}
          placeholder="Origin"
          value={origin}
          onChangeText={handleOriginChange}
        />
        {filteredCitiesOrigin.length > 0 && (
          <FlatList
            data={filteredCitiesOrigin}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setOrigin(item);
                  setFilteredCitiesOrigin([]);
                }}
              >
                <Text style={styles.autocompleteItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* Autocomplete for Destination */}
      <View style={styles.autocompleteContainer}>
        <TextInput
          style={styles.input}
          placeholder="Destination"
          value={destination}
          onChangeText={handleDestinationChange}
        />
        {filteredCitiesDestination.length > 0 && (
          <FlatList
            data={filteredCitiesDestination}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setDestination(item);
                  setFilteredCitiesDestination([]);
                }}
              >
                <Text style={styles.autocompleteItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerText}>
          {date || 'Select a Date'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          minimumDate={new Date()}
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Seats Input */}
      <TextInput
        style={styles.input}
        placeholder="Number of Seats"
        value={seats}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9]/g, '');
          setSeats(numericValue);
        }}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>Post Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  autocompleteContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  autocompleteItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  datePicker: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  datePickerText: {
    color: '#555',
  },
  button: {
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostRequestScreen;
