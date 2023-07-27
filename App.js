import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import Goalitem from './components/Goalitem';


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [listedGoals, setListedGoals] = useState([]);

  function goalInputHandler(textentered) {
    setEnteredGoalText(textentered);
   };

  function addGoalHandler() { 
    setListedGoals((currentListedGoals)=>[
      ...currentListedGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainter}>
        <TextInput style={styles.textInput} placeholder='Your  Daily goals' onChangeText={goalInputHandler} />  
        <Button title='Add Goals' onPress={addGoalHandler}/>
      </View>


      <View>
      <FlatList style={{marginTop:20, }} data={listedGoals}
      renderItem={(itemData)=>{
        return <Goalitem text={itemData.item.text}/>
      }}
      keyExtractor={(item, index)=>{
        return item.id;
      }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 17,
  },

  inputContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 25,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    padding: 40,

  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    width: "70%",
    padding: 5,

  },

 
});
