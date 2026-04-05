import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacts Screen</Text>
      <Link style={styles.link} href={"/(tabs)"}>
        Home
      </Link>
      <Link style={styles.link} href={"/about"}>
        About
      </Link>
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
  link: {
    color: "#ffffff",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});

export default ContactsScreen;
