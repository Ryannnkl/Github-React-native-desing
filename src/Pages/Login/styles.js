import styled from "styled-components/native";

import icon from "../../../assets/icon_name.png";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #24292e;
`;

export const Content = styled.View`
  width: 90%;
  height: 250px;
  margin: 40px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
`;

export const Image = styled.ImageBackground.attrs({
  source: icon,
  imageStyle: {
    resizeMode: "contain",
  },
})`
  border-radius: 60px;
  width: 300px;
  height: 75px;
`;

export const Input = styled.TextInput`
  background-color: #24292e;
  height: 44px;
  width: 95%;
  border-radius: 22px;
  padding-left: 10px;
  margin: 15px 0;
  color: #fff;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 30%;
  height: 40px;
  margin-right: 5%;
  border-radius: 20px;
  background: #24292e;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
