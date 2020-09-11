import React, { useState }from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function App() {
 const [item,setItem]=useState('nothing')
  storeData = async () => {
    try {
      await AsyncStorage.setItem('key', 'I like to save it.');
      //console.log(await AsyncStorage.getItem('key'));
      setItem(await AsyncStorage.getItem('key'))
      //console.log(this.state)
    } catch (error) {
      // Error saving data
    }
  };
  retrieveData = async () => {
    
    try {
    
      //console.log(this.state)
      const value = await AsyncStorage.getItem('key');
      setItem(value)
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Save"
        onPress={this.storeData}
      />
       <Button
        title="Retrive"
        onPress={this.retrieveData}
      />
      <Text>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
