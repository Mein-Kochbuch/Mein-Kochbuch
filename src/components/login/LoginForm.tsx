import React, {useState} from 'react';
import {Linking} from 'react-native';
import InputField from './InputField';
import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'react-native-appearance';

interface LoginFormProps {
  onSubmit: (credentials: {username: string; password: string}) => void;
}

export default function LoginForm({onSubmit}: LoginFormProps) {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({username: '', password: ''});

  const isDarkMode = useColorScheme() === 'dark';

  const onEmailChange = (value: string) => {
    setCredentials(oldCredentials => {
      return {...oldCredentials, username: value};
    });
  };

  const onPasswordChange = (value: string) => {
    setCredentials(oldCredentials => {
      return {...oldCredentials, password: value};
    });
  };

  return (
    <StyledView>
      <InputField
        title={'E-Mail'}
        onChangeText={onEmailChange}
        placeholder="E-Mail"
        value={credentials.username}
        keyboardType={'email-address'}
      />
      <InputField
        title={'Password'}
        onChangeText={onPasswordChange}
        placeholder="Password"
        value={credentials.password}
        secureTextEntry={true}
      />

      <PrivacyBanner>
        Wenn du fortfährst, stimmst du den
        <LinkText
          onPress={() => Linking.openURL('https://mein-kochbuch.org/agb/')}>
          {' '}
          AGBs{' '}
        </LinkText>
        zu. In unseren
        <LinkText
          onPress={() =>
            Linking.openURL('https://mein-kochbuch.org/privacypolicy/')
          }>
          {' '}
          Privacy Policy{' '}
        </LinkText>
        erfährst du, wie wir deine Daten erfassen, verwenden und teilen.
      </PrivacyBanner>

      <StyledTouchableOpacity
        isDarkMode={isDarkMode}
        onPress={() => onSubmit(credentials)}>
        <StyledText>Login</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

interface StyledTouchableOpacityProps {
  isDarkMode: boolean;
}

const StyledView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LinkText = styled.Text`
  color: #0074d9;
  text-decoration-line: underline;
`;

const PrivacyBanner = styled.Text`
  margin: 24px;
  text-align: center;
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: 30px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity<StyledTouchableOpacityProps>`
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

