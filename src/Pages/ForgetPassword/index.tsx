import * as yup from 'yup';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { api } from '../../Services/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as BlueIcon } from '../../Assets/blue_icon.svg';
import {
  Body,
  Container,
  HeaderForm,
  FirstForm,
  SecondForm,
  Code,
  ThirdForm,
} from './styles';
import { InputComponent } from '../../Components/InputComponent';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { SnackbarComponent } from '../../Components/SnackbarComponent';
import { InputCodeComponent } from '../../Components/InputCodeComponent';

interface IErrorResponse {
  message: string;
}

interface FormData {
  email: string;
  c0: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido'),
  c0: yup.string(),
  c1: yup.string(),
  c2: yup.string(),
  c3: yup.string(),
  c4: yup.string(),
  c5: yup.string(),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'As senhas devem ser iguais'),
});

export function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [severitySnackbar, setSeveritySnackbar] = useState<
    'success' | 'error' | 'warning' | 'info'
  >('info');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const FirstStep: SubmitHandler<FormData> = (formData) => {
    setLoading(true);
    setEmail(formData.email);
    api
      .get('/login/recovery-password', {
        params: {
          email: formData.email,
        },
      })
      .then((response) => {
        setSeveritySnackbar('success');
        setSnackbarMessage(response.data);
        setShowSnackbar(true);
        setStep(2);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          setSeveritySnackbar('error');
          setSnackbarMessage(error.response.data.message);
          setShowSnackbar(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const SecondStep: SubmitHandler<FormData> = (formData) => {
    setLoading(true);
    const code = parseInt(
      formData.c0 +
        formData.c1 +
        formData.c2 +
        formData.c3 +
        formData.c4 +
        formData.c5
    );
    api
      .get('/login/recovery-password/verify-code', {
        params: {
          email: email,
          code: code,
        },
      })
      .then((response) => {
        setSeveritySnackbar('success');
        setSnackbarMessage('Código validado com sucesso!');
        setShowSnackbar(true);
        setStep(3);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          setSeveritySnackbar('error');
          setSnackbarMessage(error.response.data.message);
          setShowSnackbar(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const ThirdStep: SubmitHandler<FormData> = (formData) => {
    setLoading(true);
    api
      .get('/login/recovery-password/change', {
        params: {
          email: email,
          password: formData.password,
        },
      })
      .then((response) => {
        localStorage.setItem('@e-commerce:token', response.data.token);
        setSeveritySnackbar('success');
        setSnackbarMessage(response.data.message);
        setShowSnackbar(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          setSeveritySnackbar('error');
          setSnackbarMessage(error.response.data.message);
          setShowSnackbar(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Body className="center">
      {showSnackbar && (
        <SnackbarComponent
          message={snackbarMessage}
          showSnackbar={showSnackbar}
          handleClose={handleCloseSnackbar}
          severity={severitySnackbar}
        />
      )}
      <Container>
        <HeaderForm>
          <IconButton
            sx={{ position: 'absolute', top: 0, left: 0 }}
            onClick={() => {
              navigate('/login');
            }}
          >
            <ArrowBack />
          </IconButton>
          {step === 1 && <h1 className="center">Esqueci a Senha</h1>}
          {step === 2 && <h1 className="center">Validar Código</h1>}
          {step === 3 && <h1 className="center">Alterar Senha</h1>}
        </HeaderForm>
        <>
          <BlueIcon />
        </>
        {step === 1 && (
          <FirstForm onSubmit={handleSubmit(FirstStep)}>
            <h2>
              Por favor, insira seu Email abaixo para enviar o código de
              recuperação de senha.
            </h2>
            <InputComponent
              placeholder="Email"
              iconname={'Email'}
              errors={errors.email?.message}
              inputtype={'text'}
              {...register('email')}
            />
            <ButtonComponent
              type={'submit'}
              color={'primary'}
              isLoading={loading}
              label={'Enviar Código'}
            />
          </FirstForm>
        )}
        {step === 2 && (
          <SecondForm onSubmit={handleSubmit(SecondStep)}>
            <h2>
              Por favor, insira o código de recuperação de senha que foi enviado
              para {email}.
            </h2>
            <Code>
              <InputCodeComponent {...register('c0')} />
              <InputCodeComponent {...register('c1')} />
              <InputCodeComponent {...register('c2')} />
              <InputCodeComponent {...register('c3')} />
              <InputCodeComponent {...register('c4')} />
              <InputCodeComponent {...register('c5')} />
            </Code>
            <ButtonComponent
              type={'submit'}
              color={'primary'}
              isLoading={loading}
              label={'Validar Código'}
            />
          </SecondForm>
        )}
        {step === 3 && (
          <ThirdForm onSubmit={handleSubmit(ThirdStep)}>
            <h2>Escolha sua nova senha.</h2>
            <InputComponent
              errors={errors.password?.message}
              iconname={'Lock'}
              inputtype={'password'}
              placeholder={'Senha'}
              {...register('password')}
            />
            <InputComponent
              errors={errors.confirmPassword?.message}
              iconname={'Lock'}
              inputtype={'password'}
              placeholder={'Confirmar senha'}
              {...register('confirmPassword')}
            />
            <ButtonComponent
              type={'submit'}
              color={'success'}
              isLoading={loading}
              label={'Confirmar'}
            />
          </ThirdForm>
        )}
      </Container>
    </Body>
  );
}
