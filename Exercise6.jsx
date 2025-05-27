import React from "react";
import { Text, SafeAreaView, StyleSheet, View, ScrollView, TextInput, FlatList ,TouchableOpacity, Modal,
         Alert } from 'react-native';

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

class App extends React.Component {
  
  state = {
    search: '',
    contacts: [...contacts],
    visible: false,
    inputValue: '',
  };

  filterList = (contacts) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  newContact = (name) => {
    if (!this.state.inputValue){
      Alert.alert('Warning', 'Name is empty.');
    }
    else {
      const lastContact = this.state.contacts[this.state.contacts.length - 1];
      const newContact = { id: lastContact ? lastContact.id + 1 : 1, name };
      const newArray = [...this.state.contacts, newContact];
      this.setState({ contacts: newArray, inputValue: '', visible: false });
    }
    
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          transparent={true}
          visible={this.state.visible}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Create Contact</Text>
            <View style={styles.inputView}>
              <TextInput 
                style={styles.modalInput}
                placeholder='Full Name'
                value={this.state.inputValue}
                onChangeText={(inputValue) => {
                  this.setState({inputValue})
                }}
              >
              </TextInput>
              <TextInput 
                style={styles.modalInput}
                placeholder='Number'>
              </TextInput>
            </View>
            <View style={styles.modalButtonsView}>
              <TouchableOpacity onPress={() => this.setState({visible:false, inputValue:''})} style={{padding: 10,}}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.newContact(this.state.inputValue)} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.topper}>
          <TextInput 
            placeholder='Search' 
            style={styles.filter}
            onChangeText={(search) => this.setState({search})}
          >
          </TextInput>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => this.setState({visible: true})}>
            <Text style={styles.buttonText}>+ New Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: '26%',}}>
          <ScrollView>
            <FlatList
              data={this.filterList(this.state.contacts)}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <Text style={styles.row}>
                  {`\u25AA ${item.name}`}
                </Text>
              )}
            />
          </ScrollView>
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
  },
  topper: {
    padding: 1,
    backgroundColor: '#1b2d48',
  },
  row: {
    padding: 10,
    color: 'white',
    fontSize: 17,
    marginLeft: '18%',
  },
  filter: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: '6%',
    marginRight: '6%',
    padding: 5,
    marginTop: '3%',
  },
  buttonView: {
    justifyContent: 'center',
    height: '8%',
    backgroundColor: '#1b2d48',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  modalView: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#1b2d48',
    padding: 20,
    height: '100%',
  },
  modalTitle: {
    fontSize: 25,
    color: 'white',
    marginTop: '20%',
  },
  inputView: {
    marginTop: '10%',
    marginBottom: '10%',
    width: '80%',
  },
  modalInput: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: '2%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  modalButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: '5%',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
  },
  saveButtonText: {
    fontSize: 16,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#4779c4',
    padding: 10,
    borderRadius: 10,
  }  
});