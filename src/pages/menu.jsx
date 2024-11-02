import * as React from "react";
import { View, Image } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const [name, setName] = React.useState("");
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Banner */}
      <Image
        source={require("../assets/banner.jpg")} // Đặt đường dẫn đến ảnh banner của bạn
        style={{
          width: "150%",
          height: 300,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />

      {/* Manage Your Task Text */}
      <Text variant="headlineLarge" style={{ marginBottom: 40, marginTop: 40 }}>
        Manage Your Task
      </Text>

      {/* Enter Your Name Field */}
      <TextInput
        label="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={{ width: "100%", marginBottom: 60 }}
        left={<TextInput.Icon icon="email" />}
      />

      {/* Get Started Button */}
      <Button
        mode="contained"
        onPress={() => {
            navigation.navigate("todo", { name: name });
        }}
        style={{ width: "100%" }}
      >
        Get Started
      </Button>
    </View>
  );
};

export default Menu;
