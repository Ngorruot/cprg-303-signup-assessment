import { useState } from "react";

import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    alert(
      "Student Registration\n" +
        "Name:" +
        name +
        "\n" +
        "Email:" +
        email +
        "\n" +
        "Age:" +
        age,
    );
  }

  return (
    <View style={{ padding: 40, marginTop: 50 }}>
      <Text>Student Registration</Text>

      <TextInput
        placeholder="Type your name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 10,
          marginBottom: 20,
        }}
      />
      <Text>Email Address:</Text>
      <TextInput
        placeholder="Type Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 10,
          marginBottom: 20,
        }}
      />
      <Text>Enter Age</Text>
      <TextInput
        placeholder="Enter Your Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 10,
          marginBottom: 20,
        }}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
