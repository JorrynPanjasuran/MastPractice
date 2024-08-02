import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import{Task} from "./types/Task_Object"

type Task = {
  id: number;
  task: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: "Wash the car" },
    { id: 2, task: "Cook dinner" },
    { id: 3, task: "Grocery shopping" },
    { id: 4, task: "Complete ICE task 1" },
    { id: 5, task: "Clean the house" },
  ]);
  const [taskId, setTaskId] = useState<string>('');
  const [taskName, setTaskName] = useState<string>('');

  const AddTaskOnPress = () => {
    if (taskId && taskName) {
      const newTask = { id: parseInt(taskId), task: taskName };
      setTasks([...tasks, newTask]);
      setTaskId('');
      setTaskName('');
    }
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.heading}>TO DO LIST</Text>
      <FlatList
        style={styles.listStyle}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.childView}>
            <Text style={styles.subHeading}>Task ID: {item.id}</Text>
            <Text style={styles.subHeading}>Task: {item.task}</Text>
          </View>
        )}
      />
      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Task ID"
          value={taskId}
          onChangeText={setTaskId}
        />
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TouchableOpacity style={styles.button} onPress={AddTaskOnPress}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
  },
  heading: {
    margin: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  userInputView: {
    width: 500,
    height: 250,
    marginVertical: 15,
    backgroundColor: 'black',
    padding: 20,
    marginTop: 100,
  },
  listStyle: {
    maxHeight: 850,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',
    marginTop: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fb8da0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    marginTop: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  childView: {
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 20,
  },
});

export default App;
