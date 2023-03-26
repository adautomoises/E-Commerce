import React, { useState } from "react";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerForm,
  Title,
  Subtitle,
  ContainerAnimation,
  ContainerBlueIcon,
  ContainerWhiteIcon,
  OrLine,
  AlternativeButton,
  ForgetPassword,
  ContainerRegister,
  RegisterButton,
} from "./styles";
import { AxiosError } from "axios";

import { ReactComponent as BlueIconSvg } from "../../Assets/blue_icon.svg";
import { ReactComponent as WhiteIconSvg } from "../../Assets/white_icon.svg";

import {
  VisibilityOff,
  Visibility,
  Email,
  Lock,
  Google,
  Facebook,
} from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../Services/api";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

interface IErrorResponse {
  message: string;
}

interface Data {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Data> = (formData) => {
    const data = {
      email: formData.email,
      fullName: formData.fullName,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    api
      .post("/login/auth", data)
      .then((response) => {
        localStorage.setItem("@e-commerce:token", response.data);
        alert("Usuário logado com sucesso!");
        navigate("/");
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };

  return (
    <Container>
      <ContainerAnimation className="center">
        <ContainerBlueIcon>
          <BlueIconSvg />
        </ContainerBlueIcon>
        <ContainerWhiteIcon>
          <WhiteIconSvg />
        </ContainerWhiteIcon>
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Bem-vindo ao E-CO</Title>
          <Subtitle>Entre para continuar</Subtitle>
          <FormControl
            sx={{
              width: "100%",
              marginBottom: "0.5rem",
              "&:hover fieldset": {
                borderColor: (errors.email?.message as string)
                  ? "var(--red)"
                  : email !== ""
                  ? "var(--blue)"
                  : "var(--button-border)",
              },
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="email"
              type="text"
              sx={{
                "& fieldset": {
                  borderColor: (errors.email?.message as string)
                    ? "var(--red)"
                    : email !== ""
                    ? "var(--blue)"
                    : "var(--button-border)",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Email
                    color={
                      (errors.email?.message as string)
                        ? "error"
                        : email !== ""
                        ? "primary"
                        : "inherit"
                    }
                  />
                </InputAdornment>
              }
              placeholder="Email"
              {...register("email")}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <FormHelperText sx={{ color: "red" }}>
              {(errors.email?.message as string) || " "}
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{ width: "100%", marginBottom: "0.5rem" }}
            variant="outlined"
          >
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              sx={{
                "& fieldset": {
                  borderColor: (errors.password?.message as string)
                    ? "var(--red)"
                    : password !== ""
                    ? "var(--blue)"
                    : "var(--button-border)",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Lock
                    color={
                      (errors.password?.message as string)
                        ? "error"
                        : password !== ""
                        ? "primary"
                        : "inherit"
                    }
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Senha"
              {...register("password")}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <FormHelperText sx={{ color: "red" }}>
              {(errors.password?.message as string) || " "}
            </FormHelperText>
          </FormControl>
          <Button
            color={"white"}
            type={"submit"}
            backgroundColor={"blue"}
            label={"Entrar"}
          />
          <OrLine>OU</OrLine>
          <AlternativeButton type="button" className="center">
            <Google />
            <div className="center">Login com Google</div>
          </AlternativeButton>
          <AlternativeButton type="button" className="center">
            <Facebook />
            <div className="center">Login com Facebook</div>
          </AlternativeButton>
          <ForgetPassword
            type="button"
            onClick={() => {
              navigate("/forget-password");
            }}
          >
            Esqueceu a senha?
          </ForgetPassword>
          <ContainerRegister>
            Não possui uma conta?
            <RegisterButton
              type="button"
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastrar
            </RegisterButton>
          </ContainerRegister>
        </ContainerForm>
      </ContainerAnimation>
    </Container>
  );
}
