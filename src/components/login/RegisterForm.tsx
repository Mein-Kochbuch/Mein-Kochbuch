import React, {useState} from "react";
import {Linking} from "react-native";
import InputField from "./InputField";
import styled from "styled-components/native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";
import Validator from "../../utils/Validator";

interface RegisterFormProps {
    handleRegister: (email: string, username: string, password: string) => void
}

export default function RegisterForm({handleRegister}: RegisterFormProps) {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordDuplicate, setPasswordDuplicate] = useState<string>("")

    const [passwordError, setPasswordError] = useState<string | undefined>()
    const [emailError, setEmailError] = useState<string | undefined>()

    const isDarkMode = useColorScheme() === 'dark';
    const {validatePassword, validateEmail} = Validator()

    const handleSubmit = () => {
        const passwordValidationError = validatePassword(password, passwordDuplicate)
        if (passwordValidationError) {
            setPasswordError(passwordValidationError)
            return
        }
        setPasswordError("")

        const emailValidationError = validateEmail(email)
        if (emailValidationError) {
            setEmailError(emailValidationError)
            return
        }
        setEmailError("")

        handleRegister(email, name, password)
    }

    return (
        <StyledView>
            <InputField
                title={"E-Mail"}
                errorText={emailError}
                onChangeText={setEmail}
                placeholder="E-Mail"
                value={email}
                keyboardType={"email-address"}/>
            <InputField
                title={"Name"}
                onChangeText={setName}
                placeholder="Name"
                value={name}/>
            <InputField
                title={"Password"}
                onChangeText={setPassword}
                placeholder="Password"
                value={password}
                secureTextEntry={true}/>
            <InputField
                title={"Password"}
                errorText={passwordError}
                onChangeText={setPasswordDuplicate}
                placeholder="Password"
                value={passwordDuplicate}
                secureTextEntry={true}/>

            <PrivacyBanner>
                Wenn du fortfährst, stimmst du den
                <LinkText onPress={() => Linking.openURL('https://mein-kochbuch.org/agb/')}> AGBs </LinkText>
                zu. In unseren
                <LinkText onPress={() => Linking.openURL('https://mein-kochbuch.org/privacypolicy/')}> Privacy
                    Policy </LinkText>
                erfährst du, wie wir deine Daten erfassen, verwenden und teilen.
            </PrivacyBanner>

            <StyledTouchableOpacity isDarkMode={isDarkMode} onPress={handleSubmit}>
                <StyledText>
                    Register
                </StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

interface StyledTouchableOpacityProps {
    isDarkMode: boolean
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

const StyledTouchableOpacity = styled.TouchableOpacity<StyledTouchableOpacityProps>`
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

