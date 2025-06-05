import React from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Alert, Button } from 'react-native';

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class App extends React.Component {
  
  state = {
    name: '',
    email: '',
    phone: null,
    address: '',
  };

  handleName = (name) => {
    this.setState({name});
  }

  handlePhone = (phone) => {
    this.setState({phone});
  }

  handleEmail = (email) => {
    this.setState({email});
  }

  handleAddress = (address) => {
    this.setState({address});
  }

  validateEmail = () => {
    if (!String(this.state.email).toLocaleLowerCase().match(re)) {
      Alert.alert('Warning', 'Email not valid');
      this.setState({email: ''});
      return false;
    }
  }

  validateSubmmit = () => {
    if (!this.state.name) {
      Alert.alert('Warning', 'Name is empty');
      return;
    }

    if (!this.state.phone) {
      Alert.alert('Warning', 'Phone is empty');
      return;
    }

    if (!this.validateEmail()) {
      return;
    }

    if (!this.state.email){
      Alert.alert('Warning', 'Email is empty');
      return;
    }

    if (!this.state.address) {
      Alert.alert('Warning', 'Address is empty');
      return;
    }
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formView}>
          <TextInput style={styles.inputForm} 
            placeholder='Name'
            value={this.state.name}
            onChangeText={this.handleName}
          />
          <TextInput style={styles.inputForm}
            placeholder='Phone'
            value={this.state.phone}
            onChangeText={this.handlePhone}
            inputMode='numeric'
            keyboardType='numeric'
          />
          <TextInput style={styles.inputForm}
            placeholder='Email'
            value={this.state.email}
            onChangeText={this.handleEmail}
          />
          <TextInput style={styles.inputForm}
            placeholder='Address'
            multiline={true}
            numberOfLines={2}
            value={this.state.address}
            onChangeText={this.handleAddress}
          />
          <View style={styles.viewButton}>
            <Button title='Submmit' onPress={this.validateSubmmit}/>
          </View>
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
  formView: {
    marginTop: '12%',
    width: '70%',
    alignItems: 'center',
  },
  inputForm: {
    backgroundColor: 'white',
    marginTop: '5%',
    width: '100%',
    padding: 1,
    paddingLeft: 3,
    paddingRight: 3,
  },
  viewButton: {
    marginTop: '5%',
  }
});