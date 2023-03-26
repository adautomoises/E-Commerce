import { useState } from "react";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerAnimation,
  ContainerBlueIcon,
  ContainerWhiteIcon,
  ContainerForm,
} from "./styles";
import { AxiosError } from "axios";

import { ReactComponent as BlueIconSvg } from "../../Assets/blue_icon.svg";
import { ReactComponent as WhiteIconSvg } from "../../Assets/white_icon.svg";
import { Button } from "../../Components/Button";

interface IErrorResponse {
  message: string;
}

export function Home() {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("@e-commerce:token");
  const [roles, setRoles] = useState("");

  const setRole = () => {
    api
      .get("/account/role", {
        params: {
          role: roles,
        },
      })
      .then((response) => {
        alert(response.data);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  const getUsers = () => {
    api
      .get("/account/get")
      .then((response) => {
        alert(response.data);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  const logOut = () => {
    localStorage.removeItem("@e-commerce:token");
    window.location.reload();
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
        <ContainerForm>
          <div
            className={"center"}
            style={{
              width: "100%",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {isAuth ? (
              <>
                <select
                  defaultValue={"ADMIN"}
                  onChange={(event) => {
                    setRoles(event.target.value);
                  }}
                >
                  <option value={"ADMIN"}>ADMIN</option>
                  <option value={"BRAND"}>BRAND</option>
                  <option value={"USER"}>USER</option>
                </select>
                <button onClick={setRole}>ADMINISTRAR</button>
                <button onClick={getUsers}>USUARIOS</button>
                <button onClick={logOut}>DESLOGAR</button>
              </>
            ) : (
              <>
                <Button
                  color={"white"}
                  type={"button"}
                  backgroundColor={"blue"}
                  label={"LOGIN"}
                  onClick={() => {
                    navigate("/login");
                  }}
                />
                <Button
                  color={"white"}
                  type={"button"}
                  backgroundColor={"blue"}
                  label={"CADASTRAR"}
                  onClick={() => {
                    navigate("/register");
                  }}
                />
              </>
            )}
          </div>
        </ContainerForm>
      </ContainerAnimation>
    </Container>
  );
}
