import React from "react";
import { View, Text, Alert, ScrollView, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";

/*----------Example 1----------*/
const Register = () => {
    Alert.alert('Register Successfull');
};

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={{ padding: 50, marginTop: 20 }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
      </View>
      <Button style={{ margin: 20 }} title="Register" onPress={Register} />
    </ScrollView>
  );
}
/*-----------------------------*/

/*----------Example 2----------*/
const App2 = () => {
  return (
    <View style={{ padding: 20}}>
      <Text>Hello Word!</Text>
      <Button onPress={() => Alert.alert('Button Clicked')} title="Click Here"/>
    </View>
  );
}
/*-----------------------------*/

/*----------Example 3----------*/
const item = Array.from({length: 50}, (_,i) => `Elemento ${i + 1}`);

const App3 = () => {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={item}
          renderItem={({ item }) => (
            <Text style={styles.text}>{`\u2022 ${item}`}</Text>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 30,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});
/*-----------------------------*/

/*----------Example 4----------*/
const App4 = () => {
  return (
    <View style={styles2.container}>
      <View style={styles2.box1}></View>
      <View style={styles2.box2}></View>
      <View style={styles2.box3}></View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
/*-----------------------------*/

/*----------Example 5----------*/
const App5 = () => {
  return (
    <View style={styles3.container}>
      <View style={styles3.profilePic}>
        <Text style={styles3.name}>Axel</Text>
        <Text style={styles3.description}>Software Developer at XYZ Company</Text>
      </View>
    </View>
  );
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'grey',
  },
});
/*-----------------------------*/

export {App, App2, App3, App4, App5};