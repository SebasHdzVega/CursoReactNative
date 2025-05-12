import React from 'react';
import { View, Text } from 'react-native';

/*--------Contador--------*/
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  componentDidMount() {
    setInterval(this.inc, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 44,
  },
});
/*------------------------*/

/*--------ContadorPares--------*/
class CountEvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }

  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

export class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  componentDidMount() {
    setInterval(this.inc, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <CountEvenNumbers count={this.state.count}/>
      </View>
    );
  }
}
/*-----------------------------*/

