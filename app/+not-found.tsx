import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found Screen</Text>
      <Link style={styles.link} href={"/"}>
        Back To Home
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
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffffff",
  },
});

export default NotFoundScreen;
