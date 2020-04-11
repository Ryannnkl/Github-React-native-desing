import React, { useState } from "react";
import { Alert, Switch } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Image, Input, Button, TextButton } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const navigation = useNavigation();

  async function handleLogin() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (
      user.documentation_url ===
      "https://developer.github.com/v3/#rate-limiting"
    ) {
      Alert.alert("Erro", "Maximo de requisições execidas por hoje");
      return;
    }
    dispatch({ type: "SET_USER", user: user });

    navigation.navigate("drawer");
  }

  return (
    <Container>
      <Content>
        <Image />
        <Input
          placeholder="github_username"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />

        <Button onPress={() => handleLogin()}>
          <TextButton>entrar</TextButton>
        </Button>
      </Content>
    </Container>
  );
}
