import Header from "./Header";
import ErrorText from "../../utils/ErrorText";
import React, {useState} from "react";
import styled from "styled-components/native";
import RegisterForm from "../login/RegisterForm";
import AxiosInstance from "../../utils/AxiosInstance";
import {useHistory} from "react-router-native";


export default function RegisterPage() {
    const [registerError, setRegisterError] = useState<string>()
    const history = useHistory()
    const axios = AxiosInstance()

    const onSubmit = (name: string, email: string, password: string) => {
        return axios.post("account/register/", {email: email, password: password, username: name})
            .then((response) => {
                console.log(response)
                history.push("/register/complete")
            })
            .catch((error) => {
                console.error(JSON.stringify(error))
                setRegisterError(error.message)
            })
    }

    return (
        <StyledView>
            <Header title={"Register"}/>
            <ErrorText text={registerError}/>
            <RegisterForm handleRegister={onSubmit}/>
        </StyledView>
    )
}

const StyledView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`
