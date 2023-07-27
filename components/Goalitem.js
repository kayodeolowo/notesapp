import { StyleSheet, View, Text } from "react-native"

export default function Goalitem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText} > {props.text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        borderRadius: 7,
        backgroundColor: "green",
        padding: 5,
       
      },
    
      goalText:{
        color: 'white',
        fontSize: 20,
      }
});