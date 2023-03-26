import React, { useState } from "react";
import * as Icons from "@mui/icons-material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

type IconProps = {
  iconName: keyof typeof Icons;
};

export function InputComponent(
  props: IconProps & React.InputHTMLAttributes<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = useState(false);

  const { iconName, placeholder, type } = props;
  const IconComponent = Icons[iconName];

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined">{placeholder}</InputLabel>
      <OutlinedInput
        id={"outlined" + iconName}
        type={
          type === "password" ? (showPassword ? "text" : "password") : "text"
        }
        startAdornment={
          <InputAdornment position="start">
            <IconComponent />
          </InputAdornment>
        }
        endAdornment={
          type === "password" && (
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
          )
        }
        label={placeholder}
        placeholder={placeholder}
      />
    </FormControl>
  );
}
