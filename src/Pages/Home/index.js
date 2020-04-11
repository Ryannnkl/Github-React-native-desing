import React from "react";
import { View, Button, Alert, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  HeaderTop,
  Menu,
  Name,
  GitName,
  NumRepo,
  Bio,
  BioContent,
  Photo,
  ItemUserContent,
  ItemUserText,
  ContentContainer,
} from "./styles";

export default function Home({ navigation }) {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Menu onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="bars" size={30} color="#555" />
          </Menu>
          <Menu onPress={() => {}}>
            <FontAwesome5 name="github" size={40} color="#fff" />
          </Menu>
          <Menu
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate("repositores")}
          >
            <FontAwesome5 name="code" size={30} color="#555" />
          </Menu>
        </HeaderTop>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Photo source={{ uri: user.avatar_url }} />
          <View>
            <Name>{user.name}</Name>
            <GitName>{user.login}</GitName>
            <NumRepo>seguindo {user.following}</NumRepo>
            <NumRepo>seguidores {user.followers}</NumRepo>
          </View>
        </View>
        <Bio>
          <BioContent>{user.bio}</BioContent>
        </Bio>
      </Header>
      <ContentContainer>
        {user.location && (
          <ItemUserContent>
            <FontAwesome5 name="map-marker-alt" size={20} color="#333" />
            <ItemUserText>{user.location}</ItemUserText>
          </ItemUserContent>
        )}
        {user.blog && (
          <ItemUserContent>
            <FontAwesome5 name="blog" size={20} color="#333" />
            <ItemUserText>{user.blog}</ItemUserText>
          </ItemUserContent>
        )}
        {user.company && (
          <ItemUserContent>
            <FontAwesome5 name="building" size={20} color="#333" />
            <ItemUserText>{user.company}</ItemUserText>
          </ItemUserContent>
        )}
        <ItemUserContent>
          <FontAwesome5 name="home" size={20} color="#333" />
          <ItemUserText>entrou em </ItemUserText>
          <ItemUserText>{user.created_at}</ItemUserText>
        </ItemUserContent>
      </ContentContainer>
    </Container>
  );
}
