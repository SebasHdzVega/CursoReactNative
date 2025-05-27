import React from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, Alert, Button } from 'react-native';

const contacts = [
  {id: 1, name:'James Elsher'},
  {id: 2, name:'Mary Solace'},
  {id: 3, name:'Michael Levine'},
  {id: 4, name:'Patricia Elsher'},
  {id: 5, name:'John Solace'},
  {id: 6, name:'Jennifer Thatcher'},
  {id: 7, name:'Robert Levine'},
  {id: 8, name:'Linda Raven'},
  {id: 9, name:'David Raven'},
  {id: 10, name:'Elizabeth Elsher'},
  {id: 11, name:'William Thatcher'},
  {id: 12, name:'James Raven'},
  {id: 13, name:'Mary Levine'},
  {id: 14, name:'Michael Thatcher'},
  {id: 15, name:'Patricia Solace'},
  {id: 16, name:'John Raven'},
  {id: 17, name:'Jennifer Elsher'},
  {id: 18, name:'Robert Levine'},
  {id: 19, name:'Linda Thatcher'},
  {id: 20, name:'David Solace'},
  {id: 21, name:'William Thatcher'},
  {id: 22, name:'James Raven'},
  {id: 23, name:'Mary Levine'},
  {id: 24, name:'Michael Thatcher'},
  {id: 25, name:'Patricia Solace'},
  {id: 26, name:'John Raven'},
  {id: 27, name:'Jennifer Elsher'},
  {id: 28, name:'Robert Levine'},
  {id: 29, name:'Linda Thatcher'},
  {id: 30, name:'David Solace'},
]

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class App extends React.Component {
  
  state = {
    text: '',
    name: '',
    email: '',
    phone: null,
  };

  handleTextInput = (text) => {
    this.setState({text});
  }

  handleName = (name) => {
    this.setState({name});
  }

  handleEmail = (email) => {
    this.setState({email});
  }

  handlePhone = (phone) => {
    this.setState({phone});
  }
  
  validateName = () => {
    if (!this.state.name.match('^[A-Za-z]{1,20}, [A-Za-z]{1,20}, [A-Za-z]{1,20}') && this.state.name !== "") {
      Alert.alert('Warning', 'Only letters');
      this.setState({name: ''});
    }
  }

  validatePhone = () => {
    if (/\D/.test(this.state.phone) && this.state.phone !== "") {
      Alert.alert('Waring', 'Only enter numbers');
      this.setState({phone:''});
    }
  }

  validateEmail = () => {
    if (!String(this.state.email).toLocaleLowerCase().match(re) && this.state.email !== "" ) {
      Alert.alert('Warning', 'Email is not valid');
      this.setState({email:''});
    }
  }

  showInputText = () => {
    if (!this.state.text)
      Alert.alert('Warning', 'The text is empty.');
    else
      Alert.alert('HELLO!', this.state.text);
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.ex1View}>
          <Text style={styles.title}>Ex1</Text>
          <TextInput style={styles.textInput} 
            value={this.state.text}
            onChangeText={this.handleTextInput}
          />
          <View style={styles.buttonView}>
            <Button title='Show Text' onPress={this.showInputText} />
          </View>
        </View>
          
        <View style={styles.formView}>
          <Text style={styles.title}>Ex2</Text>
          <TextInput style={styles.inputForm} 
            placeholder='Name'
            value={this.state.name}
            onChangeText={this.handleName}
            onEndEditing={this.validateName}
          />
          <TextInput style={styles.inputForm}
            placeholder='Phone'
            value={this.state.phone}
            onChangeText={this.handlePhone}
            onEndEditing={this.validatePhone}
          />
          <TextInput style={styles.inputForm}
            placeholder='Email'
            value={this.state.email}
            onChangeText={this.handleEmail}
            onEndEditing={this.validateEmail}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '10%',
    backgroundColor: '#1b2d48',
    alignItems: 'center',
  },
  title: {
    color: 'white', 
    fontSize: 18,
  },
  ex1View: {
    marginTop: '20%',
    width: '70%',
    alignItems: 'center',
  },
  buttonView: {
    width: '50%',
    backgroundColor: 'red',
  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: '5%',
    width: '100%',
    marginTop: '5%',
  },
  formView: {
    marginTop: '12%',
    width: '70%',
    alignItems: 'center',
  },
  inputForm: {
    backgroundColor: 'white',
    marginTop: '5%',
    width: '100%',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
  }
});