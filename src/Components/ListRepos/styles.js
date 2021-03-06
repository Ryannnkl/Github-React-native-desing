import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #24292e;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#333",
})`
  margin: 30px 0;
`;

export const Menu = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 30%;
  width: 75px;
  height: 75px;
  padding: 20px;
  border-radius: 50px;
`;

export const HeaderText = styled.Text`
  color: #fdfdfd;
  font-size: 40px;
  font-weight: bold;
`;

export const Repository = styled.TouchableOpacity`
  width: 45%;
  height: auto;
  padding: 10px;
  margin: 15px 10px;
  justify-content: space-between;
  border: ${StyleSheet.hairlineWidth}px solid #24292e;
  border-radius: 4px;
`;

export const RepositoryName = styled.Text`
  font-size: 24px;
  color: #0366d6;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #586069;
`;

export const Lenguage = styled.Text`
  font-size: 14px;
  color: #586069;
`;
