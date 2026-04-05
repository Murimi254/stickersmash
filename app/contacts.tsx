import { StyleSheet, Text, View } from "react-native";

function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacts Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#ffffff",
  },
});

export default ContactsScreen;
