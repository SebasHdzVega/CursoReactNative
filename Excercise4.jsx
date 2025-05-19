import React from "react";
import { Text, SafeAreaView, StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { FlatList } from 'react-native';

/*----------Example 1----------*/
const contacts = [
  {id: 1, name:'James Elsher', phone:'123'},
  {id: 2, name:'Mary Solace', phone:'123'},
  {id: 3, name:'MichaelLevine', phone:'123'},
  {id: 4, name:'Patricia Elsher', phone:'123'},
  {id: 5, name:'John Solace', phone:'123'},
  {id: 6, name:'Jennifer Thatcher', phone:'123'},
  {id: 7, name:'Robert Levine', phone:'123'},
  {id: 8, name:'Linda Raven', phone:'123'},
  {id: 9, name:'David Raven', phone:'123'},
  {id: 10, name:'Elizabeth Elsher', phone:'123'},
  {id: 11, name:'William Thatcher', phone:'123'},
  {id: 12, name:'James Raven', phone:'123'},
  {id: 13, name:'Mary Levine', phone:'123'},
  {id: 14, name:'Michael Thatcher', phone:'123'},
  {id: 15, name:'Patricia Solace', phone:'123'},
  {id: 16, name:'John Raven', phone:'123'},
  {id: 17, name:'Jennifer Elsher', phone:'123'},
  {id: 18, name:'Robert Levine', phone:'123'},
  {id: 19, name:'Linda Thatcher', phone:'123'},
  {id: 20, name:'David Solace', phone:'123'},
  {id: 21, name:'William Thatcher', phone:'123'},
  {id: 22, name:'James Raven', phone:'123'},
  {id: 23, name:'Mary Levine', phone:'123'},
  {id: 24, name:'Michael Thatcher', phone:'123'},
  {id: 25, name:'Patricia Solace', phone:'123'},
  {id: 26, name:'John Raven', phone:'123'},
  {id: 27, name:'Jennifer Elsher', phone:'123'},
  {id: 28, name:'Robert Levine', phone:'123'},
  {id: 29, name:'Linda Thatcher', phone:'123'},
  {id: 30, name:'David Solace', phone:'123'},
]

class App extends React.Component {
  state = {
    search: '',
  };

  filterList = (contacts) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(this.state.search.toLowerCase()));
  }
  
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topper}>
          <Text style={styles.titleText}>Contacts</Text>
          <TextInput 
            placeholder='Search Contact' 
            style={styles.filter}
            onChangeText={(search) => this.setState({search})}
          >
          </TextInput>
        </View>
        <View style={styles.listContacts}>
          <ScrollView>
            {this.filterList(contacts).map(({ name }) => (
              <Text key={contacts.id} style={styles.row}>
                - {name}
              </Text>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
/*-----------------------------*/

/*----------Example 2----------*/
class App2 extends React.Component {
  state = {
    search: '',
  };

  filterList = (contacts) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(this.state.search.toLowerCase()));
  }
  
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topper}>
          <Text style={styles.titleText}>Contacts</Text>
          <TextInput 
            placeholder='Search' 
            style={styles.filter}
            onChangeText={(search) => this.set({search})}
          >
          </TextInput>
        </View>
        <View style={styles.listContacts}>
          <ScrollView>
            <FlatList
              data={this.filterList(contacts)}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <Text style={styles.row}>
                  - {item.name}
                </Text>
              )}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
/*-----------------------------*/

export {App, App2};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: '25%'
  },
  topper: {
    marginTop: '10%',
    padding: 1,
    backgroundColor: '#33333390',
    borderTopColor: '#111111',
    borderBottomColor: '#111111',
    borderLeftColor: '#33333390',
    borderRightColor: '#33333390',
    borderWidth: 1.5,
    flexDirection: 'row',
  },
  listContacts: {
    marginLeft: '1%',
    top: '1%',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    marginLeft: '2%',
  },
  row: {
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 1,   
  },
  filter: {
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1,
    marginLeft: '10%',
    padding: 5,
  }
});