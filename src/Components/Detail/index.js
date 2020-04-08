import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Container, Header, Name, FullName, Description } from "./styles";

export default function Detail() {
  const route = useRoute();
  const item = route.params.item;

  return (
    <Container>
      <Header>
        <View>
          <Name>{item.name}</Name>
          <FullName>{item.full_name}</FullName>
        </View>
        <RepoInfo></RepoInfo>
      </Header>
      <Description>{item.description}</Description>
    </Container>
  );
}
