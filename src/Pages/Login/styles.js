import styled from "styled-components/native";

import img from "../../../assets/background.png";
import icon from "../../../assets/icon_name.png";

export const Container = styled.ImageBackground.attrs({
  source: img,
  imageStyle: {
    resizeMode: "cover",
  },
})`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const Detail = styled.View`
  height: 100%;
  width: 100%;
  background: #24292e;
  position: absolute;
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
