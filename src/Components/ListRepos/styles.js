import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.ScrollView.attrs({
  showsVerticalIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    margin: 10,
  },
})`
  width: 100%;
  height: 100%;
  padding: 30px 10px;
  background-color: #fff;
`;
export const Header = styled.View`
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  background-color: #24292e;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const HeaderText = styled.Text`
  color: #fdfdfd;
  font-size: 30px;
  font-weight: bold;
`;

export const Repository = styled.TouchableOpacity`
  width: 90%;
  height: 200px;
  padding: 20px;
  margin: 20px 0;
  justify-content: space-between;
  border: ${StyleSheet.hairlineWidth}px solid #24292e;
  border-radius: 4px;
`;

export const RepositoryName = styled.Text`
  font-size: 30px;
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
