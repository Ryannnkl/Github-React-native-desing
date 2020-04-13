import React, { useState, useEffect } from "react";
import { Linking } from "expo";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import {
  Container,
  Header,
  Image,
  Photo,
  Name,
  Link,
  FullName,
  Description,
  DescriptionContent,
  ContentItems,
  ContentItem,
  DescItem,
  ValueItem,
  Content,
  LangContent,
  Language,
  LinkContent,
  LinkText,
} from "./styles";

export default function Detail() {
  const [color, setColor] = useState("444");
  const route = useRoute();
  const item = route.params.item;

  useEffect(() => {
    const colors = item.language;

    if (!colors) {
      setColor("444");
    }
    function openURL() {}
    if (colors == "JavaScript") {
      setColor("f1e05a");
    } else if (colors == "CSS") {
      setColor("563d7c");
    } else if (colors == "Shell") {
      setColor("89e051");
    } else if (colors == "HTML") {
      setColor("e34c26");
    } else if (colors == "PHP") {
      setColor("4F5D95");
    } else if (colors == "C#") {
      setColor("178600");
    } else if (colors == "TypeScript") {
      setColor("2b7489");
    } else if (colors == "Objective-C") {
      setColor("438eff");
    } else if (colors == "C++") {
      setColor("f34b7d");
    } else if (colors == "Swift") {
      setColor("ffac45");
    } else {
      setColor("444");
    }
  }, []);

  return (
    <Container>
      <Header>
        <View>
          <Name>{item.name}</Name>
          <FullName>{item.full_name}</FullName>
        </View>
        {item.description && (
          <DescriptionContent>
            <Description>{item.description}</Description>
          </DescriptionContent>
        )}
      </Header>
      <ContentItems>
        <ContentItem>
          <FontAwesome5 name="star" size={20} color="#0366d6" />
          <DescItem>Stars</DescItem>
          <ValueItem>{item.stargazers_count}</ValueItem>
        </ContentItem>
        <ContentItem>
          <FontAwesome5 name="code-branch" size={20} color="#0366d6" />
          <DescItem>Forks</DescItem>
          <ValueItem>{item.forks}</ValueItem>
        </ContentItem>
        {item.license && (
          <ContentItem>
            <FontAwesome5 name="balance-scale" size={20} color="#0366d6" />
            <ValueItem style={{ paddingLeft: 5 }}>
              {item.license.name}
            </ValueItem>
          </ContentItem>
        )}
        <ContentItem>
          <FontAwesome5 name="exclamation-circle" size={20} color="#0366d6" />
          <DescItem>Open Issues</DescItem>
          <ValueItem>{item.open_issues}</ValueItem>
        </ContentItem>
      </ContentItems>
      <Image>
        <LinkText>By</LinkText>
        <Photo source={{ uri: item.owner.avatar_url }} />
      </Image>
      <LinkContent>
        <LinkText>SITE</LinkText>
        <Link onPress={() => Linking.openURL(item.html_url)}>
          {item.html_url}
        </Link>
      </LinkContent>

      <Content>
        {item.language && (
          <LangContent cor={color}>
            <Language>{item.language}</Language>
          </LangContent>
        )}
      </Content>
    </Container>
  );
}
