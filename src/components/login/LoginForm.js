import React, {useState} from "react";
import {Linking} from "react-native";
import InputField from "./InputField";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";

export default function LoginForm({onSubmit}) {
    const [credentials, setCredentials] = useState({})

    const isDarkMode = useColorScheme() === 'dark';

    const onEmailChange = (value) => {
        setCredentials((oldCredentials) => {
            return {...oldCredentials, "username": value}
        })
    }

    const onPasswordChange = (value) => {
        setCredentials((oldCredentials) => {
            return {...oldCredentials, "password": value}
        })
    }

    return (
        <StyledView>
            <InputField
                title={"E-Mail"}
                onChangeText={onEmailChange}
                placeholder="E-Mail"
                value={credentials.username}
                keyboardType={"email-address"}/>
            <InputField
                title={"Password"}
                onChangeText={onPasswordChange}
                placeholder="Password"
                value={credentials.password}
                secureTextEntry={true}/>

            <PrivacyBanner>
                Wenn du fortfährst, stimmst du den
                <LinkText onPress={() => Linking.openURL('https://mein-kochbuch.org/agb/')}> AGBs </LinkText>
                zu. In unseren
                <LinkText onPress={() => Linking.openURL('https://mein-kochbuch.org/privacypolicy/')}> Privacy
                    Policy </LinkText>
                erfährst du, wie wir deine Daten erfassen, verwenden und teilen.
            </PrivacyBanner>

            <StyledTouchableOpacity isDarkMode={isDarkMode} onPress={() => onSubmit(credentials)}>
                <StyledText>
                    Login
                </StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

const StyledView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LinkText = styled.Text`
  color: #0074D9;
  text-decoration-line: underline;
`

const PrivacyBanner = styled.Text`
  margin: 24px;
  text-align: center;
`

const StyledText = styled.Text`
  text-align: center;
  font-size: 30px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 300px;
  border-style: solid;
  border-color: ${props => props.isDarkMode ? Colors.lighter : Colors.darker};
  border-radius: 10px;
  border-width: 2px;
`

