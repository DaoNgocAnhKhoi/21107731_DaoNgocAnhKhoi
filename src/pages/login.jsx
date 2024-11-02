import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
export default function Login() {
  const navigation = useNavigation();
  const [password, setPassword] = React.useState("Admin");
  const [text, setText] = React.useState("Admin");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{
          width: "80%",
          marginHorizontal: "auto",
        }}
        left={<TextInput.Icon icon="account" />}
      />

      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={{
          width: "80%",
          marginTop: 30,
          marginHorizontal: "auto",
        }}
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
      />
      <Button
        mode="contained"
        onPress={() => {
          if (text === "Admin" && password === "Admin") {
            alert("Login Success");
            navigation.navigate("electronics");
          } else {
            alert("Login Failed");
          }
        }}
        style={{backgroundColor: 'black', width: '60%', marginHorizontal: 'auto', marginVertical: 30}}
      >
       LOGIN
      </Button>
      <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold"}}>
        For got your password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 100,
    textTransform: "uppercase",
  },

  container: {
    backgroundColor: "#FBCB00",
    height: "100%",
  },
});

// export default { Login }
