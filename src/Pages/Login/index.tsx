import * as yup from 'yup';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Google, Facebook } from '@mui/icons-material';

import { api } from '../../Services/api';
import { InputComponent } from '../../Components/InputComponent';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { ReactComponent as BlueIconSvg } from '../../Assets/blue_icon.svg';
import { ReactComponent as WhiteIconSvg } from '../../Assets/white_icon.svg';
import { Container, ContainerForm, Title, Subtitle, ContainerAnimation, ContainerBlueIcon, ContainerWhiteIcon, OrLine, AlternativeButton, ForgetPassword, ContainerRegister, RegisterButton } from './styles';
import { SnackbarComponent } from '../../Components/SnackbarComponent';

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
  password: yup.string().required('Campo obrigatório'),
});

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [severitySnackbar, setSeveritySnackbar] = useState<"success" | "error" | "warning" | "info">("info");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setLoading(true);
    const data = {
      email: formData.email,
      password: formData.password,
    };
    api
      .post('/login/auth', data)
      .then((response) => {
        setSeveritySnackbar("success");
        setSnackbarMessage("Usuário logado com sucesso! Redirecionando...");
        setShowSnackbar(true);
        localStorage.setItem('@e-commerce:token', response.data);
        setTimeout(() => {
          navigate('/')
        }, 3000);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          setSeveritySnackbar("error");
          setSnackbarMessage(error.response.data.message);
          setShowSnackbar(true);
          setLoading(false);
        }
      });
  };

  return (
    <Container>
      {showSnackbar && (
        <SnackbarComponent message={snackbarMessage} showSnackbar={showSnackbar} handleClose={handleCloseSnackbar} severity={severitySnackbar} />
      )}
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
          <InputComponent errors={errors.email?.message} placeholder="Email" iconname="Email" inputtype="text" {...register('email')} />
          <InputComponent errors={errors.password?.message} placeholder="Password" iconname="Lock" inputtype="password" {...register('password')} />
          <ButtonComponent 
            isLoading={loading} 
            type={'submit'} 
            label={'Entrar'} 
            color={"primary"}
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
              navigate('/forget-password');
            }}
          >
            Esqueceu a senha?
          </ForgetPassword>
          <ContainerRegister>
            Não possui uma conta?
            <RegisterButton
              type="button"
              onClick={() => {
                navigate('/register');
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
