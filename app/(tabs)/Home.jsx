import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground, ScrollViewBase, FlatListComponent } from 'react-native';
import FastImage from 'react-native-fast-image';
 

const Home = () => {
  return (
    <View style={styles.container}> 
      <TextInput style={styles.searchBar} placeholder="Search" />

      <Text style={styles.title}>WELCOME TO VOICE HIRING FOR ILLITERATES</Text>
        
      
      <View style={styles.jobCard}>
    <Image 
        source={{ uri: 'https://i.pinimg.com/736x/9b/96/80/9b9680f9b844da0db6646efe87830e86.jpg' }} 
        style={styles.jobImage} 
        resizeMode="cover" 
    />
    <Text style={styles.jobTitle}>Find your Jobs and Hire easily</Text>
    <Text style={styles.jobSubtitle}>Access Anytime, Anywhere</Text>
    <Text style={styles.jobDescription}>
        A Platform designed to connect many skilled workers struggle to find jobs due to illiteracy or lack of digital access. 
        we ensures easy job access for painters, drivers, caretakers, security guards,
        cooks, and many others by providing a voice-based hiring system.
    </Text>
</View> 

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={[styles.categoryCard, styles.electrican]}>
          <Text style={styles.categoryTitle}>Electrician</Text>
          <Text style={styles.categoryJobs}>3.2k Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.categoryCard, styles.plumber]}>
          <Text style={styles.categoryTitle}>Plumber</Text>
          <Text style={styles.categoryJobs}>2.8k Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.categoryCard, styles.caretaker]}>
          <Text style={styles.categoryTitle}>CareTaker</Text>
          <Text style={styles.categoryJobs}>4.2k Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryCard, styles.security]}>
          <Text style={styles.categoryTitle}>Security</Text>
          <Text style={styles.categoryJobs}>10.2k Jobs</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
     

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCard: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
},

jobImage: {
    width: '100%', 
    height: 165, 
    borderRadius: 10,
    marginBottom: 10, 
},

jobTitle: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
},

jobSubtitle: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
},

jobDescription: {
    color: '#fff',
    fontSize: 16,
    marginTop: 18,
    textAlign:"center",
},
  viewAll: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  viewAllText: {
    color: '#000000',
    fontSize: 20,
  },
  categoryCard: {
    height: 200,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    padding: 50,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryTitle: {
    fontWeight: 'bold',
  },
  categoryJobs: {
    marginVertical: 5,
  },
  viewJobs: {
    color: '#000000',
  },

  electrican: {
    backgroundColor: '#F1DDCF',
  },
  plumber: {
    backgroundColor: '#B5E3E7',
  },
  caretaker: {
    backgroundColor: '#E7E3B5',
  },
  security: {
    backgroundColor: '#DBD7D2',
  },
   
   
   
});

export default Home;