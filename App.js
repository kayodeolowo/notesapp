import { Button, StyleSheet,  Text,  TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainter}>
        <TextInput style={styles.textInput} placeholder='Your Daily goals'/> 
        <Button title='Add Goals'/> 
      </View>


      <View>
        <Text> Your Daily Goals </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 40,
    paddingHorizontal:20,
  },

  inputContainter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,

  },
  textInput:{
    borderWidth: 1,
    borderColor: 'green',
    width:"70%",
   
  }
});
