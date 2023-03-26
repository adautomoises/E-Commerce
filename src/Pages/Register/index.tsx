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
  ContainerLogin,
  LoginButton,
} from "./styles";
import { AxiosError } from "axios";

import { ReactComponent as BlueIconSvg } from "../../Assets/blue_icon.svg";
import { ReactComponent as WhiteIconSvg } from "../../Assets/white_icon.svg";

import {
  VisibilityOff,
  Visibility,
  Email,
  Lock,
  Person,
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
  fullName: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "As senhas devem ser iguais")
    .required("Campo obrigatório"),
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

export function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      .post("/account/create", data)
      .then((response) => {
        console.log(response.data);
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
          <Title>Vamos Começar</Title>
          <Subtitle>Crie uma nova conta</Subtitle>
          <FormControl
            sx={{
              width: "100%",
              marginBottom: "0.5rem",
              "&:hover fieldset": {
                borderColor: (errors.fullName?.message as string)
                  ? "var(--red)"
                  : email !== ""
                  ? "var(--blue)"
                  : "var(--button-border)",
              },
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="fullName"
              type="text"
              sx={{
                "& fieldset": {
                  borderColor: (errors.fullName?.message as string)
                    ? "var(--red)"
                    : fullName !== ""
                    ? "var(--blue)"
                    : "var(--button-border)",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Person
                    color={
                      (errors.fullName?.message as string)
                        ? "error"
                        : fullName !== ""
                        ? "primary"
                        : "inherit"
                    }
                  />
                </InputAdornment>
              }
              placeholder="Nome Completo"
              {...register("fullName")}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
            <FormHelperText sx={{ color: "red" }}>
              {(errors.fullName?.message as string) || " "}
            </FormHelperText>
          </FormControl>
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
          <FormControl
            sx={{ width: "100%", marginBottom: "0.5rem" }}
            variant="outlined"
          >
            <OutlinedInput
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              sx={{
                "& fieldset": {
                  borderColor: (errors.confirmPassword?.message as string)
                    ? "var(--red)"
                    : confirmPassword !== ""
                    ? "var(--blue)"
                    : "var(--button-border)",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Lock
                    color={
                      (errors.confirmPassword?.message as string)
                        ? "error"
                        : confirmPassword !== ""
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
              placeholder="Confirmar senha"
              {...register("confirmPassword")}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
            <FormHelperText sx={{ color: "red" }}>
              {(errors.confirmPassword?.message as string) || " "}
            </FormHelperText>
          </FormControl>
          <Button
            color={"white"}
            type={"submit"}
            backgroundColor={"blue"}
            label={"Cadastrar"}
          />
          <ContainerLogin>
            Já possui uma conta?
            <LoginButton
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Entrar
            </LoginButton>
          </ContainerLogin>
        </ContainerForm>
      </ContainerAnimation>
    </Container>
  );
}
