import React from 'react';
import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Appearance} from 'react-native';
import {useHistory} from 'react-router-native';

export default function RegisterButton() {
  const history = useHistory();
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const onPress = () => {
    history.push('/register');
  };

  return (
    <StyledButton isDarkMode={isDarkMode} onPress={onPress}>
      <StyledText>Register</StyledText>
    </StyledButton>
  );
}

const StyledText = styled.Text`
  text-align: center;
  font-size: 30px;
`;

interface StyledButtonProps {
  isDarkMode: boolean;
}

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 300px;
  border-style: solid;
  border-color: ${props => (props.isDarkMode ? Colors.lighter : Colors.darker)};
  border-radius: 10px;
  border-width: 2px;
`;
