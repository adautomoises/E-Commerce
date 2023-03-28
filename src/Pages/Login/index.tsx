import * as yup from 'yup';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Google, Facebook } from '@mui/icons-material';

import { api } from '../../Services/api';
import { Button } from '../../Components/Button';
import { InputComponent } from '../../Components/InputComponent';
import { ReactComponent as BlueIconSvg } from '../../Assets/blue_icon.svg';
import { ReactComponent as WhiteIconSvg } from '../../Assets/white_icon.svg';
import { Container, ContainerForm, Title, Subtitle, ContainerAnimation, ContainerBlueIcon, ContainerWhiteIcon, OrLine, AlternativeButton, ForgetPassword, ContainerRegister, RegisterButton } from './styles';

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

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const data = {
      email: formData.email,
      password: formData.password,
    };
    api
      .post('/login/auth', data)
      .then((response) => {
        localStorage.setItem('@e-commerce:token', response.data);
        alert('Usuário logado com sucesso!');
        navigate('/');
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
          <InputComponent errors={errors.email?.message} placeholder="Email" iconname="Email" inputtype="text" {...register('email')} />
          <InputComponent errors={errors.password?.message} placeholder="Password" iconname="Lock" inputtype="password" {...register('password')} />
          <Button color={'white'} type={'submit'} backgroundColor={'blue'} label={'Entrar'} />
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
