import Button from "@mui/material/Button";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import React, { ReactNode } from "react";

// EXAMPLE CALL with PROPS ===============

//import LogoutIcon from "@mui/icons-material/Logout";

// <MuiButton
//   redirectPath={"/packs"}   // optional Link To
//   onClickCallBack={onClickHandler} // optional callback
//   name={"LOGOUT"} // optional name
//   startIcon={<Icon />} // optional Icon (startIcon / endIcon)
//   width={"127px"} // optional
//   height={"36px"} // optional
//   borderRadius={"10px"} // optional
//   color={"inherit"} // optional
// />

// =============================================

type ButtonPropsType = {
  name: string;
  redirectPath?: string;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClickCallBack?: () => void;
  type?: string;
};

export const SuperButton = (props: ButtonPropsType) => {
  const {
    name,
    color,
    redirectPath,
    startIcon,
    endIcon,
    width,
    height,
    borderRadius,
    onClickCallBack,
    type,
  } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    //осуществляет вызов колбэка и переход на страницу если есть redirect в props
    if (redirectPath) {
      navigate(redirectPath);
      // return <Navigate to={redirectPath} />; // format props : "/path"
    }

    if (onClickCallBack) {
      onClickCallBack();
    }
  };

  const location = useLocation();
  const isActive = (redirectPath: string | undefined) => {
    if (redirectPath) {
      return redirectPath === location.pathname;
    }
    // роут из пропсов === текущему пути URL на котором находимся
    // для подкрашивания кнопки в стиль "contained"
  };

  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      sx={{
        width: width, //размеры из пропсов : "60px" либо стандартные
        height: height,
        boxShadow:
          "0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)",
        borderRadius: borderRadius, //из пропсов либо стандартные
      }}
      //если размеры не заданы то принимает размер медиум
      variant={isActive(redirectPath) ? "contained" : "outlined"}
      onClick={handleClick} // props: onClickCallBack={onClickHandler}
      color={color}
      startIcon={startIcon} // передаем иконку как компоненту в пропсах startIcon={<Icon />}
      endIcon={endIcon} // // передаем иконку как компоненту в пропсах endIcon={<Icon />}
    >
      {name ? name : "button"}
    </Button>
  );
};
