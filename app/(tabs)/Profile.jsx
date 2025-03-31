import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Make sure to import from the correct package

const Profile = () => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [jobDomain, setJobDomain] = useState('');
  const [city, setCity] = useState('');

  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      console.log('Image selection was canceled');
    }
  };

  const handleSubmit = () => {
    // Perform any validation or submission handling
    const userData = {
      firstName,
      lastName,
      jobDomain,
      age,
      city,
      image,
    };
    console.log('User Data:', userData);
    // You can add your submission logic here (e.g., API call)
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Image Picker */}
        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imageButtonText}>Select Profile Image</Text>
          )}
        </TouchableOpacity>

        {/* First Name Input */}
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter first name"
        />

        {/* Last Name Input */}
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter last name"
        />

        {/* Age Input */}
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter age"
          keyboardType="numeric"
        />

        {/* Job Domain Input */}
        <Text style={styles.label}>Job Domain</Text>
        <TextInput
          style={styles.input}
          value={jobDomain}
          onChangeText={setJobDomain}
          placeholder="Enter job domain"
        />

        {/* City Input */}
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Enter city"
        />

        {/* Submit Button */}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  imageButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    textAlign: 'center',
    color: '#666',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

export default Profile;