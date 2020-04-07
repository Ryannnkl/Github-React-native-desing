import styled from "styled-components/native";

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
