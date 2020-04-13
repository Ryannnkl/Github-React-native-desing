import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: auto;
  justify-content: center;
  background-color: #24292e;
  padding: 20px;
  border-bottom-width: 4px;
  border-bottom-color: #e36209;
`;

export const Name = styled.Text`
  color: #0366d6;
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0;
`;

export const FullName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const DescriptionContent = styled.View`
  width: auto;
  height: auto;
  margin: 15px 0;
  padding: 10px;
  background-color: #ffffff50;
  border-radius: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
`;

export const ContentItems = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: auto;
`;

export const ContentItem = styled.View`
  width: auto;
  height: 50px;
  padding: 0 5px;
  margin: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #00000025;
`;

export const DescItem = styled.Text`
  padding: 0 5px;
  color: #0366d6;
  font-size: 16px;
`;

export const ValueItem = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const Content = styled.View`
  padding: 20px 0;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Image = styled.View`
  width: 150px;
  height: 150px;
  padding: 10px;
  border: 1px solid #333;
  margin-bottom: 50px;
`;

export const Photo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 5px;
`;

export const LangContent = styled.View`
  height: auto;
  width: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #${(props) => props.cor};
  align-self: center;
`;
export const Language = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Link = styled.Text`
  color: #0366d6;
  font-size: 14px;
  background-color: #00000025;
  border-radius: 4px;
  padding: 5px;
`;

export const LinkText = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
`;
export const LinkContent = styled.View`
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
`;
