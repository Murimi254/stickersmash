import { StyleSheet, Text, View } from "react-native";

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the about screen</Text>
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
});

export default AboutScreen;
