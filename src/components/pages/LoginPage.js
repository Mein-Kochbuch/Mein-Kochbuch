import React, {useContext, useState} from "react";
import {View} from "react-native";
import Header from "./Header";
import styled from "styled-components/native";
import LoginForm from "../login/LoginForm";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";
import {AuthContext} from "../../context/AuthProvider";
import ErrorText from "../../utils/ErrorText";

export default function LoginPage() {

    const [loginError, setLoginError] = useState()
    const isDarkMode = useColorScheme() === 'dark';
    const {login} = useContext(AuthContext)

    const onSubmit = (credentials) => {
        login(credentials)
            .catch((error) => {
                console.log(error)
                setLoginError(error.toString())
            })
    }


    return (
        <StyledView>
            <Header title={"Login"}/>
            <ErrorText text={loginError}/>
            <LoginForm onSubmit={onSubmit}/>
            <View>
                <RegisterButton isDarkMode={isDarkMode} onPress={() => {
                }}>
                    <StyledText>
                        Register
                    </StyledText>
                </RegisterButton>
            </View>
        </StyledView>
    )
}

const StyledView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StyledText = styled.Text`
  text-align: center;
  font-size: 30px;
`

const RegisterButton = styled.TouchableOpacity`
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
