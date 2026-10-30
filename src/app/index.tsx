import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// Validation rules
const signupSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name cannot exceed 30 characters"),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name cannot exceed 30 characters"),

    email: z.string().trim().email("Please enter a valid email address"),

    password: z.string().min(8, "Password must contain at least 8 characters"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupScreen() {
  const router = useRouter();

  const { control, handleSubmit } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(data: SignupFormData) {
    console.log("First Name:", data.firstName);
    console.log("Last Name:", data.lastName);
    console.log("Email:", data.email);

    router.push({
      pathname: "/confirmation",
      params: {
        firstName: data.firstName,
      },
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.subtitle}>Create your account</Text>

      {/* FIRST NAME */}
      <Text style={styles.label}>First Name</Text>

      <Controller
        control={control}
        name="firstName"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />

            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        )}
      />

      {/* LAST NAME */}
      <Text style={styles.label}>Last Name</Text>

      <Controller
        control={control}
        name="lastName"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />

            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        )}
      />

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>

      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        )}
      />

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>

      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
            />

            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        )}
      />

      {/* CONFIRM PASSWORD */}
      <Text style={styles.label}>Confirm Password</Text>

      <Controller
        control={control}
        name="confirmPassword"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
            />

            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        )}
      />

      {/* SUBMIT BUTTON */}
      <Pressable
        style={styles.button}
        onPress={() => {
          void handleSubmit(onSubmit)();
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },

  error: {
    color: "red",
    fontSize: 13,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
