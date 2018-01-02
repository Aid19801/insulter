import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      response: ''
    }
  }

  decideResponse(str) {

    switch(str.length) {
      case 0:
        return '';
      case 1:
        return 'twirp!';
      case 2:
        return 'tinker!';
      case 3:
        return 'silly billy!';
      case 4:
        return 'you wiseguy!';
      case 5:
        return 'silly sausage!';
      case 6:
        return 'drip!';
      case 7:
        return 'Wozzock!';
      case 8:
        return 'twonk!';
      case 9:
        return 'blah!';
      case 10:
        return 'You botty!';
      case 11:
        return 'tinker again';
      case 12:
        return 'you norma!';
      case 13:
        return 'whuuuuut';

      default:
      return '';
    }
  }

  render() {
    const { response, text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30 }}>What Is Your Name?</Text>

        <TextInput
          editable = {true}
          maxLength = {40}
          style={{height: 40, width: 300, borderColor: 'blue', borderWidth: 4}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Text style={{marginTop: 10, fontSize: 30, height: 100, width: 300, color: 'white' }}>{this.decideResponse(text)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
