import React, { useState, forwardRef } from "react";
import * as Icons from "@mui/icons-material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";

type IconProps = {
  iconname: keyof typeof Icons;
  errors: string | undefined;
  inputtype: "password" | "text";
};

export const InputComponent = forwardRef<
  HTMLInputElement,
  IconProps & OutlinedInputProps
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [filled, setFilled] = useState("");
  const [inputType, setInputType] = useState<"password" | "text">(
    props.inputtype
  );

  const { iconname, placeholder, inputtype, errors } = props;
  const IconComponent = Icons[iconname];

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ width: "100%", marginBottom: "0.5rem" }}
      variant="outlined"
    >
      <OutlinedInput
        id={`outlined-${placeholder}`}
        type={inputType}
        sx={{
          fontSize: "12px",
          "& fieldset": {
            borderColor: errors
              ? "var(--red)"
              : filled !== ""
              ? "var(--blue)"
              : "var(--button-border)",
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <IconComponent
              color={errors ? "error" : filled !== "" ? "primary" : "inherit"}
            />
          </InputAdornment>
        }
        endAdornment={
          inputtype === "password" && (
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
        placeholder={placeholder}
        {...props}
        ref={ref}
        onChange={(event) => {
          setFilled(event.target.value);
        }}
      />
      <FormHelperText sx={{ color: "var(--red)", height: "1rem" }}>
        {errors !== "undefined" && errors}
      </FormHelperText>
    </FormControl>
  );
});
