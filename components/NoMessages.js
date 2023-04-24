import { Text, View, StyleSheet } from 'react-native';

export default function NoMessages() {
    return (
        <View style={styles.noMessagesWrapper}>
            <Text style={styles.noMessages}>Ask NexaChat AI a question! 👇</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    noMessagesWrapper: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      zIndex: 99,
      justifyContent: 'center',
      alignItems: 'center'
    },
    noMessages: {
      color: '#c0ecce',
      fontSize: 16
    }
  });
  