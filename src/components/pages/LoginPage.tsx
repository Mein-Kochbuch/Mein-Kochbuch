import React, {useContext, useState} from "react";
import {View} from "react-native";
import Header from "./Header";
import styled from "styled-components/native";
import LoginForm from "../login/LoginForm";
import {AuthContext} from "../../context/AuthProvider";
import ErrorText from "../../utils/ErrorText";
import RegisterButton from "../login/RegisterButton";

export default function LoginPage() {

    const [loginError, setLoginError] = useState<string>()
    const {login} = useContext(AuthContext)

    const onSubmit = (credentials: { username: string, password: string }) => {
        login(credentials)
            .catch((error: { toString: () => string }) => {
                console.log(error)
                setLoginError(error.toString())
            })
    }


    return (
        <StyledView>
            <Header title={"Login"}/>
            {loginError && <ErrorText text={loginError}/>}
            <LoginForm onSubmit={onSubmit}/>
            <View>
                <RegisterButton/>
            </View>
        </StyledView>
    )
}

const StyledView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`


