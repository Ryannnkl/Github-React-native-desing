import React, { useEffect, useState } from "react";
import { Button, Alert } from "react-native";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  HeaderText,
  Repository,
  RepositoryName,
  Lenguage,
  Description,
} from "./styles";

export default function ListRepos({}) {
  const repos_url = useSelector((state) => state.user.repos_url);
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const response = await fetch(repos_url);
    const re = await response.json();
    setRepos(re);
  }, []);

  return (
    <>
      <Header>
        <HeaderText>Repositorios</HeaderText>
      </Header>
      <Container>
        {repos.map((repo, index) => (
          <Repository key={index}>
            <RepositoryName>{repo.name} </RepositoryName>
            <Description>{repo.description} </Description>
            <Lenguage>{repo.language} </Lenguage>
          </Repository>
        ))}
      </Container>
    </>
  );
}
