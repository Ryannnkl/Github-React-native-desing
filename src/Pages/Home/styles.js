import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: auto;
  background: #24292e;
  justify-content: center;
  padding-top: 60px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  padding-left: 20px;
  border-radius: 50px;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  margin: 0 20px;
  border-radius: 4px;
`;

export const Name = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const GitName = styled.Text`
  font-size: 18px;
  color: #fffdee;
  font-weight: bold;
`;
export const NumRepo = styled.Text`
  color: #fdfdfd;
  font-size: 14px;
`;
export const Bio = styled.View`
  width: 90%;
  height: auto;
  background: #fffbdd;
  border: 2px solid #ffe88d;
  border-radius: 4px;
  margin: 10px 0;
  padding: 5px 10px;
  align-self: center;
`;
export const BioContent = styled.Text``;
export const ContentContainer = styled.ScrollView.attrs({
  showsVerticalIndicator: false,
})`
  height: 100%;
  width: 100%;
  padding: 20px 0;
`;
export const ItemUserContent = styled.View`
  width: 100%;
  height: 35px;
  margin: 10px 10px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 4px;
  padding: 5px 10px;
  border: ${StyleSheet.hairlineWidth}px solid #444;
`;
export const ItemUserText = styled.Text`
  color: #333;
  font-size: 16px;
  padding: 0 10px;
`;
