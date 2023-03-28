import * as yup from 'yup';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { api } from '../../Services/api';
import { Button } from '../../Components/Button';
import { InputComponent } from '../../Components/InputComponent';
import { ReactComponent as BlueIconSvg } from "../../Assets/blue_icon.svg";
import { ReactComponent as WhiteIconSvg } from "../../Assets/white_icon.svg";
import { Container, ContainerForm, Title, Subtitle, ContainerAnimation, ContainerBlueIcon, ContainerWhiteIcon, ContainerLogin, LoginButton, } from "./styles";

interface IErrorResponse {
  message: string;
}

interface FormData {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup
  .string()
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido')
  .required('Campo obrigatório'),
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

export function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const data = {
      email: formData.email,
      fullName: formData.fullName,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    api
      .post("/account/create", data)
      .then((response) => {
        alert(response.data.fullName + ", sua conta foi criada com sucesso!");
        navigate("/login");
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
          <InputComponent errors={errors.fullName?.message} placeholder="Nome Completo" iconname="Person" inputtype="text" {...register('fullName')} />
          <InputComponent errors={errors.email?.message} placeholder="Email" iconname="Email" inputtype="text" {...register('email')} />
          <InputComponent errors={errors.password?.message} placeholder="Senha" iconname="Lock" inputtype="password" {...register('password')} />
          <InputComponent errors={errors.confirmPassword?.message} placeholder="Confirmar senha" iconname="Lock" inputtype="password" {...register('confirmPassword')} />
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
