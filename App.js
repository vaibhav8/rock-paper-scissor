import React from 'react';
import { StyleSheet, Vibration, Alert, Button, Text, View } from 'react-native';

var ran;
export default class App extends React.Component {
  
 rock() {
  ran = Math.floor(Math.random() * 3);
     if(ran == 0) {
       {Alert.alert("Bot choose Rock!","Match Drawn!")}
     } else if(ran == 1) {
       {Alert.alert("Bot choose Paper!","You lost! Don't give up, Try again!")}
     } else {
       {Alert.alert("Bot choose Scissor!","Congratulations! You won!")}
     }
 }

 paper() {
  ran = Math.floor(Math.random() * 3);
     if(ran == 0) {
       {Alert.alert("Bot choose Rock!","Congratulations! You won!")}
     } else if(ran == 1) {
       {Alert.alert("Bot choose Paper!","Match Drawn!")}
     } else {
       {Alert.alert("Bot choose Scissor!","You lost! Don't give up, Try again!")}
     }
 }

 scissor() {
  ran = Math.floor(Math.random() * 3);
     if(ran == 0) {
       {Alert.alert("Bot choose Rock!","You lost! Don't give up, Try again!")}
     } else if(ran == 1) {
       {Alert.alert("Bot choose Paper!","Congratulations! You won!")}
     } else {
       {Alert.alert("Bot choose Scissor!", "Match Drawn!")}
     }
 }
  render() {
    const duration = 1000;

    return (
      <View style={styles.container}>
          <Text style={styles.text}>Game!</Text>
          <Text style={styles.text}>Rock-Paper-Scissor</Text>
          <Text style={styles.text1}>Press Button!</Text>
        <View style={styles.result}>
          <Text style={styles.win}>You Win!</Text>
          <Text>Bot Win!</Text>
        </View>
        <View style={styles.button}>
        <Button 
          color='#0A3000'
          title='Rock!'
          onPress= {this.rock}
        />
        </View>
        <View style={styles.button1}>
        <Button
          color= '#A3007A'
          onPress={this.paper}
          title= 'Paper!'
        />
        </View>
        <View style={styles.button1}>
        <Button
          color="#FF6699"
          onPress={this.scissor}
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
    backgroundColor: 'lightyellow'
  },
  text: {
    paddingTop: 10,
    fontSize: 26,
    color: '#ff0080',
    fontFamily: 'Courier-BoldOblique'
  },
  text1: {
    paddingTop: 10,
    fontSize: 20,
    color: 'blue',
    fontFamily: 'Courier-BoldOblique'
  },
  result: {
    flexDirection: 'row',
    margin: 30,
  },
  win: {
    paddingRight: 100
  },
  button: {
    marginTop: 100,
    borderWidth: 4,
    borderRadius: 50,
  },
  button1: {
    marginTop: 30,
    borderWidth: 4,
    borderRadius: 50
  },
  text2: {
    marginTop: 100,
    color: 'red'
  }
});
