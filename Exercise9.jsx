import React from "react";
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';



class App extends React.Component {

  errorMessage = () => {
    console.error('This is an error message!');
  }

  warningMesage = () => {
    console.warn('This is a warning message!');
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewButton}>
          <Button title='Error' onPress={this.errorMessage}/>
        </View>
        <View style={styles.viewButton}>
          <Button title='Warning' onPress={this.warningMesage}/>
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
  viewButton: {
    marginTop: '5%',
  }
});