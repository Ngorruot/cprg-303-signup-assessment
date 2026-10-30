import { Pressable, StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

export default function ConfirmationScreen() {
  const router = useRouter();

  const { firstName } = useLocalSearchParams<{
    firstName: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Successful!</Text>

      <Text style={styles.message}>Account created for {firstName}!</Text>

      <Text style={styles.description}>
        Your form has been submitted successfully.
      </Text>

      <Pressable style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Back to Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  message: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
