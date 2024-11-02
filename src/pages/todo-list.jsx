import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Appbar, TextInput, Checkbox, IconButton, FAB, Avatar } from 'react-native-paper';

const TodoList = ({ route }) => {
  const { name } = route.params;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [todos, setTodos] = React.useState([
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: false },
    { id: '3', title: 'Task 3', completed: false },
  ]);

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id) => {
    console.log(`Edit todo with id: ${id}`);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Appbar.Header>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1, justifyContent: 'flex-end' }}>
          <Avatar.Image size={40} source={require('../assets/avatar-1.jpg')} style={{ marginRight: 8 }} />
          <Appbar.Content title={`Xin Chào, ${name}`} style={{ alignItems: 'flex-end' }} />
        </View>
      </Appbar.Header>

      {/* Search Bar */}
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
        mode="outlined"
        style={{ margin: 16 }}
      />

      {/* To-do List */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            {/* Checkbox */}
            <Checkbox
              status={item.completed ? 'checked' : 'unchecked'}
              onPress={() => handleToggleComplete(item.id)}
            />

            {/* Task Title */}
            <Text style={{ flex: 1, marginLeft: 8 }}>{item.title}</Text>

            {/* Edit Button */}
            <IconButton
              icon="pencil"
              onPress={() => handleEdit(item.id)}
            />
          </View>
        )}
      />

      {/* Add Button */}
      <FAB
        icon="plus"
        onPress={() => console.log('Add new task')}
        style={{ position: 'absolute', right: 16, bottom: 16 }}
      />
    </View>
  );
};

export default TodoList;
