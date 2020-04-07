import React from "react";
import { View, Button, Alert } from "react-native";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  Name,
  GitName,
  Bio,
  BioContent,
  Photo,
} from "./styles";

export default function Home() {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <Header>
        <View style={{ flexDirection: "row" }}>
          <Photo source={{ uri: user.avatar_url }} />
          <View>
            <Name>{user.name}</Name>
            <GitName>{user.login}</GitName>
          </View>
        </View>
        <Bio>
          <BioContent>{user.bio}</BioContent>
        </Bio>
      </Header>
      <Button title="teste" onPress={() => Alert.alert("teste")} />
    </Container>
  );
}
