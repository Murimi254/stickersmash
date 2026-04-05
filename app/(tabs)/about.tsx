import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the about screen</Text>
      <Link style={styles.link} href={"/(tabs)"}>
        Home
      </Link>
      <Link style={styles.link} href={"/contacts"}>
        Contacts
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
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

export default AboutScreen;
