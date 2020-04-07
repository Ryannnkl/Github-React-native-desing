import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Detail,
  Image,
  Label,
  Input,
  Button,
  TextButton,
} from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const navigation = useNavigation();

  async function handleLogin() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
      Alert.alert("Erro", "usuario não encontrado");
      return;
    }
    dispatch({ type: "SET_USER", user: user });

    navigation.navigate("drawer");
  }

  return (
    <Container>
      <Detail />
      <Content>
        <Image />
        <Input
          placeholder="github_username"
          onChangeText={setUsername}
          value={username}
        />
        <Button onPress={() => handleLogin()}>
          <TextButton>entrar</TextButton>
        </Button>
      </Content>
    </Container>
  );
}
