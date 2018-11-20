import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Content, Button} from 'native-base';
import JustinButton from './JustinButton'
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  componentWillMount(){
    this.getData();
  }

  getData(){ //function defined by ()
    return fetch('http://muscles.herokuapp.com/workouts/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId:'5ba97a09e34e613ed3cbe3ee'}),
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
          data: responseJson,
          count:1 
      })
    });
  }
  render() {
    //console.log('Hello', styles)
   console.log(this.state.data) //state is object that con. to be checked by react 
   console.log(this.state.count);
    return (
      <View style={styles.container}>
        {this.state.data ? <JustinButton buttonText={this.state.data[1].name}/> : null }       
         <JustinButton buttonText={'You ugly'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
