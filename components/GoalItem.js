import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return  (
        <View style={styles.goalItem}>
            <Pressable 
                andriod_ripple={{color: '#210644'}} 
                onPress={props.onDeleteItem.bind()}
                style={({ pressed })=> pressed && styles.pressedItem}
                
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#530acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});