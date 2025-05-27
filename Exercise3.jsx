import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

/*-------Example 1-------*/ 
class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <CustomButton title="Press Me" onPress={() => Alert.alert('Button Pressed')}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
/*-----------------------*/

/*-------Example 2-------*/
const App2 = () => {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Count: {count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
/*-----------------------*/ 

/*-------Example 3-------*/
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.initialCount !== prevState.count) {
    return { count: nextProps.initialCount };
  }
  return null;
}

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }
  
  render() {
    return (
      <View>
        <Text style={{color: 'black'}}> Count: {this.props.initialCount} </Text>
      </View>
    );
  }
 }

 const App3 = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Counter initialCount={count} />
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
/*-----------------------*/ 

/*-------Example 4-------*/
class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }   
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(this.fetchData, 5000);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.url !== this.props.url) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData = () => {
    fetch('https://api.github.com')
      .then(response => response.json())
      .then(data => this.state({ data }))
  }

  render() {
    return (
      <View>
        {this.state.data ? <Text>{JSON.stringify(this.state.data)}</Text> : <Text>Loading...</Text>}
      </View>
    );
  }
}
/*-----------------------*/ 