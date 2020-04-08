import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  HeaderText,
  Repository,
  RepositoryName,
  Lenguage,
  Description,
  Loading,
} from "./styles";

export default function ListRepos() {
  const repos_url = useSelector((state) => state.user.repos_url);
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber >= total) {
      return;
    }
    console.log(repos_url);

    setLoading(true);

    const response = await fetch(
      `https://api.github.com/users/diego3g/repos?per_page=10&&page=${pageNumber}`
    );
    const data = await response.json();

    const totalItems = response.headers.get("X-Total-Count");

    setTotal(Math.floor(totalItems / 10));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  }

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={feed}
        onRefresh={() => refreshList()}
        refreshing={refreshing}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.01}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header>
            <HeaderText>Repositórios</HeaderText>
          </Header>
        }
        ListFooterComponent={loading && <Loading />}
        keyExtractor={(repo) => String(Math.random())}
        renderItem={({ item }) => (
          <Repository
            key={Math.random()}
            onPress={() => navigation.navigate("detail", { item })}
          >
            <RepositoryName>{item.name} </RepositoryName>
            <Description>{item.description} </Description>
            <Lenguage>{item.language} </Lenguage>
          </Repository>
        )}
      />
    </Container>
  );
}
