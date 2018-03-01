import React from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Game!</Text>
          <Text style={styles.text}>Rock-Paper-Scissor</Text>
          <Text style={styles.text1}>Press Button!</Text>
        <View style={styles.button}>
        <Button 
          color='#0A3000'
          onPress={() => Alert.alert('Rock is pressed')} 
          title='Rock!'
        />
        </View>
        <View style={styles.button1}>
        <Button
          color= '#A3007A'
          onPress={() => Alert.alert('Paper is selected')}
          title= 'Paper!'
        />
        </View>
        <View style={styles.button1}>
        <Button
          color="#FF6699"
          onPress={() => Alert.alert('Scissor is pressed')}
          title='Scissor!'
        />
        </View>
        <Text style={styles.text2}>Designed and developed by - Vaibhao Dhage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  text: {
    paddingTop: 10,
    fontSize: 26,
    color: 'tomato',
    fontFamily: 'Courier-BoldOblique'
  },
  text1: {
    paddingTop: 10,
    fontSize: 20,
    color: 'blue',
    fontFamily: 'Courier-BoldOblique'
  },
  button: {
    marginTop: 130,
    borderWidth: 4,
    borderRadius: 5,
  },
  button1: {
    marginTop: 30,
    borderWidth: 4,
    borderRadius: 5
  },
  text2: {
    marginTop: 130,
    color: 'red'
  }
});
