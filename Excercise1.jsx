import React from 'react';
import { View, Text } from 'react-native';

/*----------Example 1----------*/
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <div>
      <h1>My List</h1>
        <List items={items} />
      </div>
  );
}
/*-----------------------------*/

/*----------Example 2----------*/
const tasks = [
  { id: 1, name: 'Do the laundry' },
  { id: 2, name: 'Clean the house' },
  { id: 3, name: 'Buy groceries' },
];

const List2 = (tasks) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
} 
    
const App2 = () => {
  return (
    <View>
      <Text>My Tasks</Text>
        <List tasks={tasks} />
      </View>
  );
}
/*-----------------------------*/

/*----------Example 3----------*/
const App3 = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
} 
/*-----------------------------*/   

export { App, App2, App3 };

