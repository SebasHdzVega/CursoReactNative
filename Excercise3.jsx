import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export class App extends React.Component {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});