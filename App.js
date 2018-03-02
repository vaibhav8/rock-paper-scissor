import React from 'react';
import { StyleSheet, Vibration, Alert, Button, Text, View } from 'react-native';

var ran;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      win : 0,
      lose : 0
    }
  }
  
 rock = () => {
  ran = Math.floor(Math.random() * 3);
     if(ran == 0) {
       {Alert.alert("Match Drawn!","Bot choose Rock!")}     
     } else if(ran == 1) {
       this.setState({lose: this.state.lose+1}, ()=> Alert.alert("You lost!","Bot choose Paper!"))
     } else {
       this.setState({win: this.state.win+1}, () => Alert.alert("Congratulations! You won!","Bot choose Scissor!",Vibration.vibrate(1000)))
     }
 }

 paper = () => {
  ran = Math.floor(Math.random() * 3);
     if(ran == 0) {
     this.setState({win: this.state.win + 1},() => Alert.alert("Congratulations! You won!","Bot choose Rock!",Vibration.vibrate(1000)))
     } else if(ran == 1) {
       {Alert.alert("Match Drawn!","Bot choose Paper!")}
     } else { 
       this.setState({lose: this.state.lose+1}, () => Alert.alert("You lost!","Bot choose Scissor!"))
     }
 }

 scissor = () => {
  ran = Math.floor(Math.random() * 3);
     if(ran == 0) {
       this.setState({lose: this.state.lose+1}, () => Alert.alert("You lost!","Bot choose Rock!"))
     } else if(ran == 1) {
       this.setState({win: this.state.win + 1}, () => Alert.alert("Congratulations! You won!", "Bot choose Paper!",Vibration.vibrate(1000)))
     } else {
       {Alert.alert("Match Drawn!", "Bot choose Scissor!")}
     }
 }

 reset = () => {
   this.setState({win: 0, lose: 0},() => Alert.alert("Scores are reset!"), Vibration.vibrate(1000))
 }

  render() {
    const duration = 1000;

    return (
      <View style={styles.container}>
          <Text style={styles.text}>Game!</Text>
          <Text style={styles.text}>Rock-Paper-Scissor</Text>
          <Text style={styles.text1}>Press any Button!</Text>
        <View style={styles.result}>
          <Text style={styles.win}>You Win!</Text>
          <Text>Bot Win!</Text>
        </View>
        <View style={styles.result1}>
          <Text style={styles.win1}>{this.state.win}</Text>
          <Text>{this.state.lose}</Text>
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
          title= 'Paper!'
          onPress={this.paper}
        />
        </View>
        <View style={styles.button1}>
        <Button
          color="#FF6699"
          onPress={this.scissor}
          title='Scissor!'
        />
        </View>
        <View style={styles.button2}>
        <Button
          color="red"
          onPress={this.reset}
          title='Reset!'
        />
        </View>
        <Text style={styles.text2}>Designed and developed by => V D</Text>
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
    backgroundColor: '#ffffcc'
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
    marginTop: 30,
  },
  win: {
    paddingRight: 100
  },
  result1: {
    flexDirection: 'row',
    margin: 10,
  },
  win1: {
    paddingRight: 160
  },
  button: {
    marginTop: 60,
    width: 200,
    borderWidth: 4,
    borderRadius: 50,
  },
  button1: {
    marginTop: 20,
    width: 200,
    borderWidth: 4,
    borderRadius: 50
  },
  button2: {
    marginTop: 20,
    width: 200,
    borderWidth: 4,
    borderRadius: 50,
    backgroundColor: 'lightgrey'
  },
  text2: {
    marginTop: 70,
    color: 'red',
    fontFamily: 'AvenirNext-Bold'
  }
});
